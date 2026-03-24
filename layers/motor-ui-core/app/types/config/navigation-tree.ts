import type { FormFieldsFromMetaOptions } from '../../composables/formFieldUtils'
import type { SelectOptionConfig } from '../../composables/useEntityForm'

export const navigationTreeSelectOptionConfigs: Record<string, SelectOptionConfig> = {
  client_id: { endpoint: '/api/v2/clients', labelKey: 'name' },
  language_id: { endpoint: '/api/v2/languages', labelKey: 'native_name' }
}

export const navigationTreeFormConfig: FormFieldsFromMetaOptions = {
  groups: {
    basic: ['name', 'client_id', 'language_id', 'scope']
  }
}
