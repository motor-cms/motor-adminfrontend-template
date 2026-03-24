# AGENT.md -- motor-ui-media

Instructions for AI agents working on this layer.

## Extending the Media Library

### Adding a New File View Mode

The files index page (`pages/motor-media/files/index.vue`) uses a `useCookie`-persisted `viewMode` ref to toggle between `'gallery'` and `'table'`. To add a third view mode:

1. Extend the cookie type: `useCookie<'gallery' | 'table' | 'newmode'>('media-view-mode', ...)`
2. Add a toggle button in the `#actions` template slot
3. Add a `v-else-if="viewMode === 'newmode'"` block alongside the existing Gallery and GridBase blocks
4. The `fetchFiles` function (from `useGridFetch`) can be reused -- it returns paginated API data

### Gallery Infinite Scroll Pattern

`Gallery.vue` manages its own internal pagination separately from `useGridState`. The key pattern:

- `useGridState` handles search/filter state (URL-synced)
- `items` accumulates across pages (appended on scroll)
- `currentPage` / `lastPage` track internal pagination
- When filters change, `resetAndFetch()` clears items and reloads page 1
- `useIntersectionObserver` on a sentinel div triggers `loadMore()`

To modify the gallery layout (e.g., change column count), edit the Tailwind classes on the masonry container: `columns-2 md:columns-3 lg:columns-4 xl:columns-5`.

### File Upload Flow

The create page uses this sequence:

1. User selects files via `MultiFileUpload` (drag-drop or file picker)
2. Each file gets `description` and `alt_text` fields (defaults propagated from form-level fields)
3. On submit, files are uploaded sequentially:
   - `fileToDataUrl(pending.file)` converts `File` to a data URL string
   - POST to `/api/v2/files` with `{ ...formData, files: [dataUrl], categories: [...] }`
4. Progress is shown as `"Uploading 2/5..."`
5. Partial success is handled -- uploaded files succeed, failed files show errors

### File Replacement on Edit

The edit page allows replacing the current file:
1. A standard `<input type="file">` captures the replacement
2. On submit, `fileToDataUrl(replacementFile)` is added to the PATCH body as `file`
3. Categories are submitted as an array of IDs

### Adding Gallery Card Actions

To add a new hover action to `GalleryCard.vue`:

1. Add a new `<button>` in the hover overlay div (`.absolute.inset-0`)
2. Use `@click.prevent.stop` to prevent card navigation
3. Either emit a new event or handle inline
4. Follow the existing pattern: `size-10 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/40`

## Cross-Layer Dependencies

This layer depends only on **motor-ui-core**:
- All composables are auto-imported (no explicit imports needed in `.vue` files)
- API types imported from: `@motor-cms/ui-core/app/types/generated/api`
- Form configs imported from: `@motor-cms/ui-core/app/types/config/file`

No other layers depend on motor-ui-media.

## Permission Model

| Permission | Used By |
|------------|---------|
| `files.read` | Grid/gallery index page |
| `files.write` | Create page, edit page, grid add button |
| `files.delete` | Bulk delete action, grid row delete |

## Translation Key Convention

All keys live under the `motor-media` namespace:

```
motor-media.global.<key>
motor-media.files.<key>
```

## Code Style

- No trailing commas (`commaDangle: 'never'`)
- 1TBS brace style
- NuxtUI 4.x components only
- TypeScript strict mode
- Run `pnpm lint:fix` before committing
