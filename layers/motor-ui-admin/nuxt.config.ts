import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __layerDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  modules: ['v-onboarding/nuxt'],
  css: [resolve(__layerDir, 'app/assets/css/v-onboarding.css')],
  // The admin renders only locally shipped fonts (see ui-core main.css). The
  // theme-preview page and its docs name other families (Tailwind scans the
  // theme .md files too), which @nuxt/fonts would resolve against Google at
  // build time. That fetch is flaky from CI runners, so no remote provider is used.
  fonts: {
    providers: {
      google: false,
      googleicons: false,
      bunny: false,
      fontshare: false,
      fontsource: false
    }
  },
  runtimeConfig: {
    public: {
      featureClientFrontendConfig:
        process.env.NUXT_PUBLIC_FEATURE_CLIENT_FRONTEND_CONFIG === 'true'
    }
  }
})
