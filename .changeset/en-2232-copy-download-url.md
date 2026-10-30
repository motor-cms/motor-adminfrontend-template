---
'@motor-cms/ui-core': patch
'@motor-cms/ui-media': patch
---

fix(media, search): "copy URL" in the media grid, gallery, lightbox and global search copies the backend /download/<id> link again instead of the storage/CDN URL (EN-2232). The admin's backendBaseUrl is public on production (https://backend-energis-web.energis.de), so the link works outside the VPN.
