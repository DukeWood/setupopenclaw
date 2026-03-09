# SetupOpenClaw UK — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a professional landing page for SetupOpenClaw, a UK-focused managed OpenClaw AI assistant deployment service under the Innovatorly.ai brand.

**Architecture:** Single-page Next.js 15 App Router site with 16 component sections. Static export for deployment. All styling follows TorlyAI brand guidelines (navy/emerald/amber/sky palette). Google Calendar for booking CTA.

**Tech Stack:** Next.js 15, Tailwind CSS v4, shadcn/ui, next-themes, Lucide icons, Bun

**Design Doc:** `docs/plans/2026-03-09-setupopenclaw-design.md`

**Brand Guidelines:** `/Users/Jason-uk/AI/AI_Coding/Repositories/torlyAI/docs/TORLYAI_BRAND_GUIDELINES.md`

**Working Directory:** `/Users/Jason-uk/AI/AI_Coding/Repositories/setupopenclaw/`

---

## Task 1: Scaffold Next.js Project

**Files:**
- Create: `setupopenclaw/` (via create-next-app, then move contents up)
- Modify: `package.json` (verify settings)

**Step 1: Create Next.js app in a temp directory**

```bash
cd /Users/Jason-uk/AI/AI_Coding/Repositories
bunx create-next-app@latest setupopenclaw-temp --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --use-bun
```

Expected: Project created successfully

**Step 2: Move scaffolded files into setupopenclaw (preserving docs/)**

```bash
cd /Users/Jason-uk/AI/AI_Coding/Repositories
# Move all files from temp into setupopenclaw (except docs which already exists)
cp -rn setupopenclaw-temp/* setupopenclaw/
cp -rn setupopenclaw-temp/.* setupopenclaw/ 2>/dev/null || true
rm -rf setupopenclaw-temp
```

**Step 3: Install dependencies**

```bash
cd /Users/Jason-uk/AI/AI_Coding/Repositories/setupopenclaw
bun install
```

Expected: Lockfile generated, node_modules populated

**Step 4: Verify it runs**

```bash
cd /Users/Jason-uk/AI/AI_Coding/Repositories/setupopenclaw
bun run dev &
sleep 5
curl -s http://localhost:3000 | head -20
kill %1 2>/dev/null
```

Expected: HTML output from Next.js dev server

**Step 5: Init git and commit**

```bash
cd /Users/Jason-uk/AI/AI_Coding/Repositories/setupopenclaw
git init
echo "node_modules/" > .gitignore
echo ".next/" >> .gitignore
echo ".env" >> .gitignore
echo ".env.local" >> .gitignore
git add -A
git commit -m "chore: scaffold Next.js 15 project with Tailwind"
```

---

## Task 2: Configure Tailwind with Brand Colors + Custom Animations

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`

**Step 1: Configure tailwind.config.ts with navy color scale**

Replace the contents of `tailwind.config.ts` with:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#1e3a8a",
          700: "#1e40af",
          800: "#1e3a8a",
          900: "#1e3162",
          950: "#172554",
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "fade-in-up": "fadeInUp 600ms ease-out forwards",
        "fade-in": "fadeIn 600ms ease-in-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

**Step 2: Set up globals.css with base styles and grid overlay**

Replace `app/globals.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

