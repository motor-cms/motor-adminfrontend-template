import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __layerDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
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

  runtimeConfig: {
    public: {
      // Gate the theme picker in the user menu behind an env flag so
      // work-in-progress themes (liquid-glass, etc.) stay hidden from
      // customers. Devs enable via NUXT_PUBLIC_SHOW_THEME_PICKER=true.
      showThemePicker: false
    }
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
