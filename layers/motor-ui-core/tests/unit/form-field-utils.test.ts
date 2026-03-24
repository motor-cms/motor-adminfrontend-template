import { describe, expect, it } from 'vitest'
import {
  formFieldsFromMeta,
  initFormState,
  type ResourceFormMeta
} from '../../app/composables/formFieldUtils'
import type { FormFieldConfig } from '~/types/form'

const meta: ResourceFormMeta = {
  schemaName: 'UserPostRequest',
  fields: {
    name: { input: 'text', required: true },
    email: { input: 'email', required: true },
    is_active: { input: 'toggle' },
    role_ids: { input: 'multi-select' }
  }
}
const t = (key: string) => key
const te = (_key: string) => false

describe('formFieldsFromMeta', () => {
  it('generates fields from meta', () => {
    const { fields } = formFieldsFromMeta(meta, t, undefined, te)
    expect(fields).toHaveLength(4)
    const nameField = fields.find((f: FormFieldConfig) => f.key === 'name')
    expect(nameField).toBeDefined()
    expect(nameField?.label).toBe('Name')
    expect(nameField?.input).toBe('text')
    expect(nameField?.required).toBe(true)
  })

  it('picks specified fields', () => {
    const { fields } = formFieldsFromMeta(meta, t, { pick: ['name', 'email'] }, te)
    expect(fields).toHaveLength(2)
    expect(fields.map(f => f.key)).toEqual(['name', 'email'])
  })

  it('omits specified fields', () => {
    const { fields } = formFieldsFromMeta(meta, t, { omit: ['role_ids'] }, te)
    expect(fields).toHaveLength(3)
    expect(fields.map(f => f.key)).toEqual(['name', 'email', 'is_active'])
  })

  it('applies overrides to fields', () => {
    const { fields } = formFieldsFromMeta(meta, t, {
      overrides: { name: { input: 'textarea', required: false } }
    }, te)
    const nameField = fields.find(f => f.key === 'name')
    expect(nameField?.input).toBe('textarea')
    expect(nameField?.required).toBe(false)
  })

  it('includes extraFields in output', () => {
    const { fields } = formFieldsFromMeta(meta, t, {
      extraFields: { tags: { input: 'tags' } }
    }, te)
    expect(fields.find(f => f.key === 'tags')).toBeDefined()
    expect(fields.find(f => f.key === 'tags')?.input).toBe('tags')
  })

  it('assigns groups to fields', () => {
    const { fields, groups } = formFieldsFromMeta(meta, t, {
      groups: { basic: ['name', 'email'], settings: ['is_active', 'role_ids'] }
    }, te)
    const nameField = fields.find(f => f.key === 'name')
    expect(nameField?.group).toBe('basic')
    const activeField = fields.find(f => f.key === 'is_active')
    expect(activeField?.group).toBe('settings')
    expect(groups).toHaveLength(2)
  })

  it('formFieldUtils-groups', () => {
    const { fields, groups } = formFieldsFromMeta(meta, t, {
      groups: { basic: ['name', 'email'], settings: ['is_active', 'role_ids'] }
    }, te)
    expect(groups).toHaveLength(2)
    expect(groups[0].key).toBe('basic')
    expect(groups[1].key).toBe('settings')
    expect(fields.filter(f => f.group === 'basic')).toHaveLength(2)
    expect(fields.filter(f => f.group === 'settings')).toHaveLength(2)
  })

  it('supports FormGroupOptions with orientation', () => {
    const { groups } = formFieldsFromMeta(meta, t, {
      groups: {
        basic: { fields: ['name', 'email'], orientation: 'horizontal' }
      }
    }, te)
    expect(groups[0].orientation).toBe('horizontal')
  })

  it('uses translationPrefix override', () => {
    const translations: Record<string, string> = {
      'custom-prefix.name': 'Custom Name'
    }
    const customT = (key: string) => translations[key] ?? key
    const customTe = (key: string) => key in translations

    const { fields } = formFieldsFromMeta(meta, customT, {
      translationPrefix: 'custom-prefix'
    }, customTe)

    const nameField = fields.find(f => f.key === 'name')
    expect(nameField?.label).toBe('Custom Name')
  })

  it('generates description when translation exists', () => {
    const translations: Record<string, string> = {
      'motor-admin.users.name_description': 'Enter your full name'
    }
    const customT = (key: string) => translations[key] ?? key
    const customTe = (key: string) => key in translations

    const { fields } = formFieldsFromMeta(meta, customT, undefined, customTe)
    const nameField = fields.find(f => f.key === 'name')
    expect(nameField?.description).toBe('Enter your full name')
  })

  it('picks only existing fields (ignores missing)', () => {
    const { fields } = formFieldsFromMeta(meta, t, {
      pick: ['name', 'nonexistent', 'email']
    }, te)
    expect(fields).toHaveLength(2)
    expect(fields.map(f => f.key)).toEqual(['name', 'email'])
  })
})

