import { defineStore } from 'pinia'

export type ToasterPosition =
  | 'top-left' | 'top-center' | 'top-right'
  | 'bottom-left' | 'bottom-center' | 'bottom-right'

export type FormLayout = 'comfortable' | 'compact'

export const useAppSettingsStore = defineStore('appSettings', () => {
  const locale = ref('de')
  const toasterPosition = ref<ToasterPosition>('bottom-right')
  const formLayout = ref<FormLayout>('comfortable')

  return { locale, toasterPosition, formLayout }
}, {
  persist: true
})
