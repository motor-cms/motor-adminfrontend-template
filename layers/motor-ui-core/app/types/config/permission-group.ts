import type { FormFieldsFromMetaOptions } from '../../composables/formFieldUtils'
import type { SelectOptionConfig } from '../../composables/useEntityForm'
import type { FormFieldConfig } from '../form'

export const permissionGroupSelectOptionConfigs: Record<string, SelectOptionConfig> = {
  permissions: { endpoint: '/api/v2/permissions?per_page=0', labelKey: 'name' }
}

export const permissionGroupExtraFields: FormFieldConfig[] = [
  {
    key: 'permissions',
    label: '',
    input: 'checkbox-group',
    required: false,
    group: 'permissions'
  }
]

export const permissionGroupFormConfig: FormFieldsFromMetaOptions = {
  translationPrefix: 'motor-admin.permissions',
  groups: {
    basic: ['name'],
    permissions: { fields: ['permissions'], orientation: 'vertical' }
  }
}
