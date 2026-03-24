export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:created', () => {
    const appSettings = useAppSettingsStore()
    const i18n = nuxtApp.$i18n as { locale: { value: string } }

    if (appSettings.locale) {
      i18n.locale.value = appSettings.locale
    }
  })
})
