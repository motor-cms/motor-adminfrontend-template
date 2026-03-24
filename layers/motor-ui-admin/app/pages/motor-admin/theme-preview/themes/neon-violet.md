# Neon Terminal: Violet Theme Spec

**Theme ID:** `neon-violet`
**Direction:** Dual-mode variant of Neon Terminal. Dark mode: deep purple void with electric violet neon accents. Light mode: lavender-tinted surfaces with sophisticated violet accents. Both modes retain the terminal DNA -- monospace type, sharp containers, pill buttons, command-line energy.
**Vibe:** If Linear went purple and kept the hacker energy. An elegant command center that works day and night. Synthwave dashboard by day, cyberpunk by night.

---

## 1. Color Palette

### Dark Mode

A deep purple-tinted void background with electric violet neon accents. Inspired by Synthwave '84, Shades of Purple terminal themes, and the original Neon Terminal pushed into the ultraviolet.

#### Base / Background Scale (Dark)

| Token             | Hex       | Usage                                      |
|-------------------|-----------|---------------------------------------------|
| `void`            | `#08060E` | Page background, deepest layer              |
| `surface-0`       | `#0F0B19` | Card backgrounds, sidebar                   |
| `surface-1`       | `#161122` | Elevated cards, dropdowns, modals           |
| `surface-2`       | `#1E172E` | Hover states, active sidebar items          |
| `surface-3`       | `#2A2140` | Borders, dividers, subtle separators        |

#### Neon Accent Scale (Dark)

| Token                | Hex       | Tailwind         | Usage                                |
|----------------------|-----------|------------------|--------------------------------------|
| `neon-violet`        | `#A855F7` | `purple-400`     | Primary actions, links, focus rings  |
| `neon-violet-bright` | `#C084FC` | `purple-300`     | Highlighted text, active nav items   |
| `neon-violet-muted`  | `#7C3AED` | `violet-600`     | Secondary text accents, badges       |
| `neon-blue`          | `#60A5FA` | `blue-400`       | Info states, secondary accents       |
| `neon-magenta`       | `#F472B6` | `pink-400`       | Destructive/danger, critical alerts  |
| `neon-green`         | `#34D399` | `emerald-400`    | Success states, online indicators    |
| `neon-yellow`        | `#FBBF24` | `amber-400`      | Warnings, pending states             |

#### Text Scale (Dark)

| Token             | Hex       | Usage                                      |
|-------------------|-----------|---------------------------------------------|
| `text-primary`    | `#EDE9FE` | Primary text (lavender-white)               |
| `text-secondary`  | `#9F8BBF` | Secondary text, labels, placeholders        |
| `text-muted`      | `#5B4A73` | Disabled text, timestamps                   |
| `text-neon`       | `#C084FC` | Highlighted text, active nav items          |

#### Semantic Colors (Dark)

| Token             | Hex       | Usage                                      |
|-------------------|-----------|---------------------------------------------|
| `success`         | `#34D399` | Success toasts, completed states            |
| `warning`         | `#FBBF24` | Warning toasts, caution states              |
| `error`           | `#F472B6` | Error toasts, validation failures           |
| `info`            | `#60A5FA` | Informational toasts, tips                  |

---

### Light Mode

Cool lavender-tinted surfaces with violet accents on a clean, airy background. Not inverted dark -- a proper light theme with purple personality. Think "if Linear went purple" -- sophisticated, tech-forward, never garish.

#### Base / Background Scale (Light)

| Token             | Hex       | Usage                                      |
|-------------------|-----------|---------------------------------------------|
| `void`            | `#F8F5FF` | Page background, deepest layer              |
| `surface-0`       | `#FFFFFF` | Card backgrounds, sidebar                   |
| `surface-1`       | `#F3EEFF` | Elevated cards, dropdowns, modals           |
| `surface-2`       | `#EDE5FC` | Hover states, active sidebar items          |
| `surface-3`       | `#DDD1F5` | Borders, dividers, subtle separators        |

#### Accent Scale (Light)

