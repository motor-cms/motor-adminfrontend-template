# Geometric Minimal Theme

**Concept:** A Bauhaus/Suprematism-inspired admin panel that treats UI as abstract art. Every element is either a perfect circle/pill OR a razor-sharp rectangle — nothing in between. Oversized typography commands attention. A strict primary color palette (modernized Mondrian) creates bold visual hierarchy against vast white space. This is the admin panel Malevich would have built.

**Mood:** Confident, intellectual, striking. Like walking into a gallery where every wall is a perfectly composed grid.

---

## 1. Color Palette

A modernized Bauhaus/Mondrian palette: three bold primaries + black + white. Colors are used sparingly as accents against dominant white space. Black provides structure. Color = meaning.

### Primary Palette

| Name | Hex | Tailwind | Usage |
|------|-----|----------|-------|
| **Bauhaus Red** | `#D62828` | `red-600` (custom) | Destructive actions, critical alerts, active states |
| **Bauhaus Blue** | `#003DA5` | `blue-800` (custom) | Primary actions, selected states, links |
| **Bauhaus Yellow** | `#F5B700` | `yellow-500` (custom) | Warnings, highlights, accent badges |
| **Pure Black** | `#0A0A0A` | `neutral-950` | Text, borders, structural lines, sidebar |
| **Pure White** | `#FFFFFF` | `white` | Canvas, backgrounds, breathing room |

### Extended Neutrals (used sparingly)

| Name | Hex | Tailwind | Usage |
|------|-----|----------|-------|
| **Concrete** | `#F5F5F0` | `stone-100` (custom) | Subtle card backgrounds, table stripes |
| **Graphite** | `#404040` | `neutral-700` | Secondary text, muted labels |
| **Silver Line** | `#E0E0E0` | `neutral-300` | Dividers, borders (thin only) |

### Color Rules
- **80% white/off-white**, 15% black, 5% color accents
- Color is ONLY used for meaning: blue = action, red = danger, yellow = attention
- Never use color decoratively — every colored element must communicate something
- Hover states intensify color (darker shade), never change hue
- Dark mode: invert canvas to `#0A0A0A`, text to `#F5F5F0`, keep accent colors identical

### Tailwind v4 CSS Variables

```css
@theme {
  --color-bauhaus-red: #D62828;
  --color-bauhaus-blue: #003DA5;
  --color-bauhaus-yellow: #F5B700;
  --color-canvas: #FFFFFF;
  --color-ink: #0A0A0A;
  --color-concrete: #F5F5F0;
  --color-graphite: #404040;
  --color-silver-line: #E0E0E0;
}
```

---

## 2. Font Pairing

### Heading: Syne (Google Fonts)
- **Why:** Syne is an experimental geometric sans-serif that gets wider as it gets bolder — a dramatic, architectural effect perfect for Bauhaus aesthetics. At ExtraBold 800, it has an imposing, almost brutalist presence. Designed for the Synesthesie art center in Paris.
- **Weights used:** Bold 700 (subheadings), ExtraBold 800 (page titles, hero numbers)
- **Character:** Geometric, widening, commanding. Looks stunning at 48px+.

### Body: Plus Jakarta Sans (Google Fonts)
- **Why:** A modern geometric sans-serif with slightly taller x-height, open counters, and balanced spacing. Clean and highly legible at all sizes. Its geometric DNA harmonizes with Syne without competing.
- **Weights used:** Regular 400 (body), Medium 500 (labels, emphasis), SemiBold 600 (table headers, nav)
- **Character:** Precise, friendly, professional. Perfectly legible at 16px body size.

### Mono: Space Mono (Google Fonts)
- **Why:** Geometric monospace with a techy character. Used sparingly for data, code, and numeric displays.
- **Weight:** Regular 400

### Google Fonts URL
```
https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;1,400&family=Space+Mono&display=swap
```

### Type Scale (Desktop)

