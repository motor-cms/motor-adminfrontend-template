# Neon Terminal Theme Spec

**Theme ID:** `neon-terminal`
**Direction:** Dark-mode-first, dev-tool-inspired admin panel with neon accents, monospace touches, and cyberpunk energy.
**Vibe:** Warp terminal meets cyberpunk dashboard. A hacker's command center that takes itself seriously but isn't afraid to glow.

---

## 1. Color Palette

A near-black void background punctuated by aggressive neon accents. Inspired by Warp terminal themes, Cyberpunk 2077 UI, and Linear's dark mode elevation system.

### Base / Background Scale

| Token             | Hex       | Usage                                      |
|-------------------|-----------|---------------------------------------------|
| `void`            | `#07080A` | Page background, deepest layer              |
| `surface-0`       | `#0D0F14` | Card backgrounds, sidebar                   |
| `surface-1`       | `#13161D` | Elevated cards, dropdowns, modals           |
| `surface-2`       | `#1A1E27` | Hover states, active sidebar items          |
| `surface-3`       | `#242832` | Borders, dividers, subtle separators        |

### Neon Accent Scale

| Token             | Hex       | Tailwind       | Usage                                |
|-------------------|-----------|----------------|--------------------------------------|
| `neon-cyan`       | `#00FFEE` | `cyan-300`     | Primary actions, links, focus rings  |
| `neon-cyan-muted` | `#0ABDC6` | `cyan-500`     | Secondary text accents, badges       |
| `neon-magenta`    | `#FF00AA` | `pink-500`     | Destructive/danger, critical alerts  |
| `neon-green`      | `#39FF14` | `green-400`    | Success states, online indicators    |
| `neon-yellow`     | `#FFE600` | `yellow-300`   | Warnings, pending states             |
| `neon-purple`     | `#BD00FF` | `purple-500`   | Info badges, secondary accents       |

### Text Scale

| Token             | Hex       | Usage                                      |
|-------------------|-----------|---------------------------------------------|
| `text-primary`    | `#E8ECF1` | Primary text (slightly warm white)          |
| `text-secondary`  | `#8B95A5` | Secondary text, labels, placeholders        |
| `text-muted`      | `#4A5568` | Disabled text, timestamps                   |
| `text-neon`       | `#00FFEE` | Highlighted text, active nav items          |

### Semantic Colors

| Token             | Hex       | Usage                                      |
|-------------------|-----------|---------------------------------------------|
| `success`         | `#39FF14` | Success toasts, completed states            |
| `warning`         | `#FFE600` | Warning toasts, caution states              |
| `error`           | `#FF00AA` | Error toasts, validation failures           |
| `info`            | `#BD00FF` | Informational toasts, tips                  |

### CSS Custom Properties

```css
:root {
  --neon-void: #07080A;
  --neon-surface-0: #0D0F14;
  --neon-surface-1: #13161D;
  --neon-surface-2: #1A1E27;
  --neon-surface-3: #242832;

  --neon-cyan: #00FFEE;
  --neon-cyan-muted: #0ABDC6;
  --neon-magenta: #FF00AA;
  --neon-green: #39FF14;
  --neon-yellow: #FFE600;
  --neon-purple: #BD00FF;

  --neon-text-primary: #E8ECF1;
  --neon-text-secondary: #8B95A5;
  --neon-text-muted: #4A5568;
}
```

---

## 2. Typography

### Font Pairing

**Headings:** JetBrains Mono (monospace, bold weight)
**Body:** IBM Plex Sans (clean, technical sans-serif)
**Code / Badges / Labels:** JetBrains Mono (monospace, regular weight)

This pairing creates maximum terminal energy in headings while keeping body text highly readable. Both fonts were designed for UI contexts and share a technical DNA.

### Google Fonts URL

```
https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700;800&display=swap
```

### Type Scale (Large and Bold)

