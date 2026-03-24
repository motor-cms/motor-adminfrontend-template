# Neon Terminal: Amber Theme Spec

**Theme ID:** `neon-amber`
**Direction:** Dual-mode terminal aesthetic -- warm amber neon in dark mode, warm parchment terminal in light mode. Same sharp-vs-pill shape language, same monospace energy, completely different temperature.
**Vibe:** Dark mode = a retro-futuristic command center bathed in warm amber light, like an old-school oscilloscope or vintage CRT monitor. Light mode = a sunlit engineer's workstation -- cream paper, amber ink, monospace precision. Think Gruvbox meets Warp Terminal meets a brass instrument factory.

---

## 1. Color Palette

### Dark Mode

A near-black void background (matching the original Neon Terminal) but with cyan replaced by warm amber/gold neon accents. The palette evokes vintage amber CRT monitors, old radar screens, and warm industrial lighting.

#### Base / Background Scale (Dark Mode)

| Token             | Hex       | Usage                                      |
|-------------------|-----------|---------------------------------------------|
| `void`            | `#0A0806` | Page background, deepest layer              |
| `surface-0`       | `#12100B` | Card backgrounds, sidebar                   |
| `surface-1`       | `#1A1710` | Elevated cards, dropdowns, modals           |
| `surface-2`       | `#241F16` | Hover states, active sidebar items          |
| `surface-3`       | `#302A1E` | Borders, dividers, subtle separators        |

Note: These backgrounds have a warm brown undertone instead of the cool blue-gray of the original. The void is tinted warm, like looking into the dark interior of a brass machine.

#### Neon Accent Scale (Dark Mode)

| Token             | Hex       | Tailwind       | Usage                                |
|-------------------|-----------|----------------|--------------------------------------|
| `neon-amber`      | `#FFB800` | `amber-400`    | Primary actions, links, focus rings  |
| `neon-amber-muted`| `#C48A00` | `amber-600`    | Secondary text accents, badges       |
| `neon-orange`     | `#FF6B00` | `orange-600`   | Destructive/danger, critical alerts  |
| `neon-green`      | `#39FF14` | `green-400`    | Success states, online indicators    |
| `neon-yellow`     | `#FFE066` | `yellow-200`   | Warnings, pending states             |
| `neon-copper`     | `#E8782A` | `orange-500`   | Info badges, secondary accents       |

#### Text Scale (Dark Mode)

| Token             | Hex       | Usage                                      |
|-------------------|-----------|---------------------------------------------|
| `text-primary`    | `#F0E6D2` | Primary text (warm cream white)             |
| `text-secondary`  | `#A89478` | Secondary text, labels, placeholders        |
| `text-muted`      | `#5C5040` | Disabled text, timestamps                   |
| `text-neon`       | `#FFB800` | Highlighted text, active nav items          |

#### Semantic Colors (Dark Mode)

| Token             | Hex       | Usage                                      |
|-------------------|-----------|---------------------------------------------|
| `success`         | `#39FF14` | Success toasts, completed states            |
| `warning`         | `#FFE066` | Warning toasts, caution states              |
| `error`           | `#FF6B00` | Error toasts, validation failures           |
| `info`            | `#E8782A` | Informational toasts, tips                  |

---

### Light Mode

The terminal aesthetic is preserved through monospace typography, sharp shapes, and structured layout -- not through darkness. The light mode draws inspiration from Gruvbox Light, vintage engineering paper, and warm parchment. Think of it as a well-lit workshop where the terminal is running on a cream-toned display.

#### Base / Background Scale (Light Mode)

| Token             | Hex       | Usage                                      |
|-------------------|-----------|---------------------------------------------|
| `void`            | `#FAF5EA` | Page background, warmest cream              |
| `surface-0`       | `#F3ECDD` | Card backgrounds, sidebar                   |
| `surface-1`       | `#EBE3D0` | Elevated cards, dropdowns, modals           |
| `surface-2`       | `#E2D8C3` | Hover states, active sidebar items          |
| `surface-3`       | `#D5C9B0` | Borders, dividers, subtle separators        |

These are warm, parchment-like tones. Not gray, not blue-white. Every surface has a yellow-cream warmth, like aged paper under warm light.

#### Accent Colors (Light Mode)

| Token             | Hex       | Tailwind       | Usage                                |
|-------------------|-----------|----------------|--------------------------------------|
| `amber-primary`   | `#B07800` | `amber-700`    | Primary actions, links, focus rings  |
| `amber-muted`     | `#8A6000` | `amber-800`    | Secondary text accents, badges       |
| `danger`          | `#C44800` | `orange-700`   | Destructive/danger, critical alerts  |
| `success`         | `#3D7A1C` | `green-700`    | Success states, online indicators    |
| `warning`         | `#A67C00` | `amber-600`    | Warnings, pending states             |
| `info`            | `#9A5B20` | `orange-700`   | Informational toasts, tips           |

