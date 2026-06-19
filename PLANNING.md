# Project Planning

A living document for planning the new project. Nothing here is final — it's a
place to capture ideas, narrow them down, and record decisions as we make them.

_Started: 2026-06-16 · Last updated: 2026-06-17_

---

## 1. The idea

An **AI-personalized learning platform**: people learn about AI and actually use
AI in the same place, and **the AI tailors the learning itself** to each person.
Tell it how much time you have and your level, and it builds you a lesson or
module from a vetted content library — then you practice hands-on in a built-in
AI sandbox.

- **Working name:** **EchoVerse Academy** (fits the house naming system:
  EchoVerse Collective = holding co, EchoVerse Dispatches = media/journalism,
  EchoVerse Academy = this AI-learning product).
  - Domain: exact `.com` is taken. Best available options —
    **`echoverseacademy.ai`** (on-brand for AI) or **`echoverse.academy`**
    (clean); `.io`/`.co`/`.org` also free. Purchase decision later.
- **Elevator pitch:** "Learn AI by using AI — a personal AI tutor that tailors
  every lesson to your time and level, plus a hands-on playground, so you go
  from curious to capable without leaving the page."
- **Problem it solves:** Most people are curious about AI but find it abstract,
  intimidating, or one-size-fits-all. Existing courses are passive (fixed video
  lectures) or assume technical skills. This **adapts to the individual** and
  gives a safe, guided place to practice.
- **The core differentiators:**
  1. **Adaptive tutor** — AI tailors sequence, pace, examples and difficulty
     from a quality-controlled library (personalization *with* accuracy).
  2. The **learn → do** loop — lessons paired with live, interactive AI
     exercises inside the app.
  3. **AI-generated video** for key concepts (Synthesia-style avatars) for a
     premium, modern feel without a heavy video pipeline.

## 2. Target audience

_Drives curriculum, tone, features, and pricing._

Candidate segments:

- **Complete beginners / curious public** — never used AI, want to understand
  and start using it day-to-day.
- **Professionals upskilling** — want to use AI in their job (marketing, ops,
  writing, analysis).
- **Aspiring builders / early developers** — want to build with AI (prompting,
  APIs, simple apps).

➡️ **Proposed primary audience for v1 (confirm): Professionals upskilling.**
Rationale: the chosen **£20+/month** price point and **"paying subscribers"**
success metric favour people with clear job value and willingness to pay;
beginners/curious public are more price-sensitive. Adaptive tailoring is a
strong fit for busy professionals ("I have 15 minutes — teach me X"). Beginners
remain reachable via the free trial and can become a secondary segment later.

## 3. Differentiation

- **Adaptive AI tutor** — lessons tailored to your time and level from a vetted
  library (the headline differentiator).
- Interactive, in-app AI practice (not just videos).
- AI-generated hero videos for a premium, modern feel.
- Guided, safe environment.
- Privacy-first positioning (see §8) — "your data is yours, never used to train
  models" is a genuine selling point, reinforced by global/GDPR-grade handling.

## 4. Course / curriculum design

**Model (decided): vetted content library + AI tailoring.** You maintain a
quality-controlled library of content; the AI personalizes *which* pieces a
learner sees, in *what order*, at *what depth/pace*, with tailored examples —
but does **not** invent core teaching material on the fly (protects accuracy and
your credibility). AI-generated extra practice/examples can wrap the vetted core.

### Teaching philosophy (decided)

