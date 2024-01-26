<template>
  <section id="projects" class="section-container">
    <h2 class="flex items-center space-x-4 mb-6">
      <div v-html="icons.projects"></div>
      <span class="text-2xl sm:text-3xl font-semibold"> Proyectos </span>
    </h2>
    <div>
      <article class="grid gap-2 md:gap-6 md:grid-cols-2">
        <img
          src="/public/images/background.webp"
          alt=""
          class="rounded-md opacity-80"
        />
        <div class="flex flex-col justify-between">
          <div class="mb-4">
            <h3 class="flex items-center gap-2 text-xl md:text-2xl">
              <span class="font-semibold"> Mesa de ayuda </span>
              <span
                class="text-sm rounded-md px-3 h-min py-0.5 bg-red-500/10 border border-red-500 text-red-500"
              >
                Recursos reservados
              </span>
            </h3>
            <p class="mt-2 text-pretty">
              Sistema interno responsive con panel administrativo, agilizando la
              resolución de problemas sin necesidad de intervención técnica.
            </p>
          </div>
          <div class="flex flex-wrap gap-2">
            <a
              href="https://angular.dev/"
              target="_blank"
              class="flex items-center border-white/40 bg-white/5 transition-all hover:bg-white/10 space-x-2 cursor-pointer rounded-md border text-sm px-2.5"
            >
              <span>Angular</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="tabler-icon tabler-icon-brand-angular"
              >
                <path
                  d="M5.428 17.245l6.076 3.471a1 1 0 0 0 .992 0l6.076 -3.471a1 1 0 0 0 .495 -.734l1.323 -9.704a1 1 0 0 0 -.658 -1.078l-7.4 -2.612a1 1 0 0 0 -.665 0l-7.399 2.613a1 1 0 0 0 -.658 1.078l1.323 9.704a1 1 0 0 0 .495 .734z"
                ></path>
                <path d="M9 15l3 -8l3 8"></path>
                <path d="M10 13h4"></path>
              </svg>
            </a>
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              class="flex items-center border-white/40 bg-white/5 transition-all hover:bg-white/10 space-x-2 cursor-pointer rounded-md border text-sm px-2.5"
            >
              <span>TailwindCss</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="tabler-icon tabler-icon-brand-tailwind"
              >
                <path
                  d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.sqlite.org/index.html"
              target="_blank"
              class="flex items-center border-white/40 bg-white/5 transition-all hover:bg-white/10 space-x-2 cursor-pointer rounded-md border text-sm px-2.5"
            >
              <span>SQLite</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="tabler-icon tabler-icon-sql"
              >
                <path
                  d="M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z"
                ></path>
                <path d="M17 8v8h4"></path>
                <path d="M13 15l1 1"></path>
                <path
                  d="M3 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
