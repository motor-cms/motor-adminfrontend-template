# AGENT.md -- motor-ui-admin

Instructions for AI agents working on this layer.

## Adding a New Admin Entity CRUD

Every admin entity follows the same three-page pattern: grid (index), create, edit. Use an existing entity like `clients` as a template.

### 1. Generate metadata

Add the new entity's API endpoints to the `LAYER_MAP` in `scripts/sync-api-types.ts`, then run:

```bash
pnpm sync:api
```

This produces entries in `app/types/generated/grid-meta.ts` and `app/types/generated/form-meta.ts`. Never edit these files by hand.

### 2. Add a form config

Create a form config in `@motor-cms/ui-core/app/types/config/<entity>.ts`. This defines field groups, labels, ordering, and select option configs. Export a `<entity>FormConfig` (for create) and optionally a `<entity>EditFormConfig` (for edit) plus `<entity>SelectOptionConfigs`.

### 3. Create the grid page (index.vue)

```
app/pages/motor-admin/<entity-slug>/index.vue
```

Pattern:

```vue
<script setup lang="ts">
import type { components } from '@motor-cms/ui-core/app/types/generated/api'
import { entityMeta } from '../../../types/generated/grid-meta'

definePageMeta({ permission: '<entity-plural>.read' })

type Entity = components['schemas']['EntityResource']

const { t } = useI18n()

const columns = columnsFromMeta<Entity>(entityMeta, t, {
  pick: ['field1', 'field2'],
  overrides: { /* optional per-column overrides */ }
})
columns.push(createdAtColumn(t))

const fetchEntities = useGridFetch<Entity>('/api/v2/<entity-plural>')
</script>

<template>
  <GridPage
    :title="t('motor-admin.<entity>.title')"
    :subtitle="t('motor-admin.<entity>.subtitle')"
    add-route="/motor-admin/<entity-slug>/create"
    :add-label="t('motor-admin.<entity>.add')"
    write-permission="<entity-plural>.write"
  >
    <GridBase
      id="<entity>-grid"
      :fetch="fetchEntities"
      :columns="columns"
      base-path="/motor-admin/<entity-slug>"
      :row-click-to="(row: any) => `/motor-admin/<entity-slug>/${row.id}/edit`"
      write-permission="<entity-plural>.write"
      delete-permission="<entity-plural>.delete"
    />
  </GridPage>
</template>
```

### 4. Create the form pages (create.vue, [id]/edit.vue)

**create.vue:**

```vue
<script setup lang="ts">
import { entityFormMeta } from '../../../types/generated/form-meta'
import { entityFormConfig } from '@motor-cms/ui-core/app/types/config/<entity>'

definePageMeta({ layout: 'default', permission: '<entity-plural>.write' })

const { t } = useI18n()
const { fields, schema, groups, state, loading, formRef, onSubmit, onSaveAndNew } = await useEntityForm({
  apiEndpoint: '/api/v2/<entity-plural>',
  routePrefix: '/motor-admin/<entity-slug>',
  translationPrefix: 'motor-admin.<entity>',
  formMeta: entityFormMeta,
  formConfig: entityFormConfig,
  mode: 'create'
})
</script>

<template>
  <FormPage
    :title="t('motor-admin.<entity>.create_title')"
    back-route="/motor-admin/<entity-slug>"
  >
    <FormBase
      ref="formRef"
      v-model:state="state"
      :fields="fields"
      :schema="schema"
      :groups="groups"
      :loading="loading"
      cancel-route="/motor-admin/<entity-slug>"
      show-save-and-new
      @submit="onSubmit"
      @save-and-new="onSaveAndNew"
    />
  </FormPage>
</template>
```

**[id]/edit.vue** is the same pattern but with `mode: 'edit'`, passing `id: route.params.id`, and including `deleteRecord`, `onSaveAndContinue`, loading/error states. See `users/[id]/edit.vue` for a full example with extra fields and custom validation.

### 5. Add translations

Create JSON files at:
- `app/lang/de/motor-admin/<entity>.json`
- `app/lang/en/motor-admin/<entity>.json`

Keys follow the flat format: `{ "title": "...", "subtitle": "...", "add": "...", "create_title": "...", "edit_title": "...", "<field_name>": "..." }`.

In templates, reference as `t('motor-admin.<entity>.<key>')`.

### 6. Add navigation

Register the new entity in the sidebar navigation config in @motor-cms/ui-core.

## Adding a Form Input

1. Create `app/components/form/inputs/<Name>Input.vue`.
2. Props: `defineProps<FormInputProps>()` (from `@motor-cms/ui-core/app/types/form`).
3. Emit: `'update:modelValue'` with `FormInputValue`.
4. Use NuxtUI 4.x components (`UInput`, `USelect`, `UTextarea`, `USwitch`, etc.).
5. Register in `app/components/form/inputs/index.ts` under `builtInInputs` with a string key matching the `input` value in form-meta.

## Adding a Grid Renderer

Grid renderers are now decentralized — each layer owns its domain-specific renderers and registers them via a Nuxt plugin. Generic renderers (text, number, boolean, date, link, list, badge, avatar, indented-text, tags) live in `motor-ui-core`.

To add a renderer to this layer:

1. Create `app/components/grid/renderers/<Name>Renderer.vue`.
2. Props: `defineProps<RendererProps<T>>()` (from `@motor-cms/ui-core/app/types/grid`).
3. Register via a Nuxt plugin using `registerGridRenderers()` in the `app:created` hook (see `motor-ui-builder/app/plugins/grid-renderers.ts` for an example).

## Permission Guards

Pages declare permissions in `definePageMeta`:

```ts
definePageMeta({ permission: '<entity-plural>.read' })   // grid pages
definePageMeta({ permission: '<entity-plural>.write' })   // create/edit pages
```

Grid components accept `write-permission` and `delete-permission` props to control action visibility.

## Translation Key Convention

All keys live under the `motor-admin` package namespace:

```
motor-admin.<entity>.<key>
```

Example: `motor-admin.users.title`, `motor-admin.clients.create_title`.

13 translation modules exist: `ai_system_prompts`, `categories`, `category_trees`, `clients`, `config_variables`, `domains`, `email_templates`, `global`, `languages`, `permissions`, `roles`, `users`.

## Generated Metadata

`app/types/generated/form-meta.ts` and `app/types/generated/grid-meta.ts` are produced by `pnpm sync:api` from the backend OpenAPI spec. The `LAYER_MAP` in `scripts/sync-api-types.ts` controls which schemas map to this layer. Never edit these files manually.

## Architecture Notes

- This layer is a **terminal consumer**. It does not export composables, types, or components for other layers to use. All reusable infrastructure lives in @motor-cms/ui-core.
- Import API types from: `@motor-cms/ui-core/app/types/generated/api`.
- Import generated meta from within the layer: `../../../types/generated/grid-meta`.
- Composables (`useEntityForm`, `useGridFetch`, `columnsFromMeta`, etc.) are auto-imported from @motor-cms/ui-core.

## Code Style

- No trailing commas (`commaDangle: 'never'`)
- 1TBS brace style (`braceStyle: '1tbs'`)
- NuxtUI 4.x components only (not v3)
- TypeScript strict mode
- Run `pnpm lint:fix` before committing
