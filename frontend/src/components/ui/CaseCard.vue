<script setup>
import BaseButton from './BaseButton.vue';


defineProps({
  caseItem: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['open'])
</script>

<template>
  <article class="case-card">
    <img
      class="case-card__image"
      :src="caseItem.image"
      :alt="caseItem.title"
    >

    <div class="case-card__header">
      <span class="case-card__badge">
        Кейс № {{ caseItem.number }}
      </span>

      <h3 class="case-card__title">
        {{ caseItem.title }}
      </h3>
    </div>

    <p class="case-card__description">
      {{ caseItem.description }}
    </p>

    <BaseButton @click="emit('open', caseItem)">
      Смотреть кейс
    </BaseButton>
  </article>
</template>

<style scoped>
.case-card {
  height: 100%;
  padding: 40px 42px;
  border-radius: 24px;
  background: var(--color-bg-light);
}

.case-card__image {
  width: 100%;
  height: 245px;
  border-radius: 16px;
  object-fit: cover;
}

.case-card__header {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-top: 28px;
}

.case-card__badge {
  flex-shrink: 0;
  padding: 8px 14px;
  border-radius: 6px;
  background: var(--color-primary);
  color: var(--color-white);
  font-size: 15px;
  font-weight: 700;
}

.case-card__title {
  margin: 0;
  color: var(--color-text);
  font-size: 25px;
  font-weight: 800;
  line-height: 1.2;
}

.case-card__description {
  margin: 22px 0 28px;
  color: var(--color-text);
  font-size: 17px;
  line-height: 1.5;
}

@media (max-width: 560px) {
  .case-card {
    padding: 24px;
  }

  .case-card__image {
    height: 190px;
  }

  .case-card__header {
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
  }

  .case-card__title {
    font-size: 22px;
  }

  .case-card__description {
    font-size: 16px;
  }
}
</style>
