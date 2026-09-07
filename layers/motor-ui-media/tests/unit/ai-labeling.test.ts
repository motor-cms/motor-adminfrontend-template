import { describe, expect, it } from 'vitest'
import type { FormGroupConfig } from '@motor-cms/ui-core/app/types/form'
import {
  AI_GENERATED_FIELD,
  AI_LABELING_GROUP,
  AI_MODIFIED_FIELD,
  aiLabelingFromToggles,
  aiLabelingGroupsWithHint,
  aiLabelingState,
  applyAiLabeling,
  applyAiLabelingExclusion,
  withAiLabelingFields
} from '../../app/utils/aiLabeling'

const baseConfig = {
  omit: ['file', 'files', 'categories'],
  overrides: { tags: { input: 'tags' } },
  groups: {
    basic: ['client_id', 'description'],
    settings: ['is_global']
  }
}

describe('withAiLabelingFields', () => {
  it('adds both toggles as extra fields', () => {
    const config = withAiLabelingFields(baseConfig)

    expect(config.extraFields?.[AI_GENERATED_FIELD]).toEqual({ input: 'toggle' })
    expect(config.extraFields?.[AI_MODIFIED_FIELD]).toEqual({ input: 'toggle' })
  })

  it('puts both toggles into their own group', () => {
    const config = withAiLabelingFields(baseConfig)

    expect(config.groups?.[AI_LABELING_GROUP]).toEqual([AI_GENERATED_FIELD, AI_MODIFIED_FIELD])
  })

  it('keeps the existing groups and overrides untouched', () => {
    const config = withAiLabelingFields(baseConfig)

    expect(config.groups?.basic).toEqual(['client_id', 'description'])
    expect(config.groups?.settings).toEqual(['is_global'])
    expect(config.overrides).toEqual({ tags: { input: 'tags' } })
    expect(config.omit).toEqual(['file', 'files', 'categories'])
  })

  it('does not mutate the config it was given', () => {
    withAiLabelingFields(baseConfig)

    expect(baseConfig.groups).toEqual({
      basic: ['client_id', 'description'],
      settings: ['is_global']
    })
  })
})

describe('aiLabelingGroupsWithHint', () => {
  const groups: FormGroupConfig[] = [
    { key: 'basic', label: 'Allgemein' },
    { key: AI_LABELING_GROUP, label: 'KI-Kennzeichnung' }
  ]

  it('puts the scope hint on the ai labeling group only', () => {
    const result = aiLabelingGroupsWithHint(groups, 'nur Deepfake-artige Inhalte')

    expect(result.find(g => g.key === AI_LABELING_GROUP)?.description).toBe('nur Deepfake-artige Inhalte')
    expect(result.find(g => g.key === 'basic')?.description).toBeUndefined()
  })

  it('does not mutate the groups it was given', () => {
    aiLabelingGroupsWithHint(groups, 'hint')

    expect(groups[1]!.description).toBeUndefined()
  })
})

describe('aiLabelingState', () => {
  it('maps generated to the generated toggle', () => {
    expect(aiLabelingState('generated')).toEqual({
      [AI_GENERATED_FIELD]: true,
      [AI_MODIFIED_FIELD]: false
    })
  })

  it('maps modified to the modified toggle', () => {
    expect(aiLabelingState('modified')).toEqual({
      [AI_GENERATED_FIELD]: false,
      [AI_MODIFIED_FIELD]: true
    })
  })

  it('leaves both toggles off for null and unknown values', () => {
    for (const value of [null, undefined, '', 'something-else']) {
      expect(aiLabelingState(value)).toEqual({
        [AI_GENERATED_FIELD]: false,
        [AI_MODIFIED_FIELD]: false
      })
    }
  })
})

describe('applyAiLabelingExclusion', () => {
  it('switches the modified toggle off when generated is switched on', () => {
    const state: Record<string, unknown> = { [AI_GENERATED_FIELD]: true, [AI_MODIFIED_FIELD]: true }
    applyAiLabelingExclusion(state, AI_GENERATED_FIELD)

    expect(state[AI_MODIFIED_FIELD]).toBe(false)
    expect(state[AI_GENERATED_FIELD]).toBe(true)
  })

  it('switches the generated toggle off when modified is switched on', () => {
    const state: Record<string, unknown> = { [AI_GENERATED_FIELD]: true, [AI_MODIFIED_FIELD]: true }
    applyAiLabelingExclusion(state, AI_MODIFIED_FIELD)

    expect(state[AI_GENERATED_FIELD]).toBe(false)
    expect(state[AI_MODIFIED_FIELD]).toBe(true)
  })

  it('leaves the other toggle alone when one is switched off', () => {
    const state: Record<string, unknown> = { [AI_GENERATED_FIELD]: false, [AI_MODIFIED_FIELD]: true }
    applyAiLabelingExclusion(state, AI_GENERATED_FIELD)

    expect(state[AI_MODIFIED_FIELD]).toBe(true)
  })
})

describe('aiLabelingFromToggles', () => {
  it('returns generated, modified or null', () => {
    expect(aiLabelingFromToggles(true, false)).toBe('generated')
    expect(aiLabelingFromToggles(false, true)).toBe('modified')
    expect(aiLabelingFromToggles(false, false)).toBeNull()
    expect(aiLabelingFromToggles(undefined, undefined)).toBeNull()
  })
})

describe('applyAiLabeling', () => {
  it('writes the single field and removes the two helper keys', () => {
    const data: Record<string, unknown> = {
      alt_text: 'ein Bild',
      [AI_GENERATED_FIELD]: false,
      [AI_MODIFIED_FIELD]: true
    }
    applyAiLabeling(data)

    expect(data.ai_labeling).toBe('modified')
    expect(AI_GENERATED_FIELD in data).toBe(false)
    expect(AI_MODIFIED_FIELD in data).toBe(false)
    expect(data.alt_text).toBe('ein Bild')
  })

  it('sends null when neither toggle is on', () => {
    const data: Record<string, unknown> = {
      [AI_GENERATED_FIELD]: false,
      [AI_MODIFIED_FIELD]: false
    }
    applyAiLabeling(data)

    expect(data.ai_labeling).toBeNull()
  })
})