| Element            | Font             | Size     | Weight | Line Height | Letter Spacing | Notes                                       |
|--------------------|------------------|----------|--------|-------------|----------------|---------------------------------------------|
| Page Title (h1)    | JetBrains Mono   | `40px`   | 800    | 1.1         | `-0.03em`      | UPPERCASE, neon-cyan glow on dark bg         |
| Section Title (h2) | JetBrains Mono   | `28px`   | 700    | 1.2         | `-0.02em`      | Title case                                   |
| Card Title (h3)    | JetBrains Mono   | `20px`   | 600    | 1.3         | `-0.01em`      |                                              |
| Body               | IBM Plex Sans    | `15px`   | 400    | 1.6         | `0`            |                                              |
| Body Small         | IBM Plex Sans    | `13px`   | 400    | 1.5         | `0.01em`       |                                              |
| Label              | JetBrains Mono   | `11px`   | 600    | 1.4         | `0.08em`       | UPPERCASE, neon-cyan-muted color             |
| Badge              | JetBrains Mono   | `11px`   | 500    | 1           | `0.05em`       | UPPERCASE                                    |
| Code               | JetBrains Mono   | `13px`   | 400    | 1.5         | `0`            | Inline code snippets                         |
| Nav Item           | JetBrains Mono   | `13px`   | 500    | 1.4         | `0.02em`       | Sidebar navigation                           |

### CSS

```css
.neon-h1 {
  font-family: 'JetBrains Mono', monospace;
  font-size: 40px;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: var(--neon-cyan);
  text-shadow:
    0 0 7px rgba(0, 255, 238, 0.6),
    0 0 20px rgba(0, 255, 238, 0.3),
    0 0 42px rgba(0, 255, 238, 0.15);
}

.neon-h2 {
  font-family: 'JetBrains Mono', monospace;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--neon-text-primary);
}

.neon-body {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  color: var(--neon-text-primary);
}

.neon-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--neon-cyan-muted);
}
```

---

## 3. Shape Language

A deliberate tension between **razor-sharp containers** and **pill-shaped interactive elements**. Cards and panels are angular and industrial. Buttons and badges are smooth and futuristic.

### Border Radius Tokens

| Token              | Value    | Usage                                       |
|--------------------|----------|---------------------------------------------|
| `radius-none`      | `0px`    | Cards, panels, modal containers, tables      |
| `radius-sm`        | `2px`    | Input fields, code blocks                    |
| `radius-pill`      | `9999px` | Buttons, badges, pills, tags, toggles        |
| `radius-circle`    | `50%`    | Avatars, status indicators                   |

### Design Rules

1. **Cards / Panels / Modals:** `border-radius: 0px` -- Hard, sharp corners. Industrial. Zero softness.
2. **Buttons:** `border-radius: 9999px` -- Full pill shape. Futuristic contrast against sharp containers.
3. **Input fields:** `border-radius: 2px` -- Almost sharp, terminal-like.
4. **Badges / Tags:** `border-radius: 9999px` -- Pill-shaped, floating over dark surfaces.
5. **Avatars:** `border-radius: 50%` -- Classic circle.
6. **Dropdown menus:** `border-radius: 0px` -- Sharp to match card containers.
7. **Sidebar:** Sharp corners everywhere, items have no radius.

### Corner Cut Effect (Optional Enhancement)

For extra cyberpunk energy, key containers can use a CSS clip-path to create an angled corner cut:

```css
.neon-card-cut {
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

This creates a chamfered/beveled look where the top-right and bottom-left corners are cut at 45 degrees -- a signature cyberpunk detail.

---

## 4. Component Styling

### Buttons

```css
/* Primary Button */
.neon-btn-primary {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--neon-void);
  background: var(--neon-cyan);
  border: none;
  border-radius: 9999px;
  padding: 10px 28px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow:
    0 0 5px rgba(0, 255, 238, 0.4),
    0 0 20px rgba(0, 255, 238, 0.15);
}

.neon-btn-primary:hover {
  box-shadow:
    0 0 8px rgba(0, 255, 238, 0.6),
    0 0 30px rgba(0, 255, 238, 0.3),
    0 0 60px rgba(0, 255, 238, 0.1);
  transform: translateY(-1px);
}

.neon-btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 0 5px rgba(0, 255, 238, 0.4);
}

