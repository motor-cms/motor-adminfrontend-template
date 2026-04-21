# @motor-cms/ui-core

## 3.0.2

### Patch Changes

- - fix(forms): apply comfortable/compact layout to client config sections

## 3.0.1

### Patch Changes

- - fix: sort direction now actually sent to backend (colon syntax)

## 3.0.0

### Minor Changes

- - fix: add type dropdown options to SEO redirect form config
  - feat: auto-fill language name fields from ISO-639 selection and make them readonly
  - feat: add configurable form layout (comfortable/compact) with grid-based compact mode, field span support, and 2-column card layout

## 2.0.1

### Patch Changes

- - fix: defer commitDone/completeOnboarding to BuilderOnboarding so tour chain completes fully

## 2.0.0

### Minor Changes

- - fix: regenerate lockfile and restore standalone tsconfig for CI
  - feat: client frontend config and global footer editing on client edit page
  - fix(clients): fix hydration, submit, translations, and error handling
  - feat(clients): wire GlobalComponentsSection with footer create/edit/unlink
  - feat(clients): add FooterSlotCard component
  - feat(clients): add GlobalComponentsSection component
  - feat(clients): add default footer template PageDefinition
  - feat(clients): add useClientLanguages composable
  - feat(clients): add FrontendConfigSection and wire into client edit page
  - feat(clients): add useClientFrontendConfig composable
  - feat(clients): add useClientFrontendConfig composable
  - feat(clients): add FrontendConfig types, Zod schema, and field definitions
  - feat(clients): add FrontendConfig types, Zod schema, and field definitions

## 1.16.3

### Patch Changes

- - fix: snapshot isEnabled before mutating show_onboarding to prevent computed invalidation
  - fix: centralize onboarding guard into useOnboardingEnabled, respect backend show_onboarding flag
  - fix: onboarding only starts when backend show_onboarding flag is true, revert login toast to original behavior, refresh identity after tour reset

## 1.16.2

### Patch Changes

- - fix: defer login success toast until dashboard is visible

## 1.16.1

### Patch Changes

- - refactor: move @motor-cms/ui-core from dependencies to peerDependencies in ui-admin and ui-media

## 1.16.0

### Minor Changes

- - fix: re-apply standalone tsconfig (matches 972dcb6)
  - feat(motor-ui-admin): move v-onboarding ownership to layer

## 1.15.1

### Patch Changes

- - i18n(onboarding): rephrase builder step 4 and add preview-button step

## 1.15.0

### Minor Changes

- - fix: revert tsconfig.json to standalone config (not dependent on .nuxt/)
  - feat(motor-ui-admin): add skip button to onboarding tours and fix race conditions
  - feat(motor-ui-core): drop neon-grid theme, gate picker behind env flag
  - feat(motor-ui-core): admin shell tweaks & grid horizontal scroll

## 1.14.2

### Patch Changes

- - fix(motor-ui-core): bigger sidebar logo and cleaner breadcrumb area

## 1.14.1

### Patch Changes

- - fix(motor-ui-core): shrink the grid filter button icon

## 1.14.0

### Minor Changes

- - feat(motor-ui-core): show shortcut overlay when Alt is held

## 1.13.0

### Minor Changes

- - feat(motor-ui-core): add email and phone validation i18n keys

## 1.12.2

### Patch Changes

- - fix(motor-ui-core): remove duplicate child routes from admin navigation

## 1.12.1

### Patch Changes

- - fix(motor-ui-core): auto-commit pending tag on blur and tab

## 1.12.0

### Minor Changes

- - feat(motor-ui-core): use grouped-checkbox for user permissions

## 1.11.0

### Minor Changes

- - feat(motor-ui-core): prominent back button and stronger breadcrumbs on admin pages

## 1.10.0

### Minor Changes

- - feat(motor-ui-core): add configurable toaster position to app settings

## 1.9.0

### Minor Changes

- - feat: enhance liquid glass theme with Apple-style depth and per-background color tinting

## 1.8.2

### Patch Changes

- - fix: add URL validation to search config link field

## 1.8.1

### Patch Changes

- - fix: improvement report phase 1 — UX fixes and bug fixes

## 1.8.0

### Minor Changes

- - feat: implement onboarding tour system with profile restart and multi-step chain
  - fix: restore postinstall for nuxt prepare
  - fix: make tsconfig self-contained and remove postinstall

## 1.7.0

### Minor Changes

- - fix: tsconfig extends path for CI test resolution
  - fix: block Cmd+S shortcut on read-only forms and show permission warning
  - feat: read-only detail view with view action, dynamic title, and permission legend
  - feat: hide save button and disable form when user lacks write permission
  - feat: add permission group presets dropdown to role edit form
  - fix: use locale-aware relative time and add missing EN notifications translations
  - feat: implement frontend permission system for navigation, grids, and forms

## 1.6.0

### Minor Changes

- - feat: add client selector for announcements and show starts_at date

## 1.5.2

### Patch Changes

- - fix: dashboard nav item always active because / matches all routes

## 1.5.1

### Patch Changes

- - fix: move dashboard quick actions below header to avoid bell overlap

## 1.5.0

### Minor Changes

- - fix: git pathspec in release workflow not matching layer files
  - fix: remove wrapper divs breaking sticky table headers
  - feat: show navigation tree name in global search results

## 1.4.0

### Minor Changes

- 19e52cb: Add app.vue with UApp wrapper and TooltipProvider to ui-core, fix typecheck errors in dashboard announcement modal and index page

## 1.3.0

### Minor Changes

- dca1a0f: - fix: allow undefined for meta prop in GridPagination component
  - fix: update global-search test to match separate module param implementation
  - fix(ci): include layers/\*/CHANGELOG.md in merge-down auto-resolve patterns
  - fix: preserve module facets when filtering by module
  - refactor: move arrow-key pagination shortcuts from Base grid to Pagination component
  - feat: refactor global search with server-side pagination, facet tabs, and result cards
  - fix: update Docker container name to docker-new-admin-1

## 1.2.0

### Minor Changes

- 5894226: - fix: preserve module facets when filtering by module
  - refactor: move arrow-key pagination shortcuts from Base grid to Pagination component
  - feat: refactor global search with server-side pagination, facet tabs, and result cards
  - fix: update Docker container name to docker-new-admin-1

## 1.1.0

### Minor Changes

- 002f56e: - feat: refactor global search with server-side pagination, facet tabs, and result cards
  - refactor: move arrow-key pagination shortcuts from Base grid to Pagination component

## 1.0.4

### Patch Changes

- 1120a66: fix: store i18n-merged files in node_modules/.cache for Docker build persistence
- 6d0e7ef: chore: CI workflow improvements and motor-release script

## 1.0.4-rc.2

### Patch Changes

- 1120a66: fix: store i18n-merged files in node_modules/.cache for Docker build persistence
- 6d0e7ef: chore: CI workflow improvements and motor-release script

## 1.0.4-alpha.1

### Patch Changes

- 1120a66: fix: store i18n-merged files in node_modules/.cache for Docker build persistence
- 6d0e7ef: chore: CI workflow improvements and motor-release script

## 1.0.4-alpha.0

### Patch Changes

- 1120a66: fix: store i18n-merged files in node_modules/.cache for Docker build persistence
- 6d0e7ef: chore: CI workflow improvements and motor-release script

## 1.0.1-alpha.1

### Patch Changes

- 6d0e7ef: chore: CI workflow improvements and motor-release script

## 1.0.1-alpha.0

### Patch Changes

- 2594f57: Initial release of Tier 1 OSS packages.
