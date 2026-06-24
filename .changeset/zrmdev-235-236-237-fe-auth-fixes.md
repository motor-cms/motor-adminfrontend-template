---
'@motor-cms/ui-core': patch
'@motor-cms/ui-admin': patch
---

fix(auth): close three admin security/UX gaps

- Clear the local notification history + unread-count cookie when the session ends or switches users, so the next user on a shared browser never sees the previous user's notifications (ZRMDEV-235).
- Permission-denied routes now redirect to an in-layout `/no-access` page (sidebar + logout stay available) instead of throwing a layout-less 404 that left users stuck; the error page also gets a logout escape (ZRMDEV-236).
- Permission middleware redirects rather than throws, so a non-permitted user is gracefully blocked (frontend half of ZRMDEV-237; the privilege-escalation fix itself is backend).
