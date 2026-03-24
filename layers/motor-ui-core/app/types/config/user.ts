import type { FormFieldsFromMetaOptions } from '../../composables/formFieldUtils'
import type { FormFieldConfig } from '../form'
import type { SelectOptionConfig } from '../../composables/useEntityForm'

export const userSelectOptionConfigs: Record<string, SelectOptionConfig> = {
  clients: { endpoint: '/api/v2/clients', labelKey: 'name' },
  roles: { endpoint: '/api/v2/roles', labelKey: 'name' },
  permissions: { endpoint: '/api/v2/permissions', labelKey: 'name' }
}

export const userFormConfig: FormFieldsFromMetaOptions = {
  omit: ['avatar'],
  groups: {
    basic: ['clients', 'name', 'email'],
    security: ['password'],
    access: ['roles', 'permissions']
  }
}

export const userEditFormConfig: FormFieldsFromMetaOptions = {
  omit: ['avatar', 'password'],
  groups: {
    basic: ['clients', 'name', 'email'],
    security: ['change_password', 'password', 'password_confirmation'],
    access: ['roles', 'permissions']
  }
}

export function userEditExtraFields(t: (key: string) => string): FormFieldConfig[] {
  return [
    {
      key: 'change_password',
      label: t('motor-admin.users.change_password'),
      input: 'toggle',
      required: false,
      group: 'security'
    },
    {
      key: 'password',
      label: t('motor-admin.users.password'),
      input: 'password',
      required: false,
      group: 'security'
    },
    {
      key: 'password_confirmation',
      label: t('motor-admin.users.password_confirmation'),
      input: 'password',
      required: false,
      group: 'security',
      inputProps: { hideStrength: true }
    }
  ]
}
