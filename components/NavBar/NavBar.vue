<script setup lang="ts">
const route = useRoute()

const navMenu = [
  {
    name: 'Inicio',
    route: '#index',
  },
  {
    name: 'Experiencia',
    route: '#experience',
  },
  {
    name: 'Proyectos',
    route: '#projects',
  },
]
</script>

<template>
  <header class="flex justify-center w-full">
    <nav class="navbar fixed z-50">
      <div class="navbar-start"></div>
      <div role="tablist" class="navbar-center tabs tabs-boxed">
        <a
          v-for="menuItem in navMenu"
          :key="menuItem.name"
          role="tab"
          :href="`${menuItem.route}`"
          class="tab tab-primary"
          :class="{ 'tab-active': route.hash === menuItem.route }"
          >{{ menuItem.name }}</a
        >
      </div>
      <div class="navbar-end"></div>
    </nav>
  </header>
</template>
