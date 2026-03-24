import { describe, expect, it, vi, beforeEach } from 'vitest'
import { ref } from 'vue'

import { useAdminNavigation } from '~/composables/useAdminNavigation'

const mockClient = vi.fn()
const mockAsyncData = vi.fn()
vi.stubGlobal('useSanctumClient', () => mockClient)
vi.stubGlobal('useI18n', () => ({
  t: (key: string) => {
    const translations: Record<string, string> = {
      'motor-admin.users.users': 'Benutzer',
      'motor-core.global.administration': 'Administration'
    }
    return translations[key] ?? key
  }
}))
vi.stubGlobal('useRoute', () => ({ path: '/motor-admin/users' }))
vi.stubGlobal('useAsyncData', (...args: unknown[]) => {
  const result = mockAsyncData(...args)
  return result
})

describe('useAdminNavigation', () => {
  beforeEach(() => {
    mockClient.mockReset()
    mockAsyncData.mockReset()
  })

  it('returns empty navigation when data is empty', () => {
    mockAsyncData.mockReturnValue({
      data: ref({ data: {} }),
      status: ref('success'),
      error: ref(null),
      refresh: vi.fn()
    })

    const { navigation } = useAdminNavigation()
    expect(navigation.value).toEqual([])
  })

  it('transforms API navigation items to NavigationMenuItems', () => {
    mockAsyncData.mockReturnValue({
      data: ref({
        data: {
          0: {
            name: 'motor-admin.users.users',
            slug: 'users',
            icon: 'fa fa-user',
            route: 'admin.motor-admin.users'
          }
        }
      }),
      status: ref('success'),
      error: ref(null),
      refresh: vi.fn()
    })

    const { navigation } = useAdminNavigation()
    expect(navigation.value).toHaveLength(1)
    expect(navigation.value[0].label).toBe('Benutzer')
    expect(navigation.value[0].icon).toBe('i-lucide-user')
    expect(navigation.value[0].to).toBe('/motor-admin/users')
  })

  it('maps common FA icons to lucide', () => {
    mockAsyncData.mockReturnValue({
      data: ref({
        data: {
          0: { name: 'test.home', slug: 'home', icon: 'fa fa-home', route: null },
          1: { name: 'test.settings', slug: 'settings', icon: 'fa fa-cogs', route: null },
          2: { name: 'test.media', slug: 'media', icon: 'fa fa-photo-video', route: null }
        }
      }),
      status: ref('success'),
      error: ref(null),
      refresh: vi.fn()
    })

    const { navigation } = useAdminNavigation()
    expect(navigation.value[0].icon).toBe('i-lucide-house')
    expect(navigation.value[1].icon).toBe('i-lucide-settings')
    expect(navigation.value[2].icon).toBe('i-lucide-image')
  })

  it('converts route names to URL paths', () => {
    mockAsyncData.mockReturnValue({
      data: ref({
        data: {
          0: { name: 'test', slug: 'test', route: 'admin.motor-admin.users' }
        }
      }),
      status: ref('success'),
      error: ref(null),
      refresh: vi.fn()
    })

    const { navigation } = useAdminNavigation()
    expect(navigation.value[0].to).toBe('/motor-admin/users')
  })

  it('handles items without routes', () => {
    mockAsyncData.mockReturnValue({
      data: ref({
        data: {
          0: { name: 'test', slug: 'test', route: null }
        }
      }),
      status: ref('success'),
      error: ref(null),
      refresh: vi.fn()
    })

    const { navigation } = useAdminNavigation()
    expect(navigation.value[0].to).toBeUndefined()
  })

  it('handles nested child items', () => {
    mockAsyncData.mockReturnValue({
      data: ref({
        data: {
          0: {
            name: 'motor-core.global.administration',
            slug: 'admin',
            icon: 'fa fa-cogs',
            route: null,
            items: {
              0: { name: 'motor-admin.users.users', slug: 'users', route: 'admin.motor-admin.users' },
              1: { name: 'motor-admin.roles.roles', slug: 'roles', route: 'admin.motor-admin.roles' }
            }
          }
        }
      }),
      status: ref('success'),
      error: ref(null),
      refresh: vi.fn()
    })

    const { navigation } = useAdminNavigation()
    expect(navigation.value[0].children).toHaveLength(2)
    expect(navigation.value[0].children![0].icon).toBeUndefined()
  })

  it('auto-expands groups containing active route', () => {
    mockAsyncData.mockReturnValue({
      data: ref({
        data: {
          0: {
            name: 'admin',
            slug: 'admin',
            icon: null,
            route: null,
            items: {
              0: { name: 'users', slug: 'users', route: 'admin.motor-admin.users' }
            }
          }
        }
      }),
      status: ref('success'),
      error: ref(null),
      refresh: vi.fn()
    })

    const { navigation } = useAdminNavigation()
    expect(navigation.value[0].defaultOpen).toBe(true)
  })

  it('uses fallback label when translation returns key', () => {
    mockAsyncData.mockReturnValue({
      data: ref({
        data: {
          0: { name: 'motor-admin.email_templates.email_templates', slug: 'emails', route: null }
        }
      }),
      status: ref('success'),
      error: ref(null),
      refresh: vi.fn()
    })

    const { navigation } = useAdminNavigation()
    expect(navigation.value[0].label).toBe('Email Templates')
  })

  it('handles items without icon', () => {
    mockAsyncData.mockReturnValue({
      data: ref({
        data: {
          0: { name: 'test', slug: 'test', route: null }
        }
      }),
      status: ref('success'),
      error: ref(null),
      refresh: vi.fn()
    })

    const { navigation } = useAdminNavigation()
    expect(navigation.value[0].icon).toBeUndefined()
  })

  it('sorts items by numeric keys', () => {
    mockAsyncData.mockReturnValue({
      data: ref({
        data: {
          2: { name: 'third', slug: 'c', route: null },
          0: { name: 'first', slug: 'a', route: null },
          1: { name: 'second', slug: 'b', route: null }
        }
      }),
      status: ref('success'),
      error: ref(null),
      refresh: vi.fn()
    })

    const { navigation } = useAdminNavigation()
    expect(navigation.value[0].label).toBe('First')
    expect(navigation.value[1].label).toBe('Second')
    expect(navigation.value[2].label).toBe('Third')
  })

  it('handles null data gracefully', () => {
    mockAsyncData.mockReturnValue({
      data: ref(null),
      status: ref('error'),
      error: ref(new Error('fail')),
      refresh: vi.fn()
    })

    const { navigation } = useAdminNavigation()
    expect(navigation.value).toEqual([])
  })

  it('normalizes hyphens to underscores in translation keys for label', () => {
    mockAsyncData.mockReturnValue({
      data: ref({
        data: {
          0: { name: 'motor-content-type.content-types.content_types', slug: 'ct', route: null }
        }
      }),
      status: ref('success'),
      error: ref(null),
      refresh: vi.fn()
    })

    const { navigation } = useAdminNavigation()
    expect(navigation.value[0].label).toBe('Content Types')
  })

  it('passes through unmapped icon names as-is', () => {
    mockAsyncData.mockReturnValue({
      data: ref({
        data: {
          0: { name: 'test', slug: 'test', icon: 'fa fa-star', route: null }
        }
      }),
      status: ref('success'),
      error: ref(null),
      refresh: vi.fn()
    })

    const { navigation } = useAdminNavigation()
    expect(navigation.value[0].icon).toBe('i-lucide-star')
  })

  it('does not auto-expand groups without active children', () => {
    vi.stubGlobal('useRoute', () => ({ path: '/motor-media/files' }))

    mockAsyncData.mockReturnValue({
      data: ref({
        data: {
          0: {
            name: 'admin',
            slug: 'admin',
            icon: null,
            route: null,
            items: {
              0: { name: 'users', slug: 'users', route: 'admin.motor-admin.users' }
            }
          }
        }
      }),
      status: ref('success'),
      error: ref(null),
      refresh: vi.fn()
    })

    const { navigation } = useAdminNavigation()
    expect(navigation.value[0].defaultOpen).toBe(false)

    vi.stubGlobal('useRoute', () => ({ path: '/motor-admin/users' }))
  })

  it('useAsyncData fetch callback calls sanctum client', () => {
    let fetchFn: (() => unknown) | null = null
    mockAsyncData.mockImplementation((_key: string, fn: () => unknown, _opts?: unknown) => {
      fetchFn = fn
      return {
        data: ref({ data: {} }),
        status: ref('idle'),
        error: ref(null),
        refresh: vi.fn()
      }
    })

    useAdminNavigation()

    expect(fetchFn).not.toBeNull()
    fetchFn!()
    expect(mockClient).toHaveBeenCalledWith('/api/v2/admin-navigations')
  })

  it('maps all icon keys correctly', () => {
    mockAsyncData.mockReturnValue({
      data: ref({
        data: {
          0: { name: 'test.plus', slug: 'plus', icon: 'fa fa-plus', route: null },
          1: { name: 'test.globe', slug: 'globe', icon: 'fa fa-globe', route: null },
          2: { name: 'test.file', slug: 'file', icon: 'fa fa-file', route: null },
          3: { name: 'test.cubes', slug: 'cubes', icon: 'fa fa-cubes', route: null },
          4: { name: 'test.hands', slug: 'hands', icon: 'fa fa-hands-helping', route: null }
        }
      }),
      status: ref('success'),
      error: ref(null),
      refresh: vi.fn()
    })

    const { navigation } = useAdminNavigation()
    expect(navigation.value[0].icon).toBe('i-lucide-plus')
    expect(navigation.value[1].icon).toBe('i-lucide-globe')
    expect(navigation.value[2].icon).toBe('i-lucide-file')
    expect(navigation.value[3].icon).toBe('i-lucide-boxes')
    expect(navigation.value[4].icon).toBe('i-lucide-hand-helping')
  })
})
