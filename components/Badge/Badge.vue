<script setup lang="ts">
import type { IconType } from '../Icon/Icon.vue'

export type BadgeType =
  | 'badge-default'
  | 'badge-warning'
  | 'badge-nuxt'
  | 'badge-typescript'
  | 'badge-tailwind'
  | 'badge-mongodb'
  | 'badge-aws'
  | 'badge-loopback'
  | 'badge-mysql'
  | 'badge-sybase'
  | 'badge-nest'

export type BadgeAction = 'paste' | 'link' | 'tech' | 'download'

interface BadgeProps {
  text: string
  icon: IconType
  link?: string
  variant?: BadgeType
  action?: BadgeAction
  notHover?: boolean
}

const props = defineProps<BadgeProps>()

const classes = computed(
  () => (!props.notHover ? ' hover:scale-105' : '') + ' ' + props.variant,
)
</script>

<template>
  <div class="flex">
    <a
      v-if="props.action === 'download'"
      target="_blank"
      rel="noopener noreferrer"
      :href="props.link"
      :class="classes"
      download
      class="flex items-center space-x-0 transition-all py-1 sm:space-x-2 cursor-pointer rounded-md border text-sm px-2.5"
    >
      {{ props.text }}
      <Icon :icon="props.icon" :action="props.action ?? 'link'" />
    </a>
    <a
      v-else
      target="_blank"
      rel="noopener noreferrer"
      :href="props.link"
      :class="classes"
      class="flex items-center space-x-0 transition-all py-1 sm:space-x-2 cursor-pointer rounded-md border text-sm px-2.5"
    >
      {{ props.text }}
      <Icon :icon="props.icon" :action="props.action ?? 'link'" />
    </a>
  </div>
</template>
