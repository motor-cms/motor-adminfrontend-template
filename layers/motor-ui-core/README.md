# motor-ui-core

Foundational Nuxt layer for the Energis CMS Admin Frontend. Provides authentication (Sanctum), i18n, layouts, form and grid composables, Pinia stores, shared types, utilities, and base CSS used by all other layers.

## Tech Stack

- **Nuxt 4.x** / **Vue 3** / **TypeScript**
- **NuxtUI 4.x** / **Tailwind 4.x**
- **Pinia** (with persisted state)
- **Laravel Sanctum** (cookie-based SPA auth via `nuxt-auth-sanctum`)
- **@nuxtjs/i18n** (layer-aware merging)

## Directory Structure

```
motor-ui-core/
├── app/
│   ├── assets/css/
│   │   ├── main.css                    # Global styles + Tailwind imports
│   │   └── themes/                     # Optional visual themes (liquid-glass, neon-grid)
│   ├── components/                     # 11 shared Vue components
│   ├── composables/                    # 24 composables + formFieldUtils
│   ├── i18n.config.ts                  # vue-i18n configuration
│   ├── lang/                           # Translation source files (de/en)
│   ├── lang-merged/                    # Auto-generated merged translations (gitignored)
│   ├── layouts/                        # 2 layouts (default, auth)
│   ├── middleware/                      # Global permission middleware
│   ├── modules/                        # i18n-layer-merge build module
│   ├── plugins/                        # restore-app-settings, api-error-handler
│   ├── stores/                         # 4 Pinia stores
│   ├── types/                          # Shared type definitions
│   │   ├── auth.ts, form.ts, grid.ts, search.ts, tree.ts, page-meta.d.ts
│   │   ├── config/                     # 19 entity config files
│   │   └── generated/                  # api.d.ts, form-meta.ts, grid-meta.ts
│   └── utils/                          # 6 utility modules
├── server/
│   ├── api/[...path].ts                # Catch-all API proxy to backend
│   └── routes/
│       ├── auth/login.post.ts          # Auth login proxy
│       ├── auth/logout.post.ts         # Auth logout proxy
│       └── sanctum/csrf-cookie.get.ts  # CSRF cookie proxy
├── public/
│   ├── fonts/                          # Self-hosted web fonts
│   └── images/                         # Static images
├── tests/
│   ├── unit/                           # 40 unit tests (Vitest)
│   └── e2e/                            # 10 E2E tests (Playwright)
├── nuxt.config.ts
└── vitest.config.ts
```

## Key Features

- **Sanctum authentication** with CSRF handling, login/logout proxies, and global auth middleware
- **Permission-based route protection** via `permission.global.ts` middleware
- **Generic entity form composable** (`useEntityForm`) supporting create/edit/delete with validation, toast notifications, and dirty-guard
- **Generic grid system** (`useGridState`, `useGridFetch`, `useGridData`) with server-side pagination, sorting, and filtering
- **Metadata-driven columns and fields** via `columnsFromMeta()` and `formFieldsFromMeta()` that read generated grid-meta and form-meta
- **Pluggable form inputs and grid renderers** via registry composables (`useFormInputs`, `useGridRenderers`)
- **Admin navigation** fetched from API with permission filtering
- **Global search** with keyboard shortcut support
- **Notification system** with toast and slideover UI
- **Theme support** with CSS-based visual themes
- **i18n** with automatic layer-aware translation merging

## Components

### Grid

| Component | Description |
|-----------|-------------|
| `GridBase` | Data grid with sorting, filtering, pagination, bulk actions |
| `GridPage` | Grid page wrapper (title, breadcrumbs, add button) |
| `GridToolbar` | Search, filters, column visibility |
| `GridPagination` | Page size + page navigation |
| `GridRowActions` | Per-row action dropdown |
| `GridBulkActions` | Multi-select action bar |
| `GridConfirmActionModal` | Confirmation dialog for destructive actions |

### Grid Renderers (10 core, registered via plugin)

| Renderer | Description |
|----------|-------------|
| `TextRenderer` | Plain text (default fallback) |
| `NumberRenderer` | Formatted numbers |
| `BooleanRenderer` | True/false display |
| `DateRenderer` | Formatted dates |
| `LinkRenderer` | Clickable links |
| `ListRenderer` | ref[] array display |
| `BadgeRenderer` | Colored status badges |
| `AvatarRenderer` | User avatar with initials fallback |
| `IndentedTextRenderer` | Text with tree-level indentation |
| `TagsRenderer` | Tag list display |

