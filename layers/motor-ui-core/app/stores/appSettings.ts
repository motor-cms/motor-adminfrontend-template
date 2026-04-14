import { defineStore } from 'pinia'

export type ToasterPosition =
  | 'top-left' | 'top-center' | 'top-right'
  | 'bottom-left' | 'bottom-center' | 'bottom-right'

export const useAppSettingsStore = defineStore('appSettings', () => {
  const locale = ref('de')
  const toasterPosition = ref<ToasterPosition>('bottom-right')

  return { locale, toasterPosition }
}, {
  persist: true
})
