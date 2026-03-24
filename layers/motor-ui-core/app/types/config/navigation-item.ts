import type { FormFieldsFromMetaOptions } from '../../composables/formFieldUtils'

export const navigationItemFormConfig: FormFieldsFromMetaOptions = {
  translationPrefix: 'motor-builder.navigation_items',
  pick: [
    'name', 'slug', 'is_active', 'is_visible', 'hide_slug_from_url',
    'link_type', 'link_url', 'builder_page_uuid', 'link_target', 'click_event', 'assistant_clickpath_id',
    'tags', 'css_classes',
    'parent_id', 'previous_sibling_id', 'next_sibling_id'
  ],
  overrides: {
    link_type: { input: 'select' },
    link_target: { input: 'select' },
    builder_page_uuid: { input: 'select' },
    assistant_clickpath_id: { input: 'search-select' },
    tags: { input: 'tags' },
    css_classes: { input: 'tags', inputProps: { delimiter: ' ' } },
    // Managed by CategoryTreePicker drag-and-drop — hidden from form UI
    previous_sibling_id: { hidden: true },
    next_sibling_id: { hidden: true }
  },
  groups: {
    basic: ['name', 'slug', 'is_active', 'is_visible', 'hide_slug_from_url'],
    link: ['link_type', 'link_url', 'builder_page_uuid', 'link_target', 'click_event', 'assistant_clickpath_id'],
    extra: ['tags', 'css_classes'],
    tree: ['parent_id', 'previous_sibling_id', 'next_sibling_id']
  }
}
