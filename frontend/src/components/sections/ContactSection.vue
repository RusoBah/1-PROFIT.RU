<script setup>
import { reactive } from 'vue'

import formLogo from '@/assets/icons/form-logo.svg'
import formPerson from '@/assets/icons/form-person.png'

const form = reactive({
  name: '',
  phone: '',
  consent: true,
})

const errors = reactive({
  name: '',
  phone: '',
  consent: '',
})

const validateForm = () => {
  errors.name = form.name.trim() === '' ? 'Пожалуйста, введите ваше имя или организацию.' : ''

  if (!form.phone.trim()) {
    errors.phone = 'Введите номер телефона'
  } else if (!/^[\d\s()+-]{10,20}$/.test(form.phone)) {
    errors.phone = 'Введите корректный номер телефона'
  }

  errors.consent = !form.consent
    ? 'Пожалуйста, дайте согласие на обработку персональных данных.'
    : ''

  return !errors.name && !errors.phone && !errors.consent
}

const handleSubmit = () => {
  if (validateForm()) {
    // Здесь можно отправить данные формы на сервер или выполнить другие действия
    console.log('Форма успешно отправлена:', form)
  } else {
    console.log('Ошибка валидации формы:', errors)
  }
}
</script>

<template>
  <section id="contact" class="contact-banner">
    <img class="contact-banner__logo" :src="formLogo" alt="" aria-hidden="true" />

    <div class="container contact-banner__container">
      <div class="contact-banner__content">
        <h2 class="contact-banner__title">Давайте начнем!</h2>

        <p class="contact-banner__text">
          Получите бесплатный аудит или запросите консультацию,<br />
          чтобы узнать, как мы можем помочь вашему бизнесу.
        </p>

        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="contact-form__fields">
            <label class="contact-form__field">
              <span class="contact-form__label">Ваше имя / Организация *</span>
              <input
                v-model.trim="form.name"
                class="contact-form__input"
                type="text"
                name="name"
                placeholder="Ваше имя / Организация *"
                autocomplete="name"
              />

              <span v-if="errors.name" class="contact-form__error">
                {{ errors.name }}
              </span>
            </label>

            <label class="contact-form__field">
              <span class="contact-form__label">Номер телефона *</span>
              <input
                v-model.trim="form.phone"
                class="contact-form__input"
                type="tel"
                name="phone"
                placeholder="Номер телефона *"
                autocomplete="tel"
              />

              <span v-if="errors.phone" class="contact-form__error">
                {{ errors.phone }}
              </span>
            </label>

            <button class="contact-form__submit" type="submit">Получить консультацию</button>
          </div>

          <label class="contact-form__consent">
            <input
              v-model="form.consent"
              class="contact-form__checkbox"
              type="checkbox"
              name="consent"
            />

            <span v-if="errors.consent" class="contact-form__error contact-form__error--consent">
              {{ errors.consent }}
            </span>

            <span>
              Я даю согласие на обработку персональных данных в соответствии с
              <a href="/privacy-policy" target="_blank">Политикой конфиденциальности</a>.
            </span>
          </label>
        </form>
      </div>
    </div>

    <div class="contact-banner__image-wrap" aria-hidden="true">
    <img
      class="contact-banner__image"
      :src="formPerson"
      alt=""
      width="490"
      height="310"
      loading="lazy"
      decoding="async"
    />
    </div>
  </section>
</template>

<style scoped>

.contact-form__field {
  display: grid;
  gap: 6px;
}

.contact-form__error {
  color: var(--color-yellow);
  font-size: 13px;
  font-weight: 600;
  line-height: 1.2;
}

.contact-form__input--error {
  border-color: var(--color-yellow);
}

.contact-banner {
  position: relative;
  overflow: hidden;

  min-height: 460px;
  margin-bottom: 20px;
  padding: 92px 0 74px;
  background: var(--color-primary);
  color: var(--color-white);
}