| Token                | Hex       | Tailwind         | Usage                                |
|----------------------|-----------|------------------|--------------------------------------|
| `accent-violet`      | `#7C3AED` | `violet-600`     | Primary actions, links, focus rings  |
| `accent-violet-bold` | `#6D28D9` | `violet-700`     | Hover states on primary elements     |
| `accent-violet-soft` | `#8B5CF6` | `violet-500`     | Secondary accents, badges background |
| `accent-blue`        | `#3B82F6` | `blue-500`       | Info states, secondary accents       |
| `accent-rose`        | `#E11D48` | `rose-600`       | Destructive/danger, critical alerts  |
| `accent-emerald`     | `#059669` | `emerald-600`    | Success states, online indicators    |
| `accent-amber`       | `#D97706` | `amber-600`      | Warnings, pending states             |

#### Text Scale (Light)

| Token             | Hex       | Usage                                      |
|-------------------|-----------|---------------------------------------------|
| `text-primary`    | `#1E103A` | Primary text (deep purple-black)            |
| `text-secondary`  | `#5B4A73` | Secondary text, labels, placeholders        |
| `text-muted`      | `#9F8BBF` | Disabled text, timestamps                   |
| `text-accent`     | `#7C3AED` | Highlighted text, active nav items          |

#### Semantic Colors (Light)

| Token             | Hex       | Usage                                      |
|-------------------|-----------|---------------------------------------------|
| `success`         | `#059669` | Success toasts, completed states            |
| `warning`         | `#D97706` | Warning toasts, caution states              |
| `error`           | `#E11D48` | Error toasts, validation failures           |
| `info`            | `#3B82F6` | Informational toasts, tips                  |

---

### CSS Custom Properties

```css
/* Dark Mode (default) */
:root {
  --violet-void: #08060E;
  --violet-surface-0: #0F0B19;
  --violet-surface-1: #161122;
  --violet-surface-2: #1E172E;
  --violet-surface-3: #2A2140;

  --violet-neon: #A855F7;
  --violet-neon-bright: #C084FC;
  --violet-neon-muted: #7C3AED;
  --violet-blue: #60A5FA;
  --violet-magenta: #F472B6;
  --violet-green: #34D399;
  --violet-yellow: #FBBF24;

  --violet-text-primary: #EDE9FE;
  --violet-text-secondary: #9F8BBF;
  --violet-text-muted: #5B4A73;
}

/* Light Mode */
:root.light, [data-theme="light"] {
  --violet-void: #F8F5FF;
  --violet-surface-0: #FFFFFF;
  --violet-surface-1: #F3EEFF;
  --violet-surface-2: #EDE5FC;
  --violet-surface-3: #DDD1F5;

  --violet-neon: #7C3AED;
  --violet-neon-bright: #6D28D9;
  --violet-neon-muted: #8B5CF6;
  --violet-blue: #3B82F6;
  --violet-magenta: #E11D48;
  --violet-green: #059669;
  --violet-yellow: #D97706;

  --violet-text-primary: #1E103A;
  --violet-text-secondary: #5B4A73;
  --violet-text-muted: #9F8BBF;
}
```

---

## 2. Typography

### Font Pairing

**Headings:** JetBrains Mono (monospace, bold weight)
**Body:** IBM Plex Sans (clean, technical sans-serif)
**Code / Badges / Labels:** JetBrains Mono (monospace, regular weight)

Same pairing as the original Neon Terminal. The terminal DNA runs through all variants. Both fonts share a technical lineage and complement each other perfectly.

### Google Fonts URL

```
https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700;800&display=swap
```

### Type Scale

