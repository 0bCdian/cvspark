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
  <header class="bg-white fixed z-20 w-full">
    <nav class="flex items-center justify-between h-20 px-4">
      <div>
        <NuxtLink to="/">
          <span
            class="transition-all font-extrabold text-xl border-black border-4 p-2 bg-[#F2cc60] shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none active:bg-[#fdc900] rounded-xs"
          >
            CVSPARK.
          </span>
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
          class="transition-all border-black border-2 p-2 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-xs"
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
    <Transition name="expand">
      <div v-if="isMenuOpen" class="lg:hidden mobile-menu-container">
        <ul class="bg-white border-t border-gray-200">
          <li
            v-for="({ name, path, icon }, index) in navElements"
            :key="index"
            class="border-b border-gray-200 mobile-menu"
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
    </Transition>
  </header>
</template>

<style scoped>
.mobile-menu-container {
  overflow: hidden;
}

.mobile-menu {
  transform-origin: top;
  transition:
    max-height 0.3s ease-out,
    opacity 0.2s ease-out;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

.expand-enter-to,
.expand-leave-from {
  max-height: 400px; /* Adjust this value based on your menu's maximum height */
  opacity: 1;
}

.expand-enter-active,
.expand-leave-active {
  transition:
    max-height 0.3s ease-in-out,
    opacity 0.2s ease-in-out;
}
</style>
