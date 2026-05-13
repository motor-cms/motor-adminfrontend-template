import type { FormFieldsFromMetaOptions } from '../../composables/formFieldUtils'
import type { SelectOptionConfig } from '../../composables/useEntityForm'

export const domainSelectOptionConfigs: Record<string, SelectOptionConfig> = {
  client_id: { endpoint: '/api/v2/clients', labelKey: 'name' }
}

export const domainProtocolOptions = [
  { label: 'https', value: 'https' },
  { label: 'http', value: 'http' }
]

export const domainFormConfig: FormFieldsFromMetaOptions = {
  overrides: {
    client_id: { input: 'search-select' },
    protocol: { input: 'select' }
  },
  groups: {
    basic: ['client_id', 'name', 'is_active', 'is_preview_domain'],
    connection: ['protocol', 'host', 'port'],
    routing: ['path'],
    seo: ['is_canonical']
  }
}