| Element            | Font             | Size     | Weight | Line Height | Letter Spacing | Notes                                       |
|--------------------|------------------|----------|--------|-------------|----------------|---------------------------------------------|
| Page Title (h1)    | JetBrains Mono   | `40px`   | 800    | 1.1         | `-0.03em`      | UPPERCASE, violet glow (dark) / bold violet (light) |
| Section Title (h2) | JetBrains Mono   | `28px`   | 700    | 1.2         | `-0.02em`      | Title case                                   |
| Card Title (h3)    | JetBrains Mono   | `20px`   | 600    | 1.3         | `-0.01em`      |                                              |
| Body               | IBM Plex Sans    | `15px`   | 400    | 1.6         | `0`            |                                              |
| Body Small         | IBM Plex Sans    | `13px`   | 400    | 1.5         | `0.01em`       |                                              |
| Label              | JetBrains Mono   | `11px`   | 600    | 1.4         | `0.08em`       | UPPERCASE, muted violet color                |
| Badge              | JetBrains Mono   | `11px`   | 500    | 1           | `0.05em`       | UPPERCASE                                    |
| Code               | JetBrains Mono   | `13px`   | 400    | 1.5         | `0`            | Inline code snippets                         |
| Nav Item           | JetBrains Mono   | `13px`   | 500    | 1.4         | `0.02em`       | Sidebar navigation                           |

### CSS

```css
/* DARK MODE */
.violet-h1 {
  font-family: 'JetBrains Mono', monospace;
  font-size: 40px;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: var(--violet-neon);
  text-shadow:
    0 0 7px rgba(168, 85, 247, 0.6),
    0 0 20px rgba(168, 85, 247, 0.3),
    0 0 42px rgba(168, 85, 247, 0.15);
}

/* LIGHT MODE */
.light .violet-h1 {
  color: var(--violet-neon);
  text-shadow: none;
}

.violet-h2 {
  font-family: 'JetBrains Mono', monospace;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--violet-text-primary);
}

.violet-body {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  color: var(--violet-text-primary);
}

.violet-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--violet-neon-muted);
}
```

---

## 3. Shape Language

Identical to Neon Terminal. The shape tension is a family trait: **razor-sharp containers** vs. **pill-shaped interactive elements**.

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
5. **Avatars:** `border-radius: 50%` -- Classic circle.
6. **Dropdown menus:** `border-radius: 0px` -- Sharp to match cards.
7. **Sidebar:** Sharp corners everywhere.

### Corner Cut Effect (Optional Enhancement)

Same chamfered/beveled corners as Neon Terminal, but with violet accent:

```css
.violet-card-cut {
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
/* === DARK MODE === */

/* Primary Button */
.violet-btn-primary {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #FFFFFF;
  background: var(--violet-neon);
  border: none;
  border-radius: 9999px;
  padding: 10px 28px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow:
    0 0 5px rgba(168, 85, 247, 0.4),
    0 0 20px rgba(168, 85, 247, 0.15);
}

.violet-btn-primary:hover {
  box-shadow:
    0 0 8px rgba(168, 85, 247, 0.6),
    0 0 30px rgba(168, 85, 247, 0.3),
    0 0 60px rgba(168, 85, 247, 0.1);
  transform: translateY(-1px);
}

.violet-btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 0 5px rgba(168, 85, 247, 0.4);
}

/* Ghost / Outline Button */
.violet-btn-ghost {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--violet-neon);
  background: transparent;
  border: 1px solid var(--violet-surface-3);
  border-radius: 9999px;
  padding: 10px 28px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.violet-btn-ghost:hover {
  border-color: var(--violet-neon);
  box-shadow: 0 0 10px rgba(168, 85, 247, 0.2);
}

/* Danger Button */
.violet-btn-danger {
  color: #FFFFFF;
  background: var(--violet-magenta);
  border-radius: 9999px;
  box-shadow:
    0 0 5px rgba(244, 114, 182, 0.4),
    0 0 20px rgba(244, 114, 182, 0.15);
}

/* === LIGHT MODE === */

.light .violet-btn-primary {
  color: #FFFFFF;
  background: var(--violet-neon);
  box-shadow: 0 1px 3px rgba(124, 58, 237, 0.3);
}

.light .violet-btn-primary:hover {
  background: var(--violet-neon-bright);
  box-shadow: 0 2px 8px rgba(124, 58, 237, 0.35);
  transform: translateY(-1px);
}

.light .violet-btn-ghost {
  color: var(--violet-neon);
  border-color: var(--violet-surface-3);
}

.light .violet-btn-ghost:hover {
  border-color: var(--violet-neon);
  background: rgba(124, 58, 237, 0.05);
  box-shadow: none;
}

.light .violet-btn-danger {
  color: #FFFFFF;
  background: var(--violet-magenta);
  box-shadow: 0 1px 3px rgba(225, 29, 72, 0.3);
}
```