/* Ghost / Outline Button */
.neon-btn-ghost {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--neon-cyan);
  background: transparent;
  border: 1px solid var(--neon-surface-3);
  border-radius: 9999px;
  padding: 10px 28px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.neon-btn-ghost:hover {
  border-color: var(--neon-cyan);
  box-shadow: 0 0 10px rgba(0, 255, 238, 0.2);
}

/* Danger Button */
.neon-btn-danger {
  color: var(--neon-void);
  background: var(--neon-magenta);
  border-radius: 9999px;
  box-shadow:
    0 0 5px rgba(255, 0, 170, 0.4),
    0 0 20px rgba(255, 0, 170, 0.15);
}
```

### Input Fields (Terminal Style)

```css
.neon-input {
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  color: var(--neon-text-primary);
  background: var(--neon-void);
  border: 1px solid var(--neon-surface-3);
  border-radius: 2px;
  padding: 12px 16px;
  transition: all 0.2s ease;
  caret-color: var(--neon-cyan);
}

.neon-input::placeholder {
  color: var(--neon-text-muted);
  font-style: italic;
}

.neon-input:focus {
  outline: none;
  border-color: var(--neon-cyan);
  box-shadow:
    0 0 0 1px var(--neon-cyan),
    0 0 15px rgba(0, 255, 238, 0.15);
}

.neon-input:focus::before {
  /* Optional: blinking cursor prefix like a terminal prompt */
  content: '> ';
}

/* Input with prompt prefix */
.neon-input-prompted {
  padding-left: 32px;
  position: relative;
}

.neon-input-prompted::before {
  content: '>';
  position: absolute;
  left: 12px;
  color: var(--neon-cyan);
  font-family: 'JetBrains Mono', monospace;
}
```

### Cards

```css
.neon-card {
  background: var(--neon-surface-0);
  border: 1px solid var(--neon-surface-3);
  border-radius: 0px;
  padding: 24px;
  position: relative;
}

/* Card with top accent line */
.neon-card-accent {
  border-top: 2px solid var(--neon-cyan);
}

/* Card with full glow on hover */
.neon-card:hover {
  border-color: rgba(0, 255, 238, 0.3);
  box-shadow: 0 0 20px rgba(0, 255, 238, 0.05);
}

/* Stat card with large number */
.neon-stat-card {
  background: var(--neon-surface-0);
  border: 1px solid var(--neon-surface-3);
  border-radius: 0px;
  padding: 28px;
}

.neon-stat-value {
  font-family: 'JetBrains Mono', monospace;
  font-size: 48px;
  font-weight: 800;
  color: var(--neon-cyan);
  text-shadow: 0 0 20px rgba(0, 255, 238, 0.3);
  line-height: 1;
}

.neon-stat-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--neon-text-muted);
  margin-top: 8px;
}
```

### Badges / Tags

```css
.neon-badge {
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

.neon-badge-cyan {
  color: var(--neon-cyan);
  background: rgba(0, 255, 238, 0.1);
  border: 1px solid rgba(0, 255, 238, 0.25);
}

.neon-badge-magenta {
  color: var(--neon-magenta);
  background: rgba(255, 0, 170, 0.1);
  border: 1px solid rgba(255, 0, 170, 0.25);
}

.neon-badge-green {
  color: var(--neon-green);
  background: rgba(57, 255, 20, 0.1);
  border: 1px solid rgba(57, 255, 20, 0.25);
}

.neon-badge-yellow {
  color: var(--neon-yellow);
  background: rgba(255, 230, 0, 0.1);
  border: 1px solid rgba(255, 230, 0, 0.25);
}

/* Status dot inside badge */
.neon-badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  box-shadow: 0 0 6px currentColor;
}
```

### Sidebar Navigation

```css
.neon-sidebar {
  background: var(--neon-surface-0);
  border-right: 1px solid var(--neon-surface-3);
  width: 260px;
  padding: 16px 0;
}

.neon-nav-item {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: var(--neon-text-secondary);
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 0;
  border-left: 2px solid transparent;
  transition: all 0.15s ease;
  cursor: pointer;
}

.neon-nav-item:hover {
  color: var(--neon-text-primary);
  background: var(--neon-surface-2);
}

.neon-nav-item.active {
  color: var(--neon-cyan);
  border-left-color: var(--neon-cyan);
  background: rgba(0, 255, 238, 0.05);
  text-shadow: 0 0 10px rgba(0, 255, 238, 0.3);
}

