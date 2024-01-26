<script setup lang="ts">
import { icons } from '~/utils/icons.js'
</script>

<template>
  <div class="border-t-[1px] border-gray-500 p-2 mt-[10rem]">
      <p class="flex justify-center text-sm text-gray-300">
      Desarrollado con
      <span class="group">
        <div v-html="icons.footerHearth"></div>
        <div v-html="icons.footerHearthColor"></div>
      </span>
      &amp;
      <span>
        <a
          class="mx-1 transition-all duration-300 hover:text-yellow-500 hover:underline"
          target="_blank"
          href="https://vuejs.org/"
          >Vue</a
        >
      </span>
      por Gonza
    </p>
  </div>
</template>
