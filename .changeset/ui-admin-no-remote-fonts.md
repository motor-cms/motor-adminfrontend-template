---
"@motor-cms/ui-admin": patch
---

Disable the remote @nuxt/fonts providers in the ui-admin layer so admin builds no longer fetch Google fonts at build time (the theme-preview page and its docs name families that are not shipped locally; CI fetches were flaky)