.neon-nav-section-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--neon-text-muted);
  padding: 20px 20px 8px;
}
```

### Tables / Data Grids

```css
.neon-table {
  width: 100%;
  border-collapse: collapse;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 14px;
}

.neon-table thead th {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--neon-text-muted);
  background: var(--neon-surface-1);
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid var(--neon-surface-3);
}

.neon-table tbody tr {
  border-bottom: 1px solid var(--neon-surface-3);
  transition: background 0.1s ease;
}

.neon-table tbody tr:hover {
  background: var(--neon-surface-2);
}

.neon-table tbody td {
  padding: 14px 16px;
  color: var(--neon-text-primary);
}

/* Monospace columns (IDs, codes, timestamps) */
.neon-table .col-mono {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  color: var(--neon-text-secondary);
}
```

### Toasts / Notifications

```css
.neon-toast {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 14px;
  background: var(--neon-surface-1);
  border-radius: 0px;
  border-left: 3px solid;
  padding: 16px 20px;
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.5),
    0 0 1px rgba(0, 255, 238, 0.2);
}

.neon-toast-success {
  border-left-color: var(--neon-green);
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.5),
    0 0 15px rgba(57, 255, 20, 0.1);
}

.neon-toast-error {
  border-left-color: var(--neon-magenta);
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.5),
    0 0 15px rgba(255, 0, 170, 0.1);
}

.neon-toast-warning {
  border-left-color: var(--neon-yellow);
}
```

### Modals / Dialogs

```css
.neon-modal-overlay {
  background: rgba(7, 8, 10, 0.85);
  backdrop-filter: blur(8px);
}

.neon-modal {
  background: var(--neon-surface-0);
  border: 1px solid var(--neon-surface-3);
  border-radius: 0px;
  box-shadow:
    0 24px 80px rgba(0, 0, 0, 0.6),
    0 0 1px rgba(0, 255, 238, 0.3);
  max-width: 520px;
  width: 100%;
}

.neon-modal-header {
  padding: 20px 24px;
  border-bottom: 1px solid var(--neon-surface-3);
}

.neon-modal-title {
  font-family: 'JetBrains Mono', monospace;
  font-size: 18px;
  font-weight: 700;
  color: var(--neon-text-primary);
}
```

### Scrollbar Styling

```css
.neon-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.neon-scrollbar::-webkit-scrollbar-track {
  background: var(--neon-void);
}

.neon-scrollbar::-webkit-scrollbar-thumb {
  background: var(--neon-surface-3);
  border-radius: 0px;
}

