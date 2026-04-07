import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __layerDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  css: [resolve(__layerDir, 'app/assets/css/v-onboarding.css')],
})
