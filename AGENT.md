# AGENT.md — Motor CMS Admin Frontend (Tier 1 OSS)

## Overview

This repo contains the three open-source Tier 1 layers of the Motor CMS admin frontend:
- `@motor-cms/ui-core` — Core infrastructure (grid, form, auth, i18n, stores, composables)
- `@motor-cms/ui-admin` — Admin-specific UI (CRUD pages, tiptap editor, navigation management)
- `@motor-cms/ui-media` — Media library (file browser, upload, image crop)

## Commands

All commands run via pnpm in the project root:
- `pnpm dev` — Start playground dev server
- `pnpm test` — Run all unit tests
- `pnpm test:core` — Run core layer tests only
- `pnpm typecheck` — Run TypeScript type checking
- `pnpm changeset` — Create a changeset for version tracking

## Changesets

When making changes to any package under `layers/`, create a changeset before committing:
- Run `pnpm changeset` and select affected packages
- Use `patch` for bug fixes, `minor` for new features, `major` for breaking changes
- Write a one-line summary of what changed and why
- The changeset file should be committed alongside the code changes

## Architecture

Each layer is a Nuxt layer (module) with its own `nuxt.config.ts`, `package.json`, and test suite.

Dependency direction: `core` ← `admin` ← (nothing in this repo depends on admin)
                      `core` ← `media`

Layers are published as npm packages under the `@motor-cms` scope.

## Testing

Unit tests use Vitest with a workspace config. Each layer has its own `vitest.config.ts`.
Tests live in `layers/<name>/tests/unit/`.
Run `pnpm test` to run all, or `pnpm test:core` etc. for one layer.

## CI/CD Pipeline

### Branching Strategy

Code flows: `develop` → `staging` → `production`. Version changes cascade back down automatically.

### Workflows

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| **Release (Production)** | Push to `production` | Typecheck, test, auto-generate changeset from conventional commits if missing, version, publish to npm, create GitHub releases |
| **Merge Down** | After Release (Production) completes; push to `staging` | Cascade `production → staging → develop` with auto-resolution of version/changelog conflicts |
| **Release (Pre-release)** | Push to `staging` or `develop` | Publish pre-release versions (`rc` for staging, `alpha` for develop) |
| **Tests & Coverage** | Push/PR to any main branch | Run unit tests with coverage and typecheck |
| **Changeset Check** | PR to any main branch | Remind contributors to include a changeset when code under `layers/` changes |

### Pipeline Sequencing

1. Code merges into `production`
2. **Release (Production)** runs: typecheck → test → auto-changeset → version → publish → commit → GitHub release
3. **Merge Down** triggers via `workflow_run` (waits for Release to complete): merges `production → staging → develop`, auto-resolving version file conflicts
4. Staging push triggers **Release (Pre-release)** (publishes `rc` tags) and then merge-down continues to `develop`

### Key Behaviours

- **Concurrency controls**: Each workflow uses concurrency groups to prevent parallel runs from colliding
- **Bot commit filtering**: Version bumps and merge-down commits are skipped to prevent infinite loops
- **Auto-changeset generation**: If no changeset exists on production, one is generated from conventional commit messages (`feat:` → minor, `fix:/refactor:/perf:` → patch, `!:` or `BREAKING CHANGE:` → major)
- **Conflict auto-resolution**: `package.json`, `CHANGELOG.md`, `pnpm-lock.yaml`, and `pre.json` conflicts are resolved automatically (keeps target branch version); code conflicts open a PR for manual resolution
- **Changesets use fixed mode** with `develop` as the base branch — all three packages are versioned together