describe('zod schema validation', () => {
  it('validates required text field', () => {
    const { schema } = formFieldsFromMeta(meta, t, undefined, te)
    const valid = schema.safeParse({ name: 'John', email: 'j@x.com', is_active: false, role_ids: [] })
    expect(valid.success).toBe(true)
    const invalid = schema.safeParse({ name: '', email: 'j@x.com', is_active: false, role_ids: [] })
    expect(invalid.success).toBe(false)
  })

  it('validates email field', () => {
    const { schema } = formFieldsFromMeta(meta, t, undefined, te)
    const invalid = schema.safeParse({ name: 'John', email: 'invalid', is_active: false, role_ids: [] })
    expect(invalid.success).toBe(false)
  })

  it('validates optional email allows empty', () => {
    const optMeta: ResourceFormMeta = {
      schemaName: 'Test',
      fields: { email: { input: 'email' } }
    }
    const { schema } = formFieldsFromMeta(optMeta, t, undefined, te)
    expect(schema.safeParse({ email: '' }).success).toBe(true)
    expect(schema.safeParse({ email: undefined }).success).toBe(true)
  })

  it('validates number field', () => {
    const numMeta: ResourceFormMeta = {
      schemaName: 'Test',
      fields: { count: { input: 'number', required: true } }
    }
    const { schema } = formFieldsFromMeta(numMeta, t, undefined, te)
    expect(schema.safeParse({ count: 5 }).success).toBe(true)
    expect(schema.safeParse({ count: '' }).success).toBe(false)
    expect(schema.safeParse({ count: null }).success).toBe(false)
  })

  it('validates optional number', () => {
    const numMeta: ResourceFormMeta = {
      schemaName: 'Test',
      fields: { count: { input: 'number' } }
    }
    const { schema } = formFieldsFromMeta(numMeta, t, undefined, te)
    expect(schema.safeParse({ count: null }).success).toBe(true)
    expect(schema.safeParse({ count: undefined }).success).toBe(true)
  })

  it('validates select field', () => {
    const selMeta: ResourceFormMeta = {
      schemaName: 'Test',
      fields: { role: { input: 'select', required: true } }
    }
    const { schema } = formFieldsFromMeta(selMeta, t, undefined, te)
    expect(schema.safeParse({ role: 1 }).success).toBe(true)
    expect(schema.safeParse({ role: '' }).success).toBe(false)
    expect(schema.safeParse({ role: null }).success).toBe(false)
  })

  it('validates optional select', () => {
    const selMeta: ResourceFormMeta = {
      schemaName: 'Test',
      fields: { role: { input: 'select' } }
    }
    const { schema } = formFieldsFromMeta(selMeta, t, undefined, te)
    expect(schema.safeParse({ role: null }).success).toBe(true)
    expect(schema.safeParse({ role: 'admin' }).success).toBe(true)
  })

  it('validates search-select field', () => {
    const selMeta: ResourceFormMeta = {
      schemaName: 'Test',
      fields: { category: { input: 'search-select', required: true } }
    }
    const { schema } = formFieldsFromMeta(selMeta, t, undefined, te)
    expect(schema.safeParse({ category: 1 }).success).toBe(true)
    expect(schema.safeParse({ category: undefined }).success).toBe(false)
  })

  it('validates multi-select and checkbox-group', () => {
    const multiMeta: ResourceFormMeta = {
      schemaName: 'Test',
      fields: {
        roles: { input: 'multi-select' },
        perms: { input: 'checkbox-group' }
      }
    }
    const { schema } = formFieldsFromMeta(multiMeta, t, undefined, te)
    expect(schema.safeParse({ roles: [1, 2], perms: ['read'] }).success).toBe(true)
    expect(schema.safeParse({ roles: [], perms: [] }).success).toBe(true)
  })

  it('validates tags field', () => {
    const tagsMeta: ResourceFormMeta = {
      schemaName: 'Test',
      fields: { tags: { input: 'tags' } }
    }
    const { schema } = formFieldsFromMeta(tagsMeta, t, undefined, te)
    expect(schema.safeParse({ tags: ['a', 'b'] }).success).toBe(true)
    expect(schema.safeParse({ tags: null }).success).toBe(true)
  })

  it('validates toggle field', () => {
    const toggleMeta: ResourceFormMeta = {
      schemaName: 'Test',
      fields: { active: { input: 'toggle' } }
    }
    const { schema } = formFieldsFromMeta(toggleMeta, t, undefined, te)
    expect(schema.safeParse({ active: true }).success).toBe(true)
    expect(schema.safeParse({ active: false }).success).toBe(true)
  })

  it('validates password field', () => {
    const pwMeta: ResourceFormMeta = {
      schemaName: 'Test',
      fields: { password: { input: 'password', required: true } }
    }
    const { schema } = formFieldsFromMeta(pwMeta, t, undefined, te)
    expect(schema.safeParse({ password: 'longpassword' }).success).toBe(true)
    expect(schema.safeParse({ password: 'short' }).success).toBe(false)
  })

  it('validates optional password', () => {
    const pwMeta: ResourceFormMeta = {
      schemaName: 'Test',
      fields: { password: { input: 'password' } }
    }
    const { schema } = formFieldsFromMeta(pwMeta, t, undefined, te)
    expect(schema.safeParse({ password: '' }).success).toBe(true)
    expect(schema.safeParse({ password: 'longpassword' }).success).toBe(true)
    expect(schema.safeParse({ password: 'short' }).success).toBe(false)
  })

  it('validates textarea field', () => {
    const taMeta: ResourceFormMeta = {
      schemaName: 'Test',
      fields: { bio: { input: 'textarea', required: true } }
    }
    const { schema } = formFieldsFromMeta(taMeta, t, undefined, te)
    expect(schema.safeParse({ bio: 'Hello' }).success).toBe(true)
    expect(schema.safeParse({ bio: '' }).success).toBe(false)
  })
})

