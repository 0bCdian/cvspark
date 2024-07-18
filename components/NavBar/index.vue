<script setup lang="ts">
const navElements = [
  {
    name: "Analize",
    path: "/resume/analize",
    icon: "bx:id-card",
  },
  {
    name: "Build",
    path: "/resume/build",
    icon: "bx:pencil",
  },
  {
    name: "History",
    path: "/resume/history",
    icon: "bx:history",
  },
  {
    name: "Github",
    path: "https://github.com/0bCdian/Waypaper-Engine",
    icon: "line-md:github",
  },
];
</script>

<template>
  <header class="bg-white">
    <nav class="flex items-center justify-between h-14">
      <div class="ml-4">
        <NuxtLink to="/"
          ><span
            class="font-extrabold border-black border-2 p-1 bg-[#F7CB45] hover:bg-[#F7CB45] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-sm"
            >CVSPARK.</span
          ></NuxtLink
        >
      </div>
      <ul class="flex space-x-4 mr-4">
        <li
          v-for="({ name, path, icon }, index) in navElements"
          :key="index"
          class="border-black border-2 p-1 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-sm"
        >
          <NuxtLink
            :to="path"
            norel
            :target="name === 'Github' ? '_blank' : '_self'"
            class="flex space-x-1 justify-between items-center"
          >
            <Icon :name="icon" size="14" color="black" />
            <span class="text-xs font-semibold">{{ name }}</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