| Element | Font | Weight | Size | Line Height | Letter Spacing | CSS |
|---------|------|--------|------|-------------|----------------|-----|
| **Page Title (H1)** | Syne | 800 | 48px (3rem) | 1.1 | -0.02em | `font-family: 'Syne'; font-weight: 800; font-size: 3rem; line-height: 1.1; letter-spacing: -0.02em;` |
| **Section Title (H2)** | Syne | 800 | 36px (2.25rem) | 1.15 | -0.01em | `font-family: 'Syne'; font-weight: 800; font-size: 2.25rem; line-height: 1.15; letter-spacing: -0.01em;` |
| **Card Title (H3)** | Syne | 700 | 24px (1.5rem) | 1.2 | 0 | `font-family: 'Syne'; font-weight: 700; font-size: 1.5rem; line-height: 1.2;` |
| **Subsection (H4)** | Plus Jakarta Sans | 600 | 18px (1.125rem) | 1.3 | 0.01em | `font-family: 'Plus Jakarta Sans'; font-weight: 600; font-size: 1.125rem;` |
| **Body** | Plus Jakarta Sans | 400 | 16px (1rem) | 1.6 | 0 | `font-family: 'Plus Jakarta Sans'; font-weight: 400; font-size: 1rem; line-height: 1.6;` |
| **Label / Caption** | Plus Jakarta Sans | 500 | 13px (0.8125rem) | 1.4 | 0.04em | `text-transform: uppercase; letter-spacing: 0.04em;` |
| **Data / Numbers** | Space Mono | 400 | 14px (0.875rem) | 1.5 | 0 | `font-family: 'Space Mono'; font-variant-numeric: tabular-nums;` |
| **Hero Number** | Syne | 800 | 72px (4.5rem) | 1.0 | -0.03em | `font-family: 'Syne'; font-weight: 800; font-size: 4.5rem;` |

---

## 3. Shape Language

**The Core Rule:** Everything is either **fully round** (border-radius: 9999px) or **completely sharp** (border-radius: 0). There is NO middle ground. No `rounded-md`, no `rounded-lg`. This binary creates visual tension and makes the interface feel like a composed geometric artwork.

### Shape Assignment Table

| Element | Shape | Border Radius | Reasoning |
|---------|-------|---------------|-----------|
| **Buttons (primary)** | Pill | `border-radius: 9999px` | Pill shapes feel active, clickable, dynamic |
| **Buttons (secondary/ghost)** | Sharp rectangle | `border-radius: 0` | Creates contrast with primary buttons |
| **Cards** | Sharp rectangle | `border-radius: 0` | Cards are structural containers — architectural |
| **Input fields** | Sharp rectangle | `border-radius: 0` | Clean, precise, form-as-grid |
| **Select dropdowns** | Sharp rectangle | `border-radius: 0` | Consistent with input fields |
| **Dropdown menus** | Sharp rectangle | `border-radius: 0` | Architectural containers |
| **Badges / Tags** | Pill | `border-radius: 9999px` | Small, floating elements are round |
| **Avatars** | Circle | `border-radius: 9999px` | Always perfect circles |
| **Tooltips** | Sharp rectangle | `border-radius: 0` | Structural, informational |
| **Modals / Dialogs** | Sharp rectangle | `border-radius: 0` | Large containers are always sharp |
| **Toggle switches** | Pill track + circle knob | Track: `9999px`, Knob: `50%` | Organic, tactile elements are round |
| **Progress bars** | Pill | `border-radius: 9999px` | Linear flow, round ends |
| **Sidebar** | Sharp rectangle | `border-radius: 0` | Structural, architectural |
| **Navigation pills** | Pill | `border-radius: 9999px` | Active nav items are pill-shaped |
| **Stat cards** | Sharp rectangle | `border-radius: 0` | Grid blocks, Mondrian-like |
| **Notification dot** | Circle | `border-radius: 50%` | Tiny, round, orbital |
| **Checkbox** | Sharp square | `border-radius: 0` | Geometric, precise |
| **Tab bar** | Sharp underline (no radius) | N/A | Structural, no rounding needed |

### Tailwind Classes

```
/* Round elements */
.geo-round { @apply rounded-full; }   /* border-radius: 9999px */

/* Sharp elements */
.geo-sharp { @apply rounded-none; }    /* border-radius: 0 */

/* No other border-radius values exist in this theme */
```

