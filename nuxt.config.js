import { feed } from './config/feeds'
import { global } from './config/global'
export default {
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    titleTemplate: "%s | Manu's Personal Blog",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    script: [
      {
        src: 'https://nibspace.com/ns.js',
        async: true,
        defer: true,
        'data-domain': 'manuelobregozo.com'
      },
      {
        src: '/console.js',
        async: true,
        defer: true
      }
    ]
  },
  target: 'static',
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/css/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  serverMiddleware: [
    {
      handler: './middleware/index'
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss', '@/modules/sitemapRouteGenerator'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/prismic',
    '@nuxtjs/feed',
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/color-mode'
  ],
  sitemap: {
    hostname: global.webURL,
    trailingSlash: true
  },
  feed,
  prismic: {
    endpoint: process.env.PRISMIC_API_URL,
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer'
  },
  generate: {
    fallback: '404.html'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
  },
  colorMode: {
    classSuffix: ''
  },
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
