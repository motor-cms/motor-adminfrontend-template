import type { ColumnsFromMetaOptions } from '../../composables/useResourceColumns'
import type { FormFieldsFromMetaOptions } from '../../composables/formFieldUtils'
import type { SelectOptionConfig } from '../../composables/useEntityForm'

export const topicSelectOptionConfigs: Record<string, SelectOptionConfig> = {
  client_id: { endpoint: '/api/v2/clients', labelKey: 'name' },
  categories: { endpoint: '/api/v2/categories?scope=scoring', labelKey: 'name' }
}

export const topicGridConfig: ColumnsFromMetaOptions<Record<string, unknown>> = {
  pick: ['name', 'categories'],
  translationPrefix: 'motor-scoring.topics'
}

export const topicFormConfig: FormFieldsFromMetaOptions = {
  overrides: {
    categories: { input: 'multi-select' }
  },
  groups: {
    basic: ['client_id', 'name', 'categories']
  }
}
