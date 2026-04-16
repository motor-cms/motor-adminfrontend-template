<script setup lang="ts">
import type { User } from '@motor-cms/ui-core/app/types/auth'

const { t } = useI18n()
const { can } = usePermissions()
const { user } = useSanctumAuth<User>()
const router = useRouter()
const { completeOnboarding } = useProfileApi()
const { commitDone, isDone } = useOnboardingDone()

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

const { start: startAnnouncements, finish: finishAnnouncements } = useVOnboarding(announcementsWrapper)
const { start: startNotifications, finish: finishNotifications } = useVOnboarding(notificationsWrapper)
const { start: startSearch, finish: finishSearch } = useVOnboarding(searchWrapper)
const { start: startAdminNav, finish: finishAdminNav } = useVOnboarding(adminNavWrapper)

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

// ── Finish handlers ───────────────────────────────────────────────────────────

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

// ── Skip handlers ─────────────────────────────────────────────────────────────
// Pre-mark all remaining tours as done so @finish chain conditions are false,
// then call finish() to close the wrapper.
//
// finish() is required — exit() from the slot only emits @exit without
// changing the wrapper's internal currentIndex, so the tooltip stays open.
//
// completeOnboarding() clears show_onboarding on the backend so the watch
// does not trigger another resetOnboardingState() on the next dashboard visit.
// We also set user.value.data.show_onboarding = false immediately so the
// in-memory auth cache does not cause another reset before the API response
// arrives.

function skipAll() {
  // commitDone() must run BEFORE the API call — if the browser cancels the
  // in-flight request on a hard reload the localStorage flag still survives
  // and prevents the show_onboarding watch from resetting state.
  commitDone()
  markAnnouncementsDone()
  markNotificationsDone()
  markSearchDone()
  markAdminNavDone()
  if (user.value?.data) user.value.data.show_onboarding = false
  completeOnboarding().catch(() => {})
}

function skipAnnouncements() { skipAll(); finishAnnouncements() }
function skipNotifications() { skipAll(); finishNotifications() }
function skipSearch() { skipAll(); finishSearch() }
function skipAdminNav() { skipAll(); finishAdminNav() }

// ── Start logic ───────────────────────────────────────────────────────────────
// Watch both the 4 wrappers AND user.value.data so the show_onboarding check
// never runs against a null/stale user — solving the race between wrapper mount
// and the sanctum /api/user response.
//
// After resetting we immediately set user.value.data.show_onboarding = false so
// that if DashboardOnboarding is unmounted and remounted (navigation away/back)
// the same session does not trigger a second reset from the in-memory cache.
// completeOnboarding() would clear the backend flag, but that is fire-and-forget
// and may resolve after a re-render; the local mutation is the reliable guard.
const stopWatch = watch(
  () => [
    announcementsWrapper.value,
    notificationsWrapper.value,
    searchWrapper.value,
    adminNavWrapper.value,
    user.value?.data,
  ] as const,
  async ([announcementsW, notificationsW, searchW, adminNavW, userData]) => {
    if (!announcementsW || !notificationsW || !searchW || !adminNavW || !userData) return
    stopWatch()

    // Only reset if the user has NOT already committed a skip.
    // isSkipCommitted() reads localStorage, so it survives hard reloads even
    // when the completeOnboarding() API call was cancelled by the browser.
    // resetAll() in useOnboardingResetAll clears the skip flag, so a
    // deliberate "restart tour" from the profile page still works correctly.
    if (userData.show_onboarding && !isDone()) {
      userData.show_onboarding = false
      resetOnboardingState()
    }

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
  >
    <template #default="{ step, next, previous, isFirst, isLast }">
      <OnboardingStep :step="step" :next="next" :previous="previous" :skip="skipAnnouncements" :is-first="isFirst" :is-last="isLast" />
    </template>
  </VOnboardingWrapper>
  <VOnboardingWrapper
    ref="notificationsWrapper"
    :steps="notificationsSteps"
    :options="options"
    @finish="onNotificationsFinish"
  >
    <template #default="{ step, next, previous, isFirst, isLast }">
      <OnboardingStep :step="step" :next="next" :previous="previous" :skip="skipNotifications" :is-first="isFirst" :is-last="isLast" />
    </template>
  </VOnboardingWrapper>
  <VOnboardingWrapper
    ref="searchWrapper"
    :steps="searchSteps"
    :options="options"
    @finish="onSearchFinish"
  >
    <template #default="{ step, next, previous, isFirst, isLast }">
      <OnboardingStep :step="step" :next="next" :previous="previous" :skip="skipSearch" :is-first="isFirst" :is-last="isLast" />
    </template>
  </VOnboardingWrapper>
  <VOnboardingWrapper
    ref="adminNavWrapper"
    :steps="adminNavSteps"
    :options="options"
    @finish="onAdminNavFinish"
  >
    <template #default="{ step, next, previous, isFirst, isLast }">
      <OnboardingStep :step="step" :next="next" :previous="previous" :skip="skipAdminNav" :is-first="isFirst" :is-last="isLast" />
    </template>
  </VOnboardingWrapper>
</template>
