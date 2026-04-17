<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'
import type { User } from '@motor-cms/ui-core/app/types/auth'

definePageMeta({
  layout: 'default',
  permission: 'profile.read'
})

const { t } = useI18n()
const router = useRouter()
const { user, refreshIdentity } = useSanctumAuth<User>()
const { updateProfile, resetOnboarding } = useProfileApi()
const { resetAll: resetOnboardingState } = useOnboardingResetAll()
const { success, error: notifyError, info } = useNotify()

// Test function to demonstrate error notifications
function testError() {
  try {
    throw new Error('This is a test error to demonstrate error notifications with stack traces')
  } catch (err: unknown) {
    const error = err as Error
    notifyError(t('motor-core.profile.toast_test_error_title'), error.message, {
      message: error.message,
      stack: error.stack,
      status: 500,
      url: '/api/test',
      responseBody: {
        error: 'Internal Server Error',
        details: 'This is mock response data for testing'
      }
    })
  }
}

// Helper to access user data
const userData = computed(() => user.value?.data)

// ============================================
// Profile Form
// ============================================

const profileSchema = z.object({
  name: z.string().min(1, t('motor-core.profile.validation_name_required')),
  email: z.string().email(t('motor-core.profile.validation_email_invalid')),
  avatar: z.string().nullable().optional()
})

type ProfileSchema = z.output<typeof profileSchema>

const profileState = reactive({
  name: '',
  email: ''
})

// Track original values for dirty checking
const originalProfileState = reactive({
  name: '',
  email: ''
})

const avatarFile = ref<File | null>(null)

// Check if profile form has changes
const isProfileDirty = computed(() => {
  return profileState.name !== originalProfileState.name
    || profileState.email !== originalProfileState.email
    || avatarFile.value !== null
})
const avatarPreviewUrl = computed(() => {
  if (avatarFile.value) {
    return URL.createObjectURL(avatarFile.value)
  }
  const avatar = userData.value?.avatar
  if (!avatar) return null
  // Handle conversions as object (e.g., { thumb: { url: '...' } }) or array
  const conversions = avatar.conversions
  if (conversions && typeof conversions === 'object' && !Array.isArray(conversions)) {
    return (conversions as Record<string, { url: string }>).thumb?.url ?? avatar.url
  }
  if (Array.isArray(conversions)) {
    const thumbConversion = conversions.find(c => c.name === 'thumb')
    return thumbConversion?.url ?? avatar.url
  }
  return avatar.url
})

const profileLoading = ref(false)

// Initialize form with user data
watchEffect(() => {
  if (userData.value) {
    profileState.name = userData.value.name || ''
    profileState.email = userData.value.email || ''
    // Store original values for dirty checking
    originalProfileState.name = userData.value.name || ''
    originalProfileState.email = userData.value.email || ''
  }
})

async function onProfileSubmit(event: FormSubmitEvent<ProfileSchema>) {
  // Skip if no changes
  if (!isProfileDirty.value) {
    info(t('motor-core.profile.toast_no_changes_title'), t('motor-core.profile.toast_no_changes_message'))
    return
  }

  profileLoading.value = true

  try {
    let avatarPayload: { name: string, dataUrl: string } | null = null

    if (avatarFile.value) {
      const fullDataUrl = await fileToBase64(avatarFile.value)
      // Extract just the base64 part, removing "data:image/...;base64," prefix
      const base64Data = fullDataUrl.split(',')[1] || fullDataUrl
      avatarPayload = {
        name: avatarFile.value.name,
        dataUrl: base64Data
      }
    } else if (!avatarPreviewUrl.value) {
      // Avatar was removed
      avatarPayload = null
    }

    const response = await updateProfile({
      name: event.data.name,
      email: event.data.email,
      avatar: avatarPayload
    })

    // Repopulate form from response and update original state
    profileState.name = response.data.name
    profileState.email = response.data.email
    originalProfileState.name = response.data.name
    originalProfileState.email = response.data.email
    avatarFile.value = null

    // Refresh global auth state
    await refreshIdentity()

    success(t('motor-core.profile.toast_profile_updated_title'), t('motor-core.profile.toast_profile_updated_message'))
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : t('motor-core.profile.toast_profile_error')
    notifyError(t('motor-core.profile.toast_profile_error'), message, {
      message,
      stack: err instanceof Error ? err.stack : undefined,
      url: '/api/profile'
    })
  } finally {
    profileLoading.value = false
  }
}

