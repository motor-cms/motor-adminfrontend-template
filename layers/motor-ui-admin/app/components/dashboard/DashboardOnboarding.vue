<script setup lang="ts">
import type { User } from '@motor-cms/ui-core/app/types/auth'

const { t } = useI18n()
const { can } = usePermissions()
const { user } = useSanctumAuth<User>()
const router = useRouter()

const { isCompleted: announcementsCompleted, markCompleted: markAnnouncementsDone } = useOnboardingState('dashboard-announcements')
const { isCompleted: notificationsCompleted, markCompleted: markNotificationsDone } = useOnboardingState('notifications')
const { isCompleted: searchCompleted, markCompleted: markSearchDone } = useOnboardingState('search')
const { isCompleted: adminNavCompleted, markCompleted: markAdminNavDone } = useOnboardingState('admin-nav')
const { resetAll: resetOnboardingState } = useOnboardingResetAll()
const { setPending } = usePendingOnboarding()

// ── Wrappers ──────────────────────────────────────────────────────────────────
const announcementsWrapper = ref(null)
const notificationsWrapper = ref(null)
const searchWrapper = ref(null)
const adminNavWrapper = ref(null)

const { start: startAnnouncements } = useVOnboarding(announcementsWrapper)
const { start: startNotifications } = useVOnboarding(notificationsWrapper)
const { start: startSearch } = useVOnboarding(searchWrapper)
const { start: startAdminNav } = useVOnboarding(adminNavWrapper)

// ── Shared options ────────────────────────────────────────────────────────────
const options = computed(() => ({
  scrollToStep: { enabled: true, options: { behavior: 'smooth' as ScrollBehavior, block: 'center' as ScrollLogicalPosition } },
  popper: { strategy: 'fixed' as const },
  labels: {
    previousButton: t('motor-admin.onboarding.previous'),
    nextButton: t('motor-admin.onboarding.next'),
    finishButton: t('motor-admin.onboarding.finish'),
  },
}))

// ── Announcements steps ───────────────────────────────────────────────────────
const canCreate = computed(() => can('dashboard-announcements.write'))

const announcementSteps = computed(() => {
  const steps = [
    {
      attachTo: { element: '#onboarding-announcements-card' },
      content: {
        title: t('motor-admin.onboarding.announcements.step1_title'),
        description: t('motor-admin.onboarding.announcements.step1_desc'),
      },
    },
    {
      attachTo: { element: '#onboarding-announcements-body' },
      content: {
        title: t('motor-admin.onboarding.announcements.step2_title'),
        description: t('motor-admin.onboarding.announcements.step2_desc'),
      },
    },
  ]

  if (canCreate.value) {
    steps.push({
      attachTo: { element: '#onboarding-announcements-create' },
      content: {
        title: t('motor-admin.onboarding.announcements.step3_title'),
        description: t('motor-admin.onboarding.announcements.step3_desc'),
      },
    })
  }

  return steps
})

// ── Notifications steps ───────────────────────────────────────────────────────
// Single step only: opening the slideover during an active v-onboarding tour
// creates an unresolvable z-index conflict — v-onboarding's own overlay covers
// the slideover panel, and the slideover teleports to body after the tooltip,
// making either element hide the other. All relevant info is covered in one step.
const notificationsSteps = computed(() => [
  {
    attachTo: { element: '#onboarding-notification-bell' },
    content: {
      title: t('motor-admin.onboarding.notifications.step1_title'),
      description: t('motor-admin.onboarding.notifications.step1_desc'),
    },
    options: {
      popper: {
        placement: 'left' as const,
      },
    },
  },
])

// ── Search steps ──────────────────────────────────────────────────────────────
const searchSteps = computed(() => [
  {
    attachTo: { element: '#onboarding-search-button' },
    content: {
      title: t('motor-admin.onboarding.search.step1_title'),
      description: t('motor-admin.onboarding.search.step1_desc'),
    },
    options: { popper: { placement: 'right' as const } },
  },
  {
    attachTo: { element: '#onboarding-search-button' },
    content: {
      title: t('motor-admin.onboarding.search.step2_title'),
      description: t('motor-admin.onboarding.search.step2_desc'),
    },
    options: { popper: { placement: 'right' as const } },
  },
])

// ── Admin navigation steps ────────────────────────────────────────────────────
const adminNavSteps = computed(() => [
  {
    attachTo: { element: '#onboarding-sidebar-nav' },
    content: {
      title: t('motor-admin.onboarding.admin_nav.step1_title'),
      description: t('motor-admin.onboarding.admin_nav.step1_desc'),
    },
  },
])

// ── Event handlers ────────────────────────────────────────────────────────────

/**
 * Announcements tour finished → chain to notifications.
 */
async function onAnnouncementsFinish() {
  markAnnouncementsDone()
  await nextTick()
  if (!notificationsCompleted.value) {
    startNotifications()
  }
}

/**
 * Notifications tour finished → chain to search tour.
 */
async function onNotificationsFinish() {
  markNotificationsDone()
  await nextTick()
  if (!searchCompleted.value) {
    startSearch()
  }
  else if (!adminNavCompleted.value) {
    startAdminNav()
  }
}

/**
 * Search tour finished → chain to admin-nav tour.
 */
async function onSearchFinish() {
  markSearchDone()
  await nextTick()
  if (!adminNavCompleted.value) {
    startAdminNav()
  }
}

/**
 * Admin-nav tour finished → mark done, store pending flag, navigate to users list.
 * UsersOnboarding on the users page detects the pending flag and auto-starts
 * the grid explanation tour.
 */
function onAdminNavFinish() {
  markAdminNavDone()
  setPending('admin-grid')
  router.push('/motor-admin/users')
}

// ── Start logic ───────────────────────────────────────────────────────────────
// Announcements is the ONLY entry point. Each tour chains to the next via @finish.
// VOnboardingWrapper is registered as client-only, so wrapper refs are null
// until after hydration.
const stopWatch = watch(
  [announcementsWrapper, notificationsWrapper, searchWrapper, adminNavWrapper],
  async ([announcementsW, notificationsW, searchW, adminNavW]) => {
    if (!announcementsW || !notificationsW || !searchW || !adminNavW) return
    stopWatch()

    // If the backend flag is set, clear localStorage so the tour runs again
    if (user.value?.data?.show_onboarding) {
      resetOnboardingState()
    }

    // Allow initial toasts to clear before starting
    await new Promise(resolve => setTimeout(resolve, 2500))

    if (!announcementsCompleted.value) {
      startAnnouncements()
    }
  },
  { immediate: true },
)
</script>

<template>
  <VOnboardingWrapper
    ref="announcementsWrapper"
    :steps="announcementSteps"
    :options="options"
    @finish="onAnnouncementsFinish"
  />
  <VOnboardingWrapper
    ref="notificationsWrapper"
    :steps="notificationsSteps"
    :options="options"
    @finish="onNotificationsFinish"
  />
  <VOnboardingWrapper
    ref="searchWrapper"
    :steps="searchSteps"
    :options="options"
    @finish="onSearchFinish"
  />
  <VOnboardingWrapper
    ref="adminNavWrapper"
    :steps="adminNavSteps"
    :options="options"
    @finish="onAdminNavFinish"
  />
</template>
