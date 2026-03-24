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