Note: In light mode, accent colors are darkened and desaturated compared to dark mode. Neon-bright amber would wash out against cream backgrounds. Instead, we use rich, saturated "ink" tones -- like amber calligraphy ink on parchment.

#### Text Scale (Light Mode)

| Token             | Hex       | Usage                                      |
|-------------------|-----------|---------------------------------------------|
| `text-primary`    | `#2C2416` | Primary text (warm near-black)              |
| `text-secondary`  | `#6B5D48` | Secondary text, labels, placeholders        |
| `text-muted`      | `#A89880` | Disabled text, timestamps                   |
| `text-accent`     | `#B07800` | Highlighted text, active nav items          |

---

### CSS Custom Properties

```css
/* Dark Mode (default) */
:root[data-theme="neon-amber"],
:root[data-theme="neon-amber"] .dark {
  --amber-void: #0A0806;
  --amber-surface-0: #12100B;
  --amber-surface-1: #1A1710;
  --amber-surface-2: #241F16;
  --amber-surface-3: #302A1E;

  --amber-neon: #FFB800;
  --amber-neon-muted: #C48A00;
  --amber-orange: #FF6B00;
  --amber-green: #39FF14;
  --amber-yellow: #FFE066;
  --amber-copper: #E8782A;

  --amber-text-primary: #F0E6D2;
  --amber-text-secondary: #A89478;
  --amber-text-muted: #5C5040;
}

/* Light Mode */
:root[data-theme="neon-amber"].light,
:root[data-theme="neon-amber"] .light {
  --amber-void: #FAF5EA;
  --amber-surface-0: #F3ECDD;
  --amber-surface-1: #EBE3D0;
  --amber-surface-2: #E2D8C3;
  --amber-surface-3: #D5C9B0;

  --amber-neon: #B07800;
  --amber-neon-muted: #8A6000;
  --amber-orange: #C44800;
  --amber-green: #3D7A1C;
  --amber-yellow: #A67C00;
  --amber-copper: #9A5B20;

  --amber-text-primary: #2C2416;
  --amber-text-secondary: #6B5D48;
  --amber-text-muted: #A89880;
}
```

---

## 2. Typography

### Font Pairing

Identical to the original Neon Terminal -- the monospace-first approach is core to the terminal identity and works equally well in both light and dark modes.

**Headings:** JetBrains Mono (monospace, bold weight)
**Body:** IBM Plex Sans (clean, technical sans-serif)
**Code / Badges / Labels:** JetBrains Mono (monospace, regular weight)

### Google Fonts URL

```
https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700;800&display=swap
```

### Type Scale

| Element            | Font             | Size     | Weight | Line Height | Letter Spacing | Notes                                       |
|--------------------|------------------|----------|--------|-------------|----------------|---------------------------------------------|
| Page Title (h1)    | JetBrains Mono   | `40px`   | 800    | 1.1         | `-0.03em`      | UPPERCASE, amber glow (dark) / amber ink (light) |
| Section Title (h2) | JetBrains Mono   | `28px`   | 700    | 1.2         | `-0.02em`      | Title case                                   |
| Card Title (h3)    | JetBrains Mono   | `20px`   | 600    | 1.3         | `-0.01em`      |                                              |
| Body               | IBM Plex Sans    | `15px`   | 400    | 1.6         | `0`            |                                              |
| Body Small         | IBM Plex Sans    | `13px`   | 400    | 1.5         | `0.01em`       |                                              |
| Label              | JetBrains Mono   | `11px`   | 600    | 1.4         | `0.08em`       | UPPERCASE, amber-muted color                 |
| Badge              | JetBrains Mono   | `11px`   | 500    | 1           | `0.05em`       | UPPERCASE                                    |
| Code               | JetBrains Mono   | `13px`   | 400    | 1.5         | `0`            | Inline code snippets                         |
| Nav Item           | JetBrains Mono   | `13px`   | 500    | 1.4         | `0.02em`       | Sidebar navigation                           |

### CSS

```css
/* Dark mode heading with amber neon glow */
.amber-h1-dark {
  font-family: 'JetBrains Mono', monospace;
  font-size: 40px;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: var(--amber-neon);
  text-shadow:
    0 0 7px rgba(255, 184, 0, 0.6),
    0 0 20px rgba(255, 184, 0, 0.3),
    0 0 42px rgba(255, 184, 0, 0.15);
}

/* Light mode heading -- no glow, rich amber ink color */
.amber-h1-light {
  font-family: 'JetBrains Mono', monospace;
  font-size: 40px;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: var(--amber-neon);
  text-shadow: none;
}

.amber-h2 {
  font-family: 'JetBrains Mono', monospace;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--amber-text-primary);
}

.amber-body {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  color: var(--amber-text-primary);
}

.amber-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--amber-neon-muted);
}
```