// ============================================
// Password Form
// ============================================

const passwordSchema = z.object({
  password: z.string().min(8, t('motor-core.profile.validation_password_min')),
  password_confirmation: z.string()
}).refine(data => data.password === data.password_confirmation, {
  message: t('motor-core.profile.validation_passwords_mismatch'),
  path: ['password_confirmation']
})

type PasswordSchema = z.output<typeof passwordSchema>

const passwordState = reactive({
  password: '',
  password_confirmation: ''
})

const passwordLoading = ref(false)

// ============================================
// Onboarding Tour
// ============================================

const onboardingLoading = ref(false)

async function onRestartTour() {
  onboardingLoading.value = true
  try {
    await resetOnboarding()
    resetOnboardingState()
    await refreshIdentity()
    success(t('motor-core.profile.toast_tour_reset_title'), t('motor-core.profile.toast_tour_reset_message'))
    await router.push('/')
  }
  catch (err: unknown) {
    const message = err instanceof Error ? err.message : t('motor-core.profile.toast_tour_reset_error')
    notifyError(t('motor-core.profile.toast_tour_reset_error'), message, {
      message,
      stack: err instanceof Error ? err.stack : undefined,
      url: '/api/profile/reset-onboarding',
    })
  }
  finally {
    onboardingLoading.value = false
  }
}

async function onPasswordSubmit(event: FormSubmitEvent<PasswordSchema>) {
  passwordLoading.value = true

  try {
    await updateProfile({
      name: profileState.name,
      email: profileState.email,
      password: event.data.password
    })

    // Clear password fields
    passwordState.password = ''
    passwordState.password_confirmation = ''

    success(t('motor-core.profile.toast_password_updated_title'), t('motor-core.profile.toast_password_updated_message'))
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : t('motor-core.profile.toast_password_error')
    notifyError(t('motor-core.profile.toast_password_error'), message, {
      message,
      stack: err instanceof Error ? err.stack : undefined,
      url: '/api/profile'
    })
  } finally {
    passwordLoading.value = false
  }
}
</script>