### Input Fields (Terminal Style)

```css
/* === DARK MODE === */
.violet-input {
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  color: var(--violet-text-primary);
  background: var(--violet-void);
  border: 1px solid var(--violet-surface-3);
  border-radius: 2px;
  padding: 12px 16px;
  transition: all 0.2s ease;
  caret-color: var(--violet-neon);
}

.violet-input::placeholder {
  color: var(--violet-text-muted);
  font-style: italic;
}

.violet-input:focus {
  outline: none;
  border-color: var(--violet-neon);
  box-shadow:
    0 0 0 1px var(--violet-neon),
    0 0 15px rgba(168, 85, 247, 0.15);
}

/* === LIGHT MODE === */
.light .violet-input {
  background: #FFFFFF;
  border-color: var(--violet-surface-3);
  color: var(--violet-text-primary);
}

.light .violet-input:focus {
  border-color: var(--violet-neon);
  box-shadow:
    0 0 0 2px rgba(124, 58, 237, 0.15),
    0 1px 3px rgba(124, 58, 237, 0.08);
}
```

### Cards

```css
/* === DARK MODE === */
.violet-card {
  background: var(--violet-surface-0);
  border: 1px solid var(--violet-surface-3);
  border-radius: 0px;
  padding: 24px;
  position: relative;
}

.violet-card-accent {
  border-top: 2px solid var(--violet-neon);
}

.violet-card:hover {
  border-color: rgba(168, 85, 247, 0.3);
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.05);
}

/* Stat card */
.violet-stat-value {
  font-family: 'JetBrains Mono', monospace;
  font-size: 48px;
  font-weight: 800;
  color: var(--violet-neon);
  text-shadow: 0 0 20px rgba(168, 85, 247, 0.3);
  line-height: 1;
}

.violet-stat-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--violet-text-muted);
  margin-top: 8px;
}

/* === LIGHT MODE === */
.light .violet-card {
  background: var(--violet-surface-0);
  border-color: var(--violet-surface-3);
  box-shadow: 0 1px 3px rgba(124, 58, 237, 0.04);
}

.light .violet-card-accent {
  border-top-color: var(--violet-neon);
}

.light .violet-card:hover {
  border-color: rgba(124, 58, 237, 0.25);
  box-shadow: 0 2px 12px rgba(124, 58, 237, 0.06);
}

.light .violet-stat-value {
  color: var(--violet-neon);
  text-shadow: none;
}

.light .violet-stat-label {
  color: var(--violet-text-muted);
}
```

### Badges / Tags

```css
.violet-badge {
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

/* === DARK MODE BADGES === */
.violet-badge-purple {
  color: var(--violet-neon-bright);
  background: rgba(168, 85, 247, 0.1);
  border: 1px solid rgba(168, 85, 247, 0.25);
}

.violet-badge-pink {
  color: var(--violet-magenta);
  background: rgba(244, 114, 182, 0.1);
  border: 1px solid rgba(244, 114, 182, 0.25);
}

.violet-badge-green {
  color: var(--violet-green);
  background: rgba(52, 211, 153, 0.1);
  border: 1px solid rgba(52, 211, 153, 0.25);
}

.violet-badge-yellow {
  color: var(--violet-yellow);
  background: rgba(251, 191, 36, 0.1);
  border: 1px solid rgba(251, 191, 36, 0.25);
}

.violet-badge-blue {
  color: var(--violet-blue);
  background: rgba(96, 165, 250, 0.1);
  border: 1px solid rgba(96, 165, 250, 0.25);
}

/* === LIGHT MODE BADGES === */
.light .violet-badge-purple {
  color: var(--violet-neon);
  background: rgba(124, 58, 237, 0.08);
  border-color: rgba(124, 58, 237, 0.2);
}

.light .violet-badge-pink {
  color: var(--violet-magenta);
  background: rgba(225, 29, 72, 0.06);
  border-color: rgba(225, 29, 72, 0.2);
}

.light .violet-badge-green {
  color: var(--violet-green);
  background: rgba(5, 150, 105, 0.06);
  border-color: rgba(5, 150, 105, 0.2);
}

.light .violet-badge-yellow {
  color: var(--violet-yellow);
  background: rgba(217, 119, 6, 0.06);
  border-color: rgba(217, 119, 6, 0.2);
}

.light .violet-badge-blue {
  color: var(--violet-blue);
  background: rgba(59, 130, 246, 0.06);
  border-color: rgba(59, 130, 246, 0.2);
}

/* Status dot inside badge */
.violet-badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  box-shadow: 0 0 6px currentColor;
}

/* Light mode: no glow on dot */
.light .violet-badge-dot {
  box-shadow: none;
}
```

