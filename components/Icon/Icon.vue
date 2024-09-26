<script setup lang="ts">
import type { BadgeAction } from '../Badge/Badge.vue'
import NuxtIcon from '~/public/icons/nuxt.svg'
import TypeScriptIcon from '~/public/icons/typescript.svg'
import Tailwind from '~/public/icons/tailwindcss.svg'
import Mongodb from '~/public/icons/mongodb.svg'
import Aws from '~/public/icons/aws.svg'
import MySql from '~/public/icons/mysql.svg'
import Loopback from '~/public/icons/loopback.svg'
import Sybase from '~/public/icons/sybase.svg'
import Nest from '~/public/icons/nest.svg'
import Linkedin from '~/public/icons/linkedin.svg'
import Github from '~/public/icons/github.svg'
import Download from '~/public/icons/download.svg'

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

const appIcons = {
  nuxt: NuxtIcon,
  typescript: TypeScriptIcon,
  tailwind: Tailwind,
  mongodb: Mongodb,
  mysql: MySql,
  aws: Aws,
  loopback: Loopback,
  sybase: Sybase,
  nest: Nest,
  linkedin: Linkedin,
  github: Github,
  download: Download,
  paste: '',
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
  nuxt: {
    path: 'M143.618 167.029h95.166c3.023 0 5.992-.771 8.61-2.237a16.963 16.963 0 0 0 6.302-6.115 16.324 16.324 0 0 0 2.304-8.352c0-2.932-.799-5.811-2.312-8.35L189.778 34.6a16.966 16.966 0 0 0-6.301-6.113 17.626 17.626 0 0 0-8.608-2.238c-3.023 0-5.991.772-8.609 2.238a16.964 16.964 0 0 0-6.3 6.113l-16.342 27.473-31.95-53.724a16.973 16.973 0 0 0-6.304-6.112A17.638 17.638 0 0 0 96.754 0c-3.022 0-5.992.772-8.61 2.237a16.973 16.973 0 0 0-6.303 6.112L2.31 141.975A16.302 16.302 0 0 0 0 150.325c0 2.932.793 5.813 2.304 8.352a16.964 16.964 0 0 0 6.302 6.115 17.628 17.628 0 0 0 8.61 2.237h59.737c23.669 0 41.123-10.084 53.134-29.758l29.159-48.983 15.618-26.215 46.874 78.742h-62.492l-15.628 26.214Zm-67.64-26.24-41.688-.01L96.782 35.796l31.181 52.492-20.877 35.084c-7.976 12.765-17.037 17.416-31.107 17.416Z',
  },
}
</script>

<template>
  <div
    v-if="props.action === 'paste' && icons[icon]"
    class="relative group/tooltip"
  >
    <button
      id="icon-button"
      aria-label="icon-button"
      class="inline-block h-full rounded-e-md border border-s-0 border-yellow-500 bg-yellow-500/10 px-1.5 text-yellow-500 transition hover:bg-yellow-500/20"
    >
      <svg
        v-if="icons[icon]"
        xmlns="http://www.w3.org/2000/svg"
        :width="styleIcon.width"
        :height="styleIcon.height"
        viewBox="0 0 24 24"
        fill="none"
        preserveAspectRatio="xMidYMid"
        :stroke="styleIcon.stroke"
        :stroke-width="styleIcon.strokeWidth"
        :stroke-linecap="styleIcon.strokeLinecap"
        :stroke-linejoin="styleIcon.strokeLinejoin"
      >
        <path v-if="icons[icon].path" :d="icons[icon].path"></path>
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
  </svg>

  <img
    :alt="`${props.icon} logo`"
    v-if="props.action === 'tech'"
    :src="appIcons[icon]"
    :width="styleIcon.width"
    :height="styleIcon.height"
    class="ml-2 w-[16px] h-[16px]"
  />
</template>
