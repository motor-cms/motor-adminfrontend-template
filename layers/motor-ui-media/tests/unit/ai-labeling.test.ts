import { describe, expect, it } from 'vitest'
import type { FormGroupConfig } from '@motor-cms/ui-core/app/types/form'
import { fileCreateFormConfig, fileEditFormConfig } from '../../../motor-ui-core/app/types/config/file'
import { formFieldsFromMeta, initFormState } from '../../../motor-ui-core/app/composables/formFieldUtils'
import { fileFormMeta } from '../../../motor-ui-media/app/types/generated/form-meta'
import deFiles from '../../../motor-ui-media/app/lang/de/motor-media/files.json'
import {
  AI_GENERATED_FIELD,
  AI_LABELING_FIELD,
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
    expect(config.omit).toEqual(['file', 'files', 'categories', AI_LABELING_FIELD])
  })

  it('blendet das rohe API-Feld aus, ohne bestehende omit-Eintraege zu doppeln', () => {
    const config = withAiLabelingFields({ ...baseConfig, omit: ['file', AI_LABELING_FIELD] })

    expect(config.omit).toEqual(['file', AI_LABELING_FIELD])
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

describe('Verdrahtung mit formFieldsFromMeta', () => {
  const de = deFiles as Record<string, string>
  const prefix = 'motor-media.files'

  function te(key: string): boolean {
    return key.startsWith(`${prefix}.`) && de[key.slice(prefix.length + 1)] !== undefined
  }

  function t(key: string): string {
    return te(key) ? de[key.slice(prefix.length + 1)]! : key
  }

  function build(config = fileEditFormConfig, meta = fileFormMeta.patch) {
    return formFieldsFromMeta(
      meta as unknown as Parameters<typeof formFieldsFromMeta>[0],
      t,
      { ...withAiLabelingFields(config), translationPrefix: prefix },
      te
    )
  }

  it('erzeugt aus den extraFields zwei Toggle-Felder in der KI-Gruppe', () => {
    const { fields } = build()

    const generated = fields.find(f => f.key === AI_GENERATED_FIELD)
    const modified = fields.find(f => f.key === AI_MODIFIED_FIELD)

    expect(generated).toMatchObject({ input: 'toggle', group: AI_LABELING_GROUP, label: 'KI-generiert' })
    expect(modified).toMatchObject({ input: 'toggle', group: AI_LABELING_GROUP, label: 'KI-modifiziert' })
  })

  it('blendet das rohe API-Feld ai_labeling aus, auch wenn sync:api es liefert', () => {
    const metaWithApiField = {
      schemaName: 'FilePatchRequest',
      fields: { ...fileFormMeta.patch.fields, [AI_LABELING_FIELD]: { input: 'text' } }
    }

    const { fields, schema } = build(fileEditFormConfig, metaWithApiField as never)

    expect(fields.find(f => f.key === AI_LABELING_FIELD)).toBeUndefined()
    expect(AI_LABELING_FIELD in schema.shape).toBe(false)
  })

  it('liefert die KI-Gruppe mit uebersetztem Titel', () => {
    const { groups } = build()

    const group = groups.find(g => g.key === AI_LABELING_GROUP)
    expect(group?.label).toBe('KI-Kennzeichnung')
    expect(group?.fieldOrder).toEqual([AI_GENERATED_FIELD, AI_MODIFIED_FIELD])
  })

  it('haengt den Scope-Hinweis aus den Uebersetzungen an die KI-Gruppe', () => {
    const { groups } = build()
    const withHint = aiLabelingGroupsWithHint(groups, t(`${prefix}.ai_labeling_hint`))

    expect(withHint.find(g => g.key === AI_LABELING_GROUP)?.description)
      .toBe(de.ai_labeling_hint)
    expect(de.ai_labeling_hint).toBeDefined()
  })

  it('startet mit beiden Toggles aus und nimmt sie in die Zod-Schema-Form auf', () => {
    const { fields, schema } = build(fileCreateFormConfig, fileFormMeta.post)
    const state = initFormState(fields)

    expect(state[AI_GENERATED_FIELD]).toBe(false)
    expect(state[AI_MODIFIED_FIELD]).toBe(false)

    const parsed = schema.parse({
      ...state,
      description: 'x',
      author: 'x',
      source: 'x',
      alt_text: 'x',
      [AI_MODIFIED_FIELD]: true
    })

    expect(parsed[AI_GENERATED_FIELD]).toBe(false)
    expect(parsed[AI_MODIFIED_FIELD]).toBe(true)
  })

  it('uebersetzt den Formularzustand in genau ein API-Feld', () => {
    const { fields } = build()
    const state = initFormState(fields) as Record<string, unknown>

    Object.assign(state, aiLabelingState('generated'))
    applyAiLabelingExclusion(state, AI_GENERATED_FIELD)

    const payload = { ...state }
    applyAiLabeling(payload)

    expect(payload[AI_LABELING_FIELD]).toBe('generated')
    expect(AI_GENERATED_FIELD in payload).toBe(false)
    expect(AI_MODIFIED_FIELD in payload).toBe(false)
  })
})