<template>
  <UDashboardPanel id="profile">
    <template #header>
      <UDashboardNavbar :title="t('motor-core.profile.title')">
        <template #leading>
          <UDashboardSidebarCollapse />
        </template>
      </UDashboardNavbar>
    </template>

    <template #body>
      <div class="flex flex-col gap-6">
        <!-- Profile Information Card -->
        <UPageCard
          :title="t('motor-core.profile.profile_info_title')"
          :description="t('motor-core.profile.profile_info_description')"
        >
          <UForm
            :schema="profileSchema"
            :state="profileState"
            class="space-y-4"
            @submit="onProfileSubmit"
          >
            <!-- Avatar Row -->
            <div class="grid grid-cols-[150px_1fr] gap-6 items-start">
              <label class="text-sm font-medium text-default pt-2">{{ t('motor-core.profile.avatar_label') }}</label>
              <FileUpload
                v-model="avatarFile"
                :preview-url="avatarPreviewUrl"
              />
            </div>

            <!-- Name Row -->
            <div class="grid grid-cols-[150px_1fr] gap-6 items-start">
              <label class="text-sm font-medium text-default pt-2">
                {{ t('motor-core.profile.name_label') }} <span class="text-error">*</span>
              </label>
              <UFormField
                name="name"
                :ui="{ wrapper: 'w-full' }"
              >
                <UInput
                  v-model="profileState.name"
                  :placeholder="t('motor-core.profile.name_placeholder')"
                  icon="i-lucide-user"
                  class="w-full"
                />
              </UFormField>
            </div>

            <!-- Email Row -->
            <div class="grid grid-cols-[150px_1fr] gap-6 items-start">
              <label class="text-sm font-medium text-default pt-2">
                {{ t('motor-core.profile.email_label') }} <span class="text-error">*</span>
              </label>
              <UFormField
                name="email"
                :ui="{ wrapper: 'w-full' }"
              >
                <UInput
                  v-model="profileState.email"
                  type="email"
                  :placeholder="t('motor-core.profile.email_placeholder')"
                  icon="i-lucide-mail"
                  class="w-full"
                />
              </UFormField>
            </div>

            <!-- Submit Row -->
            <div class="grid grid-cols-[150px_1fr] gap-6">
              <div />
              <div class="flex justify-end gap-2">
                <UButton
                  color="error"
                  variant="outline"
                  icon="i-lucide-bug"
                  @click="testError"
                >
                  {{ t('motor-core.profile.test_error') }}
                </UButton>
                <UButton
                  type="submit"
                  :loading="profileLoading"
                  icon="i-lucide-save"
                >
                  {{ t('motor-core.profile.save_profile') }}
                </UButton>
              </div>
            </div>
          </UForm>
        </UPageCard>

        <!-- Onboarding Tour Card -->
        <UPageCard
          :title="t('motor-core.profile.onboarding_title')"
          :description="t('motor-core.profile.onboarding_description')"
        >
          <div class="flex justify-end">
            <UButton
              :loading="onboardingLoading"
              icon="i-lucide-graduation-cap"
              @click="onRestartTour"
            >
              {{ t('motor-core.profile.restart_tour') }}
            </UButton>
          </div>
        </UPageCard>

        <!-- Change Password Card -->
        <UPageCard
          :title="t('motor-core.profile.change_password_title')"
          :description="t('motor-core.profile.change_password_description')"
        >
          <UForm
            :schema="passwordSchema"
            :state="passwordState"
            class="space-y-4"
            @submit="onPasswordSubmit"
          >
            <!-- New Password Row -->
            <div class="grid grid-cols-[150px_1fr] gap-6 items-start">
              <label class="text-sm font-medium text-default pt-2">
                {{ t('motor-core.profile.new_password_label') }} <span class="text-error">*</span>
              </label>
              <UFormField
                name="password"
                :ui="{ wrapper: 'w-full' }"
              >
                <UInput
                  v-model="passwordState.password"
                  type="password"
                  :placeholder="t('motor-core.profile.new_password_placeholder')"
                  icon="i-lucide-lock"
                  class="w-full"
                />
              </UFormField>
            </div>

            <!-- Confirm Password Row -->
            <div class="grid grid-cols-[150px_1fr] gap-6 items-start">
              <label class="text-sm font-medium text-default pt-2">
                {{ t('motor-core.profile.confirm_password_label') }} <span class="text-error">*</span>
              </label>
              <UFormField
                name="password_confirmation"
                :ui="{ wrapper: 'w-full' }"
              >
                <UInput
                  v-model="passwordState.password_confirmation"
                  type="password"
                  :placeholder="t('motor-core.profile.confirm_password_placeholder')"
                  icon="i-lucide-lock"
                  class="w-full"
                />
              </UFormField>
            </div>

            <!-- Submit Row -->
            <div class="grid grid-cols-[150px_1fr] gap-6">
              <div />
              <div class="flex justify-end">
                <UButton
                  type="submit"
                  :loading="passwordLoading"
                  icon="i-lucide-key"
                >
                  {{ t('motor-core.profile.update_password') }}
                </UButton>
              </div>
            </div>
          </UForm>
        </UPageCard>
      </div>
    </template>
  </UDashboardPanel>
</template>
