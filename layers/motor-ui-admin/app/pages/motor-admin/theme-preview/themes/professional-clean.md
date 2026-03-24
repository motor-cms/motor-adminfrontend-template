# Professional & Clean Theme

**Inspiration:** Stripe Dashboard, Linear App, Vercel Dashboard
**Mood:** Trustworthy, focused, calm authority, distraction-free

---

## Color Palette

### Primary: Indigo (Tailwind `indigo`)

The primary accent color draws from Stripe's signature blue-violet and Linear's indigo. Indigo conveys professionalism, trust, and calm authority -- ideal for an admin panel where users manage critical data.

| Token             | Tailwind Class   | Hex       | Usage                                  |
|-------------------|------------------|-----------|----------------------------------------|
| primary-50        | `indigo-50`      | `#eef2ff` | Hover backgrounds, subtle highlights   |
| primary-100       | `indigo-100`     | `#e0e7ff` | Selected row backgrounds, badges       |
| primary-200       | `indigo-200`     | `#c7d2fe` | Focus rings, light borders             |
| primary-300       | `indigo-300`     | `#a5b4fc` | Active states, progress indicators     |
| primary-400       | `indigo-400`     | `#818cf8` | Hover on primary buttons               |
| **primary-500**   | **`indigo-500`** | **`#6366f1`** | **Primary buttons, links, active nav** |
| primary-600       | `indigo-600`     | `#4f46e5` | Primary button pressed state           |
| primary-700       | `indigo-700`     | `#4338ca` | Dark mode primary accent               |
| primary-800       | `indigo-800`     | `#3730a3` | Dark backgrounds with primary tint     |
| primary-900       | `indigo-900`     | `#312e81` | Very dark primary accents              |
| primary-950       | `indigo-950`     | `#1e1b4b` | Darkest primary, text on light bg      |

**Nuxt UI config:** `primary: 'indigo'`

### Neutral: Slate (Tailwind `slate`)

Slate provides a cool, blue-tinted neutral scale that pairs naturally with indigo. It avoids the warmth of stone/zinc and the sterility of pure gray, landing in a professional sweet spot reminiscent of Stripe's interface.

| Token             | Tailwind Class  | Hex       | Usage                                  |
|-------------------|-----------------|-----------|----------------------------------------|
| neutral-50        | `slate-50`      | `#f8fafc` | Page background (light mode)           |
| neutral-100       | `slate-100`     | `#f1f5f9` | Card backgrounds, sidebar bg           |
| neutral-200       | `slate-200`     | `#e2e8f0` | Borders, dividers, input borders       |
| neutral-300       | `slate-300`     | `#cbd5e1` | Disabled states, placeholder text bg   |
| neutral-400       | `slate-400`     | `#94a3b8` | Placeholder text, muted icons          |
| neutral-500       | `slate-500`     | `#64748b` | Secondary text, labels                 |
| neutral-600       | `slate-600`     | `#475569` | Body text (light mode)                 |
| neutral-700       | `slate-700`     | `#334155` | Heading text (light mode)              |
| neutral-800       | `slate-800`     | `#1e293b` | Sidebar dark bg, card bg (dark mode)   |
| neutral-900       | `slate-900`     | `#0f172a` | Primary text, page bg (dark mode)      |
| neutral-950       | `slate-950`     | `#020617` | Deepest dark mode background           |

**Nuxt UI config:** `neutral: 'slate'`

### Semantic Colors

| Purpose    | Color Family    | Shade | Hex       | Usage                     |
|------------|-----------------|-------|-----------|---------------------------|
| Success    | `emerald`       | 500   | `#10b981` | Success toasts, checkmarks |
| Warning    | `amber`         | 500   | `#f59e0b` | Warning alerts, badges     |
| Error      | `red`           | 500   | `#ef4444` | Error states, destructive  |
| Info       | `sky`           | 500   | `#0ea5e9` | Info banners, tooltips     |

---

## Font Pairing

### Heading Font: Manrope

- **Type:** Geometric sans-serif, variable weight (200-800)
- **Why:** Manrope has a distinctive geometric precision with subtly rounded terminals that make headings feel modern and approachable without sacrificing professionalism. Its wider letter-spacing at heavier weights creates confident, authoritative headings.
- **Weights used:** 600 (semibold for h3-h6), 700 (bold for h1-h2)

### Body Font: Inter

- **Type:** Humanist sans-serif, variable weight (100-900)
- **Why:** Inter was designed specifically for computer screens with features like a tall x-height, open apertures, and careful optical adjustments that maximize readability at any size. It is the industry standard for SaaS dashboards and admin UIs -- used by Linear, Vercel, and countless modern applications. It provides low-friction reading in data-heavy interfaces.
- **Weights used:** 400 (regular body), 500 (medium for labels/table headers), 600 (semibold for emphasis)

### Why They Work Together

Manrope's geometric structure contrasts nicely with Inter's humanist warmth. Manrope creates visual hierarchy through its distinctive letterforms in headings, while Inter maintains maximum readability in body content, tables, and form fields. Both fonts share similar x-heights and proportions, creating a harmonious rhythm without jarring transitions.

### Google Fonts Import

```
https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100..900;1,100..900&family=Manrope:wght@200..800&display=swap
```

### CSS Application

