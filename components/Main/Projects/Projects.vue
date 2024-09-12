<script setup lang="ts">
import { projectsData } from '../../../utils/projectsData'
</script>

<template>
  <section id="projects" class="section-container">
    <h2 class="flex items-center space-x-4 mb-6">
      <div v-html="icons.projects"></div>
      <span class="text-2xl sm:text-3xl font-semibold"> Proyectos </span>
    </h2>
    <div v-for="project in projectsData" :key="project.title">
      <article class="grid gap-2 md:gap-6 md:grid-cols-2">
        <img
          :src="project.image"
          alt="background"
          class="rounded-sm object-cover"
        />
        <div class="flex flex-col justify-between h-[250px]">
          <div
            class="flex items-center justify-between gap-2 text-xl md:text-2xl mb-2"
          >
            <h4 class="font-semibold">{{ project.title }}</h4>
            <div class="flex gap-2">
              <a
                class="text-sm rounded-md px-3 h-min py-0.5 bg-white-500/10 border border-white-500 text-white-500"
                target="_blank"
                :href="`${project.link}`"
              >
                Sitio web
              </a>
              <a
                class="text-sm rounded-md px-3 h-min py-0.5 bg-blue-500/10 border border-blue-500 text-blue-500"
                :href="`/${project.title}`"
              >
                Más detalle
              </a>
            </div>
          </div>

          <div class="flex-1 overflow-hidden">
            <p class="line-clamp-7 text-pretty">
              {{ project.description }}
            </p>
          </div>

          <div class="inline-flex flex-nowrap overflow-hidden">
            <ul
              class="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll"
            >
              <li v-for="tech in project.techs">
                <Badge
                  :key="tech.name"
                  :text="tech.name"
                  :link="tech.link"
                  :icon="tech.icon"
                  action="tech"
                  :variant="`badge-${tech.icon}`"
                />
              </li>
            </ul>

            <ul
              class="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll"
              aria-label="true"
            >
              <li v-for="tech in project.techs">
                <Badge
                  :key="tech.name"
                  :text="tech.name"
                  :link="tech.link"
                  :icon="tech.icon"
                  action="tech"
                  :variant="`badge-${tech.icon}`"
                />
              </li>
            </ul>
          </div>
        </div>
      </article>
    </div>
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
</style>
