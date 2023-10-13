<script setup lang="ts">
import useTheme, { Theme } from '@/hooks/useTheme'

import Icon from '@/components/Icon.vue'

const { theme, toggleTheme } = useTheme()
</script>

<template>
  <div class="inline-block cursor-pointer" @click="toggleTheme">
    <Icon v-if="theme === Theme.LIGHT" class="w-9 h-9" icon="icon-Sunny" />
    <Icon v-else class="w-9 h-9" icon="icon-Moon" />
  </div>
</template>
