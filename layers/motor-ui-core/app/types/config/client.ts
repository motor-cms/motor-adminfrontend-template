import type { FormFieldsFromMetaOptions } from '../../composables/formFieldUtils'

export const clientFormConfig: FormFieldsFromMetaOptions = {
  overrides: {
    slug: { input: 'slug' }
  },
  groups: {
    basic: ['name', 'slug', 'is_active'],
    address: ['address', 'zip', 'city', 'country_iso_3166_1'],
    contact: ['contact_name', 'contact_email', 'contact_phone'],
    other: ['website', 'description']
  }
}
