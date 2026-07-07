---
'@motor-cms/ui-core': patch
---

- fix(builder): add `stripLinkPrefix` helper so tel:/mailto: link values are normalised to the bare number/address (collapsing legacy `tel:tel:` and `tel.:` data) and expose it via the package exports map
