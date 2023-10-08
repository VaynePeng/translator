<script setup lang="ts">
import useTheme from '@/hooks/useTheme'

const { toggleTheme } = useTheme()
</script>

<template>
  <nav class="h-14 shadow-sm shadow-slate-300 mb-5">
    <!-- <button
      class="bg-sky-500 hover:bg-sky-600 rounded-full text-white px-5 py-1"
      @click="toggleTheme"
    >
      切换
    </button> -->
  </nav>
</template>
@/hooks/useTheme