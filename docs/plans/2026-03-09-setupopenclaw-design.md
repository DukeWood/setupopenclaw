# SetupOpenClaw UK — Landing Page Design & Implementation Plan

## Context

SetupOpenClaw is a new UK-focused managed AI assistant deployment service, inspired by [setupclaw.com](https://setupclaw.com/). It's part of the Innovatorly.ai brand family (parent of TorlyAI). The goal is to quickly launch a professional landing page that markets OpenClaw deployment services to UK businesses at competitive GBP pricing.

**Brand:** Innovatorly.ai / TorlyAI brand guidelines (navy/emerald/amber/sky palette)
**Target:** UK businesses with 4-50 employees wanting managed OpenClaw AI assistants

---

## Approach: Next.js 15 + Tailwind v4 + shadcn/ui

Standalone project at `~/AI/AI_Coding/Repositories/setupopenclaw/`

### Tech Stack
- **Framework:** Next.js 15 (App Router, static export)
- **Styling:** Tailwind CSS v4 with custom navy color scale
- **Components:** shadcn/ui (Button, Card, Accordion, Badge)
- **Dark mode:** next-themes
- **Booking:** Google Calendar Appointment Scheduling embed
- **Deploy:** Vercel (or static export to any host)

---

## Page Sections (15 sections, single landing page)

| # | Section | Component File | Description |
|---|---------|---------------|-------------|
| 1 | Navigation | `components/nav.tsx` | Fixed, transparent→scrolled, logo + "Book a call" CTA |
| 2 | Hero | `components/hero.tsx` | Headline with gradient text, subheading, stats grid, gradient orbs |
| 3 | Integrations | `components/integrations.tsx` | Overlapping circular platform icons (Gmail, Slack, Notion, etc.) |
| 4 | Built For | `components/built-for.tsx` | 4-card grid: Founders, Exec teams, Agencies, Investors |
| 5 | Always On | `components/always-on.tsx` | Timeline: 30min email scan, 9AM briefings, on-demand, ongoing |
| 6 | What's an Agent | `components/what-is-agent.tsx` | Explainer: 1 Executive Agent = 1 OpenClaw instance |
| 7 | How It Works | `components/how-it-works.tsx` | 3 steps: Kickoff → Deploy → 14-day hypercare |
| 8 | Testimonials | `components/testimonials.tsx` | Social proof cards with placeholder quotes |
| 9 | Why Hire Us | `components/why-hire-us.tsx` | Open-source vs managed value proposition |
| 10 | Security | `components/security.tsx` | Composio, Docker, audit trails, OAuth, read-only defaults |
| 11 | Pricing | `components/pricing.tsx` | 3 tiers in GBP (see below) |
| 12 | Guarantees | `components/guarantees.tsx` | 100% satisfaction guarantee |
| 13 | After Purchase | `components/after-purchase.tsx` | Timeline: 48hrs → kickoff → setup session |
| 14 | FAQ | `components/faq.tsx` | shadcn Accordion, UK-adapted questions |
| 15 | Cities | `components/cities.tsx` | 10 UK cities grid with Remote/In-Person labels |
| 16 | Footer | `components/footer.tsx` | Innovatorly.ai branding, legal links, status indicator |

---

## Pricing (GBP)

| Tier | Name | Price | Key Feature |
|------|------|-------|-------------|
| 1 | Hosted Setup | **£770** | VPS-based, managed deployment |
| 2 | Mac Mini Remote | **£1,100** | iMessage integration |
| 3 | Mac Mini In-Person | **£2,200** | London area, on-site install |

- **Add-on:** +£350 per additional agent
- All tiers include 14-day hypercare
- VPS hosting: ~£5-10/mo, Mac Mini hardware: ~£500

---

## Brand Application

**Source:** `/Users/Jason-uk/AI/AI_Coding/Repositories/torlyAI/docs/TORLYAI_BRAND_GUIDELINES.md`

- **Primary CTA:** `bg-gradient-to-r from-navy-600 to-emerald-600`
- **Hero text:** `from-navy-600 via-emerald-500 to-emerald-600` gradient
- **Backgrounds:** Light `slate-50` / Dark `slate-950`, gradient orbs, grid overlay
- **Cards:** White/slate-800, `border-slate-200`/`slate-700`, `rounded-2xl`, `shadow-lg`
- **Nav:** Fixed, transparent at top → white/slate-900 + backdrop-blur on scroll
- **Pricing highlight:** Middle tier with emerald border + amber "Most Popular" badge
- **Typography:** System font stack, H1 72px/48px, body 16px
- **Animations:** fadeInUp 600ms, float 3s infinite (orbs), hover scale 1.02

---

## Booking CTA

Google Calendar Appointment Scheduling:
- URL: `https://calendar.google.com/calendar/appointments/schedules/AcZssZ1hWsbiKMNo85CRLg7CHmXAyEGRED-9afeuweInuT68RlCdzJLEAktwlfGdteGwySAPyw5oGMY6?gv=true`
- Label: "Book a Setup-OpenClaw call"
- Styled as branded button (navy-emerald gradient), not default Google green

---

## UK Cities

| City | Availability |
|------|-------------|
| London | In-Person + Remote |
| Manchester | Remote |
| Birmingham | Remote |
| Edinburgh | Remote |
| Bristol | Remote |
| Leeds | Remote |
| Glasgow | Remote |
| Cambridge | Remote |
| Oxford | Remote |
| Cardiff | Remote |

---

## Project Structure

```
~/AI/AI_Coding/Repositories/setupopenclaw/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata, ThemeProvider
│   ├── page.tsx            # Landing page composing all sections
│   └── globals.css         # Tailwind imports, custom animations (float, fadeInUp)
├── components/
│   ├── ui/                 # shadcn: button, card, accordion, badge
│   ├── nav.tsx
│   ├── hero.tsx
│   ├── integrations.tsx
│   ├── built-for.tsx
│   ├── always-on.tsx
│   ├── what-is-agent.tsx
│   ├── how-it-works.tsx
│   ├── testimonials.tsx
│   ├── why-hire-us.tsx
│   ├── security.tsx
│   ├── pricing.tsx
│   ├── guarantees.tsx
│   ├── after-purchase.tsx
│   ├── faq.tsx
│   ├── cities.tsx
│   └── footer.tsx
├── lib/
│   └── utils.ts            # cn() helper (clsx + tailwind-merge)
├── public/
│   └── images/             # Logo, platform icons
├── tailwind.config.ts      # Navy custom color scale from brand guidelines
├── next.config.ts          # Static export config
├── package.json
└── tsconfig.json
```

---

## Implementation Steps

### Step 0: Save Design Doc
1. Create `~/AI/AI_Coding/Repositories/setupopenclaw/docs/plans/` directory
2. Copy this design doc to `docs/plans/2026-03-09-setupopenclaw-design.md`

### Step 1: Project Scaffolding
1. `bunx create-next-app@latest setupopenclaw` (App Router, Tailwind, TypeScript)
2. Install: `next-themes`, shadcn/ui init
3. Configure `tailwind.config.ts` with navy color scale from brand guidelines
4. Set up `globals.css` with custom animations (float, fadeInUp, grid overlay)
5. Configure `layout.tsx` with ThemeProvider, metadata, fonts

### Step 2: Core Components (shadcn)
1. Add shadcn components: `button`, `card`, `accordion`, `badge`
2. Create `lib/utils.ts` with `cn()` helper

### Step 3: Navigation + Hero
1. Build `nav.tsx` — fixed nav with scroll detection, logo, booking CTA
2. Build `hero.tsx` — gradient headline, subheading, stats grid, gradient orbs, grid overlay

### Step 4: Middle Sections
1. `integrations.tsx` — platform icon circles
2. `built-for.tsx` — 4-card persona grid
3. `always-on.tsx` — timeline with intervals
4. `what-is-agent.tsx` — explainer block
5. `how-it-works.tsx` — 3-step numbered process

### Step 5: Social Proof + Value
1. `testimonials.tsx` — card grid with placeholder quotes
2. `why-hire-us.tsx` — open-source vs managed comparison
3. `security.tsx` — technical security details

### Step 6: Pricing + Post-Purchase
1. `pricing.tsx` — 3-tier cards, GBP pricing, add-on, "Most Popular" badge
2. `guarantees.tsx` — satisfaction guarantee block
3. `after-purchase.tsx` — post-purchase timeline

### Step 7: FAQ + Cities + Footer
1. `faq.tsx` — shadcn Accordion with UK-adapted questions
2. `cities.tsx` — 10 UK cities grid with availability labels
3. `footer.tsx` — Innovatorly branding, legal, status indicator

### Step 8: Google Calendar Integration
1. Integrate booking script in layout or as a component
2. Style the CTA buttons to use brand gradient (override Google default green)

### Step 9: Polish & Deploy
1. Dark mode testing across all sections
2. Mobile responsiveness pass
3. SEO metadata (OpenGraph, JSON-LD)
4. Deploy to Vercel

---

## Verification

1. **Visual:** Run `bun dev`, check all 16 sections render correctly
2. **Dark mode:** Toggle theme, verify all color mappings
3. **Mobile:** Check responsive breakpoints (375px, 768px, 1024px)
4. **Booking CTA:** Click "Book a call" → Google Calendar scheduling opens
5. **Accessibility:** Tab through all interactive elements, check focus states
6. **Build:** `bun run build` succeeds with static export