.neon-scrollbar::-webkit-scrollbar-thumb:hover {
  background: var(--neon-cyan-muted);
}
```

---

## 5. Special Effects

### Scanline Overlay (Subtle)

A barely-visible CRT scanline effect on the page background for maximum terminal nostalgia. Use sparingly.

```css
.neon-scanlines::after {
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
```

### Neon Pulse Animation (For key CTAs)

```css
@keyframes neon-pulse {
  0%, 100% {
    box-shadow:
      0 0 5px rgba(0, 255, 238, 0.4),
      0 0 20px rgba(0, 255, 238, 0.15);
  }
  50% {
    box-shadow:
      0 0 10px rgba(0, 255, 238, 0.6),
      0 0 40px rgba(0, 255, 238, 0.25),
      0 0 80px rgba(0, 255, 238, 0.1);
  }
}

.neon-pulse {
  animation: neon-pulse 2s ease-in-out infinite;
}
```

### Typing Cursor Blink (For section titles)

```css
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.neon-cursor::after {
  content: '_';
  color: var(--neon-cyan);
  animation: blink 1s step-end infinite;
  margin-left: 2px;
}
```

### Grid Background Pattern

A subtle dot-grid pattern behind the main content area, like graph paper in a sci-fi interface:

```css
.neon-grid-bg {
  background-image: radial-gradient(
    circle,
    rgba(0, 255, 238, 0.06) 1px,
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
  /* Neon Terminal Colors */
  --color-void: #07080A;
  --color-surface-0: #0D0F14;
  --color-surface-1: #13161D;
  --color-surface-2: #1A1E27;
  --color-surface-3: #242832;

  --color-neon-cyan: #00FFEE;
  --color-neon-cyan-muted: #0ABDC6;
  --color-neon-magenta: #FF00AA;
  --color-neon-green: #39FF14;
  --color-neon-yellow: #FFE600;
  --color-neon-purple: #BD00FF;

  --color-neon-text-primary: #E8ECF1;
  --color-neon-text-secondary: #8B95A5;
  --color-neon-text-muted: #4A5568;

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
<!-- Page title with glow -->
<h1 class="font-heading text-[40px] font-extrabold uppercase tracking-tight text-neon-cyan
           [text-shadow:0_0_7px_rgba(0,255,238,0.6),0_0_20px_rgba(0,255,238,0.3)]">
  DASHBOARD_
</h1>

<!-- Primary button -->
<button class="font-mono text-[13px] font-semibold uppercase tracking-wider
               bg-neon-cyan text-void rounded-pill px-7 py-2.5
               shadow-[0_0_5px_rgba(0,255,238,0.4),0_0_20px_rgba(0,255,238,0.15)]
               hover:shadow-[0_0_8px_rgba(0,255,238,0.6),0_0_30px_rgba(0,255,238,0.3)]
               transition-all duration-200">
  EXECUTE
</button>

<!-- Sharp card -->
<div class="bg-surface-0 border border-surface-3 rounded-sharp p-6">
  <h3 class="font-heading text-xl font-semibold text-neon-text-primary">Card Title</h3>
  <p class="font-body text-[15px] text-neon-text-secondary mt-2">Card content here.</p>
</div>

<!-- Terminal input -->
<input class="font-mono text-sm bg-void border border-surface-3 rounded-terminal
              text-neon-text-primary px-4 py-3
              focus:border-neon-cyan focus:shadow-[0_0_0_1px_#00FFEE,0_0_15px_rgba(0,255,238,0.15)]
              focus:outline-none caret-neon-cyan
              placeholder:text-neon-text-muted placeholder:italic"
       placeholder="type command..." />

<!-- Neon badge -->
<span class="font-mono text-[11px] font-medium uppercase tracking-wider
             text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/25
             rounded-pill px-3 py-1">
  ACTIVE
</span>
```

---

## 7. Inspiration References

| Source               | What to Borrow                                                          |
|----------------------|-------------------------------------------------------------------------|
| **Warp Terminal**    | Block-based UI, monospace-first, dark void backgrounds, input styling   |
| **Linear (dark)**    | Elevation through surface layering, minimal color use, tight spacing    |
| **Cyberpunk 2077 UI**| Angled corner cuts, neon cyan/magenta palette, aggressive typography    |
| **Vercel / Geist**   | Background scale system (10 levels), type precision, minimal borders    |
| **VS Code (dark)**   | Sidebar patterns, monospace navigation, focus ring glow effects         |
| **Raycast**          | Speed-focused UI, keyboard-first feel, compact density                  |
| **GitHub Dark Mode** | Subtle surface elevation, muted secondary text, clean data tables       |

---

## 8. Key Design Principles

1. **Terminal-first typography:** All headings, labels, navigation, badges, and interactive elements use JetBrains Mono. Only body/paragraph text uses the sans-serif.
2. **Glow as hierarchy:** The intensity of neon glow indicates importance. Primary actions glow bright; secondary elements have muted or no glow.
3. **Sharp vs. pill tension:** Containers are razor-sharp (0 radius). Interactive elements are fully rounded (pill). This contrast creates visual energy.
4. **Dark is not gray:** The base background is near-black (#07080A), not dark gray. Surfaces build up in extremely subtle steps. The palette should feel like staring into a void with neon floating on top.
5. **Uppercase everything interactive:** Buttons, badges, labels, nav section headers -- all uppercase monospace. This creates the "command line" energy.
6. **Restraint on glow:** Despite being a neon theme, glow effects are concentrated on focus states and primary CTAs. If everything glows, nothing glows.
7. **Color is signal:** Neon colors are used semantically (cyan = primary, green = success, magenta = danger, yellow = warning, purple = info). They are never decorative.