```css
:root {
  --font-heading: 'Manrope', ui-sans-serif, system-ui, sans-serif;
  --font-body: 'Inter', ui-sans-serif, system-ui, sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
}

body {
  font-family: var(--font-body);
}
```

---

## Component Styling Notes

### Buttons

- **Border radius:** `rounded-lg` (8px) -- soft but professional, avoids the playfulness of full rounding
- **Primary button:** Solid indigo-500 background, white text, indigo-600 on hover
- **Secondary button:** Slate-100 background, slate-700 text, subtle border
- **Ghost button:** Transparent background, indigo-600 text, slate-50 hover background
- **Padding:** `px-4 py-2` for default, `px-3 py-1.5` for small
- **Font weight:** Medium (500) -- not bold, keeping the clean aesthetic
- **Transition:** Smooth 150ms color/background transitions

### Cards

- **Border radius:** `rounded-xl` (12px)
- **Background:** White (light mode) / slate-800 (dark mode)
- **Border:** 1px slate-200 (light) / slate-700 (dark) -- subtle, not heavy
- **Shadow:** `shadow-sm` by default, `shadow-md` on hover for interactive cards
- **Padding:** `p-6` standard, `p-4` for compact cards

### Sidebar

- **Background:** White with a right border of slate-200 (light mode) or slate-900 with slate-700 border (dark mode)
- **Width:** 260px (comfortable for navigation labels)
- **Active item:** Indigo-50 background with indigo-600 text and a 2px left border in indigo-500
- **Hover item:** Slate-50 background
- **Item padding:** `px-3 py-2`
- **Section labels:** Uppercase, slate-400, text-xs, font-medium, tracking-wide
- **Icons:** 20px, slate-400 default, indigo-500 when active

### Tables / Data Grids

- **Header:** Slate-50 background, slate-500 text, text-xs uppercase, font-medium
- **Row borders:** Slate-100 horizontal dividers only (no vertical lines)
- **Row hover:** Slate-50 background
- **Selected row:** Indigo-50 background
- **Cell padding:** `px-4 py-3`
- **Stripe effect:** None -- clean white rows with subtle dividers

### Forms / Inputs

- **Border radius:** `rounded-lg` (8px)
- **Border:** Slate-300, transitions to indigo-500 on focus
- **Focus ring:** 2px indigo-200 ring
- **Label:** Slate-700, text-sm, font-medium, mb-1
- **Placeholder:** Slate-400
- **Background:** White (light) / slate-800 (dark)
- **Error state:** Red-500 border, red-50 background tint, red-600 message text

### Spacing Philosophy

- **Generous whitespace:** Let content breathe -- err on the side of more space
- **Consistent rhythm:** Use 4px base unit. Common spacing: 8px, 12px, 16px, 24px, 32px, 48px
- **Section separation:** 32px between major sections, 16px between related items
- **Card margins:** 24px gap in grid layouts

### Typography Scale

| Element      | Size       | Weight  | Font     | Color       |
|-------------|------------|---------|----------|-------------|
| Page title  | text-2xl   | 700     | Manrope  | slate-900   |
| Section heading | text-lg | 600     | Manrope  | slate-800   |
| Card title  | text-base  | 600     | Manrope  | slate-800   |
| Body text   | text-sm    | 400     | Inter    | slate-600   |
| Label       | text-sm    | 500     | Inter    | slate-700   |
| Caption     | text-xs    | 400     | Inter    | slate-500   |
| Badge       | text-xs    | 500     | Inter    | varies      |

---

## Mood & Inspiration

### 1. Stripe Dashboard

Stripe's dashboard epitomizes the professional-clean aesthetic: deep navy-tinted neutrals (`#0A2540`), a bright violet accent (`#635BFF`), and generous whitespace. Their accessible color system ensures every combination passes WCAG AA guidelines. The interface feels premium and trustworthy -- exactly the confidence an admin panel should inspire.

### 2. Linear App

Linear's interface demonstrates how a near-monochromatic palette with a single strong accent (indigo) creates a focused, productivity-oriented environment. Their use of Inter font, subtle shadows, and minimal borders achieves a clean look that doesn't sacrifice information density. The sidebar navigation with muted icons and clear active states is a direct reference for our admin panel.

### 3. Vercel Dashboard

Vercel's dashboard shows how slate neutrals and minimal color create an interface that stays out of the way while remaining visually polished. Their approach to data tables (clean dividers, no zebra striping), card layouts (subtle borders, consistent spacing), and navigation (restrained use of active indicators) embodies the "professional & clean" direction.

### Overall Feel

- **Clean, not sterile** -- Warmth from the blue-tinted slate neutrals
- **Focused, not boring** -- Indigo accent provides energy without distraction
- **Professional, not corporate** -- Modern typography and generous spacing feel contemporary
- **Calm, not passive** -- Strategic use of color draws attention to what matters

---

## Nuxt UI 4.x Configuration Summary

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  ui: {
    colors: {
      primary: 'indigo',
      neutral: 'slate'
    }
  }
})
```

### Key Nuxt UI Component Overrides

```typescript
// app.config.ts
export default defineAppConfig({
  ui: {
    button: {
      rounded: 'rounded-lg',
      default: {
        size: 'md'
      }
    },
    card: {
      rounded: 'rounded-xl',
      shadow: 'shadow-sm'
    },
    input: {
      rounded: 'rounded-lg'
    }
  }
})
```
