import type { FormFieldsFromMetaOptions } from '../../composables/formFieldUtils'

export const categoryFormConfig: FormFieldsFromMetaOptions = {
  overrides: {
    // Managed by CategoryTreePicker drag-and-drop — hidden from form UI
    previous_sibling_id: { hidden: true },
    next_sibling_id: { hidden: true }
  },
  groups: {
    basic: ['name', 'parent_id', 'previous_sibling_id', 'next_sibling_id']
  }
}
