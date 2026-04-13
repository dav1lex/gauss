# TITANCODE Frontend - Agent Instructions
## RULES:
AI never push or commit. 
AI not start dev server. It already run.
AI can do run build. but ask monkey before.

## Quick Commands

```bash
cd _4-app/frontend
npm run dev      # Dev server (Turbopack)
npm run build    # Production build (static export)
```

## Architecture

**Framework**: Next.js 16.2.3 + React 19 + Turbopack  
**Styling**: Tailwind CSS v4 (OKLCH colors)  
**Output**: Static export (`output: 'export'` in next.config.ts)

## Critical Constraints

### 1. Static Export - No Middleware

DO NOT use `middleware.ts` - incompatible with `output: 'export'`. Use client-side logic instead.

### 2. i18n System (Static)

- Translations: `messages/en.json`, `messages/pl.json`
- Routes: `/en`, `/pl` (pre-rendered static pages)
- Hook: `useTranslate()` reads locale from URL path
- Language switcher: `<LanguageSwitcher />` in navbar

**Do NOT install next-i18next** - uses next-intl for static sites.

### 3. Theme System (Centralized)

All colors use CSS variables. Change accent color in ONE place:

```css
/* src/app/globals.css */
:root {
  --titan-accent-primary: oklch(...);
  --titan-accent-secondary: oklch(...);
}
```

Components reference via `bg-[var(--titan-accent-primary)]`.

**Never hardcode colors** like `bg-orange-500` or `text-white`. Use:
- `bg-card` / `text-foreground` (theme-aware)
- `bg-[var(--titan-accent-primary)]` (brand colors)

### 4. Dark/Light Theme

Uses `next-themes`. Provider in `src/app/{en,pl}/layout.tsx`.

Navbar is scroll-aware:
- Initial: transparent, dark text (visible on hero)
- Scrolled (100px): solid bg, theme colors, slide animation

## Component Structure

```
src/components/
├── titan/              # TITANCODE-specific components
│   ├── navbar.tsx      # Scroll-aware, i18n-ready
│   ├── hero-parallax.tsx
│   ├── services.tsx
│   ├── projects.tsx
│   ├── about.tsx
│   ├── contact.tsx
│   ├── footer.tsx
│   ├── theme-switcher.tsx
│   ├── language-switcher.tsx
│   └── ui/             # Custom Titan primitives (Button, Card, etc.)
└── ui/                 # shadcn/ui base components
```

## Key Patterns

### Component Color Usage

```tsx
// ✅ Correct
<div className="bg-card text-foreground" />
<button className="bg-[var(--titan-accent-primary)] text-primary-foreground" />

// ❌ Wrong
<div className="bg-white text-black" />
<button className="bg-orange-500 text-white" />
```

### Translation Usage

```tsx
import { useTranslate } from '@/hooks/use-translate'

export function Component() {
  const t = useTranslate()
  return <h1>{t('hero.title')}</h1>
}
```

### Scroll-Aware Navbar

```tsx
const [scrolled, setScrolled] = useState(false)

useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 100)
  handleScroll()
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])
```

## File Locations

| Purpose | Location |
|---------|----------|
| Translations | `messages/*.json` |
| Global CSS / Theme tokens | `src/app/globals.css` |
| Root layout | `src/app/layout.tsx` |
| Locale layouts | `src/app/{en,pl}/layout.tsx` |
| Theme provider | `src/app/{en,pl}/layout.tsx` |
| Navbar component | `src/components/titan/navbar.tsx` |
| Hooks | `src/hooks/` |
| Utils | `src/lib/` |
| Blog content | `content/blog/*.mdx` |
| Blog utilities | `src/lib/blog.ts` |

## SEO Requirements

- Separate URLs: `/en`, `/pl` (not query params)
- Static pre-rendering (no client-side locale detection)
- Hreflang tags in metadata
- Language switcher triggers full page navigation (expected for i18n)
- **Blog posts**: Polish only at `/pl/blog/[slug]`, prerendered static HTML for SEO

## Testing

No test framework configured yet. Storybook removed (was incompatible with static export).

## Known Quirks

1. **Scroll warp on language switch**: Expected behavior for static export. Users refresh when changing languages.

2. **Theme detection**: Reads from localStorage. Initial render may show wrong theme until hydration completes.

3. **Tailwind v4**: Uses new `@theme inline` syntax, not `tailwind.config.js`.

4. **OKLCH colors**: All CSS vars use OKLCH format. Browser support is good but check caniuse.com if issues arise.

5. **Blog workflow**: Add MDX files to `content/blog/` → commit → auto-deploy rebuilds static pages
