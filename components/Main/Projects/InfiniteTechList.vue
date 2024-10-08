<script setup lang="ts">
import { defineProps } from 'vue'
import type { Tech } from '../../../utils/projectsData'

interface Props {
  techs: Tech[]
  count: number
}

const props = defineProps<Props>()
</script>

<template>
  <ul
    v-for="i in props.count"
    :key="i"
    class="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll"
  >
    <li v-for="tech in props.techs" :key="tech.name">
      <Badge
        :text="tech.name"
        :link="tech.link"
        :icon="tech.icon"
        action="tech"
        :variant="`badge-${tech.icon}`"
      />
    </li>
  </ul>
</template>
