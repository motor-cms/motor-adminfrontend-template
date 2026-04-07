<script setup lang="ts">
const { t } = useI18n()

const { isCompleted: adminGridCompleted, markCompleted: markAdminGridDone } = useOnboardingState('admin-grid')
const { getPending, clearPending, setPending } = usePendingOnboarding()
const { completeOnboarding } = useProfileApi()
const router = useRouter()

const wrapper = ref(null)
const { start } = useVOnboarding(wrapper)

const steps = computed(() => [
  {
    attachTo: { element: '#users-grid' },
    content: {
      title: t('motor-admin.onboarding.admin_grid.step1_title'),
      description: t('motor-admin.onboarding.admin_grid.step1_desc'),
    },
  },
])

const options = computed(() => ({
  scrollToStep: { enabled: true, options: { behavior: 'smooth' as ScrollBehavior, block: 'center' as ScrollLogicalPosition } },
  popper: { strategy: 'fixed' as const },
  labels: {
    previousButton: t('motor-admin.onboarding.previous'),
    nextButton: t('motor-admin.onboarding.next'),
    finishButton: t('motor-admin.onboarding.finish'),
  },
}))

function onFinish() {
  markAdminGridDone()
  completeOnboarding().catch(() => {})
  setPending('builder-pages')
  router.push('/motor-builder/builder-pages')
}

// Auto-start when the page was reached via the admin-nav onboarding chain.
// The pending flag is set in DashboardOnboarding.vue after the admin-nav tour finishes.
const stopWatch = watch(
  wrapper,
  async (w) => {
    if (!w) return
    stopWatch()

    if (getPending() === 'admin-grid' && !adminGridCompleted.value) {
      clearPending()
      // Brief delay to let the grid data load before the tooltip appears
      await new Promise(resolve => setTimeout(resolve, 600))
      start()
    }
  },
  { immediate: true },
)
</script>

<template>
  <VOnboardingWrapper
    ref="wrapper"
    :steps="steps"
    :options="options"
    @finish="onFinish"
  />
</template>