---

## 3. Shape Language

Identical to the original Neon Terminal. The sharp-vs-pill tension is a core part of the terminal identity that transcends color.

### Border Radius Tokens

| Token              | Value    | Usage                                       |
|--------------------|----------|---------------------------------------------|
| `radius-none`      | `0px`    | Cards, panels, modal containers, tables      |
| `radius-sm`        | `2px`    | Input fields, code blocks                    |
| `radius-pill`      | `9999px` | Buttons, badges, pills, tags, toggles        |
| `radius-circle`    | `50%`    | Avatars, status indicators                   |

### Design Rules

1. **Cards / Panels / Modals:** `border-radius: 0px` -- Hard, sharp corners. Industrial.
2. **Buttons:** `border-radius: 9999px` -- Full pill shape. Futuristic contrast.
3. **Input fields:** `border-radius: 2px` -- Almost sharp, terminal-like.
4. **Badges / Tags:** `border-radius: 9999px` -- Pill-shaped.
5. **Avatars:** `border-radius: 50%` -- Circle.
6. **Dropdown menus:** `border-radius: 0px` -- Sharp to match containers.
7. **Sidebar:** Sharp corners everywhere.

### Corner Cut Effect (Optional Enhancement)

Same chamfered corner cut as the original, works in both modes:

```css
.amber-card-cut {
  clip-path: polygon(
    0 0,
    calc(100% - 16px) 0,
    100% 16px,
    100% 100%,
    16px 100%,
    0 calc(100% - 16px)
  );
}
```

---

## 4. Component Styling

### Buttons

```css
/* ===== DARK MODE ===== */

/* Primary Button - Dark */
.amber-btn-primary-dark {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--amber-void);
  background: var(--amber-neon);
  border: none;
  border-radius: 9999px;
  padding: 10px 28px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow:
    0 0 5px rgba(255, 184, 0, 0.4),
    0 0 20px rgba(255, 184, 0, 0.15);
}

.amber-btn-primary-dark:hover {
  box-shadow:
    0 0 8px rgba(255, 184, 0, 0.6),
    0 0 30px rgba(255, 184, 0, 0.3),
    0 0 60px rgba(255, 184, 0, 0.1);
  transform: translateY(-1px);
}

.amber-btn-primary-dark:active {
  transform: translateY(0);
  box-shadow: 0 0 5px rgba(255, 184, 0, 0.4);
}

/* Ghost / Outline Button - Dark */
.amber-btn-ghost-dark {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--amber-neon);
  background: transparent;
  border: 1px solid var(--amber-surface-3);
  border-radius: 9999px;
  padding: 10px 28px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.amber-btn-ghost-dark:hover {
  border-color: var(--amber-neon);
  box-shadow: 0 0 10px rgba(255, 184, 0, 0.2);
}

/* Danger Button - Dark */
.amber-btn-danger-dark {
  color: var(--amber-void);
  background: var(--amber-orange);
  border-radius: 9999px;
  box-shadow:
    0 0 5px rgba(255, 107, 0, 0.4),
    0 0 20px rgba(255, 107, 0, 0.15);
}

/* ===== LIGHT MODE ===== */

/* Primary Button - Light */
.amber-btn-primary-light {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #FFFDF5;
  background: var(--amber-neon);
  border: none;
  border-radius: 9999px;
  padding: 10px 28px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(176, 120, 0, 0.25);
}

.amber-btn-primary-light:hover {
  box-shadow:
    0 4px 16px rgba(176, 120, 0, 0.3),
    0 1px 4px rgba(176, 120, 0, 0.2);
  transform: translateY(-1px);
}

.amber-btn-primary-light:active {
  transform: translateY(0);
  box-shadow: 0 1px 4px rgba(176, 120, 0, 0.2);
}

/* Ghost / Outline Button - Light */
.amber-btn-ghost-light {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--amber-neon);
  background: transparent;
  border: 1px solid var(--amber-surface-3);
  border-radius: 9999px;
  padding: 10px 28px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.amber-btn-ghost-light:hover {
  border-color: var(--amber-neon);
  background: rgba(176, 120, 0, 0.06);
  box-shadow: 0 1px 6px rgba(176, 120, 0, 0.12);
}

/* Danger Button - Light */
.amber-btn-danger-light {
  color: #FFFDF5;
  background: var(--amber-orange);
  border-radius: 9999px;
  box-shadow: 0 2px 8px rgba(196, 72, 0, 0.2);
}
```