**Thin conceptual layer → heavy practical core → evolve toward full spectrum.**
Give just enough high-level concept to use AI *wisely* (what it is, what it
can't do, the judgment to not trust it blindly), then spend the bulk of the
time on **practical, do-it-now skills**. As the catalog matures it grows into
the full spectrum (eventually including building with AI).

### Catalog structure (decided): core + a few tracks

- **Core path — everyone starts here:** `AI at Work Essentials` (the MVP path,
  below). Zero → genuinely productive at work.
- **Tracks (post-MVP, branch off the core):** role/interest tracks that reuse
  the same engine, e.g. `AI for Marketing & Content`, `AI for Ops & Admin`,
  `AI for Research & Analysis`.
- **Full-spectrum evolution (later):** an advanced `Building with AI` track
  (prompting at depth → APIs → simple automations/agents) once the practical
  core is proven.

### MVP launch path: `AI at Work Essentials`

Standard size — **8 modules, ~3–6 hrs total**. Module 1 is the thin conceptual
layer; the rest is the practical core; the capstone ties it to the learner's
real job. Each module follows the standard lesson format below.

| # | Module | Type | Hands-on lab |
| - | ------ | ---- | ------------ |
| 1 | **What AI Actually Is (in 20 min)** — LLMs in plain language, capabilities vs limits, why it makes things up, "you stay the expert in the loop" | Conceptual (thin) | Spot what AI got right vs wrong in a sample answer |
| 2 | **Talking to AI: Prompting Basics** — role/task/context/format, examples, iterate | Practical | Turn a vague prompt into a great one |
| 3 | **Writing & Editing with AI** — drafts, tone, length, tightening your own writing | Practical | Draft + refine a real work email |
| 4 | **Research & Summarizing** — summarize long docs, extract key points, Q&A a document | Practical | Summarize a report into 5 bullets |
| 5 | **Thinking & Planning** — brainstorming, structuring ideas, plans, simple analysis | Practical | Plan a project / weigh options |
| 6 | **Meetings & Communication** — agendas, notes → action items, follow-ups, briefs | Practical | Turn messy notes into clean action items |
| 7 | **Working Safely & Well** — fact-checking output, what *not* to paste in (confidential data), bias, verifying | Judgment (concept + practice) | Catch the errors/risks in an AI answer |
| 8 | **Capstone: Your AI Workflow** — build one repeatable workflow for a real task in your own job | Practical project | Ship a personal workflow |

- **Adaptive lesson assembly:** every module/lesson/exercise is tagged (topic,
  level, time, format) so the engine selects and sequences vetted units to the
  learner's stated time + level. ("I have 15 minutes" → a focused, right-level
  slice of the path.)
- **Lesson format:** short readings + visuals (+ AI-generated video for hero
  concepts), then a hands-on lab in the sandbox, then a quick check/quiz.
- **Hero-video candidates (1–3 at launch):** Modules **1** (What AI Is) and
  **2** (Prompting) — highest-impact, best "wow"; optionally **7** (Safety).
- **Assessment:** per-module quizzes/checks + the Module 8 capstone project.
- **AI-generated video (decided — a few hero videos at launch):** Synthesia-style
  avatar videos for the highest-impact concepts only at launch; text/interactive
  for the rest. Expand video coverage as a fast-follow.
- **Certification / credential (decided — later, not v1):** completion
  certificate/badge deferred beyond MVP.
- **Content production (decided): you + AI draft it.** You author/curate the
  vetted backbone with AI assistance; AI handles tailoring on top. Needs a
  lightweight **review process** (accuracy check before content goes live) and a
  **refresh cadence** since AI moves fast.

## 5. Platform — key features

**MVP candidates:**

- User accounts (sign up / log in) + profile.
- Course player (lessons, progress tracking, resume where you left off).
- **Interactive AI sandbox / playground** — the "use AI" core (see §6).
- Quizzes / knowledge checks.
- Progress dashboard (completion %, streaks).
- Billing & subscription management.
- Account & data controls (export, delete — see §8).

**Later / nice-to-have:**

- Certificates / shareable badges.
- Community (forum, comments, peer projects).
- Gamification (points, streaks, leaderboards).
- Saved prompts / personal AI workspace.
- Team / organization accounts (B2B).
- Admin CMS for managing course content.
- Accessibility features (a priority, not an afterthought).

## 6. The "use AI" engine (core architecture)

This is what makes the product special — and the main variable cost.

- **What powers it:** integrate a top LLM API. Recommended default: **Anthropic
  Claude** (latest models, e.g. Claude Opus / Sonnet / Haiku) — strong, and the
  API does **not** train on your inputs/outputs by default, which aligns with
  the privacy promise. Final choice TBD.
