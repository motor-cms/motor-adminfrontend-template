export interface AvatarUpload {
  name: string
  dataUrl: string
}

export interface ProfileUpdatePayload {
  name: string
  email: string
  avatar?: AvatarUpload | null
  password?: string
}

export interface ProfileResponse {
  data: {
    id: number
    name: string
    email: string
    avatar?: {
      url: string
    } | null
  }
}

export function useProfileApi() {
  const client = useSanctumClient()

  async function updateProfile(payload: ProfileUpdatePayload): Promise<ProfileResponse> {
    return client<ProfileResponse>('/api/profile', {
      method: 'PUT',
      body: payload
    })
  }

  async function resetOnboarding(): Promise<void> {
    await client('/api/profile/reset-onboarding', { method: 'POST' })
  }

  async function completeOnboarding(): Promise<void> {
    await client('/api/profile/complete-onboarding', { method: 'POST' })
  }

  return {
    updateProfile,
    resetOnboarding,
    completeOnboarding,
  }
}
