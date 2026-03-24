import { describe, expect, it, vi, beforeEach } from 'vitest'
import { ref, watch } from 'vue'

function createMockElement(): HTMLElement {
  return { nodeType: 1 } as unknown as HTMLElement
}

function createVueMock(overrides: Record<string, unknown>) {
  return async () => {
    const vue = await vi.importActual<typeof import('vue')>('vue')
    return { ...vue, ...overrides }
  }
}

describe('useSortable lifecycle hooks', () => {
  beforeEach(() => {
    vi.resetModules()
  })

  it('registers lifecycle hooks when getCurrentInstance returns a component', async () => {
    const mountedFn = vi.fn()
    const unmountFn = vi.fn()

    vi.doMock('vue', createVueMock({
      getCurrentInstance: () => ({ uid: 1 }),
      onMounted: mountedFn,
      onBeforeUnmount: unmountFn,
      watch
    }))
    vi.doMock('sortablejs', () => ({
      default: { create: vi.fn(() => ({ option: vi.fn(), destroy: vi.fn() })) }
    }))

    const { useSortable } = await import('../../app/composables/useSortable')
    const containerRef = ref<HTMLElement | null>(createMockElement())
    useSortable(containerRef)

    expect(mountedFn).toHaveBeenCalledTimes(1)
    expect(unmountFn).toHaveBeenCalledTimes(1)
  })

  it('onMounted callback is a function that can be invoked', async () => {
    let mountedCallback: (() => void) | null = null

    vi.doMock('vue', createVueMock({
      getCurrentInstance: () => ({ uid: 1 }),
      onMounted: (cb: () => void) => { mountedCallback = cb },
      onBeforeUnmount: vi.fn(),
      watch
    }))
    vi.doMock('sortablejs', () => ({
      default: { create: vi.fn(() => ({ option: vi.fn(), destroy: vi.fn() })) }
    }))

    const { useSortable } = await import('../../app/composables/useSortable')
    const el = createMockElement()
    const containerRef = ref<HTMLElement | null>(el)
    useSortable(containerRef)

    expect(mountedCallback).toBeTypeOf('function')
  })

  it('onBeforeUnmount callback calls destroy', async () => {
    let unmountCallback: (() => void) | null = null
    const localMockDestroy = vi.fn()
    const localMockCreate = vi.fn(() => ({ option: vi.fn(), destroy: localMockDestroy }))

    vi.doMock('vue', createVueMock({
      getCurrentInstance: () => ({ uid: 1 }),
      onMounted: vi.fn(),
      onBeforeUnmount: (cb: () => void) => { unmountCallback = cb },
      watch
    }))
    vi.doMock('sortablejs', () => ({
      default: { create: localMockCreate }
    }))

    const { useSortable } = await import('../../app/composables/useSortable')
    const el = createMockElement()
    const containerRef = ref<HTMLElement | null>(el)
    const { initSortable } = useSortable(containerRef)
    await initSortable()

    expect(unmountCallback).not.toBeNull()
    unmountCallback!()
    expect(localMockDestroy).toHaveBeenCalled()
  })
})
