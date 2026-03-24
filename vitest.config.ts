import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: [
      'layers/motor-ui-core',
      'layers/motor-ui-admin',
      'layers/motor-ui-media'
    ]
  }
})
