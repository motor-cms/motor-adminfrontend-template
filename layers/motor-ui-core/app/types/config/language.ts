import type { FormFieldsFromMetaOptions } from '../../composables/formFieldUtils'
import { languageOptions } from '../../data/languages'

export const languageFormConfig: FormFieldsFromMetaOptions = {
  overrides: {
    iso_639_1: { input: 'search-select', staticOptions: languageOptions }
  },
  groups: {
    basic: ['iso_639_1', 'english_name', 'native_name']
  }
}
