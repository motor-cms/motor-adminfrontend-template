import { reactive } from 'vue'
import { z } from 'zod'
import type { FormFieldConfig, FormGroupConfig } from '../types/form'
import { schemaNameToPrefix, humanizeKey, resolveLabel, resolveHelp } from '../utils/i18n-helpers'

// Re-export for backward compatibility
export type { FormFieldConfig } from '../types/form'

// ============================================
// Metadata types (matching form-meta.ts shape)
// ============================================

export interface FormFieldMeta {
  readonly input: string
  readonly required?: boolean
  readonly ref?: string
}

export interface ResourceFormMeta {
  readonly schemaName: string
  readonly fields: Readonly<Record<string, FormFieldMeta>>
}

// ============================================
// Options for formFieldsFromMeta
// ============================================

export interface FormGroupOptions {
  fields: string[]
  orientation?: 'horizontal' | 'vertical'
}

export interface FormFieldsFromMetaOptions {
  pick?: string[]
  omit?: string[]
  overrides?: Record<string, Partial<FormFieldConfig>>
  /** Extra fields not present in the API form meta (e.g. tags) */
  extraFields?: Record<string, { input: string, required?: boolean }>
  translationPrefix?: string
  groups?: Record<string, string[] | FormGroupOptions>
}

const FORM_SCHEMA_SUFFIX = /(Post|Patch)?Request$/

function resolveDescription(te: (key: string) => boolean, t: (key: string) => string, prefix: string, key: string): string | undefined {
  const descKey = `${prefix}.${key}_description`
  return te(descKey) ? t(descKey) : undefined
}

// ============================================
// Zod schema builder from field metadata
// ============================================

export function zodSchemaForField(field: FormFieldMeta, t: (key: string, params?: Record<string, unknown>) => string): z.ZodTypeAny {
  const required = t('motor-core.global.validation_required')
  const invalidEmail = t('motor-core.global.validation_invalid_email')
  const minLength = (count: number) => t('motor-core.global.validation_min_length', { count })

  switch (field.input) {
    case 'email':
      return field.required
        ? z.string().min(1, required).email(invalidEmail)
        : z.string().email(invalidEmail).or(z.literal('')).optional().nullable()

    case 'number':
      return field.required
        ? z.any().refine(
            val => val !== undefined && val !== null && val !== '' && typeof val === 'number' && !Number.isNaN(val),
            { message: required }
          )
        : z.number().optional().nullable()

    case 'toggle':
      return z.boolean().optional()

    case 'select':
    case 'search-select':
      return field.required
        ? z.any().refine(val => val !== undefined && val !== null && val !== '', { message: required })
        : z.number().or(z.string()).optional().nullable()

    case 'multi-select':
    case 'checkbox-group':
    case 'grouped-checkbox':
      return z.array(z.number().or(z.string())).optional()

    case 'tags':
      return z.array(z.string()).optional().nullable()

    case 'password':
      return field.required
        ? z.string().min(8, minLength(8))
        : z.string().min(8, minLength(8)).or(z.literal('')).optional()

    case 'textarea':
    case 'text':
    default:
      return field.required
        ? z.string().min(1, required)
        : z.string().optional().nullable()
  }
}

// ============================================
// State initializer
// ============================================

export function initFormState(fields: FormFieldConfig[]): Record<string, unknown> {
  const state: Record<string, unknown> = {}
  for (const field of fields) {
    if (field.input === 'toggle') state[field.key] = false
    else if (field.input === 'multi-select' || field.input === 'checkbox-group' || field.input === 'grouped-checkbox' || field.input === 'tags') state[field.key] = []
    else if (field.input === 'select' || field.input === 'search-select' || field.input === 'number') state[field.key] = undefined
    else state[field.key] = ''
  }
  return reactive(state)
}

// ============================================
// Core function
// ============================================

export function formFieldsFromMeta(
  meta: ResourceFormMeta,
  t: (key: string, params?: Record<string, unknown>) => string,
  options?: FormFieldsFromMetaOptions,
  te?: (key: string) => boolean
): { fields: FormFieldConfig[], schema: z.ZodObject<Record<string, z.ZodTypeAny>>, groups: FormGroupConfig[] } {
  // Fallback: if te is not provided, use t-based existence check (triggers warnings)
  const teCheck = te ?? ((key: string) => t(key) !== key)
  const { pick, omit, overrides, extraFields, translationPrefix, groups } = options ?? {}
  const prefix = translationPrefix ?? schemaNameToPrefix(meta.schemaName, FORM_SCHEMA_SUFFIX)

  // Build a reverse lookup: field key -> group name
  const fieldGroupMap: Record<string, string> = {}
  if (groups) {
    for (const [groupName, groupValue] of Object.entries(groups)) {
      const fieldKeys = Array.isArray(groupValue) ? groupValue : groupValue.fields
      for (const key of fieldKeys) {
        fieldGroupMap[key] = groupName
      }
    }
  }

  // Merge extra fields into meta fields for processing
  const allFields = { ...meta.fields, ...extraFields }

  // Determine which field keys to include and in what order
  let fieldKeys: string[]

  if (pick) {
    fieldKeys = pick.filter(key => key in allFields)
  } else {
    fieldKeys = Object.keys(allFields)
  }

  if (omit) {
    const omitSet = new Set(omit)
    fieldKeys = fieldKeys.filter(key => !omitSet.has(key))
  }

  // Build field configs and Zod shape in parallel
  const zodShape: Record<string, z.ZodTypeAny> = {}
  const fields: FormFieldConfig[] = fieldKeys.map((key) => {
    const fieldMeta = allFields[key]!

    const config: FormFieldConfig = {
      key,
      label: resolveLabel(t, teCheck, prefix, key),
      input: fieldMeta.input,
      required: fieldMeta.required === true,
      description: resolveDescription(teCheck, t, prefix, key),
      help: resolveHelp(teCheck, t, prefix, key)
    }

    // Assign group if mapped
    if (fieldGroupMap[key]) {
      config.group = fieldGroupMap[key]
    }

    // Apply overrides before building Zod schema (so overridden input types are respected)
    const fieldOverrides = overrides?.[key]
    if (fieldOverrides) {
      Object.assign(config, fieldOverrides)
    }

    // Build zod validator using the (potentially overridden) config
    zodShape[key] = zodSchemaForField({ ...fieldMeta, input: config.input, required: config.required }, t)

    return config
  })

  // Build FormGroupConfig[] from groups option
  const groupConfigs: FormGroupConfig[] = []
  if (groups) {
    for (const [groupKey, groupValue] of Object.entries(groups)) {
      const orientation = Array.isArray(groupValue) ? undefined : groupValue.orientation
      const fieldOrder = Array.isArray(groupValue) ? groupValue : groupValue.fields
      const groupLabelKey = `${prefix}.group_${groupKey}`
      if (teCheck(groupLabelKey)) {
        groupConfigs.push({ key: groupKey, label: t(groupLabelKey), orientation, fieldOrder })
      } else {
        // Try global fallback (e.g. motor-core.global.group_basic)
        const globalGroupKey = `motor-core.global.group_${groupKey}`
        groupConfigs.push({
          key: groupKey,
          label: teCheck(globalGroupKey) ? t(globalGroupKey) : humanizeKey(groupKey),
          orientation,
          fieldOrder
        })
      }
    }
  }

  return {
    fields,
    schema: z.object(zodShape),
    groups: groupConfigs
  }
}
