import { describe, expect, it } from 'vitest'
import { gridTableUi } from '../../app/utils/grid-table-ui'

describe('gridTableUi', () => {
  it('gives pinned cells an opaque background so scrolled columns do not shine through', () => {
    const ui = gridTableUi(false)
    expect(ui.td).toContain('data-[pinned=right]:bg-default')
    expect(ui.th).toContain('data-[pinned=right]:bg-default')
    // ungepinnte Zellen tragen data-pinned="false" und bleiben durchsichtig
    expect(ui.td).not.toMatch(/data-\[pinned\]:/)
  })

  it('keeps the row hover on the pinned cell', () => {
    const ui = gridTableUi(false)
    expect(ui.tr).toContain('group/row')
    expect(ui.td).toMatch(/group-hover\/row:data-\[pinned=right\]:bg-/)
  })

  it('marks the pinned edge with a shadow', () => {
    expect(gridTableUi(false).td).toContain('data-[pinned=right]:shadow-')
  })

  it('adds cursor-pointer only for clickable rows', () => {
    expect(gridTableUi(true).tr).toContain('cursor-pointer')
    expect(gridTableUi(false).tr).not.toContain('cursor-pointer')
  })
})
