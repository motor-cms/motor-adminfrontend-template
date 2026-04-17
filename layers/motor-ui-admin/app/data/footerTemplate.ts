import { generateUuid } from '@motor-cms/ui-core/app/utils/uuid'

// Types mirror @zrmdev/ui-builder/app/types/builder/page-definition. Names
// (HeadlineParagraphComponent, ImageComponent, HeadlineAtom, ParagraphAtom,
// ButtonAtom, ImageAtom) match the renderer registry in
// motor-ui-components/app/builder-registry/bootstrap.ts.

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
    uuid: generateUuid(),
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
    uuid: generateUuid(),
    name,
    display_name,
    allowedAtoms,
    atoms
  }
}

function makeComponent(
  name: string,
  display_name: string,
  cssClassName: string,
  slots: ComponentSlot[],
  attributes: Record<string, unknown> = {},
  components: PageComponent[] = []
): PageComponent {
  return {
    uuid: generateUuid(),
    name,
    display_name,
    icon: '',
    classes: '',
    cssClassName,
    visible: true,
    disabled: false,
    attributes,
    component_slot_name: null,
    component_slot_prefix: null,
    is_removable: 1,
    is_duplicatable: 1,
    min_amount_in_another_component: 0,
    display_viewports: 's,t,m,l,xl',
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
    uuid: generateUuid(),
    classes: '',
    display_name,
    value_as_grid_column,
    rows: [],
    components
  }
}

function makeRow(display_name: string, cols: PageColumn[], classes = ''): PageRow {
  return {
    uuid: generateUuid(),
    display_name,
    classes,
    global_css: '',
    cols
  }
}

// ============================================
// Footer template factory
// ============================================

const PLACEHOLDER_IMAGE = '/images/general/frau_mit_kind.jpeg'

const TEXT_SLOT_ALLOWED = ['OverlineAtom', 'HeadlineAtom', 'ParagraphAtom', 'ButtonAtom', 'ImageAtom', 'VideoAtom']

function textContentComponent(
  display_name: string,
  atoms: PageAtom[],
  attributes: Record<string, unknown> = { has_background: false }
): PageComponent {
  return makeComponent(
    'HeadlineParagraphComponent',
    display_name,
    'headline-paragraph',
    [makeSlot('content', 'Content', TEXT_SLOT_ALLOWED, atoms)],
    attributes
  )
}

function headlineAtom(text: string, level: 'h2' | 'h3' | 'h4' = 'h3'): PageAtom {
  return makeAtom('Headline', 'HeadlineAtom', {
    text,
    type: level,
    displayedLevel: level,
    weight: 'bold'
  })
}

function paragraphAtom(text: string): PageAtom {
  return makeAtom('Paragraph', 'ParagraphAtom', {
    text,
    bullet_type: 'check__default',
    orderedlist_type: 'decimal'
  })
}

function buttonAtom(title: string): PageAtom {
  return makeAtom('Button', 'ButtonAtom', {
    title,
    link: '',
    variant: 'dark',
    has_arrow: false
  })
}

function imageAtom(display_name: string): PageAtom {
  return makeAtom(display_name, 'ImageAtom', {
    src: PLACEHOLDER_IMAGE,
    alt: display_name
  })
}

function imageComponent(display_name: string, extraClasses = ''): PageComponent {
  const c = makeComponent(
    'ImageComponent',
    display_name,
    'image',
    [makeSlot('content', 'Content', ['ImageAtom'], [imageAtom(display_name)])]
  )
  if (extraClasses) c.classes = extraClasses
  return c
}

export function createFooterTemplate(): PageDefinition {
  // ---- Row 1: 6/6 split ----
  // Col 1: intro text (Headline + Paragraph)
  // Col 2: three award badges, each its own ImageComponent
  const row1 = makeRow('Row 1', [
    makeColumn('Column 1', 6, [
      textContentComponent('Intro', [
        headlineAtom('Headline', 'h2'),
        paragraphAtom('Paragraph')
      ])
    ]),
    makeColumn('Column 2', 6, [
      imageComponent('Badge 1', 'footer-badge'),
      imageComponent('Badge 2', 'footer-badge'),
      imageComponent('Badge 3', 'footer-badge')
    ])
  ])

  // ---- Row 2: four 3/12 columns ----
  // Col 1: Kontakt (pre-filled headline)
  // Col 2-4: nav-style headline + paragraph + CTA button
  // Row gets the white inset card chrome inside the peach FooterFrame.
  const row2 = makeRow('Row 2', [
    makeColumn('Column 1', 3, [
      textContentComponent('Kontakt', [
        headlineAtom('Kontakt', 'h3'),
        paragraphAtom('Paragraph')
      ])
    ]),
    ...['Column 2', 'Column 3', 'Column 4'].map((label) =>
      makeColumn(label, 3, [
        textContentComponent(label, [
          headlineAtom('Headline', 'h3'),
          paragraphAtom('Paragraph'),
          buttonAtom('CTA Button')
        ])
      ])
    )
  ], 'footer-content-card')

  return [row1, row2]
}