@layer utilities {
  .text-gradient-brand {
    @apply bg-gradient-to-r from-navy-600 via-emerald-500 to-emerald-600 bg-clip-text text-transparent;
  }

  .grid-overlay {
    background: linear-gradient(rgba(30, 58, 138, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(30, 58, 138, 0.03) 1px, transparent 1px);
    background-size: 64px 64px;
    mask-image: radial-gradient(ellipse 80% 50% at 50% 50%, black, transparent);
  }
}
```

**Step 3: Verify Tailwind config loads**

```bash
cd /Users/Jason-uk/AI/AI_Coding/Repositories/setupopenclaw
bun run dev &
sleep 5
curl -s http://localhost:3000 | head -5
kill %1 2>/dev/null
```

Expected: No Tailwind errors, page loads

**Step 4: Commit**

```bash
cd /Users/Jason-uk/AI/AI_Coding/Repositories/setupopenclaw
git add tailwind.config.ts app/globals.css
git commit -m "feat: configure Tailwind with navy brand colors and custom animations"
```

---

## Task 3: Install shadcn/ui + next-themes + Lucide Icons

**Files:**
- Create: `components/ui/button.tsx`
- Create: `components/ui/card.tsx`
- Create: `components/ui/accordion.tsx`
- Create: `components/ui/badge.tsx`
- Create: `lib/utils.ts`
- Modify: `package.json`

**Step 1: Install next-themes and lucide-react**

```bash
cd /Users/Jason-uk/AI/AI_Coding/Repositories/setupopenclaw
bun add next-themes lucide-react
```

**Step 2: Init shadcn/ui**

```bash
cd /Users/Jason-uk/AI/AI_Coding/Repositories/setupopenclaw
bunx shadcn@latest init
```

When prompted: choose defaults (New York style, Slate base color, CSS variables: yes)

**Step 3: Add shadcn components**

```bash
cd /Users/Jason-uk/AI/AI_Coding/Repositories/setupopenclaw
bunx shadcn@latest add button card accordion badge
```

Expected: Components created in `components/ui/`

**Step 4: Verify lib/utils.ts exists**

Check that `lib/utils.ts` was created with `cn()` helper. If not, create it:

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**Step 5: Commit**

```bash
cd /Users/Jason-uk/AI/AI_Coding/Repositories/setupopenclaw
git add -A
git commit -m "feat: add shadcn/ui components, next-themes, and lucide icons"
```

---

## Task 4: Root Layout with ThemeProvider and Metadata

**Files:**
- Modify: `app/layout.tsx`
- Create: `components/theme-provider.tsx`

**Step 1: Create ThemeProvider component**

Create `components/theme-provider.tsx`:

```tsx
"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
```

**Step 2: Update root layout**

Replace `app/layout.tsx` with:

```tsx
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "SetupOpenClaw — Managed AI Assistant Deployment for UK Teams",
  description:
    "We deploy and maintain your team's OpenClaw AI assistant. Secured from day one, available across the UK. From £770.",
  keywords: [
    "OpenClaw",
    "AI assistant",
    "UK",
    "managed deployment",
    "executive agent",
    "business AI",
  ],
  openGraph: {
    title: "SetupOpenClaw — Managed AI Assistant Deployment for UK Teams",
    description:
      "We deploy and maintain your team's OpenClaw AI assistant. Secured from day one, available across the UK.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

**Step 3: Verify layout renders**

```bash
cd /Users/Jason-uk/AI/AI_Coding/Repositories/setupopenclaw
bun run dev &
sleep 5
curl -s http://localhost:3000 | grep "SetupOpenClaw"
kill %1 2>/dev/null
```

Expected: Title tag contains "SetupOpenClaw"

**Step 4: Commit**

```bash
cd /Users/Jason-uk/AI/AI_Coding/Repositories/setupopenclaw
git add app/layout.tsx components/theme-provider.tsx
git commit -m "feat: add root layout with ThemeProvider and SEO metadata"
```

---

## Task 5: Navigation Component

**Files:**
- Create: `components/nav.tsx`
- Modify: `app/page.tsx`

**Step 1: Create navigation component**

Create `components/nav.tsx`:

```tsx
"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1hWsbiKMNo85CRLg7CHmXAyEGRED-9afeuweInuT68RlCdzJLEAktwlfGdteGwySAPyw5oGMY6?gv=true";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg shadow-lg border-b border-slate-200 dark:border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span
              className={`text-xl font-bold ${
                scrolled
                  ? "text-slate-900 dark:text-white"
                  : "text-white"
              }`}
            >
              Setup<span className="text-gradient-brand">OpenClaw</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`p-2 rounded-lg transition-colors ${
                  scrolled
                    ? "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            )}

            {/* CTA */}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex bg-gradient-to-r from-navy-600 to-emerald-600 hover:from-navy-700 hover:to-emerald-700 text-white text-sm font-semibold py-2.5 px-5 rounded-xl transition-all hover:scale-[1.02]"
            >
              Book a Free Call
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-lg ${
                scrolled
                  ? "text-slate-700 dark:text-slate-300"
                  : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-slate-700 dark:text-slate-300 font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-gradient-to-r from-navy-600 to-emerald-600 text-white font-semibold py-3 px-6 rounded-xl"
          >
            Book a Free Call
          </a>
        </div>
      )}
    </nav>
  );
}
```

**Step 2: Update page.tsx to use Nav**

Replace `app/page.tsx` with:

```tsx
import { Nav } from "@/components/nav";

export default function Home() {
  return (
    <main>
      <Nav />
      <div className="pt-20 text-center p-8">
        <h1 className="text-4xl font-bold">SetupOpenClaw</h1>
        <p className="text-slate-600 dark:text-slate-400 mt-4">
          Sections coming soon...
        </p>
      </div>
    </main>
  );
}
```

**Step 3: Verify nav renders**

```bash
cd /Users/Jason-uk/AI/AI_Coding/Repositories/setupopenclaw
bun run dev
```

Open browser at `http://localhost:3000`. Verify: nav is visible, theme toggle works, "Book a Free Call" links to Google Calendar. Scroll to see transparent-to-solid transition.

**Step 4: Commit**

```bash
cd /Users/Jason-uk/AI/AI_Coding/Repositories/setupopenclaw
git add components/nav.tsx app/page.tsx
git commit -m "feat: add fixed navigation with scroll detection and theme toggle"
```

---

## Task 6: Hero Section

**Files:**
- Create: `components/hero.tsx`
- Modify: `app/page.tsx`

**Step 1: Create hero component**

Create `components/hero.tsx`:

