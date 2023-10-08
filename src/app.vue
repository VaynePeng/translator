<script setup lang="ts">
import NavBar from '@/components/nav-bar.vue'
import ThemeCover from '@/components/theme-cover.vue'
</script>

<template>
  <ThemeCover />
  <div class="container w-[100vw] h-[100vh] overflow-hidden dark:text-white">
    <NavBar />
    <main>
      APP
    </main>
  </div>
</template>

<style scoped></style>
