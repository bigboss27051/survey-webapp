export default {
  mode: "spa",
  head: {
    titleTemplate: "%s - " + process.env.npm_package_name,
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://unpkg.com/material-components-web@v4.0.0/dist/material-components-web.min.css"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: "@/components/common/Loading.vue",
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/vuex-persist", ssr: false }, "~/plugins/axios"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios", "cookie-universal-nuxt"],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  env: {
    baseUrl: "https://us-central1-dq-project-f2327.cloudfunctions.net/webApi", // domain api
    versionAPI: "v1",
    appId: "b4ca39022ade959e597bc5d990fcd1aa",
    apiKey: "AIzaSyA6ydkWMMavK5INoGW2VJaw2wJW1U3z_oc",
    authDomain: "dq-project-f2327.firebaseapp.com",
    databaseURL: "https://dq-project-f2327.firebaseio.com",
    projectId: "dq-project-f2327",
    storageBucket: "dq-project-f2327.appspot.com",
    messagingSenderId: "262959913107",
    appId: "1:262959913107:web:36601c04f24f6c0d511566",
    measurementId: "G-E0TWV7Z2F6"
  }
};
