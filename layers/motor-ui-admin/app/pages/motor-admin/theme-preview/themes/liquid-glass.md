# Liquid Glass Theme

**Inspired by:** Apple's Liquid Glass design language (iOS 26 / macOS Tahoe 26, WWDC 2025)

A premium, translucent admin panel theme built around frosted glass surfaces, layered depth, and subtle light refraction. Every surface feels like polished glass floating over a softly lit background -- sophisticated, airy, and unmistakably modern.

---

## 1. Color Palette

### Light Mode

| Token | Role | Hex | Tailwind | RGBA (glass use) |
|---|---|---|---|---|
| `--glass-bg` | Page background | `#EEF0F5` | `slate-100` | -- |
| `--glass-surface` | Glass panel fill | `#FFFFFF` | `white` | `rgba(255, 255, 255, 0.62)` |
| `--glass-surface-raised` | Raised glass fill | `#FFFFFF` | `white` | `rgba(255, 255, 255, 0.72)` |
| `--glass-surface-floating` | Modal / popover fill | `#FFFFFF` | `white` | `rgba(255, 255, 255, 0.80)` |
| `--glass-border` | Glass edge highlight | `#FFFFFF` | `white` | `rgba(255, 255, 255, 0.45)` |
| `--glass-border-subtle` | Secondary border | `#D1D5DB` | `gray-300` | `rgba(209, 213, 219, 0.35)` |
| `--glass-text-primary` | Body text | `#1C1C1E` | `gray-900` | -- |
| `--glass-text-secondary` | Muted text | `#636366` | `gray-500` | -- |
| `--glass-text-tertiary` | Placeholder text | `#AEAEB2` | `gray-400` | -- |
| `--glass-accent` | Primary accent | `#007AFF` | `blue-500` | `rgba(0, 122, 255, 0.15)` |
| `--glass-accent-hover` | Accent hover | `#0063D1` | `blue-600` | `rgba(0, 99, 209, 0.20)` |
| `--glass-success` | Success | `#34C759` | `green-500` | -- |
| `--glass-warning` | Warning | `#FF9500` | `orange-500` | -- |
| `--glass-error` | Error / destructive | `#FF3B30` | `red-500` | -- |
| `--glass-info` | Information | `#5AC8FA` | `cyan-400` | -- |

### Dark Mode

| Token | Role | Hex | Tailwind | RGBA (glass use) |
|---|---|---|---|---|
| `--glass-bg` | Page background | `#0A0A0F` | `gray-950` | -- |
| `--glass-surface` | Glass panel fill | `#1C1C1E` | `gray-900` | `rgba(28, 28, 30, 0.55)` |
| `--glass-surface-raised` | Raised glass fill | `#2C2C2E` | `gray-800` | `rgba(44, 44, 46, 0.65)` |
| `--glass-surface-floating` | Modal / popover fill | `#3A3A3C` | `gray-700` | `rgba(58, 58, 60, 0.75)` |
| `--glass-border` | Glass edge highlight | `#FFFFFF` | `white` | `rgba(255, 255, 255, 0.12)` |
| `--glass-border-subtle` | Secondary border | `#48484A` | `gray-600` | `rgba(72, 72, 74, 0.40)` |
| `--glass-text-primary` | Body text | `#F2F2F7` | `gray-100` | -- |
| `--glass-text-secondary` | Muted text | `#AEAEB2` | `gray-400` | -- |
| `--glass-text-tertiary` | Placeholder text | `#636366` | `gray-500` | -- |
| `--glass-accent` | Primary accent | `#0A84FF` | `blue-500` | `rgba(10, 132, 255, 0.20)` |
| `--glass-accent-hover` | Accent hover | `#409CFF` | `blue-400` | `rgba(64, 156, 255, 0.28)` |
| `--glass-success` | Success | `#30D158` | `green-400` | -- |
| `--glass-warning` | Warning | `#FF9F0A` | `orange-400` | -- |
| `--glass-error` | Error / destructive | `#FF453A` | `red-400` | -- |
| `--glass-info` | Information | `#64D2FF` | `cyan-300` | -- |

### NuxtUI Color Mapping

