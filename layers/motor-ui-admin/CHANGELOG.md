# @motor-cms/ui-admin

## 1.15.0

### Minor Changes

- - fix: revert tsconfig.json to standalone config (not dependent on .nuxt/)
  - feat(motor-ui-admin): add skip button to onboarding tours and fix race conditions
  - feat(motor-ui-core): drop neon-grid theme, gate picker behind env flag
  - feat(motor-ui-core): admin shell tweaks & grid horizontal scroll

### Patch Changes

- Updated dependencies
  - @motor-cms/ui-core@1.15.0

## 1.14.2

### Patch Changes

- - fix(motor-ui-core): bigger sidebar logo and cleaner breadcrumb area
- Updated dependencies
  - @motor-cms/ui-core@1.14.2

## 1.14.1

### Patch Changes

- - fix(motor-ui-core): shrink the grid filter button icon
- Updated dependencies
  - @motor-cms/ui-core@1.14.1

## 1.14.0

### Minor Changes

- - feat(motor-ui-core): show shortcut overlay when Alt is held

### Patch Changes

- Updated dependencies
  - @motor-cms/ui-core@1.14.0

## 1.13.0

### Minor Changes

- - feat(motor-ui-core): add email and phone validation i18n keys

### Patch Changes

- Updated dependencies
  - @motor-cms/ui-core@1.13.0

## 1.12.2

### Patch Changes

- - fix(motor-ui-core): remove duplicate child routes from admin navigation
- Updated dependencies
  - @motor-cms/ui-core@1.12.2

## 1.12.1

### Patch Changes

- - fix(motor-ui-core): auto-commit pending tag on blur and tab
- Updated dependencies
  - @motor-cms/ui-core@1.12.1

## 1.12.0

### Minor Changes

- - feat(motor-ui-core): use grouped-checkbox for user permissions

### Patch Changes

- Updated dependencies
  - @motor-cms/ui-core@1.12.0

## 1.11.0

### Minor Changes

- - feat(motor-ui-core): prominent back button and stronger breadcrumbs on admin pages

### Patch Changes

- Updated dependencies
  - @motor-cms/ui-core@1.11.0

## 1.10.0

### Minor Changes

- - feat(motor-ui-core): add configurable toaster position to app settings

### Patch Changes

- Updated dependencies
  - @motor-cms/ui-core@1.10.0

## 1.9.0

### Minor Changes

- - feat: enhance liquid glass theme with Apple-style depth and per-background color tinting

### Patch Changes

- Updated dependencies
  - @motor-cms/ui-core@1.9.0

## 1.8.2

### Patch Changes

- - fix: add URL validation to search config link field
- Updated dependencies
  - @motor-cms/ui-core@1.8.2

## 1.8.1

### Patch Changes

- - fix: improvement report phase 1 — UX fixes and bug fixes
- Updated dependencies
  - @motor-cms/ui-core@1.8.1

## 1.8.0

### Minor Changes

- - feat: implement onboarding tour system with profile restart and multi-step chain
  - fix: restore postinstall for nuxt prepare
  - fix: make tsconfig self-contained and remove postinstall

### Patch Changes

- Updated dependencies
  - @motor-cms/ui-core@1.8.0

## 1.7.0

### Minor Changes

- - fix: tsconfig extends path for CI test resolution
  - fix: block Cmd+S shortcut on read-only forms and show permission warning
  - feat: read-only detail view with view action, dynamic title, and permission legend
  - feat: hide save button and disable form when user lacks write permission
  - feat: add permission group presets dropdown to role edit form
  - fix: use locale-aware relative time and add missing EN notifications translations
  - feat: implement frontend permission system for navigation, grids, and forms

### Patch Changes

- Updated dependencies
  - @motor-cms/ui-core@1.7.0

## 1.6.0

### Minor Changes

- - feat: add client selector for announcements and show starts_at date

### Patch Changes

- Updated dependencies
  - @motor-cms/ui-core@1.6.0

## 1.5.2

### Patch Changes