### Input Fields (Terminal Style)

```css
/* ===== DARK MODE ===== */
.amber-input-dark {
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  color: var(--amber-text-primary);
  background: var(--amber-void);
  border: 1px solid var(--amber-surface-3);
  border-radius: 2px;
  padding: 12px 16px;
  transition: all 0.2s ease;
  caret-color: var(--amber-neon);
}

.amber-input-dark::placeholder {
  color: var(--amber-text-muted);
  font-style: italic;
}

.amber-input-dark:focus {
  outline: none;
  border-color: var(--amber-neon);
  box-shadow:
    0 0 0 1px var(--amber-neon),
    0 0 15px rgba(255, 184, 0, 0.15);
}

/* ===== LIGHT MODE ===== */
.amber-input-light {
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  color: var(--amber-text-primary);
  background: var(--amber-void);
  border: 1px solid var(--amber-surface-3);
  border-radius: 2px;
  padding: 12px 16px;
  transition: all 0.2s ease;
  caret-color: var(--amber-neon);
}

.amber-input-light::placeholder {
  color: var(--amber-text-muted);
  font-style: italic;
}

.amber-input-light:focus {
  outline: none;
  border-color: var(--amber-neon);
  box-shadow:
    0 0 0 1px var(--amber-neon),
    0 2px 12px rgba(176, 120, 0, 0.12);
}
```

### Cards

```css
/* ===== DARK MODE ===== */
.amber-card-dark {
  background: var(--amber-surface-0);
  border: 1px solid var(--amber-surface-3);
  border-radius: 0px;
  padding: 24px;
  position: relative;
}

.amber-card-accent-dark {
  border-top: 2px solid var(--amber-neon);
}

.amber-card-dark:hover {
  border-color: rgba(255, 184, 0, 0.3);
  box-shadow: 0 0 20px rgba(255, 184, 0, 0.05);
}

/* Stat card - Dark */
.amber-stat-value-dark {
  font-family: 'JetBrains Mono', monospace;
  font-size: 48px;
  font-weight: 800;
  color: var(--amber-neon);
  text-shadow: 0 0 20px rgba(255, 184, 0, 0.3);
  line-height: 1;
}

/* ===== LIGHT MODE ===== */
.amber-card-light {
  background: var(--amber-surface-0);
  border: 1px solid var(--amber-surface-3);
  border-radius: 0px;
  padding: 24px;
  position: relative;
  box-shadow: 0 1px 3px rgba(44, 36, 22, 0.06);
}

.amber-card-accent-light {
  border-top: 2px solid var(--amber-neon);
}

.amber-card-light:hover {
  border-color: rgba(176, 120, 0, 0.35);
  box-shadow:
    0 2px 12px rgba(176, 120, 0, 0.08),
    0 1px 3px rgba(44, 36, 22, 0.06);
}

/* Stat card - Light */
.amber-stat-value-light {
  font-family: 'JetBrains Mono', monospace;
  font-size: 48px;
  font-weight: 800;
  color: var(--amber-neon);
  text-shadow: none;
  line-height: 1;
}
```

### Badges / Tags

```css
.amber-badge {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 9999px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

/* Dark Mode Badges */
.amber-badge-primary-dark {
  color: var(--amber-neon);
  background: rgba(255, 184, 0, 0.1);
  border: 1px solid rgba(255, 184, 0, 0.25);
}

.amber-badge-danger-dark {
  color: var(--amber-orange);
  background: rgba(255, 107, 0, 0.1);
  border: 1px solid rgba(255, 107, 0, 0.25);
}

.amber-badge-success-dark {
  color: var(--amber-green);
  background: rgba(57, 255, 20, 0.1);
  border: 1px solid rgba(57, 255, 20, 0.25);
}

.amber-badge-warning-dark {
  color: var(--amber-yellow);
  background: rgba(255, 224, 102, 0.1);
  border: 1px solid rgba(255, 224, 102, 0.25);
}

/* Light Mode Badges */
.amber-badge-primary-light {
  color: var(--amber-neon);
  background: rgba(176, 120, 0, 0.08);
  border: 1px solid rgba(176, 120, 0, 0.2);
}

.amber-badge-danger-light {
  color: var(--amber-orange);
  background: rgba(196, 72, 0, 0.08);
  border: 1px solid rgba(196, 72, 0, 0.2);
}

.amber-badge-success-light {
  color: var(--amber-green);
  background: rgba(61, 122, 28, 0.08);
  border: 1px solid rgba(61, 122, 28, 0.2);
}

.amber-badge-warning-light {
  color: var(--amber-yellow);
  background: rgba(166, 124, 0, 0.08);
  border: 1px solid rgba(166, 124, 0, 0.2);
}

/* Status dot inside badge */
.amber-badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  box-shadow: 0 0 6px currentColor;
}

/* In light mode, the dot glow is subtler */
.light .amber-badge-dot {
  box-shadow: none;
}
```

