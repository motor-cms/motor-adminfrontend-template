<!-- app/components/SectionLanding.vue -->
<script setup lang="ts">
const props = defineProps<{
  /** Section route prefix, e.g. 'motor-admin' */
  sectionPrefix: string
  /** Section title translation key, e.g. 'motor-core.global.administration' */
  titleKey: string
  /** Section subtitle translation key, e.g. 'motor-core.global.section_subtitle' */
  subtitleKey: string
}>()

const { t, te } = useI18n()
const { navigation, status } = useAdminNavigation()

const { breadcrumbs } = useBreadcrumbs()

// Find the section from navigation whose children match this prefix
const sectionModules = computed(() => {
  const section = navigation.value.find(item =>
    item.children?.some(child => String(child.to ?? '').startsWith(`/${props.sectionPrefix}/`))
  )
  return section?.children ?? []
})

// Derive subtitle translation key from a module's route path
function getDescription(moduleTo: string | unknown): string {
  if (typeof moduleTo !== 'string') return ''
  const parts = moduleTo.replace(/^\//, '').split('/')
  const pkg = parts[0]
  const mod = parts[1]?.replace(/-/g, '_')
  if (!pkg || !mod) return ''
  const key = `${pkg}.${mod}.subtitle`
  return te(key) ? t(key) : ''
}

const isLoading = computed(() => status.value === 'pending')
</script>

<template>
  <div class="p-6">
    <!-- Breadcrumbs / Mobile sidebar toggle -->
    <div class="flex items-center gap-2 mb-3">
      <UDashboardSidebarToggle class="lg:hidden shrink-0 -ml-2" />
      <SidebarToggleButton />
      <UBreadcrumb
        v-if="breadcrumbs.length > 1"
        :items="breadcrumbs"
      />
    </div>

    <div class="mb-6">
      <h1 class="text-2xl font-bold">
        {{ t(titleKey) }}
      </h1>
      <p class="text-muted">
        {{ t(subtitleKey) }}
      </p>
    </div>

    <!-- Loading state -->
    <div
      v-if="isLoading && sectionModules.length === 0"
      class="flex items-center justify-center py-12"
    >
      <UIcon
        name="i-lucide-loader-2"
        class="animate-spin text-2xl text-muted"
      />
    </div>

    <!-- Module cards -->
    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      <NuxtLink
        v-for="mod in sectionModules"
        :key="String(mod.to)"
        :to="String(mod.to)"
        class="group"
      >
        <UPageCard class="h-full transition-colors group-hover:border-[var(--ui-primary)]">
          <div class="flex items-start gap-3">
            <UIcon
              v-if="mod.icon"
              :name="mod.icon"
              class="text-xl text-muted group-hover:text-[var(--ui-primary)] transition-colors mt-0.5 shrink-0"
            />
            <div>
              <span class="font-medium">{{ mod.label }}</span>
              <p
                v-if="getDescription(mod.to)"
                class="text-sm text-muted mt-0.5"
              >
                {{ getDescription(mod.to) }}
              </p>
            </div>
          </div>
        </UPageCard>
      </NuxtLink>
    </div>
  </div>
</template>
