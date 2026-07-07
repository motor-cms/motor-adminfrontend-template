# @motor-cms/ui-core

## 4.12.2-rc.4

### Patch Changes

- 4051e18: - fix(media): make file upload cancellable on create and edit pages (ZRMDEV-239)
- a6f8482: - fix(builder): add `stripLinkPrefix` helper so tel:/mailto: link values are normalised to the bare number/address (collapsing legacy `tel:tel:` and `tel.:` data) and expose it via the package exports map
- a973694: - fix(notifications): scope the notification history per user so it no longer leaks across users on a shared browser, while restoring a user's own notifications when they log back in (ZRMDEV-235)

## 4.12.2-rc.3

### Patch Changes

- 4051e18: - fix(media): make file upload cancellable on create and edit pages (ZRMDEV-239)
- a6f8482: - fix(builder): add `stripLinkPrefix` helper so tel:/mailto: link values are normalised to the bare number/address (collapsing legacy `tel:tel:` and `tel.:` data) and expose it via the package exports map
- a973694: - fix(notifications): scope the notification history per user so it no longer leaks across users on a shared browser, while restoring a user's own notifications when they log back in (ZRMDEV-235)

## 4.12.2-rc.2

### Patch Changes

- 4051e18: - fix(media): make file upload cancellable on create and edit pages (ZRMDEV-239)
- a973694: - fix(notifications): scope the notification history per user so it no longer leaks across users on a shared browser, while restoring a user's own notifications when they log back in (ZRMDEV-235)

## 4.12.2-rc.1

### Patch Changes

- 4051e18: - fix(media): make file upload cancellable on create and edit pages (ZRMDEV-239)

## 4.12.2-rc.0

### Patch Changes

- - fix(media): make file upload cancellable on create and edit pages (ZRMDEV-239)

## 4.12.1

### Patch Changes

- da200e2: - fix: link @motor-cms/ui-core locally and refresh stale lockfile
  - fix: make tsconfig self-contained and remove postinstall
  - fix: tsconfig extends path for CI test resolution
- 58286e4: fix(grid): hide single-select filters that resolve to ≤1 option, and hide the filter button entirely when none remain. A tenant assigned to a single Mandant no longer sees a (useless, all-clients-revealing) client filter. (ZRMDEV-165)
- 06eb5fd: fix(auth): close three admin security/UX gaps

  - Clear the local notification history + unread-count cookie when the session ends or switches users, so the next user on a shared browser never sees the previous user's notifications (ZRMDEV-235).
  - Permission-denied routes now redirect to an in-layout `/no-access` page (sidebar + logout stay available) instead of throwing a layout-less 404 that left users stuck; the error page also gets a logout escape (ZRMDEV-236).
  - Permission middleware redirects rather than throws, so a non-permitted user is gracefully blocked (frontend half of ZRMDEV-237; the privilege-escalation fix itself is backend).

## 4.12.1-rc.5

### Patch Changes

- da200e2: - fix: link @motor-cms/ui-core locally and refresh stale lockfile
  - fix: make tsconfig self-contained and remove postinstall
  - fix: tsconfig extends path for CI test resolution
- 58286e4: fix(grid): hide single-select filters that resolve to ≤1 option, and hide the filter button entirely when none remain. A tenant assigned to a single Mandant no longer sees a (useless, all-clients-revealing) client filter. (ZRMDEV-165)
- 06eb5fd: fix(auth): close three admin security/UX gaps

  - Clear the local notification history + unread-count cookie when the session ends or switches users, so the next user on a shared browser never sees the previous user's notifications (ZRMDEV-235).
  - Permission-denied routes now redirect to an in-layout `/no-access` page (sidebar + logout stay available) instead of throwing a layout-less 404 that left users stuck; the error page also gets a logout escape (ZRMDEV-236).
  - Permission middleware redirects rather than throws, so a non-permitted user is gracefully blocked (frontend half of ZRMDEV-237; the privilege-escalation fix itself is backend).

## 4.12.1-rc.4

### Patch Changes

- da200e2: - fix: link @motor-cms/ui-core locally and refresh stale lockfile
  - fix: make tsconfig self-contained and remove postinstall
  - fix: tsconfig extends path for CI test resolution

## 4.12.1-rc.3

### Patch Changes

- da200e2: - fix: link @motor-cms/ui-core locally and refresh stale lockfile
  - fix: make tsconfig self-contained and remove postinstall
  - fix: tsconfig extends path for CI test resolution

