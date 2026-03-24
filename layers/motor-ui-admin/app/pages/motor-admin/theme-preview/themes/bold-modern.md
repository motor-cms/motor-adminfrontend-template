# Bold & Modern Theme

> A high-energy admin panel theme with a confident visual identity. Deep violet primary, warm amber accents, and a distinctive heading font create an interface that feels cutting-edge and alive.

---

## Color Palette

### Primary: Violet (Tailwind `violet`)

The heart of the theme. Deep, saturated violet conveys creativity, innovation, and premium quality. Used for the sidebar, primary buttons, active states, and key navigation elements.

| Token            | Tailwind Class   | Hex       | Usage                            |
|------------------|------------------|-----------|----------------------------------|
| primary-50       | `violet-50`      | #f5f3ff   | Subtle tinted backgrounds        |
| primary-100      | `violet-100`     | #ede9fe   | Hover states on light surfaces   |
| primary-200      | `violet-200`     | #ddd6fe   | Light borders, dividers          |
| primary-300      | `violet-300`     | #c4b5fd   | Disabled / muted primary         |
| primary-400      | `violet-400`     | #a78bfa   | Secondary buttons, tags          |
| **primary-500**  | **`violet-500`** | **#8b5cf6** | **Main primary color**         |
| **primary-600**  | **`violet-600`** | **#7c3aed** | **Primary hover / sidebar bg** |
| primary-700      | `violet-700`     | #6d28d9   | Active / pressed states          |
| primary-800      | `violet-800`     | #5b21b6   | Dark sidebar variant             |
| primary-900      | `violet-900`     | #4c1d95   | Deep backgrounds, overlays       |

### Secondary / Accent: Amber (Tailwind `amber`)

Warm amber creates a striking contrast against violet. Used sparingly for call-to-action highlights, notification badges, status indicators, and interactive emphasis.

| Token            | Tailwind Class   | Hex       | Usage                            |
|------------------|------------------|-----------|----------------------------------|
| accent-50        | `amber-50`       | #fffbeb   | Warning / accent backgrounds     |
| accent-100       | `amber-100`      | #fef3c7   | Light badges                     |
| accent-200       | `amber-200`      | #fde68a   | Highlight backgrounds            |
| accent-300       | `amber-300`      | #fcd34d   | Secondary tag fills              |
| **accent-400**   | **`amber-400`**  | **#fbbf24** | **Main accent color**          |
| **accent-500**   | **`amber-500`**  | **#f59e0b** | **CTA buttons, badges**        |
| accent-600       | `amber-600`      | #d97706   | Hover on accent elements         |
| accent-700       | `amber-700`      | #b45309   | Active / pressed accent          |

### Neutral: Slate (Tailwind `slate`)

Slate has a subtle blue undertone that harmonizes naturally with violet, preventing the neutral palette from feeling disconnected.

| Token            | Tailwind Class   | Hex       | Usage                            |
|------------------|------------------|-----------|----------------------------------|
| neutral-50       | `slate-50`       | #f8fafc   | Page background (light mode)     |
| neutral-100      | `slate-100`      | #f1f5f9   | Card backgrounds                 |
| neutral-200      | `slate-200`      | #e2e8f0   | Borders, dividers                |
| neutral-300      | `slate-300`      | #cbd5e1   | Disabled text, placeholders      |
| neutral-400      | `slate-400`      | #94a3b8   | Muted / secondary text           |
| neutral-500      | `slate-500`      | #64748b   | Body text (secondary)            |
| neutral-700      | `slate-700`      | #334155   | Body text (primary)              |
| neutral-800      | `slate-800`      | #1e293b   | Headings on light bg             |
| neutral-900      | `slate-900`      | #0f172a   | High-contrast text               |
| neutral-950      | `slate-950`      | #020617   | Dark mode backgrounds            |

### Semantic Colors

| Purpose   | Color             | Hex       | Notes                           |
|-----------|-------------------|-----------|----------------------------------|
| Success   | `emerald-500`     | #10b981   | Confirmations, positive states   |
| Warning   | `amber-500`       | #f59e0b   | Shares accent color intentionally|
| Error     | `rose-500`        | #f43f5e   | Destructive actions, validation  |
| Info      | `violet-400`      | #a78bfa   | Informational, ties to primary   |

---

## Typography

### Font Pairing: Space Grotesk + Inter

**Heading Font: Space Grotesk** (Google Fonts)
- Style: Geometric grotesque with distinctive character - slightly quirky letterforms with personality
- Weights: 500 (Medium) for subheadings, 700 (Bold) for main headings
- Use for: Page titles, section headers, sidebar navigation labels, card headers, stat numbers
- Character: Technical, confident, modern - originated from Space Mono, giving it a subtle techy edge

**Body Font: Inter** (Google Fonts)
- Style: Clean, highly legible sans-serif designed specifically for screens
- Weights: 400 (Regular) for body, 500 (Medium) for labels/emphasis, 600 (Semi-bold) for strong emphasis
- Use for: Body text, form labels, table content, descriptions, metadata
- Character: Neutral, professional, extremely readable at small sizes

### Google Fonts Import

```
https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap
```

### Type Scale

| Element            | Font           | Weight | Size (rem) | Tracking     |
|--------------------|----------------|--------|------------|--------------|
| Page title (h1)    | Space Grotesk  | 700    | 1.875      | -0.025em     |
| Section title (h2) | Space Grotesk  | 700    | 1.5        | -0.02em      |
| Card header (h3)   | Space Grotesk  | 500    | 1.125      | -0.01em      |
| Stat number        | Space Grotesk  | 700    | 2.25       | -0.03em      |
| Body text          | Inter          | 400    | 0.875      | 0            |
| Label              | Inter          | 500    | 0.75       | 0.025em      |
| Small / caption    | Inter          | 400    | 0.75       | 0.01em       |
| Nav item           | Space Grotesk  | 500    | 0.875      | 0            |

