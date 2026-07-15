---
'@motor-cms/ui-media': patch
---

fix(media): "copy URL" in the gallery and grid now copies the file's storage/CDN URL from the API (public S3/CloudFront on prod) instead of the backend /download route, which is only reachable behind the VPN and useless as a shared link (EN customer report)
