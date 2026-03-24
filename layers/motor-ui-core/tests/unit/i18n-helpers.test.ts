// AI-generated — review before merging
import { describe, expect, it } from 'vitest'
import { schemaNameToPrefix, humanizeKey, resolveLabel, resolveHelp } from '../../app/utils/i18n-helpers'

describe('schemaNameToPrefix', () => {
  it('schemaNameToPrefix-converts', () => {
    const result = schemaNameToPrefix('UserResource', /Resource$/)
    expect(result).toBe('motor-admin.users')
  })

  it('schemaNameToPrefix-converts-multi-word', () => {
    const result = schemaNameToPrefix('ConfigVariableResource', /Resource$/)
    expect(result).toBe('motor-admin.config_variables')
  })
})

describe('humanizeKey', () => {
  it('humanizeKey-basic', () => {
    expect(humanizeKey('some_key')).toBe('Some Key')
  })

  it('humanizeKey-strips-id-suffix', () => {
    const key = 'client_id'
    const humanized = humanizeKey(key.replace(/_id$/, ''))
    expect(humanized).toBe('Client')
  })
})

describe('resolveLabel', () => {
  it('resolveLabel-found', () => {
    const translations: Record<string, string> = {
      'motor-admin.users.name': 'Name'
    }
    const t = (key: string) => translations[key] ?? key
    const te = (key: string) => key in translations

    const result = resolveLabel(t, te, 'motor-admin.users', 'name')
    expect(result).toBe('Name')
  })

  it('resolveLabel-falls-back-to-entity-reference', () => {
    const translations: Record<string, string> = {
      'motor-admin.clients.client': 'Client'
    }
    const t = (key: string) => translations[key] ?? key
    const te = (key: string) => key in translations

    const result = resolveLabel(t, te, 'motor-admin.users', 'client_id')
    expect(result).toBe('Client')
  })

  it('resolveLabel-falls-back-to-global-translation', () => {
    const translations: Record<string, string> = {
      'motor-core.global.email': 'E-Mail'
    }
    const t = (key: string) => translations[key] ?? key
    const te = (key: string) => key in translations

    const result = resolveLabel(t, te, 'motor-admin.users', 'email')
    expect(result).toBe('E-Mail')
  })

  it('resolveLabel-humanizes-key-as-last-resort', () => {
    const t = (key: string) => key
    const te = (_key: string) => false

    const result = resolveLabel(t, te, 'motor-admin.users', 'some_key')
    expect(result).toBe('Some Key')
  })
})

describe('resolveHelp', () => {
  it('resolveHelp-returns-help-text', () => {
    const translations: Record<string, string> = {
      'motor-admin.users.help.name': 'Enter your full name'
    }
    const t = (key: string) => translations[key] ?? key
    const te = (key: string) => key in translations

    const result = resolveHelp(te, t, 'motor-admin.users', 'name')
    expect(result).toBe('Enter your full name')
  })

  it('resolveHelp-returns-undefined-when-missing', () => {
    const t = (key: string) => key
    const te = (_key: string) => false

    const result = resolveHelp(te, t, 'motor-admin.users', 'name')
    expect(result).toBeUndefined()
  })
})