.contact-banner__logo {
  position: absolute;
  top: 100px;
  left: 0;

  width: 430px;
  height: auto;

  opacity: 1;
  pointer-events: none;
}

.contact-banner__container {
  position: relative;
  z-index: 2;

  display: grid;
  grid-template-columns: minmax(0, 1fr) 470px;
  align-items: center;
  gap: 58px;
}

.contact-banner__content {
  max-width: 900px;
}

.contact-banner__title {
  margin: 0;
  color: var(--color-white);
  font-size: 52px;
  font-weight: 800;
  line-height: 1.1;
}

.contact-banner__text {
  margin: 24px 0 0;
  color: var(--color-white);
  font-size: 20px;
  font-weight: 800;
  line-height: 1.35;
}

.contact-form {
  margin-top: 42px;
}

.contact-form__fields {
  display: grid;
  grid-template-columns: repeat(3, 300px);
  gap: 20px;
  align-items: stretch;
}

.contact-form__field {
  display: block;
}

.contact-form__label {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

.contact-form__input {
  width: 300px;
  height: 58px;
  padding: 0 16px;

  border: 2px solid transparent;
  border-radius: 10px;
  outline: none;
  background: var(--color-white);
  color: var(--color-text);

  font-size: 17px;
  line-height: 1.2;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.contact-form__input::placeholder {
  color: #828282;
  opacity: 1;
}

.contact-form__input:focus {
  border-color: var(--color-yellow);
  box-shadow: 0 0 0 3px rgba(255, 225, 45, 0.28);
}

.contact-form__submit {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 58px;
  padding: 0 24px;

  border: none;
  border-radius: 10px;
  background: var(--color-yellow);
  color: var(--color-text);

  font-size: 17px;
  font-weight: 800;
  line-height: 1.2;
  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;
}

.contact-form__submit:hover {
  background: var(--color-yellow-hover);
}

.contact-form__submit:active {
  transform: translateY(1px);
}

.contact-form__consent {
  display: flex;
  align-items: flex-start;
  gap: 14px;

  margin-top: 20px;

  color: var(--color-white);
  font-size: 15px;
  font-weight: 500;
  line-height: 1.35;
}

.contact-form__checkbox {
  flex: 0 0 auto;

  width: 20px;
  height: 20px;
  margin: 1px 0 0;

  accent-color: var(--color-white);
}

.contact-form__consent a {
  color: var(--color-yellow);
}

.contact-banner__image-wrap {
  position: absolute;
  z-index: 1;
  right: 0;
  bottom: 85px;

  pointer-events: none;
}

.contact-banner__image {
  width: clamp(360px, 28vw, 540px);
  max-width: none;
}

@media (max-width: 1180px) {
  .contact-banner__container {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .contact-form__fields {
    grid-template-columns: repeat(2, 300px);
  }

  .contact-form__submit {
    grid-column: 1 / -1;
  }

  .contact-banner__image {
    width: 360px;
  }
}

@media (max-width: 900px) {
  .contact-banner {
    padding: 72px 0 60px;
  }

  .contact-banner__logo {
    top: 56px;
    left: -190px;
    width: 360px;
    opacity: 0.5;
  }

  .contact-banner__container {
    grid-template-columns: 1fr;
  }

  .contact-banner__content {
    max-width: none;
  }

  .contact-banner__title {
    font-size: 42px;
  }

  .contact-banner__text {
    font-size: 18px;
  }

  .contact-banner__image-wrap {
    display: none;
  }
}

@media (max-width: 560px) {
  .contact-banner {
    padding: 58px 0 48px;
  }

  .contact-banner__title {
    font-size: 34px;
  }

  .contact-banner__text {
    font-size: 16px;
  }

  .contact-banner__text br {
    display: none;
  }

  .contact-form {
    margin-top: 32px;
  }

  .contact-form__fields {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .contact-form__input,
  .contact-form__submit {
    width: 100%;
    min-height: 54px;
    font-size: 16px;
  }

  .contact-form__consent {
    font-size: 14px;
  }
}
</style>