- **Delivery model — key decision:**
  - **(A) Platform-provided AI** — we hold the API key, users consume "credits."
    Smoothest UX; we bear inference cost → justifies usage-based pricing.
  - **(B) Bring-your-own-key (BYOK)** — users plug in their own API key. No
    inference cost to us, but worse UX and a barrier for beginners.
  - **(C) Hybrid** — platform credits for beginners, BYOK option for power users.
  - ➡️ **Proposed (confirm): (A) platform-provided credits.** Smoothest UX,
    keeps the premium feel that justifies £20+/mo, and the included allowance
    can be sized to cover typical inference cost. Revisit (C) for power users
    later.

> **Note — two AI cost centres now, not one.** Inference cost comes from
> *both* (1) the user-facing sandbox and (2) the adaptive tailoring engine
> (LLM calls that assemble/personalize lessons). Plus a separate
> **AI-video generation** cost (Synthesia-style) for hero lessons — largely a
> one-off production cost per video rather than per-user. Budget all three.
- **Cost control:** rate limits, per-tier credit caps, cheaper models for simple
  tasks, caching where possible.
- **Safety:** content moderation / acceptable-use guardrails on what users can
  generate (people *will* test limits).

## 7. Learner experience (delivery)

_How a learner actually moves through the product day to day. All choices below
decided this round._

- **Onboarding — conversational placement.** A short AI-led interview (3–4 Qs:
  goal/role, current level, usual time, how you like to learn) that
  **immediately assembles your first lesson** — the adaptive "wow" up front.
  Under ~60 seconds, skippable with sensible defaults.
- **Home — hybrid "Continue" + path map.** Leads with a prominent
  **"Continue — your next 15 minutes"** card, alongside a visible **path map**
  (the 8 modules with progress, done/next). Tutor-led by default, browsable for
  control.
- **Time-box — default + per-session override.** Remembers your usual default
  but offers an easy **"Today I have ___"** override each session
  (15 / 30 / 60 / custom). The engine assembles a right-sized slice from the
  tagged vetted units — a lesson, part of one, or lesson + lab.

**The lesson loop (learn → do → check):**

1. **Learn** — short reading + visuals (+ hero video for marquee concepts).
2. **Do** — hands-on lab in the **embedded sandbox**: a real task with framing
   and the live AI. The heart of every lesson (always present — the
   differentiator).
3. **Check** — quick quiz / feedback on the lab output; instant.
4. **Progress + next** — mark complete, update progress, tee up the next slice.

- **Sandbox — two modes.** (1) *Guided*, embedded in labs with task framing /
  starter prompts; (2) *Free-roam playground* to experiment anytime, with
  optional "try this" suggestions tied to what you've learned. Saved prompts /
  history, privacy-aware (see §8).
- **Adaptivity in practice.** Beyond time-boxing: "explain simpler / go deeper"
  on any concept, examples tuned to level/role, and remediation surfaced when
  checks reveal gaps.
- **Progress & motivation.** Resume-where-you-left-off, completion % + streaks,
  gentle nudges, capstone project at Module 8.

## 8. Data, privacy & legal

> ⚠️ **Not legal advice.** The retention/compliance specifics below need review
> by a qualified lawyer before launch. This section frames the decisions.

Your stated principles:

1. **Users retain their data; it's never used to train models.**
2. **Inactive accounts auto-deleted after 6 months.**
3. **Option to delete personal data at the end of each session.**
4. **But some data must be retained** — correct instinct (see matrix).

### The tension to resolve

There are really **three different kinds of "data"**, and they have different
rules. The promise "delete everything" collides with legal duties to *keep*
certain records (tax, accounting, fraud). The fix is to be precise about
categories:

| Data category | Examples | Default retention | User can delete? |
| --- | --- | --- | --- |
| **Session / interaction data** | prompts, AI responses, sandbox activity | Deletable at end of session (opt-in); else tied to account | ✅ Yes, anytime |
| **Learning data** | progress, quiz scores, certificates | Kept while account active | ✅ On account deletion |
| **Account / profile data** | name, email, login | Until deletion or 6-month inactivity auto-delete | ✅ Yes |
| **Billing / financial records** | invoices, payments, tax records | **Must keep ~6–7 yrs** (legal obligation, varies by country) | ❌ Retained even after account deletion |
| **Security / fraud / audit logs** | login IPs, abuse signals | Minimal, time-limited | ❌ (legitimate-interest basis) |

