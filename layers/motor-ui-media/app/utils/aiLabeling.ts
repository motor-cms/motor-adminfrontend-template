import type { FormGroupConfig } from '@motor-cms/ui-core/app/types/form'
import type { FormFieldsFromMetaOptions } from '@motor-cms/ui-core/app/composables/formFieldUtils'

export const AI_LABELING_GENERATED = 'generated'
export const AI_LABELING_MODIFIED = 'modified'

export type AiLabeling = typeof AI_LABELING_GENERATED | typeof AI_LABELING_MODIFIED | null

export const AI_GENERATED_FIELD = 'ai_generated'
export const AI_MODIFIED_FIELD = 'ai_modified'
export const AI_LABELING_GROUP = 'ai_labeling'

/**
 * The API stores a single nullable field, the ticket asks for two toggles.
 * Adding them through `extraFields` keeps the generated form-meta untouched,
 * so a later `sync:api` cannot overwrite them.
 */
export function withAiLabelingFields(config: FormFieldsFromMetaOptions): FormFieldsFromMetaOptions {
  return {
    ...config,
    extraFields: {
      ...config.extraFields,
      [AI_GENERATED_FIELD]: { input: 'toggle' },
      [AI_MODIFIED_FIELD]: { input: 'toggle' }
    },
    groups: {
      ...config.groups,
      [AI_LABELING_GROUP]: [AI_GENERATED_FIELD, AI_MODIFIED_FIELD]
    }
  }
}

export function aiLabelingGroupsWithHint(groups: FormGroupConfig[], hint: string): FormGroupConfig[] {
  return groups.map(group =>
    group.key === AI_LABELING_GROUP ? { ...group, description: hint } : group
  )
}

export function aiLabelingState(value: unknown): Record<string, boolean> {
  return {
    [AI_GENERATED_FIELD]: value === AI_LABELING_GENERATED,
    [AI_MODIFIED_FIELD]: value === AI_LABELING_MODIFIED
  }
}

export function applyAiLabelingExclusion(state: Record<string, unknown>, changedKey: string): void {
  if (changedKey === AI_GENERATED_FIELD && state[AI_GENERATED_FIELD] === true) {
    state[AI_MODIFIED_FIELD] = false
  }
  if (changedKey === AI_MODIFIED_FIELD && state[AI_MODIFIED_FIELD] === true) {
    state[AI_GENERATED_FIELD] = false
  }
}

export function aiLabelingFromToggles(generated: unknown, modified: unknown): AiLabeling {
  if (generated === true) return AI_LABELING_GENERATED
  if (modified === true) return AI_LABELING_MODIFIED
  return null
}

/**
 * The two toggles only exist in the form; the payload carries the single field
 * the API validates, so the helper keys have to go before the request is sent.
 */
export function applyAiLabeling(data: Record<string, unknown>): void {
  data.ai_labeling = aiLabelingFromToggles(data[AI_GENERATED_FIELD], data[AI_MODIFIED_FIELD])
  Reflect.deleteProperty(data, AI_GENERATED_FIELD)
  Reflect.deleteProperty(data, AI_MODIFIED_FIELD)
}