### Sidebar Navigation

```css
/* === DARK MODE === */
.violet-sidebar {
  background: var(--violet-surface-0);
  border-right: 1px solid var(--violet-surface-3);
  width: 260px;
  padding: 16px 0;
}

.violet-nav-item {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: var(--violet-text-secondary);
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 0;
  border-left: 2px solid transparent;
  transition: all 0.15s ease;
  cursor: pointer;
}

.violet-nav-item:hover {
  color: var(--violet-text-primary);
  background: var(--violet-surface-2);
}

.violet-nav-item.active {
  color: var(--violet-neon);
  border-left-color: var(--violet-neon);
  background: rgba(168, 85, 247, 0.05);
  text-shadow: 0 0 10px rgba(168, 85, 247, 0.3);
}

.violet-nav-section-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--violet-text-muted);
  padding: 20px 20px 8px;
}

/* === LIGHT MODE === */
.light .violet-sidebar {
  background: var(--violet-surface-0);
  border-right-color: var(--violet-surface-3);
}

.light .violet-nav-item {
  color: var(--violet-text-secondary);
}

.light .violet-nav-item:hover {
  color: var(--violet-text-primary);
  background: var(--violet-surface-2);
}

.light .violet-nav-item.active {
  color: var(--violet-neon);
  border-left-color: var(--violet-neon);
  background: rgba(124, 58, 237, 0.05);
  text-shadow: none;
}
```

### Tables / Data Grids

```css
.violet-table {
  width: 100%;
  border-collapse: collapse;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 14px;
}

/* === DARK MODE === */
.violet-table thead th {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--violet-text-muted);
  background: var(--violet-surface-1);
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid var(--violet-surface-3);
}

.violet-table tbody tr {
  border-bottom: 1px solid var(--violet-surface-3);
  transition: background 0.1s ease;
}

.violet-table tbody tr:hover {
  background: var(--violet-surface-2);
}

.violet-table tbody td {
  padding: 14px 16px;
  color: var(--violet-text-primary);
}

.violet-table .col-mono {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  color: var(--violet-text-secondary);
}

/* === LIGHT MODE === */
.light .violet-table thead th {
  background: var(--violet-surface-1);
  color: var(--violet-text-muted);
  border-bottom-color: var(--violet-surface-3);
}

.light .violet-table tbody tr {
  border-bottom-color: var(--violet-surface-3);
}

.light .violet-table tbody tr:hover {
  background: var(--violet-surface-2);
}
```

### Toasts / Notifications

```css
/* === DARK MODE === */
.violet-toast {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 14px;
  background: var(--violet-surface-1);
  border-radius: 0px;
  border-left: 3px solid;
  padding: 16px 20px;
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.5),
    0 0 1px rgba(168, 85, 247, 0.2);
}

.violet-toast-success {
  border-left-color: var(--violet-green);
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.5),
    0 0 15px rgba(52, 211, 153, 0.1);
}

.violet-toast-error {
  border-left-color: var(--violet-magenta);
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.5),
    0 0 15px rgba(244, 114, 182, 0.1);
}

.violet-toast-warning {
  border-left-color: var(--violet-yellow);
}

/* === LIGHT MODE === */
.light .violet-toast {
  background: var(--violet-surface-0);
  box-shadow: 0 4px 16px rgba(124, 58, 237, 0.08);
}

.light .violet-toast-success {
  box-shadow: 0 4px 16px rgba(5, 150, 105, 0.06);
}

.light .violet-toast-error {
  box-shadow: 0 4px 16px rgba(225, 29, 72, 0.06);
}
```

