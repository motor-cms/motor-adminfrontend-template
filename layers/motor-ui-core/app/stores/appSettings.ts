import { defineStore } from 'pinia'

export const useAppSettingsStore = defineStore('appSettings', () => {
  const locale = ref('de')

  return { locale }
}, {
  persist: true
})
