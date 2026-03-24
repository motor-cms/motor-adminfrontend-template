# Asymmetric Brutalist Theme

> A raw, high-contrast admin panel theme that breaks conventional UI symmetry. Thick black borders, hard offset shadows, one-sided rounded corners, and oversized typography create an interface that feels tactile, bold, and unapologetically expressive. Inspired by neobrutalist web design, Arc Browser's colored borders, and Notion's content-first hierarchy.

---

## Color Palette

### Primary: Black + Off-White (The Foundation)

True brutalism starts with maximum contrast. Stark black borders, shadows, and text against warm off-white backgrounds form the structural skeleton. Every other color is a deliberate accent punched into this monochrome frame.

| Token            | Tailwind Class   | Hex       | Usage                                   |
|------------------|------------------|-----------|-----------------------------------------|
| base-black       | `neutral-950`    | #09090b   | Borders, shadows, primary text          |
| base-white       | `neutral-50`     | #fafafa   | Page background, card fills             |
| warm-white       | `stone-50`       | #fafaf9   | Alternate background, sidebar bg        |
| off-white        | `stone-100`      | #f5f5f4   | Card hover states, table stripes        |
| border-gray      | `stone-300`      | #d6d3d1   | Secondary borders, dividers             |

### Accent: Electric Lime (Tailwind `lime`)

A jarring, high-energy accent that screams against black. Used sparingly for active states, CTAs, and interactive highlights. This is not a polite green -- it is neon, aggressive, impossible to ignore.

| Token            | Tailwind Class   | Hex       | Usage                                   |
|------------------|------------------|-----------|-----------------------------------------|
| accent-300       | `lime-300`       | #bef264   | Active sidebar item bg, highlight fills |
| **accent-400**   | **`lime-400`**   | **#a3e635** | **Primary CTA buttons, active states**|
| accent-500       | `lime-500`       | #84cc16   | Hover on accent elements                |
| accent-600       | `lime-600`       | #65a30d   | Pressed / active accent                 |

### Secondary Accent: Hot Pink (Tailwind `pink`)

A secondary punch color for destructive actions, notifications, and badges. Creates electric tension when paired with lime.

| Token            | Tailwind Class   | Hex       | Usage                                   |
|------------------|------------------|-----------|-----------------------------------------|
| secondary-400    | `pink-400`       | #f472b6   | Notification badges, warning highlights |
| **secondary-500**| **`pink-500`**   | **#ec4899** | **Destructive buttons, error states** |
| secondary-600    | `pink-600`       | #db2777   | Hover on destructive elements           |

### Semantic Colors

| Purpose   | Color             | Hex       | Notes                                    |
|-----------|-------------------|-----------|------------------------------------------|
| Success   | `lime-400`        | #a3e635   | Ties to primary accent intentionally     |
| Warning   | `amber-400`       | #fbbf24   | High visibility against black borders    |
| Error     | `pink-500`        | #ec4899   | Ties to secondary accent                 |
| Info      | `sky-400`         | #38bdf8   | Cool contrast against warm palette       |

---

## Typography

### Font Pairing: Space Grotesk (Oversized) + JetBrains Mono

**Heading Font: Space Grotesk** (Google Fonts)
- Style: Geometric grotesque with quirky letterforms -- the slight irregularities feel intentionally raw
- Weights: **700 (Bold)** exclusively for headings. No medium, no light. Bold or nothing.
- Use for: Page titles at MASSIVE sizes, section headers, stat numbers, sidebar labels, button text
- Character: Technical, blunt, unapologetic. The geometric shapes pair perfectly with the hard edges of brutalist borders.

**Body + Code Font: JetBrains Mono** (Google Fonts)
- Style: Monospaced typeface originally designed for code, repurposed here for ALL body text
- Weights: 400 (Regular) for body, 500 (Medium) for labels and emphasis
- Use for: Body text, table data, form inputs, metadata, descriptions -- everything that isn't a heading
- Character: Using a monospaced font for body text is a deliberate brutalist choice. It references raw HTML, terminal output, the "undesigned" web. Every character occupies equal space, creating a visible grid rhythm.

### Google Fonts Import

```
https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@700&display=swap
```

### Type Scale (OVERSIZED)

This theme deliberately breaks the "14-16px body text" convention. Everything is bigger.

