<script setup lang="ts">
const { t } = useI18n()

const { isCompleted: adminGridCompleted, markCompleted: markAdminGridDone } = useOnboardingState('admin-grid')
const { getPending, clearPending, setPending } = usePendingOnboarding()
const { completeOnboarding } = useProfileApi()
const { commitDone } = useOnboardingDone()
const router = useRouter()

const wrapper = ref(null)
const { start, finish: finishWrapper } = useVOnboarding(wrapper)

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

// Prevents onFinish from navigating when the user clicked skip instead
const skipping = ref(false)

function onFinish() {
  if (skipping.value) {
    skipping.value = false
    return
  }
  markAdminGridDone()
  // commitDone() before the API call — the browser may cancel the in-flight
  // request if the user reloads before it resolves, and the localStorage flag
  // must already be present to prevent DashboardOnboarding from resetting
  // state and restarting the tour when the dashboard remounts after the
  // builder tour redirects back to '/'.
  commitDone()
  completeOnboarding().catch(() => {})
  setPending('builder-pages')
  router.push('/motor-builder/builder-pages')
}

function skipAdminGrid() {
  commitDone()
  skipping.value = true
  markAdminGridDone()
  completeOnboarding().catch(() => {})
  finishWrapper()
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
  >
    <template #default="{ step, next, previous, isFirst, isLast }">
      <OnboardingStep :step="step" :next="next" :previous="previous" :skip="skipAdminGrid" :is-first="isFirst" :is-last="isLast" />
    </template>
  </VOnboardingWrapper>
</template>
