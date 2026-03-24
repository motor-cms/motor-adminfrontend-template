# AGENT.md -- motor-ui-core

Instructions for AI agents working in the `motor-ui-core` layer.

**All code lives in `layers/motor-ui-core/`**. Do NOT reference old `app/` root paths. The root `app/` directory contains only `app.vue`, `app.config.ts`, and `error.vue`.

## Version Requirements

- **NuxtUI 4.x** (NOT v3) -- APIs differ significantly. Search for "Nuxt UI v4" docs.
- **Tailwind 4.x** -- CSS-first configuration, not v3 config files.
- **Nuxt 4.x** / **Vue 3** / **TypeScript** strict mode.

## Code Style

- **No trailing commas** (`commaDangle: 'never'`)
- **1TBS brace style** (`braceStyle: '1tbs'`)
- Run `pnpm lint:fix` before committing.

## Import Conventions

Nuxt's `~` alias resolves to the root `app/` directory, not the layer directory. Follow these rules:

- **Composables and utils**: Use auto-imports (Nuxt scans `composables/` and `utils/` from all layers).
- **Types within this layer**: Use explicit relative paths (e.g., `../types/form`, `../types/grid`).
- **Types from other layers**: Use package imports (e.g., `@motor-cms/ui-admin/app/types/...`).
- **In `.ts` files** that need composables not auto-resolved: Import from `#imports`.

```typescript
// Good: auto-imported composable
const { success } = useNotify()

// Good: relative type import within the layer
import type { FormFieldConfig } from '../types/form'

// Good: explicit import in a .ts file
import { useI18n } from '#imports'
```

---

## How to Add a New Composable

1. Create the file in `layers/motor-ui-core/app/composables/`.
2. Name it `use<Feature>.ts` (or `<feature>Utils.ts` for non-composable helpers).
3. Export a named function (not default export). Nuxt auto-imports it by filename.
4. Use relative imports for types within this layer.
5. Add a unit test in `layers/motor-ui-core/tests/unit/<feature>.test.ts`.

```typescript
// layers/motor-ui-core/app/composables/useMyFeature.ts
import type { SomeType } from '../types/form'

export function useMyFeature() {
  // Implementation
  return { /* reactive refs and methods */ }
}
```

---

## How to Add an Entity Config

Entity configs live in `layers/motor-ui-core/app/types/config/` and define form configurations, select option sources, and extra fields for a specific entity.

1. Create `layers/motor-ui-core/app/types/config/<entity-name>.ts`.
2. Follow the established pattern:

```typescript
import type { FormFieldsFromMetaOptions } from '../../composables/formFieldUtils'
import type { SelectOptionConfig } from '../../composables/useEntityForm'

// Select option configs (for dropdowns/multi-selects)
export const myEntitySelectOptionConfigs: Record<string, SelectOptionConfig> = {
  category_id: { endpoint: '/api/v2/categories', labelKey: 'name' }
}

// Form field configuration (pick/omit/groups)
export const myEntityFormConfig: FormFieldsFromMetaOptions = {
  omit: ['internal_field'],
  groups: {
    basic: ['name', 'description', 'category_id'],
    settings: ['is_active']
  }
}

// Separate edit config if edit form differs from create
export const myEntityEditFormConfig: FormFieldsFromMetaOptions = {
  omit: ['internal_field', 'immutable_field'],
  groups: {
    basic: ['name', 'description', 'category_id'],
    settings: ['is_active']
  }
}
```

3. The consuming page imports these configs and passes them to `useEntityForm()`.

---

## How to Add Form Inputs

Form inputs are registered via the `useFormInputs()` registry composable. To add a new input type:

1. Create the Vue component (typically in another layer like `motor-ui-admin`).
2. Register it in a plugin or setup script:

```typescript
const { register } = useFormInputs()
register('my-input', MyInputComponent)
```

3. Reference it in form field configs via the `input` key:

```typescript
const field: FormFieldConfig = {
  key: 'my_field',
  label: 'My Field',
  input: 'my-input',
  required: false
}
```

---

## How to Add Grid Renderers

Grid renderers use a decentralized plugin-based registry. Generic renderers (text, number, boolean, date, link, list, badge, avatar, indented-text, tags) are registered by core's `plugins/grid-renderers.ts`. Each layer can register its own domain-specific renderers.

To add a renderer from any layer:

1. Create `app/components/grid/renderers/<Name>Renderer.vue`
2. Create or update `app/plugins/grid-renderers.ts`:

```typescript
import { registerGridRenderers } from '#imports'
import MyRenderer from '../components/grid/renderers/MyRenderer.vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:created', () => {
    registerGridRenderers({ 'my-renderer': MyRenderer })
  })
})
```

3. Reference in column definitions via the `renderer` key, or set it in grid-meta via `pnpm sync:api`.

---

## How to Add Translations

1. Create or edit the JSON file in `layers/motor-ui-core/app/lang/<locale>/motor-core/<module>.json`.
2. Use flat key-value format:

```json
{
  "my_key": "My translated string",
  "my_other_key": "Another string"
}
```

3. Restart the dev server to regenerate merged files.
4. Use in templates as `t('motor-core.<module>.<key>')`.

