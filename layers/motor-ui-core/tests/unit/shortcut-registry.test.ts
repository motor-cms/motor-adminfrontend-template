import { describe, expect, it, vi } from 'vitest'

import { useShortcutRegistry } from '../../app/composables/useShortcutRegistry'

const shortcutEventHandlers = vi.hoisted(() => ({} as Record<string, (e: unknown) => void>))
vi.mock('@vueuse/core', () => ({
  createSharedComposable: (fn: (() => unknown) & ((...args: unknown[]) => unknown)) => fn,
  useEventListener: vi.fn((event: string, handler: (e: unknown) => void) => {
    shortcutEventHandlers[event] = handler
  })
}))

describe('useShortcutRegistry', () => {
  it('registers and retrieves a group', () => {
    const { register, unregister, groups } = useShortcutRegistry()
    const group = {
      id: 'test-group',
      label: 'Test Group',
      shortcuts: [{ keys: ['Ctrl', 'S'], label: 'Save' }]
    }

    register(group)
    expect(groups.value).toHaveLength(1)
    expect(groups.value[0]).toEqual(group)

    unregister('test-group')
  })

  it('unregisters a group', () => {
    const { register, unregister, groups } = useShortcutRegistry()
    const group = {
      id: 'to-remove',
      label: 'To Remove',
      shortcuts: []
    }

    register(group)
    expect(groups.value).toHaveLength(1)

    unregister('to-remove')
    expect(groups.value).toHaveLength(0)
  })

  it('sorts groups by predefined order', () => {
    const { register, unregister, groups } = useShortcutRegistry()

    register({ id: 'media', label: 'Media', shortcuts: [] })
    register({ id: 'global', label: 'Global', shortcuts: [] })
    register({ id: 'builder', label: 'Builder', shortcuts: [] })
    register({ id: 'custom', label: 'Custom', shortcuts: [] })

    const ids = groups.value.map(g => g.id)
    expect(ids).toEqual(['global', 'builder', 'media', 'custom'])

    unregister('media')
    unregister('global')
    unregister('builder')
    unregister('custom')
  })

  it('sorts form and grid in correct order', () => {
    const { register, unregister, groups } = useShortcutRegistry()

    register({ id: 'grid', label: 'Grid', shortcuts: [] })
    register({ id: 'form', label: 'Form', shortcuts: [] })

    const ids = groups.value.map(g => g.id)
    expect(ids.indexOf('form')).toBeLessThan(ids.indexOf('grid'))

    unregister('grid')
    unregister('form')
  })

  it('overlay starts hidden', () => {
    const { isOverlayVisible } = useShortcutRegistry()
    expect(isOverlayVisible.value).toBe(false)
  })

  it('registering multiple groups accumulates them', () => {
    const { register, unregister, groups } = useShortcutRegistry()

    register({ id: 'a', label: 'A', shortcuts: [] })
    register({ id: 'b', label: 'B', shortcuts: [] })
    register({ id: 'c', label: 'C', shortcuts: [] })

    expect(groups.value).toHaveLength(3)

    unregister('a')
    unregister('b')
    unregister('c')
  })

  it('re-registering replaces existing group', () => {
    const { register, unregister, groups } = useShortcutRegistry()

    register({ id: 'test', label: 'V1', shortcuts: [] })
    register({ id: 'test', label: 'V2', shortcuts: [{ keys: ['A'], label: 'Action' }] })

    expect(groups.value).toHaveLength(1)
    expect(groups.value[0].label).toBe('V2')
    expect(groups.value[0].shortcuts).toHaveLength(1)

    unregister('test')
  })

  it('unregistering non-existent group does not throw', () => {
    const { unregister, groups } = useShortcutRegistry()

    unregister('non-existent')
    expect(groups.value).toHaveLength(0)
  })

  it('groups with unknown ids sort after known ids', () => {
    const { register, unregister, groups } = useShortcutRegistry()

    register({ id: 'zzz', label: 'ZZZ', shortcuts: [] })
    register({ id: 'global', label: 'Global', shortcuts: [] })
    register({ id: 'aaa', label: 'AAA', shortcuts: [] })

    const ids = groups.value.map(g => g.id)
    expect(ids[0]).toBe('global')
    expect(ids.indexOf('global')).toBeLessThan(ids.indexOf('zzz'))
    expect(ids.indexOf('global')).toBeLessThan(ids.indexOf('aaa'))

    unregister('zzz')
    unregister('global')
    unregister('aaa')
  })

  it('shortcutRegistry-overlay-on-hold', () => {
    vi.useFakeTimers()
    const { isOverlayVisible } = useShortcutRegistry()
    const keydown = shortcutEventHandlers['keydown']
    const keyup = shortcutEventHandlers['keyup']

    keydown?.({ key: 'Meta' })
    vi.advanceTimersByTime(400)
    expect(isOverlayVisible.value).toBe(true)

    keyup?.({ key: 'Meta' })
    vi.useRealTimers()
  })

  it('shortcutRegistry-overlay-hides-on-release', () => {
    vi.useFakeTimers()
    const { isOverlayVisible } = useShortcutRegistry()
    const keydown = shortcutEventHandlers['keydown']
    const keyup = shortcutEventHandlers['keyup']
    const blur = shortcutEventHandlers['blur']
    const mousedown = shortcutEventHandlers['mousedown']

    keydown?.({ key: 'Meta' })
    vi.advanceTimersByTime(400)
    expect(isOverlayVisible.value).toBe(true)
    keyup?.({ key: 'Meta' })
    expect(isOverlayVisible.value).toBe(false)

    keydown?.({ key: 'Meta' })
    vi.advanceTimersByTime(400)
    expect(isOverlayVisible.value).toBe(true)
    blur?.()
    expect(isOverlayVisible.value).toBe(false)

    keydown?.({ key: 'Meta' })
    vi.advanceTimersByTime(400)
    expect(isOverlayVisible.value).toBe(true)
    mousedown?.()
    expect(isOverlayVisible.value).toBe(false)
    vi.useRealTimers()
  })

  it('groups preserve shortcut details', () => {
    const { register, unregister, groups } = useShortcutRegistry()

    register({
      id: 'test',
      label: 'Test',
      icon: 'i-lucide-test',
      shortcuts: [
        { keys: ['Ctrl', 'S'], label: 'Save', icon: 'i-lucide-save' },
        { keys: ['Ctrl', 'Z'], label: 'Undo' }
      ]
    })

    expect(groups.value[0].icon).toBe('i-lucide-test')
    expect(groups.value[0].shortcuts).toHaveLength(2)
    expect(groups.value[0].shortcuts[0].icon).toBe('i-lucide-save')
    expect(groups.value[0].shortcuts[1].icon).toBeUndefined()

    unregister('test')
  })

  it('pressing another key while modifier held cancels overlay', () => {
    vi.useFakeTimers()
    const { isOverlayVisible } = useShortcutRegistry()
    const keydown = shortcutEventHandlers['keydown']

    keydown?.({ key: 'Meta' })
    keydown?.({ key: 's' })
    vi.advanceTimersByTime(400)

    expect(isOverlayVisible.value).toBe(false)
    vi.useRealTimers()
  })

  it('Control key also triggers overlay hold', () => {
    vi.useFakeTimers()
    const { isOverlayVisible } = useShortcutRegistry()
    const keydown = shortcutEventHandlers['keydown']
    const keyup = shortcutEventHandlers['keyup']

    keydown?.({ key: 'Control' })
    vi.advanceTimersByTime(400)
    expect(isOverlayVisible.value).toBe(true)

    keyup?.({ key: 'Control' })
    expect(isOverlayVisible.value).toBe(false)
    vi.useRealTimers()
  })

  it('double Meta keydown does not create multiple timers', () => {
    vi.useFakeTimers()
    const { isOverlayVisible } = useShortcutRegistry()
    const keydown = shortcutEventHandlers['keydown']
    const keyup = shortcutEventHandlers['keyup']

    keydown?.({ key: 'Meta' })
    keydown?.({ key: 'Meta' })
    vi.advanceTimersByTime(400)

    expect(isOverlayVisible.value).toBe(true)

    keyup?.({ key: 'Meta' })
    vi.useRealTimers()
  })
})