### Modals / Dialogs

```css
/* === DARK MODE === */
.violet-modal-overlay {
  background: rgba(8, 6, 14, 0.85);
  backdrop-filter: blur(8px);
}

.violet-modal {
  background: var(--violet-surface-0);
  border: 1px solid var(--violet-surface-3);
  border-radius: 0px;
  box-shadow:
    0 24px 80px rgba(0, 0, 0, 0.6),
    0 0 1px rgba(168, 85, 247, 0.3);
  max-width: 520px;
  width: 100%;
}

.violet-modal-header {
  padding: 20px 24px;
  border-bottom: 1px solid var(--violet-surface-3);
}

.violet-modal-title {
  font-family: 'JetBrains Mono', monospace;
  font-size: 18px;
  font-weight: 700;
  color: var(--violet-text-primary);
}

/* === LIGHT MODE === */
.light .violet-modal-overlay {
  background: rgba(248, 245, 255, 0.75);
  backdrop-filter: blur(8px);
}

.light .violet-modal {
  background: var(--violet-surface-0);
  border-color: var(--violet-surface-3);
  box-shadow:
    0 16px 48px rgba(124, 58, 237, 0.1),
    0 0 0 1px rgba(124, 58, 237, 0.06);
}
```

### Scrollbar Styling

```css
/* === DARK MODE === */
.violet-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.violet-scrollbar::-webkit-scrollbar-track {
  background: var(--violet-void);
}

.violet-scrollbar::-webkit-scrollbar-thumb {
  background: var(--violet-surface-3);
  border-radius: 0px;
}

.violet-scrollbar::-webkit-scrollbar-thumb:hover {
  background: var(--violet-neon-muted);
}

/* === LIGHT MODE === */
.light .violet-scrollbar::-webkit-scrollbar-track {
  background: var(--violet-void);
}

.light .violet-scrollbar::-webkit-scrollbar-thumb {
  background: var(--violet-surface-3);
}

.light .violet-scrollbar::-webkit-scrollbar-thumb:hover {
  background: var(--violet-neon-muted);
}
```

---

## 5. Special Effects

### Scanline Overlay (Dark Mode Only)

The CRT scanline effect only on dark mode. Light mode is clean and crisp.

```css
.violet-scanlines::after {
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

/* Disable in light mode */
.light .violet-scanlines::after {
  display: none;
}
```

### Neon Pulse Animation (Dark Mode)

```css
@keyframes violet-pulse {
  0%, 100% {
    box-shadow:
      0 0 5px rgba(168, 85, 247, 0.4),
      0 0 20px rgba(168, 85, 247, 0.15);
  }
  50% {
    box-shadow:
      0 0 10px rgba(168, 85, 247, 0.6),
      0 0 40px rgba(168, 85, 247, 0.25),
      0 0 80px rgba(168, 85, 247, 0.1);
  }
}

.violet-pulse {
  animation: violet-pulse 2s ease-in-out infinite;
}

/* Light mode: subtle shadow pulse instead of glow */
@keyframes violet-pulse-light {
  0%, 100% {
    box-shadow: 0 1px 3px rgba(124, 58, 237, 0.2);
  }
  50% {
    box-shadow: 0 2px 8px rgba(124, 58, 237, 0.3);
  }
}

.light .violet-pulse {
  animation: violet-pulse-light 2s ease-in-out infinite;
}
```

### Typing Cursor Blink

```css
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.violet-cursor::after {
  content: '_';
  color: var(--violet-neon);
  animation: blink 1s step-end infinite;
  margin-left: 2px;
}
```

### Grid Background Pattern