### Sidebar Navigation

```css
/* ===== DARK MODE ===== */
.amber-sidebar-dark {
  background: var(--amber-surface-0);
  border-right: 1px solid var(--amber-surface-3);
  width: 260px;
  padding: 16px 0;
}

.amber-nav-item-dark {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: var(--amber-text-secondary);
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 0;
  border-left: 2px solid transparent;
  transition: all 0.15s ease;
  cursor: pointer;
}

.amber-nav-item-dark:hover {
  color: var(--amber-text-primary);
  background: var(--amber-surface-2);
}

.amber-nav-item-dark.active {
  color: var(--amber-neon);
  border-left-color: var(--amber-neon);
  background: rgba(255, 184, 0, 0.05);
  text-shadow: 0 0 10px rgba(255, 184, 0, 0.3);
}

/* ===== LIGHT MODE ===== */
.amber-sidebar-light {
  background: var(--amber-surface-0);
  border-right: 1px solid var(--amber-surface-3);
  width: 260px;
  padding: 16px 0;
}

.amber-nav-item-light {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: var(--amber-text-secondary);
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 0;
  border-left: 2px solid transparent;
  transition: all 0.15s ease;
  cursor: pointer;
}

.amber-nav-item-light:hover {
  color: var(--amber-text-primary);
  background: var(--amber-surface-2);
}

.amber-nav-item-light.active {
  color: var(--amber-neon);
  border-left-color: var(--amber-neon);
  background: rgba(176, 120, 0, 0.06);
  text-shadow: none;
  font-weight: 600;
}

.amber-nav-section-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--amber-text-muted);
  padding: 20px 20px 8px;
}
```

### Tables / Data Grids

```css
.amber-table {
  width: 100%;
  border-collapse: collapse;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 14px;
}

/* Dark mode */
.amber-table-dark thead th {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--amber-text-muted);
  background: var(--amber-surface-1);
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid var(--amber-surface-3);
}

.amber-table-dark tbody tr {
  border-bottom: 1px solid var(--amber-surface-3);
  transition: background 0.1s ease;
}

.amber-table-dark tbody tr:hover {
  background: var(--amber-surface-2);
}

/* Light mode */
.amber-table-light thead th {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--amber-text-muted);
  background: var(--amber-surface-1);
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid var(--amber-surface-3);
}

.amber-table-light tbody tr {
  border-bottom: 1px solid var(--amber-surface-3);
  transition: background 0.1s ease;
}

.amber-table-light tbody tr:hover {
  background: var(--amber-surface-2);
}

/* Monospace columns (IDs, codes, timestamps) */
.amber-table .col-mono {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  color: var(--amber-text-secondary);
}
```

### Toasts / Notifications

```css
/* Dark mode toasts */
.amber-toast-dark {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 14px;
  background: var(--amber-surface-1);
  border-radius: 0px;
  border-left: 3px solid;
  padding: 16px 20px;
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.5),
    0 0 1px rgba(255, 184, 0, 0.2);
}

.amber-toast-success-dark {
  border-left-color: var(--amber-green);
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.5),
    0 0 15px rgba(57, 255, 20, 0.1);
}

.amber-toast-error-dark {
  border-left-color: var(--amber-orange);
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.5),
    0 0 15px rgba(255, 107, 0, 0.1);
}

.amber-toast-warning-dark {
  border-left-color: var(--amber-yellow);
}

/* Light mode toasts */
.amber-toast-light {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 14px;
  background: var(--amber-void);
  border-radius: 0px;
  border-left: 3px solid;
  padding: 16px 20px;
  box-shadow:
    0 4px 16px rgba(44, 36, 22, 0.1),
    0 1px 3px rgba(44, 36, 22, 0.06);
}

.amber-toast-success-light {
  border-left-color: var(--amber-green);
}

.amber-toast-error-light {
  border-left-color: var(--amber-orange);
}

.amber-toast-warning-light {
  border-left-color: var(--amber-yellow);
}
```

### Modals / Dialogs

