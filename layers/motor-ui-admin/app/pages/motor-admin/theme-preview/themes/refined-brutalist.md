# Refined Brutalist Theme

> The same confrontational architecture -- slash corners, one-sided pill buttons, hard offset shadows -- dressed in a sophisticated, muted wardrobe. Charcoal replaces black, warm sage replaces electric lime, and dusty rose replaces hot pink. The shapes still break rules; the colors whisper instead of shout. Think: a brutalist building clad in hand-finished plaster and aged brass.

---

## Color Palette

### Design Philosophy

The original Asymmetric Brutalist theme proved that asymmetric shapes create a compelling visual identity. But the electric lime + hot pink palette competed with the shapes for attention. This refined variant flips the hierarchy: **shapes are the star, colors are the supporting cast.** Every color is desaturated, warm, and considered -- allowing the slash corners and offset shadows to do the visual heavy-lifting.

### Primary: Charcoal + Warm Stone (The Foundation)

Instead of maximum black/white contrast, we use deep charcoal and warm stone tones. The slight warmth in both light and dark values creates a lived-in, sophisticated feel -- like aged concrete rather than fresh asphalt.

| Token            | Tailwind Class   | Hex       | Usage                                   |
|------------------|------------------|-----------|-----------------------------------------|
| base-charcoal    | `neutral-800`    | #262626   | Borders, shadows, primary text          |
| base-stone       | `stone-50`       | #fafaf9   | Page background, card fills             |
| warm-cream       | `stone-100`      | #f5f5f4   | Alternate background, sidebar bg        |
| mid-stone        | `stone-200`      | #e7e5e4   | Card hover states, table stripes        |
| border-stone     | `stone-300`      | #d6d3d1   | Secondary borders, dividers             |
| text-muted       | `stone-500`      | #78716c   | Secondary text, placeholders            |

### Accent: Sage Green (Tailwind `emerald` desaturated / custom)

A muted, earthy sage -- green enough to register as an accent but grey enough to feel restrained. It nods to nature, architecture, and understated luxury. Not neon, not forest -- somewhere between dried herbs and aged copper patina.

| Token            | Tailwind Class       | Hex       | Usage                                   |
|------------------|----------------------|-----------|-----------------------------------------|
| sage-100         | custom               | #e8eeea   | Subtle highlight backgrounds            |
| sage-200         | custom               | #c5d5cb   | Active sidebar item bg, highlight fills |
| **sage-400**     | **custom**           | **#7c9a84**| **Primary CTA buttons, active states** |
| sage-500         | custom               | #63806b   | Hover on accent elements                |
| sage-600         | custom               | #4d6653   | Pressed / active accent                 |
| sage-700         | custom               | #3a4e3f   | Dark mode accent text                   |

### Secondary Accent: Dusty Rose (Tailwind `rose` desaturated / custom)

A muted, powdery rose that handles destructive actions and notifications without the aggression of hot pink. It reads as "attention needed" rather than "alarm." Sophisticated enough for error states without making the entire UI feel urgent.

| Token            | Tailwind Class       | Hex       | Usage                                   |
|------------------|----------------------|-----------|-----------------------------------------|
| rose-100         | custom               | #f2e4e6   | Subtle error/warning backgrounds        |
| rose-300         | custom               | #d4a0a8   | Notification badges, warning highlights |
| **rose-400**     | **custom**           | **#c4818b**| **Destructive buttons, error states**  |
| rose-500         | custom               | #a8636d   | Hover on destructive elements           |
| rose-600         | custom               | #8c4a54   | Pressed / active destructive            |

### Tertiary: Warm Brass / Amber (for info & warmth)

A muted amber that replaces sky-blue for info states. Keeps the palette entirely warm-toned and cohesive.

| Token            | Tailwind Class       | Hex       | Usage                                   |
|------------------|----------------------|-----------|-----------------------------------------|
| brass-200        | custom               | #eedcb5   | Info backgrounds                        |
| **brass-400**    | **custom**           | **#c4a265**| **Info badges, warning states**        |
| brass-500        | custom               | #a68745   | Hover on info elements                  |

