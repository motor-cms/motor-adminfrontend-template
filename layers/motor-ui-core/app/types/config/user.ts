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
  overrides: {
    name: { span: 6 },
    email: { span: 6 },
    permissions: {
      input: 'grouped-checkbox',
      inputProps: { presetsEndpoint: '/api/v2/permission-groups?per_page=0' }
    }
  },
  groups: {
    basic: ['clients', 'name', 'email'],
    security: ['password'],
    access: ['roles', 'permissions']
  }
}

export const userEditFormConfig: FormFieldsFromMetaOptions = {
  omit: ['avatar', 'password'],
  overrides: {
    name: { span: 6 },
    email: { span: 6 },
    password: { span: 6 },
    password_confirmation: { span: 6 },
    permissions: {
      input: 'grouped-checkbox',
      inputProps: { presetsEndpoint: '/api/v2/permission-groups?per_page=0' }
    }
  },
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

/** Fields that grant privileges; only SuperAdmins may change them (ZRMDEV-237). */
export const userAccessFieldKeys = ['roles', 'permissions'] as const

/**
 * Shows roles and permissions read-only for non-SuperAdmins. The backend
 * ignores these fields for them, so editing them would only look successful.
 */
export function restrictUserAccessFields(fields: FormFieldConfig[], isSuperAdmin: boolean, hint: string): void {
  if (isSuperAdmin) return
  for (const field of fields) {
    if ((userAccessFieldKeys as readonly string[]).includes(field.key)) {
      field.disabled = true
      field.description = hint
    }
  }
}

/** Drops roles and permissions from the save payload of a non-SuperAdmin. */
export function stripUserAccessFields(data: Record<string, unknown>, isSuperAdmin: boolean): void {
  if (isSuperAdmin) return
  for (const key of userAccessFieldKeys) delete data[key]
}
