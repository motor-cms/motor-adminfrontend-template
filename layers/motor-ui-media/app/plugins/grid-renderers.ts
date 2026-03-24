import { registerGridRenderers } from '#imports'
import ImageRenderer from '../components/grid/renderers/ImageRenderer.vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:created', () => {
    registerGridRenderers({
      'image': ImageRenderer,
    })
  })
})
