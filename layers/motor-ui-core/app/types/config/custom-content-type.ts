import type { FormFieldsFromMetaOptions } from '../../composables/formFieldUtils'
import type { ColumnsFromMetaOptions } from '../../composables/useResourceColumns'
import type { SelectOptionConfig } from '../../composables/useEntityForm'

export const customContentTypeSelectOptionConfigs: Record<string, SelectOptionConfig> = {
  client_id: { endpoint: '/api/v2/clients', labelKey: 'name' }
}

export const customContentTypeGridConfig: ColumnsFromMetaOptions<Record<string, unknown>> = {
  pick: ['name', 'slug', 'client'],
  overrides: {
    name: { sortable: true, hideable: false },
    client: { key: 'client.name' }
  }
}

export const customContentTypeFormConfig: FormFieldsFromMetaOptions = {
  omit: ['integrations', 'type', 'is_searchable', 'is_sortable'],
  overrides: {
    client_id: { input: 'search-select' },
    slug: { input: 'slug' }
  },
  groups: {
    basic: ['client_id', 'name', 'slug']
  }
}