---

## Component Styling Notes

### Sidebar

- **Colored sidebar** with a violet-to-indigo gradient: `bg-gradient-to-b from-violet-600 to-violet-900`
- White text on the sidebar with `text-white/80` for items and `text-white` for active
- Active nav item: pill-shaped highlight with `bg-white/15` backdrop + left accent border in amber (`border-l-2 border-amber-400`)
- Sidebar icons: `text-white/60`, active: `text-amber-400`
- Logo area: white logo mark against the dark violet, with Space Grotesk app title

### Buttons

- **Primary**: `bg-violet-600 hover:bg-violet-700 text-white` with `rounded-lg` (8px radius)
- **Accent/CTA**: `bg-amber-500 hover:bg-amber-600 text-slate-900` - used for high-priority actions like "Create New", "Save"
- **Ghost**: `text-violet-600 hover:bg-violet-50` with no border
- **Destructive**: `bg-rose-500 hover:bg-rose-600 text-white`
- All buttons use Space Grotesk at font-weight 500 for a distinctive feel
- Add subtle `shadow-sm` on primary and accent buttons for depth

### Cards

- `bg-white rounded-xl shadow-sm border border-slate-200`
- Card headers can use a thin top accent border: `border-t-2 border-violet-500`
- Stat cards: large Space Grotesk numbers in `text-violet-600`, with a subtle `bg-violet-50` background
- Hover state: `hover:shadow-md` with smooth transition

### Tables / Data Grids

- Header row: `bg-violet-50 text-violet-900` with Space Grotesk font-weight 500
- Alternating row backgrounds: `even:bg-slate-50`
- Row hover: `hover:bg-violet-50/50`
- Action column icons in `text-violet-500`
- Sort indicators in `text-amber-500`

### Form Inputs

- `rounded-lg border-slate-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20`
- Labels: Inter medium (500) in `text-slate-700`, uppercase tracking for field group labels
- Select dropdowns and date pickers follow the same violet focus ring pattern

### Badges / Tags

- Primary: `bg-violet-100 text-violet-700 rounded-full`
- Accent: `bg-amber-100 text-amber-800 rounded-full`
- Neutral: `bg-slate-100 text-slate-600 rounded-full`
- Use Space Grotesk at font-weight 500 for badge text

### Notifications / Toasts

- Success: left border accent `border-l-4 border-emerald-500` on white card
- Error: left border accent `border-l-4 border-rose-500`
- Info: left border accent `border-l-4 border-violet-500`

### Gradient Accents

Apply subtle gradients in key places for a bold, premium feel:
- Page header background: `bg-gradient-to-r from-violet-600 to-violet-500` (optional hero area)
- Loading skeleton shimmer: violet-tinted
- Progress bars: `bg-gradient-to-r from-violet-500 to-amber-400` for a striking two-tone effect

### Border Radius Strategy

Use larger, softer radii throughout for a modern feel:
- Buttons: `rounded-lg` (8px)
- Cards: `rounded-xl` (12px)
- Inputs: `rounded-lg` (8px)
- Badges: `rounded-full` (pill)
- Sidebar nav items: `rounded-lg` (8px)
- Modals/Dialogs: `rounded-2xl` (16px)

---

## Dark Mode Adjustments

| Element          | Light Mode                    | Dark Mode                       |
|------------------|-------------------------------|---------------------------------|
| Page background  | `slate-50`                    | `slate-950`                     |
| Card background  | `white`                       | `slate-900`                     |
| Card border      | `slate-200`                   | `slate-800`                     |
| Sidebar          | `violet-600 to violet-900`    | `slate-900` with violet accents |
| Primary text     | `slate-700`                   | `slate-200`                     |
| Heading text     | `slate-800`                   | `white`                         |
| Primary button   | `violet-600`                  | `violet-500`                    |
| Accent button    | `amber-500`                   | `amber-400`                     |
| Table header     | `violet-50`                   | `violet-950/50`                 |

---

## Mood & Inspiration

### Visual Identity Keywords
Confident, energetic, innovative, premium, tech-forward, striking

### Inspiration References
- **Pollux UI** - Purple-primary admin dashboard conveying creativity and innovation while maintaining professionalism
- **Modern fintech dashboards** - Deep dark backgrounds with vivid violet accents, smooth gradients, bold typography, and clear modular structure
- **Stripe Dashboard** - Clean card-based layout with confident use of a signature color throughout the interface
- **Linear** - Bold use of purple/violet as a primary color in a professional tool, proving saturated colors work in productivity software
- **Vercel Dashboard** - Strong typographic hierarchy with a distinctive sans-serif, minimal decoration, letting color and type do the work

### What Makes This Theme "Bold"
1. **Saturated primary color** - Violet is inherently eye-catching; not a safe blue or gray
2. **Colored sidebar** - Instead of neutral gray sidebar, the gradient violet sidebar is a strong design statement
3. **Warm accent contrast** - Amber against violet creates high-energy complementary tension
4. **Distinctive heading font** - Space Grotesk has enough personality to be memorable without sacrificing readability
5. **Gradient touches** - Subtle gradients in the sidebar, progress bars, and optional hero areas add depth and movement
6. **Generous border radius** - Larger radii feel modern and approachable, softening the boldness

---

## NuxtUI 4 Configuration Hint

```typescript
// In app.config.ts or nuxt.config.ts
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'violet',
      secondary: 'amber',
      neutral: 'slate'
    }
  }
})
```

This maps directly to NuxtUI 4's color system, making all `UButton`, `UBadge`, `UInput`, etc. components automatically use the violet/amber/slate palette.
