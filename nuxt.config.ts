import { defineNuxtConfig } from 'nuxt'
import UnpluginComponentsVite from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // app
  app: {
    head: {
      title: 'Nuxt 3  Starter',
      titleTemplate: '%s - Nuxt 3 Awesome Starter',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Nuxt 3  Starter',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  // css
  css: [
    'virtual:windi-base.css',
    'virtual:windi-components.css',
    'virtual:windi-utilities.css',
    '~/assets/sass/vendor.scss',
    '~/assets/sass/app.scss',
  ],
  // build
  build: {
    transpile: ['@headlessui/vue'],
  },
  // modules
  modules: [
    'nuxt-windicss',
    '@intlify/nuxt3',
    '@vueuse/nuxt',
    '@nuxt/content',
    '@pinia/nuxt',
  ],
  // build modules
  buildModules: ['@nuxtjs/eslint-module', 'unplugin-icons/nuxt', '@nuxtjs/svg'],
  // experimental features
  experimental: {
    reactivityTransform: true,
  },
  // auto import components
  components: true,
  vite: {
    plugins: [
      UnpluginComponentsVite({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
      }),
    ],
  },
  // vueuse
  vueuse: {
    ssrHandlers: true,
  },
  // windicss
  windicss: {
    analyze: {
      analysis: {
        interpretUtilities: false,
      },
      server: {
        port: 4000,
        open: false,
      },
    },
    scan: true,
  },
})
