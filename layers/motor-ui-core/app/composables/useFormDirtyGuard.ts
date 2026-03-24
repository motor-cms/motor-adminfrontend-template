import type { RouteLocationRaw } from 'vue-router'

export function useFormDirtyGuard(state: Ref<Record<string, unknown>> | Record<string, unknown>) {
  const initialSnapshot = ref('')
  const showLeaveModal = ref(false)
  let pendingNavigation: RouteLocationRaw | null = null
  const submitted = ref(false)

  function captureSnapshot() {
    initialSnapshot.value = JSON.stringify(toRaw(isRef(state) ? state.value : state))
  }

  const isDirty = computed(() => {
    if (!initialSnapshot.value) return false
    return JSON.stringify(toRaw(isRef(state) ? state.value : state)) !== initialSnapshot.value
  })

  function markSubmitted() {
    submitted.value = true
  }

  onBeforeRouteLeave((to) => {
    if (submitted.value || !isDirty.value) return true
    pendingNavigation = to
    showLeaveModal.value = true
    return false
  })

  function confirmLeave() {
    showLeaveModal.value = false
    if (pendingNavigation) {
      const target = pendingNavigation
      pendingNavigation = null
      submitted.value = true
      navigateTo(target)
    }
  }

  function cancelLeave() {
    showLeaveModal.value = false
    pendingNavigation = null
  }

  return { isDirty, showLeaveModal, captureSnapshot, confirmLeave, cancelLeave, markSubmitted }
}
