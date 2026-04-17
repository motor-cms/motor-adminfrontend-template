<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const { t } = useI18n()
const { login } = useSanctumAuth()

definePageMeta({
  layout: 'auth',
  sanctum: {
    guestOnly: true
  }
})

const schema = z.object({
  email: z.string({ message: t('motor-core.login.email_required') })
    .min(1, t('motor-core.login.email_required'))
    .email(t('motor-core.login.email_invalid')),
  password: z.string({ message: t('motor-core.login.password_required') })
    .min(1, t('motor-core.login.password_required'))
})

type Schema = z.infer<typeof schema>

const fields = [
  {
    name: 'email',
    type: 'email' as const,
    label: t('motor-core.login.email'),
    placeholder: 'admin@example.com',
    icon: 'i-lucide-mail',
    required: true
  },
  {
    name: 'password',
    type: 'password' as const,
    label: t('motor-core.login.password'),
    placeholder: '••••••••',
    icon: 'i-lucide-lock',
    required: true
  }
]

const loading = ref(false)
const error = ref<string | null>(null)

async function onSubmit(event: FormSubmitEvent<Schema>) {
  loading.value = true
  error.value = null

  try {
    await login({
      email: event.data.email,
      password: event.data.password
    })
    sessionStorage.setItem('motor:login-success', '1')
  } catch {
    error.value = t('motor-core.login.login_failed')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <UAuthForm
    :title="t('motor-core.login.sign_in')"
    :description="t('motor-core.login.sign_in_description')"
    method="POST"
    action=""
    :schema="schema"
    :fields="fields"
    :loading="loading"
    :submit="{ label: t('motor-core.login.sign_in'), color: 'primary' }"
    @submit="onSubmit"
  >
    <template #validation>
      <UAlert
        v-if="error"
        color="error"
        icon="i-lucide-circle-alert"
        :title="error"
      />
    </template>
  </UAuthForm>
</template>
