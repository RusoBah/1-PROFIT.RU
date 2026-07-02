<script setup>
import { ref } from 'vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import { cases } from '../../data/cases'

import ArrowButton from '../ui/ArrowButton.vue'
import CaseCard from '../ui/CaseCard.vue'

const modules = [Pagination, A11y]

const swiperInstance = ref(null)

function onSwiper(swiper) {
  swiperInstance.value = swiper
}

function prevSlide() {
  swiperInstance.value?.slidePrev()
}

function nextSlide() {
  swiperInstance.value?.slideNext()
}

function openCase(caseItem) {
  console.log('Открываем кейс:', caseItem)
}
</script>

<template>
  <section id="cases" class="cases section">
    <div class="container">
      <h2 class="cases__title">
        Наши кейсы
      </h2>

      <div class="cases__controls">
        <ArrowButton
          direction="left"
          aria-label="Предыдущий кейс"
          @click="prevSlide"
        />

        <ArrowButton
          direction="right"
          aria-label="Следующий кейс"
          @click="nextSlide"
        />
      </div>

      <Swiper
        class="cases__slider"
        :modules="modules"
        :slides-per-view="2"
        :space-between="44"
        :pagination="{
          clickable: true,
          el: '.cases__pagination'
        }"
        :breakpoints="{
          0: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          900: {
            slidesPerView: 2,
            spaceBetween: 44
          }
        }"
        @swiper="onSwiper"
      >
        <SwiperSlide
          v-for="caseItem in cases"
          :key="caseItem.id"
        >
          <CaseCard
            :case-item="caseItem"
            @open="openCase"
          />
        </SwiperSlide>
      </Swiper>

      <div class="cases__pagination"></div>
    </div>
  </section>
</template>

<style scoped>
.cases {
  background: var(--color-white);
}

.cases__title {
  margin: 0 0 40px;
  text-align: center;
  color: var(--color-primary);
  font-size: 48px;
  font-weight: 800;
  line-height: 1.2;
}

.cases__controls {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 34px;
}

.cases__slider {
  max-width: 1180px;
  margin: 0 auto;
}

.cases__pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 40px;
}

:deep(.swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  margin: 0 !important;
  border-radius: 999px;
  background: var(--color-primary);
  opacity: 1;
  transition: width 0.2s ease;
}

:deep(.swiper-pagination-bullet-active) {
  width: 32px;
}

:deep(.swiper-slide) {
  height: auto;
}

@media (max-width: 900px) {
  .cases__title {
    font-size: 38px;
  }
}

@media (max-width: 560px) {
  .cases__title {
    font-size: 32px;
  }

  .cases__controls {
    margin-bottom: 24px;
  }
}
</style>