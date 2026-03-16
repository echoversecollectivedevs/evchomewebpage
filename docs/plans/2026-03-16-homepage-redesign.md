# Homepage Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the current hero-only homepage with a minimal single-viewport page featuring logo, animated tagline, and an inline email subscription form for a daily AI briefing — backed by a PostgreSQL subscribers table and Express API endpoint.

**Architecture:** Frontend stays as a single-page React app. The email form posts to `POST /api/subscribers` which validates with Zod and inserts into a `subscribers` table via Drizzle ORM. The OpenAPI spec is updated so Orval generates the React Query mutation hook automatically.

**Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS 4, Framer Motion, Drizzle ORM, Express 5, PostgreSQL, Zod, Orval (codegen)

---

### Task 1: Add subscribers database schema

**Files:**
- Create: `lib/db/src/schema/subscribers.ts`
- Modify: `lib/db/src/schema/index.ts`

**Step 1: Create the subscribers table schema**

Create `lib/db/src/schema/subscribers.ts`:

```typescript
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const subscribersTable = pgTable("subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertSubscriberSchema = createInsertSchema(subscribersTable)
  .omit({ id: true, createdAt: true })
  .extend({
    email: z.email(),
  });

export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;
export type Subscriber = typeof subscribersTable.$inferSelect;
```

**Step 2: Export from schema barrel**

In `lib/db/src/schema/index.ts`, replace the contents:

```typescript
export * from "./subscribers";
```

**Step 3: Push schema to database**

Run: `cd lib/db && pnpm drizzle-kit push`

Expected: Table `subscribers` created in PostgreSQL.

**Step 4: Commit**

```bash
git add lib/db/src/schema/subscribers.ts lib/db/src/schema/index.ts
git commit -m "feat: add subscribers database table"
```

---

### Task 2: Update OpenAPI spec and generate client code

**Files:**
- Modify: `lib/api-spec/openapi.yaml`

**Step 1: Add subscriber endpoints and schemas to OpenAPI spec**

Replace `lib/api-spec/openapi.yaml` with:

```yaml
openapi: 3.1.0
info:
  # Do not change the title, if the title changes, the import paths will be broken
  title: Api
  version: 0.1.0
  description: API specification
servers:
  - url: /api
    description: Base API path
tags:
  - name: health
    description: Health operations
  - name: subscribers
    description: Subscriber operations
paths:
  /healthz:
    get:
      operationId: healthCheck
      tags: [health]
      summary: Health check
      description: Returns server health status
      responses:
        "200":
          description: Healthy
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/HealthStatus"
  /subscribers:
    post:
      operationId: createSubscriber
      tags: [subscribers]
      summary: Subscribe to daily AI briefing
      description: Add an email to the subscriber list
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/CreateSubscriberBody"
      responses:
        "201":
          description: Subscribed successfully
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/SubscribeResponse"
        "409":
          description: Email already subscribed
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"
        "400":
          description: Invalid email
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"
components:
  schemas:
    HealthStatus:
      type: object
      properties:
        status:
          type: string
      required:
        - status
    CreateSubscriberBody:
      type: object
      properties:
        email:
          type: string
          format: email
      required:
        - email
    SubscribeResponse:
      type: object
      properties:
        message:
          type: string
      required:
        - message
    ErrorResponse:
      type: object
      properties:
        message:
          type: string
      required:
        - message
```

**Step 2: Run Orval codegen**

Run: `pnpm --filter @workspace/api-spec run codegen`

Expected: Generated files in `lib/api-client-react/src/generated/` and `lib/api-zod/src/generated/`.

**Step 3: Commit**

```bash
git add lib/api-spec/openapi.yaml lib/api-client-react/src/generated/ lib/api-zod/src/generated/
git commit -m "feat: add subscriber endpoint to OpenAPI spec and generate client code"
```

---

### Task 3: Add subscribers API route

**Files:**
- Create: `artifacts/api-server/src/routes/subscribers.ts`
- Modify: `artifacts/api-server/src/routes/index.ts`

**Step 1: Create the subscribers route**

Create `artifacts/api-server/src/routes/subscribers.ts`:

```typescript
import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { subscribersTable, insertSubscriberSchema } from "@workspace/db";

const router: IRouter = Router();

router.post("/subscribers", async (req, res) => {
  const parsed = insertSubscriberSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ message: "Invalid email address" });
    return;
  }

  try {
    await db.insert(subscribersTable).values({ email: parsed.data.email });
    res.status(201).json({ message: "Subscribed successfully" });
  } catch (error: any) {
    if (error?.code === "23505") {
      res.status(409).json({ message: "Email already subscribed" });
      return;
    }
    throw error;
  }
});

export default router;
```

**Step 2: Mount the subscribers router**

Replace `artifacts/api-server/src/routes/index.ts` with:

