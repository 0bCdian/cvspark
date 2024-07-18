<script setup lang="ts">
defineProps<{
  isOpen: boolean;
}>();
</script>
<template>
  <button :data-open="isOpen">
    <div />
    <div />
    <div />
  </button>
</template>

<style scoped>
button {
  display: flex;
  flex-direction: column;
  width: 2.2rem;
  height: 2.2rem;
  border: 0;
  background: transparent;
  gap: 0.65rem;
}
button > div {
  background: black;
  height: 2px;
  width: 100%;
  border-radius: 5px;
  transition: all 0.5s;
  transform-origin: right;
}
button[data-open="true"] div:first-child {
  transform: rotate(-45deg);
}
button[data-open="true"] div:nth-child(2) {
  opacity: 0;
}
button[data-open="true"] div:last-child {
  transform: rotate(45deg);
}
</style>
