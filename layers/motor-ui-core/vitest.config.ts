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
    name: 'motor-ui-core',
    environment: 'node',
    include: ['tests/unit/**/*.test.ts'],
    setupFiles: ['../../tests/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'json-summary'],
      include: [
        'app/composables/**/*.ts',
        'app/utils/**/*.ts',
        'app/stores/**/*.ts',
        'app/components/**/*.vue'
      ],
      exclude: [
        '**/*.d.ts',
        '**/*.test.ts',
        '**/*.spec.ts'
      ]
    }
  }
})
