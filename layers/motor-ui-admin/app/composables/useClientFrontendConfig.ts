import type { Ref, ComputedRef } from 'vue'
import type { FormFieldConfig, FormGroupConfig } from '@motor-cms/ui-core/app/types/form'
import {
  type FrontendConfigFormState,
  frontendConfigSchema,
  emptyFrontendConfig,
  frontendConfigFields,
  frontendConfigGroups
} from '../types/frontend-config'

// ============================================
// Types
// ============================================

export interface UseClientFrontendConfigOptions {
  entityState: Record<string, unknown>
  fetching: Ref<boolean>
}

export interface UseClientFrontendConfigReturn {
  state: FrontendConfigFormState
  errors: Ref<Record<string, string>>
  fields: ComputedRef<FormFieldConfig[]>
  groups: ComputedRef<FormGroupConfig[]>
  validate(): boolean
  getSubmitData(): Record<string, unknown>
}

// ============================================
// Composable
// ============================================

export function useClientFrontendConfig(
  options: UseClientFrontendConfigOptions
): UseClientFrontendConfigReturn {
  const { t } = useI18n()

  // Reactive form state — starts empty, hydrated on load
  const state = reactive<FrontendConfigFormState>(emptyFrontendConfig())

  // Flat validation error map: dot-path → first message
  const errors = ref<Record<string, string>>({})

  // ============================================
  // Hydration
  // ============================================

  watch(
    () => options.fetching.value,
    (isFetching, wasFetching) => {
      // Trigger when fetching transitions from true → false
      if (wasFetching && !isFetching && options.entityState.frontend_config) {
        const raw = options.entityState.frontend_config
        const parsed = frontendConfigSchema.safeParse(raw)

        if (parsed.success) {
          Object.assign(state, parsed.data)
        } else {
          // Best-effort deep merge of whatever passed validation
          const rawConfig = raw as Record<string, unknown>
          for (const key of Object.keys(state) as Array<keyof FrontendConfigFormState>) {
            const incoming = rawConfig[key]
            if (incoming !== undefined && incoming !== null) {
              if (typeof incoming === 'object' && !Array.isArray(incoming)) {
                Object.assign(
                  state[key] as Record<string, unknown>,
                  incoming as Record<string, unknown>
                )
              } else {
                // @ts-expect-error -- best-effort assignment for primitive fields
                state[key] = incoming
              }
            }
          }
        }
      }
    }
  )

  // ============================================
  // Validation
  // ============================================

  function validate(): boolean {
    const result = frontendConfigSchema.safeParse(state)
    if (result.success) {
      errors.value = {}
      return true
    }

    const flat: Record<string, string> = {}
    for (const issue of result.error.issues) {
      const path = issue.path.join('.')
      if (!flat[path]) {
        flat[path] = issue.message
      }
    }
    errors.value = flat
    return false
  }

  // ============================================
  // Submit data
  // ============================================

  function getSubmitData(): Record<string, unknown> {
    const clone = JSON.parse(JSON.stringify(state)) as Record<string, unknown>

    // Preserve globalComponents from the original entity state — these are
    // footer UUIDs managed separately (e.g. by GlobalComponentsSection) and
    // must not be overwritten by the frontend config form.
    const originalConfig = options.entityState.frontend_config as
      | { globalComponents?: Record<string, unknown> }
      | undefined

    if (originalConfig?.globalComponents !== undefined) {
      clone.globalComponents = originalConfig.globalComponents
    }

    return clone
  }

  // ============================================
  // Field / group definitions (i18n-aware)
  // ============================================

  const fields = computed<FormFieldConfig[]>(() => frontendConfigFields(t))
  const groups = computed<FormGroupConfig[]>(() => frontendConfigGroups(t))

  // ============================================
  // Return
  // ============================================

  return {
    state,
    errors,
    fields,
    groups,
    validate,
    getSubmitData
  }
}
