<script setup>
import { computed, onBeforeUnmount, watch } from 'vue'

const props = defineProps({
  caseItem: {
    type: Object,
    default: null,
  },
})

const emit = defineEmits(['close'])

const isOpen = computed(() => Boolean(props.caseItem))

function closeModal() {
  emit('close')
}

function handleKeydown(event) {
  if (event.key === 'Escape') {
    closeModal()
  }
}

watch(isOpen, (opened) => {
  document.body.style.overflow = opened ? 'hidden' : ''

  if (opened) {
    window.addEventListener('keydown', handleKeydown)
  } else {
    window.removeEventListener('keydown', handleKeydown)
  }
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="caseItem"
      class="case-modal"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="`case-modal-title-${caseItem.id}`"
      @click.self="closeModal"
    >
      <article class="case-modal__panel">
        <button
          class="case-modal__close"
          type="button"
          aria-label="Закрыть окно"
          @click="closeModal"
        >
          <span></span>
          <span></span>
        </button>

        <span class="case-modal__badge">
          <span>Кейс № {{ caseItem.number }}</span>
        </span>

        <h2
          :id="`case-modal-title-${caseItem.id}`"
          class="case-modal__title"
        >
          Кейс {{ caseItem.title }}
        </h2>

        <div class="case-modal__intro">
          <div class="case-modal__copy">
            <h3 class="case-modal__subtitle">О компании</h3>
            <p class="case-modal__text">
              {{ caseItem.company || caseItem.description }}
            </p>
          </div>

          <img
            class="case-modal__image"
            :src="caseItem.image"
            :alt="caseItem.title"
          >
        </div>

        <section class="case-modal__result">
          <h3 class="case-modal__subtitle">Что было сделано</h3>
          <p class="case-modal__text">
            {{ caseItem.result || caseItem.description }}
          </p>
        </section>
      </article>
    </div>
  </Teleport>
</template>

<style scoped>
.case-modal {
  position: fixed;
  inset: 0;
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 34px;

  background: rgba(23, 18, 64, 0.42);
}

.case-modal__panel {
  position: relative;

  width: min(100%, 1080px);
  max-height: min(760px, calc(100vh - 68px));
  overflow-y: auto;
  padding: 52px 58px 48px;

  border-radius: 0;
  background: var(--color-white);
  box-shadow: 0 26px 80px rgba(26, 22, 68, 0.2);
}

.case-modal__close {
  position: absolute;
  top: 38px;
  right: 38px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 58px;
  height: 58px;
  border: 0;
  border-radius: 50%;
  background: #f8f7fc;
  cursor: pointer;
}

.case-modal__close span {
  position: absolute;
  width: 24px;
  height: 3px;
  border-radius: 999px;
  background: var(--color-primary);
}

.case-modal__close span:first-child {
  transform: rotate(45deg);
}

.case-modal__close span:last-child {
  transform: rotate(-45deg);
}

.case-modal__badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 34px;
  padding: 0 20px;
  border-radius: 8px;
  background: var(--color-primary);
  color: var(--color-white);

  font-size: 16px;
  font-weight: 800;
  line-height: 1;
  transform: skewX(-14deg);
}

.case-modal__badge span {
  display: inline-flex;
  transform: skewX(14deg);
}

.case-modal__title {
  max-width: calc(100% - 92px);
  margin: 22px 0 32px;
  color: var(--color-primary);
  font-size: 52px;
  font-weight: 800;
  line-height: 1.08;
}

.case-modal__intro {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 500px;
  gap: 54px;
  align-items: start;
}

.case-modal__copy {
  min-width: 0;
}

.case-modal__subtitle {
  margin: 0 0 14px;
  color: var(--color-primary);
  font-size: 27px;
  font-weight: 800;
  line-height: 1.2;
}

.case-modal__text {
  margin: 0;
  color: var(--color-text);
  font-size: 17px;
  font-weight: 500;
  line-height: 1.55;
}

.case-modal__image {
  width: 100%;
  height: 300px;
  border-radius: 14px;
  object-fit: cover;
}

.case-modal__result {
  margin-top: 42px;
}

@media (max-width: 980px) {
  .case-modal__panel {
    padding: 42px 34px 38px;
  }

  .case-modal__intro {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .case-modal__image {
    max-width: 560px;
    height: auto;
  }

  .case-modal__title {
    font-size: 42px;
  }
}

@media (max-width: 620px) {
  .case-modal {
    align-items: stretch;
    padding: 16px;
  }

  .case-modal__panel {
    max-height: calc(100vh - 32px);
    padding: 30px 22px;
  }

  .case-modal__close {
    top: 22px;
    right: 18px;
    width: 46px;
    height: 46px;
  }

  .case-modal__close span {
    width: 20px;
  }

  .case-modal__badge {
    min-height: 32px;
    padding: 0 16px;
    font-size: 14px;
  }

  .case-modal__title {
    max-width: calc(100% - 58px);
    margin-top: 18px;
    font-size: 34px;
  }

  .case-modal__subtitle {
    font-size: 23px;
  }

  .case-modal__text {
    font-size: 16px;
  }
}
</style>
