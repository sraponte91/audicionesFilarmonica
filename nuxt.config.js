export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  head: {
    title: 'Filarmónica Joven de Colombia - FBD',
    meta: [
      { charset: 'utf-8' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'Filarmónica Joven de Colombia - FBD' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Filarmónica Joven de Colombia - FBD' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Conozca más sobre las Audiciones para la Filarmónica Joven de Colombia.' },
      { hid: 'og:title', name: 'og:title', content: 'Filarmónica Joven de Colombia - FBD' },
      { hid: 'og:description', name: 'og:description', content: 'Conozca más sobre las Audiciones para la Filarmónica Joven de Colombia.' },
      { hid: 'og:image', name: 'og:image', content: '/filarmonica-joven-de-colombia-img_og.jpg' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/style.css'],

  googleAnalytics: { id: 'UA-189671295-3'},
  gtm: {id: 'GTM-PKC5Q2H'},

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/config/constants.js' },
    { src: '~/plugins/common.js', mode: 'client' },
    { src: '~/plugins/vue-carousel.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    //!Here is googleAnalytics Configs
    '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    //!Here is googleTagManager configs
    ['@nuxtjs/google-tag-manager', { id: 'GTM-PKC5Q2H' }],
    //!gtag configs
    '@nuxtjs/gtm',    
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
  },


}