```ts
// nuxt.config.ts  or  app.config.ts
ui: {
  colors: {
    primary: 'blue',    // Apple system blue
    secondary: 'slate',
    success: 'green',
    warning: 'orange',
    error: 'red',
    info: 'cyan',
    neutral: 'slate'
  }
}
```

---

## 2. Glass Effect Definitions

Three tiers of glass elevation, from subtle to prominent.

### Surface Glass (cards, sidebar, table containers)

```css
.glass-surface {
  background: rgba(255, 255, 255, 0.62);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.45);
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.04),
    0 4px 12px rgba(0, 0, 0, 0.03),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
}

/* Dark mode */
.dark .glass-surface {
  background: rgba(28, 28, 30, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.20),
    0 4px 12px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
}
```

### Raised Glass (hovered cards, dropdowns, popovers)

```css
.glass-raised {
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(24px) saturate(190%);
  -webkit-backdrop-filter: blur(24px) saturate(190%);
  border: 1px solid rgba(255, 255, 255, 0.50);
  box-shadow:
    0 2px 6px rgba(0, 0, 0, 0.05),
    0 8px 24px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
}

/* Dark mode */
.dark .glass-raised {
  background: rgba(44, 44, 46, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow:
    0 2px 6px rgba(0, 0, 0, 0.25),
    0 8px 24px rgba(0, 0, 0, 0.20),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}
```

### Floating Glass (modals, command palette, overlays)

```css
.glass-floating {
  background: rgba(255, 255, 255, 0.80);
  backdrop-filter: blur(40px) saturate(200%);
  -webkit-backdrop-filter: blur(40px) saturate(200%);
  border: 1px solid rgba(255, 255, 255, 0.55);
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.06),
    0 16px 48px rgba(0, 0, 0, 0.10),
    inset 0 1px 0 rgba(255, 255, 255, 0.7);
}

/* Dark mode */
.dark .glass-floating {
  background: rgba(58, 58, 60, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.30),
    0 16px 48px rgba(0, 0, 0, 0.30),
    inset 0 1px 0 rgba(255, 255, 255, 0.10);
}
```

### Glass Tier Summary

| Tier | Blur | Saturate | Light BG Opacity | Dark BG Opacity | Use Case |
|---|---|---|---|---|---|
| Surface | `16px` | `180%` | `0.62` | `0.55` | Cards, sidebar, table wrappers |
| Raised | `24px` | `190%` | `0.72` | `0.65` | Hovered cards, dropdowns |
| Floating | `40px` | `200%` | `0.80` | `0.75` | Modals, command palette, overlays |

---

## 3. Background

The background behind the glass is critical -- it gives the glass surfaces their visual life. Without it, the translucency has nothing to refract and the effect falls flat.

### Light Mode Background

A subtle two-tone mesh gradient in cool slate tones with a hint of the accent blue. Calm and professional.

```css
body {
  background-color: #EEF0F5;
  background-image:
    radial-gradient(ellipse at 20% 0%, rgba(0, 122, 255, 0.06) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 100%, rgba(175, 82, 222, 0.05) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 50%, rgba(90, 200, 250, 0.03) 0%, transparent 70%);
}
```

### Dark Mode Background

Deep near-black base with very subtle colored orbs that create gentle ambient light visible through the glass panels.

```css
body.dark {
  background-color: #0A0A0F;
  background-image:
    radial-gradient(ellipse at 15% 10%, rgba(10, 132, 255, 0.08) 0%, transparent 45%),
    radial-gradient(ellipse at 85% 90%, rgba(175, 82, 222, 0.06) 0%, transparent 45%),
    radial-gradient(ellipse at 50% 50%, rgba(90, 200, 250, 0.03) 0%, transparent 60%);
}
```

### Tailwind Utility Approach

```html
<!-- Light mode wrapper -->
<div class="min-h-screen bg-slate-100
  bg-[radial-gradient(ellipse_at_20%_0%,rgba(0,122,255,0.06)_0%,transparent_50%),radial-gradient(ellipse_at_80%_100%,rgba(175,82,222,0.05)_0%,transparent_50%)]">
</div>

<!-- Or use a CSS class in main.css for cleanliness -->
```

---

## 4. Font Pairing

Apple uses SF Pro, which is not available on the web. These alternatives closely match its geometric clarity, optical spacing, and neutral warmth.

### Primary: Inter