| Element               | Font            | Weight | Size (rem)  | Size (px) | Tracking     | Notes                              |
|-----------------------|-----------------|--------|-------------|-----------|--------------|-------------------------------------|
| Page title (h1)       | Space Grotesk   | 700    | **3.0**     | **48px**  | -0.04em      | MASSIVE. Dominates the viewport.   |
| Section title (h2)    | Space Grotesk   | 700    | **2.0**     | **32px**  | -0.03em      | Still commanding.                  |
| Card header (h3)      | Space Grotesk   | 700    | **1.375**   | **22px**  | -0.02em      | Bold only, no medium weight.       |
| Stat number           | Space Grotesk   | 700    | **3.75**    | **60px**  | -0.05em      | Enormous KPI numbers.              |
| Body text             | JetBrains Mono  | 400    | **1.0**     | **16px**  | 0            | Monospaced, grid-aligned.          |
| Label                 | JetBrains Mono  | 500    | **0.8125**  | **13px**  | 0.05em       | UPPERCASE, letterspaced.           |
| Small / caption       | JetBrains Mono  | 400    | 0.75        | 12px      | 0.02em       | Metadata, timestamps.              |
| Nav item (sidebar)    | Space Grotesk   | 700    | **1.125**   | **18px**  | -0.01em      | Bold nav, bigger than usual.       |
| Button text           | Space Grotesk   | 700    | **1.0**     | **16px**  | 0.02em       | UPPERCASE on primary buttons.      |

---

## Shape Language

### The Core Idea: Asymmetric Corners

Every shape in this theme has **intentional asymmetry**. No element has four matching corners. This is the defining visual signature -- it makes the entire interface feel off-kilter, hand-crafted, and confrontational.

### Border Radius Recipes

| Shape Name           | CSS `border-radius`                    | Tailwind (approximate)                        | Used On                      |
|----------------------|----------------------------------------|-----------------------------------------------|-------------------------------|
| **Slash Card**       | `0 24px 0 24px`                        | `rounded-none rounded-tr-3xl rounded-bl-3xl`  | Cards, modals, dialogs        |
| **Tab Shape**        | `16px 16px 0 0`                        | `rounded-t-2xl rounded-b-none`                | Tab bars, header sections     |
| **Pill-Left**        | `9999px 4px 4px 9999px`               | `rounded-l-full rounded-r-sm`                 | Primary buttons               |
| **Pill-Right**       | `4px 9999px 9999px 4px`               | `rounded-l-sm rounded-r-full`                 | Secondary / ghost buttons     |
| **Notch Top-Left**   | `24px 0 0 0`                           | `rounded-tl-3xl`                              | Sidebar active indicator      |
| **Bottom-Heavy**     | `0 0 16px 16px`                        | `rounded-b-2xl rounded-t-none`                | Dropdown menus, popovers      |
| **Sharp**            | `0`                                    | `rounded-none`                                | Inputs, table cells, badges   |

### Thick Borders (The Brutalist Signature)

Every interactive element has a visible, thick black border. No subtle 1px hairlines here.

| Element        | Border                                      | CSS                                   |
|----------------|---------------------------------------------|---------------------------------------|
| Cards          | 3px solid black                             | `border-[3px] border-neutral-950`     |
| Buttons        | 3px solid black                             | `border-[3px] border-neutral-950`     |
| Inputs         | 3px solid black                             | `border-[3px] border-neutral-950`     |
| Sidebar        | Right edge: 3px solid black                 | `border-r-[3px] border-neutral-950`   |
| Table          | 2px solid black on all cells                | `border-2 border-neutral-950`         |
| Badges         | 2px solid black                             | `border-2 border-neutral-950`         |

### Hard Offset Shadows (No Blur, No Subtlety)

The defining neobrutalist shadow: a solid-color rectangle offset from the element. Zero blur. Creates a tactile, sticker-like, pseudo-3D effect.

| Element        | Shadow CSS                                  | Tailwind Custom                        | Notes                         |
|----------------|---------------------------------------------|----------------------------------------|-------------------------------|
| Cards          | `box-shadow: 6px 6px 0 0 #09090b`          | `shadow-[6px_6px_0_0_#09090b]`         | Strong 3D pop                 |
| Buttons (rest) | `box-shadow: 4px 4px 0 0 #09090b`          | `shadow-[4px_4px_0_0_#09090b]`         | Smaller offset                |
| Buttons (hover)| `box-shadow: 2px 2px 0 0 #09090b`          | `shadow-[2px_2px_0_0_#09090b]`         | Shrinks on hover (pressed)    |
| Buttons (active)| `box-shadow: 0 0 0 0 #09090b`             | `shadow-none`                          | Fully pressed down            |
| Inputs (focus) | `box-shadow: 4px 4px 0 0 #a3e635`          | `shadow-[4px_4px_0_0_#a3e635]`         | Lime shadow on focus          |
| Modals         | `box-shadow: 8px 8px 0 0 #09090b`          | `shadow-[8px_8px_0_0_#09090b]`         | Maximum depth for overlays    |

