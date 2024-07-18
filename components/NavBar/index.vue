<script setup lang="ts">
const navElements = [
  {
    name: "Analize",
    path: "/resume/analize",
    icon: "heroicons:magnifying-glass",
  },
  {
    name: "Build",
    path: "/resume/build",
    icon: "request-quote",
  },
  {
    name: "History",
    path: "/resume/history",
    icon: "iconamoon:history-bold",
  },
  {
    name: "Github",
    path: "https://github.com/0bCdian/Waypaper-Engine",
    icon: "uil:github",
  },
];
</script>

<template>
  <header>
    <nav class="flex justify-between">
      <div class="ml-2"><NuxtLink to="/">CvSpark</NuxtLink></div>
      <ul class="flex space-x-4 mr-2">
        <li
          v-for="({ name, path, icon }, index) in navElements"
          :key="index"
          class=""
        >
          <NuxtLink :to="path">
            <Icon :name="icon" />
            {{ name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