```css
/* Dark: faint violet dot-grid */
.violet-grid-bg {
  background-image: radial-gradient(
    circle,
    rgba(168, 85, 247, 0.06) 1px,
    transparent 1px
  );
  background-size: 24px 24px;
}

/* Light: even subtler lavender dot-grid */
.light .violet-grid-bg {
  background-image: radial-gradient(
    circle,
    rgba(124, 58, 237, 0.04) 1px,
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
  /* === DARK MODE (default) === */

  /* Violet Terminal Colors */
  --color-void: #08060E;
  --color-surface-0: #0F0B19;
  --color-surface-1: #161122;
  --color-surface-2: #1E172E;
  --color-surface-3: #2A2140;

  --color-neon-violet: #A855F7;
  --color-neon-violet-bright: #C084FC;
  --color-neon-violet-muted: #7C3AED;
  --color-neon-blue: #60A5FA;
  --color-neon-magenta: #F472B6;
  --color-neon-green: #34D399;
  --color-neon-yellow: #FBBF24;

  --color-neon-text-primary: #EDE9FE;
  --color-neon-text-secondary: #9F8BBF;
  --color-neon-text-muted: #5B4A73;

  /* === LIGHT MODE === */
  --color-light-void: #F8F5FF;
  --color-light-surface-0: #FFFFFF;
  --color-light-surface-1: #F3EEFF;
  --color-light-surface-2: #EDE5FC;
  --color-light-surface-3: #DDD1F5;

  --color-light-accent: #7C3AED;
  --color-light-accent-bold: #6D28D9;
  --color-light-accent-soft: #8B5CF6;

  --color-light-text-primary: #1E103A;
  --color-light-text-secondary: #5B4A73;
  --color-light-text-muted: #9F8BBF;

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
<!-- === DARK MODE === -->

<!-- Page title with violet glow -->
<h1 class="font-heading text-[40px] font-extrabold uppercase tracking-tight text-neon-violet
           [text-shadow:0_0_7px_rgba(168,85,247,0.6),0_0_20px_rgba(168,85,247,0.3)]">
  DASHBOARD_
</h1>

<!-- Primary button with violet glow -->
<button class="font-mono text-[13px] font-semibold uppercase tracking-wider
               bg-neon-violet text-white rounded-pill px-7 py-2.5
               shadow-[0_0_5px_rgba(168,85,247,0.4),0_0_20px_rgba(168,85,247,0.15)]
               hover:shadow-[0_0_8px_rgba(168,85,247,0.6),0_0_30px_rgba(168,85,247,0.3)]
               transition-all duration-200">
  EXECUTE
</button>

<!-- Sharp card with violet accent -->
<div class="bg-surface-0 border border-surface-3 rounded-sharp p-6 border-t-2 border-t-neon-violet">
  <h3 class="font-heading text-xl font-semibold text-neon-text-primary">Card Title</h3>
  <p class="font-body text-[15px] text-neon-text-secondary mt-2">Card content here.</p>
</div>

<!-- Terminal input with violet focus -->
<input class="font-mono text-sm bg-void border border-surface-3 rounded-terminal
              text-neon-text-primary px-4 py-3
              focus:border-neon-violet focus:shadow-[0_0_0_1px_#A855F7,0_0_15px_rgba(168,85,247,0.15)]
              focus:outline-none caret-neon-violet
              placeholder:text-neon-text-muted placeholder:italic"
       placeholder="type command..." />

<!-- Violet badge -->
<span class="font-mono text-[11px] font-medium uppercase tracking-wider
             text-neon-violet-bright bg-neon-violet/10 border border-neon-violet/25
             rounded-pill px-3 py-1">
  ACTIVE
</span>

<!-- === LIGHT MODE === -->

<!-- Page title (clean, no glow) -->
<h1 class="font-heading text-[40px] font-extrabold uppercase tracking-tight text-light-accent">
  DASHBOARD_
</h1>

<!-- Primary button (solid, subtle shadow) -->
<button class="font-mono text-[13px] font-semibold uppercase tracking-wider
               bg-light-accent text-white rounded-pill px-7 py-2.5
               shadow-[0_1px_3px_rgba(124,58,237,0.3)]
               hover:bg-light-accent-bold hover:shadow-[0_2px_8px_rgba(124,58,237,0.35)]
               transition-all duration-200">
  EXECUTE
</button>

<!-- Card with lavender tint -->
<div class="bg-light-surface-0 border border-light-surface-3 rounded-sharp p-6
            shadow-[0_1px_3px_rgba(124,58,237,0.04)]
            hover:shadow-[0_2px_12px_rgba(124,58,237,0.06)]">
  <h3 class="font-heading text-xl font-semibold text-light-text-primary">Card Title</h3>
  <p class="font-body text-[15px] text-light-text-secondary mt-2">Card content here.</p>
</div>

<!-- Input with violet focus ring -->
<input class="font-mono text-sm bg-white border border-light-surface-3 rounded-terminal
              text-light-text-primary px-4 py-3
              focus:border-light-accent focus:shadow-[0_0_0_2px_rgba(124,58,237,0.15)]
              focus:outline-none caret-light-accent
              placeholder:text-light-text-muted placeholder:italic"
       placeholder="type command..." />
```

