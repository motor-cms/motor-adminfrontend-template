# Gradient Flow Theme

> Gradients become the primary design language -- not as decoration, but as structure. Every surface that would normally be a flat color gets a subtle-to-bold gradient instead. Sidebar, buttons, badges, borders, focus rings, table headers -- all flowing with color. The effect is liquid, luminous, and modern. Think: Apple's iOS icon gradients applied to an entire admin panel, Stripe's blue-to-indigo trust signals, Vercel's text gradients. Never 2008 Web 2.0 glossy -- always restrained, purposeful, and optically smooth.

---

## Color Palette

### Design Philosophy

Flat color is comfortable. Gradients are risky -- they can go gaudy in a heartbeat. The Gradient Flow theme succeeds by treating gradients the way a good architect treats lighting: **every gradient has a reason, a direction, and a stopping point.** We define three gradient families (primary, secondary, warm) plus a neutral base system. Gradients flow in consistent directions (left-to-right for horizontal elements, top-to-bottom for vertical ones), creating a unified sense of movement across the interface. Color stops are carefully chosen so transitions feel smooth, never banded.

### Gradient Families

#### Primary Gradient: Indigo to Violet

The workhorse gradient. Used on the sidebar, primary buttons, active states, and key accent elements. The indigo-to-violet shift reads as confident, tech-forward, and trustworthy. The color distance is short enough to feel cohesive, long enough to register as a gradient.

| Token                | Hex       | Role                         |
|----------------------|-----------|------------------------------|
| indigo-start         | #4f46e5   | Gradient start (indigo-600)  |
| indigo-mid           | #6366f1   | Optional midpoint (indigo-500)|
| violet-end           | #8b5cf6   | Gradient end (violet-500)    |
| indigo-dark-start    | #3730a3   | Dark mode start (indigo-800) |
| violet-dark-end      | #6d28d9   | Dark mode end (violet-700)   |

**CSS:**
```css
--gradient-primary: linear-gradient(135deg, #4f46e5, #8b5cf6);
--gradient-primary-hover: linear-gradient(135deg, #4338ca, #7c3aed);
--gradient-primary-vertical: linear-gradient(180deg, #4f46e5, #8b5cf6);
```

#### Secondary Gradient: Teal to Cyan

Used for secondary actions, info states, badges, and highlights. The cool teal-to-cyan feels refreshing and complementary to the warm violet primary without competing for attention.

| Token                | Hex       | Role                         |
|----------------------|-----------|------------------------------|
| teal-start           | #0d9488   | Gradient start (teal-600)    |
| cyan-end             | #06b6d4   | Gradient end (cyan-500)      |
| teal-dark-start      | #0f766e   | Dark mode start (teal-700)   |
| cyan-dark-end        | #0891b2   | Dark mode end (cyan-600)     |

**CSS:**
```css
--gradient-secondary: linear-gradient(135deg, #0d9488, #06b6d4);
--gradient-secondary-hover: linear-gradient(135deg, #0f766e, #0891b2);
```

#### Warm Gradient: Rose to Orange

Used sparingly for destructive actions, error states, notifications, and attention-grabbing moments. The warm temperature contrasts with the cool primary/secondary gradients, making it immediately noticeable without feeling alarming.

| Token                | Hex       | Role                         |
|----------------------|-----------|------------------------------|
| rose-start           | #e11d48   | Gradient start (rose-600)    |
| orange-end           | #f97316   | Gradient end (orange-500)    |
| rose-dark-start      | #be123c   | Dark mode start (rose-700)   |
| orange-dark-end      | #ea580c   | Dark mode end (orange-600)   |

**CSS:**
```css
--gradient-warm: linear-gradient(135deg, #e11d48, #f97316);
--gradient-warm-hover: linear-gradient(135deg, #be123c, #ea580c);
```

#### Subtle Gradient: Whisper-soft for backgrounds

Ultra-low-contrast gradients for card backgrounds, hover states, and areas that need just a touch of depth without drawing attention. These are almost invisible -- a 2-3% lightness shift that registers subconsciously.

**CSS:**
```css
/* Light mode */
--gradient-subtle: linear-gradient(135deg, #f8fafc, #f1f5f9);
--gradient-subtle-warm: linear-gradient(135deg, #faf5ff, #f0f9ff);
--gradient-subtle-card: linear-gradient(180deg, #ffffff, #f8fafc);

/* Dark mode */
--gradient-subtle-dark: linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%);
--gradient-subtle-warm-dark: linear-gradient(135deg, #1e1b4b, #164e63);
--gradient-subtle-card-dark: linear-gradient(180deg, #1e293b, #0f172a);
```

### Flat Colors (Non-Gradient)

Not everything gets a gradient. Text, borders, and small UI elements use flat colors for clarity and readability.

