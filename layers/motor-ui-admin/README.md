# motor-ui-admin

Admin UI layer for the Energis CMS. Provides CRUD pages for all core admin entities, plus the reusable form and grid component systems that power them.

## Directory Structure

```
motor-ui-admin/
├── app/
│   ├── components/
│   │   └── form/inputs/                    # Admin-specific form inputs
│   │       ├── NestedDraggable.vue         # Tree reordering drag-and-drop
│   │       ├── QuicklinksInput.vue         # Quicklinks entity input
│   │       ├── CategoryTreeInput.vue       # Category tree selector
│   │       └── CategoryTreePicker.vue      # Category tree picker with drag-and-drop
│   ├── lang/
│   │   ├── de/motor-admin/                 # German translations (13 modules)
│   │   └── en/motor-admin/                 # English translations (13 modules)
│   ├── pages/
│   │   ├── index.vue                       # Root redirect
│   │   ├── login.vue                       # Login page
│   │   ├── dashboard.vue                   # Dashboard
│   │   ├── profile.vue                     # User profile
│   │   ├── search.vue                      # Global search
│   │   └── motor-admin/
│   │       ├── users/                      # Users CRUD
│   │       ├── roles/                      # Roles CRUD
│   │       ├── permission-groups/          # Permission groups CRUD
│   │       ├── clients/                    # Clients CRUD
│   │       ├── domains/                    # Domains CRUD
│   │       ├── languages/                  # Languages CRUD
│   │       ├── config-variables/           # Config variables CRUD
│   │       ├── email-templates/            # Email templates CRUD
│   │       ├── ai-system-prompts/          # AI system prompts CRUD
│   │       ├── category-trees/             # Category trees + nested categories CRUD
│   │       └── theme-preview/              # Theme preview tool
│   └── types/generated/
│       ├── form-meta.ts                    # Auto-generated form field metadata
│       └── grid-meta.ts                    # Auto-generated grid column metadata
├── tests/
│   └── e2e/                                # 9 Playwright E2E specs
├── nuxt.config.ts
└── vitest.config.ts
```

## Key Features

- **Form system** -- Metadata-driven forms built from auto-generated `form-meta.ts`. The `useEntityForm` composable handles field generation, Zod validation schemas, API submission, and navigation. `FormBase` renders fields by input type; `FormPage` provides the page shell.
- **Grid system** -- Metadata-driven data grids built from auto-generated `grid-meta.ts`. The `useGridFetch`/`useGridData` composables handle paginated API fetching. `GridBase` renders columns using type-appropriate renderers. Supports sorting, search, filters, column visibility, row click navigation, row actions, and bulk actions with confirmation dialogs.
- **Permission guards** -- Pages declare required permissions via `definePageMeta({ permission: '...' })`. Grid add buttons, row actions, and bulk actions respect permission checks.
- **Entity CRUD pages** -- 10 admin entities with full index/create/edit page sets under `/motor-admin/`.
- **i18n** -- 13 translation modules per locale (de, en) covering all entities plus global strings.

## Dependencies

This layer heavily consumes **motor-ui-core** for:
- Composables: `useEntityForm`, `useGridFetch`, `useGridData`, `columnsFromMeta`, `createdAtColumn`, `useBreadcrumbs`, `usePermissions`, `useClientFilter`, `useIsActiveFilter`
- Types: `FormInputProps`, `FormInputValue`, `RendererProps`, `BulkActionDef`, `BreadcrumbItem`, API schemas from `api.d.ts`
- Form configs: per-entity configs in `motor-ui-core/app/types/config/`

## Generated Metadata

`form-meta.ts` and `grid-meta.ts` are auto-generated from the backend OpenAPI spec. Regenerate with:

```bash
pnpm sync:api
```

Do not edit these files manually.

## Tests

9 Playwright E2E specs under `tests/e2e/` covering grid loading, row navigation, and pagination for users, roles, clients, domains, languages, config variables, email templates, and category trees.

```bash
pnpm test:e2e
```
