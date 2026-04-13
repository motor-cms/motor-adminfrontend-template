// ============================================
// Form Field Configuration
// ============================================

export interface FormFieldConfig {
  key: string
  label: string
  input: string
  required: boolean
  placeholder?: string
  description?: string
  help?: string
  group?: string
  class?: string
  inputProps?: Record<string, unknown>
  /** Hide this field from the form UI (state is still tracked) */
  hidden?: boolean
  /** Static options for select/search-select fields (used instead of API-fetched options) */
  staticOptions?: SelectOption[]
}

// ============================================
// Select Options
// ============================================

export interface SelectOption {
  label: string
  value: string | number
}

// ============================================
// Form Group Configuration
// ============================================

export interface FormGroupConfig {
  key: string
  label: string
  description?: string
  orientation?: 'horizontal' | 'vertical'
  /** Field keys in display order */
  fieldOrder?: string[]
}

// ============================================
// Form Input Props (passed to all input adapters)
// ============================================

/** Union of all value types that form inputs accept */
export type FormInputValue = string | number | boolean | string[] | number[] | (string | number)[] | null | undefined

export interface FormInputProps {
  field: FormFieldConfig
  modelValue: FormInputValue
  options?: SelectOption[]
  disabled?: boolean
  optionsLoading?: boolean
}
