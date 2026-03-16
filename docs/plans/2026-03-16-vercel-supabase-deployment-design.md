# Vercel + Supabase Deployment Design

**Date:** 2026-03-16
**Status:** Approved

## Overview

Deploy the Echoverse Collective homepage to Vercel (frontend + serverless API) with Supabase as the hosted PostgreSQL database.

## Architecture

- **Frontend** (React/Vite) → Vercel static site
- **Backend** (Express API) → Vercel serverless function at `/api`
- **Database** (PostgreSQL) → Supabase hosted Postgres

## What Needs to Change

1. **Add `vercel.json`** at repo root — configure monorepo build, route `/api` to serverless function
2. **Create serverless entry point** — wrap Express app with serverless adapter for Vercel
3. **Update Vite config** — make `PORT` and `BASE_PATH` optional for build (only needed for dev)
4. **Set environment variables in Vercel** — `DATABASE_URL` from Supabase connection string

## Supabase Setup

1. Create a new project in Supabase
2. Run `drizzle-kit push` against Supabase connection string to create `subscribers` table
3. Copy connection string for Vercel env vars

## What Stays the Same

- All existing code (Home.tsx, routes, schema) — no logic changes
- Frontend calls `/api/subscribers` — Vercel routing handles this
