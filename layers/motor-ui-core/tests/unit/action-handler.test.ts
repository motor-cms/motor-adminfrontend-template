// AI-generated — review before merging
import { describe, expect, it, vi } from 'vitest'
import { useActionHandler } from '../../app/composables/useActionHandler'

describe('useActionHandler', () => {
  it('actionHandler-runs-async-handler', async () => {
    const { runHandler } = useActionHandler()
    const handler = vi.fn().mockResolvedValue(undefined)
    const onSuccess = vi.fn()
    const onError = vi.fn()

    await runHandler('test-action', handler, {
      onSuccess,
      onError
    })

    expect(handler).toHaveBeenCalledOnce()
    expect(onSuccess).toHaveBeenCalledOnce()
    expect(onError).not.toHaveBeenCalled()
  })

  it('actionHandler-tracks-pending', async () => {
    const { pendingAction, runHandler } = useActionHandler()
    let pendingDuringHandler: string | null = null
    const handler = vi.fn().mockImplementation(async () => {
      pendingDuringHandler = pendingAction.value
    })

    await runHandler('my-action', handler, {
      onSuccess: () => {},
      onError: () => {}
    })

    expect(pendingDuringHandler).toBe('my-action')
    expect(pendingAction.value).toBeNull()
  })

  it('actionHandler-clears-confirm-modal', async () => {
    const { confirmModal, runHandler } = useActionHandler()
    confirmModal.value = true

    await runHandler('test', async () => {}, {
      onSuccess: () => {},
      onError: () => {}
    })

    expect(confirmModal.value).toBe(false)
  })

  it('actionHandler-calls-onError-on-failure', async () => {
    const { runHandler, pendingAction } = useActionHandler()
    const error = new Error('handler failed')
    const handler = vi.fn().mockRejectedValue(error)
    const onSuccess = vi.fn()
    const onError = vi.fn()

    await runHandler('fail-action', handler, { onSuccess, onError })

    expect(onError).toHaveBeenCalledWith(error)
    expect(onSuccess).not.toHaveBeenCalled()
    expect(pendingAction.value).toBeNull()
  })

  it('actionHandler-calls-onFinally', async () => {
    const { runHandler } = useActionHandler()
    const onFinally = vi.fn()

    await runHandler('test', async () => {}, {
      onSuccess: () => {},
      onError: () => {},
      onFinally
    })

    expect(onFinally).toHaveBeenCalledOnce()
  })

  it('actionHandler-calls-onFinally-on-error', async () => {
    const { runHandler } = useActionHandler()
    const onFinally = vi.fn()

    await runHandler('test', async () => {
      throw new Error('fail')
    }, {
      onSuccess: () => {},
      onError: () => {},
      onFinally
    })

    expect(onFinally).toHaveBeenCalledOnce()
  })

  it('actionHandler-runs-sync-handler', async () => {
    const { runHandler } = useActionHandler()
    const onSuccess = vi.fn()

    await runHandler('sync', () => {}, {
      onSuccess,
      onError: () => {}
    })

    expect(onSuccess).toHaveBeenCalledOnce()
  })
})