### Form

| Component | Description |
|-----------|-------------|
| `FormBase` | Metadata-driven form with dirty guard, validation, save/delete |
| `FormPage` | Form page wrapper (title, breadcrumbs, loading states) |
| `FormHelpTooltip` | Tooltip for field help text |

### Form Inputs (12 generic, via builtInInputs)

TextInput, EmailInput, PasswordInput, NumberInput, TextareaInput, SelectInput, MultiSelectInput, ToggleInput, CheckboxGroupInput, TagsInput, SlugInput, RichTextEditor

### Other

| Component | Description |
|-----------|-------------|
| `DashboardSearch` | Global search modal (Cmd+K / Ctrl+K) |
| `FileUpload` | Drag-and-drop file upload widget |
| `MediaLightbox` | Full-screen image/media lightbox |
| `MotorLoader` | Loading spinner/skeleton |
| `MotorLogo` | Application logo |
| `MotorLogoParallax` | Animated parallax logo (auth layout) |
| `NotificationBell` | Header notification indicator |
| `NotificationsSlideover` | Notification list slideover panel |
| `SectionLanding` | Landing section for dashboard areas |
| `ShortcutOverlay` | Keyboard shortcut help overlay |
| `UserMenu` | User dropdown menu (profile, logout) |

## Composables

| Composable | Purpose |
|------------|---------|
| `useEntityForm` | Full CRUD form lifecycle (create/edit/delete, validation, toasts) |
| `useGridState` | Reactive grid state (page, sort, filters, search) |
| `useGridFetch` | Typed API fetch function for paginated grids |
| `useGridData` | Thin wrapper combining `useGridFetch` into a `{ fetch }` object |
| `usePermissions` | Check user permissions (`can()`, `canAny()`) |
| `useBreadcrumbs` | Build breadcrumb trails from route metadata |
| `useAdminNavigation` | Fetch and filter sidebar navigation from API |
| `useNotify` | Toast notification helpers (`success()`, `error()`) |
| `useFormDirtyGuard` | Warn on unsaved form changes before navigation |
| `useFormInputs` | Registry for pluggable form input components |
| `useSlugField` | Auto-generate slug from title/name field |
| `useGridRenderers` | Registry for pluggable grid cell renderers |
| `useResourceColumns` | `columnsFromMeta()` for building grid columns from metadata |
| `useCommonColumns` | Shared column definitions (ID, timestamps, actions) |
| `useCommonFilters` | Shared filter definitions |
| `useResourceOptions` | Fetch select/checkbox options from API endpoints |
| `useActionHandler` | Grid row action dispatcher (edit, delete, etc.) |
| `useGlobalSearch` | Search state and API integration |
| `useDashboard` | Dashboard widget data fetching |
| `useTheme` | CSS theme switching |
| `useProfileApi` | User profile API (update name, password, avatar) |
| `useSortable` | Drag-and-drop reordering (tree/list) |
| `useCopyToClipboard` | Copy text with toast feedback |
| `useConversionUrl` | Build conversion/tracking URLs |
| `useLinkParsing` | Parse and validate URLs |
| `useShortcutRegistry` | Register and manage keyboard shortcuts |
| `formFieldUtils` | `formFieldsFromMeta()`, `initFormState()`, `zodSchemaForField()` |

## Stores

| Store | Purpose |
|-------|---------|
| `appSettings` | Sidebar collapsed state, active theme (persisted) |
| `gridSettings` | Per-grid column visibility and density preferences (persisted) |
| `notifications` | Notification list and unread count |
| `resourceOptions` | Cached select option lists |

## Types

