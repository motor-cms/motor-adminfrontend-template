/**
 * UTable `ui` overrides for the grid.
 *
 * Nuxt UI paints pinned cells with `bg-default/75` (no blur), so columns that
 * scroll under the pinned actions column shine through and the row hover stops
 * at the pinned cell. Pinned cells get an opaque background, follow the row
 * hover and carry a shadow on their inner edge as scroll hint.
 */
export function gridTableUi(rowClickable: boolean) {
  const pinned = [
    'data-[pinned]:bg-default',
    'group-hover/row:data-[pinned]:bg-[color-mix(in_oklab,var(--ui-bg-elevated)_50%,var(--ui-bg))]',
    'group-data-[selected=true]/row:data-[pinned]:bg-[color-mix(in_oklab,var(--ui-bg-elevated)_50%,var(--ui-bg))]',
    'data-[pinned=right]:shadow-[-6px_0_6px_-6px_rgb(0_0_0/0.15)]',
    'data-[pinned=left]:shadow-[6px_0_6px_-6px_rgb(0_0_0/0.15)]'
  ].join(' ')

  return {
    root: 'overflow-x-auto',
    base: 'w-full',
    tr: ['group/row', rowClickable ? 'cursor-pointer' : ''].filter(Boolean).join(' '),
    th: pinned,
    td: pinned
  }
}
