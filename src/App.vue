<script setup lang="ts">
import { ref } from 'vue'

const message = ref<string>('hello world')
</script>

<template>
  <div>
    {{ message }}
  </div>
</template>

<style scoped></style>
