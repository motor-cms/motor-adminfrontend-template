/**
 * Form field metadata — auto-generated from OpenAPI spec.
 * Do not edit manually. Run `npm run sync:api` to regenerate.
 */

export const fileFormMeta = {
  post: {
    schemaName: 'FilePostRequest',
    fields: {
      client_id: { input: 'select' },
      description: { input: 'textarea', required: true },
      author: { input: 'text', required: true },
      source: { input: 'text', required: true },
      alt_text: { input: 'text', required: true },
      is_global: { input: 'toggle' },
      is_excluded_from_search_index: { input: 'toggle' },
      tags: { input: 'text' },
      categories: { input: 'multi-select', required: true },
      files: { input: 'text', required: true },
      file: { input: 'text' }
    }
  },
  patch: {
    schemaName: 'FilePatchRequest',
    fields: {
      client_id: { input: 'select' },
      description: { input: 'textarea', required: true },
      author: { input: 'text', required: true },
      source: { input: 'text', required: true },
      alt_text: { input: 'text', required: true },
      is_global: { input: 'toggle' },
      is_excluded_from_search_index: { input: 'toggle' },
      tags: { input: 'text' },
      categories: { input: 'multi-select', required: true },
      file: { input: 'text' }
    }
  }
} as const
