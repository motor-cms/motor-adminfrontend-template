# motor-ui-media

Media library layer for the Energis CMS. Provides file upload, gallery browsing, metadata editing, and file usage tracking.

## Directory Structure

```
motor-ui-media/
├── app/
│   ├── components/
│   │   ├── form/inputs/
│   │   │   └── MultiFileUpload.vue     # Drag-drop multi-file input with per-file metadata
│   │   └── media/
│   │       ├── Gallery.vue             # Infinite-scroll masonry gallery with search/filters
│   │       └── GalleryCard.vue         # Media card (thumbnail, lightbox, download, copy URL, usage)
│   ├── lang/
│   │   ├── de/motor-media/             # German translations (2 modules: global, files)
│   │   └── en/motor-media/             # English translations (2 modules: global, files)
│   ├── pages/
│   │   └── motor-media/
│   │       ├── index.vue               # Landing redirect
│   │       └── files/
│   │           ├── index.vue           # Files grid/gallery (dual view mode)
│   │           ├── create.vue          # Multi-file upload with categories
│   │           └── [id]/edit.vue       # File metadata edit + file replacement
│   └── types/
│       ├── media.ts                    # MediaFile, FileResource interfaces
│       └── generated/
│           ├── form-meta.ts            # Auto-generated form field metadata
│           └── grid-meta.ts            # Auto-generated grid column metadata
├── tests/
│   └── e2e/
│       └── media-files-grid.spec.ts    # Gallery view loading test
├── nuxt.config.ts
└── vitest.config.ts
```

## Key Features

| Feature | Description |
|---------|-------------|
| Dual view modes | Gallery (masonry) and table views, toggled via a `useCookie`-persisted preference |
| Multi-file upload | Drag-drop zone, per-file description/alt text, sequential upload with progress |
| Gallery masonry | Responsive CSS columns (2-5) with infinite scroll via IntersectionObserver |
| Gallery card | Image thumbnail with lazy loading, lightbox preview, download, copy URL, usage modal |
| File metadata | Description, alt text, category tree assignment, file replacement on edit |
| Bulk delete | Multi-select with Cmd/Ctrl+click, bulk delete with confirmation |
| File usage tracking | EntityUsageModal shows where each file is referenced |
| Search and filtering | Client filter, category filter, text search (URL-synced via `useGridState`) |

## Components

### Gallery.vue

Infinite-scroll masonry grid for media files. Accepts a `fetch` function (from `useGridFetch`), filters, and bulk actions. Uses `useIntersectionObserver` from VueUse to trigger `loadMore()` when the sentinel element becomes visible. Exposes a `refresh()` method.

### GalleryCard.vue

Renders a single media file as a card. Features:
- Image thumbnail or MIME-type icon for non-images
- Hover overlay with lightbox, download, copy URL, and usage actions
- Selection checkbox (Cmd/Ctrl+click when bulk actions are available)
- File extension badge and creation date

### MultiFileUpload.vue

Drag-and-drop file input. Manages pending files with per-entry description and alt text fields. Propagates form-level defaults to non-dirty entries. Emits `PendingFile[]`.

## Types

| Type | File | Description |
|------|------|-------------|
| `MediaFile` | `types/media.ts` | File metadata (url, file_name, mime_type, size, conversions) |
| `FileResource` | `types/media.ts` | API resource (id, description, file, categories) |

## Pages

| Route | Permission | Description |
|-------|------------|-------------|
| `/motor-media` | -- | Landing/redirect |
| `/motor-media/files` | `files.read` | Grid or gallery view with filters and bulk actions |
| `/motor-media/files/create` | `files.write` | Multi-file upload with category selection |
| `/motor-media/files/[id]/edit` | `files.write` | Edit metadata, replace file, view usage |

## Dependencies

This layer consumes **motor-ui-core** for:
- Composables: `useEntityForm`, `useGridFetch`, `useGridState`, `columnsFromMeta`, `createdAtColumn`, `useClientFilter`, `useCategoryFilter`, `useNotify`, `useShortcutRegistry`, `fileToDataUrl`
- Components: `GridBase`, `GridPage`, `GridToolbar`, `GridBulkActions`, `FormBase`, `FormPage`, `EntityUsageModal`, `MediaLightbox`, `FormInputsCategoryTreeInput`
- Types: `FormInputProps`, `GridParams`, `PaginatedResponse`, `FilterDef`, `BulkActionDef`, `RowActionDef`
- Form configs: `fileCreateFormConfig`, `fileEditFormConfig`, `fileSelectOptionConfigs` from `motor-ui-core/app/types/config/file`

No custom composables or stores -- all state is managed via motor-ui-core composables and component-local refs.

## i18n

2 translation modules per locale under `motor-media`:

| Module | Keys |
|--------|------|
| `global` | Navigation and section labels |
| `files` | File-specific labels (title, subtitle, add, upload progress, field labels, etc.) |

Reference: `t('motor-media.files.<key>')`

## Generated Metadata

`form-meta.ts` and `grid-meta.ts` are auto-generated from the backend OpenAPI spec. Regenerate with:

```bash
pnpm sync:api
```

Do not edit these files manually.

## Tests

1 Playwright E2E spec verifying that the gallery view loads correctly on `/motor-media/files`.

```bash
pnpm test:e2e
```
