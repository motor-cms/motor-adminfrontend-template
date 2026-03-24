export default defineNuxtPlugin((nuxtApp) => {
  if (!import.meta.client) return

  const toast = useToast()
  const i18n = nuxtApp.$i18n as { t: (key: string) => string }

  nuxtApp.hook('app:error', (error) => {
    if (error && typeof error === 'object' && 'statusCode' in error && error.statusCode === 403) {
      toast.add({
        title: i18n.t('motor-core.errors.access_denied'),
        description: i18n.t('motor-core.errors.no_permission'),
        color: 'error',
        icon: 'i-lucide-shield-x'
      })
    }
  })
})
