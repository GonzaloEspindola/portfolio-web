<script setup lang="ts">
import type { IconType } from '../Icon/Icon.vue'

export type BadgeType = 'badge-default' | 'badge-warning'
export type BadgeAction = 'paste' | 'link'

interface BadgeProps {
  text: string
  icon: IconType
  link?: string
  variant?: BadgeType
  action?: BadgeAction
  notHover?: boolean
}

const props = defineProps<BadgeProps>()

const variants: Record<BadgeType, string> = {
  'badge-default': 'border-white/40 bg-white/5 hover:bg-white/10',
  'badge-warning':
    'border-warning/60 bg-warning/5 hover:bg-warning/10 text-warning',
}

const classes = computed(
  () =>
    variants[props.variant ?? 'badge-default'] +
    (!props.notHover ? ' hover:scale-105' : ''),
)
</script>

<template>
  <div class="flex">
    <a
      target="_blank"
      :href="props.link"
      :class="classes"
      class="flex items-center space-x-0 transition-all py-1 sm:space-x-2 cursor-pointer rounded-md border text-sm px-2.5"
    >
      {{ props.text }}
      <Icon :icon="props.icon" :action="props.action ?? 'link'" />
    </a>
  </div>
</template>
