---
"@motor-cms/ui-admin": patch
---

Serve the theme-preview fonts from the layer instead of Google Fonts, so opening the page no longer sends the visitor's IP to Google (GDPR); the six runtime `@import`s are replaced by local Fontsource woff2 files and `@font-face` rules
