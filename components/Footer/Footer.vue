<script setup lang="ts">
import { icons } from '~/utils/icons.js'
</script>

<template>
  <div class="mx-auto w-full mt-20 xl:w-[1120px]">
    <p
      class="flex items-center justify-center border-t border-gray-100/10 pt-4 text-center text-sm sm:pb-6"
    >
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