Clean, highly legible, designed for screens. Excellent at small sizes. Closest widely-available match to SF Pro.

### Monospace: JetBrains Mono

For code blocks, data tables, and technical content.

### Google Fonts Import

```
https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap
```

### Font Scale

| Role | Weight | Size | Tracking |
|---|---|---|---|
| H1 (page title) | 700 (Bold) | 28px / 1.75rem | `-0.02em` |
| H2 (section title) | 600 (Semibold) | 22px / 1.375rem | `-0.01em` |
| H3 (card title) | 600 (Semibold) | 17px / 1.0625rem | `0` |
| Body | 400 (Regular) | 15px / 0.9375rem | `0` |
| Body small | 400 (Regular) | 13px / 0.8125rem | `0.01em` |
| Label / caption | 500 (Medium) | 12px / 0.75rem | `0.02em` |
| Code / mono | 400 (Regular) | 13px / 0.8125rem | `0` |

Apple favors tight negative letter-spacing on headings and neutral spacing on body text.

---

## 5. Shape Language

Generous, continuous rounded corners in the Apple tradition. Larger elements get larger radii.

### Border Radius Scale

| Element | Radius | Tailwind | Notes |
|---|---|---|---|
| Page-level panels (sidebar) | `20px` | `rounded-2xl` | Major structural containers |
| Cards | `16px` | `rounded-xl` | Content cards, table wrappers |
| Modals / dialogs | `20px` | `rounded-2xl` | Floating glass panels |
| Buttons (default) | `10px` | `rounded-[10px]` | Slightly softer than `lg` |
| Buttons (pill) | `9999px` | `rounded-full` | Toggle pills, tags |
| Inputs | `10px` | `rounded-[10px]` | Match button radius |
| Badges / chips | `8px` | `rounded-lg` | Small glass pills |
| Avatars | `9999px` | `rounded-full` | Always circular |
| Tooltips | `8px` | `rounded-lg` | Small floating glass |
| Dropdowns | `14px` | `rounded-[14px]` | Between card and button |

### Continuous Corners

Where possible, use `border-radius` with matched inner/outer radii (outer = inner + padding) to achieve Apple's "squircle" feel. CSS `border-radius` is close enough for web use.

---

## 6. Component Styling

### Sidebar

A tall glass panel pinned to the left, floating slightly above the mesh gradient background.

```css
.sidebar {
  /* Surface glass */
  background: rgba(255, 255, 255, 0.62);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border-right: 1px solid rgba(255, 255, 255, 0.45);
  box-shadow:
    1px 0 4px rgba(0, 0, 0, 0.03),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
  border-radius: 0 20px 20px 0; /* rounded on the inside edge */
  padding: 16px 12px;
}

.sidebar-item {
  padding: 8px 12px;
  border-radius: 10px;
  color: var(--glass-text-secondary);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.sidebar-item:hover {
  background: rgba(0, 122, 255, 0.08);
  color: var(--glass-text-primary);
}

.sidebar-item.active {
  background: rgba(0, 122, 255, 0.15);
  color: #007AFF;
  font-weight: 500;
}

/* Dark mode */
.dark .sidebar {
  background: rgba(28, 28, 30, 0.55);
  border-right: 1px solid rgba(255, 255, 255, 0.10);
}
.dark .sidebar-item:hover {
  background: rgba(10, 132, 255, 0.12);
}
.dark .sidebar-item.active {
  background: rgba(10, 132, 255, 0.20);
  color: #0A84FF;
}
```

### Cards

Frosted glass panels that float above the background with a subtle highlight edge on top.

```css
.card {
  /* Surface glass */
  background: rgba(255, 255, 255, 0.62);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 16px;
  padding: 20px;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.04),
    0 4px 12px rgba(0, 0, 0, 0.03),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  /* Elevated to raised glass */
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(24px) saturate(190%);
  box-shadow:
    0 2px 6px rgba(0, 0, 0, 0.05),
    0 8px 24px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
  transform: translateY(-1px);
}

/* Dark mode */
.dark .card {
  background: rgba(28, 28, 30, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.12);
}
.dark .card:hover {
  background: rgba(44, 44, 46, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.15);
}
```

### Buttons

#### Primary Button (solid glass accent)

