<script setup>
import logoIcon from '@/assets/icons/logo.png'
import phoneIcon from '@/assets/icons/Phone.svg'
import BaseButton from '@/components/ui/BaseButton.vue'
import NavSection from '@/components/sections/NavSection.vue'

function scrollToContact() {
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="app-header-wrapper">
    <header class="app-header">
      <div class="container app-header__inner">
        <a class="app-header__logo" href="#top" aria-label="Prof IT">
          <img :src="logoIcon" alt="Prof IT" />
        </a>

        <div class="app-header__actions">
          <a class="app-header__phone" href="tel:+79374380895">
            <img :src="phoneIcon" alt="" class="app-header__phone-icon" aria-hidden="true" />
            <span>+7 937 438 08 95</span>
          </a>

          <BaseButton class="app-header__button" @click="scrollToContact">
            Оставить заявку
          </BaseButton>
        </div>
      </div>
    </header>

    <NavSection />
  </div>
</template>

<style scoped>
.app-header-wrapper {
  position: sticky;
  top: 0;
  z-index: 20;
}

.app-header {
  background: var(--color-white);
}

.app-header__inner {
  display: flex;
  min-height: 96px;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
}

.app-header__logo {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
}

.app-header__logo img {
  width: 270px;
  height: auto;
}

.app-header__actions {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 32px;
}

.app-header__phone {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--color-primary);
  font-size: 20px;
  font-weight: 800;
  white-space: nowrap;
}

.app-header__phone-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--color-yellow);
  color: var(--color-primary);
  font-size: 17px;
  line-height: 1;
  padding: 6px;
}

.app-header__button {
  min-width: 210px;
  min-height: 62px;
  border-radius: 8px;
  padding: 0 32px;
  font-size: 18px;
  font-weight: 800;
  white-space: nowrap;
}

@media (max-width: 900px) {
  .app-header__inner {
    min-height: 84px;
    gap: 20px;
  }

  .app-header__logo img {
    width: 220px;
  }

  .app-header__actions {
    gap: 18px;
  }

  .app-header__phone {
    font-size: 17px;
  }

  .app-header__button {
    min-width: 180px;
    min-height: 54px;
    padding: 0 22px;
    font-size: 16px;
  }
}

@media (max-width: 720px) {
  .app-header__inner {
    flex-wrap: wrap;
    padding: 14px 0;
  }

  .app-header__actions {
    width: 100%;
    justify-content: space-between;
  }
}

@media (max-width: 480px) {
  .app-header__logo img {
    width: 190px;
  }

  .app-header__actions {
    align-items: stretch;
    flex-direction: column;
  }

  .app-header__phone {
    justify-content: center;
  }

  .app-header__button {
    width: 100%;
  }
}
</style>
