<script setup lang="ts">
import type { BadgeAction } from '../Badge/Badge.vue'

export type IconType = 'linkedin' | 'github' | 'paste'

interface Icon {
  icon: IconType
  action: BadgeAction
}

const props = defineProps<Icon>()

const styleIcon = {
  width: 16,
  height: 16,
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const icons = {
  linkedin: {
    path: 'M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z M8 11l0 5 M8 8l0 .01 M12 16l0 -5 M16 16v-3a2 2 0 0 0 -4 0',
  },
  github: {
    path: 'M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5',
  },
  paste: {
    path: 'M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z',
    path2:
      'M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1',
  },
}
</script>

<template>
  <div
    v-if="props.action === 'paste' && icons[icon]"
    class="relative group/tooltip"
  >
    <button
      class="inline-block h-full rounded-e-md border border-s-0 border-yellow-500 bg-yellow-500/10 px-1.5 text-yellow-500 transition hover:bg-yellow-500/20"
    >
      <svg
        v-if="icons[icon]"
        xmlns="http://www.w3.org/2000/svg"
        :width="styleIcon.width"
        :height="styleIcon.height"
        viewBox="0 0 24 24"
        fill="none"
        :stroke="styleIcon.stroke"
        :stroke-width="styleIcon.strokeWidth"
        :stroke-linecap="styleIcon.strokeLinecap"
        :stroke-linejoin="styleIcon.strokeLinejoin"
      >
        <path v-if="icons[icon].path" :d="icons[icon].path"></path>
        <path v-if="icons[icon].path2" :d="icons[icon].path2"></path>
      </svg>
    </button>
  </div>

  <svg
    v-if="props.action === 'link' && icons[icon]"
    xmlns="http://www.w3.org/2000/svg"
    :width="styleIcon.width"
    :height="styleIcon.height"
    viewBox="0 0 24 24"
    fill="none"
    class="ml-2"
    :stroke="styleIcon.stroke"
    :stroke-width="styleIcon.strokeWidth"
    :stroke-linecap="styleIcon.strokeLinecap"
    :stroke-linejoin="styleIcon.strokeLinejoin"
  >
    <path v-if="icons[icon].path" :d="icons[icon].path"></path>
    <path v-if="icons[icon].path2" :d="icons[icon].path2"></path>
  </svg>
</template>
