---
'@motor-cms/ui-media': patch
---

fix(media): eliminate layout glitches in the gallery masonry view. Thumbnails are preloaded and measured before their cards enter the grid, so every tile renders at its final size (skeleton shown until then). The grid now uses stable JS column distribution instead of CSS columns, so already-placed tiles no longer jump around when infinite scroll appends new pages. The grid also loads the 400px thumb conversion instead of the full-size original.
