// NOTE: These types mirror @zrmdev/ui-builder/app/types/builder/page-definition.
// When @zrmdev/ui-builder is available as a dependency of this package, replace
// the local definitions below with:
//   import type { PageDefinition, PageRow, PageColumn, PageComponent, ComponentSlot, PageAtom }
//     from '@zrmdev/ui-builder/app/types/builder/page-definition'

// NOTE: Component and atom names (e.g. 'headline', 'paragraph', 'image', 'cta-button')
// are placeholders. They must be verified against the running builder's component/atom
// registries before use in production.

// ============================================
// Local type definitions (mirror page-definition)
// ============================================

interface CssProp {
  key: string
  value: string
}

interface PageAtom {
  uuid: string
  display_name: string
  component_name: string
  classes: string
  attributes: Record<string, unknown>
  locked_attributes: string[]
  disabled: boolean
  visible: boolean
  cssProps?: CssProp[]
  admin_scss?: string
}

interface ComponentSlot {
  uuid: string
  name: string
  display_name: string
  allowedAtoms: string[]
  atoms: PageAtom[]
}

interface PageComponent {
  uuid: string
  name: string
  display_name: string
  icon: string
  classes: string
  cssClassName: string
  visible: boolean
  disabled: boolean
  attributes: Record<string, unknown>
  component_slot_name: string | null
  component_slot_prefix: string | null
  is_removable: number
  is_duplicatable: number
  min_amount_in_another_component: number
  display_viewports: string
  slots: ComponentSlot[]
  components: PageComponent[]
  scorings: unknown[]
  scoring_component_configuration: { score: number; topic_id: number; comparison_operator: string }
  anchors: unknown[]
  admin_scss?: string
}

interface PageColumn {
  uuid: string
  classes: string
  display_name: string
  value_as_grid_column: number
  rows: PageRow[]
  components: PageComponent[]
  admin_scss?: string
}

interface PageRow {
  uuid: string
  display_name: string
  classes: string
  global_css: string
  cols: PageColumn[]
  admin_scss?: string
}

type PageDefinition = PageRow[]

// ============================================
// Builder helpers
// ============================================

function makeAtom(
  display_name: string,
  component_name: string,
  attributes: Record<string, unknown> = {}
): PageAtom {
  return {
    uuid: crypto.randomUUID(),
    display_name,
    component_name,
    classes: '',
    attributes,
    locked_attributes: [],
    disabled: false,
    visible: true
  }
}

function makeSlot(
  name: string,
  display_name: string,
  allowedAtoms: string[],
  atoms: PageAtom[]
): ComponentSlot {
  return {
    uuid: crypto.randomUUID(),
    name,
    display_name,
    allowedAtoms,
    atoms
  }
}

function makeComponent(
  name: string,
  display_name: string,
  slots: ComponentSlot[],
  components: PageComponent[] = []
): PageComponent {
  return {
    uuid: crypto.randomUUID(),
    name,
    display_name,
    icon: '',
    classes: '',
    cssClassName: '',
    visible: true,
    disabled: false,
    attributes: {},
    component_slot_name: null,
    component_slot_prefix: null,
    is_removable: 1,
    is_duplicatable: 1,
    min_amount_in_another_component: 0,
    display_viewports: '',
    slots,
    components,
    scorings: [],
    scoring_component_configuration: { score: 0, topic_id: 0, comparison_operator: '' },
    anchors: []
  }
}

function makeColumn(
  display_name: string,
  value_as_grid_column: number,
  components: PageComponent[]
): PageColumn {
  return {
    uuid: crypto.randomUUID(),
    classes: '',
    display_name,
    value_as_grid_column,
    rows: [],
    components
  }
}

function makeRow(display_name: string, cols: PageColumn[]): PageRow {
  return {
    uuid: crypto.randomUUID(),
    display_name,
    classes: '',
    global_css: '',
    cols
  }
}

// ============================================
// Footer template factory
// ============================================

export function createFooterTemplate(): PageDefinition {
  // ---- Row 1 ----
  // Column 1: free text content (Headline + Paragraph)
  const row1col1Component = makeComponent(
    'text-content',
    'Text Content',
    [
      makeSlot('content', 'Content', ['headline', 'paragraph'], [
        makeAtom('Headline', 'headline'),
        makeAtom('Paragraph', 'paragraph')
      ])
    ]
  )

  // Column 2: award badge images (3 × Image)
  const row1col2Component = makeComponent(
    'image-group',
    'Image Group',
    [
      makeSlot('images', 'Images', ['image'], [
        makeAtom('Badge 1', 'image'),
        makeAtom('Badge 2', 'image'),
        makeAtom('Badge 3', 'image')
      ])
    ]
  )

  const row1 = makeRow('Row 1', [
    makeColumn('Column 1', 6, [row1col1Component]),
    makeColumn('Column 2', 6, [row1col2Component])
  ])

  // ---- Row 2 ----
  // Column 1: Kontakt section (pre-filled headline + paragraph)
  const row2col1Component = makeComponent(
    'text-content',
    'Kontakt',
    [
      makeSlot('content', 'Content', ['headline', 'paragraph'], [
        makeAtom('Headline', 'headline', { text: 'Kontakt' }),
        makeAtom('Paragraph', 'paragraph')
      ])
    ]
  )

  // Columns 2–4: each has Headline + Paragraph + CTA button
  function makeNavColumn(display_name: string): PageColumn {
    const component = makeComponent(
      'text-content',
      display_name,
      [
        makeSlot('content', 'Content', ['headline', 'paragraph', 'cta-button'], [
          makeAtom('Headline', 'headline'),
          makeAtom('Paragraph', 'paragraph'),
          makeAtom('CTA Button', 'cta-button')
        ])
      ]
    )
    return makeColumn(display_name, 3, [component])
  }

  const row2 = makeRow('Row 2', [
    makeColumn('Column 1', 3, [row2col1Component]),
    makeNavColumn('Column 2'),
    makeNavColumn('Column 3'),
    makeNavColumn('Column 4')
  ])

  return [row1, row2]
}