**Key principle (GDPR-style "right to erasure"):** users can delete personal
data, *but* there's a recognized exception for data you're legally required to
keep (e.g. financial records for tax). So account deletion = wipe personal &
learning data, **retain anonymized/minimal billing records** for the legal
period. Document this clearly in the privacy policy so the promise is honest.

### To build / decide

- **"Don't train on user data"** — make this a contractual requirement with the
  LLM vendor (Anthropic API satisfies this by default) and state it plainly.
- **Auto-delete pipeline** — job that flags accounts inactive 6 months, warns by
  email, then deletes. (Define "inactive" = no login.)
- **Session-end delete** — toggle to purge that session's prompts/responses.
- **Self-service data export + delete** ("download my data", "delete my account").
- **Jurisdiction / compliance scope (decided — global from the start).** Build
  **global-ready and privacy-first**: design to the strictest common
  denominator (GDPR-grade) so UK/EU + California (CCPA/CPRA) + others are
  covered by one high standard. Heaviest compliance surface, but manageable
  because of the 18+ decision below. Implies: lawful-basis/consent handling,
  data-subject request flows (access/export/delete) available to all users,
  and clear cross-border data-handling disclosures.
- **Age policy (decided — 18+).** Minimum age 18. This deliberately **avoids
  children's-data regimes** (UK Age-Appropriate Design Code, COPPA, etc.) — the
  single biggest simplification for a global, solo build. Enforce via
  age-gate/attestation at sign-up and state 18+ in ToS.
- **Legal documents needed:** Privacy Policy, Terms of Service, Acceptable Use
  Policy, Cookie Policy/consent. (Global reach = these must hold up across
  jurisdictions — get them reviewed.)

## 9. Tech stack (proposed — TBD)

A modern, privacy-friendly default that matches the needs above:

- **Frontend:** React / Next.js.
- **Hosting:** Vercel (fast to ship, easy preview deploys).
- **Backend + DB + Auth:** Supabase (Postgres). Row-Level Security gives strong
  per-user data isolation and makes targeted deletion straightforward.
- **AI:** Anthropic Claude API (sandbox + adaptive tailoring engine).
- **AI video:** Synthesia (or similar) for hero-concept avatar videos — produced
  ahead of time and served as static video, so no per-user generation cost.
- **Payments:** Stripe (subscriptions + usage-based billing supported natively;
  handles trials natively too).
- **Email:** transactional provider (for verification, inactivity warnings).

_These are proposals to validate, not commitments._

## 10. Pricing framework

Designed around the fact that AI usage costs real money per use, and optimized
for the **"paying subscribers" success metric** (conversion over raw reach).

- **Main paid plan (decided): £20+/month.** Premium positioning — the adaptive
  tailoring + sandbox + hero videos must *feel* worth it. Annual discount for
  retention.
- **Trial / free access (proposed — confirm; you were undecided):**
  **time-limited full trial (7–14 days)** of the complete experience, rather
  than a permanent free tier. For a premium, conversion-focused product a full
  trial showcases the adaptive "wow" and converts better; a permanent free tier
  would carry ongoing inference cost with weaker conversion. Optionally pair
  with a tiny always-free taster (1–2 lessons) for top-of-funnel.
- **Included AI allowance:** each paid month includes a credit allowance sized
  to cover typical sandbox + tailoring usage; heavy users can buy more. Maps
  spend to inference cost and protects margin.
- **Discounts:** students / education (supports the charitable mission).
- **Open questions:** exact allowance sizing vs cost, annual price, whether to
  add a higher "Pro" tier, B2B/team pricing later.

## 11. MVP scope & phased roadmap

**Build approach (decided): you + AI assistant (Claude Code).** Lowest cost, you
stay in control. Implication: favour a **managed, batteries-included stack**
(see §9 — Next.js + Supabase + Stripe + Anthropic) so a solo+AI build avoids
undifferentiated infrastructure work. Lean on hosted services for auth, DB,
payments, and email.

**North-star success metric (decided): paying subscribers** (trial→paid
conversion + retained subscribers). Every phase should ladder up to this;
instrument conversion and retention from day one.

**Phase 0 — Planning & validation** (now): confirm the two proposed items
(primary audience, AI delivery model), validate willingness to pay at £20+/mo.

