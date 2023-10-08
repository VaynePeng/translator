<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import ThemeCover from '@/components/ThemeCover.vue'
import TransInput from '@/components/TransInput.vue'
</script>

<template>
  <ThemeCover />
  <div class="w-[100vw] h-[100vh] overflow-hidden dark:text-white">
    <NavBar />
    <main class="container mx-auto px-4">
      <TransInput />
    </main>
  </div>
</template>

<style scoped></style>
