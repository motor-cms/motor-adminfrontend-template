// AI-generated — review before merging
import { describe, expect, it, beforeEach, vi } from 'vitest'
import { useFormDirtyGuard } from '../../app/composables/useFormDirtyGuard'

describe('useFormDirtyGuard', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.stubGlobal('onBeforeRouteLeave', vi.fn())
    vi.stubGlobal('navigateTo', vi.fn())
    vi.stubGlobal('toRaw', (v: unknown) => v)
    vi.stubGlobal('isRef', (v: unknown) => v !== null && typeof v === 'object' && 'value' in v)
  })

  it('dirtyGuard-clean-initially', () => {
    const state = ref({ name: 'test', email: 'test@example.com' })
    const { isDirty, captureSnapshot } = useFormDirtyGuard(state)
    captureSnapshot()
    expect(isDirty.value).toBe(false)
  })

  it('dirtyGuard-detects-changes', () => {
    const state = ref({ name: 'test', email: 'test@example.com' })
    const { isDirty, captureSnapshot } = useFormDirtyGuard(state)
    captureSnapshot()
    state.value.name = 'changed'
    expect(isDirty.value).toBe(true)
  })

  it('dirtyGuard-confirmLeave-navigates', () => {
    const state = ref({ name: 'test', email: 'test@example.com' })
    const { showLeaveModal, confirmLeave } = useFormDirtyGuard(state)
    showLeaveModal.value = true
    confirmLeave()
    expect(showLeaveModal.value).toBe(false)
  })

  it('dirtyGuard-cancelLeave-stays', () => {
    const state = ref({ name: 'test', email: 'test@example.com' })
    const { showLeaveModal, cancelLeave } = useFormDirtyGuard(state)
    showLeaveModal.value = true
    cancelLeave()
    expect(showLeaveModal.value).toBe(false)
  })

  it('dirtyGuard-markSubmitted-bypasses', () => {
    const leaveHandlers: Array<(to: unknown) => boolean> = []
    vi.stubGlobal('onBeforeRouteLeave', (cb: (to: unknown) => boolean) => leaveHandlers.push(cb))

    const state = ref({ name: 'test', email: 'test@example.com' })
    const { isDirty, captureSnapshot, markSubmitted } = useFormDirtyGuard(state)
    captureSnapshot()
    state.value.name = 'changed'
    expect(isDirty.value).toBe(true)

    const allowNavigation = leaveHandlers[0]({ path: '/other' })
    expect(allowNavigation).toBe(false)

    markSubmitted()
    const allowAfterSubmit = leaveHandlers[0]({ path: '/other' })
    expect(allowAfterSubmit).toBe(true)
  })

  it('dirtyGuard-confirmLeave-navigates-to-pending', () => {
    const leaveHandlers: Array<(to: unknown) => boolean> = []
    vi.stubGlobal('onBeforeRouteLeave', (cb: (to: unknown) => boolean) => leaveHandlers.push(cb))

    const state = ref({ name: 'test' })
    const { captureSnapshot, confirmLeave, showLeaveModal } = useFormDirtyGuard(state)
    captureSnapshot()
    state.value.name = 'changed'

    leaveHandlers[0]({ path: '/target' })
    expect(showLeaveModal.value).toBe(true)

    confirmLeave()
    expect(showLeaveModal.value).toBe(false)
    expect(navigateTo).toHaveBeenCalledWith({ path: '/target' })
  })

  it('dirtyGuard-isDirty-false-when-no-snapshot', () => {
    const state = ref({ name: 'test' })
    const { isDirty } = useFormDirtyGuard(state)
    expect(isDirty.value).toBe(false)
  })

  it('dirtyGuard-works-with-reactive-object', () => {
    const state = reactive({ name: 'test', email: 'a@b.com' })
    const { isDirty, captureSnapshot } = useFormDirtyGuard(state)
    captureSnapshot()
    expect(isDirty.value).toBe(false)

    state.name = 'changed'
    expect(isDirty.value).toBe(true)
  })

  it('dirtyGuard-leave-allowed-when-not-dirty', () => {
    const leaveHandlers: Array<(to: unknown) => boolean> = []
    vi.stubGlobal('onBeforeRouteLeave', (cb: (to: unknown) => boolean) => leaveHandlers.push(cb))

    const state = ref({ name: 'test' })
    const { captureSnapshot } = useFormDirtyGuard(state)
    captureSnapshot()

    const allowed = leaveHandlers[0]({ path: '/other' })
    expect(allowed).toBe(true)
  })

  it('dirtyGuard-cancelLeave-clears-pending', () => {
    const leaveHandlers: Array<(to: unknown) => boolean> = []
    vi.stubGlobal('onBeforeRouteLeave', (cb: (to: unknown) => boolean) => leaveHandlers.push(cb))

    const state = ref({ name: 'test' })
    const { captureSnapshot, cancelLeave, confirmLeave } = useFormDirtyGuard(state)
    captureSnapshot()
    state.value.name = 'changed'

    leaveHandlers[0]({ path: '/target' })

    cancelLeave()
    vi.mocked(navigateTo).mockClear()

    confirmLeave()
    expect(navigateTo).not.toHaveBeenCalled()
  })
})
