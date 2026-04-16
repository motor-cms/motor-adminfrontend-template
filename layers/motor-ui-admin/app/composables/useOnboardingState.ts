import type { User } from '@motor-cms/ui-core/app/types/auth'

// Extend this union as new areas are added
export type OnboardingArea =
  | 'dashboard-announcements'
  | 'notifications'
  | 'search'
  | 'admin-nav'
  | 'admin-grid'
  | 'user-profile'
  | 'builder-pages'

const STORAGE_KEY = 'motor-onboarding-completed'
const PENDING_KEY = 'motor-onboarding-pending'
// Written before the completeOnboarding() API call so a hard reload between
// skip/complete and the network response does not trigger a false restart.
// Cleared by resetAll() so "restart tour" from profile overrides any prior done state.
const DONE_KEY = 'motor-onboarding-done'

function getCompleted(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return new Set(raw ? JSON.parse(raw) : [])
  }
  catch {
    return new Set()
  }
}

function persistCompleted(ids: Set<string>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]))
}

export function useOnboardingState(area: OnboardingArea) {
  const { user } = useSanctumAuth<User>()
  const userId = computed(() => user.value?.data?.id?.toString() ?? 'anonymous')
  const key = computed(() => `${userId.value}:${area}`)

  const isCompleted = computed(() => getCompleted().has(key.value))

  function markCompleted() {
    const completed = getCompleted()
    completed.add(key.value)
    persistCompleted(completed)
  }

  function reset() {
    const completed = getCompleted()
    completed.delete(key.value)
    persistCompleted(completed)
  }

  return { isCompleted, markCompleted, reset }
}

/**
 * Clears all completed onboarding areas for the current user from localStorage.
 * Also clears the skip-committed flag so a "restart tour" from profile
 * correctly overrides any previous skip.
 */
export function useOnboardingResetAll() {
  const { user } = useSanctumAuth<User>()
  const userId = computed(() => user.value?.data?.id?.toString() ?? 'anonymous')

  function resetAll() {
    const completed = getCompleted()
    const areas: OnboardingArea[] = [
      'dashboard-announcements',
      'notifications',
      'search',
      'admin-nav',
      'admin-grid',
      'user-profile',
      'builder-pages',
    ]
    for (const area of areas) {
      completed.delete(`${userId.value}:${area}`)
    }
    persistCompleted(completed)
    localStorage.removeItem(`${DONE_KEY}:${userId.value}`)
  }

  return { resetAll }
}

/**
 * Cross-page trigger: marks which onboarding area should auto-start
 * on the next page load. Scoped by user ID to prevent cross-user leakage.
 */
export function usePendingOnboarding() {
  const { user } = useSanctumAuth<User>()
  const userId = computed(() => user.value?.data?.id?.toString() ?? 'anonymous')

  function setPending(area: OnboardingArea) {
    localStorage.setItem(`${PENDING_KEY}:${userId.value}`, area)
  }

  function getPending(): OnboardingArea | null {
    return (localStorage.getItem(`${PENDING_KEY}:${userId.value}`) as OnboardingArea) || null
  }

  function clearPending() {
    localStorage.removeItem(`${PENDING_KEY}:${userId.value}`)
  }

  return { setPending, getPending, clearPending }
}

/**
 * Records that the user has intentionally ended the tour (via skip OR normal
 * completion). Written to localStorage BEFORE the completeOnboarding() API
 * call so the flag survives a hard reload if the browser cancels the request.
 * DashboardOnboarding checks this flag before calling resetOnboardingState()
 * so a stale show_onboarding=true in the sanctum auth cache never triggers a
 * false restart. Cleared by resetAll() so "restart tour" from the profile
 * page correctly overrides any prior done state.
 */
export function useOnboardingDone() {
  const { user } = useSanctumAuth<User>()
  const userId = computed(() => user.value?.data?.id?.toString() ?? 'anonymous')

  function commitDone() {
    localStorage.setItem(`${DONE_KEY}:${userId.value}`, '1')
  }

  function isDone(): boolean {
    return !!localStorage.getItem(`${DONE_KEY}:${userId.value}`)
  }

  return { commitDone, isDone }
}
