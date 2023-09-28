<script setup lang="ts">
import useTheme from '@/utils/useTheme'

const { toggleTheme } = useTheme()
</script>

<template>
  <nav>
    <button
      class="bg-sky-500 hover:bg-sky-600 rounded-full text-white px-5 py-1"
      @click="toggleTheme"
    >
      切换
    </button>
  </nav>
</template>
