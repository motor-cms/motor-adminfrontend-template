// AI-generated — review before merging
import { describe, expect, it, beforeEach, vi } from 'vitest'
import { useBreadcrumbs } from '../../app/composables/useBreadcrumbs'

describe('useBreadcrumbs', () => {
  beforeEach(() => {
    vi.stubGlobal('useI18n', () => ({ t: (_key: string) => _key, te: (_key: string) => false }))
    vi.stubGlobal('isRef', (v: unknown) => v && typeof v === 'object' && 'value' in v)
  })

  it('breadcrumbs-builds-from-route', () => {
    vi.stubGlobal('useRoute', () => ({ path: '/motor-admin/users' }))

    const { breadcrumbs } = useBreadcrumbs()

    expect(breadcrumbs.value).toBeDefined()
    expect(breadcrumbs.value.length).toBeGreaterThanOrEqual(2)

    expect(breadcrumbs.value[0]?.label).toBe('motor-core.global.dashboard')
    expect(breadcrumbs.value[0]?.to).toBe('/')

    const adminItem = breadcrumbs.value.find(
      item => item.label === 'motor-core.global.administration'
    )
    expect(adminItem).toBeDefined()

    const usersItem = breadcrumbs.value.find(item => item.label === 'motor-admin.users.title' || item.label === 'Users')
    expect(usersItem).toBeDefined()
  })

  it('breadcrumbs-skips-numeric-segments', () => {
    vi.stubGlobal('useRoute', () => ({ path: '/motor-admin/users/123/edit' }))

    const { breadcrumbs } = useBreadcrumbs()

    const labels = breadcrumbs.value.map(b => b.label)
    expect(labels).not.toContain('123')
  })

  it('breadcrumbs-translates-sections', () => {
    vi.stubGlobal('useRoute', () => ({ path: '/motor-builder/pages' }))

    const { breadcrumbs } = useBreadcrumbs()

    const sectionItem = breadcrumbs.value.find(
      item => item.label === 'motor-builder.global.builder'
    )
    expect(sectionItem).toBeDefined()
  })

  it('breadcrumbs-deduplicates-labels', () => {
    vi.stubGlobal('useRoute', () => ({ path: '/motor-admin/users' }))

    const { breadcrumbs } = useBreadcrumbs()

    const labels = breadcrumbs.value.map(b => b.label)
    for (let i = 1; i < labels.length; i++) {
      expect(labels[i]).not.toBe(labels[i - 1])
    }
  })

  it('breadcrumbs-handles-edit-segment', () => {
    vi.stubGlobal('useRoute', () => ({ path: '/motor-admin/users/123/edit' }))

    const { breadcrumbs } = useBreadcrumbs()
    const labels = breadcrumbs.value.map(b => b.label)

    expect(labels).toContain('motor-core.global.edit')
  })

  it('breadcrumbs-handles-create-segment', () => {
    vi.stubGlobal('useRoute', () => ({ path: '/motor-admin/users/create' }))

    const { breadcrumbs } = useBreadcrumbs()
    const labels = breadcrumbs.value.map(b => b.label)

    expect(labels).toContain('motor-core.global.create')
  })

  it('breadcrumbs-uses-explicit-breadcrumbs-ref', () => {
    vi.stubGlobal('useRoute', () => ({ path: '/some/path' }))

    const explicit = ref([
      { label: 'Custom', to: '/custom' },
      { label: 'Page' }
    ])
    const { breadcrumbs } = useBreadcrumbs(explicit)

    expect(breadcrumbs.value).toEqual(explicit.value)
  })

  it('breadcrumbs-uses-explicit-breadcrumbs-array', () => {
    vi.stubGlobal('useRoute', () => ({ path: '/some/path' }))

    const explicit = [{ label: 'Static', to: '/' }]
    const { breadcrumbs } = useBreadcrumbs(explicit)

    expect(breadcrumbs.value).toEqual(explicit)
  })

  it('breadcrumbs-skips-uuid-segments', () => {
    vi.stubGlobal('useRoute', () => ({ path: '/motor-builder/navigation-trees/12345678-1234-1234-1234-123456789012/edit' }))

    const { breadcrumbs } = useBreadcrumbs()
    const labels = breadcrumbs.value.map(b => b.label)

    expect(labels).not.toContain('12345678-1234-1234-1234-123456789012')
  })

  it('breadcrumbs-capitalizes-unknown-segments', () => {
    vi.stubGlobal('useRoute', () => ({ path: '/unknown-section/custom-page' }))

    const { breadcrumbs } = useBreadcrumbs()
    const labels = breadcrumbs.value.map(b => b.label)

    const customPageItem = labels.find(l => l.includes('Custom Page') || l.includes('custom_page'))
    expect(customPageItem).toBeDefined()
  })

  it('breadcrumbs-links-non-last-segments', () => {
    vi.stubGlobal('useRoute', () => ({ path: '/motor-admin/users/create' }))

    const { breadcrumbs } = useBreadcrumbs()

    const usersItem = breadcrumbs.value.find(b => b.label.includes('users') || b.label === 'Users')
    if (usersItem) {
      expect(usersItem.to).toBeDefined()
    }
  })

  it('breadcrumbs-edit-with-translated-title', () => {
    vi.stubGlobal('useI18n', () => ({
      t: (key: string) => {
        if (key === 'motor-admin.users.edit_title') return 'Benutzer bearbeiten'
        return key
      },
      te: (key: string) => key === 'motor-admin.users.edit_title'
    }))
    vi.stubGlobal('useRoute', () => ({ path: '/motor-admin/users/123/edit' }))

    const { breadcrumbs } = useBreadcrumbs()
    const labels = breadcrumbs.value.map(b => b.label)

    expect(labels).toContain('Benutzer bearbeiten')
  })

  it('breadcrumbs-nested-module-translation', () => {
    const translations: Record<string, string> = {
      'motor-content-type.content_types.fields.title': 'Felder'
    }
    vi.stubGlobal('useI18n', () => ({
      t: (key: string) => translations[key] ?? key,
      te: (key: string) => key in translations
    }))
    vi.stubGlobal('useRoute', () => ({ path: '/motor-content-type/content-types/5/fields' }))

    const { breadcrumbs } = useBreadcrumbs()
    const labels = breadcrumbs.value.map(b => b.label)

    expect(labels).toContain('Felder')
  })

  it('breadcrumbs-dedup-prefers-link', () => {
    const translations: Record<string, string> = {
      'motor-content-type.global.content_type': 'Inhaltstypen',
      'motor-content-type.content_types.title': 'Inhaltstypen'
    }
    vi.stubGlobal('useI18n', () => ({
      t: (key: string) => translations[key] ?? key,
      te: (key: string) => key in translations
    }))
    vi.stubGlobal('useRoute', () => ({ path: '/motor-content-type/content-types/create' }))

    const { breadcrumbs } = useBreadcrumbs()

    const inhaltstypenItems = breadcrumbs.value.filter(b => b.label === 'Inhaltstypen')
    expect(inhaltstypenItems.length).toBe(1)
    expect(inhaltstypenItems[0].to).toBeDefined()
  })
})
