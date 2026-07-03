<script setup>
import { ref } from 'vue'

import { processSteps } from '@/data/processSteps.js'
import AccordionItem from '@/components/ui/AccordionItem.vue'

const openedStepId = ref(processSteps[0]?.id ?? null) // по умолчанию открываем первый шаг

function toggleStep(stepId) {
  openedStepId.value = openedStepId.value === stepId ? null : stepId
}
</script>

<template>
  <section id="process" class="process section">
    <div class="container">
      <div class="process__head">
        <h2 class="process__title">
          Прозрачный процесс: от идеи к автоматизации
        </h2>

        <p class="process__subtitle">
          Мы работаем структурировано. Каждый этап согласуется с вами, нет неожиданностей.
        </p>
      </div>

      <div class="process__list">
        <AccordionItem
          v-for="step in processSteps"
          :key="step.id"
          :step="step"
          :is-open="openedStepId === step.id"
          @toggle="toggleStep(step.id)"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.process {
  background: var(--color-white);
}

.process__head {
  text-align: center;
}

.process__title {
  margin: 0;
  color: var(--color-text);
  font-size: 46px;
  font-weight: 800;
  line-height: 1.2;
}

.process__subtitle {
  margin: 28px 0 0;
  color: var(--color-text);
  font-size: 18px;
  line-height: 1.45;
}

.process__list {
  max-width: 1120px;
  margin: 44px auto 0;
}

@media (max-width: 900px) {
  .process__title {
    font-size: 38px;
  }
}

@media (max-width: 560px) {
  .process__title {
    font-size: 30px;
  }

  .process__subtitle {
    font-size: 16px;
  }
}
</style>