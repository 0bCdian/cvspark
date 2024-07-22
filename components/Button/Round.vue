<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>
<template>
  <button class="primary-button">
    {{ text }}
  </button>
</template>

<style scoped>
.primary-button {
  border: 2px solid black;
  box-shadow: 3px 3px 0 0 black;
  background-color: #f7cb45;
  border-radius: 12px;
  align-content: center;
  justify-content: center;
  align-items: center;
  height: 64px;
  color: black;
  padding: 0 32px;
  font-weight: 700;
  font-size: 1.5rem;
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
