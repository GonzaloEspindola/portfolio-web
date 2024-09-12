<script setup lang="ts">
import { projectsData, type ProjectData } from '@/utils/projectsData'

const route = useRoute()
const projectName = route.params.id

const project = projectsData.find(
  (project: ProjectData) => project.title === projectName,
)

if (!project) {
  throw new Error('Project not found')
}
</script>

<template>
  <section class="flex flex-col gap-8 lg:w-[740px] mx-auto">
    <div>
      <div class="flex">
        <a
          href="/"
          class="flex items-center space-x-0 transition-all py-1 sm:space-x-2 cursor-pointer rounded-md border px-2.5 absolute z-10 m-2 badge text-black hover:scale-105"
        >
          ← ATRAS
        </a>
      </div>
      <img
        :src="project.image"
        alt="screenshot pagina web"
        class="h-[400px] w-full object-cover"
      />
    </div>

    <div class="flex flex-col gap-2">
      <h2
        class="text-xl text-center text-black font-semibold rounded-sm"
        :class="`bg-green-400 `"
      >
        SOBRE EL PROYECTO
      </h2>

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
          aria-hidden="true"
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
          aria-hidden="true"
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

      <p>
        Esta aplicación permite a los usuarios crear perfiles personalizados
        para sus mascotas, integrando información esencial como nombre, edad,
        raza y características especiales. Cada perfil está vinculado a un
        código QR único que puede ser escaneado fácilmente con un celular,
        llevando al usuario directamente a una página web con los detalles de la
        mascota. Esta solución es ideal para identificar mascotas perdidas, ya
        que cualquier persona con acceso al código QR puede ver la información
        necesaria para contactar al dueño rápidamente.
      </p>
    </div>

    <div>
      <p class="border-l-4 pl-2 text-green-400" :class="`border-green-400`">
        PROBLEMÁTICA ENCONTRADA
      </p>
      <ul>
        <li v-for="problem in project.problems" class="mt-2">
          <div class="flex gap-2">
            <span class="`text-green-400`">→</span>
            <p>{{ problem.title }}</p>
          </div>
          <p class="text-pretty text-gray-400 ml-5">
            {{ problem.description }}
          </p>
        </li>
      </ul>
    </div>

    <div>
      <p class="border-l-4 pl-2 text-green-400" :class="`border-green-400`">
        SOLUCIONES APLICADAS
      </p>
      <ul>
        <li v-for="solution in project.solutions" class="mt-2">
          <div class="flex gap-2">
            <span :class="`text-green-400`">→</span>
            <p>{{ solution.title }}</p>
          </div>
          <p class="text-pretty text-gray-400 ml-5">
            {{ solution.description }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.badge {
  border-color: black;
  background-color: rgba(34, 197, 94, 0.05);
}
</style>
