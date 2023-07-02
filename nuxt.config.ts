// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: 'Marriot',
      meta: [{ name: 'description', content: 'xxx' }],
    },
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'storeToRefs'],
      },
    ],
  ],
  css: [
    '@/assets/css/main.css',
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  build: {
    transpile: ['vuetify'],
    // postcss: {
    //   postcssOptions: {
    //     plugins: {
    //       tailwindcss: {},
    //       autoprefixer: {},
    //     },
    //   },
    // },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {},
      },
    },
  },
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL,
      API_BASE_URL: process.env.API_BASE_URL,
    },
  },
})
