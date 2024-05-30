// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path';
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
    // component: 'Slider',
    components: {
      dirs: [
        '~/components',
        '~/components/admin/dashboard/hospital',
        // Add more paths if you have components in other subdirectories
      ],
    },

  app: {
    head: {
      title: 'Nuxt Dojo',
      meta: [
        { name: 'description', content: 'everything about Nuxt 3' 
      }
    ],
    link: [
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
    ]
    }
  },
  router: {
    options: {
      linkActiveClass: "text-blue-500",
      linkExactActiveClass: "text-blue-500",
    },
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: "123",
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: process.env.API_BASE,
      // otherUrl: process.env.OTHER_URL
    },
    // publicRuntimeConfig: {
    //   apiBase: process.env.API_BASE || 'http://localhost:23999/api/'
    // },
  },
})
