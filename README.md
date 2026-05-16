# واحة الإبداع - تقرت (Oasis Al-Ibda)

**A modern, production-ready Next.js landing page for Oasis Al-Ibda — an Arabic RTL creative hub and media incubator.**

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Variables
- **Typography**: Tajawal Arabic Font
- **Direction**: RTL-first
- **Package Manager**: npm

## 📁 Project Structure

```
oasis-alibda/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout + RTL setup
│   ├── page.tsx           # Landing page
│   └── globals.css        # Global styles & CSS variables
├── components/
│   ├── ui/                # Reusable UI primitives
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── SectionHeading.tsx
│   │   └── ...
│   └── sections/          # Page sections
│       ├── Header.tsx
│       ├── HeroSection.tsx
│       └── ...
├── content/               # Static page content & design tokens
│   ├── oasis.ts          # All page data & copy
│   └── design-tokens.ts  # Design system values
├── lib/                   # Utilities & helpers
│   ├── cn.ts             # classname helper
│   ├── constants.ts      # App constants
│   └── utils.ts          # Utility functions
├── types/                 # TypeScript types
│   └── index.ts
├── public/                # Static assets
│   ├── images/
│   ├── icons/
│   └── fonts/
├── styles/                # Global styles
├── tailwind.config.ts     # Tailwind configuration
├── next.config.js         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── package.json
```

## 🎯 Features

✅ **RTL-First Design** — Native Arabic support with direction RTL
✅ **Component-Based Architecture** — Reusable UI primitives + sections
✅ **Design System** — Centralized design tokens & styles
✅ **Content-Separated** — All copy in `content/oasis.ts`
✅ **TypeScript** — Full type safety
✅ **Responsive Design** — Mobile, tablet, desktop
✅ **Accessible** — WCAG standards
✅ **Fast Performance** — Next.js optimization

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone the repository (or navigate to this folder)
cd oasis-alibda

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the site.

### Build for Production

```bash
npm run build
npm start
```

## 📦 Key Components

### UI Components (`components/ui/`)

- **Button** — Primary, secondary, ghost variants
- **Card** — Default, highlight, stat, persona variants
- **Container** — Max-width wrapper
- **SectionHeading** — Title + subtitle + divider
- **IconBadge** — Rounded icon container
- **Input** — Form input wrapper
- **TimelineItem** — Timeline step marker

### Section Components (`components/sections/`)

1. **Header** — Navigation & branding
2. **HeroSection** — Main landing hero with stats
3. **WhyUsSection** — Value proposition cards
4. **ProgramsSection** — 6-program grid
5. **MethodologySection** — 4-step timeline
6. **OutcomesSection** — Project outcomes & results
7. **AudienceSection** — 3-persona cards
8. **FounderSection** — Founder profile & bio
9. **PartnersSection** — Partner logos
10. **ContactSection** — Contact form + info
11. **Footer** — Navigation footer

## 📝 Content Management

All page content is stored in `content/oasis.ts`:

```typescript
export const heroSection = { ... }
export const programsData = [ ... ]
export const contactInfo = [ ... ]
```

To update any copy, edit this single file.

## 🎨 Design Tokens

Colors, spacing, typography, and other design tokens are defined in:

- `content/oasis.ts` — TypeScript tokens
- `tailwind.config.ts` — Tailwind configuration
- `app/globals.css` — CSS variables

Example:

```css
:root {
  --color-green: #145A46;
  --color-orange: #E67E22;
  --space-lg: 24px;
}
```

## 🌐 RTL Support

RTL is handled at multiple levels:

1. **HTML**: `<html dir="rtl" lang="ar">` in `layout.tsx`
2. **Tailwind**: RTL-aware utilities
3. **CSS**: `direction: rtl` in `globals.css`
4. **Components**: All components are RTL-compatible

## 📱 Responsive Breakpoints

- **xs** — 390px (mobile)
- **sm** — 640px (tablet)
- **md** — 768px (tablet landscape)
- **lg** — 1024px (desktop)
- **xl** — 1440px (large desktop)

## 🔍 TypeScript Types

All component props and data structures are fully typed in `types/index.ts`:

```typescript
export interface ButtonProps { ... }
export interface CardProps { ... }
export interface WhyCard { ... }
```

## 📂 Adding New Components

### New UI Component

```typescript
// components/ui/NewComponent.tsx
'use client';

export function NewComponent() {
  return <div>Component</div>;
}
```

Then export from `components/ui/index.ts`.

### New Section

```typescript
// components/sections/NewSection.tsx
'use client';

import { Container } from '@/components/ui';
import { sectionData } from '@/content/oasis';

export function NewSection() {
  return <section>...</section>;
}
```

Then add to `components/sections/index.ts` and `app/page.tsx`.

## 🎯 Next Steps

- [ ] Add images/icons to `/public`
- [ ] Configure environment variables (`.env.local`)
- [ ] Connect contact form to backend/email service
- [ ] Add analytics (Google Analytics, Vercel Analytics)
- [ ] Deploy to Vercel, Netlify, or your hosting
- [ ] Set up SEO (sitemap, robots.txt)
- [ ] Add 404 page

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 📄 License

This project is private and proprietary to Oasis Al-Ibda.

---

**Built with ❤️ for واحة الإبداع - تقرت**
