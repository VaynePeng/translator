<script setup lang="ts"></script>

<template>
  <div>
    <div class="relative inline-block text-left">
      <button
        type="button"
        class="inline-flex justify-center w-full rounded-md border border-gray-200 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
      >
        <span class="mr-2">English</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <ul
        class="absolute left-0 mt-1 w-56 rounded-md shadow-sm bg-white ring-1 ring-gray-200"
      >
        <li
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
        >
          English
        </li>
        <li
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
        >
          French
        </li>
      </ul>
    </div>
  </div>
</template>
