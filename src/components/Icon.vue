<script setup lang="ts">
import { withDefaults } from 'vue'

type Icon = 'icon-Moon' | 'icon-Sunny'
interface Props {
  icon?: Icon
  customClass?: string
}
withDefaults(defineProps<Props>(), {
  icon: undefined,
  class: undefined
})
</script>

<template>
  <svg class="w-10 h-10" :class="customClass" aria-hidden="true">
    <use :xlink:href="`#${icon}`"></use>
  </svg>
</template>
