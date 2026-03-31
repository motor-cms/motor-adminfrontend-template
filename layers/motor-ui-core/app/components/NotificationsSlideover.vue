<script setup lang="ts">
import { formatTimeAgoIntl } from '@vueuse/core'

const { t, locale } = useI18n()
const notificationsStore = useNotificationsStore()
const expandedErrorId = ref<string | null>(null)

// Mark all as read when slideover opens
watch(() => notificationsStore.isSlideoverOpen, (isOpen) => {
  if (isOpen) {
    // Small delay to let user see the unread state first
    setTimeout(() => {
      notificationsStore.markAllAsRead()
    }, 500)
  }
})

function toggleErrorDetails(id: string) {
  expandedErrorId.value = expandedErrorId.value === id ? null : id
}

function copyErrorToClipboard(notification: typeof notificationsStore.notifications[0]) {
  const errorText = JSON.stringify({
    title: notification.title,
    description: notification.description,
    timestamp: notification.timestamp,
    error: notification.error
  }, null, 2)

  navigator.clipboard.writeText(errorText)
}

// Color mapping for notification icons
const colorClasses: Record<string, string> = {
  success: 'text-success',
  error: 'text-error',
  warning: 'text-warning',
  info: 'text-info',
  neutral: 'text-muted'
}
</script>

<template>
  <USlideover
    v-model:open="notificationsStore.isSlideoverOpen"
    :title="t('motor-core.notifications.title')"
    :description="t('motor-core.notifications.description')"
  >
    <template #body>
      <div class="flex flex-col gap-2">
        <!-- Empty state -->
        <div
          v-if="notificationsStore.notifications.length === 0"
          class="flex flex-col items-center justify-center py-12 text-muted"
        >
          <UIcon
            name="i-lucide-bell-off"
            class="size-12 mb-4"
          />
          <p class="text-sm">
            {{ t('motor-core.notifications.empty') }}
          </p>
        </div>

        <!-- Notification list -->
        <div
          v-for="notification in notificationsStore.notifications"
          :key="notification.id"
          class="p-3 rounded-lg border border-default hover:bg-elevated transition-colors"
          :class="{ 'bg-elevated/50': !notification.read }"
        >
          <div class="flex gap-3">
            <!-- Icon -->
            <div class="flex-shrink-0 pt-0.5">
              <UIcon
                :name="notification.icon || 'i-lucide-bell'"
                class="size-5"
                :class="colorClasses[notification.color] || 'text-muted'"
              />
            </div>

            <!-- Content -->
            <div class="flex-1 min-w-0">
              <div class="flex items-start justify-between gap-2">
                <p class="text-sm font-medium text-default">
                  {{ notification.title }}
                </p>
                <span class="text-xs text-muted whitespace-nowrap">
                  {{ formatTimeAgoIntl(new Date(notification.timestamp), { locale }) }}
                </span>
              </div>

              <p
                v-if="notification.description"
                class="text-sm text-muted mt-0.5"
              >
                {{ notification.description }}
              </p>

              <!-- Error details (expandable) -->
              <div
                v-if="notification.error"
                class="mt-2"
              >
                <button
                  class="text-xs text-primary hover:underline flex items-center gap-1"
                  @click="toggleErrorDetails(notification.id)"
                >
                  <UIcon
                    :name="expandedErrorId === notification.id ? 'i-lucide-chevron-down' : 'i-lucide-chevron-right'"
                    class="size-3"
                  />
                  {{ expandedErrorId === notification.id ? t('motor-core.notifications.hide_error_details') : t('motor-core.notifications.show_error_details') }}
                </button>

                <div
                  v-if="expandedErrorId === notification.id"
                  class="mt-2 p-2 bg-muted rounded text-xs font-mono overflow-auto max-h-48"
                >
                  <div
                    v-if="notification.error.status"
                    class="mb-1"
                  >
                    <span class="text-muted">{{ t('motor-core.notifications.status') }}</span> {{ notification.error.status }}
                  </div>
                  <div
                    v-if="notification.error.url"
                    class="mb-1"
                  >
                    <span class="text-muted">{{ t('motor-core.notifications.url') }}</span> {{ notification.error.url }}
                  </div>
                  <div
                    v-if="notification.error.message"
                    class="mb-1"
                  >
                    <span class="text-muted">{{ t('motor-core.notifications.message') }}</span> {{ notification.error.message }}
                  </div>
                  <div
                    v-if="notification.error.stack"
                    class="mb-1"
                  >
                    <span class="text-muted">{{ t('motor-core.notifications.stack') }}</span>
                    <pre class="whitespace-pre-wrap text-xs mt-1">{{ notification.error.stack }}</pre>
                  </div>
                  <div
                    v-if="notification.error.responseBody"
                    class="mb-1"
                  >
                    <span class="text-muted">{{ t('motor-core.notifications.response') }}</span>
                    <pre class="whitespace-pre-wrap text-xs mt-1">{{ JSON.stringify(notification.error.responseBody, null, 2) }}</pre>
                  </div>

                  <UButton
                    size="xs"
                    color="neutral"
                    variant="ghost"
                    icon="i-lucide-copy"
                    class="mt-2"
                    @click="copyErrorToClipboard(notification)"
                  >
                    {{ t('motor-core.notifications.copy_error') }}
                  </UButton>
                </div>
              </div>
            </div>

            <!-- Remove button -->
            <button
              class="flex-shrink-0 text-muted hover:text-default transition-colors"
              @click="notificationsStore.remove(notification.id)"
            >
              <UIcon
                name="i-lucide-x"
                class="size-4"
              />
            </button>
          </div>
        </div>
      </div>
    </template>

    <template #footer>
      <div class="flex justify-between">
        <UButton
          color="neutral"
          variant="ghost"
          size="sm"
          :disabled="notificationsStore.notifications.length === 0"
          @click="notificationsStore.clear()"
        >
          {{ t('motor-core.notifications.clear_all') }}
        </UButton>
        <UButton
          color="neutral"
          variant="outline"
          size="sm"
          @click="notificationsStore.closeSlideover()"
        >
          {{ t('motor-core.notifications.close') }}
        </UButton>
      </div>
    </template>
  </USlideover>
</template>