- **`auth.ts`** -- `User` interface matching the `/api/v2/user` response
- **`form.ts`** -- `FormFieldConfig`, `FormGroupConfig`, `SelectOption`, and related form types
- **`grid.ts`** -- `ColumnDef<T>`, `GridParams`, `PaginatedResponse<T>`, filter types
- **`search.ts`** -- Global search result types
- **`tree.ts`** -- Tree node types for navigation/category trees
- **`page-meta.d.ts`** -- Augments `definePageMeta` with `permission` field
- **`config/`** -- 19 entity-specific config files (form configs, select option configs, extra fields) for: `ai-system-prompt`, `category`, `category-tree`, `clickpath`, `client`, `config-variable`, `custom-content-type`, `domain`, `email-template`, `file`, `language`, `navigation-item`, `navigation-tree`, `permission-group`, `role`, `search-config`, `seo-redirect`, `topic`, `user`
- **`generated/`** -- Auto-generated by `pnpm sync:api`: `api.d.ts` (backend API types), `form-meta.ts` (form field metadata), `grid-meta.ts` (grid column metadata)

## Utils

| Utility | Purpose |
|---------|---------|
| `uuid` | Generate UUIDs |
| `strings` | String manipulation (capitalize, truncate, etc.) |
| `file` | File size formatting, MIME type helpers |
| `i18n-helpers` | `schemaNameToPrefix()`, `resolveLabel()`, `resolveHelp()`, `humanizeKey()` |
| `intl` | Date and number formatting via `Intl` |
| `attributes` | HTML attribute helpers |

## Layouts

| Layout | Usage |
|--------|-------|
| `default` | Main dashboard layout with sidebar navigation, header, breadcrumbs |
| `auth` | Split-screen layout for login page (logo + form) |

## Middleware

**`permission.global.ts`** -- Runs on every route. Reads `permission` from `definePageMeta()` and checks the current user's permissions. Returns a 404 if the user lacks the required permission.

## Plugins

| Plugin | Purpose |
|--------|---------|
| `03.restore-app-settings` | Restores persisted app settings (sidebar state, theme) on app init |
| `04.api-error-handler` | Global error handler for API responses (401 redirects, toast on 500s) |

## Server Routes

All server routes proxy requests to the Laravel backend (`config.backendUrl`):

| Route | Target |
|-------|--------|
| `GET /api/*` | Catch-all API proxy |
| `POST /auth/login` | Proxies to `/login` |
| `POST /auth/logout` | Proxies to `/logout` |
| `GET /sanctum/csrf-cookie` | Proxies CSRF cookie request |

## i18n

Translation source files live in `app/lang/{locale}/motor-core/`. The `i18n-layer-merge` module merges them at build time into `app/lang-merged/`.

**German (de)** -- 8 modules: `errors`, `global`, `grid`, `login`, `notifications`, `profile`, `search`, `shortcuts`

**English (en)** -- 6 modules: `errors`, `global`, `grid`, `login`, `profile`, `shortcuts`

Usage in templates: `t('motor-core.global.save')`, `t('motor-core.grid.no_results')`, etc.

## Sanctum Auth Flow

1. Nuxt server routes proxy all auth/API requests to the Laravel backend
2. `GET /sanctum/csrf-cookie` fetches XSRF-TOKEN cookie
3. `POST /auth/login` authenticates and sets session cookie
4. All subsequent `/api/*` requests include cookies and CSRF header automatically
5. Global middleware redirects unauthenticated users to `/login`
6. Permission middleware checks route-level permissions after auth

## Tests

- **40 unit tests** covering all composables, stores, plugins, utils, and middleware
- **10 E2E tests** covering login flows, dashboard access, sidebar, search, profile, and 404 handling

## What This Layer Provides to Other Layers

Other layers (`motor-ui-admin`, `motor-ui-media`, `motor-ui-builder`, etc.) depend on motor-ui-core for:

- **Auth**: `useSanctumAuth()`, `useSanctumClient()`, `User` type
- **Forms**: `useEntityForm()`, `formFieldsFromMeta()`, form types, entity config pattern
- **Grids**: `useGridState()`, `useGridFetch()`, `columnsFromMeta()`, grid types
- **Registries**: `useFormInputs()`, `useGridRenderers()` for plugging in custom inputs/renderers
- **Navigation**: `useAdminNavigation()`, `useBreadcrumbs()`
- **Notifications**: `useNotify()`, notification store
- **Permissions**: `usePermissions()`, permission middleware
- **i18n**: Translation infrastructure, `i18n-helpers` utils
- **Stores**: App settings, grid settings
- **Types**: All shared type definitions (`form.ts`, `grid.ts`, `auth.ts`, entity configs, generated API types)
- **Layouts**: `default` and `auth` layouts
- **CSS**: Base styles, Tailwind config, theme support
