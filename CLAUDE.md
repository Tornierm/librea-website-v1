# Librea Website v1

## Stack
- Next.js 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- styled-components (all section/component styling)
- next-intl v4 (i18n)
- next-themes (dark mode)

## Single source of truth

All shared styles live in dedicated files. Never redeclare a style inline or per-component if it belongs to one of these systems:

| What | File |
|------|------|
| Typography mixins + `TextBlock` | `components/ui/typography.ts` |
| Color tokens | `app/globals.css` (CSS custom properties) |
| Grid overlay + section dividers | `components/GridGuide.tsx` |
| Slider | `components/ui/Slider.tsx` |

## Typography

Import from `components/ui/typography.ts` — never redefine these locally:

```ts
import { eyebrow, headingXl, headingLg, headingMd, headingDisplay, bodyLg, bodyMd, TextBlock } from '@/components/ui/typography';

const Eyebrow = styled.p`${eyebrow}`;
const Heading = styled.h2`${headingMd}`;
const Body = styled.p`${bodyMd}`;
```

**`TextBlock`** is a styled `div` with `padding: 24px` on all sides. Every text container inside a grid column must use it:

```tsx
<TextBlock>
  <Eyebrow>...</Eyebrow>
  <Heading>...</Heading>
  <Body>...</Body>
</TextBlock>
```

## Color tokens

Always use CSS custom properties — never hardcode colors (except `#fff`/`#000` on dark overlays where the background is known). Tokens are defined in `globals.css` and switch automatically between light and dark mode:

```css
var(--text)          /* primary text */
var(--text-muted)    /* secondary text */
var(--text-subtle)   /* tertiary / disabled */
var(--brand)         /* accent / CTA */
var(--brand-soft)    /* light brand background */
var(--bg)            /* page background */
var(--bg-subtle)     /* card / surface background */
var(--border)        /* dividers, input borders */
var(--button-primary-bg)
var(--button-primary-text)
var(--button-primary-hover)
```

## Grid system

| Breakpoint | Columns | Gap | Padding | Column width (at max) |
|------------|---------|-----|---------|----------------------|
| Mobile `<768px` | 6 | 18px | 18px | fluid |
| Desktop `768px+` | 12 | 18px | 24px | 96px (at 1350px max) |

Max content width: **1350px** (12 × 96px + 11 × 18px).

CSS custom properties:
- `--layout-pad` — 18px mobile, 24px desktop
- `--grid-gap` — 18px

**Section pattern** — vertical padding on `<section>`, horizontal padding on the inner max-width container:

```tsx
const Section = styled.section`padding: 120px 0;`;
const Grid = styled.div`
  margin: 0 auto;
  max-width: 1350px;
  padding: 0 var(--layout-pad);
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(6, 1fr);
  @media (min-width: 768px) { grid-template-columns: repeat(12, 1fr); }
`;
```

Toggle the grid overlay with the grid icon in the header. Use `<GridDivider />` between sections in `page.tsx` to show section boundaries in the overlay.

## Grid overlay

- `<GridGuide />` — fixed column overlay, rendered in the root layout
- `<GridDivider />` — a single `border-t` line placed between sections in `page.tsx`; only visible when the grid overlay is toggled on

## i18n

The site supports **English** (`en`) and **German** (`de`).

- Routes are prefixed with the locale: `/en/...` and `/de/...`
- Translation files: `messages/en.json` and `messages/de.json`
- Add new keys to **both** files, namespaced (e.g. `nav.features`, `hero.heading`)

**Server components:**
```ts
import { getTranslations } from 'next-intl/server';
const t = await getTranslations('namespace');
```

**Client components:**
```ts
'use client';
import { useTranslations } from 'next-intl';
const t = useTranslations('namespace');
```
