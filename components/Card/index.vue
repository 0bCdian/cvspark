<script setup lang="ts">
defineProps<{
  textHeader: string;
  imgSrc: string;
}>();
</script>
<template>
  <div
    class="w-[24rem] h-full transformCard translate-z-[4px] border-black border-2 rounded-md hover:translate-x-[-6px] hover:translate-y[-6px] hover:transform-gpu hover:shadow-[14px_14px_0px_rgba(0,0,0,1)] shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white"
  >
    <NuxtLink to="" class="block cursor-pointer">
      <article class="w-full h-full">
        <figure class="w-full h-1/2 border-black border-b-2">
          <img
            :src="imgSrc"
            alt="thumbnail"
            class="w-full h-full object-cover"
          />
        </figure>
        <div class="px-6 py-5 text-left h-full">
          <h1 class="text-xl mb-4">{{ textHeader }}</h1>
          <p class="mb-4 line-clamp-4"><slot /></p>
        </div>
      </article>
    </NuxtLink>
  </div>
</template>

<style scoped>
.transformCard {
  transition:
    box-shadow 0.25s cubic-bezier(0.645, 0.045, 0.355, 1),
    transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
}
</style>