describe('initFormState', () => {
  it('initializes text fields as empty strings', () => {
    const fields: FormFieldConfig[] = [
      { key: 'name', label: 'Name', input: 'text', required: true }
    ]
    const state = initFormState(fields)
    expect(state.name).toBe('')
  })

  it('initializes toggle as false', () => {
    const fields: FormFieldConfig[] = [
      { key: 'active', label: 'Active', input: 'toggle', required: false }
    ]
    const state = initFormState(fields)
    expect(state.active).toBe(false)
  })

  it('initializes multi-select as empty array', () => {
    const fields: FormFieldConfig[] = [
      { key: 'roles', label: 'Roles', input: 'multi-select', required: false }
    ]
    const state = initFormState(fields)
    expect(state.roles).toEqual([])
  })

  it('initializes checkbox-group as empty array', () => {
    const fields: FormFieldConfig[] = [
      { key: 'perms', label: 'Perms', input: 'checkbox-group', required: false }
    ]
    const state = initFormState(fields)
    expect(state.perms).toEqual([])
  })

  it('initializes tags as empty array', () => {
    const fields: FormFieldConfig[] = [
      { key: 'tags', label: 'Tags', input: 'tags', required: false }
    ]
    const state = initFormState(fields)
    expect(state.tags).toEqual([])
  })

  it('initializes select and number as undefined', () => {
    const fields: FormFieldConfig[] = [
      { key: 'category', label: 'Category', input: 'select', required: false },
      { key: 'count', label: 'Count', input: 'number', required: false },
      { key: 'ref', label: 'Ref', input: 'search-select', required: false }
    ]
    const state = initFormState(fields)
    expect(state.category).toBeUndefined()
    expect(state.count).toBeUndefined()
    expect(state.ref).toBeUndefined()
  })
})
