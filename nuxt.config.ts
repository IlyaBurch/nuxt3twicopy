// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxt/image', '@nuxtjs/color-mode'],

  i18n: {
    vueI18n: './i18n.config.ts', // if you are using custom path, default
  },

  image: {
    // dir: "assets/images/",
  },
  typescript: {
    typeCheck: true,
  },
})