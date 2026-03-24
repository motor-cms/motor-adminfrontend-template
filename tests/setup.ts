import { ref, computed, reactive, watch, watchEffect, toRef, toRefs, nextTick } from 'vue'
import { vi } from 'vitest'

const vueAutoImports = { ref, computed, reactive, watch, watchEffect, toRef, toRefs, nextTick }

for (const [key, value] of Object.entries(vueAutoImports)) {
  vi.stubGlobal(key, value)
}

vi.stubGlobal('piniaPluginPersistedstate', {
  localStorage: () => ({
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {}
  })
})
