<script setup lang="ts">
import { computed } from 'vue'
import useTheme, { Theme, ThemeIcon } from '@/hooks/useTheme'

import Icon from '@/components/Icon.vue'

const { theme, toggleTheme } = useTheme()

const themeIcon = computed<ThemeIcon>(() => theme.value === Theme.DARK ? ThemeIcon.DARK : ThemeIcon.LIGHT)
</script>

<template>
  <div class="inline-block cursor-pointer" @click="toggleTheme">
    <Icon class="w-9 h-9" :icon="themeIcon" />
  </div>
</template>
