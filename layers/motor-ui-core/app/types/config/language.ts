import type { FormFieldsFromMetaOptions } from '../../composables/formFieldUtils'
import { languageOptions } from '../../data/languages'

export const languageFormConfig: FormFieldsFromMetaOptions = {
  overrides: {
    iso_639_1: { input: 'search-select', staticOptions: languageOptions },
    english_name: { inputProps: { disabled: true } },
    native_name: { inputProps: { disabled: true } }
  },
  groups: {
    basic: ['iso_639_1', 'english_name', 'native_name']
  }
}