```tsx
import { Shield, Zap, Clock, Globe } from "lucide-react";

const BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1hWsbiKMNo85CRLg7CHmXAyEGRED-9afeuweInuT68RlCdzJLEAktwlfGdteGwySAPyw5oGMY6?gv=true";

const stats = [
  { icon: Shield, value: "AES-256", label: "Encryption" },
  { icon: Zap, value: "Same Day", label: "Deployment" },
  { icon: Clock, value: "14 Days", label: "Hypercare" },
  { icon: Globe, value: "10 Cities", label: "Across UK" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-navy-500/10 to-navy-600/5 blur-3xl animate-float" />
        <div
          className="absolute top-1/3 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-amber-500/5 to-amber-600/5 blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-50" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="animate-fade-in-up">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-emerald-400 text-sm font-medium">
                Accepting new clients
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              We deploy your team&apos;s{" "}
              <span className="text-gradient-brand">AI assistant</span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-lg">
              White-glove OpenClaw deployment for UK teams of 4-50.
              Remotely, securely, from day one.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {["Security-first", "Same-day setup", "14-day hypercare"].map(
                (feature) => (
                  <span
                    key={feature}
                    className="inline-flex items-center gap-1.5 text-sm text-slate-300 bg-white/5 border border-white/10 rounded-full px-3 py-1.5"
                  >
                    <Zap className="w-3.5 h-3.5 text-emerald-400" />
                    {feature}
                  </span>
                )
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gradient-to-r from-navy-600 to-emerald-600 hover:from-navy-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02]"
              >
                Book a Free 15-Min Call
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center text-white font-bold py-4 px-8 rounded-xl border-2 border-slate-700 hover:bg-slate-800 transition-all"
              >
                View Pricing
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex items-center gap-6 mt-8 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-emerald-500" /> 100%
                satisfaction guarantee
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-500" /> Setup in
                hours, not weeks
              </span>
            </div>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-[1.02]"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-500 to-emerald-500 flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z"
            className="fill-white dark:fill-slate-950"
          />
        </svg>
      </div>
    </section>
  );
}
```

**Step 2: Add Hero to page.tsx**

Update `app/page.tsx`:

```tsx
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
    </main>
  );
}
```

**Step 3: Verify hero renders**

Open browser at `http://localhost:3000`. Verify: gradient orbs animate, headline has gradient text, stats grid visible, CTAs link correctly, wave divider visible.

**Step 4: Commit**

```bash
cd /Users/Jason-uk/AI/AI_Coding/Repositories/setupopenclaw
git add components/hero.tsx app/page.tsx
git commit -m "feat: add hero section with gradient orbs, stats grid, and CTAs"
```

---

## Task 7: Integrations Strip

**Files:**
- Create: `components/integrations.tsx`
- Modify: `app/page.tsx`

**Step 1: Create integrations component**

Create `components/integrations.tsx`:

```tsx
const platforms = [
  { name: "Gmail", color: "#EA4335" },
  { name: "Slack", color: "#4A154B" },
  { name: "Notion", color: "#000000" },
  { name: "Salesforce", color: "#00A1E0" },
  { name: "GitHub", color: "#333333" },
  { name: "Calendar", color: "#4285F4" },
  { name: "Drive", color: "#0F9D58" },
  { name: "Zoom", color: "#2D8CFF" },
  { name: "HubSpot", color: "#FF7A59" },
  { name: "Jira", color: "#0052CC" },
  { name: "Linear", color: "#5E6AD2" },
  { name: "Figma", color: "#F24E1E" },
  { name: "Teams", color: "#6264A7" },
];

export function Integrations() {
  return (
    <section className="py-16 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-8">
          Connects to your existing tools
        </p>
        <div className="flex justify-center items-center flex-wrap">
          {platforms.map((platform, i) => (
            <div
              key={platform.name}
              className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-900 shadow-md flex items-center justify-center text-white text-xs font-bold -ml-2 first:ml-0 hover:scale-110 transition-transform"
              style={{ backgroundColor: platform.color, zIndex: platforms.length - i }}
              title={platform.name}
            >
              {platform.name.slice(0, 2)}
            </div>
          ))}
          <div className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-900 shadow-md flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold -ml-2">
            +10K
          </div>
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Add to page.tsx** — import and place `<Integrations />` after `<Hero />`

**Step 3: Verify renders** — platform circles visible with overlapping layout

**Step 4: Commit**

```bash
cd /Users/Jason-uk/AI/AI_Coding/Repositories/setupopenclaw
git add components/integrations.tsx app/page.tsx
git commit -m "feat: add integrations strip with platform icons"
```

---

## Task 8: Built For Section

**Files:**
- Create: `components/built-for.tsx`
- Modify: `app/page.tsx`

**Step 1: Create built-for component**

Create `components/built-for.tsx`:

```tsx
import { Rocket, Users, Palette, TrendingUp } from "lucide-react";