### Semantic Colors

| Purpose   | Color             | Hex       | Notes                                    |
|-----------|-------------------|-----------|------------------------------------------|
| Success   | sage-400          | #7c9a84   | Ties to primary accent                   |
| Warning   | brass-400         | #c4a265   | Warm amber, cohesive with palette        |
| Error     | rose-400          | #c4818b   | Ties to secondary accent                 |
| Info      | brass-400         | #c4a265   | Warm instead of cool blue                |

---

## Typography

### Font Pairing: Space Grotesk (Headings) + DM Sans (Body)

The original theme used JetBrains Mono for all body text -- a deliberately transgressive brutalist choice. For the refined variant, we swap to **DM Sans**, a proportional sans-serif with optical sizing that feels polished and highly readable. The contrast between Space Grotesk's geometric quirks in headings and DM Sans's clean body text mirrors the theme's core tension: **brutalist structure, refined surface.**

**Heading Font: Space Grotesk** (Google Fonts)
- Retained from the original -- its geometric irregularities are essential to the brutalist character
- Weights: **700 (Bold)** for headings, **500 (Medium)** for buttons and nav items
- The quirky letterforms (asymmetric 'g', squared 'e') echo the asymmetric border-radius shapes
- Oversized sizing retained -- this is still a brutalist theme

**Body Font: DM Sans** (Google Fonts)
- Style: Proportional sans-serif with optical sizing -- automatically adjusts weight/spacing at different sizes
- Weights: 400 (Regular) for body, 500 (Medium) for labels and emphasis
- Character: Clean, modern, highly legible. Designed specifically for web interfaces.
- The switch from monospace to proportional body text is the single biggest "refinement" signal. Text flows naturally instead of marching in a rigid grid.

**Monospace Accent: IBM Plex Mono** (Google Fonts)
- Used ONLY for code snippets, data cells in tables, and timestamps
- Weights: 400 (Regular)
- Adds a structured, systematic quality that pairs well with the brutalist shapes
- Having monospace as an accent (not default) feels intentional rather than raw

### Google Fonts Import

```
https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500&family=IBM+Plex+Mono:wght@400&family=Space+Grotesk:wght@500;700&display=swap
```

### Type Scale (OVERSIZED but Proportional)

Oversized headings are retained -- they are a brutalist signature. But body text at proportional spacing reads lighter and more sophisticated.

| Element               | Font            | Weight | Size (rem)  | Size (px) | Tracking     | Notes                              |
|-----------------------|-----------------|--------|-------------|-----------|--------------|-------------------------------------|
| Page title (h1)       | Space Grotesk   | 700    | **3.0**     | **48px**  | -0.04em      | MASSIVE. Same as original.         |
| Section title (h2)    | Space Grotesk   | 700    | **2.0**     | **32px**  | -0.03em      | Still commanding.                  |
| Card header (h3)      | Space Grotesk   | 700    | **1.375**   | **22px**  | -0.02em      | Bold, clear hierarchy.             |
| Stat number           | Space Grotesk   | 700    | **3.75**    | **60px**  | -0.05em      | Enormous KPI numbers.              |
| Body text             | DM Sans         | 400    | **1.0**     | **16px**  | 0            | Proportional, clean flow.          |
| Label                 | DM Sans         | 500    | **0.8125**  | **13px**  | 0.06em       | UPPERCASE, letterspaced.           |
| Small / caption       | DM Sans         | 400    | 0.75        | 12px      | 0.02em       | Metadata, timestamps.              |
| Table data            | IBM Plex Mono   | 400    | 0.875       | 14px      | 0            | Mono for data alignment.           |
| Code snippet          | IBM Plex Mono   | 400    | 0.875       | 14px      | 0            | Mono where it matters.             |
| Nav item (sidebar)    | Space Grotesk   | 500    | **1.125**   | **18px**  | -0.01em      | Medium weight -- softer than bold. |
| Button text           | Space Grotesk   | 500    | **1.0**     | **16px**  | 0.02em       | UPPERCASE on primary buttons.      |

