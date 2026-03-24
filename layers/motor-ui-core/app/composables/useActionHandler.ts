export function useActionHandler() {
  const pendingAction = ref<string | null>(null)
  const confirmModal = ref(false)

  async function runHandler(
    actionKey: string,
    handler: () => Promise<void> | void,
    options: {
      onSuccess: () => void
      onError: (err: Error) => void
      onFinally?: () => void
    }
  ): Promise<void> {
    pendingAction.value = actionKey

    try {
      await handler()
      options.onSuccess()
    } catch (e) {
      options.onError(e as Error)
    } finally {
      pendingAction.value = null
      confirmModal.value = false
      options.onFinally?.()
    }
  }

  return {
    pendingAction,
    confirmModal,
    runHandler
  }
}
