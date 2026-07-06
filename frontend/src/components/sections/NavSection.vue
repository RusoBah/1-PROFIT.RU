<script setup>
import { menuItems } from '@/data/navigation'
</script>

<template>
  <nav class="nav-section">
    <div class="container nav-section__container">
      <ul class="nav-section__list">
        <li class="nav-section__item" v-for="item in menuItems" :key="item.href">
          <a :href="item.href" class="nav-section__link">
            {{ item.title }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.nav-section {
  position: relative;
  z-index: 10;
  background: var(--color-primary);
}

.nav-section__container {
  min-height: 52px;
}

.nav-section__list {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(20px, 4.2vw, 54px);
  min-height: 52px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-section__link {
  color: var(--color-white);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;
  white-space: nowrap;

  transition: opacity 0.2s ease;
}

.nav-section__link:hover {
  opacity: 0.75;
}

@media (max-width: 1200px) {
  .nav-section__list {
    gap: 28px;
  }

  .nav-section__link {
    font-size: 15px;
  }
}

@media (max-width: 900px) {
  .nav-section__list {
    justify-content: flex-start;
    overflow-x: auto;
    gap: 28px;
    padding-top: 14px;
    padding-bottom: 14px;
  }

  .nav-section__list::-webkit-scrollbar {
    display: none;
  }
}
</style>
