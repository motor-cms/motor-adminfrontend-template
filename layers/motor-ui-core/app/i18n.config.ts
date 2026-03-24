import type { LocaleMessages, DefineLocaleMessage } from 'vue-i18n'
import de from '#i18n-merged/de.json'
import en from '#i18n-merged/en.json'

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: 'en',
  messages: { de, en } as LocaleMessages<DefineLocaleMessage>
}))
