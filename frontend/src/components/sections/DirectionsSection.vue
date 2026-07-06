<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import { directions } from '@/data/directions'
</script>

<template>
  <section id="services" class="directions section">
    <div class="container">
      <div class="directions__head">
        <h2 class="directions__title">
          Три направления, одна цель —<br />
          автоматизация вашего бизнеса!
        </h2>

        <p class="directions__subtitle">
          В зависимости от вашей ситуации предлагаем специализированные решения
        </p>
      </div>

      <div class="directions__grid">
        <article v-for="direction in directions" :key="direction.id" class="direction-card">
             <div>
            <img
              class="direction-card__icon"
              :src="direction.icon"
              :alt="direction.title"
              width="88"
              height="88"
              loading="lazy"
              decoding="async"
            >

            <h3 class="direction-card__title">
              {{ direction.title }}
            </h3>

            <p class="direction-card__text">
              {{ direction.description }}
            </p>
          </div>
          <BaseButton
            class="direction-card__button"
            @click="$emit('open-modal', direction.id)"
          >
            {{ direction.buttonText }}
          </BaseButton>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.directions {
  background: var(--color-bg-light);
}

.directions__head {
  text-align: center;
}

.directions__title {
  margin: 0;
  color: var(--color-text);
  font-size: 48px;
  font-weight: 800;
  line-height: 1.2;
}

.directions__subtitle {
  margin: 32px 0 0;
  color: var(--color-text);
  font-size: 20px;
  line-height: 1.4;
}

.directions__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 36px;
  margin-top: 46px;
}

.direction-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 560px;
  padding: 38px 34px 34px;

  border-radius: 20px;
  background: var(--color-white);
  box-shadow: 0 20px 60px rgba(40, 32, 102, 0.08);
}

.direction-card__icon {
  width: 88px;
  height: 88px;
  object-fit: contain;
  margin-bottom: 44px;
}

.direction-card__title {
  margin: 0;
  color: var(--color-text);
  font-size: 28px;
  font-weight: 800;
  line-height: 1.15;
}

.direction-card__text {
  margin: 24px 0 0;
  color: var(--color-text);
  font-size: 18px;
  line-height: 1.5;
}

.direction-card__button {
  width: 100%;
  margin-top: 32px;
}

@media (max-width: 1100px) {
  .directions__title {
    font-size: 40px;
  }

  .directions__grid {
    gap: 24px;
  }

  .direction-card {
    padding: 30px 26px;
  }

  .direction-card__title {
    font-size: 24px;
  }

  .direction-card__text {
    font-size: 16px;
  }
}

@media (max-width: 900px) {
  .directions__grid {
    grid-template-columns: 1fr;
  }

  .direction-card {
    min-height: auto;
  }

  .direction-card__icon {
    margin-bottom: 28px;
  }
}

@media (max-width: 560px) {
  .directions__title {
    font-size: 30px;
  }

  .directions__subtitle {
    font-size: 16px;
  }

  .direction-card {
    padding: 24px;
  }

  .direction-card__title {
    font-size: 22px;
  }

  .direction-card__text {
    font-size: 16px;
  }
}
</style>
