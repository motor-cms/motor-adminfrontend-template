<script setup lang="ts">
import type { User } from '@motor-cms/ui-core/app/types/auth'

const { user } = useSanctumAuth<User>()
const { clientName } = useRuntimeConfig().public
const { t } = useI18n()

// Helper to access user data
const userData = computed(() => user.value?.data)

definePageMeta({
  layout: 'default',
  permission: 'dashboard.read'
})
</script>

<template>
  <div class="p-6">
    <!-- Mobile sidebar toggle -->
    <div class="lg:hidden mb-3">
      <UDashboardSidebarToggle />
    </div>

    <div class="mb-6">
      <h1 class="text-2xl font-bold">
        {{ t('motor-core.global.dashboard') }}
      </h1>
    </div>

    <UPageCard :title="t('motor-core.global.welcome_back')">
      <template #description>
        {{ t('motor-core.global.logged_in_as') }} {{ userData?.name || userData?.email || 'User' }}.
      </template>
      <p class="text-sm text-muted">
        {{ t('motor-core.global.dashboard_description', { clientName }) }}
      </p>
    </UPageCard>
  </div>
</template>