```css
.btn-primary {
  background: rgba(0, 122, 255, 0.88);
  backdrop-filter: blur(8px) saturate(160%);
  -webkit-backdrop-filter: blur(8px) saturate(160%);
  color: #FFFFFF;
  border: 1px solid rgba(255, 255, 255, 0.20);
  border-radius: 10px;
  padding: 8px 18px;
  font-weight: 500;
  font-size: 14px;
  box-shadow:
    0 1px 3px rgba(0, 122, 255, 0.20),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary:hover {
  background: rgba(0, 99, 209, 0.92);
  box-shadow:
    0 2px 8px rgba(0, 122, 255, 0.30),
    inset 0 1px 0 rgba(255, 255, 255, 0.20);
  transform: translateY(-0.5px);
}
```

#### Secondary Button (glass outline)

```css
.btn-secondary {
  background: rgba(255, 255, 255, 0.40);
  backdrop-filter: blur(12px) saturate(170%);
  -webkit-backdrop-filter: blur(12px) saturate(170%);
  color: #007AFF;
  border: 1px solid rgba(0, 122, 255, 0.25);
  border-radius: 10px;
  padding: 8px 18px;
  font-weight: 500;
  font-size: 14px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-secondary:hover {
  background: rgba(0, 122, 255, 0.10);
  border-color: rgba(0, 122, 255, 0.40);
}

/* Dark mode */
.dark .btn-secondary {
  background: rgba(255, 255, 255, 0.08);
  color: #0A84FF;
  border: 1px solid rgba(10, 132, 255, 0.30);
}
```

#### Ghost Button (minimal glass)

```css
.btn-ghost {
  background: transparent;
  color: var(--glass-text-secondary);
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 8px 18px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(8px);
  border-color: rgba(255, 255, 255, 0.30);
}

.dark .btn-ghost:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.10);
}
```

### Inputs

Glass input fields with a subtle inset shadow to suggest depth "into" the glass.

```css
.input {
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(8px) saturate(160%);
  -webkit-backdrop-filter: blur(8px) saturate(160%);
  border: 1px solid rgba(209, 213, 219, 0.50);
  border-radius: 10px;
  padding: 10px 14px;
  font-size: 15px;
  color: var(--glass-text-primary);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.04);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.input::placeholder {
  color: var(--glass-text-tertiary);
}

.input:focus {
  outline: none;
  border-color: rgba(0, 122, 255, 0.50);
  box-shadow:
    inset 0 1px 3px rgba(0, 0, 0, 0.04),
    0 0 0 3px rgba(0, 122, 255, 0.12);
}

/* Dark mode */
.dark .input {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.15);
}
.dark .input:focus {
  border-color: rgba(10, 132, 255, 0.50);
  box-shadow:
    inset 0 1px 3px rgba(0, 0, 0, 0.15),
    0 0 0 3px rgba(10, 132, 255, 0.15);
}
```

### Modals / Dialogs

The most prominent glass tier. Heavy blur with a scrim overlay behind.

```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.modal {
  /* Floating glass */
  background: rgba(255, 255, 255, 0.80);
  backdrop-filter: blur(40px) saturate(200%);
  -webkit-backdrop-filter: blur(40px) saturate(200%);
  border: 1px solid rgba(255, 255, 255, 0.55);
  border-radius: 20px;
  padding: 28px;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.06),
    0 16px 48px rgba(0, 0, 0, 0.10),
    inset 0 1px 0 rgba(255, 255, 255, 0.7);
  max-width: 520px;
  width: 100%;
}

/* Dark mode */
.dark .modal-overlay {
  background: rgba(0, 0, 0, 0.50);
}
.dark .modal {
  background: rgba(58, 58, 60, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.18);
}
```

### Navigation Bar (top bar)

A horizontal glass strip across the top of the content area.

```css
.navbar {
  background: rgba(255, 255, 255, 0.60);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.40);
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.03),
    inset 0 -1px 0 rgba(0, 0, 0, 0.03);
  padding: 0 20px;
  height: 56px;
}

.dark .navbar {
  background: rgba(28, 28, 30, 0.50);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
```

### Badges / Chips

Small glass pills for status indicators and tags.

