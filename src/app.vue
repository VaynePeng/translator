<script setup lang="ts">
import NavBar from '@/components/nav-bar.vue'
import ThemeCover from '@/components/theme-cover.vue';
</script>

<template>
  <ThemeCover />
  <div class="w-[100vw] h-[100vh] overflow-hidden bg-white dark:bg-slate-800">
    <NavBar />
    <main>MAIN</main>
  </div>
</template>

<style scoped></style>
