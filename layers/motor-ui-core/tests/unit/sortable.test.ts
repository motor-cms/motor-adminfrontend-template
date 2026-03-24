import { describe, expect, it, vi, beforeEach } from 'vitest'
import { ref } from 'vue'

import { useSortable } from '../../app/composables/useSortable'

vi.stubGlobal('getCurrentInstance', () => null)
vi.stubGlobal('onMounted', vi.fn())
vi.stubGlobal('onBeforeUnmount', vi.fn())

const mockOption = vi.fn()
const mockDestroy = vi.fn()
const mockCreate = vi.fn(() => ({ option: mockOption, destroy: mockDestroy }))

vi.mock('sortablejs', () => ({
  default: { create: mockCreate }
}))

function createMockElement(): HTMLElement {
  return { nodeType: 1 } as unknown as HTMLElement
}

describe('useSortable', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('initSortable creates a SortableJS instance on container', async () => {
    const el = createMockElement()
    const containerRef = ref<HTMLElement | null>(el)

    const { initSortable, getInstance } = useSortable(containerRef)
    await initSortable()

    expect(mockCreate).toHaveBeenCalledWith(el, expect.objectContaining({
      animation: 200
    }))
    expect(getInstance()).toBeTruthy()
  })

  it('destroy removes the SortableJS instance', async () => {
    const el = createMockElement()
    const containerRef = ref<HTMLElement | null>(el)

    const { initSortable, destroy, getInstance } = useSortable(containerRef)
    await initSortable()
    expect(getInstance()).toBeTruthy()

    destroy()
    expect(mockDestroy).toHaveBeenCalled()
    expect(getInstance()).toBeNull()
  })

  it('setDisabled toggles sorting', async () => {
    const el = createMockElement()
    const containerRef = ref<HTMLElement | null>(el)

    const { initSortable, setDisabled } = useSortable(containerRef)
    await initSortable()

    setDisabled(true)
    expect(mockOption).toHaveBeenCalledWith('disabled', true)

    setDisabled(false)
    expect(mockOption).toHaveBeenCalledWith('disabled', false)
  })

  it('initSortable is a no-op when container is null', async () => {
    const containerRef = ref<HTMLElement | null>(null)
    const { initSortable } = useSortable(containerRef)

    await initSortable()
    expect(mockCreate).not.toHaveBeenCalled()
  })

  it('setDisabled is a no-op before initSortable', () => {
    const containerRef = ref<HTMLElement | null>(null)
    const { setDisabled } = useSortable(containerRef)

    setDisabled(true)
    expect(mockOption).not.toHaveBeenCalled()
  })

  it('double initSortable does not create twice', async () => {
    const el = createMockElement()
    const containerRef = ref<HTMLElement | null>(el)

    const { initSortable } = useSortable(containerRef)
    await initSortable()
    await initSortable()

    expect(mockCreate).toHaveBeenCalledTimes(1)
  })

  it('passes custom options to SortableJS', async () => {
    const el = createMockElement()
    const containerRef = ref<HTMLElement | null>(el)
    const onSort = vi.fn()

    const { initSortable } = useSortable(containerRef, {
      animation: 300,
      ghostClass: 'ghost',
      dragClass: 'drag',
      chosenClass: 'chosen',
      group: 'test-group',
      handle: '.handle',
      draggable: '.item',
      filter: '.exclude',
      sort: false,
      disabled: true,
      swapThreshold: 0.7,
      onSort
    })
    await initSortable()

    expect(mockCreate).toHaveBeenCalledWith(el, expect.objectContaining({
      animation: 300,
      ghostClass: 'ghost',
      dragClass: 'drag',
      chosenClass: 'chosen',
      group: 'test-group',
      handle: '.handle',
      draggable: '.item',
      filter: '.exclude',
      sort: false,
      disabled: true,
      swapThreshold: 0.7
    }))
  })

  it('destroy followed by initSortable reinitializes', async () => {
    const el = createMockElement()
    const containerRef = ref<HTMLElement | null>(el)

    const { initSortable, destroy, getInstance } = useSortable(containerRef)
    await initSortable()
    expect(getInstance()).toBeTruthy()

    destroy()
    expect(getInstance()).toBeNull()

    await initSortable()
    expect(getInstance()).toBeTruthy()
    expect(mockCreate).toHaveBeenCalledTimes(2)
  })

  it('onEnd callback reverts DOM for same-container sort', async () => {
    const el = createMockElement()
    const containerRef = ref<HTMLElement | null>(el)
    const onSort = vi.fn()

    const { initSortable } = useSortable(containerRef, { onSort })
    await initSortable()

    const createCall = mockCreate.mock.calls[0]
    const opts = createCall[1]

    const mockItem = { tagName: 'DIV' }
    const mockFrom = {
      insertBefore: vi.fn(),
      removeChild: vi.fn(),
      children: [null, null, null]
    }

    opts.onEnd({
      item: mockItem,
      from: mockFrom,
      to: mockFrom,
      oldIndex: 0,
      newIndex: 2
    })

    expect(mockFrom.removeChild).toHaveBeenCalledWith(mockItem)
    expect(mockFrom.insertBefore).toHaveBeenCalled()
    expect(onSort).toHaveBeenCalled()
  })

  it('onAdd callback removes item from DOM', async () => {
    const el = createMockElement()
    const containerRef = ref<HTMLElement | null>(el)
    const onAdd = vi.fn()

    const { initSortable } = useSortable(containerRef, { onAdd })
    await initSortable()

    const createCall = mockCreate.mock.calls[0]
    const opts = createCall[1]

    const mockParent = { removeChild: vi.fn() }
    const mockItem = { tagName: 'DIV', parentNode: mockParent }

    opts.onAdd({ item: mockItem })

    expect(mockParent.removeChild).toHaveBeenCalledWith(mockItem)
    expect(onAdd).toHaveBeenCalled()
  })

  it('does not register lifecycle hooks when getCurrentInstance is null', () => {
    const mountedFn = vi.fn()
    const unmountFn = vi.fn()
    vi.stubGlobal('onMounted', mountedFn)
    vi.stubGlobal('onBeforeUnmount', unmountFn)

    const containerRef = ref<HTMLElement | null>(createMockElement())
    useSortable(containerRef)

    expect(mountedFn).not.toHaveBeenCalled()
    expect(unmountFn).not.toHaveBeenCalled()
  })

  it('watch on containerRef re-initializes on change', async () => {
    const el1 = createMockElement()
    const el2 = createMockElement()
    const containerRef = ref<HTMLElement | null>(el1)

    const { initSortable, destroy } = useSortable(containerRef)
    await initSortable()
    expect(mockCreate).toHaveBeenCalledTimes(1)

    containerRef.value = el2
    await nextTick()
    await new Promise(r => setTimeout(r, 0))

    expect(mockDestroy).toHaveBeenCalled()
    destroy()
  })

  it('multiple destroys are safe (no-op on null instance)', () => {
    const containerRef = ref<HTMLElement | null>(null)
    const { destroy, getInstance } = useSortable(containerRef)

    destroy()
    expect(getInstance()).toBeNull()
    expect(mockDestroy).not.toHaveBeenCalled()
  })

  it('onEnd does not revert DOM when from !== to (cross-container)', async () => {
    const el = createMockElement()
    const containerRef = ref<HTMLElement | null>(el)
    const onSort = vi.fn()

    const { initSortable } = useSortable(containerRef, { onSort })
    await initSortable()

    const createCall = mockCreate.mock.calls[0]
    const opts = createCall[1]

    const mockFrom = { insertBefore: vi.fn(), removeChild: vi.fn(), children: [] }
    const mockTo = { insertBefore: vi.fn(), removeChild: vi.fn(), children: [] }

    opts.onEnd({
      item: { tagName: 'DIV' },
      from: mockFrom,
      to: mockTo,
      oldIndex: 0,
      newIndex: 0
    })

    expect(mockFrom.removeChild).not.toHaveBeenCalled()
    expect(onSort).not.toHaveBeenCalled()
  })

  it('onEnd does not revert DOM when indices are same', async () => {
    const el = createMockElement()
    const containerRef = ref<HTMLElement | null>(el)
    const onSort = vi.fn()

    const { initSortable } = useSortable(containerRef, { onSort })
    await initSortable()

    const createCall = mockCreate.mock.calls[0]
    const opts = createCall[1]

    const mockFrom = { insertBefore: vi.fn(), removeChild: vi.fn(), children: [] }

    opts.onEnd({
      item: { tagName: 'DIV' },
      from: mockFrom,
      to: mockFrom,
      oldIndex: 1,
      newIndex: 1
    })

    expect(mockFrom.removeChild).not.toHaveBeenCalled()
    expect(onSort).toHaveBeenCalled()
  })

  it('fallbackOnBody defaults correctly', async () => {
    const el = createMockElement()
    const containerRef = ref<HTMLElement | null>(el)

    const { initSortable } = useSortable(containerRef, { fallbackOnBody: false })
    await initSortable()

    expect(mockCreate).toHaveBeenCalledWith(el, expect.objectContaining({
      fallbackOnBody: false
    }))
  })

  it('passes onRemove and onMove callbacks to SortableJS', async () => {
    const el = createMockElement()
    const containerRef = ref<HTMLElement | null>(el)
    const onRemove = vi.fn()
    const onMove = vi.fn()

    const { initSortable } = useSortable(containerRef, { onRemove, onMove })
    await initSortable()

    expect(mockCreate).toHaveBeenCalledWith(el, expect.objectContaining({
      onRemove,
      onMove
    }))
  })

  it('forceFallback option is passed correctly', async () => {
    const el = createMockElement()
    const containerRef = ref<HTMLElement | null>(el)

    const { initSortable } = useSortable(containerRef, { forceFallback: true })
    await initSortable()

    expect(mockCreate).toHaveBeenCalledWith(el, expect.objectContaining({
      forceFallback: true
    }))
  })

  it('handles import failure gracefully', async () => {
    const _originalMock = vi.fn()
    vi.doMock('sortablejs', () => {
      throw new Error('module not found')
    })

    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})

    const { useSortable: freshUseSortable } = await import('../../app/composables/useSortable')

    const el = createMockElement()
    const containerRef = ref<HTMLElement | null>(el)
    const { initSortable, getInstance } = freshUseSortable(containerRef)

    await initSortable()

    expect(consoleError).toHaveBeenCalledWith('[useSortable] Failed to import sortablejs:', expect.any(Error))
    expect(getInstance()).toBeNull()

    consoleError.mockRestore()
    vi.doMock('sortablejs', () => ({
      default: { create: mockCreate }
    }))
  })
})
