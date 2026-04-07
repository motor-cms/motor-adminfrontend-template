<script setup lang="ts">
const notificationsStore = useNotificationsStore()

// Cookie mirror of unread count — available during SSR (localStorage is not)
const unreadCount = useCookie<number>('energis-unread-count', { default: () => 0, watch: true })

watch(() => notificationsStore.unreadCount, (count) => {
  unreadCount.value = count
})
</script>

<template>
  <UButton
    id="onboarding-notification-bell"
    color="neutral"
    variant="ghost"
    square
    @click="notificationsStore.openSlideover()"
  >
    <div class="relative">
      <UIcon
        name="i-lucide-bell"
        class="size-5"
      />
      <span
        v-if="unreadCount > 0"
        class="absolute -top-1.5 -right-1.5 flex items-center justify-center size-4 text-[10px] font-medium bg-error text-white rounded-full"
      >
        {{ unreadCount > 9 ? '9+' : unreadCount }}
      </span>
    </div>
  </UButton>
</template>
