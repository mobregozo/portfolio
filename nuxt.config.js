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
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: global.generalDescription
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      { hid: 'twitter:site', name: 'twitter:site', content: global.author },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: global.webURL
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: global.mainTitle
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: global.generalDescription
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: global.webURL + global.mainImage
      },

      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: global.mainTitle
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: global.webURL
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: global.mainTitle
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: global.generalDescription
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: global.webURL + global.mainImage
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: global.webURL + global.mainImage
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: global.generalDescription
      }
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