const personas = [
  {
    icon: Rocket,
    title: "Founders & CEOs",
    description: "Automate inbox triage, meeting prep, and investor updates so you focus on strategy.",
  },
  {
    icon: Users,
    title: "Executive Teams",
    description: "Keep your leadership aligned with automated briefings, action tracking, and comms.",
  },
  {
    icon: Palette,
    title: "Agencies & Studios",
    description: "Manage client comms, project updates, and creative workflows without the overhead.",
  },
  {
    icon: TrendingUp,
    title: "Investors & VCs",
    description: "Monitor portfolio updates, deal flow, and market signals automatically.",
  },
];

export function BuiltFor() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
          Built for <span className="text-gradient-brand">ambitious teams</span>
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          Whether you&apos;re a solo founder or a 50-person team, OpenClaw adapts to your workflow.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona) => (
            <div
              key={persona.title}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-500 to-emerald-500 flex items-center justify-center mb-4">
                <persona.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                {persona.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {persona.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Add to page.tsx** — import and place after `<Integrations />`

**Step 3: Verify renders** — 4 cards visible, gradient icons, hover effects

**Step 4: Commit**

```bash
cd /Users/Jason-uk/AI/AI_Coding/Repositories/setupopenclaw
git add components/built-for.tsx app/page.tsx
git commit -m "feat: add built-for section with persona cards"
```

---

## Task 9: Always On Section

**Files:**
- Create: `components/always-on.tsx`
- Modify: `app/page.tsx`

**Step 1: Create always-on component**

Create `components/always-on.tsx`:

```tsx
import { Mail, Calendar, Zap, MessageSquare } from "lucide-react";

const intervals = [
  {
    icon: Mail,
    time: "Every 30 min",
    title: "Email scanning & drafting",
    description: "Scans your inbox, drafts replies, flags urgent messages.",
  },
  {
    icon: Calendar,
    time: "9:00 AM daily",
    title: "Meeting briefings",
    description: "Prepares agendas, pulls context from past conversations.",
  },
  {
    icon: Zap,
    time: "On demand",
    title: "Action triggers",
    description: "Responds to Slack commands, calendar events, and webhooks.",
  },
  {
    icon: MessageSquare,
    time: "Ongoing",
    title: "Slack & messaging monitoring",
    description: "Watches channels for questions, tasks, and follow-ups.",
  },
];

export function AlwaysOn() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
          Always on, <span className="text-gradient-brand">always working</span>
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          Your AI assistant runs 24/7. Communicate via Slack, Telegram, WhatsApp, or Discord.
        </p>
        <div className="space-y-6 max-w-2xl mx-auto">
          {intervals.map((item, i) => (
            <div key={item.title} className="flex items-start gap-6">
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-500 to-emerald-500 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                {i < intervals.length - 1 && (
                  <div className="w-0.5 h-12 bg-slate-200 dark:bg-slate-700 mt-2" />
                )}
              </div>
              {/* Content */}
              <div className="pb-6">
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  {item.time}
                </span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-1">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Add to page.tsx** — import and place after `<BuiltFor />`

**Step 3: Verify renders** — timeline layout with icons and connector lines

**Step 4: Commit**

```bash
cd /Users/Jason-uk/AI/AI_Coding/Repositories/setupopenclaw
git add components/always-on.tsx app/page.tsx
git commit -m "feat: add always-on timeline section"
```

---

## Task 10: What's an Agent + How It Works

**Files:**
- Create: `components/what-is-agent.tsx`
- Create: `components/how-it-works.tsx`
- Modify: `app/page.tsx`

**Step 1: Create what-is-agent component**

Create `components/what-is-agent.tsx`:

```tsx
import { Bot } from "lucide-react";

export function WhatIsAgent() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
            <Bot className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            What&apos;s an <span className="text-gradient-brand">Executive Agent</span>?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            <strong className="text-slate-900 dark:text-white">1 Executive Agent = 1 OpenClaw instance</strong> deployed
            and configured specifically for your team. It learns your workflows,
            connects to your tools, and acts on your behalf.
          </p>
          <p className="text-slate-600 dark:text-slate-400">
            Need more capacity? Add additional agents for different departments,
            projects, or team members.
          </p>
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Create how-it-works component**

Create `components/how-it-works.tsx`:

```tsx
import { Phone, Rocket, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Kickoff Call",
    description:
      "We map your goals, workflows, and integrations in a 20-45 minute session. You tell us what you need — we handle the rest.",
  },
  {
    icon: Rocket,
    number: "02",
    title: "Deploy & Harden",
    description:
      "Same-day deployment. We configure OpenClaw, connect your tools, set up security layers, and lock it down.",
  },
  {
    icon: HeartHandshake,
    number: "03",
    title: "14-Day Hypercare",
    description:
      "Two weeks of active tuning, monitoring, and support. We fine-tune triggers, fix edge cases, and train your team.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
          How it <span className="text-gradient-brand">works</span>
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          From first call to fully operational — usually within 24 hours.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                Step {step.number}
              </span>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-2 mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 3: Add both to page.tsx** — import and place after `<AlwaysOn />`

**Step 4: Verify renders** — agent explainer centered, 3-step grid visible

**Step 5: Commit**

```bash
cd /Users/Jason-uk/AI/AI_Coding/Repositories/setupopenclaw
git add components/what-is-agent.tsx components/how-it-works.tsx app/page.tsx
git commit -m "feat: add what-is-agent explainer and how-it-works 3-step section"
```

---

## Task 11: Testimonials Section

**Files:**
- Create: `components/testimonials.tsx`
- Modify: `app/page.tsx`

**Step 1: Create testimonials component**

Create `components/testimonials.tsx`:

```tsx
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "SetupOpenClaw had our AI assistant running before lunch. The hypercare period was invaluable for tuning it to our exact needs.",
    name: "Placeholder Name",
    role: "CEO, Tech Startup",
  },
  {
    quote:
      "We tried setting up OpenClaw ourselves and gave up after two days. These folks did it in two hours with better security than we'd have managed.",
    name: "Placeholder Name",
    role: "CTO, Agency",
  },
  {
    quote:
      "The ROI was immediate. Our exec team saves 10+ hours per week on email triage and meeting prep alone.",
    name: "Placeholder Name",
    role: "COO, Scale-up",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
          What teams are <span className="text-gradient-brand">saying</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg"
            >
              <Quote className="w-8 h-8 text-emerald-500/30 mb-4" />
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-navy-500 to-emerald-500 flex items-center justify-center text-white text-sm font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Add to page.tsx** — after `<HowItWorks />`

**Step 3: Verify renders** — 3 cards with quotes, placeholder avatars

**Step 4: Commit**

```bash
cd /Users/Jason-uk/AI/AI_Coding/Repositories/setupopenclaw
git add components/testimonials.tsx app/page.tsx
git commit -m "feat: add testimonials section with placeholder quotes"
```

---

## Task 12: Why Hire Us + Security Sections

**Files:**
- Create: `components/why-hire-us.tsx`
- Create: `components/security.tsx`
- Modify: `app/page.tsx`

**Step 1: Create why-hire-us component**

Create `components/why-hire-us.tsx`:

```tsx
import { CheckCircle, XCircle } from "lucide-react";

export function WhyHireUs() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
          Why teams <span className="text-gradient-brand">hire us</span>
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          OpenClaw is open source — anyone can install it. But &ldquo;install&rdquo; and &ldquo;production-ready&rdquo; are very different things.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* DIY column */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              DIY Setup
            </h3>
            <ul className="space-y-3">
              {[
                "Hours of configuration",
                "Security gaps you don't know about",
                "No monitoring or alerting",
                "Trial and error integrations",
                "You're on your own",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* SetupOpenClaw column */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border-2 border-emerald-500 shadow-lg">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              SetupOpenClaw
            </h3>
            <ul className="space-y-3">
              {[
                "Deployed and hardened in hours",
                "Enterprise-grade security from day one",
                "Monitoring, alerting, audit trails",
                "All integrations configured and tested",
                "14-day hypercare + ongoing support",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Create security component**

Create `components/security.tsx`:

```tsx
import { Shield, Lock, Eye, FileCheck, Key, Server } from "lucide-react";

const features = [
  { icon: Lock, title: "Docker Sandboxing", description: "Every agent runs in an isolated container." },
  { icon: Shield, title: "Composio Middleware", description: "Secure tool orchestration layer." },
  { icon: Eye, title: "Audit Trails", description: "Every action logged and reviewable." },
  { icon: Key, title: "OAuth Token Management", description: "Secure credential handling, no plaintext." },
  { icon: FileCheck, title: "Read-Only Defaults", description: "Agents can read but not act without approval." },
  { icon: Server, title: "Your Infrastructure", description: "Runs on your VPS or Mac Mini. Your data stays yours." },
];

export function Security() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
          Security-first <span className="text-gradient-brand">by design</span>
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          We don&apos;t just deploy — we harden. Every installation follows our security checklist.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-navy-500 to-emerald-500 flex items-center justify-center mb-3">
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 3: Add both to page.tsx** — after `<Testimonials />`

**Step 4: Verify renders**

**Step 5: Commit**

```bash
cd /Users/Jason-uk/AI/AI_Coding/Repositories/setupopenclaw
git add components/why-hire-us.tsx components/security.tsx app/page.tsx
git commit -m "feat: add why-hire-us comparison and security-first sections"
```

---

## Task 13: Pricing Section

**Files:**
- Create: `components/pricing.tsx`
- Modify: `app/page.tsx`

**Step 1: Create pricing component**

Create `components/pricing.tsx`:

```tsx
import { CheckCircle, Star } from "lucide-react";

const BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1hWsbiKMNo85CRLg7CHmXAyEGRED-9afeuweInuT68RlCdzJLEAktwlfGdteGwySAPyw5oGMY6?gv=true";

const tiers = [
  {
    name: "Hosted Setup",
    price: "770",
    description: "VPS-based managed deployment",
    featured: false,
    features: [
      "Cloud VPS deployment",
      "All integrations configured",
      "Security hardening",
      "14-day hypercare",
      "Slack support channel",
      "VPS hosting ~£5-10/mo",
    ],
  },
  {
    name: "Mac Mini Remote",
    price: "1,100",
    description: "With iMessage integration",
    featured: true,
    features: [
      "Everything in Hosted Setup",
      "iMessage integration",
      "Mac Mini configuration",
      "Remote setup & deployment",
      "14-day hypercare",
      "Hardware ~£500 (yours to keep)",
    ],
  },
  {
    name: "Mac Mini In-Person",
    price: "2,200",
    description: "London area, on-site installation",
    featured: false,
    features: [
      "Everything in Mac Mini Remote",
      "On-site installation",
      "In-person kickoff & training",
      "Hardware setup at your office",
      "London & surrounding areas",
      "14-day hypercare",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
          Simple, <span className="text-gradient-brand">transparent pricing</span>
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          One-time setup fee. No subscriptions, no hidden costs. 14-day hypercare included.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-6 border-2 transition-all hover:scale-[1.02] ${
                tier.featured
                  ? "border-emerald-500 bg-white dark:bg-slate-800 shadow-xl relative"
                  : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    <Star className="w-3 h-3" /> Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                {tier.name}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                {tier.description}
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900 dark:text-white">
                  £{tier.price}
                </span>
                <span className="text-slate-500 dark:text-slate-400 ml-1">
                  one-time
                </span>
              </div>
              <ul className="space-y-3 mb-6">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center font-semibold py-3 px-6 rounded-xl transition-all ${
                  tier.featured
                    ? "bg-gradient-to-r from-navy-600 to-emerald-600 hover:from-navy-700 hover:to-emerald-700 text-white shadow-lg"
                    : "bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-8">
          Need more agents? <strong>+£350 per additional agent.</strong> All
          prices exclude VAT.
        </p>
      </div>
    </section>
  );
}
```

**Step 2: Add to page.tsx** — after `<Security />`

**Step 3: Verify renders** — 3 pricing cards, middle highlighted, amber badge

**Step 4: Commit**

```bash
cd /Users/Jason-uk/AI/AI_Coding/Repositories/setupopenclaw
git add components/pricing.tsx app/page.tsx
git commit -m "feat: add 3-tier GBP pricing section with featured highlight"
```

---

## Task 14: Guarantees + After Purchase Sections

**Files:**
- Create: `components/guarantees.tsx`
- Create: `components/after-purchase.tsx`
- Modify: `app/page.tsx`

**Step 1: Create guarantees component**

Create `components/guarantees.tsx`:

```tsx
import { ShieldCheck } from "lucide-react";

export function Guarantees() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
            100% Satisfaction Guarantee
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            If you&apos;re not completely satisfied with your setup within the 14-day
            hypercare period, we&apos;ll refund your full payment. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Create after-purchase component**

Create `components/after-purchase.tsx`:

```tsx
import { MessageSquare, Phone, Wrench } from "lucide-react";

const timeline = [
  {
    icon: MessageSquare,
    time: "Within 48 hours",
    title: "We reach out",
    description: "We'll contact you and set up a dedicated Slack channel for your team.",
  },
  {
    icon: Phone,
    time: "Kickoff call",
    title: "20-45 minute session",
    description: "We map your goals, workflows, tools, and integrations.",
  },
  {
    icon: Wrench,
    time: "Setup session",
    title: "1-3 hours live build",
    description: "We deploy, configure, harden, and test your OpenClaw instance in real-time.",
  },
];

export function AfterPurchase() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
          After you <span className="text-gradient-brand">purchase</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {timeline.map((item) => (
            <div key={item.title} className="text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-500 to-emerald-500 flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                {item.time}
              </span>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-2 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 3: Add both to page.tsx** — after `<Pricing />`

**Step 4: Commit**

```bash
cd /Users/Jason-uk/AI/AI_Coding/Repositories/setupopenclaw
git add components/guarantees.tsx components/after-purchase.tsx app/page.tsx
git commit -m "feat: add guarantees and after-purchase timeline sections"
```

---

## Task 15: FAQ Section

**Files:**
- Create: `components/faq.tsx`
- Modify: `app/page.tsx`

**Step 1: Create FAQ component**

Create `components/faq.tsx`:

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is OpenClaw?",
    answer:
      "OpenClaw is an open-source AI executive assistant that connects to your tools (email, calendar, Slack, etc.) and automates workflows. It's built for teams who want AI that actually does work, not just answers questions.",
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "Not at all. That's the whole point of SetupOpenClaw — we handle every technical detail. You just tell us what you want your AI assistant to do.",
  },
  {
    question: "Can you set this up remotely?",
    answer:
      "Yes. Our Hosted Setup and Mac Mini Remote tiers are fully remote. We can deploy for teams anywhere in the UK (and worldwide). Only the Mac Mini In-Person tier requires London proximity.",
  },
  {
    question: "Is this related to the OpenAI acquisition?",
    answer:
      "No. OpenClaw is an independent open-source project. It uses various AI models and is not owned by or affiliated with OpenAI.",
  },
  {
    question: "Can I set up OpenClaw myself?",
    answer:
      "Absolutely — it's open source. But most teams find that security hardening, integration configuration, and ongoing maintenance take significantly more time than expected. We do it in hours with enterprise-grade security.",
  },
  {
    question: "What if something goes wrong?",
    answer:
      "During the 14-day hypercare period, we actively monitor and fix any issues. After that, we offer support packages. Plus, every installation includes audit trails and monitoring.",
  },
  {
    question: "What infrastructure do I need?",
    answer:
      "For Hosted Setup: nothing — we deploy to a cloud VPS (~£5-10/mo). For Mac Mini tiers: a Mac Mini (~£500). We handle all software configuration.",
  },
  {
    question: "Can I have multiple agents?",
    answer:
      "Yes. Each additional agent is £350. Teams often run separate agents for different departments or workflows.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We use Docker sandboxing, Composio middleware, OAuth token management, audit trails, and read-only defaults. Your data stays on your infrastructure — we never store it.",
  },
  {
    question: "What about ongoing maintenance?",
    answer:
      "OpenClaw requires minimal maintenance after setup. We provide documentation for common tasks. For hands-off operation, ask about our maintenance packages.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
          Frequently asked <span className="text-gradient-brand">questions</span>
        </h2>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 dark:text-white hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 dark:text-slate-400 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Add to page.tsx** — after `<AfterPurchase />`

**Step 3: Verify renders** — accordion expands/collapses, content visible

**Step 4: Commit**

```bash
cd /Users/Jason-uk/AI/AI_Coding/Repositories/setupopenclaw
git add components/faq.tsx app/page.tsx
git commit -m "feat: add FAQ section with shadcn accordion"
```

---

## Task 16: Cities Grid + Footer

**Files:**
- Create: `components/cities.tsx`
- Create: `components/footer.tsx`
- Modify: `app/page.tsx`

**Step 1: Create cities component**

Create `components/cities.tsx`:

```tsx
import { MapPin } from "lucide-react";

const cities = [
  { name: "London", type: "In-Person + Remote" },
  { name: "Manchester", type: "Remote" },
  { name: "Birmingham", type: "Remote" },
  { name: "Edinburgh", type: "Remote" },
  { name: "Bristol", type: "Remote" },
  { name: "Leeds", type: "Remote" },
  { name: "Glasgow", type: "Remote" },
  { name: "Cambridge", type: "Remote" },
  { name: "Oxford", type: "Remote" },
  { name: "Cardiff", type: "Remote" },
];

export function Cities() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
          Available <span className="text-gradient-brand">across the UK</span>
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          Remote setup anywhere. In-person available in London.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {cities.map((city) => (
            <div
              key={city.name}
              className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 text-center border border-slate-200 dark:border-slate-700"
            >
              <MapPin className="w-5 h-5 text-emerald-500 mx-auto mb-2" />
              <p className="font-semibold text-slate-900 dark:text-white text-sm">
                {city.name}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {city.type}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Create footer component**

Create `components/footer.tsx`:

```tsx
const BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1hWsbiKMNo85CRLg7CHmXAyEGRED-9afeuweInuT68RlCdzJLEAktwlfGdteGwySAPyw5oGMY6?gv=true";

export function Footer() {
  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <span className="text-xl font-bold text-white">
              Setup<span className="text-gradient-brand">OpenClaw</span>
            </span>
            <p className="text-sm text-slate-400 mt-1">
              A service by Innovatorly.ai
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm text-emerald-400 font-medium">
              Accepting new clients
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-800">
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-navy-600 to-emerald-600 hover:from-navy-700 hover:to-emerald-700 text-white text-sm font-semibold py-2.5 px-5 rounded-xl transition-all hover:scale-[1.02]"
          >
            Book a Free Call
          </a>
        </div>

        <p className="text-center text-xs text-slate-500 mt-8">
          © 2026 Innovatorly Ltd. All rights reserved.
          Registered in England and Wales.
        </p>
      </div>
    </footer>
  );
}
```

**Step 3: Add both to page.tsx** — Cities after FAQ, Footer last

**Step 4: Verify renders** — cities grid visible, footer with Innovatorly branding

**Step 5: Commit**

```bash
cd /Users/Jason-uk/AI/AI_Coding/Repositories/setupopenclaw
git add components/cities.tsx components/footer.tsx app/page.tsx
git commit -m "feat: add UK cities grid and footer with Innovatorly branding"
```

---

## Task 17: Assemble Complete Page

**Files:**
- Modify: `app/page.tsx`

**Step 1: Final page.tsx with all sections**

Replace `app/page.tsx` with:

```tsx
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Integrations } from "@/components/integrations";
import { BuiltFor } from "@/components/built-for";
import { AlwaysOn } from "@/components/always-on";
import { WhatIsAgent } from "@/components/what-is-agent";
import { HowItWorks } from "@/components/how-it-works";
import { Testimonials } from "@/components/testimonials";
import { WhyHireUs } from "@/components/why-hire-us";
import { Security } from "@/components/security";
import { Pricing } from "@/components/pricing";
import { Guarantees } from "@/components/guarantees";
import { AfterPurchase } from "@/components/after-purchase";
import { FAQ } from "@/components/faq";
import { Cities } from "@/components/cities";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Integrations />
      <BuiltFor />
      <AlwaysOn />
      <WhatIsAgent />
      <HowItWorks />
      <Testimonials />
      <WhyHireUs />
      <Security />
      <Pricing />
      <Guarantees />
      <AfterPurchase />
      <FAQ />
      <Cities />
      <Footer />
    </main>
  );
}
```

**Step 2: Run dev server and visual check**

```bash
cd /Users/Jason-uk/AI/AI_Coding/Repositories/setupopenclaw
bun run dev
```

Open `http://localhost:3000` — scroll through all 16 sections. Check:
- Nav scroll transition works
- Hero gradient orbs animate
- All sections render with correct spacing
- Dark mode toggle works across all sections
- "Book a Free Call" links open Google Calendar
- FAQ accordion expands/collapses
- Mobile responsive at 375px

**Step 3: Commit**

```bash
cd /Users/Jason-uk/AI/AI_Coding/Repositories/setupopenclaw
git add app/page.tsx
git commit -m "feat: assemble all 16 sections into complete landing page"
```

---

## Task 18: Static Export Configuration + Build Verification

**Files:**
- Modify: `next.config.ts`

**Step 1: Configure static export**

Update `next.config.ts`:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

**Step 2: Build and verify**

```bash
cd /Users/Jason-uk/AI/AI_Coding/Repositories/setupopenclaw
bun run build
```

Expected: Build succeeds, static files in `out/` directory

**Step 3: Test static build locally**

```bash
cd /Users/Jason-uk/AI/AI_Coding/Repositories/setupopenclaw
bunx serve out
```

Open browser to verify static site works correctly.

**Step 4: Commit**

```bash
cd /Users/Jason-uk/AI/AI_Coding/Repositories/setupopenclaw
git add next.config.ts
git commit -m "feat: configure static export for deployment"
```

---

## Task 19: JSON-LD Structured Data for SEO

**Files:**
- Create: `components/json-ld.tsx`
- Modify: `app/layout.tsx`

**Step 1: Create a safe JSON-LD component**

Create `components/json-ld.tsx`:

```tsx
import Script from "next/script";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SetupOpenClaw",
  description: "Managed OpenClaw AI assistant deployment for UK teams",
  provider: {
    "@type": "Organization",
    name: "Innovatorly Ltd",
    url: "https://innovatorly.ai",
  },
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Hosted Setup",
      price: "770",
      priceCurrency: "GBP",
    },
    {
      "@type": "Offer",
      name: "Mac Mini Remote",
      price: "1100",
      priceCurrency: "GBP",
    },
    {
      "@type": "Offer",
      name: "Mac Mini In-Person",
      price: "2200",
      priceCurrency: "GBP",
    },
  ],
};

export function JsonLd() {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      strategy="afterInteractive"
    >
      {JSON.stringify(structuredData)}
    </Script>
  );
}
```

**Step 2: Add JsonLd to layout.tsx**

Import and render `<JsonLd />` inside the `<body>` tag of `app/layout.tsx`:

```tsx
import { JsonLd } from "@/components/json-ld";

// Inside the body:
<ThemeProvider ...>
  <JsonLd />
  {children}
</ThemeProvider>
```

**Step 3: Verify** — View page source, confirm JSON-LD script present

**Step 4: Commit**

```bash
cd /Users/Jason-uk/AI/AI_Coding/Repositories/setupopenclaw
git add components/json-ld.tsx app/layout.tsx
git commit -m "feat: add JSON-LD structured data for SEO via next/script"
```

---

## Final Verification Checklist

After all tasks are complete, run through this checklist:

1. **`bun run build`** — builds successfully with no errors
2. **Dev server** — all 16 sections render on `http://localhost:3000`
3. **Dark mode** — toggle works, all sections have correct dark colors
4. **Mobile** — responsive at 375px, 768px, 1024px breakpoints
5. **Nav** — transparent at top, solid on scroll, mobile menu works
6. **CTAs** — all "Book a Free Call" buttons link to Google Calendar
7. **FAQ** — accordion expands/collapses smoothly
8. **Pricing** — 3 tiers with correct GBP amounts, middle highlighted
9. **Accessibility** — tab through all interactive elements, focus states visible
10. **SEO** — correct title, meta description, JSON-LD in page source
