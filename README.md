<div align="center">
<br />

<p><strong>A premium psychotherapy practice website — built to show mental health clients exactly what they're getting.</strong></p>

<br />

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-EF0074?style=flat-square&logo=framer)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?style=flat-square&logo=tailwindcss)
![Lenis](https://img.shields.io/badge/Lenis-1.3-000000?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-22c55e?style=flat-square)
![Status](https://img.shields.io/badge/status-live-brightgreen?style=flat-square)

<br />
</div>

---

## What is this?

**Root & Reflect** is a polished, client-facing psychotherapy practice website — not a generic template. It's designed to present a warm, professional mental health brand to prospective clients in a way that feels trustworthy and approachable from the very first scroll.

It features a full multi-page layout with a cinematic hero, animated marquee, service cards, therapist profiles, and a guided multi-step appointment booking flow. The brand identity, copy, and UX are dialled in to communicate compassion and credibility before a single session is booked.

Built as a portfolio piece demonstrating production-quality frontend work for the healthcare and wellness vertical.

---

## Pages

| Page | Description |
|---|---|
| `/` | Hero with background image, philosophy section, stats grid, service previews, and CTA |
| `/about` | Practice story, core values, and therapist profile cards with specialties |
| `/services` | Full six-service grid with areas of focus, therapeutic approach breakdown |
| `/appointment` | Guided 4-step booking flow — session type → therapist → date & time → contact info |
| `/contact` | Contact form with subject routing, office info cards, and emergency resource panel |

---

## Features

| Feature | Description |
|---|---|
| 🌿 **Services Grid** | Six therapy services with focus areas and evidence-based approach breakdowns |
| 👥 **Therapist Profiles** | Cards with credentials, specialties, and bios for each licensed clinician |
| 📊 **Trust Stats** | Key social proof metrics — years experience, clients helped, satisfaction rate |
| 📅 **Appointment Booking** | Multi-step form with session type, therapist selection, date/time picker, and contact info |
| 📬 **Contact Form** | Validated form with subject routing alongside address, phone, email, and hours |
| 🎞️ **Page Transitions** | Smooth animated transitions between routes via Framer Motion |
| 📜 **Smooth Scroll** | Lenis-powered inertia scrolling throughout |
| 🏷️ **Animated Marquee** | Scrolling trust signal ticker between the hero and content |
| 📱 **Fully Responsive** | Adaptive layouts at all breakpoints, mobile-first navigation |
| 🚨 **Emergency Resources** | Crisis line info prominently surfaced on the contact page |

---

## Tech Stack

```
root-and-reflect/
├── Next.js 16          — App Router, static generation, metadata API
├── React 19            — Latest concurrent features
├── TypeScript 5        — Strict mode throughout
├── Framer Motion 12    — Page transitions and scroll animations
├── Lenis 1.3           — Smooth inertia scrolling
├── Tailwind CSS 4      — Utility-first styling with CSS variables
├── Lucide React        — Consistent icon set
├── Radix UI            — Accessible headless component primitives
├── React Hook Form     — Form state and validation
└── Vercel Analytics    — Production traffic insights
```

---

## Project Structure

```
rootandreflect/
├── app/
│   ├── layout.tsx              — Root layout, fonts (Cormorant Garamond + Inter), metadata
│   ├── page.tsx                — Home page — hero, marquee, philosophy, services, CTA
│   ├── globals.css             — CSS variables & theme tokens
│   ├── about/
│   │   └── page.tsx            — Practice story, values, therapist team
│   ├── services/
│   │   └── page.tsx            — Full service catalogue and therapeutic approach
│   ├── appointment/
│   │   └── page.tsx            — 4-step guided booking flow
│   └── contact/
│       └── page.tsx            — Contact form, office info, emergency resources
├── components/
│   ├── navigation.tsx          — Top nav with mobile-responsive layout
│   ├── footer.tsx              — Footer with links and practice info
│   ├── page-transition.tsx     — Framer Motion route transition wrapper
│   ├── smooth-scroll.tsx       — Lenis scroll provider
│   └── ui/                     — shadcn/ui component library (57 components)
├── hooks/
│   ├── use-mobile.ts           — Responsive breakpoint hook
│   └── use-toast.ts            — Toast notification hook
├── lib/
│   └── utils.ts                — cn() utility and shared helpers
└── public/                     — Static assets and icons
```

---

## License

MIT © [Gautam Gambhir](https://github.com/gautamxgambhir)

---

<div align="center">
<sub>Built with ☕ and an eye for the details.</sub>
<br /><br />
<a href="https://github.com/gautamxgambhir">GitHub</a> ·
<a href="https://twitter.com/gautamxgambhir">Twitter</a> ·
<a href="https://instagram.com/gautamxgambhir">Instagram</a>
</div>
