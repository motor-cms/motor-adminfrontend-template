# Motor CMS Admin Frontend Template

Open-source Tier 1 layers for the Motor CMS admin frontend.

## Packages

| Package | Description |
|---------|-------------|
| `@motor-cms/ui-core` | Core infrastructure — grid, form, auth, i18n, stores, composables |
| `@motor-cms/ui-admin` | Admin UI — CRUD pages, rich text editor, navigation management |
| `@motor-cms/ui-media` | Media library — file browser, upload, image crop |

## Quick Start

```bash
pnpm install
pnpm dev        # starts playground dev server
pnpm test       # runs all unit tests
pnpm typecheck  # TypeScript check
```

## Usage

Install the layers in your Nuxt project:

```bash
pnpm add @motor-cms/ui-core @motor-cms/ui-admin @motor-cms/ui-media
```

Extend them in your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  extends: [
    '@motor-cms/ui-core',
    '@motor-cms/ui-admin',
    '@motor-cms/ui-media'
  ]
})
```

## CI/CD Pipeline

```mermaid
flowchart TD
    A[Push to production] --> B{Release Production}
    B --> B1[Typecheck + Tests]
    B1 --> B2{Changeset exists?}
    B2 -- No --> B3[Auto-generate from<br/>conventional commits]
    B3 --> B4[Version + Publish to npm]
    B2 -- Yes --> B4
    B4 --> B5[Commit version bump +<br/>Create GitHub releases]

    B5 --> C{Merge Down}
    C --> C1[production → staging]
    C1 -- Clean --> C2[staging → develop]
    C1 -- Version conflicts --> C3[Auto-resolve & merge]
    C3 --> C2
    C1 -- Code conflicts --> C4[Open PR for<br/>manual resolution]

    C2 -- Clean --> C5[Done]
    C2 -- Conflicts --> C6[Auto-resolve or<br/>open PR]

    D[Push to staging] --> E{Release Pre-release}
    E --> E1[Typecheck + Tests]
    E1 --> E2[Publish rc tag to npm]

    F[Push to develop] --> G{Release Pre-release}
    G --> G1[Typecheck + Tests]
    G1 --> G2[Publish alpha tag to npm]

    H[PR to any branch] --> I{Tests & Coverage}
    H --> J{Changeset Check}
    J --> J1[Remind if changeset<br/>missing for code changes]

    style B fill:#2d6a4f,color:#fff
    style C fill:#264653,color:#fff
    style E fill:#e76f51,color:#fff
    style G fill:#e9c46a,color:#000
    style I fill:#457b9d,color:#fff
    style J fill:#457b9d,color:#fff
```

### Branching Strategy

Code flows **develop → staging → production** for development. Version changes cascade back **production → staging → develop** automatically after release.

| Branch | npm tag | Purpose |
|--------|---------|---------|
| `production` | `latest` | Stable releases |
| `staging` | `rc` | Release candidates |
| `develop` | `alpha` | Development pre-releases |

## Development

See [AGENT.md](./AGENT.md) for detailed development instructions.

## License

MIT
