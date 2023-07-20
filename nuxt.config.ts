export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: 'Agoda',
      meta: [{ name: 'description', content: 'xxx' }],
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@invictus.codes/nuxt-vuetify',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'storeToRefs'],
      },
    ],
  ],
  css: [
    '@/assets/scss/main.scss',
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '@/assets/scss/vuetify.override.scss',
  ],
  build: {
    transpile: ['vuetify'],
  },
  imports: {
    dirs: ['store', 'utils']
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {},
      },
    },
  },
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },

    moduleOptions: {
      // treeshaking: true | false,
      // useIconCDN: true | false,

      /* vite-plugin-vuetify options */
      // styles: true | 'none' | 'expose' | 'sass' | { configFile: string },
      autoImport: true ,
      // useVuetifyLabs: true | false, 
    }
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
  },
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL,
      API_BASE_URL: process.env.API_BASE_URL,
    },
  },
})
