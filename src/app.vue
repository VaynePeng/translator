<script setup lang="ts">
import NavBar from '@/components/nav-bar.vue'
import ThemeCover from '@/components/theme-cover.vue'
</script>

<template>
  <ThemeCover />
  <div class="w-[100vw] h-[100vh] overflow-hidden bg-white dark:bg-slate-800">
    <NavBar />
    <main>MAIN</main>
    <div class="max-w-lg mx-auto p-8">
      <details
        class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg"
        open
      >
        <summary
          class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none"
        >
          Why do they call it Ovaltine?
        </summary>
        <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
          <p>
            The mug is round. The jar is round. They should call it Roundtine.
          </p>
        </div>
      </details>
    </div>
  </div>
</template>

<style scoped></style>
