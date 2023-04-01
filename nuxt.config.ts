// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['nuxt-seo-kit'],
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxt/devtools',
    '@nuxtjs/i18n',
  ],
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

  i18n: {
    defaultLocale: 'en',
    dynamicRouteParams: true,
    lazy: true,
    langDir: './locales',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
        name: 'English',
      },
      {
        code: 'ja',
        iso: 'ja-JP',
        file: 'ja.json',
        name: '日本語',
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
    },
  },

  devtools: {
    // Enable devtools (default: true)
    enabled: true,
    // VS Code Server options
    vscode: {},
    // ...other options
  },
})