---

## Shape Language

### KEPT FROM ORIGINAL: Asymmetric Corners (The Hero)

The shapes are the identity of this theme. Every asymmetric border-radius recipe is retained exactly as-is. The shapes are what the user loved -- do not change them.

### Border Radius Recipes (Unchanged)

| Shape Name           | CSS `border-radius`                    | Tailwind (approximate)                        | Used On                      |
|----------------------|----------------------------------------|-----------------------------------------------|-------------------------------|
| **Slash Card**       | `0 24px 0 24px`                        | `rounded-none rounded-tr-3xl rounded-bl-3xl`  | Cards, modals, dialogs        |
| **Tab Shape**        | `16px 16px 0 0`                        | `rounded-t-2xl rounded-b-none`                | Tab bars, header sections     |
| **Pill-Left**        | `9999px 4px 4px 9999px`               | `rounded-l-full rounded-r-sm`                 | Primary buttons               |
| **Pill-Right**       | `4px 9999px 9999px 4px`               | `rounded-l-sm rounded-r-full`                 | Secondary / ghost buttons     |
| **Notch Top-Left**   | `24px 0 0 0`                           | `rounded-tl-3xl`                              | Sidebar active indicator      |
| **Bottom-Heavy**     | `0 0 16px 16px`                        | `rounded-b-2xl rounded-t-none`                | Dropdown menus, popovers      |
| **Sharp**            | `0`                                    | `rounded-none`                                | Inputs, table cells, badges   |

### Refined Borders (Slightly Thinner)

Borders are reduced from 3px to **2px**. This is the single most impactful refinement at the structural level -- 2px borders still read as intentionally thick and visible, but feel more considered and less aggressive. The skeleton is still visible; it just wears a tailored suit.

| Element        | Border                                      | CSS                                   |
|----------------|---------------------------------------------|---------------------------------------|
| Cards          | 2px solid charcoal                          | `border-2 border-neutral-800`         |
| Buttons        | 2px solid charcoal                          | `border-2 border-neutral-800`         |
| Inputs         | 2px solid charcoal                          | `border-2 border-neutral-800`         |
| Sidebar        | Right edge: 2px solid charcoal              | `border-r-2 border-neutral-800`       |
| Table          | 1px solid stone                             | `border border-stone-300`             |
| Badges         | 2px solid charcoal                          | `border-2 border-neutral-800`         |

### Accent-Colored Shadows (The Key Evolution)

The defining change from original: **hard offset shadows use the sage accent color instead of black.** This transforms the shadows from aggressive structural elements into warm, decorative ones. The offset and zero-blur technique remains -- it is still unmistakably neobrutalist -- but the sage-tinted shadow feels like a soft patina rather than a hard stamp.

| Element        | Shadow CSS                                  | Tailwind Custom                           | Notes                         |
|----------------|---------------------------------------------|-------------------------------------------|-------------------------------|
| Cards          | `box-shadow: 5px 5px 0 0 #7c9a84`          | `shadow-[5px_5px_0_0_#7c9a84]`            | Sage shadow -- warm depth     |
| Buttons (rest) | `box-shadow: 3px 3px 0 0 #7c9a84`          | `shadow-[3px_3px_0_0_#7c9a84]`            | Slightly smaller offset       |
| Buttons (hover)| `box-shadow: 1px 1px 0 0 #7c9a84`          | `shadow-[1px_1px_0_0_#7c9a84]`            | Shrinks on hover (pressed)    |
| Buttons (active)| `box-shadow: 0 0 0 0 transparent`          | `shadow-none`                             | Fully pressed down            |
| Inputs (focus) | `box-shadow: 3px 3px 0 0 #7c9a84`          | `shadow-[3px_3px_0_0_#7c9a84]`            | Sage shadow on focus          |
| Modals         | `box-shadow: 6px 6px 0 0 #7c9a84`          | `shadow-[6px_6px_0_0_#7c9a84]`            | Maximum depth for overlays    |
| Error inputs   | `box-shadow: 3px 3px 0 0 #c4818b`          | `shadow-[3px_3px_0_0_#c4818b]`            | Rose shadow for errors        |

