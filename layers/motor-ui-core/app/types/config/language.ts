import type { FormFieldsFromMetaOptions } from '../../composables/formFieldUtils'

export const languageFormConfig: FormFieldsFromMetaOptions = {
  groups: {
    basic: ['iso_639_1', 'english_name', 'native_name']
  }
}