---

## 4. Component Styling

All components are oversized: 1.5-2x normal sizing. Buttons are big enough to feel confident. Inputs are tall enough to breathe. White space is generous. Everything feels deliberately placed, not crammed.

### Buttons

```css
/* Primary Button — Pill, oversized, bold */
.btn-primary {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 600;
  font-size: 1rem;          /* 16px — larger than typical 14px */
  padding: 16px 40px;       /* 1.5x normal padding */
  border-radius: 9999px;    /* Full pill */
  background: #003DA5;      /* Bauhaus Blue */
  color: #FFFFFF;
  border: none;
  text-transform: none;
  letter-spacing: 0;
  transition: background 0.15s ease;
  min-height: 56px;         /* Oversized touch target */
}
.btn-primary:hover {
  background: #002B75;      /* Darker blue */
}

/* Secondary Button — Sharp rectangle, outlined */
.btn-secondary {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  padding: 16px 40px;
  border-radius: 0;         /* Razor sharp */
  background: transparent;
  color: #0A0A0A;
  border: 2px solid #0A0A0A;
  min-height: 56px;
  transition: all 0.15s ease;
}
.btn-secondary:hover {
  background: #0A0A0A;
  color: #FFFFFF;
}

/* Danger Button — Pill, red */
.btn-danger {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  padding: 16px 40px;
  border-radius: 9999px;
  background: #D62828;
  color: #FFFFFF;
  border: none;
  min-height: 56px;
}

/* Small Button — still oversized by normal standards */
.btn-sm {
  font-size: 0.875rem;
  padding: 10px 28px;
  min-height: 44px;
}

/* Icon Button — perfect circle */
.btn-icon {
  width: 56px;
  height: 56px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
```

**Tailwind shorthand:**
```
<!-- Primary pill button -->
<button class="rounded-full bg-bauhaus-blue text-white font-semibold text-base px-10 py-4 min-h-14 hover:bg-blue-900 transition-colors">
  Create User
</button>

<!-- Secondary sharp button -->
<button class="rounded-none border-2 border-ink text-ink font-semibold text-base px-10 py-4 min-h-14 hover:bg-ink hover:text-white transition-colors">
  Cancel
</button>
```

### Cards

```css
/* Base Card — sharp, generous padding, subtle border */
.card {
  border-radius: 0;
  border: 1px solid #E0E0E0;
  background: #FFFFFF;
  padding: 32px;            /* 2rem — generous internal space */
  position: relative;
}

/* Stat Card — black background, white text, oversized number */
.card-stat {
  border-radius: 0;
  background: #0A0A0A;
  color: #FFFFFF;
  padding: 32px;
  border: none;
}
.card-stat .stat-number {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 4.5rem;        /* 72px hero number */
  line-height: 1;
  letter-spacing: -0.03em;
}
.card-stat .stat-label {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 500;
  font-size: 0.8125rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #999;
  margin-top: 8px;
}

/* Colored accent card — thin color top border */
.card-accent-blue {
  border-radius: 0;
  border: 1px solid #E0E0E0;
  border-top: 4px solid #003DA5;
  padding: 32px;
}
.card-accent-red {
  border-top-color: #D62828;
}
.card-accent-yellow {
  border-top-color: #F5B700;
}
```

**Tailwind shorthand:**
```html
<!-- Sharp card -->
<div class="rounded-none border border-silver-line bg-white p-8">
  ...
</div>

<!-- Stat card with hero number -->
<div class="rounded-none bg-ink text-white p-8">
  <span class="font-syne font-extrabold text-7xl leading-none tracking-tight">2,847</span>
  <p class="text-sm font-medium uppercase tracking-wider text-neutral-400 mt-2">Total Users</p>
</div>
```

### Input Fields

```css
/* Text Input — sharp, tall, thick bottom border */
.input {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  padding: 16px 20px;       /* Tall and spacious */
  border-radius: 0;
  border: 2px solid #E0E0E0;
  background: #FFFFFF;
  min-height: 56px;
  transition: border-color 0.15s ease;
}
.input:focus {
  border-color: #003DA5;
  outline: none;
  box-shadow: none;          /* No glow — just crisp border change */
}
.input::placeholder {
  color: #999;
  font-weight: 400;
}

/* Input Label — uppercase, small, spaced */
.input-label {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 500;
  font-size: 0.8125rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #404040;
  margin-bottom: 8px;
  display: block;
}
```

