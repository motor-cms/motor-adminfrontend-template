// app/composables/useClientFormExtensions.ts
import type { Component, Ref } from 'vue'

export interface ClientFormExtension {
  key: string
  order: number
  component: Component
}

const registry: ClientFormExtension[] = reactive([])
const validityState = reactive<Record<string, boolean>>({})

const callbackRefs = new Map<string, {
  validate: Ref<() => boolean | Promise<boolean>>
  getSubmitData: Ref<() => Record<string, unknown>>
}>()

function ensureCallbackRefs(key: string) {
  if (!callbackRefs.has(key)) {
    callbackRefs.set(key, {
      validate: ref(() => true),
      getSubmitData: ref(() => ({})),
    })
  }
  return callbackRefs.get(key)!
}

export function useClientFormExtensions() {
  function register(ext: ClientFormExtension) {
    if (registry.some(e => e.key === ext.key)) return
    registry.push(ext)
    registry.sort((a, b) => a.order - b.order)
    validityState[ext.key] = false
    ensureCallbackRefs(ext.key)
  }

  function setValidity(key: string, isValid: boolean) {
    validityState[key] = isValid
  }

  async function validateAll(): Promise<boolean> {
    for (const ext of registry) {
      const refs = callbackRefs.get(ext.key)
      if (refs) {
        const result = await refs.validate.value()
        if (!result) return false
      }
    }
    return true
  }

  function getAllSubmitData(): Record<string, unknown> {
    let merged: Record<string, unknown> = {}
    for (const ext of registry) {
      const refs = callbackRefs.get(ext.key)
      if (refs) {
        merged = { ...merged, ...refs.getSubmitData.value() }
      }
    }
    return merged
  }

  const extensions = computed(() => [...registry])

  const allExtensionsValid = computed(() =>
    registry.length === 0 || registry.every(ext => validityState[ext.key] === true)
  )

  return { extensions, register, setValidity, allExtensionsValid, validateAll, getAllSubmitData }
}

export function useExtensionCallbacks(key: string) {
  const refs = ensureCallbackRefs(key)

  function setValidate(fn: () => boolean | Promise<boolean>) {
    refs.validate.value = fn
  }

  function setGetSubmitData(fn: () => Record<string, unknown>) {
    refs.getSubmitData.value = fn
  }

  onUnmounted(() => {
    refs.validate.value = () => true
    refs.getSubmitData.value = () => ({})
  })

  return { setValidate, setGetSubmitData }
}
