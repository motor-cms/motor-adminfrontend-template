import { registerGridRenderers } from '../composables/useGridRenderers'
import { coreRenderers } from '../components/grid/renderers'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:created', () => {
    registerGridRenderers(coreRenderers)
  })
})