If adding a new module (new JSON file), it will be picked up automatically by the `i18n-layer-merge` module.

---

## How to Add Server Routes

Server routes in this layer proxy requests to the Laravel backend.

1. Create the route file in `layers/motor-ui-core/server/routes/` or `layers/motor-ui-core/server/api/`.
2. Follow the proxy pattern:

```typescript
// layers/motor-ui-core/server/routes/my-route.post.ts
export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  const target = `${config.backendUrl}/my-backend-endpoint`

  return proxyRequest(event, target, {
    headers: {
      Accept: 'application/json'
    }
  })
})
```

The catch-all `server/api/[...path].ts` already proxies all `/api/*` requests, so you typically only need custom routes for non-API endpoints (auth, CSRF, etc.).

---

## Pattern: useEntityForm()

`useEntityForm()` is the primary composable for CRUD forms. It handles field generation, Zod validation, API calls, toast notifications, error mapping, and navigation.

### Minimal usage (with generated metadata)

```vue
<script setup lang="ts">
import { myEntityFormMeta } from '../types/generated/form-meta'
import { myEntityFormConfig, myEntitySelectOptionConfigs } from '../types/config/my-entity'

const route = useRoute()
const mode = route.params.id ? 'edit' : 'create'

const {
  fields, schema, groups, state, loading,
  selectOptions, formRef,
  onSubmit, onSaveAndContinue, onSaveAndNew,
  deleting, deleteRecord
} = await useEntityForm({
  mode: mode as 'create' | 'edit',
  id: route.params.id as string,
  apiEndpoint: '/api/v2/my-entities',
  routePrefix: '/motor-admin/my-entities',
  translationPrefix: 'motor-admin.my_entities',
  formMeta: myEntityFormMeta,
  formConfig: myEntityFormConfig,
  selectOptionConfigs: myEntitySelectOptionConfigs
})
</script>
```

### Key options

| Option | Description |
|--------|-------------|
| `formMeta` | Generated metadata with `.post` and `.patch` keys |
| `formConfig` | Pick/omit/group fields from metadata |
| `manualFields` + `manualSchema` | For entities without generated metadata |
| `selectOptionConfigs` | Map field keys to API endpoints for select options |
| `extraFields` + `extraState` | Append fields not in metadata (e.g., permissions) |
| `beforeSubmit` | Hook to mutate payload before API call |
| `nameKey` | Field used for display name in toasts (default: `'name'`) |

---

## Pattern: useGridFetch() + columnsFromMeta()

### Grid page setup

```vue
<script setup lang="ts">
import { myEntityGridMeta } from '../types/generated/grid-meta'

const { t, te } = useI18n()

// Build columns from metadata
const columns = columnsFromMeta(myEntityGridMeta, t, {
  pick: ['id', 'name', 'created_at'],
  overrides: {
    name: { sortable: true }
  },
  te
})

// Create fetch function
const fetch = useGridFetch<ApiType, ViewType>('/api/v2/my-entities', {
  transform: (record) => ({
    ...record,
    displayName: record.first_name + ' ' + record.last_name
  })
})
</script>
```

### columnsFromMeta() options

| Option | Description |
|--------|-------------|
| `pick` | Include only these fields, in this order |
| `omit` | Exclude these fields |
| `overrides` | Merge partial `ColumnDef` overrides per field key |
| `translationPrefix` | Override auto-derived i18n prefix |
| `te` | Pass `te()` for silent key-existence checks |

---

## Pattern: Permission Middleware

The `permission.global.ts` middleware reads the `permission` key from route meta. To protect a page:

```vue
<script setup lang="ts">
definePageMeta({
  permission: 'my-entities.read'
})
</script>
```

The middleware checks `usePermissions().can(permission)`. If the user lacks the permission, it throws a 404 (not a 403, to avoid leaking route existence).

To check permissions programmatically:

```typescript
const { can, canAny } = usePermissions()

if (can('my-entities.write')) {
  // show edit button
}

if (canAny(['entities.read', 'entities.write'])) {
  // show section
}
```

---

## Testing

- Unit tests go in `layers/motor-ui-core/tests/unit/`.
- E2E tests go in `layers/motor-ui-core/tests/e2e/`.
- Run with `docker exec energis-stack-adminfrontend-new-node-1 pnpm test` (unit) or `docker exec energis-stack-adminfrontend-new-node-1 pnpm test:e2e` (Playwright). **Never run pnpm directly on the host.**
- Vitest config is at `layers/motor-ui-core/vitest.config.ts`.

---

## File Checklist for Common Tasks

### Adding a new entity (end-to-end)

1. `types/config/<entity>.ts` -- form config, select options, extra fields
2. Ensure `generated/form-meta.ts` and `generated/grid-meta.ts` include the entity (run `pnpm sync:api`)
3. `lang/<locale>/motor-core/<module>.json` -- translations (if core-level)
4. Unit tests for any new composables or utils

### Adding a new utility

1. `utils/<name>.ts` -- auto-imported by Nuxt
2. `tests/unit/<name>.test.ts`

### Adding a new store

1. `stores/<name>.ts` -- Pinia store (auto-scanned)
2. `tests/unit/<name>-store.test.ts`