| Token            | Light Mode   | Dark Mode    | Usage                                  |
|------------------|-------------|-------------|----------------------------------------|
| text-primary     | #0f172a     | #f1f5f9     | Headings, primary text (slate-900/100) |
| text-secondary   | #64748b     | #94a3b8     | Body text, descriptions (slate-500/400)|
| text-muted       | #94a3b8     | #64748b     | Placeholders, captions (slate-400/500) |
| surface-page     | #f8fafc     | #020617     | Page background (slate-50/950)         |
| surface-card     | #ffffff     | #0f172a     | Card background (white/slate-900)      |
| surface-elevated | #f1f5f9     | #1e293b     | Sidebar, elevated surfaces (slate-100/800)|
| border-default   | #e2e8f0     | #334155     | Default borders (slate-200/700)        |
| border-strong    | #cbd5e1     | #475569     | Emphasized borders (slate-300/600)     |

### Semantic Colors (Gradient-Enhanced)

| Purpose   | Gradient                                           | Flat Fallback | Usage                          |
|-----------|----------------------------------------------------|---------------|--------------------------------|
| Success   | `linear-gradient(135deg, #059669, #10b981)`        | #10b981       | Success badges, confirmations  |
| Warning   | `linear-gradient(135deg, #d97706, #f59e0b)`        | #f59e0b       | Warning badges, alerts         |
| Error     | `linear-gradient(135deg, #e11d48, #f97316)`        | #e11d48       | Error states, destructive      |
| Info      | `linear-gradient(135deg, #0d9488, #06b6d4)`        | #06b6d4       | Info badges, tooltips          |

---

## Gradient Definitions

### Complete Gradient System (CSS Custom Properties)

```css
:root {
  /* === Primary: Indigo to Violet === */
  --gradient-primary: linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%);
  --gradient-primary-hover: linear-gradient(135deg, #4338ca 0%, #7c3aed 100%);
  --gradient-primary-active: linear-gradient(135deg, #3730a3 0%, #6d28d9 100%);
  --gradient-primary-vertical: linear-gradient(180deg, #4f46e5 0%, #8b5cf6 100%);
  --gradient-primary-text: linear-gradient(135deg, #6366f1 0%, #a78bfa 100%);

  /* === Secondary: Teal to Cyan === */
  --gradient-secondary: linear-gradient(135deg, #0d9488 0%, #06b6d4 100%);
  --gradient-secondary-hover: linear-gradient(135deg, #0f766e 0%, #0891b2 100%);

  /* === Warm: Rose to Orange === */
  --gradient-warm: linear-gradient(135deg, #e11d48 0%, #f97316 100%);
  --gradient-warm-hover: linear-gradient(135deg, #be123c 0%, #ea580c 100%);

  /* === Subtle: Near-transparent shifts === */
  --gradient-subtle: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  --gradient-subtle-warm: linear-gradient(135deg, #faf5ff 0%, #f0f9ff 100%);
  --gradient-subtle-card: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);

  /* === Semantic === */
  --gradient-success: linear-gradient(135deg, #059669 0%, #10b981 100%);
  --gradient-warning: linear-gradient(135deg, #d97706 0%, #f59e0b 100%);
  --gradient-error: linear-gradient(135deg, #e11d48 0%, #f97316 100%);
  --gradient-info: linear-gradient(135deg, #0d9488 0%, #06b6d4 100%);

  /* === Border Gradients (used with background-clip trick) === */
  --gradient-border-primary: linear-gradient(135deg, #4f46e5, #8b5cf6);
  --gradient-border-secondary: linear-gradient(135deg, #0d9488, #06b6d4);
  --gradient-border-warm: linear-gradient(135deg, #e11d48, #f97316);
  --gradient-border-subtle: linear-gradient(135deg, #c7d2fe, #ddd6fe);

  /* === Mesh / Aurora (page background accents) === */
  --gradient-aurora:
    radial-gradient(ellipse at 20% 0%, rgba(99,102,241,0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 0%, rgba(139,92,246,0.10) 0%, transparent 50%),
    radial-gradient(ellipse at 60% 100%, rgba(6,182,212,0.08) 0%, transparent 50%);
}

/* Dark mode overrides -- more saturated, deeper */
.dark {
  --gradient-primary: linear-gradient(135deg, #3730a3 0%, #6d28d9 100%);
  --gradient-primary-hover: linear-gradient(135deg, #312e81 0%, #5b21b6 100%);
  --gradient-primary-active: linear-gradient(135deg, #312e81 0%, #4c1d95 100%);
  --gradient-primary-vertical: linear-gradient(180deg, #3730a3 0%, #6d28d9 100%);
  --gradient-primary-text: linear-gradient(135deg, #818cf8 0%, #c4b5fd 100%);

  --gradient-secondary: linear-gradient(135deg, #0f766e 0%, #0891b2 100%);
  --gradient-secondary-hover: linear-gradient(135deg, #115e59 0%, #0e7490 100%);

  --gradient-warm: linear-gradient(135deg, #be123c 0%, #ea580c 100%);
  --gradient-warm-hover: linear-gradient(135deg, #9f1239 0%, #c2410c 100%);

  --gradient-subtle: linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%);
  --gradient-subtle-warm: linear-gradient(135deg, #1e1b4b 0%, #164e63 100%);
  --gradient-subtle-card: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);

  --gradient-aurora:
    radial-gradient(ellipse at 20% 0%, rgba(99,102,241,0.20) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 0%, rgba(139,92,246,0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 60% 100%, rgba(6,182,212,0.12) 0%, transparent 50%);
}
```

