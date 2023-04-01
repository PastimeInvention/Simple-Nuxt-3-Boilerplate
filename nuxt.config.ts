// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['nuxt-seo-kit'],
  modules: ['@vueuse/nuxt', '@unocss/nuxt', '@pinia/nuxt', '@nuxt/devtools'],
  meta: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [],
    script: [],
  },
  runtimeConfig: {
    public: {
      siteName: process.env.SITE_NAME || 'Simple Nuxt 3 Boilerplate',
      titleSeparator: '|',
    },
  },
  sitemap: {
    siteUrl: process.env.SITE_URL || 'https://localhost:3000',
  },
  linkChecker: {
    failOn404: true,
  },

  devtools: {
    // Enable devtools (default: true)
    enabled: true,
    // VS Code Server options
    vscode: {},
    // ...other options
  },
})
