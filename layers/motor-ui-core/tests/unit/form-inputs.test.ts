// AI-generated — review before merging
import { describe, expect, it, beforeEach, vi } from 'vitest'
import { useFormInputs } from '../../app/composables/useFormInputs'

vi.stubGlobal('useState', (_key: string, init: () => unknown) => ref(init()))

describe('useFormInputs', () => {
  beforeEach(() => {
    vi.stubGlobal('useState', (_key: string, init: () => unknown) => ref(init()))
  })

  it('formInputs-register-component', () => {
    const { register, get } = useFormInputs()
    const mockComponent = { template: '<input />' } as Record<string, unknown>

    register('text', mockComponent)

    expect(get('text')).toEqual(mockComponent)
  })

  it('formInputs-get-component', () => {
    const { register, get } = useFormInputs()
    const mockComponent = { template: '<select />' } as Record<string, unknown>

    register('select', mockComponent)
    const retrieved = get('select')

    expect(retrieved).toEqual(mockComponent)
  })

  it('formInputs-has-returns-boolean', () => {
    const { register, has } = useFormInputs()
    const mockComponent = { template: '<div />' } as Record<string, unknown>

    register('custom', mockComponent)

    expect(has('custom')).toBe(true)
    expect(has('unregistered')).toBe(false)
  })

  it('formInputs-getAll-returns-map', () => {
    const { register, getAll } = useFormInputs()
    const comp1 = { template: '<input />' } as Record<string, unknown>
    const comp2 = { template: '<select />' } as Record<string, unknown>

    register('text', comp1)
    register('select', comp2)
    const map = getAll()

    expect(map).toBeInstanceOf(Map)
    expect(map.get('text')).toEqual(comp1)
    expect(map.get('select')).toEqual(comp2)
  })
})
