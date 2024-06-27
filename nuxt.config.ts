// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss"],

  // component: 'Slider',
  // css: ['~/assets/css/main.css'],
  // images: ['~/assets/images'],
  components: {
    dirs: [
      "~/components",
      "~/components/admin/dashboard/hospital",
      "~/components/admin/dashboard/department",
      "~/components/page/**",
    ],
  },

  app: {
    head: {
      title: "NHVMS",
      meta: [{ name: "description", content: "Hospital volunteering" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
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
      // API_BASE_OPEN
      apiBaseOpen: process.env.API_BASE_OPEN,
      // otherUrl: process.env.OTHER_URL
    },
    // publicRuntimeConfig: {
    //   apiBase: process.env.API_BASE || 'http://localhost:23999/api/'
    // },
  },
});
