<script setup>
import BaseButton from "@/components/ui/BaseButton.vue";
import ArrowButton from "@/components/ui/ArrowButton.vue";

function prevSlide() {
  console.log("Предыдущий кейс");
}

function nextSlide() {
  console.log("Следующий кейс");
}
</script>

<template>
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
  <BaseButton type="submit"> Отправить </BaseButton>
</template>
