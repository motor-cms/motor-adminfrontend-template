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
 * Call this before navigating to dashboard to restart the full tour.
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