```css
.badge {
  background: rgba(255, 255, 255, 0.50);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 8px;
  padding: 3px 10px;
  font-size: 12px;
  font-weight: 500;
}

.badge-accent {
  background: rgba(0, 122, 255, 0.12);
  color: #007AFF;
  border: 1px solid rgba(0, 122, 255, 0.20);
}

.badge-success {
  background: rgba(52, 199, 89, 0.12);
  color: #248A3D;
  border: 1px solid rgba(52, 199, 89, 0.20);
}

.badge-warning {
  background: rgba(255, 149, 0, 0.12);
  color: #C93400;
  border: 1px solid rgba(255, 149, 0, 0.20);
}

.badge-error {
  background: rgba(255, 59, 48, 0.12);
  color: #D70015;
  border: 1px solid rgba(255, 59, 48, 0.20);
}

/* Dark mode badges use lighter text */
.dark .badge-accent { color: #0A84FF; }
.dark .badge-success { color: #30D158; }
.dark .badge-warning { color: #FF9F0A; }
.dark .badge-error { color: #FF453A; }
```

### Data Table

```css
.table-wrapper {
  /* Surface glass */
  background: rgba(255, 255, 255, 0.62);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 16px;
  overflow: hidden;
}

.table-header {
  background: rgba(0, 0, 0, 0.02);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--glass-text-secondary);
}

.table-row {
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  transition: background 0.15s ease;
}

.table-row:hover {
  background: rgba(0, 122, 255, 0.04);
}

.table-row:last-child {
  border-bottom: none;
}

/* Dark mode */
.dark .table-header {
  background: rgba(255, 255, 255, 0.03);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}
.dark .table-row {
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}
.dark .table-row:hover {
  background: rgba(10, 132, 255, 0.06);
}
```

---

## 7. Depth System

Three elevation levels that create spatial hierarchy through increasing glass intensity.

| Level | Name | Blur | BG Opacity (light) | BG Opacity (dark) | Shadow Depth | Use |
|---|---|---|---|---|---|---|
| 0 | Surface | `16px` | `0.62` | `0.55` | Subtle | Sidebar, cards, table wrappers, nav |
| 1 | Raised | `24px` | `0.72` | `0.65` | Medium | Hovered cards, dropdowns, popovers |
| 2 | Floating | `40px` | `0.80` | `0.75` | Prominent | Modals, command palette, toasts |

### Depth Transitions

When an element changes elevation (e.g., card hover), animate smoothly:

```css
transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
```

This cubic-bezier matches Apple's standard ease curve -- quick start, gentle deceleration.

---

## 8. Light and Dark Mode Summary

### Light Mode Personality

- **Base feel:** Bright, airy, open -- like looking through a frosted window on a clear day
- **Background:** Cool slate (`#EEF0F5`) with subtle blue/purple radial tints
- **Glass:** White at varying transparency. The `inset 0 1px 0 rgba(255,255,255,0.5)` top highlight is key -- it simulates light catching the top edge of the glass
- **Shadows:** Very soft, barely there. Just enough to separate layers
- **Text:** Near-black primary (`#1C1C1E`), true Apple system gray secondary
- **Accent:** Apple system blue `#007AFF` with translucent fills for active states

### Dark Mode Personality

- **Base feel:** Deep, moody, cinematic -- glass panels glow faintly against a dark void
- **Background:** Near-black (`#0A0A0F`) with subtle colored orbs bleeding through the glass
- **Glass:** Dark gray at varying transparency. The `inset` highlight becomes much subtler (`rgba(255,255,255,0.06-0.10)`) -- just a faint shimmer
- **Shadows:** Deeper and more diffuse. Essential for separating dark-on-dark surfaces
- **Text:** Off-white primary (`#F2F2F7`), muted gray secondary
- **Accent:** Slightly brighter Apple blue `#0A84FF` -- the dark mode variant Apple uses to maintain contrast

### Mode Transition

All glass properties should transition smoothly when switching modes:

```css
* {
  transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
}
```

---

## 9. Accessibility Notes

Apple's Liquid Glass has drawn criticism for contrast and legibility issues. This spec addresses those concerns for an admin panel context where readability is paramount.

