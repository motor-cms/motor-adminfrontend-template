import type { FormFieldsFromMetaOptions } from '../../composables/formFieldUtils'

export const categoryTreeFormConfig: FormFieldsFromMetaOptions = {
  groups: {
    basic: ['name', 'scope']
  }
}

export const categoryTreeEditFormConfig: FormFieldsFromMetaOptions = {
  groups: {
    basic: ['name', 'scope']
  },
  overrides: {
    scope: { inputProps: { readonly: true } }
  }
}
