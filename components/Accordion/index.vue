<template>
  <div
    :data-state="showContent ? 'open' : 'closed'"
    class="w-full max-w-md mx-auto sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl group rounded-md border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]"
  >
    <button
      role="button"
      :aria-expanded="showContent"
      :class="[
        'bg-[#FDFD96] [border-bottom:2px_solid_black] flex w-full items-center text-xl font-bold  justify-between p-4 md:p-2 ',
        className,
      ]"
      @click="toggleContent"
    >
      <span>{{ title }}</span>
      <span
        class="sm:ml-4 ml-3 sm:text-2xl text-xl group-data-[state=open]:rotate-45 group-data-[state=closed]:rotate-0 transition-transform ease-in-out"
      >
        +
      </span>
    </button>
    <div
      ref="contentRef"
      :style="{ height: showContent ? contentHeight : '0' }"
      class="overflow-hidden bg-[#F7F6DD] transition-[height] ease-in-out"
    >
      <p
        class="p-4 md:p-5 text-sm md:text-lg leading-relaxed md:leading-relaxed"
      >
        <slot />
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";

interface Props {
  title: string;
  className?: string;
}

defineProps<Props>();

const showContent = ref(false);
const contentHeight = ref("0px");
const contentRef = ref<HTMLDivElement | null>(null);

const toggleContent = () => {
  showContent.value = !showContent.value;
};

const updateContentHeight = () => {
  if (contentRef.value) {
    contentHeight.value = `${contentRef.value.scrollHeight}px`;
  }
};

onMounted(updateContentHeight);
watch(showContent, updateContentHeight);
</script>
