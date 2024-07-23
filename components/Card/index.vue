<script setup lang="ts">
defineProps<{
  textHeader: string;
}>();
</script>

<template>
  <div
    class="w-[24rem] max-w-full h-full transformCard translate-z-[4px] border-black border-2 rounded-md hover:translate-x-[-6px] hover:translate-y-[-6px] hover:transform-gpu hover:shadow-[14px_14px_0px_rgba(0,0,0,1)] shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white"
  >
    <article class="w-full h-full overflow-hidden">
      <div
        class="flex justify-end gap-3 bg-[#69D3E8] p-3 [border-bottom:2px_solid_black]"
      >
        <Icon name="line-md:minus" size="1.2rem" style="color: black" />
        <Icon name="line-md:square" size="1.2rem" style="color: green" />
        <Icon name="line-md:close" style="color: red" size="1.2rem" />
      </div>
      <div class="px-4 sm:px-6 py-4 sm:py-6 text-left h-full">
        <h1
          class="text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4 text-black font-bold"
        >
          {{ textHeader }}
        </h1>
        <p class="mb-3 sm:mb-4 line-clamp-4 text-sm sm:text-base text-black">
          <slot />
        </p>
      </div>
    </article>
  </div>
</template>

<style scoped>
.transformCard {
  transition:
    box-shadow 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),
    transform 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
</style>
