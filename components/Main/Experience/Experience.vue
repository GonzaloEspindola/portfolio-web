<script setup lang="ts">
import { icons } from '~/utils/icons.js'
import { experienceData } from '~/utils/experienceData'
</script>

<template>
  <section id="experience" class="section-container">
    <h2 class="flex items-center space-x-4 mb-6">
      <div v-html="icons.experience"></div>
      <span class="text-2xl sm:text-3xl font-semibold"> Experiencia </span>
    </h2>
    <div
      v-for="experience in experienceData"
      :key="experience.title"
      class="ms-1.5 space-y-6 border-l-2 border-white/20"
    >
      <div class="relative w-full">
        <div v-html="icons.timeLap"></div>
        <div class="ml-6">
          <article class="flex flex-wrap items-center gap-2">
            <h4 class="font-bold text-lg text-warning">
            {{ experience.title }}
            </h4>
            <p
              class="text-sm font-semibold text-white/40 flex gap-1 items-center"
            >
              <div v-html="icons.calendar"></div>
              <span>{{ experience.date }}</span>
            </p>
          </article>
          <div v-for="project in experience.projects" :key="project.title" class="mb-6">
            <div class="ml-[-1.5rem]" v-html="icons.secondaryTimeLap"></div>
            <p class="text-pretty mt-2 text-gray-300">
              {{ project.description }}
            </p>
            <p class="text-pretty mt-2 text-gray-300">
              Tecnologías utilizadas:
            </p>
            <div class="flex flex-wrap gap-2 my-2">
              <Badge v-for="tech in project.techs" :key="tech.name" :text="tech.name" :link="tech.link" :icon="tech.icon" action="tech" :variant="`badge-${tech.icon}`" />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>
