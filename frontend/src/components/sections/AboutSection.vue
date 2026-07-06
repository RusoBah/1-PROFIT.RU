<script setup>
import aboutImageOne from '@/assets/images/about-img1.png'
import aboutImageTwo from '@/assets/images/about-img2.png'
import aboutImageThree from '@/assets/images/about-img3.png'
import okIcon from '@/assets/icons/ok-icon.svg'

const advantageRows = [
  {
    id: 1,
    image: aboutImageOne,
    imageAlt: 'Специалист анализирует базу 1С',
    imagePosition: 'end',
    items: [
      {
        question: 'Очень старая база с кучей доработок? Говорят, что обновить невозможно?',
        answer: 'Мы сделаем!',
      },
      {
        question: 'Нужна интеграция 1С с другой 1С или внешней системой?',
        answer: 'Реализуем',
      },
      {
        question: 'Подрядчик месяцами не может сделать механизм или отчёт? Не справляется?',
        answer: 'Мы сделаем!',
      },
      {
        question: 'Не понимаете, как работают доработки? Откуда цифры в отчётах и печатных формах?',
        answer: 'Разберёмся и объясним',
      },
    ],
  },
  {
    id: 2,
    image: aboutImageTwo,
    imageAlt: 'Разработка и настройка отчётов 1С',
    imagePosition: 'start',
    items: [
      {
        question: 'Внедрение 1С зависло и никто не понимает, что делать дальше?',
        answer: 'Доведём до результата!',
      },
      {
        question: 'База тормозит, отчёты считаются вечность?',
        answer: 'Оптимизируем и ускорим',
      },
      {
        question: 'Обновления, которые ломают доработки?',
        answer: 'Обновим с сохранением рабочего функционала',
      },
      {
        question: 'Никто не берётся за чужие доработки?',
        answer: 'Берёмся, даже за самые страшные',
      },
    ],
  },
  {
    id: 3,
    image: aboutImageThree,
    imageAlt: 'Команда настраивает сервис 1С',
    imagePosition: 'end',
    items: [
      {
        question: 'В базе ошибки, которые “вроде не мешают”, но всё падает при закрытии месяца?',
        answer: 'Найдём причину и устраним',
      },
      {
        question: 'Нужен сложный отчёт, расчёты, данные из разных источников?',
        answer: 'Сделаем, даже если другие отказались',
      },
      {
        question: 'Нет документации, а “разработчик пропал”?',
        answer: 'Разберёмся в коде и наведём порядок',
      },
      {
        question: 'Не знаете куда обратиться по всем выше перечисленным вопросам?',
        answer: 'Обратитесь в Prof IT',
      },
    ],
  },
]
</script>

<template>
  <section id="advantages" class="about section">
    <div class="container">
      <h2 class="about__title">Преимущества работы с нами</h2>

      <div class="about__rows">
        <div
          v-for="row in advantageRows"
          :key="row.id"
          class="about__row"
          :class="`about__row--image-${row.imagePosition}`"
        >
          <div class="about__items">
            <article v-for="item in row.items" :key="item.answer" class="about-item">
              <p class="about-item__question">{{ item.question }}</p>

              <div class="about-item__answer">
                <img class="about-item__icon" :src="okIcon" alt="" aria-hidden="true" />
                <h3 class="about-item__title">{{ item.answer }}</h3>
              </div>
            </article>
          </div>

          <img
            class="about__image"
            :src="row.image"
            :alt="row.imageAlt"
            width="330"
            height="330"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: var(--color-bg-light);
}

.about__title {
  margin: 0 0 58px;
  color: var(--color-primary);
  font-family: var(--font-accent);
  font-size: 46px;
  font-weight: 700;
  line-height: 1.15;
  text-align: center;
}

.about__rows {
  display: flex;
  flex-direction: column;
  gap: 52px;
}

.about__row {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(260px, 1fr);
  align-items: center;
  gap: 56px;
}

.about__row--image-start {
  grid-template-columns: minmax(260px, 1fr) minmax(0, 2fr);
}

.about__row--image-start .about__items {
  order: 2;
}

.about__row--image-start .about__image {
  order: 1;
}

.about__items {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 36px 56px;
}

.about-item__question {
  margin: 0 0 14px;
  color: var(--color-text);
  font-size: 17px;
  font-weight: 600;
  line-height: 26px;
}

.about-item__answer {
  display: grid;
  grid-template-columns: 30px minmax(0, 1fr);
  align-items: start;
  gap: 14px;
}

.about-item__icon {
  width: 30px;
  height: 30px;
  margin-top: 2px;
}

.about-item__title {
  margin: 0;
  color: var(--color-text);
  font-size: 25px;
  font-weight: 800;
  line-height: 1.15;
}

.about__image {
  width: 100%;
  max-width: 330px;
  justify-self: center;
}

@media (max-width: 1024px) {
  .about__title {
    font-size: 38px;
  }

  .about__row,
  .about__row--image-start {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .about__row--image-start .about__items,
  .about__row--image-start .about__image {
    order: initial;
  }

  .about__image {
    max-width: 300px;
  }
}

@media (max-width: 720px) {
  .about {
    padding: 64px 0;
  }

  .about__title {
    margin-bottom: 38px;
    font-size: 30px;
  }

  .about__rows {
    gap: 44px;
  }

  .about__items {
    grid-template-columns: 1fr;
    gap: 26px;
  }

  .about-item__question {
    font-size: 16px;
  }

  .about-item__title {
    font-size: 22px;
  }
}
</style>