---

## 7. Inspiration References

| Source                          | What to Borrow                                                          |
|---------------------------------|-------------------------------------------------------------------------|
| **Neon Terminal (original)**    | Shape language, monospace DNA, structural patterns                      |
| **Synthwave '84 (VS Code)**    | Purple/violet neon palette, dark void + glow aesthetic                  |
| **Shades of Purple (terminal)**| Bold purple accent hierarchy, deep backgrounds                          |
| **Linear (dark mode)**         | Surface elevation system, tight spacing, minimal borders                |
| **Linear (light mode)**        | Clean lavender-tinted surfaces, sophisticated restraint                 |
| **Figma (light mode)**         | Purple accent on white surfaces, lavender hover states                  |
| **Warp Terminal**              | Block-based UI, monospace-first, input styling                          |
| **Notion (light mode)**        | Clean light backgrounds with colorful accents, subtle shadows           |
| **Stripe Dashboard**           | Purple accent + white surface pairing, elegant light theme              |

---

## 8. Key Design Principles

1. **Terminal DNA preserved:** All headings, labels, navigation, badges, and interactive elements use JetBrains Mono. Only body text uses sans-serif. This is non-negotiable across all Neon Terminal variants.
2. **Violet is the new cyan:** Where Neon Terminal uses cyan, Neon Violet uses electric purple (#A855F7 dark / #7C3AED light). The accent hierarchy remains identical -- only the hue shifts.
3. **Glow in dark, shadow in light:** Dark mode gets neon glow effects (text-shadow, box-shadow with high spread and blur). Light mode gets elegant violet-tinted shadows (subtle, no glow). The effects serve the same role -- indicating focus and importance -- but through mode-appropriate techniques.
4. **Lavender, not inverted:** The light mode is NOT an inverted dark mode. It uses intentionally designed lavender-tinted surfaces (#F8F5FF page, #F3EEFF cards, #EDE5FC hovers) that create warmth without garish purple. Think "if Stripe went purple."
5. **Sharp vs. pill tension:** Same as original. Cards/panels = 0px radius (industrial). Buttons/badges = 9999px (futuristic). This contrast is a family trait.
6. **Uppercase everything interactive:** Buttons, badges, labels, nav headers -- all uppercase monospace. The command-line energy persists in both modes.
7. **Color is signal:** Violet = primary, blue = info, pink/rose = danger, green = success, amber = warning. Never decorative.
8. **Light mode is first-class:** The light mode is designed with the same care as dark mode. Proper contrast ratios, intentional surface layering, appropriate semantic colors. Not an afterthought.

---

## 9. Mode-Specific Summary

### Dark Mode At a Glance

- **Background:** Deep purple-tinted void (#08060E)
- **Accent:** Electric violet (#A855F7) with neon glow
- **Cards:** Dark surfaces with subtle violet borders
- **Focus:** Violet glow rings and shadows
- **Effects:** Scanlines, neon pulse, grid dots
- **Feel:** Synthwave command center. Confident. Ultraviolet darkness.

### Light Mode At a Glance

- **Background:** Soft lavender (#F8F5FF)
- **Accent:** Deep violet (#7C3AED) -- solid, no glow
- **Cards:** White with subtle lavender-tinted borders
- **Focus:** Clean violet focus rings with subtle shadow
- **Effects:** No scanlines. Subtle dot grid. Clean shadows.
- **Feel:** Sophisticated purple tech dashboard. If Linear and Stripe had a purple child.
