import { describe, expect, it, beforeEach, vi } from 'vitest'
import { useCancellableUpload, isAbortError } from '../../app/composables/useCancellableUpload'

describe('useCancellableUpload', () => {
  let leaveHandlers: Array<() => boolean>
  let unmountHandlers: Array<() => void>

  beforeEach(() => {
    leaveHandlers = []
    unmountHandlers = []
    vi.stubGlobal('onBeforeRouteLeave', (cb: () => boolean) => leaveHandlers.push(cb))
    vi.stubGlobal('onBeforeUnmount', (cb: () => void) => unmountHandlers.push(cb))
  })

  it('start() returns a fresh, non-aborted signal', () => {
    const { start } = useCancellableUpload()
    const signal = start()
    expect(signal.aborted).toBe(false)
  })

  it('abort() aborts the active signal', () => {
    const { start, abort } = useCancellableUpload()
    const signal = start()
    abort()
    expect(signal.aborted).toBe(true)
  })

  it('starting a new upload aborts the previous one', () => {
    const { start } = useCancellableUpload()
    const first = start()
    const second = start()
    expect(first.aborted).toBe(true)
    expect(second.aborted).toBe(false)
  })

  it('leaving the route aborts the in-flight upload and allows navigation', () => {
    const { start } = useCancellableUpload()
    const signal = start()
    const allow = leaveHandlers[0]!()
    expect(signal.aborted).toBe(true)
    expect(allow).toBe(true)
  })

  it('unmount aborts the in-flight upload', () => {
    const { start } = useCancellableUpload()
    const signal = start()
    unmountHandlers[0]!()
    expect(signal.aborted).toBe(true)
  })

  it('done() stops a later route-leave from aborting the finished request', () => {
    const { start, done } = useCancellableUpload()
    const signal = start()
    done()
    leaveHandlers[0]!()
    expect(signal.aborted).toBe(false)
  })
})

describe('isAbortError', () => {
  it('detects a direct AbortError', () => {
    expect(isAbortError(Object.assign(new Error('aborted'), { name: 'AbortError' }))).toBe(true)
  })

  it('detects a wrapped AbortError (err.cause.name)', () => {
    expect(isAbortError({ name: 'FetchError', cause: { name: 'AbortError' } })).toBe(true)
  })

  it('detects a real aborted controller error shape', () => {
    const c = new AbortController()
    c.abort()
    expect(isAbortError(c.signal.reason)).toBe(true)
  })

  it('returns false for ordinary errors', () => {
    expect(isAbortError(new Error('boom'))).toBe(false)
    expect(isAbortError({ name: 'TypeError' })).toBe(false)
    expect(isAbortError(null)).toBe(false)
    expect(isAbortError(undefined)).toBe(false)
  })
})
