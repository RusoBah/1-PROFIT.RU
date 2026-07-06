<script setup>
import logoIcon from '@/assets/icons/logo.png'
</script>

<template>
  <footer class="app-footer">
    <div class="container app-footer__inner">
      <div class="app-footer__top">
        <div class="app-footer__brand">
          <a class="app-footer__logo" href="#top" aria-label="Prof IT">
            <img :src="logoIcon" alt="Prof IT" />
          </a>

          <p class="app-footer__support">
            Поддержка пн-пт.<br />
            Круглосуточное сопровождение -<br />
            по договоренности.
          </p>
        </div>

        <address class="app-footer__group">
          <span class="app-footer__title">Адрес</span>
          <a class="app-footer__text" href="https://yandex.ru/maps/?text=г.%20Пенза%2C%20ул.%20Захарова%201А" target="_blank" rel="noreferrer">
            г. Пенза, ул. Захарова 1А
          </a>
        </address>

        <div class="app-footer__group">
          <span class="app-footer__title">Режим работы</span>
          <p class="app-footer__text">
            пн-пт: 9:00-18:00 (МСК)
          </p>
          <p class="app-footer__text app-footer__text--muted">
            Консультация -<br />
            по предварительной записи
          </p>
        </div>

        <div class="app-footer__group">
          <span class="app-footer__title">Контакты</span>
          <a class="app-footer__text" href="tel:+78412302414">+7 (841) 230-24-14</a>
          <a class="app-footer__text" href="mailto:profit@mail.ru">profit@mail.ru</a>

          <a class="app-footer__vk" href="https://vk.com/" target="_blank" rel="noreferrer" aria-label="Prof IT во ВКонтакте">
            vk
          </a>
        </div>
      </div>

      <div class="app-footer__bottom">
        <a href="/privacy-policy">Политика конфиденциальности</a>
        <a href="/user-agreement">Пользовательское соглашение</a>
        <a href="/company-details">Реквизиты компании</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background: var(--color-white);
  color: var(--color-primary-dark);
}

.app-footer__inner {
  padding: 78px 0 58px;
}

.app-footer__top {
  display: grid;
  grid-template-columns: 1.15fr 0.9fr 1fr 0.85fr;
  gap: 64px;
  align-items: start;
}

.app-footer__brand,
.app-footer__group {
  display: grid;
  gap: 24px;
}

.app-footer__group {
  font-style: normal;
}

.app-footer__logo {
  display: inline-flex;
  width: fit-content;
}

.app-footer__logo img {
  width: 270px;
  height: auto;
}

.app-footer__support,
.app-footer__text {
  margin: 0;
  color: var(--color-primary-dark);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.35;
}

.app-footer__title {
  color: var(--color-primary-dark);
  font-size: 20px;
  font-weight: 800;
  line-height: 1.2;
}

.app-footer__text--muted {
  margin-top: -10px;
}

.app-footer a {
  transition:
    color 0.2s ease,
    opacity 0.2s ease,
    transform 0.2s ease;
}

.app-footer a:hover {
  color: var(--color-primary);
}

.app-footer__vk {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 52px;
  height: 52px;
  border-radius: 14px;
  margin-top: -2px;

  background: #0a84ff;
  color: var(--color-white);

  font-size: 22px;
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
}

.app-footer__vk:hover {
  color: var(--color-white);
  opacity: 0.9;
  transform: translateY(-1px);
}

.app-footer__bottom {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 82px;

  color: var(--color-primary-dark);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.25;
}

.app-footer__bottom a {
  width: fit-content;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
}

.app-footer__bottom a:nth-child(2) {
  justify-self: center;
}

.app-footer__bottom a:nth-child(3) {
  justify-self: end;
}

@media (max-width: 1100px) {
  .app-footer__top {
    grid-template-columns: repeat(2, 1fr);
    gap: 48px 56px;
  }

  .app-footer__bottom {
    grid-template-columns: repeat(2, 1fr);
  }

  .app-footer__bottom a:nth-child(2),
  .app-footer__bottom a:nth-child(3) {
    justify-self: start;
  }
}

@media (max-width: 720px) {
  .app-footer__inner {
    padding: 54px 0 42px;
  }

  .app-footer__top,
  .app-footer__bottom {
    grid-template-columns: 1fr;
    gap: 34px;
  }

  .app-footer__brand,
  .app-footer__group {
    gap: 16px;
  }

  .app-footer__logo img {
    width: 220px;
  }

  .app-footer__support,
  .app-footer__text,
  .app-footer__bottom {
    font-size: 16px;
  }

  .app-footer__title {
    font-size: 18px;
  }

  .app-footer__bottom {
    margin-top: 46px;
  }
}
</style>
