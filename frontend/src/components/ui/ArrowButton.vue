<script setup>
import arrowBackIcon from "../../assets/icons/arrow_back.png";
import arrowForwardIcon from "../../assets/icons/arrow_forward.png";

const props = defineProps({
  direction: {
    type: String,
    default: "right",
    validator: (value) => ["left", "right"].includes(value),
  },

  variant: {
    type: String,
    default: "outline",
    validator: (value) => ["outline", "yellow"].includes(value),
  },

  ariaLabel: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["click"]);

const getIcon = () => {
  return props.direction === "left" ? arrowBackIcon : arrowForwardIcon;
};
</script>

<template>
  <button
    class="arrow-button"
    :class="`arrow-button--${variant}`"
    type="button"
    :aria-label="ariaLabel || (direction === 'left' ? 'Назад' : 'Вперёд')"
    @click="emit('click')"
  >
    <img
      class="arrow-button__icon"
      :src="getIcon()"
      alt=""
      aria-hidden="true"
    />
  </button>
</template>

<style scoped>
.arrow-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 60px;
  height: 60px;

  border: 1px solid var(--color-primary);
  border-radius: 50%;

  background: transparent;
  cursor: pointer;

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.arrow-button:hover {
  background: rgba(51, 43, 140, 0.08);
}

.arrow-button:active {
  transform: translateY(1px);
  background: var(--color-yellow);
}

.arrow-button--yellow {
  border-color: var(--color-yellow);
  background: var(--color-yellow);
}

.arrow-button--yellow:hover {
  border-color: var(--color-yellow-hover);
  background: var(--color-yellow-hover);
}

.arrow-button__icon {
  width: 18px;
  height: 18px;
  object-fit: contain;
  pointer-events: none;
}
</style>
