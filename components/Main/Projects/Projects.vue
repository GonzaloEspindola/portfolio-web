<script setup lang="ts">
import { projectsData } from '../../../utils/projectsData'
</script>

<template>
  <section id="projects" class="section-container">
    <h2 class="flex items-center space-x-4 mb-6">
      <div v-html="icons.projects"></div>
      <span class="text-2xl sm:text-3xl font-semibold"> Proyectos </span>
    </h2>

    <section class="flex flex-col gap-24">
      <div
        v-for="project in projectsData"
        :key="project.title"
        class="relative group"
      >
        <article class="flex flex-col gap-4 relative z-50">
          <section
            id="project-image"
            class="relative h-[400px] w-full rounded-md overflow-hidden"
          >
            <img
              v-if="project.image"
              :src="project.image"
              alt="background"
              class="object-cover w-full h-full transition duration-300 group-hover:opacity-50"
            />
            <video
              v-if="project.video"
              :src="project.video"
              autoplay
              muted
              loop
              alt="background"
              class="object-cover h-full transition duration-300 group-hover:opacity-50"
            />
          </section>

          <div
            id="project-info"
            class="flex flex-col justify-between h-[250px] absolute bottom-0 px-4 w-full opacity-0 transition duration-300 group-hover:opacity-100"
          >
            <div
              class="flex items-center justify-between gap-2 text-xl md:text-2xl mb-2"
            >
              <div class="flex items-center gap-2">
                <img :src="project.logo" alt="logo" class="h-10" />
                <h4 class="font-semibold">{{ project.title }}</h4>
              </div>
              <div class="flex gap-2">
                <a
                  class="text-sm rounded-md px-3 h-min py-0.5 bg-white-500/10 border border-white-500 text-white-500"
                  target="_blank"
                  :href="project.link"
                >
                  Sitio web
                </a>
                <NuxtLink
                  class="text-sm rounded-md px-3 h-min py-0.5 bg-blue-500/10 border border-blue-500 text-blue-500"
                  :to="`/${project.title}`"
                >
                  Más detalle
                </NuxtLink>
              </div>
            </div>
            <div class="flex-1 overflow-hidden">
              <p class="line-clamp-7 text-pretty">{{ project.description }}</p>
            </div>
          </div>
        </article>

        <div class="inline-flex flex-nowrap overflow-hidden mt-4 w-full z-50">
          <MainProjectsInfiniteTechList :techs="project.techs" :count="6" />
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped>
.line-clamp-7 {
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Efecto de oscurecimiento para la imagen */
#project-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.group:hover #project-image::after {
  opacity: 1;
}
</style>