```css
/* Dark mode */
.amber-modal-overlay-dark {
  background: rgba(10, 8, 6, 0.85);
  backdrop-filter: blur(8px);
}

.amber-modal-dark {
  background: var(--amber-surface-0);
  border: 1px solid var(--amber-surface-3);
  border-radius: 0px;
  box-shadow:
    0 24px 80px rgba(0, 0, 0, 0.6),
    0 0 1px rgba(255, 184, 0, 0.3);
  max-width: 520px;
  width: 100%;
}

/* Light mode */
.amber-modal-overlay-light {
  background: rgba(250, 245, 234, 0.75);
  backdrop-filter: blur(8px);
}

.amber-modal-light {
  background: var(--amber-void);
  border: 1px solid var(--amber-surface-3);
  border-radius: 0px;
  box-shadow:
    0 24px 80px rgba(44, 36, 22, 0.15),
    0 0 1px rgba(176, 120, 0, 0.2);
  max-width: 520px;
  width: 100%;
}

.amber-modal-header {
  padding: 20px 24px;
  border-bottom: 1px solid var(--amber-surface-3);
}

.amber-modal-title {
  font-family: 'JetBrains Mono', monospace;
  font-size: 18px;
  font-weight: 700;
  color: var(--amber-text-primary);
}
```

### Scrollbar Styling

```css
/* Dark mode */
.amber-scrollbar-dark::-webkit-scrollbar {
  width: 6px;
}

.amber-scrollbar-dark::-webkit-scrollbar-track {
  background: var(--amber-void);
}

.amber-scrollbar-dark::-webkit-scrollbar-thumb {
  background: var(--amber-surface-3);
  border-radius: 0px;
}

.amber-scrollbar-dark::-webkit-scrollbar-thumb:hover {
  background: var(--amber-neon-muted);
}

/* Light mode */
.amber-scrollbar-light::-webkit-scrollbar {
  width: 6px;
}

.amber-scrollbar-light::-webkit-scrollbar-track {
  background: var(--amber-void);
}

.amber-scrollbar-light::-webkit-scrollbar-thumb {
  background: var(--amber-surface-3);
  border-radius: 0px;
}

.amber-scrollbar-light::-webkit-scrollbar-thumb:hover {
  background: var(--amber-neon-muted);
}
```

---

## 5. Special Effects

### Glow Effects: Dark vs. Light Philosophy

**Dark mode:** Full neon glow treatment. Amber glow radiates from interactive elements, creating the warm CRT monitor feel. The glow is the hero.

**Light mode:** Glow effects are replaced by **warm shadows** and **amber tint shifts**. Instead of light radiating outward (which would be invisible on a light background), interactive elements gain depth through warm-toned box shadows and subtle amber background tints on hover/focus. The terminal feel comes from typography and shape, not glow.

### Scanline Overlay (Dark Mode Only)

A barely-visible CRT scanline effect. On light mode, this is replaced by a subtle paper texture.

```css
/* Dark mode: CRT scanlines */
.amber-scanlines-dark::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.03) 2px,
    rgba(0, 0, 0, 0.03) 4px
  );
  pointer-events: none;
  z-index: 9999;
}

/* Light mode: subtle paper grain texture */
.amber-paper-texture-light::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.015'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 9999;
}
```

### Amber Neon Pulse Animation (Dark Mode)

```css
@keyframes amber-pulse {
  0%, 100% {
    box-shadow:
      0 0 5px rgba(255, 184, 0, 0.4),
      0 0 20px rgba(255, 184, 0, 0.15);
  }
  50% {
    box-shadow:
      0 0 10px rgba(255, 184, 0, 0.6),
      0 0 40px rgba(255, 184, 0, 0.25),
      0 0 80px rgba(255, 184, 0, 0.1);
  }
}

.amber-pulse-dark {
  animation: amber-pulse 2s ease-in-out infinite;
}
```

### Warm Lift Animation (Light Mode)

Instead of a glow pulse, light mode uses a subtle shadow-lift for emphasis:

```css
@keyframes amber-lift {
  0%, 100% {
    box-shadow: 0 2px 8px rgba(176, 120, 0, 0.15);
    transform: translateY(0);
  }
  50% {
    box-shadow: 0 6px 20px rgba(176, 120, 0, 0.2);
    transform: translateY(-1px);
  }
}

.amber-pulse-light {
  animation: amber-lift 2s ease-in-out infinite;
}
```

### Typing Cursor Blink

```css
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Dark mode: amber cursor */
.amber-cursor-dark::after {
  content: '_';
  color: var(--amber-neon);
  animation: blink 1s step-end infinite;
  margin-left: 2px;
}

/* Light mode: same cursor, darker amber */
.amber-cursor-light::after {
  content: '_';
  color: var(--amber-neon);
  animation: blink 1s step-end infinite;
  margin-left: 2px;
}
```

### Grid Background Pattern

