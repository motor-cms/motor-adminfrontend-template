import type { ColumnsFromMetaOptions } from '../../composables/useResourceColumns'
import type { FormFieldsFromMetaOptions } from '../../composables/formFieldUtils'
import type { SelectOptionConfig } from '../../composables/useEntityForm'

export const fileSelectOptionConfigs: Record<string, SelectOptionConfig> = {
  client_id: { endpoint: '/api/v2/clients', labelKey: 'name' }
}

export const fileGridConfig: ColumnsFromMetaOptions<Record<string, unknown>> = {
  pick: ['description', 'categories'],
  translationPrefix: 'motor-media.files'
}

export const fileCreateFormConfig: FormFieldsFromMetaOptions = {
  omit: ['file', 'files', 'categories'],
  overrides: {
    tags: { input: 'tags' }
  },
  groups: {
    basic: ['client_id', 'description', 'author', 'source', 'alt_text', 'tags'],
    settings: ['is_global', 'is_excluded_from_search_index']
  }
}

export const fileEditFormConfig: FormFieldsFromMetaOptions = {
  omit: ['file', 'files', 'categories'],
  overrides: {
    tags: { input: 'tags' }
  },
  groups: {
    basic: ['client_id', 'description', 'author', 'source', 'alt_text', 'tags'],
    settings: ['is_global', 'is_excluded_from_search_index']
  }
}