## 4.12.1-rc.2

### Patch Changes

- da200e2: - fix: link @motor-cms/ui-core locally and refresh stale lockfile
  - fix: make tsconfig self-contained and remove postinstall
  - fix: tsconfig extends path for CI test resolution

## 4.12.1-rc.1

### Patch Changes

- da200e2: - fix: link @motor-cms/ui-core locally and refresh stale lockfile
  - fix: make tsconfig self-contained and remove postinstall
  - fix: tsconfig extends path for CI test resolution

## 4.12.1-rc.0

### Patch Changes

- - fix: link @motor-cms/ui-core locally and refresh stale lockfile
  - fix: make tsconfig self-contained and remove postinstall
  - fix: tsconfig extends path for CI test resolution

## 4.12.0

### Minor Changes

- - feat(tree-picker): flat tree with horizontal-level drag-and-drop and drop placeholder (ZRMDEV-216)

## 4.11.0

### Minor Changes

- - feat(media): rich drag-and-drop replace control with preview before upload

## 4.10.1

### Patch Changes

- - fix(media): gallery card uses stable created_at and the shared date format

## 4.10.0

### Minor Changes

- - feat(media): add MIME-type filter to media library

## 4.9.0

### Minor Changes

- - feat(files): drag-and-drop file replacement with preview
  - fix(files): use File catalogue date for "Erstellt" column

## 4.8.0

### Minor Changes

- - feat(media): show search-index exclusion in files overview (ZRMDEV-222)

## 4.7.0

### Minor Changes

- - feat(core): canonical LINK_TARGET enum for navigation/link UI

## 4.6.0

### Minor Changes

- - fix(forms): forward translationPrefix to formFieldsFromMeta
  - feat(media): explain "ist global" toggle via help tooltip (ZRMDEV-224)

## 4.5.2

### Patch Changes

- - fix(ci): replace changeset publish with direct npm publish loop
  - fix(media): localize remaining hardcoded labels (ZRMDEV-223)
  - fix(category-trees): rename "Kinder" row action to "Kategorien" (ZRMDEV-227)

## 4.5.1

### Patch Changes

- - fix(roles): inject guard_name into POST body via beforeSubmit (ZRMDEV-211)

## 4.5.0

### Minor Changes

- - fix(media): wrap description + filename in file grid (ZRMDEV-221 follow-up)
  - fix(grid): prevent date columns from wrapping/clipping (ZRMDEV-221)
  - feat(content-types): cleaner grid + form ordering (ZRMDEV-206, ZRMDEV-208)

## 4.4.0

### Minor Changes

- - feat(grid): add generic EnumRenderer for translated enum values (ZRMDEV-213)

## 4.3.0

### Minor Changes

- - feat: domain + navigation canonical toggles
  - feat(ui-core): grid search clear and form validation error focus (ZRMDEV-167, ZRMDEV-168)

## 4.2.2

### Patch Changes

- - Merge branch 'feature/EN-2065' into production

## 4.2.1

### Patch Changes

- - fix: reactive plugin nav labels and visual sidebar separation

## 4.2.0

### Minor Changes

- - feat: add EntityConfigurationsPanel to domain edit page

## 4.1.0

### Minor Changes

- - feat: add plugin nav registry for frontend-only sidebar navigation

## 4.0.8

### Patch Changes

- - Wire categories into seo-redirects form (EN-2063)

## 4.0.7

### Patch Changes

- - Surface is_preview_domain on domain form (EN-2068); duplicate email templates with navigation

## 4.0.6

### Patch Changes

- - refactor(motor-ui-admin): extract frontend config into extension registry

## 4.0.5

### Patch Changes

- - fix(motor-ui-admin): i18n for client frontend config validation, footer link icon and unlink confirmation

## 4.0.4

### Patch Changes

- - refactor(motor-ui-core): match form action bar height to sidebar footer (69px)

## 4.0.3

### Patch Changes

- - refactor(motor-ui-core): lock page header title-row height to prevent jump

## 4.0.2

### Patch Changes

- - refactor(motor-ui-core): align form header spacing and typography with grid

## 4.0.1

### Patch Changes

- - refactor(motor-ui-core): unify typography on Plus Jakarta Sans, drop Sora
  - fix(changeset): prevent peer-dep cascade from forcing major version bumps

## 4.0.0

### Minor Changes

- - feat(media-gallery): add sort dropdown + fix German umlauts

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
