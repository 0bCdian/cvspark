<script setup lang="ts">
defineProps<{
  textHeader: string;
}>();
</script>
<template>
  <div
    class="ml-[1rem] w-[24rem] h-full transformCard translate-z-[4px] border-black border-2 rounded-md hover:translate-x-[-6px] hover:translate-y[-6px] hover:transform-gpu hover:shadow-[14px_14px_0px_rgba(0,0,0,1)] shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white"
  >
    <NuxtLink to="" class="block cursor-pointer h-full">
      <article class="w-full h-full overflow-hidden">
        <div
          class="flex justify-end gap-3 bg-[#7DFAFF] p-3 [border-bottom:2px_solid_black]"
        >
          <Icon name="line-md:minus" size="1.2rem" style="color: black" />
          <Icon name="line-md:square" size="1.2rem" style="color: green" />
          <Icon
            name="line-md:close"
            style="color: red"
            size="1.2rem"
            class=""
          />
        </div>
        <div class="px-6 py-6 text-left h-full">
          <h1 class="text-xl md:text-2xl lg:text-3xl mb-4 text-black font-bold">
            {{ textHeader }}
          </h1>
          <p class="mb-4 line-clamp-4 text-black"><slot /></p>
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
