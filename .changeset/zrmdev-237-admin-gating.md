---
'@motor-cms/ui-core': patch
'@motor-cms/ui-admin': patch
---

fix(admin): Administration area needs administration.read; roles and permissions read-only for non-SuperAdmins (ZRMDEV-237). The sidebar hides the Administration group and the route guard redirects /motor-admin pages to /no-access without administration.read (e-mail templates keep their own permission, they are also linked from the Builder group). On the user edit form, non-SuperAdmins see roles and permissions read-only with a hint and the fields are no longer sent, so the success message is accurate. Form fields support a per-field `disabled` flag.
