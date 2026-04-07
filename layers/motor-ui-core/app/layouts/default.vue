<script setup lang="ts">
useDashboard()
useTheme()

const open = ref(false)
const collapsed = ref(false)
const { navigation } = useAdminNavigation()
const { can } = usePermissions()

// Resolve ⌘/Ctrl during SSR via User-Agent to avoid hydration glitch
// (Nuxt UI's useKbd defers this to onMounted, rendering an empty <kbd> on the server)
const isMacOS = import.meta.server
  ? useRequestHeaders(['user-agent'])['user-agent']?.includes('Macintosh') ?? false
  : /Macintosh/.test(navigator.userAgent)
const searchKbds = isMacOS ? ['\u2318', 'K'] : ['Ctrl', 'K']
</script>

<template>
  <UDashboardGroup
    unit="rem"
    storage="cookie"
    storage-key="energis-dashboard"
  >
    <UDashboardSidebar
      id="default"
      v-model:open="open"
      v-model:collapsed="collapsed"
      collapsible
      resizable
      :default-size="16"
      :min-size="12"
      :max-size="24"
      :ui="{ footer: 'lg:border-t lg:border-default lg:py-4' }"
    >
      <template #header>
        <div
          v-if="collapsed"
          class="flex w-full justify-center p-2"
        >
          <button
            class="sidebar-toggle-mark"
            @click="collapsed = false"
          >
            <MotorLogo
              variant="mark"
              size="sm"
            />
          </button>
        </div>
        <div
          v-else
          class="sidebar-header group"
        >
          <MotorLogo
            variant="horizontal"
            size="sm"
          />
          <div class="flex-1" />
          <button
            class="sidebar-toggle-chevron"
            @click="collapsed = true"
          >
            <UIcon
              name="i-lucide-chevrons-left"
              class="size-4"
            />
          </button>
        </div>
      </template>

      <template #default>
        <UDashboardSearchButton
          v-if="can('search.read')"
          id="onboarding-search-button"
          :collapsed="collapsed"
          :kbds="searchKbds"
        />

        <div id="onboarding-sidebar-nav">
          <UNavigationMenu
            :collapsed="collapsed"
            :items="navigation"
            orientation="vertical"
            tooltip
            popover
          />
        </div>
      </template>

      <template #footer>
        <UserMenu :collapsed="collapsed" />
      </template>
    </UDashboardSidebar>

    <UDashboardPanel
      id="main"
      class="overflow-y-auto"
    >
      <slot />
    </UDashboardPanel>

    <!-- Notification Bell (top right) -->
    <div class="fixed top-4 right-4 z-50">
      <NotificationBell />
    </div>

    <!-- Notifications Slideover -->
    <NotificationsSlideover />

    <!-- Global Search (Cmd+K) -->
    <DashboardSearch v-if="can('search.read')" />

    <!-- Keyboard Shortcut Overlay (hold ⌘/Ctrl) -->
    <ShortcutOverlay />
  </UDashboardGroup>
</template>

<style scoped>
.sidebar-header {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.625rem 0.5rem 0.625rem 0.75rem;
  width: 100%;
}

.sidebar-toggle-mark {
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 0.5rem;
  transition: background-color 0.15s ease;
  background: transparent;
  border: none;
}

.sidebar-toggle-mark:hover {
  background-color: var(--ui-bg-elevated);
}

.sidebar-toggle-chevron {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  border-radius: 0.375rem;
  cursor: pointer;
  background: transparent;
  border: none;
  color: var(--ui-text-dimmed);
  opacity: 0;
  transition: opacity 0.15s ease, color 0.15s ease;
}

.group:hover .sidebar-toggle-chevron {
  opacity: 1;
}

.sidebar-toggle-chevron:hover {
  color: var(--ui-text);
  background-color: var(--ui-bg-elevated);
}
</style>
