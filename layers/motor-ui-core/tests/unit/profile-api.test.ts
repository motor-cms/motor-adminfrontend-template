// AI-generated — review before merging
import { describe, expect, it, beforeEach, vi } from 'vitest'

import { useProfileApi } from '../../app/composables/useProfileApi'

const mockClient = vi.fn().mockResolvedValue({
  data: { id: 1, name: 'Test', email: 'test@example.com' }
})

vi.stubGlobal('useSanctumClient', () => mockClient)

describe('useProfileApi', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockClient.mockResolvedValue({
      data: { id: 1, name: 'Test', email: 'test@example.com' }
    })
  })

  it('profileApi-handles-error', async () => {
    const err = new Error('Network error')
    mockClient.mockRejectedValue(err)

    const { updateProfile } = useProfileApi()

    await expect(updateProfile({ name: 'Test', email: 'test@example.com' })).rejects.toThrow('Network error')
  })

  it('profileApi-updates-profile', async () => {
    const { updateProfile } = useProfileApi()

    const payload = { name: 'Test', email: 'test@example.com' }
    const result = await updateProfile(payload)

    expect(mockClient).toHaveBeenCalledWith('/api/profile', {
      method: 'PUT',
      body: payload
    })
    expect(result.data).toEqual({ id: 1, name: 'Test', email: 'test@example.com' })
  })
})