### Button Press Animation

Buttons translate down + right on hover/active to match the shrinking shadow, creating a physical "press" effect:

```css
/* Rest state */
.btn-brutal {
  box-shadow: 4px 4px 0 0 #09090b;
  transform: translate(0, 0);
  transition: all 0.1s ease;
}

/* Hover */
.btn-brutal:hover {
  box-shadow: 2px 2px 0 0 #09090b;
  transform: translate(2px, 2px);
}

/* Active (pressed) */
.btn-brutal:active {
  box-shadow: 0 0 0 0 #09090b;
  transform: translate(4px, 4px);
}
```

---

## Component Styling Notes

### Sidebar

- **Off-white background** (`bg-stone-50`) with a thick right border (`border-r-[3px] border-neutral-950`)
- Navigation items use Space Grotesk Bold at 18px -- bigger than typical admin sidebars
- **Active item**: `bg-lime-300` fill with `rounded-tl-3xl` (only top-left corner rounded) + `border-l-4 border-neutral-950` left accent
- **Hover item**: `bg-stone-100` with the same asymmetric radius
- Section labels: JetBrains Mono, UPPERCASE, letterspaced, `text-stone-400`, 13px
- Bottom of sidebar: thick horizontal rule (`border-t-[3px] border-neutral-950`) separating user profile area
- Sidebar width: **280px** (wider than typical 240px to accommodate larger text)
- Inspired by: Arc Browser's bold colored sidebar borders, Notion's content hierarchy

### Buttons

- **Primary CTA**: `bg-lime-400 text-neutral-950 border-[3px] border-neutral-950` with `rounded-l-full rounded-r-sm` (pill on left, sharp on right). Uses Space Grotesk Bold UPPERCASE. Hard offset shadow.
- **Secondary**: `bg-neutral-50 text-neutral-950 border-[3px] border-neutral-950` with `rounded-l-sm rounded-r-full` (sharp on left, pill on right -- mirrors primary). Hard offset shadow.
- **Destructive**: `bg-pink-500 text-white border-[3px] border-neutral-950` with same pill-left shape as primary.
- **Ghost**: `bg-transparent text-neutral-950 border-[3px] border-neutral-950` with `rounded-none`. No shadow.
- All buttons: `px-8 py-3` (generous padding), min-height 48px
- Press animation on all buttons with shadows (see animation section above)

### Cards

- `bg-white border-[3px] border-neutral-950` with **Slash Card** corners (`rounded-none rounded-tr-3xl rounded-bl-3xl`)
- Hard offset shadow: `shadow-[6px_6px_0_0_#09090b]`
- Card header: Space Grotesk Bold, 22px, with a thick bottom border (`border-b-[3px] border-neutral-950`) separating header from body
- Card body: generous padding `p-8` (32px)
- **Stat cards**: Background fill `bg-lime-300` with enormous 60px stat numbers in Space Grotesk Bold. Slash Card shape with black shadow.
- Hover state: shadow shifts to `shadow-[4px_4px_0_0_#09090b]` + `translate(2px, 2px)` -- subtle press effect on cards too
- No gradient. No subtle shadows. No soft edges. Raw.

### Tables / Data Grids

- **Full grid lines**: Every cell has `border-2 border-neutral-950`. This is intentional -- brutalism shows structure.
- Header row: `bg-neutral-950 text-white` with Space Grotesk Bold. Inverted color scheme for maximum contrast.
- Header text: UPPERCASE, letterspaced (`tracking-wider`)
- Body cells: JetBrains Mono Regular, 16px. Monospaced data alignment is a feature, not a bug.
- Alternating rows: `even:bg-stone-50` -- subtle warmth
- Row hover: `bg-lime-100` highlight
- Action column: icon buttons with `border-2 border-neutral-950 rounded-none` and hover `bg-lime-300`
- Sort indicators: `text-pink-500` arrows

### Form Inputs

- **Sharp corners** (`rounded-none`) -- inputs are intentionally angular while cards are asymmetric
- `border-[3px] border-neutral-950` thick black border
- Focus state: `border-lime-500` + `shadow-[4px_4px_0_0_#a3e635]` (lime offset shadow appears on focus)
- Placeholder text: JetBrains Mono, `text-stone-400`
- Labels: JetBrains Mono Medium, UPPERCASE, `tracking-wider`, positioned above input with `mb-2`
- Input padding: `px-4 py-3` (generous)
- Input text: JetBrains Mono Regular, 16px
- Select dropdowns: sharp corners with `border-[3px]`, dropdown panel uses **Bottom-Heavy** radius (`rounded-b-2xl rounded-t-none`)
- Checkbox / Radio: replaced with `w-6 h-6` squares/circles with `border-[3px] border-neutral-950`, checked fill `bg-lime-400`
- Error state: `border-pink-500` + `shadow-[4px_4px_0_0_#ec4899]` (pink offset shadow)

