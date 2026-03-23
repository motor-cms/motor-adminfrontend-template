# Motor CMS Admin Frontend Template (Tier 1 - OSS)

Core, Admin, and Media layers for the Motor CMS admin frontend.

## Layers

| Package | Layer | Description |
|---------|-------|-------------|
| `@motor-cms/ui-core` | `layers/motor-ui-core` | Shared types, utilities, stores, and base components |
| `@motor-cms/ui-admin` | `layers/motor-ui-admin` | Admin panel layout, navigation, and CRUD |
| `@motor-cms/ui-media` | `layers/motor-ui-media` | Media library, file picker, image cropping |

## Prerequisites

- Node.js
- pnpm
- tsx (global): `npm install -g tsx`

## Development

```bash
pnpm install
pnpm dev
```

## Cross-tier linking

```bash
./motor-dev link    # Link sibling repos for local development
./motor-dev unlink  # Restore published packages
./motor-dev status  # Show current link state
```
