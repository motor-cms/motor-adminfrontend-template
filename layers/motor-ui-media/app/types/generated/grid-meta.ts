/**
 * Grid column metadata — auto-generated from OpenAPI spec.
 * Do not edit manually. Run `npm run sync:api` to regenerate.
 */

export const fileMeta = {
  schemaName: 'FileResource',
  fields: {
    id: { type: 'integer', renderer: 'number', hideable: false },
    client_id: { type: 'integer', renderer: 'number' },
    client: { type: 'unknown' },
    description: { type: 'string' },
    author: { type: 'string' },
    source: { type: 'string' },
    is_global: { type: 'boolean', renderer: 'boolean' },
    alt_text: { type: 'string' },
    file: { type: 'ref', renderer: 'avatar', ref: 'MediaResource' },
    categories: { type: 'ref[]', renderer: 'list', ref: 'CategoryResource', labelKey: 'name' },
    exists: { type: 'unknown' },
    is_excluded_from_search_index: { type: 'boolean', renderer: 'boolean' },
    tags: { type: 'string' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' }
  }
} as const

export const mediaMeta = {
  schemaName: 'MediaResource',
  fields: {
    collection: { type: 'string' },
    name: { type: 'string', sortable: true, hideable: false },
    file_name: { type: 'string' },
    size: { type: 'integer', renderer: 'number' },
    size_human: { type: 'string' },
    mime_type: { type: 'string' },
    url: { type: 'string', renderer: 'link' },
    local_url: { type: 'string', renderer: 'link' },
    path: { type: 'string' },
    uuid: { type: 'string' },
    created_at: { type: 'string' },
    conversions: { type: 'string' }
  }
} as const
