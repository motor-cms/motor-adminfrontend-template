import { defineConfig } from 'vitest/config'
import { createLayerAliases } from '../../tests/vitest-resolve'

export default defineConfig({
  define: {
    'import.meta.client': 'true'
  },
  resolve: {
    alias: createLayerAliases()
  },
  test: {
    name: 'motor-ui-admin',
    environment: 'node',
    include: ['tests/unit/**/*.test.ts'],
    setupFiles: ['../../tests/setup.ts']
  }
})
