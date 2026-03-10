# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

SetupOpenClaw is a UK-focused landing page for managed OpenClaw AI assistant deployment services. It's a single-page static marketing site under the Innovatorly.ai / TorlyAI brand family, targeting UK businesses (4-50 employees).

- **Domain:** setupopenclaw.pro
- **Hosting:** Vercel (dukewoods-projects), DNS on DreamHost
- **Repo:** github.com/DukeWood/setupopenclaw

## Commands

```bash
bun dev          # Dev server at localhost:3000
bun run build    # Static export to out/
bun run lint     # ESLint (Next.js core-web-vitals + TypeScript)
bun start        # Serve production build
```

## Architecture

**Static export site** — `next.config.ts` sets `output: "export"`, producing pure HTML/CSS/JS in `out/`. No API routes, no server-side dynamic rendering, no middleware.

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS v3 with `tailwindcss-animate`, class-based dark mode via `next-themes`
- **Components:** shadcn/ui v3 (base-nova style) — Button, Card, Accordion, Badge in `components/ui/`
- **Path alias:** `@/*` maps to project root

### Page Structure

Single landing page (`app/page.tsx`) composed of 16 section components in `components/`. Each section is a self-contained component with its own data — no shared state, no props passed between sections.

Section order: Nav → Hero → Integrations → BuiltFor → AlwaysOn → WhatIsAgent → HowItWorks → Testimonials → WhyHireUs → Security → Pricing → Guarantees → AfterPurchase → FAQ → Cities → Footer

### Key Files

- `app/globals.css` — CSS variables for light/dark themes, custom utilities (`.text-gradient-brand`, `.grid-overlay`)
- `tailwind.config.ts` — Custom `navy` color scale (brand primary), custom animations (`float`, `fade-in-up`, `fade-in`, accordion)
- `components/json-ld.tsx` — Structured data (JSON-LD) for SEO with service/pricing schema
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)

## Brand & Design

- **Colors:** Navy palette (brand primary), emerald (accents/CTAs), amber (badges), slate (backgrounds)
- **CTA gradient:** `from-navy-600 to-emerald-600`
- **Hero text gradient:** `from-navy-600 via-emerald-500 to-emerald-600`
- **Pricing:** 3 tiers in GBP (£770 / £1,100 / £2,200), middle tier highlighted as "Most Popular"
- **Booking URL:** Google Calendar Appointment Scheduling (see `docs/plans/2026-03-09-setupopenclaw-design.md` for full URL)

## Conventions

- All section components are exported as named exports from `components/`
- shadcn components live in `components/ui/` — add new ones with `bunx shadcn@latest add <component>`
- CSS variables in `globals.css` follow shadcn's HSL convention (e.g., `--primary: 222.2 47.4% 11.2%`)
- Design doc and implementation plan are in `docs/plans/`