```css
/* Dark mode: warm dot grid */
.amber-grid-bg-dark {
  background-image: radial-gradient(
    circle,
    rgba(255, 184, 0, 0.06) 1px,
    transparent 1px
  );
  background-size: 24px 24px;
}

/* Light mode: subtle warm dot grid */
.amber-grid-bg-light {
  background-image: radial-gradient(
    circle,
    rgba(176, 120, 0, 0.06) 1px,
    transparent 1px
  );
  background-size: 24px 24px;
}
```

---

## 6. Tailwind v4 Theme Configuration

```css
@import "tailwindcss";

@theme {
  /* Neon Amber Colors - Dark Mode Defaults */
  --color-amber-void: #0A0806;
  --color-amber-surface-0: #12100B;
  --color-amber-surface-1: #1A1710;
  --color-amber-surface-2: #241F16;
  --color-amber-surface-3: #302A1E;

  --color-amber-neon: #FFB800;
  --color-amber-neon-muted: #C48A00;
  --color-amber-orange: #FF6B00;
  --color-amber-green: #39FF14;
  --color-amber-yellow: #FFE066;
  --color-amber-copper: #E8782A;

  --color-amber-text-primary: #F0E6D2;
  --color-amber-text-secondary: #A89478;
  --color-amber-text-muted: #5C5040;

  /* Light Mode Overrides */
  --color-amber-void-light: #FAF5EA;
  --color-amber-surface-0-light: #F3ECDD;
  --color-amber-surface-1-light: #EBE3D0;
  --color-amber-surface-2-light: #E2D8C3;
  --color-amber-surface-3-light: #D5C9B0;

  --color-amber-neon-light: #B07800;
  --color-amber-neon-muted-light: #8A6000;
  --color-amber-orange-light: #C44800;
  --color-amber-green-light: #3D7A1C;
  --color-amber-yellow-light: #A67C00;
  --color-amber-copper-light: #9A5B20;

  --color-amber-text-primary-light: #2C2416;
  --color-amber-text-secondary-light: #6B5D48;
  --color-amber-text-muted-light: #A89880;

  /* Font families */
  --font-heading: 'JetBrains Mono', monospace;
  --font-body: 'IBM Plex Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Border radius tokens */
  --radius-sharp: 0px;
  --radius-terminal: 2px;
  --radius-pill: 9999px;
}
```

### Tailwind Utility Examples

```html
<!-- ===== DARK MODE ===== -->

<!-- Page title with amber glow -->
<h1 class="font-heading text-[40px] font-extrabold uppercase tracking-tight text-amber-neon
           [text-shadow:0_0_7px_rgba(255,184,0,0.6),0_0_20px_rgba(255,184,0,0.3)]">
  DASHBOARD_
</h1>

<!-- Primary button with amber glow -->
<button class="font-mono text-[13px] font-semibold uppercase tracking-wider
               bg-amber-neon text-amber-void rounded-pill px-7 py-2.5
               shadow-[0_0_5px_rgba(255,184,0,0.4),0_0_20px_rgba(255,184,0,0.15)]
               hover:shadow-[0_0_8px_rgba(255,184,0,0.6),0_0_30px_rgba(255,184,0,0.3)]
               transition-all duration-200">
  EXECUTE
</button>

<!-- Sharp card -->
<div class="bg-amber-surface-0 border border-amber-surface-3 rounded-sharp p-6">
  <h3 class="font-heading text-xl font-semibold text-amber-text-primary">Card Title</h3>
  <p class="font-body text-[15px] text-amber-text-secondary mt-2">Card content here.</p>
</div>

<!-- Terminal input -->
<input class="font-mono text-sm bg-amber-void border border-amber-surface-3 rounded-terminal
              text-amber-text-primary px-4 py-3
              focus:border-amber-neon focus:shadow-[0_0_0_1px_#FFB800,0_0_15px_rgba(255,184,0,0.15)]
              focus:outline-none caret-amber-neon
              placeholder:text-amber-text-muted placeholder:italic"
       placeholder="type command..." />

<!-- Amber badge -->
<span class="font-mono text-[11px] font-medium uppercase tracking-wider
             text-amber-neon bg-amber-neon/10 border border-amber-neon/25
             rounded-pill px-3 py-1">
  ACTIVE
</span>

<!-- ===== LIGHT MODE ===== -->

<!-- Page title -- no glow, rich amber ink -->
<h1 class="font-heading text-[40px] font-extrabold uppercase tracking-tight text-amber-neon-light">
  DASHBOARD_
</h1>

<!-- Primary button with warm shadow -->
<button class="font-mono text-[13px] font-semibold uppercase tracking-wider
               bg-amber-neon-light text-white rounded-pill px-7 py-2.5
               shadow-[0_2px_8px_rgba(176,120,0,0.25)]
               hover:shadow-[0_4px_16px_rgba(176,120,0,0.3)]
               transition-all duration-200">
  EXECUTE
</button>

<!-- Sharp card with warm shadow -->
<div class="bg-amber-surface-0-light border border-amber-surface-3-light rounded-sharp p-6
            shadow-[0_1px_3px_rgba(44,36,22,0.06)]">
  <h3 class="font-heading text-xl font-semibold text-amber-text-primary-light">Card Title</h3>
  <p class="font-body text-[15px] text-amber-text-secondary-light mt-2">Card content here.</p>
</div>
```