**Phase 1 — MVP (conversion-focused):**
- Auth (with 18+ age gate) + profile.
- **One complete learning path — `AI at Work Essentials` (8 modules)** in the
  vetted library, tagged for tailoring (see §4).
- **Adaptive tailoring v1** — assemble a lesson from the library by time + level.
- **AI sandbox** — the hands-on "use AI" core (platform credits).
- **1–3 hero AI-generated videos** for marquee concepts.
- Progress tracking; quizzes/checks.
- **Billing:** time-limited full trial → £20+/mo paid plan (Stripe).
- Core data controls (export, delete account, session purge); Privacy Policy,
  ToS, Acceptable Use — global/privacy-first, 18+.
- Conversion/retention analytics.

**Phase 2 — Grow:** more paths, deeper adaptive engine, more hero videos,
certificates, richer credits/allowance tuning, polish.

**Phase 3 — Scale:** community, teams/B2B, admin CMS, BYOK for power users,
more integrations.

## 12. What's still missing / open questions

**Resolved across planning rounds** (see §14): product concept & differentiators,
adaptive model, AI video scope, content production, build approach, jurisdiction,
minimum age, price point, success metric, **product name/brand**, **content
architecture & MVP path**, **learner experience / delivery**.

**Proposed — need your confirm (I picked sensible defaults so you're not blocked):**

1. **Primary target audience = Professionals upskilling** (§2).
2. **AI delivery model = (A) platform-provided credits** (§6).
3. **Trial = time-limited full trial (7–14 days)** rather than permanent free
   tier (§10).

**Still genuinely open:**

4. **Credit allowance sizing vs AI cost** — needs a cost model (sandbox +
   tailoring + video) before final numbers (§6, §10).
5. **Budget & timeline** — target launch date for the MVP?
6. **Content review/refresh process** — who accuracy-checks vetted content and
   how often (§4)?
7. **Charitable mission mechanics** — how the charity/education angle shows up
   (pricing discounts, a pledge, a non-profit arm?).

## 13. Risks

- **AI inference cost** outrunning revenue — mitigate with credits/caps/cheaper
  models.
- **Crowded market** — differentiate via the hands-on loop + privacy.
- **Content staleness** — AI changes fast; budget for ongoing updates.
- **Misuse** of the AI sandbox — needs moderation/guardrails.
- **Legal/compliance** — get the privacy & retention model reviewed properly.

## 14. Decisions log

_Newest at the top._

| Date       | Decision                                                       |
| ---------- | -------------------------------------------------------------- |
| 2026-06-17 | Delivery UX = **hybrid home (Continue + path map)**, **conversational onboarding/placement**, **time-box with per-session override**; lesson loop learn→do→check; sandbox guided + free-roam |
| 2026-06-17 | MVP launch path = **`AI at Work Essentials`** (8 modules, standard size); hero videos on modules 1–2 (±7) |
| 2026-06-17 | Catalog = **core path + a few tracks**; teach **thin concept → heavy practical → evolve to full spectrum** |
| 2026-06-17 | Product name = **EchoVerse Academy** (fits house naming system); domain `.com` taken, `.ai`/`.academy` preferred |
| 2026-06-16 | Success metric = **paying subscribers** (conversion + retention) |
| 2026-06-16 | Minimum age = **18+** (avoids children's-data regimes)         |
| 2026-06-16 | Jurisdiction = **global from the start**, privacy-first/GDPR-grade |
| 2026-06-16 | Build approach = **you + AI assistant** (Claude Code), managed stack |
| 2026-06-16 | Main paid plan = **£20+/month** (premium positioning)          |
| 2026-06-16 | AI video = **a few hero videos at launch** (Synthesia-style)   |
| 2026-06-16 | Curriculum model = **vetted library + AI tailoring**           |
| 2026-06-16 | Content = **you + AI draft** the vetted backbone; certs deferred |
| 2026-06-16 | Concept evolved: **AI-personalized** learn + use AI platform   |
| 2026-06-16 | Concept set: web app to **learn + use AI** in one place        |
| 2026-06-16 | Cleared the old EVC homepage and repurposed this repo          |

## 15. Ideas parking lot

- Personal "prompt library" users build as they learn.
- AI tutor that adapts to the learner's level.
- Real-world project templates (resume helper, study assistant, etc.).