- - fix: dashboard nav item always active because / matches all routes
- Updated dependencies
  - @motor-cms/ui-core@1.5.2

## 1.5.1

### Patch Changes

- - fix: move dashboard quick actions below header to avoid bell overlap
- Updated dependencies
  - @motor-cms/ui-core@1.5.1

## 1.5.0

### Minor Changes

- - fix: git pathspec in release workflow not matching layer files
  - fix: remove wrapper divs breaking sticky table headers
  - feat: show navigation tree name in global search results

### Patch Changes

- Updated dependencies
  - @motor-cms/ui-core@1.5.0

## 1.4.0

### Patch Changes

- Updated dependencies [19e52cb]
  - @motor-cms/ui-core@1.4.0

## 1.3.0

### Minor Changes

- dca1a0f: - fix: allow undefined for meta prop in GridPagination component
  - fix: update global-search test to match separate module param implementation
  - fix(ci): include layers/\*/CHANGELOG.md in merge-down auto-resolve patterns
  - fix: preserve module facets when filtering by module
  - refactor: move arrow-key pagination shortcuts from Base grid to Pagination component
  - feat: refactor global search with server-side pagination, facet tabs, and result cards
  - fix: update Docker container name to docker-new-admin-1

### Patch Changes

- Updated dependencies [dca1a0f]
  - @motor-cms/ui-core@1.3.0

## 1.2.0

### Minor Changes

- 5894226: - fix: preserve module facets when filtering by module
  - refactor: move arrow-key pagination shortcuts from Base grid to Pagination component
  - feat: refactor global search with server-side pagination, facet tabs, and result cards
  - fix: update Docker container name to docker-new-admin-1

### Patch Changes

- Updated dependencies [5894226]
  - @motor-cms/ui-core@1.2.0

## 1.1.0

### Minor Changes

- 002f56e: - feat: refactor global search with server-side pagination, facet tabs, and result cards
  - refactor: move arrow-key pagination shortcuts from Base grid to Pagination component

### Patch Changes

- Updated dependencies [002f56e]
  - @motor-cms/ui-core@1.1.0

## 1.0.4

### Patch Changes

- 1120a66: fix: store i18n-merged files in node_modules/.cache for Docker build persistence
- 6d0e7ef: chore: CI workflow improvements and motor-release script
- Updated dependencies [1120a66]
- Updated dependencies [6d0e7ef]
  - @motor-cms/ui-core@1.0.4

## 1.0.4-rc.2

### Patch Changes

- 1120a66: fix: store i18n-merged files in node_modules/.cache for Docker build persistence
- 6d0e7ef: chore: CI workflow improvements and motor-release script
- Updated dependencies [1120a66]
- Updated dependencies [6d0e7ef]
  - @motor-cms/ui-core@1.0.4-rc.2

## 1.0.4-alpha.1

### Patch Changes

- 1120a66: fix: store i18n-merged files in node_modules/.cache for Docker build persistence
- 6d0e7ef: chore: CI workflow improvements and motor-release script
- Updated dependencies [1120a66]
- Updated dependencies [6d0e7ef]
  - @motor-cms/ui-core@1.0.4-alpha.1

## 1.0.4-alpha.0

### Patch Changes

- 1120a66: fix: store i18n-merged files in node_modules/.cache for Docker build persistence
- 6d0e7ef: chore: CI workflow improvements and motor-release script
- Updated dependencies [1120a66]
- Updated dependencies [6d0e7ef]
  - @motor-cms/ui-core@1.0.4-alpha.0

## 1.0.1-alpha.1

### Patch Changes

- 6d0e7ef: chore: CI workflow improvements and motor-release script
- Updated dependencies [6d0e7ef]
  - @motor-cms/ui-core@1.0.1-alpha.1

## 1.0.1-alpha.0

### Patch Changes

- 2594f57: Initial release of Tier 1 OSS packages.
- Updated dependencies [2594f57]
  - @motor-cms/ui-core@1.0.1-alpha.0
