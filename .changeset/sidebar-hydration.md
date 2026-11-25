---
'@motor-cms/ui-core': patch
---

Sidebar: the active group is open after a hard load. The open groups live in useState and are only extended on the client after mount, so hydration matches the server HTML. Grid: only really pinned cells get the opaque background (Nuxt UI marks the others with data-pinned="false").