### Button Press Animation (Retained, Refined)

Same physical "press" metaphor. Slightly smaller offsets for the refined feel.

```css
/* Rest state */
.btn-refined {
  box-shadow: 3px 3px 0 0 #7c9a84;
  transform: translate(0, 0);
  transition: all 0.15s ease;
}

/* Hover */
.btn-refined:hover {
  box-shadow: 1px 1px 0 0 #7c9a84;
  transform: translate(2px, 2px);
}

/* Active (pressed) */
.btn-refined:active {
  box-shadow: 0 0 0 0 transparent;
  transform: translate(3px, 3px);
}
```

---

## Component Styling Notes

### Sidebar

- **Warm cream background** (`bg-stone-100`) with a refined right border (`border-r-2 border-neutral-800`)
- Navigation items use Space Grotesk Medium (500) at 18px -- still larger than typical but not as heavy as Bold
- **Active item**: `bg-sage-200` (#c5d5cb) fill with `rounded-tl-3xl` (only top-left corner rounded) + `border-l-[3px] border-neutral-800` left accent
- **Hover item**: `bg-stone-200` with the same asymmetric radius
- Section labels: DM Sans Medium, UPPERCASE, letterspaced, `text-stone-400`, 13px
- Bottom of sidebar: 2px horizontal rule (`border-t-2 border-neutral-800`) separating user profile area
- Sidebar width: **280px** (retained -- the larger text still needs room)

### Buttons

- **Primary CTA**: `bg-sage-400` (#7c9a84) `text-white border-2 border-neutral-800` with `rounded-l-full rounded-r-sm` (pill-left shape retained). Space Grotesk Medium UPPERCASE. Sage offset shadow.
- **Secondary**: `bg-stone-50 text-neutral-800 border-2 border-neutral-800` with `rounded-l-sm rounded-r-full` (pill-right mirrors primary). Sage offset shadow.
- **Destructive**: `bg-rose-400` (#c4818b) `text-white border-2 border-neutral-800` with pill-left shape. Rose offset shadow (`shadow-[3px_3px_0_0_#c4818b]`).
- **Ghost**: `bg-transparent text-neutral-800 border-2 border-neutral-800` with `rounded-none`. No shadow.
- All buttons: `px-7 py-2.5` (generous but slightly less than original), min-height 44px
- Press animation on all buttons with shadows

### Cards

- `bg-white border-2 border-neutral-800` with **Slash Card** corners (`rounded-none rounded-tr-3xl rounded-bl-3xl`)
- Sage offset shadow: `shadow-[5px_5px_0_0_#7c9a84]`
- Card header: Space Grotesk Bold, 22px, with a 2px bottom border (`border-b-2 border-neutral-800`) separating header from body
- Card body: generous padding `p-7` (28px)
- **Stat cards**: Background fill `bg-sage-100` (#e8eeea) with enormous 60px stat numbers in Space Grotesk Bold. Slash Card shape with sage shadow.
- Hover state: shadow shifts to `shadow-[3px_3px_0_0_#7c9a84]` + `translate(2px, 2px)` -- subtle press effect
- No gradient. No blur. Hard edges remain. Just softer color.

### Tables / Data Grids

- **Grid lines**: Every cell has `border border-stone-300`. Thinner than original but still shows structure.
- Header row: `bg-neutral-800 text-stone-100` with Space Grotesk Bold. Charcoal instead of pure black.
- Header text: UPPERCASE, letterspaced (`tracking-wider`)
- Body cells: IBM Plex Mono Regular, 14px. Monospace for data alignment.
- Alternating rows: `even:bg-stone-50` -- subtle warmth
- Row hover: `bg-sage-100` (#e8eeea) highlight
- Action column: icon buttons with `border border-neutral-800 rounded-none` and hover `bg-sage-200`
- Sort indicators: `text-rose-400` (#c4818b) arrows

### Form Inputs

- **Sharp corners** (`rounded-none`) -- inputs are intentionally angular while cards are asymmetric
- `border-2 border-neutral-800` charcoal border
- Focus state: `border-sage-500` (#63806b) + `shadow-[3px_3px_0_0_#7c9a84]` (sage offset shadow appears on focus)
- Placeholder text: DM Sans Regular, `text-stone-400`
- Labels: DM Sans Medium, UPPERCASE, `tracking-wider`, positioned above input with `mb-2`
- Input padding: `px-4 py-2.5` (generous)
- Input text: DM Sans Regular, 16px
- Select dropdowns: sharp corners with `border-2`, dropdown panel uses **Bottom-Heavy** radius (`rounded-b-2xl rounded-t-none`)
- Checkbox / Radio: `w-5 h-5` with `border-2 border-neutral-800`, checked fill `bg-sage-400`
- Error state: `border-rose-400` + `shadow-[3px_3px_0_0_#c4818b]` (rose offset shadow)

### Badges / Tags

- **Completely sharp** (`rounded-none`) -- retained from original
- `border-2 border-neutral-800 px-3 py-1`
- Primary: `bg-sage-200` (#c5d5cb) `text-neutral-800`
- Danger: `bg-rose-400` (#c4818b) `text-white`
- Neutral: `bg-stone-200 text-neutral-800`
- Info: `bg-brass-200` (#eedcb5) `text-neutral-800`
- Font: DM Sans Medium, UPPERCASE, 13px, `tracking-wider`
- Same stamp-like quality, just muted tones

### Notifications / Toasts

- `bg-white border-2 border-neutral-800` with sage offset shadow
- **Tab Shape** radius (`rounded-t-2xl rounded-b-none`) -- rounded top, flat bottom (retained)
- Left color bar: `border-l-4` in semantic color (thinner than original 6px)
- Success: `border-l-4 border-sage-400` (#7c9a84)
- Error: `border-l-4 border-rose-400` (#c4818b)
- Warning: `border-l-4 border-brass-400` (#c4a265)
- Info: `border-l-4 border-brass-400` (#c4a265)
- Toast text: DM Sans Regular, body size

### Modals / Dialogs

- **Slash Card** shape with larger sage shadow: `shadow-[6px_6px_0_0_#7c9a84]`
- `border-2 border-neutral-800`
- Overlay: `bg-neutral-800/50` (slightly less opaque than original)
- Modal header: Space Grotesk Bold 32px with bottom border
- Close button: `rounded-none border-2 border-neutral-800` square button in top-right

### Pagination

- Square buttons (`rounded-none`) with `border border-neutral-800`
- Active page: `bg-neutral-800 text-stone-100`
- Hover: `bg-sage-200`
- DM Sans Medium for page numbers

---

## Dark Mode

### Philosophy: Warm Charcoal, Not Cold Black

Dark mode uses warm charcoals and deep stones rather than pure neutral black. The sage accent glows softly against dark backgrounds. Shadows become translucent sage overlays rather than inverting to light colors -- maintaining the same warm, earthy identity.

| Element              | Light Mode                         | Dark Mode                                |
|----------------------|------------------------------------|-----------------------------------------|
| Page background      | `stone-50` (#fafaf9)               | `neutral-900` (#171717)                 |
| Card background      | `white`                            | `neutral-800` (#262626)                 |
| Card border          | `neutral-800` (2px)                | `stone-500` (#78716c) (2px)             |
| Hard shadow          | `#7c9a84` (sage)                   | `#3a4e3f` (sage-700) -- darker sage     |
| Sidebar bg           | `stone-100`                        | `neutral-900`                           |
| Sidebar border       | `neutral-800` right border         | `stone-600` (#57534e) right border      |
| Primary text         | `neutral-800`                      | `stone-100` (#f5f5f4)                   |
| Body text            | `stone-600` (#57534e)              | `stone-400` (#a8a29e)                   |
| Heading text         | `neutral-800`                      | `stone-100`                             |
| Accent (sage)        | sage-400 (#7c9a84)                 | sage-400 (#7c9a84) -- same, glows well  |
| Secondary (rose)     | rose-400 (#c4818b)                 | rose-300 (#d4a0a8) -- slightly lighter  |
| Table header         | `neutral-800 bg, stone-100 text`   | `neutral-700 bg, stone-200 text`        |
| Input focus shadow   | `#7c9a84` (sage)                   | `#3a4e3f` (dark sage)                   |
| Active nav item      | `bg-sage-200` (#c5d5cb)            | `bg-sage-400/15` (translucent sage)     |
| Stat card bg         | `bg-sage-100` (#e8eeea)            | `bg-sage-400/10` (translucent sage)     |

### Dark Mode Key Principle

**Shadows stay warm.** Unlike the original theme which inverted shadows to light colors in dark mode, the refined theme uses a darker shade of the same sage accent. This preserves the warm, earthy mood in both modes. The shadows become subtler in dark mode rather than flipping contrast entirely.

---

## Spacing & Layout Principles

| Aspect               | Value                              | Notes                                    |
|----------------------|------------------------------------|-----------------------------------------|
| Page padding         | `p-8` (32px)                       | Generous but slightly tighter than orig  |
| Card gap             | `gap-6` (24px)                     | Comfortable spacing between cards        |
| Card inner padding   | `p-7` (28px)                       | Spacious card interiors                  |
| Section gap          | `mt-10` (40px)                     | Clear section separation                 |
| Sidebar width        | 280px                              | Retained for larger text                 |
| Content max-width    | 1400px                             | Wide content area                        |
| Grid columns         | 12-column grid                     | Standard layout                          |

---

## Mood & Inspiration

### Visual Identity Keywords

Refined, architectural, warm, tactile, considered, structured, organic-accented, grown-up, understated-bold

### What Changed from Asymmetric Brutalist

| Aspect                 | Original Brutalist               | Refined Brutalist                        |
|------------------------|----------------------------------|------------------------------------------|
| **Accent color**       | Electric lime (#a3e635)          | Sage green (#7c9a84)                     |
| **Secondary color**    | Hot pink (#ec4899)               | Dusty rose (#c4818b)                     |
| **Border weight**      | 3px black                        | 2px charcoal                             |
| **Shadow color**       | Pure black (#09090b)             | Sage accent (#7c9a84)                    |
| **Body font**          | JetBrains Mono (monospace)       | DM Sans (proportional)                   |
| **Heading weight**     | 700 (Bold) only                  | 700 (Bold) headings, 500 (Medium) nav    |
| **Data/table font**    | JetBrains Mono (all text)        | IBM Plex Mono (tables/code only)         |
| **Color temperature**  | Cool neon on warm base           | Warm throughout (sage, stone, brass)      |
| **Overall feel**       | Confrontational, aggressive      | Confident, sophisticated                  |
| **Shapes**             | Unchanged                        | **Unchanged** -- the hero                |

### What Stayed the Same

1. **All asymmetric corner shapes** -- slash cards, pill-left/right buttons, notch nav, bottom-heavy dropdowns, sharp inputs
2. **Hard offset shadows** -- still zero-blur, still offset, still the neobrutalist signature
3. **Oversized typography** -- 48px page titles, 60px stat numbers
4. **Button press animation** -- translate + shadow shrink on hover/active
5. **Sharp-cornered inputs** -- the angular/asymmetric contrast between forms and cards
6. **UPPERCASE labels and button text** -- the structural, stamp-like quality
7. **Visible grid structure** -- borders on table cells, thick sidebar dividers

### Inspiration References

- **Aesop (the skincare brand)** -- Muted earth tones, warm neutrals, sophisticated typography. Proves that restraint and warmth can feel luxurious. Their website uses dark backgrounds with sage/olive accents in a way that feels timeless.

- **Dieter Rams / Braun** -- "Less, but better." The refined brutalist theme channels Rams's principle that good design is as little design as possible. The shapes do the work; the colors step back.

- **Japanese Wabi-Sabi aesthetic** -- Finding beauty in imperfection. The asymmetric shapes are the imperfection; the muted palette is the acceptance. The warm stones, sage greens, and dusty roses reference natural materials and patina.

- **Architectural concrete + brass** -- Modern architecture that pairs raw concrete forms with warm brass fixtures. The charcoal borders are the concrete; the sage shadows are the brass. The combination of raw structure and warm accent creates sophistication.

---

## NuxtUI 4 Configuration Hint

```typescript
// In app.config.ts or nuxt.config.ts
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'emerald',   // Closest Tailwind family to sage
      secondary: 'rose',     // Dusty rose family
      neutral: 'stone'       // Warm neutral base
    }
  }
})
```

Note: The exact sage, dusty rose, and brass colors require custom Tailwind color definitions since they don't map perfectly to default Tailwind palettes. The custom palette values should be defined in `tailwind.config.ts` or as CSS custom properties.

### Custom Tailwind Colors Required

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        sage: {
          100: '#e8eeea',
          200: '#c5d5cb',
          400: '#7c9a84',
          500: '#63806b',
          600: '#4d6653',
          700: '#3a4e3f'
        },
        'dusty-rose': {
          100: '#f2e4e6',
          300: '#d4a0a8',
          400: '#c4818b',
          500: '#a8636d',
          600: '#8c4a54'
        },
        brass: {
          200: '#eedcb5',
          400: '#c4a265',
          500: '#a68745'
        }
      }
    }
  }
}
```

### Key Custom CSS Required

```css
/* Refined Brutalist shadow utilities */
.shadow-refined { box-shadow: 5px 5px 0 0 #7c9a84; }
.shadow-refined-sm { box-shadow: 3px 3px 0 0 #7c9a84; }
.shadow-refined-hover { box-shadow: 1px 1px 0 0 #7c9a84; }
.shadow-refined-rose { box-shadow: 3px 3px 0 0 #c4818b; }
.shadow-refined-lg { box-shadow: 6px 6px 0 0 #7c9a84; }

/* Dark mode shadows -- darker sage, not inverted */
.dark .shadow-refined { box-shadow: 5px 5px 0 0 #3a4e3f; }
.dark .shadow-refined-sm { box-shadow: 3px 3px 0 0 #3a4e3f; }
.dark .shadow-refined-hover { box-shadow: 1px 1px 0 0 #3a4e3f; }
.dark .shadow-refined-rose { box-shadow: 3px 3px 0 0 #8c4a54; }
.dark .shadow-refined-lg { box-shadow: 6px 6px 0 0 #3a4e3f; }

/* Asymmetric shape classes (unchanged from original) */
.shape-slash { border-radius: 0 24px 0 24px; }
.shape-tab { border-radius: 16px 16px 0 0; }
.shape-pill-left { border-radius: 9999px 4px 4px 9999px; }
.shape-pill-right { border-radius: 4px 9999px 9999px 4px; }
.shape-notch-tl { border-radius: 24px 0 0 0; }
.shape-bottom-heavy { border-radius: 0 0 16px 16px; }

/* Refined button press animation */
.btn-refined {
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.btn-refined:hover {
  transform: translate(2px, 2px);
}
.btn-refined:active {
  transform: translate(3px, 3px);
  box-shadow: 0 0 0 0 transparent !important;
}
```
