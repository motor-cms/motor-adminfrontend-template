---
'@motor-cms/ui-core': patch
---

Fix the customer build: the permission matrix imports its grouping helper relatively instead of via a package path that is not exported.
