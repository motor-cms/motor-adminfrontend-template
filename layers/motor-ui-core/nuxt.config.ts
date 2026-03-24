import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __layerDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    'nuxt-auth-sanctum',
    resolve(__layerDir, './app/modules/i18n-layer-merge'),
    '@nuxtjs/i18n'
  ],

  css: [resolve(__layerDir, './app/assets/css/main.css')],

  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: ''
  },

  i18n: {
    locales: [
      { code: 'de', name: 'Deutsch' },
      { code: 'en', name: 'English' }
    ],
    defaultLocale: 'de',
    strategy: 'no_prefix',
    detectBrowserLanguage: false,
    bundle: {
      fullInstall: false
    },
    vueI18n: resolve(__layerDir, './app/i18n.config.ts')
  },

  pinia: {
    storesDirs: [
      resolve(__layerDir, './app/stores'),
      'stores' // default: scans stores/ in each layer + app via @pinia/nuxt layer iteration
    ]
  },

  sanctum: {
    baseUrl: '',
    endpoints: {
      csrf: '/sanctum/csrf-cookie',
      login: '/auth/login',
      logout: '/auth/logout',
      user: '/api/user'
    },
    csrf: {
      cookie: 'XSRF-TOKEN',
      header: 'X-XSRF-TOKEN'
    },
    client: {
      retry: false
    },
    redirect: {
      keepRequestedRoute: true,
      onLogin: '/',
      onLogout: '/login',
      onAuthOnly: '/login',
      onGuestOnly: '/'
    },
    globalMiddleware: {
      enabled: true,
      allow404WithoutAuth: true
    }
  }
})
