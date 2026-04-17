import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __layerDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  modules: ['v-onboarding/nuxt'],
  css: [resolve(__layerDir, 'app/assets/css/v-onboarding.css')],
  runtimeConfig: {
    public: {
      featureClientFrontendConfig:
        process.env.NUXT_PUBLIC_FEATURE_CLIENT_FRONTEND_CONFIG === 'true'
    }
  }
})
