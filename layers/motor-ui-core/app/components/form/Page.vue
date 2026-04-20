<!-- app/components/form/Page.vue -->
<script setup lang="ts">
const props = defineProps<{
  title: string
  backRoute?: string
  loading?: boolean
  error?: boolean
  breadcrumbs?: BreadcrumbItem[]
}>()

const { t } = useI18n()
const router = useRouter()

const { breadcrumbs: computedBreadcrumbs } = useBreadcrumbs(
  computed(() => props.breadcrumbs)
)
</script>

<template>
  <div class="min-h-full flex flex-col">
    <div class="px-6 pt-4 pb-3">
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

      <h1 class="text-2xl font-bold">
        {{ title }}
      </h1>
    </div>

    <!-- Loading state -->
    <div
      v-if="loading"
      class="flex-1 flex items-center justify-center px-6"
    >
      <UIcon
        name="i-lucide-loader-2"
        class="animate-spin text-2xl text-muted"
      />
    </div>

    <!-- Error state -->
    <div
      v-else-if="error"
      class="flex-1 flex flex-col items-center justify-center gap-4 px-6"
    >
      <UIcon
        name="i-lucide-alert-circle"
        class="text-4xl text-error"
      />
      <p class="text-muted">
        {{ t('motor-core.global.no_results') }}
      </p>
      <UButton
        v-if="backRoute"
        color="neutral"
        variant="outline"
        icon="i-lucide-arrow-left"
        @click="router.push(backRoute)"
      >
        {{ t('motor-core.global.back') }}
      </UButton>
    </div>

    <!-- Content -->
    <div
      v-else
      class="flex-1 flex flex-col px-6"
    >
      <slot />
    </div>
  </div>
</template>
