<script setup>
defineProps({
  type: {
    type: String,
    default: "button",
  },
});

const emits = defineEmits(["click"]);
</script>

<template>
  <button class="base-button" :type="type" @click="emits('click')">
    <slot />
  </button>
</template>

<style scoped>
.base-button {
  background-color: var(--color-yellow);
  border: none;
  padding: 16px 30px;
  color: var(--color-primary-dark);
  font-size: 18px;
  align-items: center;
  justify-content: center;
  font-family: var(--font-primary);
  font-weight: 700;
  font-style: bold;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

.base-button:hover {
  background: var(--color-yellow-hover);
}

.base-button:active {
  transform: translateY(1px);
}
</style>
