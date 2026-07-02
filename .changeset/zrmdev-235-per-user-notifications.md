---
'@motor-cms/ui-core': patch
---

- fix(notifications): scope the notification history per user so it no longer leaks across users on a shared browser, while restoring a user's own notifications when they log back in (ZRMDEV-235)
