<!-- app/components/grid/Page.vue -->
<script setup lang="ts">
const props = defineProps<{
  title: string
  subtitle?: string
  addRoute?: string
  addLabel?: string
  writePermission?: string
  backRoute?: string
  backLabel?: string
  breadcrumbs?: BreadcrumbItem[]
}>()

const { breadcrumbs: computedBreadcrumbs } = useBreadcrumbs(
  computed(() => props.breadcrumbs)
)
const { can } = usePermissions()
</script>

<template>
  <div class="flex flex-col h-full p-6">
    <!-- Breadcrumbs / Mobile sidebar toggle -->
    <div class="flex items-center gap-2 mb-3">
      <UDashboardSidebarToggle class="lg:hidden shrink-0 -ml-2" />
      <SidebarToggleButton />
      <div
        v-if="computedBreadcrumbs.length > 0"
        class="text-sm"
      >
        <UBreadcrumb :items="computedBreadcrumbs" />
      </div>
    </div>

    <div class="flex items-center justify-between gap-4">
      <div class="min-w-0">
        <PageBackButton
          v-if="backRoute"
          :to="backRoute"
          :label="backLabel"
        />
        <div class="flex items-baseline gap-3">
          <h1 class="text-xl font-semibold">
            {{ title }}
          </h1>
          <span
            v-if="subtitle"
            class="text-sm text-dimmed hidden sm:inline"
          >
            {{ subtitle }}
          </span>
        </div>
      </div>
      <div class="flex items-center gap-3 shrink-0">
        <slot name="actions" />
        <UButton
          v-if="addRoute && (!writePermission || can(writePermission))"
          :to="addRoute"
          icon="i-lucide-plus"
          color="primary"
        >
          {{ addLabel ?? title }}
        </UButton>
      </div>
    </div>

    <div class="mt-6 flex flex-col flex-1 min-h-0">
      <slot />
    </div>
  </div>
</template>