```typescript
import { Router, type IRouter } from "express";
import healthRouter from "./health";
import subscribersRouter from "./subscribers";

const router: IRouter = Router();

router.use(healthRouter);
router.use(subscribersRouter);

export default router;
```

**Step 3: Commit**

```bash
git add artifacts/api-server/src/routes/subscribers.ts artifacts/api-server/src/routes/index.ts
git commit -m "feat: add POST /api/subscribers endpoint"
```

---

### Task 4: Redesign the homepage

**Files:**
- Modify: `artifacts/web/src/pages/Home.tsx`

**Step 1: Rewrite Home.tsx with email subscription form**

Replace `artifacts/web/src/pages/Home.tsx` with:

```tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FlipWords } from "@/components/ui/flip-words";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import logo from "@assets/noBgColor_1773620670918.png";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/subscribers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.status === 201) {
        setStatus("success");
      } else {
        const data = await res.json();
        setErrorMessage(data.message || "Something went wrong");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Unable to connect. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div className="bg-black text-foreground min-h-screen font-sans flex items-center justify-center relative overflow-hidden selection:bg-white/20 selection:text-white">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 0%, rgba(30,30,30,0.5) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 80% 80%, rgba(20,20,20,0.4) 0%, transparent 50%),
            radial-gradient(ellipse 50% 50% at 20% 70%, rgba(25,25,25,0.3) 0%, transparent 50%)
          `,
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-xl">
        <motion.img
          src={logo}
          alt="Echoverse Collective"
          className="w-64 md:w-80 mb-8 drop-shadow-[0_0_60px_rgba(255,255,255,0.06)]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" as const }}
        />

        <motion.div
          className="text-base md:text-lg lg:text-xl font-light tracking-[0.15em] uppercase text-white/60 mb-6 flex items-center justify-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span>Shaping a future</span>
          <FlipWords
            words={["Trusted", "Powered"]}
            duration={3000}
            className="text-white font-normal"
          />
          <span>with AI</span>
        </motion.div>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.p
              key="success"
              className="text-sm tracking-widest uppercase text-white/70"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
            >
              You're in. Watch your inbox.
            </motion.p>
          ) : (
            <motion.div
              key="form"
              className="w-full"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <p className="text-xs md:text-sm text-white/40 mb-4 tracking-wide">
                Subscribe to our daily AI briefing — curated insights delivered to your inbox
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center gap-3 w-full"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  className="w-full sm:flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-white/25 transition-colors"
                />
                <HoverBorderGradient
                  as="button"
                  containerClassName="border-white/10 shrink-0"
                  className="px-6 py-2.5 text-sm font-medium tracking-widest uppercase"
                  {...({ type: "submit", disabled: status === "loading" } as any)}
                >
                  {status === "loading" ? "..." : "Subscribe"}
                </HoverBorderGradient>
              </form>

              {status === "error" && (
                <motion.p
                  className="text-xs text-red-400/70 mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {errorMessage}
                </motion.p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
```

**Step 2: Verify the dev server compiles**

Run: `cd artifacts/web && pnpm dev`

Expected: No TypeScript or build errors. Page renders with logo, tagline, and email form.

**Step 3: Commit**

```bash
git add artifacts/web/src/pages/Home.tsx
git commit -m "feat: redesign homepage with email subscription form"
```

---

### Task 5: Remove unused Navbar and Footer from App

**Files:**
- Modify: `artifacts/web/src/App.tsx` (only if Navbar/Footer are imported — they are not currently, so this is a no-op)

**Step 1: Verify Navbar and Footer are not imported in App.tsx**

Read `artifacts/web/src/App.tsx` — confirm neither `Navbar` nor `Footer` is imported. If they are, remove the imports and JSX. If not, skip this task.

**Step 2: Commit (if changes made)**

```bash
git commit -m "chore: remove unused navbar and footer imports"
```

---

### Task 6: Final verification

**Step 1: Build the frontend**

Run: `cd artifacts/web && pnpm build`

Expected: Clean build, no errors.

**Step 2: Build the backend**

Run: `cd artifacts/api-server && pnpm build`

Expected: Clean build, no errors.

**Step 3: Verify database schema is pushed**

Run: `cd lib/db && pnpm drizzle-kit push`

Expected: `subscribers` table exists, no changes needed.

**Step 4: Test the full flow**

1. Start the API server
2. `curl -X POST http://localhost:$PORT/api/subscribers -H "Content-Type: application/json" -d '{"email":"test@example.com"}'`
3. Expected: `201 {"message":"Subscribed successfully"}`
4. Repeat same curl — Expected: `409 {"message":"Email already subscribed"}`

**Step 5: Final commit (if any cleanup needed)**

```bash
git commit -m "chore: final cleanup for homepage redesign"
```
