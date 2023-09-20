<script setup lang="ts">
import { ref } from 'vue'

const message = ref<string>('hello world')
</script>

<template>
  <div class="bg-[#f2f4fb]">
    {{ message }}
  </div>
</template>

<style scoped></style>