### Direction Convention

| Element Orientation | Gradient Direction | CSS Direction     | Rationale                              |
|--------------------|--------------------|-------------------|----------------------------------------|
| Horizontal bar     | Left to Right      | `to right` / `90deg` | Follows reading direction            |
| Vertical bar       | Top to Bottom      | `to bottom` / `180deg` | Follows gravity / scroll direction  |
| Diagonal accent    | Top-Left to Bottom-Right | `135deg`    | Default for buttons, cards, badges     |
| Radial accent      | Center outward     | `radial-gradient` | For aurora/mesh backgrounds            |

---

## Typography

### Font Pairing: Plus Jakarta Sans (Headings) + Inter (Body)

**Plus Jakarta Sans** brings geometric confidence with friendly rounded terminals -- a perfect match for the smooth, flowing aesthetic of gradients. Its slightly wider letterforms give headings presence without aggression. **Inter** is the gold standard for UI body text: engineered for pixel-perfect screen clarity at every size, with optical sizing that adjusts weight and spacing automatically. The pairing feels modern, approachable, and premium.

**Heading Font: Plus Jakarta Sans** (Google Fonts)
- Weights: **700 (Bold)** for page titles and section headers, **600 (SemiBold)** for card headers and nav items
- Character: Geometric, rounded, confident. The soft terminals echo the smooth color transitions of gradients.
- Tracking: Slightly tight on headings (-0.02em to -0.03em) for a polished, editorial feel

**Body Font: Inter** (Google Fonts)
- Weights: **400 (Regular)** for body text, **500 (Medium)** for labels, emphasis, and table headers
- Features: Optical sizing (`font-optical-sizing: auto`), tabular numbers (`font-variant-numeric: tabular-nums`) for data
- Character: Neutral, precise, universally legible. Lets the gradient colors be the personality.

**Monospace: JetBrains Mono** (Google Fonts)
- Weight: 400 (Regular)
- Used for: code snippets, IDs in tables, technical data
- Character: The ligatures and large x-height keep it readable in small UI contexts

### Google Fonts Import

```
https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500&family=JetBrains+Mono:wght@400&family=Plus+Jakarta+Sans:wght@600;700&display=swap
```

### Type Scale

| Element               | Font              | Weight | Size (rem) | Size (px) | Tracking  | Notes                                |
|-----------------------|-------------------|--------|-----------|-----------|-----------|--------------------------------------|
| Page title (h1)       | Plus Jakarta Sans | 700    | 2.25      | 36px      | -0.03em   | Bold, commanding, not oversized      |
| Section title (h2)    | Plus Jakarta Sans | 700    | 1.5       | 24px      | -0.02em   | Clear hierarchy                      |
| Card header (h3)      | Plus Jakarta Sans | 600    | 1.25      | 20px      | -0.01em   | SemiBold for lighter touch           |
| Stat number           | Plus Jakarta Sans | 700    | 3.0       | 48px      | -0.04em   | Large KPIs, gradient text candidate  |
| Body text             | Inter             | 400    | 1.0       | 16px      | 0         | Default readable size                |
| Label / overline      | Inter             | 500    | 0.8125    | 13px      | 0.05em    | UPPERCASE, letterspaced              |
| Small / caption       | Inter             | 400    | 0.75      | 12px      | 0.01em    | Metadata, timestamps                 |
| Table header          | Inter             | 500    | 0.875     | 14px      | 0.04em    | UPPERCASE in gradient header row     |
| Table data            | Inter             | 400    | 0.875     | 14px      | 0         | Tabular nums for alignment           |
| Code / ID             | JetBrains Mono    | 400    | 0.8125    | 13px      | 0         | Monospace for technical data         |
| Nav item (sidebar)    | Plus Jakarta Sans | 600    | 0.9375    | 15px      | 0         | SemiBold, moderate size              |
| Button text           | Inter             | 500    | 0.875     | 14px      | 0.02em    | Medium weight, slightly spaced       |

### Gradient Text Effect (For Hero Elements Only)

Apply gradient color to large stat numbers, page titles, or hero text using `background-clip: text`:

