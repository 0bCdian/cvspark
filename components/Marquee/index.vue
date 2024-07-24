<script setup lang="ts">
defineProps<{ items: string[] }>();
</script>
<template>
  <div
    class="relative flex w-full overflow-x-hidden [border-bottom:4px_solid_black] bg-white bg-[radial-gradient(#80808080_1px,transparent_1px)] [background-size:16px_16px]"
  >
    <div class="animate-marquee whitespace-nowrap py-4 mt-4">
      <template v-for="(item, index) in items" :key="index">
        <span class="mx-24 text-4xl">{{ item }}</span>
        <svg
          viewBox="0 0 416 550"
          class="inline-block w-[45px] m800:w-[35px] fill-text dark:fill-darkText"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M222.3 204.2C480 135.1 407.1 8.90041 218.5 197.6C407.2 8.90041 280.9 -63.8996 211.9 193.8C281 -63.8996 135.2 -63.8996 204.2 193.8C135.1 -63.9996 8.89981 8.90039 197.5 197.5C8.89981 8.90039 -64.0002 135.1 193.7 204.2C-64.0002 135.1 -64.0002 280.9 193.7 211.9C-64.0002 281 8.89981 407.2 197.5 218.5C8.79982 407.2 135.1 480 204.1 222.3C135 480 280.8 480 211.8 222.3C280.9 480 407.1 407.1 218.4 218.5C407.1 407.2 479.9 280.9 222.2 211.9C480 280.9 480 135.1 222.3 204.2Z"
          />
        </svg>
      </template>
    </div>
    <div class="absolute top-0 animate-marquee2 whitespace-nowrap mt-4 py-4">
      <template v-for="(item, index) in items" :key="index">
        <span class="mx-24 text-4xl">{{ item }}</span>
        <svg
          viewBox="0 0 416 550"
          class="inline block w-[45px] m800:w-[35px] fill-text dark:fill-darkText"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M222.3 204.2C480 135.1 407.1 8.90041 218.5 197.6C407.2 8.90041 280.9 -63.8996 211.9 193.8C281 -63.8996 135.2 -63.8996 204.2 193.8C135.1 -63.9996 8.89981 8.90039 197.5 197.5C8.89981 8.90039 -64.0002 135.1 193.7 204.2C-64.0002 135.1 -64.0002 280.9 193.7 211.9C-64.0002 281 8.89981 407.2 197.5 218.5C8.79982 407.2 135.1 480 204.1 222.3C135 480 280.8 480 211.8 222.3C280.9 480 407.1 407.1 218.4 218.5C407.1 407.2 479.9 280.9 222.2 211.9C480 280.9 480 135.1 222.3 204.2Z"
          />
        </svg>
      </template>
    </div>
  </div>
</template>