---

## 7. Light Mode Design Philosophy

The light mode of Neon Terminal: Amber is NOT just "invert the colors." It is a deliberate reinterpretation of the terminal aesthetic for well-lit environments. Here are the core principles:

### What carries over from dark mode:
- **Monospace typography** -- JetBrains Mono headings, uppercase labels, the full type system
- **Sharp-vs-pill shape language** -- 0px cards, 9999px buttons, 2px inputs
- **Color semantics** -- amber = primary, green = success, orange = danger
- **Terminal prompt details** -- cursor blink, `>` prefixes, monospace inputs
- **Uppercase interactive elements** -- buttons, badges, labels, nav sections
- **Structural layout** -- sidebar patterns, card grids, data tables

### What changes for light mode:
- **Glow becomes shadow** -- Neon glow effects are replaced by warm-toned drop shadows and soft amber box shadows
- **Neon becomes ink** -- Bright `#FFB800` amber becomes rich `#B07800` amber ink. Colors are darkened and slightly desaturated so they read well against cream backgrounds
- **Void becomes parchment** -- The near-black void becomes warm cream `#FAF5EA`, inspired by Gruvbox Light's `#fbf1c7`. Surfaces build up in warm parchment tones
- **Scanlines become paper grain** -- The CRT scanline effect is replaced by a barely-visible paper noise texture
- **Badge dots lose glow** -- Status indicator dots are solid color without the halo glow effect
- **Active nav items** use font-weight change instead of text-shadow for emphasis

### The result:
Dark mode feels like a warm amber CRT monitor in a dim workshop. Light mode feels like an engineer's notebook -- precise, structured, warm-toned, with the same monospace discipline but adapted for daylight readability.

---

## 8. Inspiration References

| Source                  | What to Borrow                                                          |
|-------------------------|-------------------------------------------------------------------------|
| **Gruvbox Light**       | Warm cream backgrounds, desaturated accent colors, paper-like surface scale |
| **Warp Terminal**       | Block-based UI, monospace-first, input styling, dark void backgrounds   |
| **Amber CRT Monitors**  | The warm monochrome glow, amber-on-black aesthetic, vintage terminal energy |
| **Linear (dark)**       | Elevation through surface layering, minimal color use, tight spacing    |
| **Solarized Light**     | Proven warm light palette, reduced eye strain, dual-mode design thinking |
| **Cyberpunk 2077 UI**   | Angled corner cuts, bold typography, aggressive uppercase labels        |
| **VS Code (dark)**      | Sidebar patterns, monospace navigation, focus ring glow effects         |
| **Old engineering paper**| Warm grid patterns, structured precision, amber/sepia ink tones         |

---

## 9. Key Design Principles

1. **Terminal-first typography:** All headings, labels, navigation, badges, and interactive elements use JetBrains Mono. Only body/paragraph text uses sans-serif. This is the constant across both modes.
2. **Warmth is the identity:** Every color has a warm undertone. Backgrounds tilt warm (brown-tinted blacks in dark, cream in light). No cool grays anywhere.
3. **Glow in dark, shadow in light:** The same semantic emphasis (primary action = strongest visual signal) is expressed through neon glow in dark mode and warm box shadows in light mode.
4. **Sharp vs. pill tension:** Containers are razor-sharp (0 radius). Interactive elements are fully rounded (pill). This contrast is mode-independent.
5. **Neon becomes ink:** Bright neon amber in dark mode becomes rich, saturated "ink" amber in light mode. The hue stays constant; the lightness and saturation adapt.
6. **Restraint on effects:** Dark mode gets glow, scanlines, and grid patterns. Light mode gets warm shadows and paper texture. Each mode has its own flavor of visual richness without overdoing it.
7. **Color is signal:** Amber = primary, green = success, orange = danger, yellow = warning, copper = info. Semantic use only, never decorative.
8. **Both modes are first-class:** Neither mode is an afterthought. Dark mode is a warm CRT workstation. Light mode is a sunlit engineer's desk. Both are intentionally designed, not derived.
