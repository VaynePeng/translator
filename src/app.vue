<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import ToggleLanguage from '@/components/ToggleLanguage.vue'
import TransInput from '@/components/TransInput.vue'
import TransOutput from '@/components/TransOutput.vue'
</script>

<template>
  <div
    class="w-[100vw] h-[100vh] overflow-auto dark:text-white dark:bg-slate-800"
  >
    <NavBar />
    <main class="container mx-auto px-4 mb-5">
      <ToggleLanguage />
      <div class="grid md:grid-cols-2 gap-3">
        <TransInput />
        <TransOutput />
      </div>
    </main>
  </div>
</template>
