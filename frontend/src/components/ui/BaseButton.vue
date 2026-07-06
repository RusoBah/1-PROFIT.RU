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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-yellow);
  border: none;
  min-height: 58px;
  padding: 16px 28px;
  border-radius: 8px;
  color: var(--color-primary-dark);
  font-size: 17px;
  font-family: var(--font-primary);
  font-weight: 700;
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
