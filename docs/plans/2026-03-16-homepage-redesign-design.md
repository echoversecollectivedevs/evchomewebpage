# Echoverse Collective Homepage Redesign

**Date:** 2026-03-16
**Status:** Approved

## Overview

Redesign the homepage to a minimal single-viewport layout with logo, animated tagline, and an inline email subscription form for a daily AI briefing.

## What Echoverse Collective Is

An AI consultancy/agency that helps businesses adopt and integrate AI solutions.

## Layout (single viewport, no scroll)

Dark background (existing dot-grid + radial gradients) with centered content:

1. **Logo** — animated entrance (existing), `w-64 md:w-80`
2. **Tagline** — "Shaping a future [Trusted/Powered] with AI" (existing FlipWords)
3. **Briefing pitch** — one line below tagline, softer text: "Subscribe to our daily AI briefing — curated insights delivered to your inbox"
4. **Email form** — inline input + submit button, same row on desktop, stacked on mobile
   - Input: email placeholder "Enter your email", dark/transparent style matching theme
   - Button: uses existing HoverBorderGradient component, text "Subscribe"
5. **Success state** — on submit, form replaces with confirmation: "You're in. Watch your inbox." with fade animation

## Backend

- **Database table** `subscribers` — columns: `id` (serial PK), `email` (unique, not null), `created_at` (timestamp, default now)
- **API endpoint** `POST /api/subscribers` — validates email with Zod, inserts into DB, returns 201 or 409 if duplicate
- **OpenAPI spec** updated so React Query hooks are auto-generated via Orval

## What Gets Removed

- Navbar component (not needed for single-screen)
- Footer component (not needed for single-screen)
- "Get in Touch" mailto button (replaced by email form)

## What Stays

- Logo, tagline, FlipWords animation, all entrance animations
- Dark theme, dot-grid background, radial gradients
- Font hierarchy (Syne + Manrope)
- HoverBorderGradient component (reused for Subscribe button)

## Tech Stack

- Frontend: React 19, TypeScript, Vite, Tailwind CSS 4, Framer Motion, shadcn/ui
- Backend: Express 5, Drizzle ORM, PostgreSQL, Zod
- API codegen: OpenAPI 3.1 + Orval → React Query hooks + Zod schemas