```css
.gradient-text {
  background: var(--gradient-primary-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

Use sparingly -- only on isolated hero numbers or the page title. Never on body text or navigation.

---

## Shape Language

### Design Philosophy

Gradients pair best with generous border-radius. Sharp corners interrupt the flow; soft corners continue it. The Gradient Flow theme uses consistently rounded shapes -- not fully circular (that reads as playful/bubbly), but substantially rounded at `12px`-`16px` for most elements. This creates the "liquid" quality that makes gradients feel intentional rather than applied.

### Border Radius System

| Token            | Value    | Tailwind          | Used On                                    |
|------------------|----------|-------------------|--------------------------------------------|
| radius-sm        | 8px      | `rounded-lg`      | Badges, small chips, input addons          |
| radius-md        | 12px     | `rounded-xl`      | Buttons, inputs, table cells               |
| radius-lg        | 16px     | `rounded-2xl`     | Cards, modals, dropdowns, sidebar items    |
| radius-xl        | 24px     | `rounded-3xl`     | Hero cards, stat cards, feature highlights |
| radius-full      | 9999px   | `rounded-full`    | Avatars, status dots, pill badges          |

### Border Treatment

Borders in Gradient Flow are minimal -- the gradients themselves define boundaries. When borders are needed, they are thin (1px) and use the subtle gradient border technique for accent elements.

#### Gradient Border Technique (CSS `background-clip`)

```css
.gradient-border {
  position: relative;
  background: var(--surface-card);
  border-radius: 16px;
  padding: 1px; /* This becomes the border width */
}

