import type { FormFieldsFromMetaOptions } from '../../composables/formFieldUtils'
import type { SelectOptionConfig } from '../../composables/useEntityForm'

export const roleSelectOptionConfigs: Record<string, SelectOptionConfig> = {
  permissions: { endpoint: '/api/v2/permissions', labelKey: 'name' }
}

export const roleFormConfig: FormFieldsFromMetaOptions = {
  groups: {
    basic: ['name', 'guard_name'],
    access: ['permissions']
  }
}
