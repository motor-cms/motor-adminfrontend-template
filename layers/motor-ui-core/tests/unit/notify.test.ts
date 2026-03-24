// AI-generated — review before merging
import { describe, expect, it, beforeEach, vi } from 'vitest'
import { useNotify } from '../../app/composables/useNotify'

const mockToastAdd = vi.fn()
const mockStoreAdd = vi.fn()

describe('useNotify', () => {
  beforeEach(() => {
    vi.stubGlobal('useToast', () => ({ add: mockToastAdd }))
    vi.stubGlobal('useNotificationsStore', () => ({ add: mockStoreAdd }))
    mockToastAdd.mockClear()
    mockStoreAdd.mockClear()
  })

  it('notify-success-shows-toast', () => {
    const { success } = useNotify()

    success('Done!', 'Operation completed')

    expect(mockToastAdd).toHaveBeenCalledWith({
      title: 'Done!',
      description: 'Operation completed',
      color: 'success',
      icon: 'i-lucide-check-circle'
    })
    expect(mockStoreAdd).toHaveBeenCalledWith({
      title: 'Done!',
      description: 'Operation completed',
      color: 'success',
      icon: 'i-lucide-check-circle',
      error: undefined
    })
  })

  it('notify-error-shows-toast', () => {
    const { error } = useNotify()
    const errDetails = { message: 'Something failed' }

    error('Failed', 'Operation failed', errDetails)

    expect(mockToastAdd).toHaveBeenCalledWith({
      title: 'Failed',
      description: 'Operation failed',
      color: 'error',
      icon: 'i-lucide-alert-circle'
    })
    expect(mockStoreAdd).toHaveBeenCalledWith({
      title: 'Failed',
      description: 'Operation failed',
      color: 'error',
      icon: 'i-lucide-alert-circle',
      error: errDetails
    })
  })

  it('notify-warning-shows-toast', () => {
    const { warning } = useNotify()

    warning('Watch out')

    expect(mockToastAdd).toHaveBeenCalledWith({
      title: 'Watch out',
      description: undefined,
      color: 'warning',
      icon: 'i-lucide-alert-triangle'
    })
    expect(mockStoreAdd).toHaveBeenCalledWith({
      title: 'Watch out',
      description: undefined,
      color: 'warning',
      icon: 'i-lucide-alert-triangle',
      error: undefined
    })
  })

  it('notify-info-shows-toast', () => {
    const { info } = useNotify()

    info('FYI')

    expect(mockToastAdd).toHaveBeenCalledWith({
      title: 'FYI',
      description: undefined,
      color: 'info',
      icon: 'i-lucide-info'
    })
    expect(mockStoreAdd).toHaveBeenCalledWith({
      title: 'FYI',
      description: undefined,
      color: 'info',
      icon: 'i-lucide-info',
      error: undefined
    })
  })

  it('notify uses custom icon when provided', () => {
    const { notify } = useNotify()

    notify({ title: 'Custom', icon: 'i-custom-icon', color: 'success' })

    expect(mockToastAdd).toHaveBeenCalledWith({
      title: 'Custom',
      description: undefined,
      color: 'success',
      icon: 'i-custom-icon'
    })
  })
})
