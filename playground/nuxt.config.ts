export default defineNuxtConfig({
  extends: [
    '../layers/motor-ui-core',
    '../layers/motor-ui-admin',
    '../layers/motor-ui-media'
  ],

  future: {
    compatibilityVersion: 4
  },

  devtools: { enabled: true }
})
