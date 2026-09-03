import type { FormFieldsFromMetaOptions } from '../../composables/formFieldUtils'
import type { SelectOptionConfig } from '../../composables/useEntityForm'

export const searchConfigSelectOptionConfigs: Record<string, SelectOptionConfig> = {
  domain_id: { endpoint: '/api/v2/domains', labelKey: 'name' }
}

export const searchConfigFormConfig: FormFieldsFromMetaOptions = {
  translationPrefix: 'motor-builder.search_configs',
  // client_id steht seit dem Wechsel auf die V2-Definition im Request-Schema
  // (EN-2305). Im Formular hat es nichts zu suchen: Die Suchkonfiguration
  // haengt an einer Domain, und die traegt den Mandanten bereits.
  omit: ['links', 'image_crop', 'client_id'],
  overrides: {
    domain_id: { input: 'search-select' },
    url: { input: 'url' },
    is_active: { input: 'toggle' }
  },
  groups: {
    basic: ['domain_id', 'is_active'],
    article: ['overline', 'headline', 'teaser', 'url', 'url_label', 'file_id']
  }
}
