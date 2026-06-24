---
'@motor-cms/ui-core': patch
---

fix(grid): hide single-select filters that resolve to ≤1 option, and hide the filter button entirely when none remain. A tenant assigned to a single Mandant no longer sees a (useless, all-clients-revealing) client filter. (ZRMDEV-165)
