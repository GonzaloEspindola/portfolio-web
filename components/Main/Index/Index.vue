<script setup lang="ts">
import { icons } from '~/utils/icons.js'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const handleCopyEmail = () => {
  toast.success('Correo copiado al portapapeles', {
    autoClose: 1000,
    position: 'bottom-right',
  })

  navigator.clipboard.writeText('espindolamgonzalo@gmail.com')
}
</script>

<template>
  <section id="index" class="section-container flex flex-col gap-4">
    <article id="title" class="text-center lg:text-left">
      <h1 class="text-5xl font-black sm:text-6xl sm:text-left">Gonzalo Espindola</h1>
      <div class="flex flex-col items-center gap-2 sm:flex-row sm:justify-start">
        <span class="text-xl sm:text-2xl font-semibold">
          Desarrollador Web
        </span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/gonzalo-espindola/"
          class="w-max sm:inline text-green-500 animate-background-shine cursor-pointer justify-center rounded-md border border-green-500 bg-[linear-gradient(110deg,#22c55e1a,50%,#22c55e66,55%,#22c55e1a)] bg-[length:250%_100%] px-2.5 py-0.5 text-sm"
        >
          Disponible para trabajar
        </a>
      </div>
    </article>

    <article id="description">
      <p class="text-center text-pretty text-md text-gray-300 sm:text-lg sm:text-left">
        <span class="text-warning/80">+1 año de experiencia</span>. Soy un
        entusiasta de la tecnologia, mas en especifico del desarrollo web y
        comenzando la carrera de Ciencias de la Computación.
      </p>
    </article>

    <article
      id="network"
      class="flex gap-2 flex-wrap justify-center md:justify-start md:p-0"
    >
      <div class="flex">
        <span
          class="rounded-s-md border py-1 border-e-0 border-yellow-500 bg-yellow-500/10 ps-2.5 pe-2 text-sm text-yellow-500"
          >espindolamgonzalo@gmail.com</span
        >
        <div class="relative group/tooltip">
          <button
            class="inline-block h-full rounded-e-md border border-s-0 border-yellow-500 bg-yellow-500/10 px-1.5 text-yellow-500 transition hover:bg-yellow-500/20"
            @click="handleCopyEmail"
          >
            <div v-html="icons.paste"></div></button
          ><span
            class="hidden sm:block absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap bg-white text-black/80 font-semibold before:content-[''] before:absolute before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:bg-white before:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3"
            >Copiar correo</span
          >
        </div>
      </div>
      <Badge
        text="Linkedin"
        icon="linkedin"
        link="https://www.linkedin.com/in/gonzalo-espindola/"
        variant="badge-default"
      />
      <Badge
        text="GitHub"
        icon="github"
        link="https://github.com/GonzaloEspindola"
        variant="badge-default"
      />
    </article>
  </section>
</template>
