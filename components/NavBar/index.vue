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
];
const github = {
  name: "Github",
  path: "https://github.com/0bCdian/cvspark",
  icon: "line-md:github",
};

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header class="bg-white sticky top-0 z-50 w-full header-border">
    <nav class="flex items-center justify-between h-20 px-4">
      <div class="flex">
        <NuxtLink to="/">
          <button
            class="animate-button rounded-lg font-extrabold text-xl p-2 bg-[#F2cc60] active:bg-[#fdc900] rounded-xs"
          >
            CVSPARK.
          </button>
        </NuxtLink>
        <ul class="ml-16 hidden lg:flex space-x-8 items-center">
          <li v-for="({ name, path, icon }, index) in navElements" :key="index">
            <NuxtLink
              :to="path"
              norel
              :target="name === 'Github' ? '_blank' : '_self'"
              class="flex space-x-1 justify-between items-center text-xl group"
            >
              <Icon :name="icon" size="24" color="black" />
              <span
                class="font-bold link-underline link-underline-black group-hover:[]"
                >{{ name }}</span
              >
            </NuxtLink>
          </li>
        </ul>
      </div>
      <NuxtLink
        :to="github.path"
        norel
        target="_blank"
        class="hidden lg:flex space-x-1 justify-between items-center text-xl group"
      >
        <Icon :name="github.icon" size="24" color="black" />
        <span class="font-bold link-underline link-underline-black">{{
          github.name
        }}</span>
      </NuxtLink>

      <!-- Hamburger menu for mobile -->
      <div class="lg:hidden">
        <button class="p-2" @click="toggleMenu">
          <BurgerIcon :is-open="isMenuOpen" />
        </button>
      </div>

      <!-- Desktop menu -->
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
        <li class="border-b border-gray-200">
          <NuxtLink
            :to="github.path"
            norel
            target="_blank"
            class="flex justify-center items-center space-x-2 p-4 text-2xl"
            @click="isMenuOpen = false"
          >
            <Icon :name="github.icon" size="1em" color="black" />
            <span class="font-bold">{{ github.name }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
.header-border {
  border-bottom: 4px solid black;
}

.animate-h[data-show="true"] {
  height: auto;
  height: calc-size(auto);
}

.animate-button {
  box-shadow: 3px 3px 0 0 black;
  border: 2px solid black;
  transition:
    box-shadow 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),
    transform 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.animate-button:hover {
  box-shadow: 0px 0px 0 0 black;
  transform: translate(2px, 2px);
}

.link-underline {
  border-bottom-width: 0;
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(#fff, #fff);
  background-size: 0 3px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.2s ease-in-out;
}

.link-underline-black {
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(#000, #000);
}

.group:hover .link-underline {
  background-size: 100% 3px;
  background-position: 0 100%;
}
</style>