**Tailwind shorthand:**
```html
<label class="block text-xs font-medium uppercase tracking-wider text-graphite mb-2">Email Address</label>
<input class="rounded-none border-2 border-silver-line bg-white px-5 py-4 min-h-14 text-base w-full focus:border-bauhaus-blue focus:outline-none transition-colors" />
```

### Badges / Tags

```css
/* Badge — pill, compact, bold color */
.badge {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 600;
  font-size: 0.75rem;
  padding: 6px 16px;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  display: inline-flex;
  align-items: center;
}
.badge-blue {
  background: #003DA5;
  color: #FFFFFF;
}
.badge-red {
  background: #D62828;
  color: #FFFFFF;
}
.badge-yellow {
  background: #F5B700;
  color: #0A0A0A;
}
.badge-outline {
  background: transparent;
  border: 2px solid #0A0A0A;
  color: #0A0A0A;
}
```

**Tailwind shorthand:**
```html
<span class="rounded-full bg-bauhaus-blue text-white text-xs font-semibold uppercase tracking-wider px-4 py-1.5">Active</span>
<span class="rounded-full bg-bauhaus-red text-white text-xs font-semibold uppercase tracking-wider px-4 py-1.5">Blocked</span>
```

### Avatars

```css
/* Avatar — always a perfect circle */
.avatar-lg {
  width: 64px;
  height: 64px;
  border-radius: 9999px;
  object-fit: cover;
  border: 3px solid #0A0A0A;
}
.avatar-md {
  width: 48px;
  height: 48px;
  border-radius: 9999px;
  border: 2px solid #0A0A0A;
}
.avatar-sm {
  width: 32px;
  height: 32px;
  border-radius: 9999px;
  border: 2px solid #0A0A0A;
}
/* Avatar fallback (initials) */
.avatar-fallback {
  background: #003DA5;
  color: #FFFFFF;
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### Table

```css
/* Table — sharp, structured, Mondrian grid */
.table {
  width: 100%;
  border-collapse: collapse;
  border: 2px solid #0A0A0A;
}
.table th {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 600;
  font-size: 0.8125rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 16px 20px;
  text-align: left;
  background: #0A0A0A;
  color: #FFFFFF;
  border-bottom: 2px solid #0A0A0A;
}
.table td {
  padding: 16px 20px;        /* Generous row height */
  border-bottom: 1px solid #E0E0E0;
  font-size: 0.9375rem;
}
.table tr:hover td {
  background: #F5F5F0;
}
```

### Sidebar Navigation

```css
/* Sidebar — black, sharp, dramatic */
.sidebar {
  background: #0A0A0A;
  color: #FFFFFF;
  width: 280px;
  min-height: 100vh;
  padding: 32px 0;
  border-right: none;
}
.sidebar-brand {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  padding: 0 24px 32px;
  border-bottom: 2px solid #333;
}
.sidebar-nav-item {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 500;
  font-size: 0.9375rem;
  padding: 14px 24px;
  color: #999;
  transition: all 0.15s ease;
  border-radius: 0;
}
.sidebar-nav-item:hover {
  color: #FFFFFF;
  background: rgba(255, 255, 255, 0.05);
}
.sidebar-nav-item.active {
  color: #FFFFFF;
  background: #003DA5;
  font-weight: 600;
}

/* Nav group label */
.sidebar-group-label {
  font-size: 0.6875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #666;
  padding: 24px 24px 8px;
}
```

### Dividers / Separators

```css
/* Bold structural divider — Mondrian-style line */
.divider-bold {
  height: 3px;
  background: #0A0A0A;
  border: none;
  margin: 32px 0;
}

/* Subtle divider */
.divider-subtle {
  height: 1px;
  background: #E0E0E0;
  border: none;
  margin: 24px 0;
}

