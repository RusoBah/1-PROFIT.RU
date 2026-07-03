<script setup>
/**
 * Принимает на вход объект(шаг) и состояние.
 */
defineProps({
  step: {
    type: Object,
    required: true,
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
})

// объявляет событие, которое компонент может «выстрелить» наружу. Сам компонент ничего не решает — он просит родителя переключить состояние
const emit = defineEmits(['toggle'])
</script>

<template>
  <article class="process-step" :class="{ 'process-step--open': isOpen }">
    <div class="process-step__number">
      {{ step.number }}
    </div>

    <div class="process-step__line"></div>

    <div class="process-step__card">
      <div class="process-step__top">
        <h3 class="process-step__title">
          {{ step.title }}
        </h3>

        <div class="process-step__period">
          <span>{{ step.period }}</span>
        </div>

        <button
          class="process-step__toggle"
          type="button"
          :aria-expanded="isOpen"
          :aria-label="isOpen ? 'Свернуть этап' : 'Развернуть этап'"
          @click="emit('toggle')"
        >
          <span class="process-step__arrow"></span>
        </button>
      </div>

      <button class="process-step__more" type="button" @click="emit('toggle')">Подробнее</button>

      <Transition name="expand">
        <div v-if="isOpen" class="process-step__body">
          <p class="process-step__text">
            {{ step.text }}
          </p>

          <p class="process-step__result"><span>Результат:</span> {{ step.result }}</p>
        </div>
      </Transition>
    </div>
  </article>
</template>

<style scoped>
.process-step {
  position: relative;
  display: grid;
  grid-template-columns: 64px 1fr;
  column-gap: 28px;
}

.expand-enter-active, .expand-leave-active {
  transition: opacity 0.2s ease;
}
.expand-enter-from, .expand-leave-to {
  opacity: 0;
}

.process-step:not(:last-child) {
  padding-bottom: 28px;
}

.process-step__number {
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;
  margin: 18px auto 0;

  border: 6px solid var(--color-primary);
  border-radius: 50%;

  background: var(--color-white);
  color: var(--color-primary);

  font-size: 18px;
  font-weight: 800;
}

.process-step__number::after {
  content: '';
  position: absolute;
  top: 50%;
  left: calc(100% + 6px);

  width: 34px;
  height: 2px;

  background-image: linear-gradient(to right, var(--color-primary) 0 6px, transparent 6px 14px);
  background-size: 14px 2px;
  opacity: 0.9;
  transform: translateY(-50%);
}

.process-step__line {
  position: absolute;
  top: 62px;
  bottom: -18px;
  left: 31px;

  width: 2px;

  background-image: linear-gradient(to bottom, var(--color-primary) 0 6px, transparent 6px 18px);
  background-size: 2px 18px;
  opacity: 0.9;
}

.process-step:last-child .process-step__line {
  display: none;
}

.process-step__card {
  min-height: 112px;
  padding: 48px 50px 42px;

  border-radius: 26px;
  background: var(--color-white);
  box-shadow: 0 34px 80px rgba(51, 43, 140, 0.16);
}

.process-step__top {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto auto;
  align-items: flex-start;
  column-gap: 30px;
}

.process-step__title {
  margin: 0;
  color: var(--color-text);
  font-size: 32px;
  font-weight: 800;
  line-height: 1.2;
}

.process-step__period {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 0 26px;
  border-radius: 7px;
  background: var(--color-primary);
  color: var(--color-white);
  font-size: 21px;
  font-weight: 800;
  white-space: nowrap;
  transform: skewX(-16deg);
  transform-origin: center;
}

.process-step__period span {
  display: block;
  transform: skewX(16deg);
}

.process-step__toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 42px;
  height: 42px;

  border: none;
  background: transparent;
  color: var(--color-primary);

  cursor: pointer;
}

.process-step__arrow {
  width: 15px;
  height: 15px;

  border-right: 3px solid currentColor;
  border-bottom: 3px solid currentColor;

  transform: rotate(45deg);
  transition: transform 0.2s ease;
}

.process-step--open .process-step__arrow {
  transform: rotate(225deg);
}

.process-step__more {
  margin-top: 28px;
  padding: 0;

  border: none;
  background: transparent;
  color: var(--color-primary);

  font-size: 22px;
  font-weight: 500;
  cursor: pointer;
}

.process-step__body {
  margin-top: 26px;
}

.process-step__text {
  margin: 0;

  color: var(--color-text);
  font-size: 22px;
  line-height: 1.55;
}

.process-step__result {
  margin: 18px 0 0;

  color: var(--color-text);
  font-size: 22px;
  line-height: 1.55;
}

.process-step__result span {
  color: var(--color-primary);
  font-weight: 700;
}

@media (max-width: 900px) {
  .process-step {
    grid-template-columns: 48px 1fr;
    column-gap: 16px;
  }

  .process-step__line {
    left: 23px;
  }

  .process-step__number {
    width: 38px;
    height: 38px;
    border-width: 5px;
    font-size: 15px;
  }

  .process-step__number::after {
    left: calc(100% + 5px);
    width: 21px;
  }

  .process-step__card {
    padding: 32px;
  }

  .process-step__top {
    grid-template-columns: minmax(0, 1fr) auto;
    row-gap: 18px;
  }

  .process-step__title {
    grid-column: 1 / -1;
    font-size: 28px;
  }
}

@media (max-width: 560px) {
  .process-step {
    grid-template-columns: 40px 1fr;
    column-gap: 12px;
  }

  .process-step__line {
    top: 54px;
    bottom: -18px;
    left: 19px;
  }

  .process-step__number {
    width: 32px;
    height: 32px;
    margin-top: 18px;
    border-width: 4px;
    font-size: 13px;
  }

  .process-step__number::after {
    left: calc(100% + 4px);
    width: 16px;
  }

  .process-step__card {
    padding: 22px;
  }

  .process-step__top {
    column-gap: 16px;
  }

  .process-step__title {
    font-size: 21px;
  }

  .process-step__more {
    margin-top: 22px;
    font-size: 18px;
  }

  .process-step__period {
    font-size: 13px;
    padding: 0 14px;
  }

  .process-step__text,
  .process-step__result {
    font-size: 16px;
  }
}
</style>
