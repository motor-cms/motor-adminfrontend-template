import { describe, expect, it } from 'vitest'
import {
  buildPermissionGroups,
  normalizePermissionAction,
  normalizePermissionGroupKey,
  permissionLabel,
  PERMISSION_ACTION_ORDER
} from '../../app/utils/permission-groups'

const tGroup = (key: string) => ({ 'email-templates': 'E-Mail-Vorlagen', 'builder-pages': 'Seiten' } as Record<string, string>)[key] ?? key
const tAction = (action: string) => ({ read: 'Lesen', write: 'Schreiben', delete: 'Löschen', publish: 'Veröffentlichen' } as Record<string, string>)[action] ?? action

describe('normalizePermissionGroupKey', () => {
  it('treats underscores and hyphens the same', () => {
    expect(normalizePermissionGroupKey('email_templates')).toBe('email-templates')
    expect(normalizePermissionGroupKey('Builder_Pages')).toBe('builder-pages')
    expect(normalizePermissionGroupKey('email-templates')).toBe('email-templates')
  })
})

describe('normalizePermissionAction', () => {
  it('maps publisher onto publish', () => {
    expect(normalizePermissionAction('publisher')).toBe('publish')
    expect(normalizePermissionAction('Read')).toBe('read')
  })
})

describe('buildPermissionGroups', () => {
  it('merges groups that only differ in _ vs - and dedupes actions', () => {
    const groups = buildPermissionGroups([
      { value: 1, label: 'email-templates.read' },
      { value: 2, label: 'email_templates.read' },
      { value: 3, label: 'email_templates.write' }
    ], '.', tGroup, tAction)

    expect(groups).toHaveLength(1)
    expect(groups[0]!.label).toBe('E-Mail-Vorlagen')
    const read = groups[0]!.options.find(o => o.action === 'read')!
    expect(read.values).toEqual([1, 2])
    expect(groups[0]!.options.filter(o => o.action === 'read')).toHaveLength(1)
  })

  it('orders actions read/write/delete/publish like the legend', () => {
    const groups = buildPermissionGroups([
      { value: 1, label: 'builder_pages.write' },
      { value: 2, label: 'builder_pages.publisher' },
      { value: 3, label: 'builder_pages.delete' },
      { value: 4, label: 'builder_pages.read' },
      { value: 5, label: 'builder_pages.export' }
    ], '.', tGroup, tAction)

    expect(groups[0]!.label).toBe('Seiten')
    expect(groups[0]!.options.map(o => o.action)).toEqual(['read', 'write', 'delete', 'publish', 'export'])
    expect(groups[0]!.options.find(o => o.action === 'publish')!.actionLabel).toBe('Veröffentlichen')
  })

  it('exposes a fixed column order for the standard actions', () => {
    expect(PERMISSION_ACTION_ORDER).toEqual(['read', 'write', 'delete', 'publish'])
  })
})

// The role list showed raw permission names such as `builder_pages.publisher`.
describe('permissionLabel', () => {
  it('reads a permission name as "group: action" with the matrix labels', () => {
    expect(permissionLabel('builder_pages.publisher', tGroup, tAction)).toBe('Seiten: Veröffentlichen')
    expect(permissionLabel('email-templates.read', tGroup, tAction)).toBe('E-Mail-Vorlagen: Lesen')
  })

  it('keeps permissions without a group as the action label', () => {
    expect(permissionLabel('publish', tGroup, tAction)).toBe('Veröffentlichen')
  })
})
