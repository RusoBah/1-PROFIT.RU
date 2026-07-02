<script setup>
import problemAutoIcon from '@/assets/icons/problem-auto.png'
import problemDataIcon from '@/assets/icons/problem-data.png'
import problemIntegrationIcon from '@/assets/icons/problem-integration.png'
import problemManualIcon from '@/assets/icons/problem-manual.png'
import problemTransferIcon from '@/assets/icons/problem-transfer.png'
import problemVersionIcon from '@/assets/icons/problem-version.png'

const problemItems = [
  {
    id: 1,
    title: 'Автоматизация бизнес-процессов',
    text: 'Автоматизация рутинных задач',
    icon: problemAutoIcon,
  },
  {
    id: 2,
    title: 'Интеграция между 1С и сайтами, сервисами, оборудованием',
    text: 'Упрощение взаимодействия между системами',
    icon: problemIntegrationIcon,
  },
  {
    id: 3,
    title: 'Снижение ручной работы',
    text: 'Минимизация необходимости ручного переноса данных',
    icon: problemManualIcon,
  },
  {
    id: 4,
    title: 'Переходы между версиями',
    text: 'Упрощение работы с разными версиями 1С',
    icon: problemVersionIcon,
  },
  {
    id: 5,
    title: 'Перенос данных',
    text: 'Упрощение переноса данных между системами',
    icon: problemTransferIcon,
  },
  {
    id: 6,
    title: 'Объединение данных',
    text: 'Синхронизация данных из разных источников',
    icon: problemDataIcon,
  },
]
</script>

<template>
  <section id="about" class="problems section">
    <div class="container">
      <h2 class="problems__title">
        Ваша компания теряет время и деньги<br>
        на рутинных операциях?
      </h2>

      <div class="problems__intro">
        <p class="problems__intro-text">
          Мы автоматизируем бизнес-процессы, интегрируем 1С
          с сайтами, сервисами и оборудованием, оптимизируем данные
          и минимизируем ручной труд. Вы получаете ускорение работы,
          меньше ошибок и полную синхронизацию данных между системами.
        </p>

        <p class="problems__intro-text">
          Работайте быстрее и эффективнее — уже с первого месяца после
          внедрения. Бесплатный аудит и индивидуальные решения под ваши задачи.
        </p>
      </div>

      <div class="problems__grid">
        <article
          v-for="item in problemItems"
          :key="item.id"
          class="problem-item"
        >
          <img
            class="problem-item__icon"
            :src="item.icon"
            :alt="item.title"
          >

          <h3 class="problem-item__title">
            {{ item.title }}
          </h3>

          <p class="problem-item__text">
            {{ item.text }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.problems {
  background: var(--color-white);
}

.problems__title {
  margin: 0;
  color: var(--color-primary);
  font-size: 44px;
  font-weight: 800;
  line-height: 1.18;
  text-align: center;
}

.problems__intro {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 120px;
  max-width: 1120px;
  margin: 56px auto 0;
}

.problems__intro-text {
  margin: 0;
  color: var(--color-text);
  font-size: 17px;
  line-height: 1.55;
}

.problems__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 72px;
  column-gap: 80px;
  margin-top: 76px;
}

.problem-item {
  text-align: center;
}

.problem-item__icon {
  width: 76px;
  height: 76px;
  object-fit: contain;
  margin: 0 auto 22px;
}

.problem-item__title {
  max-width: 360px;
  margin: 0 auto;
  color: var(--color-primary);
  font-size: 25px;
  font-weight: 800;
  line-height: 1.2;
}

.problem-item__text {
  max-width: 330px;
  margin: 18px auto 0;
  color: var(--color-text);
  font-size: 16px;
  line-height: 1.45;
}

@media (max-width: 1100px) {
  .problems__title {
    font-size: 38px;
  }

  .problems__intro {
    gap: 60px;
  }

  .problems__grid {
    column-gap: 40px;
  }

  .problem-item__title {
    font-size: 22px;
  }
}

@media (max-width: 900px) {
  .problems__intro {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .problems__grid {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 56px;
  }
}

@media (max-width: 560px) {
  .problems__title {
    font-size: 30px;
  }

  .problems__grid {
    grid-template-columns: 1fr;
    margin-top: 56px;
  }

  .problem-item__title {
    font-size: 21px;
  }
}
</style>