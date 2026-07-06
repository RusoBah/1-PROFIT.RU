<script setup>
import heroImage from '@/assets/images/hero-1c.png'
import { heroServices } from '@/data/heroServices'
</script>

<template>
  <section class="hero">
    <div class="container">
      <div class="hero__main">
        <div class="hero__content">
          <h1 class="hero__title">
            Обслуживание, доработка и продажа любых продуктов 1С
          </h1>
          <p class="hero__text">
            Благодаря нашим IT-решениям вы сокращаете ручной труд, ускоряете
            работу компании и минимизируете ошибки — всё это просто, безопасно и
            под ваши задачи.
          </p>
        </div>
        <div class="hero__image">
          <img
            :src="heroImage"
            alt="Интерфейс 1С для автоматизации бизнеса"
            width="569"
            height="409"
            decoding="async"
            fetchpriority="high"
          />
        </div>
      </div>
    </div>
    <div class="container hero__services">
      <article v-for="service in heroServices" :key="service.id" class="hero-card">
        <div class="hero-card__content">
          <h2 class="hero-card__title">
            {{ service.title }}
          </h2>

          <p class="hero-card__text">
            {{ service.text }}
          </p>
        </div>

        <img
          class="hero-card__icon"
          :src="service.icon"
          :alt="service.title"
          width="78"
          height="78"
          loading="lazy"
          decoding="async"
        />
      </article>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: var(--color-bg-light);
}
.hero__main {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.hero__content {
  max-width: 540px;
}
.hero__title {
  font-size: 54px;
  font-weight: 700;
  line-height: 60px;
  font-family: var(--font-primary);
  color: var(--color-primary);
}
.hero__text {
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  font-style: medium;
  font-family: var(--font-primary);
  color: var(--color-primary-dark);
  margin-top: 20px;
}
.hero__picture {
  display: flex;
  justify-content: center;
}

.hero__image {
  width: 100%;
  max-width: 650px;
}

.hero__services {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  padding: 70px 0;
}

.hero-card {
  position: relative;
  overflow: hidden;
  min-height: 172px;
  padding: 30px 112px 28px 30px;

  border-radius: 20px;
  background: var(--color-white);
  box-shadow: 0 20px 60px rgba(51, 43, 140, 0.08);
}

.hero-card__content {
  position: relative;
  z-index: 1;
  max-width: 235px;
}

.hero-card__title {
  margin: 0 0 14px;
  color: var(--color-text);
  font-size: 24px;
  font-weight: 800;
  line-height: 1.15;
}

.hero-card__text {
  margin: 0;
  color: var(--color-text);
  font-size: 15px;
  font-weight: 500;
  line-height: 1.3;
}

.hero-card__icon {
  position: absolute;
  right: 24px;
  bottom: 20px;
  width: 78px;
  height: 78px;
  object-fit: contain;
}

@media (max-width: 1100px) {
  .hero__main {
    gap: 40px;
  }

  .hero__title {
    font-size: 46px;
  }

  .hero__text {
    font-size: 18px;
  }

  .hero__services {
    gap: 18px;
  }

  .hero-card {
    min-height: 160px;
    padding: 26px 92px 24px 24px;
  }

  .hero-card__title {
    font-size: 22px;
  }

  .hero-card__text {
    font-size: 14px;
  }

  .hero-card__icon {
    right: 18px;
    bottom: 20px;
    width: 66px;
    height: 66px;
  }
}

@media (max-width: 900px) {
  .hero {
    padding: 60px 0;
  }

  .hero__main {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .hero__content {
    max-width: none;
  }

  .hero__title {
    font-size: 40px;
  }

  .hero__services {
    grid-template-columns: 1fr;
    margin-top: 50px;
  }
}

@media (max-width: 560px) {
  .hero__title {
    font-size: 32px;
  }

  .hero__text {
    margin-top: 28px;
    font-size: 16px;
  }

  .hero-card {
    min-height: 160px;
    padding: 26px 94px 24px 24px;
  }

  .hero-card__title {
    font-size: 22px;
  }

  .hero-card__icon {
    right: 20px;
    bottom: 24px;
    width: 82px;
    height: 82px;
  }
}
</style>
