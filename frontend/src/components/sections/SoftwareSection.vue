<script setup>
import downloadIcon from '../../assets/icons/download.svg'
import androidIcon from '../../assets/icons/android.svg'

const documents = [
  {
    id: 1,
    title: 'Инструкция по установке',
    href: '/docs/install.pdf',
  },
  {
    id: 2,
    title: 'Инструкция по эксплуатации',
    href: '/docs/manual.pdf',
  },
  {
    id: 3,
    title: 'Руководство пользователя',
    href: '/docs/user-guide.pdf',
  },
  {
    id: 4,
    title: 'Техническая архитектура',
    href: '/docs/architecture.pdf',
  },
  {
    id: 5,
    title: 'Функциональные характеристики',
    href: '/docs/features.pdf',
  },
]
</script>

<template>
  <section id="software" class="software section">
    <div class="container">
      <div class="software__head">
        <h2 class="software__title">
          Программное обеспечение<br>
          «ПРОФ-ИТ СКЛАД»
        </h2>

        <div class="software__description">
          <p>
            ПРОФ-ИТ СКЛАД является свободным программным обеспечением,
            полностью бесплатным, не требует оплаты, не содержит рекламы
            и имеет полный функционал.
          </p>

          <p>
            Активация экземпляра продукта по лицензионному ключу не предусмотрена.
          </p>
        </div>
      </div>

      <div class="software__card">
        <div class="software-docs">
          <h3 class="software-docs__title">
            Документация
          </h3>

          <ul class="software-docs__list">
            <li
              v-for="document in documents"
              :key="document.id"
              class="software-docs__item"
            >
              <a
                class="software-docs__link"
                :href="document.href"
                download
              >
                <span>{{ document.title }}</span>

                <img
                  class="software-docs__icon"
                  :src="downloadIcon"
                  alt=""
                  aria-hidden="true"
                >
              </a>
            </li>
          </ul>
        </div>

        <div class="software-download">
          <h3 class="software-download__title">
            Скачать приложение
          </h3>

          <p class="software-download__text">
            Актуальная версия приложения для Android.<br>
            Установочный файл в формате APK.
          </p>

          <a
            class="software-download__button"
            href="/files/profit-sklad.apk"
            download
          >
            <img
              class="software-download__button-icon"
              :src="androidIcon"
              alt=""
              aria-hidden="true"
            >

            <span>Скачать APK (Android)</span>
          </a>

          <p class="software-download__note">
            Файл проверен и безопасен для загрузки
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.software {
  background: var(--color-bg-light);
}

.software__head {
  max-width: 1100px;
  margin: 0 auto;
}

.software__title {
  margin: 0;
  color: var(--color-text);
  font-size: 52px;
  font-weight: 800;
  line-height: 1.12;
  text-align: center;
}

.software__description {
  max-width: 1050px;
  margin: 48px auto 0;
  color: var(--color-text);
  font-size: 22px;
  line-height: 1.45;
}

.software__description p {
  margin: 0;
}

.software__description p + p {
  margin-top: 30px;
}

.software__card {
  display: grid;
  grid-template-columns: 1fr 0.95fr;
  gap: 56px;

  max-width: 1100px;
  margin: 36px auto 0;
  padding: 36px;

  border-radius: 22px;
  background: var(--color-white);
  box-shadow: 0 20px 60px rgba(40, 32, 102, 0.08);
}

.software-docs__title,
.software-download__title {
  margin: 0;
  color: var(--color-text);
  font-size: 28px;
  font-weight: 800;
  line-height: 1.2;
}

.software-docs__list {
  display: grid;
  gap: 22px;

  margin: 32px 0 0;
  padding: 0;

  list-style: none;
}

.software-docs__link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  color: var(--color-text);
  font-size: 18px;
  line-height: 1.25;

  transition: color 0.2s ease;
}

.software-docs__link:hover {
  color: var(--color-primary);
}

.software-docs__icon {
  width: 22px;
  height: 22px;
  object-fit: contain;
  opacity: 0.45;
  transition: opacity 0.2s ease;
}

.software-docs__link:hover .software-docs__icon {
  opacity: 1;
}

.software-download {
  padding: 28px 24px 24px;

  border-radius: 12px;
  background: var(--color-bg-light);

  text-align: center;
}

.software-download__text {
  margin: 28px 0 0;
  color: var(--color-text);
  font-size: 18px;
  line-height: 1.45;
}

.software-download__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  width: 100%;
  min-height: 58px;
  margin-top: 26px;
  padding: 0 24px;

  border-radius: 8px;
  background: var(--color-yellow);
  color: var(--color-text);

  font-size: 18px;
  font-weight: 800;

  transition: background 0.2s ease, transform 0.2s ease;
}

.software-download__button:hover {
  background: var(--color-yellow-hover);
}

.software-download__button:active {
  transform: translateY(1px);
}

.software-download__button-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.software-download__note {
  margin: 16px 0 0;
  color: #aaaab5;
  font-size: 16px;
  line-height: 1.4;
}

@media (max-width: 1100px) {
  .software__title {
    font-size: 44px;
  }

  .software__description {
    font-size: 20px;
  }

  .software__card {
    gap: 32px;
  }
}

@media (max-width: 900px) {
  .software__card {
    grid-template-columns: 1fr;
  }

  .software__title {
    font-size: 38px;
  }
}

@media (max-width: 560px) {
  .software__title {
    font-size: 30px;
  }

  .software__description {
    margin-top: 32px;
    font-size: 16px;
  }

  .software__card {
    padding: 24px;
  }

  .software-docs__title,
  .software-download__title {
    font-size: 24px;
  }

  .software-docs__link,
  .software-download__text,
  .software-download__button {
    font-size: 16px;
  }
}
</style>