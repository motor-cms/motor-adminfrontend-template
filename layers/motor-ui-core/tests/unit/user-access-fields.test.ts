import { describe, expect, it } from 'vitest'
import type { FormFieldConfig } from '../../app/types/form'
import { restrictUserAccessFields, stripUserAccessFields } from '../../app/types/config/user'

// ZRMDEV-237: only SuperAdmins may change roles and permissions.
function fields(): FormFieldConfig[] {
  return [
    { key: 'name', label: 'Name', input: 'text', required: true },
    { key: 'roles', label: 'Rollen', input: 'multi-select', required: false },
    { key: 'permissions', label: 'Berechtigungen', input: 'grouped-checkbox', required: false }
  ]
}

describe('user access fields', () => {
  it('shows roles and permissions read-only with a hint for non-SuperAdmins', () => {
    const list = fields()
    restrictUserAccessFields(list, false, 'Nur SuperAdmins')
    const byKey = Object.fromEntries(list.map(f => [f.key, f]))
    expect(byKey.roles!.disabled).toBe(true)
    expect(byKey.permissions!.disabled).toBe(true)
    expect(byKey.roles!.description).toBe('Nur SuperAdmins')
    expect(byKey.name!.disabled).toBeUndefined()
  })

  it('leaves the fields editable for SuperAdmins', () => {
    const list = fields()
    restrictUserAccessFields(list, true, 'Nur SuperAdmins')
    expect(list.every(f => f.disabled === undefined)).toBe(true)
  })

  it('drops roles and permissions from a non-SuperAdmin payload and keeps the rest', () => {
    const data: Record<string, unknown> = { name: 'Ena', roles: [1], permissions: [2] }
    stripUserAccessFields(data, false)
    expect(data).toEqual({ name: 'Ena' })
  })

  it('keeps roles and permissions in a SuperAdmin payload', () => {
    const data: Record<string, unknown> = { name: 'Ena', roles: [1], permissions: [2] }
    stripUserAccessFields(data, true)
    expect(data).toEqual({ name: 'Ena', roles: [1], permissions: [2] })
  })
})
