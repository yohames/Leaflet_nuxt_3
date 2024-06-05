<script setup></script>
<template>
  <div class="flex gap-x-10 divide-x-2 divide-gray-300">
    <ul class="flex flex-col gap-y-5 mt-10 whitespace-nowrap">
      <NuxtLink
        to="/geographic"
        class="self-start text-xl text-gray-600 hover:underline underline-offset-4 dark:text-gray-200"
        >Fly</NuxtLink
      >
      <NuxtLink
        to="/geographic/Popup"
        class="self-start text-xl text-gray-600 hover:underline underline-offset-4 dark:text-gray-200"
        >Popup</NuxtLink
      >
      <NuxtLink
        to="/geographic/Cluster"
        class="self-start text-xl text-gray-600 hover:underline underline-offset-4 dark:text-gray-200"
        >Cluster</NuxtLink
      >
      <NuxtLink
        to="/geographic/Draw"
        class="self-start text-xl text-gray-600 hover:underline underline-offset-4 dark:text-gray-200"
        >Draw</NuxtLink
      >
      <NuxtLink
        to="/geographic/Draw"
        class="self-start text-xl text-gray-600 hover:underline underline-offset-4 dark:text-gray-200"
        >Fly To</NuxtLink
      >
    </ul>
    <div class="flex-1 pl-10">
      <NuxtPage />
    </div>
  </div>
</template>

<style scoped></style>
