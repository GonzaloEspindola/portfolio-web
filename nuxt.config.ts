// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '~/styles/main.css',
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { property: 'og:title', content: 'Gonzalo Espindola - Portfolio' },
        { property: 'og:description', content: 'Portfolio personal de Gonzalo Espindola' },
      ]
    }
  }
})