- **Text contrast:** All text-on-glass combinations meet WCAG AA (4.5:1 for body, 3:1 for large text). The glass opacity values in this spec are deliberately higher than pure glassmorphism demos to ensure readable surfaces.
- **Focus rings:** Use a visible 3px accent-colored ring (`0 0 0 3px rgba(0, 122, 255, 0.12)`) on all interactive elements.
- **Reduced motion:** Respect `prefers-reduced-motion` -- disable hover transforms, simplify transitions.
- **Reduced transparency:** Respect `prefers-contrast: more` -- increase glass opacity to `0.90+` and remove `backdrop-filter` for users who need solid surfaces.

```css
@media (prefers-contrast: more) {
  .glass-surface,
  .glass-raised,
  .glass-floating {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: none;
  }
  .dark .glass-surface,
  .dark .glass-raised,
  .dark .glass-floating {
    background: rgba(28, 28, 30, 0.95);
    backdrop-filter: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    transition-duration: 0.01ms !important;
    transform: none !important;
  }
}
```

---

## 10. Performance Considerations

`backdrop-filter` is GPU-composited but can be expensive when stacked. Guidelines:

- Limit to 3-4 glass surfaces visible at once (sidebar + navbar + 1-2 cards is fine)
- Avoid nesting glass-on-glass (a glass card inside a glass sidebar creates double blur)
- Use `will-change: backdrop-filter` sparingly and only on animated elements
- Keep blur values under 40px for most elements (the floating tier is the maximum)
- Test on mid-range hardware; reduce blur or increase opacity as a fallback

---

## 11. CSS Custom Properties (full set)

For easy theming, define all values as custom properties on `:root` and `.dark`:

```css
:root {
  /* Background */
  --glass-page-bg: #EEF0F5;

  /* Glass surfaces */
  --glass-surface-bg: rgba(255, 255, 255, 0.62);
  --glass-raised-bg: rgba(255, 255, 255, 0.72);
  --glass-floating-bg: rgba(255, 255, 255, 0.80);

  /* Blur */
  --glass-blur-surface: blur(16px) saturate(180%);
  --glass-blur-raised: blur(24px) saturate(190%);
  --glass-blur-floating: blur(40px) saturate(200%);

  /* Borders */
  --glass-border: rgba(255, 255, 255, 0.45);
  --glass-border-subtle: rgba(209, 213, 219, 0.35);

  /* Inset highlight */
  --glass-inset-highlight: inset 0 1px 0 rgba(255, 255, 255, 0.5);

  /* Text */
  --glass-text-primary: #1C1C1E;
  --glass-text-secondary: #636366;
  --glass-text-tertiary: #AEAEB2;

  /* Accent */
  --glass-accent: #007AFF;
  --glass-accent-tint: rgba(0, 122, 255, 0.15);
  --glass-accent-hover: rgba(0, 122, 255, 0.10);

  /* Semantic */
  --glass-success: #34C759;
  --glass-warning: #FF9500;
  --glass-error: #FF3B30;
  --glass-info: #5AC8FA;

  /* Shape */
  --glass-radius-sm: 8px;
  --glass-radius-md: 10px;
  --glass-radius-lg: 14px;
  --glass-radius-xl: 16px;
  --glass-radius-2xl: 20px;

  /* Motion */
  --glass-ease: cubic-bezier(0.4, 0, 0.2, 1);
  --glass-duration: 0.25s;
}

.dark {
  --glass-page-bg: #0A0A0F;

  --glass-surface-bg: rgba(28, 28, 30, 0.55);
  --glass-raised-bg: rgba(44, 44, 46, 0.65);
  --glass-floating-bg: rgba(58, 58, 60, 0.75);

  --glass-border: rgba(255, 255, 255, 0.12);
  --glass-border-subtle: rgba(72, 72, 74, 0.40);

  --glass-inset-highlight: inset 0 1px 0 rgba(255, 255, 255, 0.06);

  --glass-text-primary: #F2F2F7;
  --glass-text-secondary: #AEAEB2;
  --glass-text-tertiary: #636366;

  --glass-accent: #0A84FF;
  --glass-accent-tint: rgba(10, 132, 255, 0.20);
  --glass-accent-hover: rgba(10, 132, 255, 0.12);

  --glass-success: #30D158;
  --glass-warning: #FF9F0A;
  --glass-error: #FF453A;
  --glass-info: #64D2FF;
}
```