/* Colored divider accent */
.divider-blue { background: #003DA5; height: 3px; }
.divider-red { background: #D62828; height: 3px; }
.divider-yellow { background: #F5B700; height: 3px; }
```

### Modal / Dialog

```css
/* Modal — sharp, large, dramatic */
.modal-overlay {
  background: rgba(10, 10, 10, 0.7);
}
.modal {
  border-radius: 0;
  background: #FFFFFF;
  border: 2px solid #0A0A0A;
  padding: 40px;
  max-width: 560px;
  width: 100%;
  box-shadow: 8px 8px 0 #0A0A0A;  /* Hard geometric shadow */
}
.modal-title {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  margin-bottom: 16px;
}
```

### Toast / Notification

```css
/* Toast — sharp rectangle, bold left border */
.toast {
  border-radius: 0;
  border: 1px solid #E0E0E0;
  border-left: 4px solid #003DA5;
  padding: 20px 24px;
  background: #FFFFFF;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.08);
  min-width: 360px;
}
.toast-error { border-left-color: #D62828; }
.toast-warning { border-left-color: #F5B700; }
.toast-success { border-left-color: #003DA5; }
```

---

## 5. Spacing & Layout

### Grid System
- **Bento-style grid** inspired by Mondrian compositions
- Base unit: **8px**
- Standard gap between cards/sections: **24px** (3 units)
- Page padding: **32px** (4 units)
- Sidebar width: **280px**

### Content Widths
- Max content width: **1200px**
- Form max width: **640px**
- Table container: full width with horizontal scroll

### White Space Rules
- Sections separated by **48-64px** vertical space
- Card internal padding: **32px** minimum
- Between form fields: **24px**
- Page title to first content: **32px**

---

## 6. Interaction & Motion

### Transitions
- **Duration:** 150ms (fast, decisive — no lingering)
- **Easing:** `ease` for color, `ease-out` for transforms
- **What animates:** Background color, border color, opacity, transform
- **What does NOT animate:** Border-radius (it never changes), box-shadow (it's architectural)

### Hover States
| Element | Hover Effect |
|---------|-------------|
| Primary button | Background darkens one shade |
| Secondary button | Fills with black, text inverts to white |
| Card | Subtle background shift to `#F5F5F0` |
| Table row | Background shifts to `#F5F5F0` |
| Sidebar item | Text brightens to white, faint bg overlay |
| Badge | No hover change (badges are status, not actions) |
| Link | Underline appears (no color change) |

### Focus States
```css
/* Focus ring — blue, sharp, offset */
*:focus-visible {
  outline: 3px solid #003DA5;
  outline-offset: 2px;
}
```

---

## 7. Iconography

- **Style:** Line icons, 2px stroke, geometric/minimal
- **Recommended set:** Lucide Icons (already used by NuxtUI) or Phosphor Icons
- **Size:** 20px standard, 24px in navigation, 16px inline
- **Color:** Inherits text color (`currentColor`)
- **Rule:** Icons are never decorative — every icon must have a functional purpose

---

## 8. Signature Patterns

### The Mondrian Grid Dashboard
Stat cards arranged in a CSS Grid with varying spans, creating an asymmetric Mondrian-like composition:
```css
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 24px;
}
/* Hero stat takes 2 columns */
.stat-hero { grid-column: span 2; grid-row: span 2; }
/* Accent block — pure color, no content */
.grid-accent-block {
  background: #F5B700;
  grid-column: span 1;
  min-height: 120px;
}
```

### The Bauhaus Header
Page header with oversized title, thin uppercase subtitle, and a bold colored divider:
```html
<div class="mb-12">
  <p class="text-xs font-medium uppercase tracking-wider text-graphite mb-2">Administration</p>
  <h1 class="font-syne font-extrabold text-5xl tracking-tight text-ink">Users</h1>
  <div class="h-1 w-16 bg-bauhaus-blue mt-4"></div>
</div>
```

### The Geometric Empty State
A large circle (yellow) with a sharp-edged message box:
```html
<div class="flex flex-col items-center py-20">
  <div class="w-32 h-32 rounded-full bg-bauhaus-yellow flex items-center justify-center mb-8">
    <Icon name="lucide:inbox" class="w-12 h-12 text-ink" />
  </div>
  <h3 class="font-syne font-bold text-2xl text-ink mb-2">No results</h3>
  <p class="text-graphite text-base">Try adjusting your search or filters.</p>
</div>
```

### The Hard Shadow Card (for emphasis)
A card with a hard offset shadow, evoking neobrutalist Bauhaus energy:
```css
.card-elevated {
  border-radius: 0;
  border: 2px solid #0A0A0A;
  background: #FFFFFF;
  padding: 32px;
  box-shadow: 6px 6px 0 #0A0A0A;
}
```

---

## 9. Design Inspirations

| Reference | What to borrow |
|-----------|---------------|
| **Piet Mondrian** — Composition with Red, Blue and Yellow | Grid layout with asymmetric colored blocks, thick black dividers |
| **Kazimir Malevich** — Suprematist compositions | Bold geometric shapes floating in white space, circle + square tension |
| **Bauhaus school** (Gropius, Moholy-Nagy, Albers) | Primary color palette, geometric typography, form = function |
| **Dieter Rams / Braun** | Oversized controls, generous white space, deliberate minimalism |
| **Figma "Neu Bauhaus" design system** | Fibonacci-based grid, parametric circle-and-line compositions |
| **Linear.app** | Sharp corners on cards, clean monochrome with rare color accents |
| **Vercel Dashboard** | Bold typography hierarchy, generous white space, dark/light contrast |
| **Neobrutalism trend** | Hard offset shadows, thick borders, unapologetic boldness |

---

## 10. Implementation Notes for NuxtUI 4.x

### NuxtUI Component Overrides via `app.config.ts`

```typescript
export default defineAppConfig({
  ui: {
    // Global: kill all default border-radius
    button: {
      slots: {
        base: 'rounded-none' // Override per-variant below
      },
      variants: {
        variant: {
          solid: 'rounded-full',   // Primary pills
          outline: 'rounded-none', // Secondary sharp
          ghost: 'rounded-none',
          soft: 'rounded-full'
        }
      }
    },
    card: {
      slots: {
        root: 'rounded-none border border-silver-line'
      }
    },
    input: {
      slots: {
        root: 'rounded-none',
        base: 'rounded-none min-h-14 border-2'
      }
    },
    badge: {
      slots: {
        base: 'rounded-full uppercase tracking-wider'
      }
    },
    modal: {
      slots: {
        content: 'rounded-none border-2 border-ink shadow-[6px_6px_0_#0A0A0A]'
      }
    },
    avatar: {
      slots: {
        root: 'rounded-full border-2 border-ink'
      }
    },
    table: {
      slots: {
        root: 'rounded-none border-2 border-ink'
      }
    }
  }
})
```

### Tailwind v4 CSS Setup (`main.css`)

```css
@import "tailwindcss";
@import "@nuxt/ui";

@theme {
  --font-syne: 'Syne', sans-serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;
  --font-mono: 'Space Mono', monospace;

  --color-bauhaus-red: #D62828;
  --color-bauhaus-blue: #003DA5;
  --color-bauhaus-yellow: #F5B700;
  --color-ink: #0A0A0A;
  --color-canvas: #FFFFFF;
  --color-concrete: #F5F5F0;
  --color-graphite: #404040;
  --color-silver-line: #E0E0E0;
}
```

---

## Summary: The Geometric Minimal Manifesto

1. **Two shapes only:** Circle/pill (9999px) or sharp rectangle (0px). Nothing else.
2. **Three colors + black + white:** Bauhaus Red, Blue, Yellow. Color = meaning, never decoration.
3. **Oversized everything:** 56px button height, 48px page titles, 72px hero numbers, 32px card padding.
4. **Syne for drama, Plus Jakarta Sans for clarity.** The heading font gets wider as it gets bolder.
5. **White space is a material.** 80% of the canvas should breathe.
6. **Every element is deliberate.** If it doesn't communicate, it doesn't exist.
7. **Hard shadows, thick borders, bold dividers.** Structure is visible, not hidden.
8. **The grid is the art.** Dashboard layouts are Mondrian compositions.
