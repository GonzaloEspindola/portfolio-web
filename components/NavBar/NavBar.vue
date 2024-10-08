<script setup lang="ts">
import { ref, onMounted } from 'vue'
const route = useRoute()
const activeSection = ref<string | null>(null)

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

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          activeSection.value = `#${sectionId}`
        }
      })
    },
    { threshold: 0.9 },
  )

  navMenu.forEach((menuItem) => {
    const targetElement = document.querySelector(menuItem.route)
    if (targetElement) {
      observer.observe(targetElement)
    }
  })
})
</script>

<template>
  <header class="flex justify-center w-full z-[100]">
    <nav class="navbar fixed z-50">
      <div class="navbar-start"></div>
      <div role="tablist" class="navbar-center tabs tabs-boxed">
        <a
          v-for="menuItem in navMenu"
          :key="menuItem.name"
          role="tab"
          :href="`${menuItem.route}`"
          class="tab transition-all"
          :class="{ 'tab-active': activeSection === menuItem.route }"
          >{{ menuItem.name }}</a
        >
      </div>
      <div class="navbar-end"></div>
    </nav>
  </header>
</template>

<style scoped>
.tab-active {
  border: 1px solid rgb(234, 179, 8, 0.6) !important;
  background-color: rgb(234, 179, 8, 0.05) !important;
  color: rgb(234, 179, 8) !important;
}
</style>