### Badges / Tags

- **Completely sharp** (`rounded-none`) -- no pills, no rounded corners
- `border-2 border-neutral-950 px-3 py-1`
- Primary: `bg-lime-300 text-neutral-950`
- Danger: `bg-pink-500 text-white`
- Neutral: `bg-stone-200 text-neutral-950`
- Info: `bg-sky-300 text-neutral-950`
- Font: JetBrains Mono Medium, UPPERCASE, 13px, `tracking-wider`
- Look like tiny labels / stamps -- deliberately anti-pill

### Notifications / Toasts

- `bg-white border-[3px] border-neutral-950` with hard offset shadow
- **Tab Shape** radius (`rounded-t-2xl rounded-b-none`) -- rounded top, flat bottom
- Left color bar: `border-l-[6px]` (extra thick) in semantic color
- Success: `border-l-[6px] border-lime-400`
- Error: `border-l-[6px] border-pink-500`
- Warning: `border-l-[6px] border-amber-400`
- Info: `border-l-[6px] border-sky-400`
- Toast text: JetBrains Mono, body size

### Modals / Dialogs

- **Slash Card** shape with extra-heavy shadow: `shadow-[8px_8px_0_0_#09090b]`
- `border-[3px] border-neutral-950`
- Overlay: `bg-neutral-950/60` (dark, high opacity)
- Modal header: Space Grotesk Bold 32px with bottom border
- Close button: `rounded-none border-[3px] border-neutral-950` square button in top-right

### Pagination

- Square buttons (`rounded-none`) with `border-2 border-neutral-950`
- Active page: `bg-neutral-950 text-white`
- Hover: `bg-lime-300`
- JetBrains Mono for page numbers

---

## Dark Mode Adjustments

