<script setup></script>
<template>
  <div>
    <div
      class="text-2xl flex justify-between pt-5 items-center min-w-[50%] pb-2"
    >
      <h1 class="dark:text-green-300 text-green-600">Nuxt Leaflet</h1>
      <div class="flex justify-center gap-x-10">
        <NuxtLink
          to="/geographic"
          class="px-8 py-2 border-b-2 hover:border-green-600"
        >
          Geographic
        </NuxtLink>
        <NuxtLink
          to="/non_geographic"
          class="px-8 py-2 border-b-2 hover:border-green-600"
        >
          Non Geographic
        </NuxtLink>
      </div>
      <ThemeSwitcher class="flex" />
    </div>
    <hr class="" />
  </div>
</template>

<style scoped></style>
