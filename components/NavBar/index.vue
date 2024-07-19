<script setup lang="ts">
import { ref } from "vue";

const navElements = [
  {
    name: "Analize",
    path: "/resume/analize",
    icon: "line-md:person-search-filled",
  },
  {
    name: "Build",
    path: "/resume/build",
    icon: "line-md:clipboard-list",
  },
  {
    name: "History",
    path: "/resume/history",
    icon: "line-md:backup-restore",
  },
  {
    name: "Github",
    path: "https://github.com/0bCdian/Waypaper-Engine",
    icon: "line-md:github",
  },
];

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header class="bg-white sticky top-0 z-50 w-full">
    <nav class="flex items-center justify-between h-20 px-4">
      <div>
        <NuxtLink to="/">
          <button
            class="animate-button rounded-lg font-extrabold text-xl border-black border-4 p-2 bg-[#F2cc60] active:bg-[#fdc900] rounded-xs"
          >
            CVSPARK.
          </button>
        </NuxtLink>
      </div>

      <!-- Hamburger menu for mobile -->
      <div class="lg:hidden">
        <button class="p-2" @click="toggleMenu">
          <BurgerIcon :is-open="isMenuOpen" />
        </button>
      </div>

      <!-- Desktop menu -->
      <ul class="hidden lg:flex space-x-8">
        <li
          v-for="({ name, path, icon }, index) in navElements"
          :key="index"
          class="rounded-lg transition-all duration-250 border-black border-2 p-2 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-xs"
        >
          <NuxtLink
            :to="path"
            norel
            :target="name === 'Github' ? '_blank' : '_self'"
            class="flex space-x-1 justify-between items-center text-xl"
          >
            <Icon :name="icon" size="24" color="black" />
            <span class="font-bold">{{ name }}</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <!-- Mobile dropdown menu -->
    <div
      :data-show="isMenuOpen"
      class="lg:hidden overflow-hidden fixed top-20 w-full h-0 animate-h transition-all"
    >
      <ul class="bg-white border-t border-gray-200">
        <li
          v-for="({ name, path, icon }, index) in navElements"
          :key="index"
          class="border-b border-gray-200"
        >
          <NuxtLink
            :to="path"
            norel
            :target="name === 'Github' ? '_blank' : '_self'"
            class="flex justify-center items-center space-x-2 p-4 text-2xl"
            @click="isMenuOpen = false"
          >
            <Icon :name="icon" size="1em" color="black" />
            <span class="font-bold">{{ name }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
.animate-h[data-show="true"] {
  height: auto;
  height: calc-size(auto);
}

.animate-button {
  box-shadow: 3px 3px 0 0 black;
  transition:
    box-shadow 0.25s cubic-bezier(0.645, 0.045, 0.355, 1),
    transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.animate-button:hover {
  box-shadow: 6px 6px 0 0 black;
  transform: translate(-2px, -2px);
}
</style>
