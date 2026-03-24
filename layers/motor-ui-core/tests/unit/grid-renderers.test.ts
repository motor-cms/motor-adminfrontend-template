import { describe, expect, it, vi, beforeEach } from 'vitest'

let useGridRenderers: typeof import('../../app/composables/useGridRenderers').useGridRenderers
let registerGridRenderers: typeof import('../../app/composables/useGridRenderers').registerGridRenderers

describe('useGridRenderers', () => {
  beforeEach(async () => {
    vi.resetModules()
    const mod = await import('../../app/composables/useGridRenderers')
    useGridRenderers = mod.useGridRenderers
    registerGridRenderers = mod.registerGridRenderers
  })

  it('registers and retrieves a single renderer', () => {
    const { register, get } = useGridRenderers()
    const mockRenderer = { template: '<span />' } as Record<string, unknown>

    register('status', mockRenderer)

    expect(get('status')).toEqual(mockRenderer)
  })

  it('returns undefined for unregistered renderer', () => {
    const { get } = useGridRenderers()
    expect(get('nonexistent')).toBeUndefined()
  })

  it('has() returns correct boolean', () => {
    const { register, has } = useGridRenderers()
    const mockRenderer = { template: '<img />' } as Record<string, unknown>

    register('thumbnail', mockRenderer)

    expect(has('thumbnail')).toBe(true)
    expect(has('nonexistent')).toBe(false)
  })

  it('getAll() returns a Map of all registered renderers', () => {
    const { register, getAll } = useGridRenderers()
    const r1 = { template: '<span />' } as Record<string, unknown>
    const r2 = { template: '<div />' } as Record<string, unknown>

    register('status', r1)
    register('avatar', r2)
    const map = getAll()

    expect(map).toBeInstanceOf(Map)
    expect(map.get('status')).toEqual(r1)
    expect(map.get('avatar')).toEqual(r2)
  })

  it('registerGridRenderers() bulk-registers multiple renderers', () => {
    const { get, has } = useGridRenderers()
    const r1 = { template: '<span />' } as Record<string, unknown>
    const r2 = { template: '<div />' } as Record<string, unknown>

    registerGridRenderers({ text: r1, number: r2 })

    expect(has('text')).toBe(true)
    expect(has('number')).toBe(true)
    expect(get('text')).toEqual(r1)
    expect(get('number')).toEqual(r2)
  })

  it('bulk registration merges with existing registrations', () => {
    const { register, get } = useGridRenderers()
    const existing = { template: '<em />' } as Record<string, unknown>
    const bulkOne = { template: '<b />' } as Record<string, unknown>

    register('existing', existing)
    registerGridRenderers({ bulk: bulkOne })

    expect(get('existing')).toEqual(existing)
    expect(get('bulk')).toEqual(bulkOne)
  })

  it('later registration overrides earlier one (last-write-wins)', () => {
    const { get } = useGridRenderers()
    const first = { template: '<v1 />' } as Record<string, unknown>
    const second = { template: '<v2 />' } as Record<string, unknown>

    registerGridRenderers({ name: first })
    registerGridRenderers({ name: second })

    expect(get('name')).toEqual(second)
  })
})