.gradient-border::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: var(--gradient-border-primary);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
```

Alternative using `background` with `background-clip`:
```css
.gradient-border-alt {
  border: 2px solid transparent;
  border-radius: 16px;
  background:
    linear-gradient(var(--surface-card), var(--surface-card)) padding-box,
    var(--gradient-border-primary) border-box;
}
```

| Element              | Border Treatment                                    |
|----------------------|-----------------------------------------------------|
| Cards                | 1px solid `border-default` OR gradient border accent|
| Featured cards       | Gradient border (primary)                           |
| Buttons (primary)    | None (gradient fill is sufficient)                  |
| Buttons (secondary)  | 1px solid `border-strong`                           |
| Inputs               | 1px solid `border-default`, gradient on focus       |
| Sidebar              | No border; gradient background defines the edge     |
| Table                | 1px solid `border-default` row separators           |

### Shadow System

Shadows are soft, diffused, and tinted with the gradient's end color. No hard offset shadows -- everything feels elevated and luminous.

| Token            | CSS                                                   | Usage                              |
|------------------|-------------------------------------------------------|------------------------------------|
| shadow-sm        | `0 1px 3px rgba(79,70,229,0.08)`                     | Buttons rest state, small cards    |
| shadow-md        | `0 4px 12px rgba(79,70,229,0.10)`                    | Cards, dropdowns                   |
| shadow-lg        | `0 8px 24px rgba(79,70,229,0.12)`                    | Modals, elevated panels            |
| shadow-xl        | `0 12px 40px rgba(79,70,229,0.15)`                   | Active modals, hero cards          |
| shadow-glow      | `0 0 20px rgba(99,102,241,0.25)`                     | Focused inputs, active sidebar     |

Dark mode shadows: increase opacity by 50% and deepen the tint color.

---

## Component Styling

### Sidebar

The sidebar is the most prominent gradient surface in the interface -- a vertical gradient that anchors the entire layout.

**Light Mode:**
```css
.sidebar {
  background: linear-gradient(180deg, #4f46e5 0%, #7c3aed 60%, #8b5cf6 100%);
  color: #ffffff;
  width: 260px;
}

.sidebar-nav-item {
  color: rgba(255, 255, 255, 0.75);
  border-radius: 12px;
  padding: 10px 16px;
  transition: all 0.2s ease;
}

.sidebar-nav-item:hover {
  background: rgba(255, 255, 255, 0.10);
  color: #ffffff;
}

.sidebar-nav-item.active {
  background: rgba(255, 255, 255, 0.18);
  color: #ffffff;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.08);
}
```

**Dark Mode:**
```css
.dark .sidebar {
  background: linear-gradient(180deg, #1e1b4b 0%, #2e1065 60%, #1e1b4b 100%);
}
```

- Section labels: Inter Medium 13px, `rgba(255,255,255,0.45)`, UPPERCASE, letterspaced
- Active indicator: White left border (`border-l-2 border-white`) + translucent white background
- Logo area: white or light text on the gradient, generous top padding (24px)
- Bottom user area: separated by `rgba(255,255,255,0.12)` horizontal rule

### Buttons

All buttons use gradient backgrounds instead of flat colors. The gradient shifts slightly on hover (darker stops) and further on active (darkest stops). This creates a physical depth metaphor -- pressing the button moves it "deeper" into the gradient.

**Primary Button:**
```css
.btn-primary {
  background: var(--gradient-primary);
  color: #ffffff;
  border: none;
  border-radius: 12px;
  padding: 10px 24px;
  font: 500 14px/1 'Inter', sans-serif;
  letter-spacing: 0.02em;
  box-shadow: 0 2px 8px rgba(79,70,229,0.25);
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: var(--gradient-primary-hover);
  box-shadow: 0 4px 16px rgba(79,70,229,0.35);
  transform: translateY(-1px);
}

.btn-primary:active {
  background: var(--gradient-primary-active);
  box-shadow: 0 1px 4px rgba(79,70,229,0.20);
  transform: translateY(0);
}
```

**Secondary Button:**
```css
.btn-secondary {
  background: var(--surface-card);
  color: var(--text-primary);
  border: 1px solid var(--border-strong);
  border-radius: 12px;
  padding: 10px 24px;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  border-color: transparent;
  background:
    linear-gradient(var(--surface-card), var(--surface-card)) padding-box,
    var(--gradient-border-primary) border-box;
  box-shadow: 0 2px 8px rgba(79,70,229,0.10);
}
```

**Destructive Button:**
```css
.btn-destructive {
  background: var(--gradient-warm);
  color: #ffffff;
  border: none;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(225,29,72,0.25);
}

.btn-destructive:hover {
  background: var(--gradient-warm-hover);
  box-shadow: 0 4px 16px rgba(225,29,72,0.35);
  transform: translateY(-1px);
}
```

**Ghost Button:**
```css
.btn-ghost {
  background: transparent;
  color: var(--text-secondary);
  border: none;
  border-radius: 12px;
}

.btn-ghost:hover {
  background: var(--gradient-subtle);
}
```

### Cards

Cards use subtle gradient backgrounds and optional gradient borders for featured/highlighted states.

**Standard Card:**
```css
.card {
  background: var(--gradient-subtle-card);
  border: 1px solid var(--border-default);
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(79,70,229,0.06);
  padding: 24px;
  transition: all 0.25s ease;
}

.card:hover {
  box-shadow: 0 8px 24px rgba(79,70,229,0.10);
  transform: translateY(-2px);
}
```

**Featured/Accent Card (Gradient Border):**
```css
.card-featured {
  border: 2px solid transparent;
  border-radius: 16px;
  background:
    linear-gradient(var(--surface-card), var(--surface-card)) padding-box,
    var(--gradient-border-primary) border-box;
  box-shadow: 0 4px 16px rgba(79,70,229,0.10);
}
```

**Stat Card (Gradient Header):**
```css
.stat-card {
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border-default);
}

.stat-card-header {
  background: var(--gradient-primary);
  color: #ffffff;
  padding: 16px 24px;
}

.stat-card-body {
  background: var(--surface-card);
  padding: 24px;
}

.stat-card-number {
  font: 700 48px/1 'Plus Jakarta Sans', sans-serif;
  background: var(--gradient-primary-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Badges / Tags

Badges get small, punchy gradients that replace flat background colors. The gradient makes each badge feel like a polished gem.

```css
.badge-primary {
  background: var(--gradient-primary);
  color: #ffffff;
  border-radius: 8px;
  padding: 4px 10px;
  font: 500 12px/1 'Inter', sans-serif;
  letter-spacing: 0.02em;
}

.badge-secondary {
  background: var(--gradient-secondary);
  color: #ffffff;
  border-radius: 8px;
  padding: 4px 10px;
}

.badge-success {
  background: var(--gradient-success);
  color: #ffffff;
  border-radius: 8px;
  padding: 4px 10px;
}

.badge-warning {
  background: var(--gradient-warning);
  color: #ffffff;
  border-radius: 8px;
  padding: 4px 10px;
}

.badge-error {
  background: var(--gradient-warm);
  color: #ffffff;
  border-radius: 8px;
  padding: 4px 10px;
}

/* Subtle variant for less emphasis */
.badge-subtle {
  background: var(--gradient-subtle-warm);
  color: var(--text-primary);
  border: 1px solid var(--border-default);
  border-radius: 8px;
  padding: 4px 10px;
}
```

### Form Inputs

Inputs stay neutral at rest but reveal gradient accents on focus -- a subtle reward for interaction.

```css
.input {
  background: var(--surface-card);
  border: 1px solid var(--border-default);
  border-radius: 12px;
  padding: 10px 16px;
  font: 400 16px/1.5 'Inter', sans-serif;
  color: var(--text-primary);
  transition: all 0.2s ease;
}

.input::placeholder {
  color: var(--text-muted);
}

/* Gradient focus ring using box-shadow */
.input:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow:
    0 0 0 3px rgba(99,102,241,0.15),
    0 0 0 1px rgba(99,102,241,0.30);
}

/* Alternative: full gradient focus ring */
.input-gradient-focus:focus {
  outline: none;
  border-color: transparent;
  background:
    linear-gradient(var(--surface-card), var(--surface-card)) padding-box,
    var(--gradient-border-primary) border-box;
  box-shadow: 0 0 0 3px rgba(99,102,241,0.12);
}

/* Error state */
.input-error {
  border-color: #e11d48;
  box-shadow: 0 0 0 3px rgba(225,29,72,0.12);
}

/* Error with gradient */
.input-error:focus {
  border-color: transparent;
  background:
    linear-gradient(var(--surface-card), var(--surface-card)) padding-box,
    var(--gradient-border-warm) border-box;
  box-shadow: 0 0 0 3px rgba(225,29,72,0.12);
}
```

- Labels: Inter Medium 13px, UPPERCASE, letterspaced, `text-secondary`
- Select dropdowns: Same border-radius (12px), gradient focus ring, dropdown panel rounded-2xl
- Checkbox/Radio: `border-radius: 4px` (checkbox) / `50%` (radio), gradient fill when checked (`background: var(--gradient-primary)`)

### Tables / Data Grids

Tables get a gradient header row -- the most distinctive table treatment in the theme.

```css
.table {
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border-default);
}

.table-header {
  background: var(--gradient-primary);
  color: #ffffff;
}

.table-header th {
  font: 500 14px/1 'Inter', sans-serif;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 14px 16px;
}

.table-row {
  border-bottom: 1px solid var(--border-default);
  transition: background 0.15s ease;
}

.table-row:hover {
  background: var(--gradient-subtle-warm);
}

.table-row td {
  padding: 12px 16px;
  font: 400 14px/1.5 'Inter', sans-serif;
}

/* Alternating rows with ultra-subtle gradient */
.table-row:nth-child(even) {
  background: var(--gradient-subtle);
}

.table-row:nth-child(even):hover {
  background: var(--gradient-subtle-warm);
}
```

### Progress Bars

Gradient progress bars are a natural fit -- the color transition can represent progress itself.

```css
.progress-track {
  background: var(--border-default);
  border-radius: 9999px;
  height: 8px;
  overflow: hidden;
}

.progress-fill {
  background: var(--gradient-primary);
  border-radius: 9999px;
  height: 100%;
  transition: width 0.5s ease;
}

/* Animated shimmer on progress */
.progress-fill-animated {
  background: var(--gradient-primary);
  background-size: 200% 100%;
  animation: shimmer 2s linear infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

### Notifications / Toasts

```css
.toast {
  background: var(--surface-card);
  border: 1px solid var(--border-default);
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(79,70,229,0.12);
  overflow: hidden;
}

/* Gradient left accent bar */
.toast-success {
  border-left: 3px solid transparent;
  border-image: var(--gradient-success) 1;
}

/* Alternative: top gradient bar */
.toast-top-bar::before {
  content: '';
  display: block;
  height: 3px;
  background: var(--gradient-primary);
}
```

### Modals / Dialogs

```css
.modal {
  background: var(--surface-card);
  border-radius: 24px;
  box-shadow: 0 12px 40px rgba(79,70,229,0.15);
  border: 1px solid var(--border-default);
}

.modal-header {
  padding: 24px 24px 16px;
  border-bottom: 1px solid var(--border-default);
}

/* Optional: gradient top accent on modal */
.modal-gradient-accent::before {
  content: '';
  display: block;
  height: 4px;
  background: var(--gradient-primary);
  border-radius: 24px 24px 0 0;
}

.modal-overlay {
  background: rgba(15,23,42,0.60);
  backdrop-filter: blur(8px);
}
```

### Pagination

```css
.pagination-btn {
  border-radius: 12px;
  padding: 8px 14px;
  border: 1px solid var(--border-default);
  transition: all 0.2s ease;
}

.pagination-btn.active {
  background: var(--gradient-primary);
  color: #ffffff;
  border-color: transparent;
  box-shadow: 0 2px 8px rgba(79,70,229,0.25);
}

.pagination-btn:hover:not(.active) {
  background: var(--gradient-subtle-warm);
  border-color: var(--border-strong);
}
```

---

## Mesh / Aurora Background

The page background gets a subtle mesh gradient overlay -- multiple overlapping radial gradients that create a soft, organic, aurora-like atmosphere. This is the ambient gradient layer that ties the entire theme together.

### Implementation

```css
.page-background {
  background-color: var(--surface-page);
  position: relative;
}

.page-background::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background:
    radial-gradient(ellipse 80% 50% at 20% -10%, rgba(99,102,241,0.12) 0%, transparent 60%),
    radial-gradient(ellipse 60% 40% at 80% 10%, rgba(139,92,246,0.08) 0%, transparent 55%),
    radial-gradient(ellipse 70% 50% at 50% 100%, rgba(6,182,212,0.06) 0%, transparent 50%);
}

/* Dark mode: more vibrant aurora */
.dark .page-background::before {
  background:
    radial-gradient(ellipse 80% 50% at 20% -10%, rgba(99,102,241,0.18) 0%, transparent 60%),
    radial-gradient(ellipse 60% 40% at 80% 10%, rgba(139,92,246,0.14) 0%, transparent 55%),
    radial-gradient(ellipse 70% 50% at 50% 100%, rgba(6,182,212,0.10) 0%, transparent 50%);
}
```

### Sidebar Aurora (Alternative)

If the sidebar uses a gradient background, an additional aurora layer can add depth:

```css
.sidebar::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(ellipse at 30% 0%, rgba(255,255,255,0.08) 0%, transparent 50%),
    radial-gradient(ellipse at 70% 100%, rgba(6,182,212,0.12) 0%, transparent 50%);
}
```

### Performance Note

The mesh gradient uses `position: fixed` and `pointer-events: none` to avoid layout thrashing. No animations on the mesh layer -- it is static. If an animated aurora is desired, use `will-change: transform` and animate `transform: rotate()` on individual radial-gradient layers via pseudo-elements, but this adds GPU cost. Default: static.

---

## Light and Dark Mode

### Light Mode

- **Softer, pastel-leaning gradients**: The primary gradient uses full-saturation indigo/violet stops. The subtle gradients are barely-there shifts between slate-50 and slate-100.
- **Aurora layer**: Very low opacity (6-12%) -- a gentle wash of color on the page background.
- **Shadows**: Tinted with `rgba(79,70,229, 0.06-0.15)` -- violet-tinted shadows that feel cohesive with the gradient system.
- **Text**: Dark text on light backgrounds. Gradient text only on hero stats/numbers.
- **Buttons**: Full-saturation gradients on primary actions. Clean, high contrast.
- **Cards**: White-to-slate-50 subtle vertical gradient. Barely perceptible but adds life.

### Dark Mode

- **More saturated, deeper gradients**: Stops shift to the -700/-800 range. The reduced lightness allows more saturation without feeling garish.
- **Aurora layer**: Higher opacity (10-18%) -- gradients glow more in darkness, like actual aurora borealis.
- **Shadows**: Deeper tint, higher opacity. `rgba(79,70,229, 0.12-0.25)`.
- **Text**: Light text. Gradient text uses lighter stops (indigo-400 to violet-300) for readability.
- **Buttons**: Slightly desaturated gradient stops to avoid being blinding. The darker hover/active states provide clear state differentiation.
- **Cards**: `slate-900` to `slate-950` subtle gradient. Just enough to prevent that flat, dead look dark UIs can have.
- **Sidebar**: Deep indigo background (`#1e1b4b`) with a barely-visible gradient shift to violet-950. The aurora overlay layer glows softly.
- **Gradient borders**: Slightly brighter than light mode to maintain visibility against dark backgrounds.

### Mode Transition

```css
/* Smooth theme transition (prevents harsh flash) */
* {
  transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

/* Exclude gradient transitions (they don't animate well) */
[class*="btn-"], .badge, .sidebar, .table-header, .progress-fill {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
```

---

## Spacing & Layout

| Aspect               | Value       | Tailwind     | Notes                                    |
|----------------------|-------------|-------------|------------------------------------------|
| Page padding         | 24px        | `p-6`       | Moderate, content-focused                |
| Card gap             | 24px        | `gap-6`     | Comfortable grid spacing                 |
| Card inner padding   | 24px        | `p-6`       | Generous but not wasteful                |
| Section gap          | 40px        | `mt-10`     | Clear section separation                 |
| Sidebar width        | 260px       | `w-[260px]` | Standard admin width                     |
| Content max-width    | 1400px      | `max-w-7xl` | Wide content area                        |
| Grid columns         | 12-column   | --          | Standard responsive grid                 |
| Border radius        | 12-16px     | `rounded-xl` to `rounded-2xl` | Generous, flowing              |

---

## Mood & Inspiration

### Visual Identity Keywords

Flowing, luminous, liquid, modern, premium, smooth, vibrant-yet-restrained, tech-forward, polished, immersive

### What Makes This Theme Different

| Aspect                   | Typical Admin Theme         | Gradient Flow                           |
|--------------------------|-----------------------------|-----------------------------------------|
| **Sidebar**              | Flat dark background        | Vertical gradient (indigo to violet)    |
| **Buttons**              | Flat color                  | Diagonal gradient + gradient hover      |
| **Card borders**         | Solid color or none         | Gradient border (background-clip)       |
| **Badges**               | Flat pastel or solid        | Small, punchy gradient fills            |
| **Table header**         | Flat grey or dark           | Full gradient bar                       |
| **Focus rings**          | Solid color outline         | Gradient border + soft glow             |
| **Page background**      | Flat white/grey             | Mesh aurora gradient overlay            |
| **Progress bars**        | Flat color fill             | Gradient fill with optional shimmer     |
| **Shadows**              | Neutral grey                | Gradient-tinted (violet wash)           |
| **Dark mode**            | Desaturated, flat           | More vibrant gradients, glowing aurora  |

### Inspiration References

- **Apple (iOS/macOS)** -- App icon gradients, the Weather app's dynamic gradients, macOS Sonoma wallpapers. Apple proves gradients can be premium and not gimmicky when the color stops are carefully chosen and the transitions are smooth. Their approach: bold gradients on small surfaces (icons, buttons), subtle gradients on large surfaces (backgrounds).

- **Stripe** -- The subtle blue-to-indigo gradient on their hero sections, the gradient meshes on their product pages. Stripe taught the web industry that gradients convey trust and sophistication when the color palette stays cool and the transitions stay smooth. Their key technique: gradients that flow in one consistent direction.

- **Vercel** -- Text gradient effects, the subtle dark gradient backgrounds on their dashboard. Vercel keeps gradients minimal but impactful -- a single gradient text heading can anchor an entire page. Their key lesson: gradient text should be rare and large to be effective.

- **Linear** -- The app uses subtle gradient accents throughout a clean interface -- gradient issue labels, gradient progress indicators, gradient hover states. Linear proves that a gradient-heavy interface can still feel professional and fast.

- **Raycast** -- Their command palette and extension icons use thoughtful gradients on dark backgrounds. The combination of gradient accent + dark UI + generous border-radius is exactly the Gradient Flow dark mode aesthetic.

---

## NuxtUI 4 Configuration Hint

```typescript
// In app.config.ts
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'indigo',
      secondary: 'teal',
      neutral: 'slate'
    }
  }
})
```

### Tailwind CSS Classes (Reference)

```html
<!-- Primary gradient button -->
<button class="bg-gradient-to-br from-indigo-600 to-violet-500 text-white rounded-xl px-6 py-2.5
               hover:from-indigo-700 hover:to-violet-600 shadow-md shadow-indigo-500/20
               transition-all hover:-translate-y-0.5">
  Save Changes
</button>

<!-- Gradient border card -->
<div class="rounded-2xl border-2 border-transparent bg-gradient-to-br from-indigo-500 to-violet-500 p-[1px]">
  <div class="rounded-[14px] bg-white dark:bg-slate-900 p-6">
    Card content
  </div>
</div>

<!-- Gradient badge -->
<span class="bg-gradient-to-r from-teal-600 to-cyan-500 text-white text-xs font-medium px-2.5 py-1 rounded-lg">
  Active
</span>

<!-- Gradient sidebar -->
<aside class="bg-gradient-to-b from-indigo-600 via-violet-600 to-violet-500 text-white w-[260px]">
  <!-- nav items -->
</aside>

<!-- Gradient table header -->
<thead class="bg-gradient-to-r from-indigo-600 to-violet-500 text-white">
  <tr>...</tr>
</thead>

<!-- Aurora page background -->
<div class="relative bg-slate-50 dark:bg-slate-950">
  <div class="fixed inset-0 pointer-events-none
              bg-[radial-gradient(ellipse_80%_50%_at_20%_-10%,rgba(99,102,241,0.12),transparent_60%),
                   radial-gradient(ellipse_60%_40%_at_80%_10%,rgba(139,92,246,0.08),transparent_55%),
                   radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(6,182,212,0.06),transparent_50%)]">
  </div>
  <!-- page content with relative z-10 -->
</div>

<!-- Gradient text (hero stat) -->
<span class="bg-gradient-to-r from-indigo-500 to-violet-400 bg-clip-text text-transparent text-5xl font-bold">
  2,847
</span>

<!-- Gradient focus input -->
<input class="rounded-xl border border-slate-200 px-4 py-2.5
              focus:border-transparent focus:ring-2 focus:ring-indigo-500/20
              focus:[background:linear-gradient(white,white)_padding-box,linear-gradient(135deg,#4f46e5,#8b5cf6)_border-box]
              dark:bg-slate-900 dark:border-slate-700" />
```

### Custom CSS Required

```css
/* Gradient Flow theme utilities */

/* Gradient text helper */
.text-gradient {
  background: linear-gradient(135deg, #6366f1, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.dark .text-gradient {
  background: linear-gradient(135deg, #818cf8, #c4b5fd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Gradient border helper */
.border-gradient {
  border: 2px solid transparent;
  background:
    linear-gradient(var(--surface-card), var(--surface-card)) padding-box,
    linear-gradient(135deg, #4f46e5, #8b5cf6) border-box;
}

/* Gradient glow shadow */
.shadow-glow-primary {
  box-shadow: 0 0 20px rgba(99,102,241,0.25);
}

.shadow-glow-secondary {
  box-shadow: 0 0 20px rgba(13,148,136,0.25);
}

/* Shimmer animation for progress bars */
@keyframes gradient-shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.animate-shimmer {
  background-size: 200% 100%;
  animation: gradient-shimmer 2s linear infinite;
}

/* Smooth mode transitions */
.theme-transition * {
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}
```
