<template>
  <footer
    class="[border-bottom:4px_solid_black] bg-white bg-[radial-gradient(#80808080_1px,transparent_1px)] [background-size:16px_16px] text-black py-8"
  >
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <h2 class="text-2xl font-bold">0bCdian</h2>
          <p class="mt-2">
            © {{ currentYear }} Open Source Project Made With Love ❤️ and
            Coffee ☕
          </p>
          <p class="mt-2">
            Illustration by
            <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA"
              >Icons 8</a
            >
            from <a href="https://icons8.com/illustrations">Ouch!</a>
          </p>
        </div>
        <nav class="flex flex-wrap justify-center md:justify-end">
          <NuxtLink to="/about" class="hover:text-gray-300 mx-3 my-2"
            >About</NuxtLink
          >
          <NuxtLink
            to="https://github.com/0bCdian/Waypaper-Engine"
            target="_blank"
            class="hover:text-gray-300 mx-3 my-2"
            >Github</NuxtLink
          >
          <a
            href="mailto:diegoparranava@protonmail.com"
            class="hover:text-gray-300 mx-3 my-2"
            >Contact</a
          >
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const currentYear = ref(new Date().getFullYear());
</script>