| Element              | Light Mode                         | Dark Mode                               |
|----------------------|------------------------------------|-----------------------------------------|
| Page background      | `stone-50` (#fafaf9)               | `neutral-950` (#09090b)                 |
| Card background      | `white`                            | `neutral-900` (#171717)                 |
| Card border          | `neutral-950` (3px)                | `neutral-300` (3px) -- inverted borders |
| Hard shadow          | `#09090b` (black)                  | `#d6d3d1` (stone-300) -- light shadows  |
| Sidebar bg           | `stone-50`                         | `neutral-900`                           |
| Sidebar border       | `neutral-950` right border         | `neutral-300` right border              |
| Primary text         | `neutral-950`                      | `stone-100`                             |
| Body text            | `neutral-700`                      | `stone-300`                             |
| Heading text         | `neutral-950`                      | `white`                                 |
| Accent (lime)        | `lime-400`                         | `lime-300` (slightly lighter)           |
| Secondary (pink)     | `pink-500`                         | `pink-400`                              |
| Table header         | `neutral-950 bg, white text`       | `neutral-800 bg, stone-100 text`        |
| Input focus shadow   | `#a3e635` (lime)                   | `#bef264` (lighter lime)                |
| Active nav item      | `bg-lime-300`                      | `bg-lime-400/20` (translucent)          |

Key dark mode principle: **Invert the shadows.** In light mode, shadows are black on white. In dark mode, shadows become light stone on dark backgrounds, maintaining the same hard offset aesthetic but with inverted contrast.

---

## Spacing & Layout Principles

| Aspect               | Value                              | Notes                                    |
|----------------------|------------------------------------|-----------------------------------------|
| Page padding         | `p-10` (40px)                      | More breathing room than typical admin   |
| Card gap             | `gap-8` (32px)                     | Generous spacing between cards           |
| Card inner padding   | `p-8` (32px)                       | Spacious card interiors                  |
| Section gap          | `mt-12` (48px)                     | Clear section separation                 |
| Sidebar width        | 280px                              | Wider for larger nav text                |
| Content max-width    | 1400px                             | Wide content area                        |
| Grid columns         | 12-column grid                     | Standard but with bigger gutters         |

---

## Mood & Inspiration

### Visual Identity Keywords
Raw, tactile, confrontational, grid-structured, high-contrast, anti-corporate, expressive, physical

### Inspiration References

- **Arc Browser** -- The thick colored border around the entire UI, bold sidebar design, and per-Space theming. Arc proves thick borders can feel premium, not clunky. Our sidebar takes Arc's "bold border as identity" concept and pushes it further with asymmetric corner shapes.

- **Raycast** -- The confidence of a focused, opinionated interface. Bold iconography with thicker strokes. Our oversized type and high-contrast palette share Raycast's "designed with conviction" ethos.

- **Notion** -- Content hierarchy through typography scale rather than decorative elements. Our oversized headings (48px page titles) and monospaced body text create hierarchy through pure typography, similar to how Notion lets content structure speak for itself.

- **Linear** -- Strict grid adherence, high contrast, minimal decoration. Linear's dark mode with vivid accent colors influenced our lime-on-black dark mode palette. The hard offset shadows are the brutalist inversion of Linear's subtle depth.

- **Neobrutalist Web Movement** -- The broader trend of thick black borders, offset shadows, bright accent colors, and monospaced fonts in web design. Sites like Gumroad's redesign and various indie SaaS tools pioneered this aesthetic.

### What Makes This Theme "Asymmetric Brutalist"

1. **Asymmetric corners** -- No element has four matching corners. Cards slash diagonally (top-right + bottom-left rounded), buttons are pill on one side and sharp on the other, dropdowns round at the bottom only. This is the single most distinctive element -- it makes every component feel intentionally off-balance.

2. **Hard offset shadows** -- Zero-blur, solid-color shadows create a tactile, sticker/stamp effect. Elements feel like they are physically stacked on the page. The press animation reinforces this physical metaphor.

3. **Thick black borders on everything** -- 3px black borders on every interactive element give the interface a visible skeleton. Nothing is hidden or subtle. The structure is the decoration.

4. **Monospaced body text** -- Using JetBrains Mono for all body text is a deliberately transgressive choice for an admin panel. It references terminal output and raw HTML, reinforcing the brutalist ethos while providing excellent data alignment in tables.

5. **Oversized typography** -- 48px page titles and 60px stat numbers are 2-3x larger than conventional admin panels. The typography IS the layout. It demands attention and creates hierarchy through sheer scale.

6. **Electric color accents** -- Lime and hot pink against black/white create maximum visual voltage. These colors are not "professional" in the traditional sense -- they are aggressive, youthful, and impossible to ignore.

---

## NuxtUI 4 Configuration Hint

```typescript
// In app.config.ts or nuxt.config.ts
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'lime',
      secondary: 'pink',
      neutral: 'stone'
    }
  }
})
```

Note: NuxtUI 4's color system will handle the primary lime and secondary pink mapping. The thick borders, hard shadows, and asymmetric radii will need custom CSS classes or Tailwind utility composition, as they go beyond the default NuxtUI component styling. The button press animation requires custom transition utilities.

### Key Custom CSS Required

```css
/* Brutalist shadow utilities */
.shadow-brutal { box-shadow: 6px 6px 0 0 #09090b; }
.shadow-brutal-sm { box-shadow: 4px 4px 0 0 #09090b; }
.shadow-brutal-hover { box-shadow: 2px 2px 0 0 #09090b; }
.shadow-brutal-lime { box-shadow: 4px 4px 0 0 #a3e635; }
.shadow-brutal-pink { box-shadow: 4px 4px 0 0 #ec4899; }
.shadow-brutal-lg { box-shadow: 8px 8px 0 0 #09090b; }

/* Dark mode inverted shadows */
.dark .shadow-brutal { box-shadow: 6px 6px 0 0 #d6d3d1; }
.dark .shadow-brutal-sm { box-shadow: 4px 4px 0 0 #d6d3d1; }
.dark .shadow-brutal-hover { box-shadow: 2px 2px 0 0 #d6d3d1; }

/* Asymmetric card shape */
.shape-slash { border-radius: 0 24px 0 24px; }
.shape-tab { border-radius: 16px 16px 0 0; }
.shape-pill-left { border-radius: 9999px 4px 4px 9999px; }
.shape-pill-right { border-radius: 4px 9999px 9999px 4px; }
.shape-notch-tl { border-radius: 24px 0 0 0; }
.shape-bottom-heavy { border-radius: 0 0 16px 16px; }

/* Button press animation */
.btn-brutal {
  transition: transform 0.1s ease, box-shadow 0.1s ease;
}
.btn-brutal:hover {
  transform: translate(2px, 2px);
}
.btn-brutal:active {
  transform: translate(4px, 4px);
  box-shadow: 0 0 0 0 #09090b !important;
}
```
