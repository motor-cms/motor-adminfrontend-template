---
'@motor-cms/ui-core': patch
---

fix(search): global-search result cards copy the file's public storage/CDN URL (new `url` meta field from the search index) instead of the VPN-only backend /download route; the search lightbox uses it too. Errors during palette search are now logged instead of silently swallowed.
