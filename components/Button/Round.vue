<script setup lang="ts">
type ButtonSize = "sm" | "md" | "lg" | "xl" | "2xl";

interface Props {
  text: string;
  size?: ButtonSize;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: "md",
  class: "",
});

const sizeClasses = {
  sm: "h-6 px-3 text-xs sm:h-7 sm:px-4 sm:text-sm md:h-8 md:px-4 md:text-sm",
  md: "h-8 px-4 text-sm sm:h-10 sm:px-6 sm:text-base md:h-12 md:px-8 md:text-base",
  lg: "h-10 px-6 text-base sm:h-12 sm:px-8 sm:text-lg md:h-16 md:px-10 md:text-lg",
  xl: "h-12 px-8 text-lg sm:h-16 sm:px-10 sm:text-xl md:h-20 md:px-12 md:text-xl",
  "2xl":
    "h-14 px-10 text-xl sm:h-20 sm:px-12 sm:text-2xl md:h-24 md:px-14 md:text-2xl",
};
</script>

<template>
  <button
    class="primary-button font-black"
    :class="[sizeClasses[size], props.class]"
  >
    {{ text }}
  </button>
</template>

<style scoped>
.primary-button {
  border: 2px solid black;
  box-shadow: 3px 3px 0 0 black;
  background-color: #69d3e8;
  border-radius: 12px;
  align-content: center;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
  transition:
    box-shadow 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),
    transform 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.primary-button:hover {
  box-shadow: 6px 6px 0 0 black;
  transform: translate(-2px, -2px);
}
.primary-button:active {
  box-shadow: 3px 3px 0 0 black;
  transform: translate(2px, 2px);
}
</style>
