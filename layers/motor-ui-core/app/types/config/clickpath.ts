import type { FormFieldsFromMetaOptions } from '../../composables/formFieldUtils'
import type { SelectOptionConfig } from '../../composables/useEntityForm'

export const clickpathSelectOptionConfigs: Record<string, SelectOptionConfig> = {
  client_id: { endpoint: '/api/v2/clients', labelKey: 'name' }
}

export const clickpathFormConfig: FormFieldsFromMetaOptions = {
  translationPrefix: 'motor-assistant.clickpaths',
  overrides: {
    client_id: { input: 'search-select' }
  },
  groups: {
    basic: ['client_id', 'name', 'duration']
  }
}
