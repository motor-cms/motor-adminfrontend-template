<script setup lang="ts">
import type { NuxtError } from '#app'

const { t } = useI18n()
const { logout } = useSanctumAuth()

const props = defineProps<{
  error: NuxtError
}>()

const is404 = computed(() => props.error.statusCode === 404)

function handleError() {
  clearError({ redirect: '/' })
}

// The error page renders without the app layout, so the sidebar's logout is not
// available. Offer an explicit logout so a user can always escape a faulty
// error state instead of being stuck (ZRMDEV-236).
async function handleLogout() {
  await logout()
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-[var(--ui-bg)]">
    <div class="text-center space-y-4">
      <p class="text-6xl font-bold text-[var(--ui-text-muted)]">
        {{ error.statusCode }}
      </p>
      <h1 class="text-xl font-semibold">
        {{ is404 ? t('motor-core.errors.page_not_found') : t('motor-core.errors.something_went_wrong') }}
      </h1>
      <p class="text-sm text-[var(--ui-text-muted)] max-w-md">
        {{ is404 ? t('motor-core.errors.page_not_found_description') : error.message }}
      </p>
      <div class="flex items-center justify-center gap-2">
        <UButton
          :label="t('motor-core.errors.back_to_dashboard')"
          icon="i-lucide-home"
          color="primary"
          @click="handleError"
        />
        <UButton
          :label="t('motor-core.global.log_out')"
          icon="i-lucide-log-out"
          color="neutral"
          variant="outline"
          @click="handleLogout"
        />
      </div>
    </div>
  </div>
</template>
