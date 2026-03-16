# Vercel + Supabase Deployment Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Deploy the Echoverse Collective homepage to Vercel with Supabase PostgreSQL, converting the Express backend to a Vercel serverless function.

**Architecture:** The Vite frontend builds to static files served by Vercel. The Express app is wrapped with `@vendia/serverless-express` and deployed as a single Vercel serverless function at `/api`. Supabase provides the hosted PostgreSQL database via `DATABASE_URL`.

**Tech Stack:** Vercel, Supabase PostgreSQL, @vendia/serverless-express, Vite, Express 5

---

### Task 1: Make Vite config build-safe

**Files:**
- Modify: `artifacts/web/vite.config.ts`

The current Vite config throws if `PORT` or `BASE_PATH` are missing. These are only needed for dev server, not for `vite build`. We need to make them optional during build.

**Step 1: Update vite.config.ts**

Replace the PORT/BASE_PATH validation in `artifacts/web/vite.config.ts` (lines 7-27) so they default gracefully:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const port = Number(process.env.PORT) || 3000;
const basePath = process.env.BASE_PATH || "/";

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    ...(process.env.NODE_ENV === "production" ? [runtimeErrorOverlay()] : []),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, ".."),
            }),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
```

**Step 2: Verify build works**

Run: `cd artifacts/web && PORT=3000 BASE_PATH=/ pnpm build`

Expected: Clean build output.

**Step 3: Commit**

```bash
git add artifacts/web/vite.config.ts
git commit -m "fix: make vite config build-safe by defaulting PORT and BASE_PATH"
```

---

### Task 2: Create Vercel serverless function entry point

**Files:**
- Create: `api/index.ts`

Vercel uses the `api/` directory at the repo root for serverless functions. We create a single catch-all function that wraps the existing Express app.

**Step 1: Install serverless-express**

Run: `cd C:/Users/riz/evchomewebpage && pnpm install -w @vendia/serverless-express`

**Step 2: Create the serverless entry point**

Create `api/index.ts`:

```typescript
import serverlessExpress from "@vendia/serverless-express";
import app from "../artifacts/api-server/src/app";

export default serverlessExpress({ app });
```

**Step 3: Commit**

```bash
git add api/index.ts package.json pnpm-lock.yaml
git commit -m "feat: add Vercel serverless function entry point"
```

---

### Task 3: Add vercel.json configuration

**Files:**
- Create: `vercel.json`

This configures Vercel to:
- Build the Vite frontend
- Route `/api/*` to the serverless function
- Serve all other routes from the static frontend

**Step 1: Create vercel.json**

Create `vercel.json` at the repo root:

```json
{
  "buildCommand": "cd artifacts/web && pnpm build",
  "outputDirectory": "artifacts/web/dist/public",
  "installCommand": "pnpm install",
  "framework": null,
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api" },
    { "source": "/((?!api).*)", "destination": "/index.html" }
  ]
}
```

**Step 2: Commit**

```bash
git add vercel.json
git commit -m "feat: add Vercel deployment configuration"
```

---

### Task 4: Set up Supabase database

This task is manual — no code changes.

**Step 1: Get Supabase connection string**

1. Go to your Supabase project dashboard
2. Navigate to **Settings > Database**
3. Copy the **Connection string (URI)** — it looks like: `postgresql://postgres.[ref]:[password]@aws-0-[region].pooler.supabase.com:6543/postgres`
4. Make sure to use the **Transaction mode** pooler connection string (port 6543) for serverless

**Step 2: Push schema to Supabase**

Run: `cd C:/Users/riz/evchomewebpage/lib/db && DATABASE_URL="your-supabase-connection-string" npx drizzle-kit push`

Expected: `subscribers` table created in Supabase.

**Step 3: Verify table exists**

Go to Supabase dashboard > Table Editor — you should see the `subscribers` table with columns: `id`, `email`, `created_at`.

---

### Task 5: Deploy to Vercel

This task is manual — connecting the GitHub repo to Vercel.

**Step 1: Push all changes**

```bash
git push origin main
```

**Step 2: Connect to Vercel**

1. Go to **vercel.com/new**
2. Import the `echoversecollective/evchomewebpage` repository
3. Vercel will detect `vercel.json` automatically
4. In **Environment Variables**, add:
   - `DATABASE_URL` = your Supabase connection string from Task 4
5. Click **Deploy**

**Step 3: Verify deployment**

1. Visit the Vercel deployment URL
2. You should see the homepage with logo, tagline, and email form
3. Enter a test email and click Subscribe
4. Check Supabase Table Editor — the email should appear in the `subscribers` table

**Step 4: (Optional) Add custom domain**

1. In Vercel project settings > Domains
2. Add your domain (e.g., `echoversecollective.com`)
3. Update DNS records as instructed by Vercel
