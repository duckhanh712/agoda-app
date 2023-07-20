import { createVuetify } from 'vuetify'
// Vuetify comes with vite-plugin-vuetify that enable automatic treeshaking.
// Vuetify components and directives will be automatically imported

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    // components: {
    //   VDataTable
    // },
    // icons: {
    //   defaultSet: 'mdi',
    //   aliases,
    //   sets: {
    //     mdi
    //   }
    // },
    // defaults: {
    //   VCheckbox: {
    //     hideDetails: 'auto',
    //     color: 'primary',
    //     density: 'compact'
    //   },
    //   VRadio: {
    //     hideDetails: 'auto',
    //     color: 'primary',
    //     density: 'compact'
    //   },
    //   VRadioGroup: {
    //     hideDetails: 'auto',
    //     color: 'primary',
    //     density: 'compact'
    //   },
    //   VSelect: {
    //     hideDetails: 'auto',
    //     color: 'primary',
    //     density: 'compact',
    //     variant: 'outlined'
    //   },
    //   VAutocomplete: {
    //     hideDetails: 'auto',
    //     color: 'primary',
    //     density: 'compact',
    //     variant: 'outlined'
    //   },
    //   VTextarea: {
    //     hideDetails: 'auto',
    //     color: 'primary',
    //     variant: 'outlined'
    //   },
    //   VTextField: {
    //     hideDetails: 'auto',
    //     color: 'primary',
    //     density: 'compact',
    //     variant: 'outlined'
    //   },
    //   VList: {
    //     bgColor: '#FFFFFF',
    //     color: 'primary'
    //   },
    //   VPagination: {
    //     activeColor: '#FFFFFF',
    //     size: '30px',
    //     color: 'primary'
    //   },
    //   VDataTable: {
    //     height: '100%',
    //     fixedHeader: true,
    //     noDataText: 'データーが見つけられませんでした。'
    //   },
    //   VBreadcrumbs: {
    //     color: 'primary'
    //   }
    // },
    theme: {
      defaultTheme: 'defaultTheme',
      themes: {
        defaultTheme: {
          dark: false,
          colors: {
            primary: '#5392f9',
            'agoda-pink': 'rgb(255, 86, 125)',
            background: '#f9f9f7',
            border: 'rgb(221, 223, 226)',
            hot: '#e12d2d'
          }
        }
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
