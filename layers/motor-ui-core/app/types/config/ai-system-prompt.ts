import type { FormFieldsFromMetaOptions } from '../../composables/formFieldUtils'
import type { SelectOptionConfig } from '../../composables/useEntityForm'

export const aiSystemPromptSelectOptionConfigs: Record<string, SelectOptionConfig> = {
  client_id: { endpoint: '/api/v2/clients', labelKey: 'name' }
}

export const aiSystemPromptFormConfig: FormFieldsFromMetaOptions = {
  overrides: {
    client_id: { input: 'search-select' },
    prompt: { input: 'textarea', inputProps: { rows: 10 } }
  },
  groups: {
    basic: ['name', 'client_id', 'prompt']
  }
}
