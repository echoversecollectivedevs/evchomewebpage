# Project Planning

A living document for planning the new project. Nothing here is final — it's a
place to capture ideas, narrow them down, and record decisions as we make them.

_Started: 2026-06-16 · Last updated: 2026-06-17_

---

## 1. The idea

An **AI-personalized learning platform**: people learn about AI and actually use
AI in the same place, and **the AI tailors the learning itself** to each person.
Tell it how much time you have and your level, and it builds you a lesson or
module from a vetted content library — then it **coaches you hands-on in your
own Claude/ChatGPT** (bridged by a companion extension), reviewing what your AI
returns and guiding your next move.

- **Working name:** **EchoVerse Academy** (fits the house naming system:
  EchoVerse Collective = holding co, EchoVerse Dispatches = media/journalism,
  EchoVerse Academy = this AI-learning product).
  - Domain: exact `.com` is taken. Best available options —
    **`echoverseacademy.ai`** (on-brand for AI) or **`echoverse.academy`**
    (clean); `.io`/`.co`/`.org` also free. Purchase decision later.
- **Elevator pitch:** "Learn AI by using AI — a personal AI tutor that tailors
  every lesson to your time and level and coaches you live inside your own
  Claude or ChatGPT, so you go from curious to capable on the tools you'll
  actually keep using."
- **Problem it solves:** Most people are curious about AI but find it abstract,
  intimidating, or one-size-fits-all. Existing courses are passive (fixed video
  lectures) or assume technical skills. This **adapts to the individual** and
  gives a safe, guided place to practice.
- **The core differentiators:**
  1. **Adaptive tutor** — AI tailors sequence, pace, examples and difficulty
     from a quality-controlled library (personalization *with* accuracy).
  2. The **learn → do** loop — lessons paired with live, coached practice in the
     learner's own AI tool (bridged by a companion extension), not just videos.
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
- Coached, hands-on practice **in the learner's own AI tool** (not just videos);
  skills transfer to what they'll actually keep using.
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

### Stages of learning (the backbone for placement + skip logic)

An explicit maturity ladder so the engine knows *where someone is* and *what's
next*. Placement (§7) maps the learner to a stage and **drops them in at the
right rung** — skipping what's behind them, routing back for gaps.

| Stage | Where they are | What they need next |
| - | --- | --- |
| **0 — Not set up** | No tool, no account | *Get Set Up* (choose tool → install → configure → first prompt) |
| **1 — Set up but stuck** | Has access, barely/poorly uses it | Prompting basics + **Setup Review** to improve config |
| **2 — Casual user** | Simple ad-hoc use | Structured prompting, apply to real work tasks |
| **3 — Practical user** | Uses AI at work regularly | Workflows, judgment/safety, consistent quality |
| **4 — Power user** | Repeatable workflows | (future) *Building with AI* track |

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

Standard size — **8 core modules, ~3–6 hrs total**, preceded by an adaptive
**Module 0 — Get Set Up** (skippable/condensed depending on stage). Module 1 is
the thin conceptual layer; the rest is the practical core; the capstone ties it
to the learner's real job. Each module follows the standard lesson format below.

| # | Module | Type | Hands-on lab |
| - | ------ | ---- | ------------ |
| 0 | **Get Set Up** — pick your AI (Claude/ChatGPT), install on a personal device, configure it well, first prompt | Setup (adaptive — skip/condense by stage) | Install + configure + send your first real prompt |
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
  concepts), then a hands-on lab the learner runs **in their own AI tool**
  (bridged by the companion extension — see §6), then a quick check/quiz where
  the coach reviews the result.
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

### Module 0 — Get Set Up (decided)

A practical entry stage that gets a learner from nothing to a working AI tool on
their own device:

1. **Pick your AI** — opinionated guidance across **Claude + ChatGPT** (the two
   covered tools), incl. free vs paid tiers.
2. **Personal device + personal account** — *why* (see device stance below), with
   a corporate-restriction warning (installs/networks may be blocked; never paste
   work-confidential data — ties to §8).
3. **Install & sign in** — desktop + mobile + web.
4. **Configure it well** — custom instructions / profile / memory so the tool
   knows who you are. ← where "big it out" lives.
5. **First contact** — first real prompt + a "you're ready" check.

- **Tools covered (decided): Claude + ChatGPT.** Opinionated default with the
  other as the main alternative; setup, config, and example prompts authored for
  both. (Gemini/Copilot later if demand warrants.)
- **Device stance (decided): personal-first.** Designed for personal device +
  personal account; corporate machines/networks/policies may block installs or
  the extension, so we warn clearly and never assume a work environment.

### Adaptive entry: skip / review / improve (decided)

Placement asks *"Got an AI tool set up already?"* and routes accordingly:

- **No** → full Module 0 (Get Set Up).
- **Sort of** → **Setup Review**: learner pastes their current custom
  instructions / describes their setup → the coach critiques it against a rubric
  and rewrites it stronger, then continues to prompting.
- **Yes, confident** → skip setup, go to prompting/work modules; Setup Review
  offered as optional.

> **Setup Review is also a standalone, recurring tool** ("tune my AI"), not just
> onboarding — it adds value even to people who *think* they're set up, because
> most people's config is weak. So "I've done that" never dead-ends a learner.

## 5. Platform — key features

**MVP candidates:**

- User accounts (sign up / log in) + profile.
- Course player (lessons, progress tracking, resume where you left off).
- **Coaching workbench + companion browser extension** — the "use AI" core:
  hands out ready-to-use prompts, bridges them into the learner's own
  Claude/ChatGPT, and pulls results back for coaching (see §6).
- **Setup Review tool** — paste your AI config; the coach rewrites it stronger
  (onboarding + standalone "tune my AI"; see §4).
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

This is what makes the product special — and a key cost driver.

**Practice model (decided): coach + your own tool, bridged by a companion
extension.** Learners do **not** practice in an AI sandbox we pay for. Instead
the platform *coaches* — it hands out ready-to-use prompts, the learner runs
them in **their own Claude/ChatGPT**, and brings the result back for review and
next steps. Skills transfer to the tool they'll actually keep using, and the
heavy practice inference runs on **their** account, not our bill.

- **Companion browser extension (decided — day one).** Bridges the loop: injects
  the coach's prompt into the learner's ChatGPT/Claude tab and pulls the answer
  back automatically, so there's no manual copy-paste. **Fallback:** one-click
  copy + "Open in Claude/ChatGPT" deep links + a "paste your result" box (also
  the learning checkpoint). ⚠️ **Caveats:** extensions are **desktop browsers
  only** (Chrome/Edge/Firefox) and **break when the target UI changes**, so they
  need active maintenance; **mobile needs a separate plan** (see §12).
- **What our platform AI does (our inference cost):** (1) the **adaptive
  tailoring/assembly** engine (selecting/sequencing lessons), (2) **coaching** —
  reviewing the learner's pasted-back results and guiding next steps, (3) the
  **Setup Review** tool. We hold the key for *these*. **Not** user practice
  inference — that's on the learner's own tool/account.
- **Model provider:** **Anthropic Claude** default for our coaching/tutoring
  calls — strong, and the API does **not** train on inputs/outputs by default,
  aligning with the privacy promise (§8). Final choice TBD.
- **Cost implication:** materially lower than the original embedded-sandbox plan,
  since we no longer fund user practice. This **reframes pricing** — the £20/mo
  is justified by the adaptive coach + curriculum + setup tooling, not by us
  footing the learner's AI bill (see §10). A separate **AI-video generation**
  cost (Synthesia-style) for hero lessons remains — a one-off production cost per
  video, not per-user.
- **Cost control:** cheaper models for simple coaching tasks, caching, sensible
  caps on coaching calls per tier.
- **Safety:** acceptable-use guardrails; because practice happens in the
  learner's own tool, their provider's safety layer also applies. Our coaching
  output still needs accuracy/guardrail care.

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
2. **Do** — the coach hands you a ready-to-use prompt; the **companion
   extension** runs it in **your own Claude/ChatGPT** and pulls the result back
   (copy/deep-link fallback). The heart of every lesson (see §6).
3. **Check** — the coach reviews your result + a quick quiz; instant feedback and
   a suggested next move.
4. **Progress + next** — mark complete, update progress, tee up the next slice.

- **Two practice modes.** (1) *Guided*, inside labs with coach-provided prompts
  and review; (2) *Free-roam* — experiment in your own tool anytime, with
  optional "try this" suggestions tied to what you've learned. Saved prompts /
  history on our side, privacy-aware (see §8).
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
| **Session / interaction data** | prompts, coaching responses, results you bring back | Deletable at end of session (opt-in); else tied to account | ✅ Yes, anytime |
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
- **AI:** Anthropic Claude API (coaching + adaptive tailoring engine; *not* user
  practice — that runs in the learner's own tool, see §6).
- **Companion extension:** browser extension (Chrome/Edge/Firefox) that bridges
  prompts/results to the learner's own Claude/ChatGPT.
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
  **coach** + curriculum + setup tooling + hero videos must *feel* worth it
  (value is the coaching, *not* us paying for the learner's AI — see §6). Annual
  discount for retention.
- **Trial / free access (proposed — confirm; you were undecided):**
  **time-limited full trial (7–14 days)** of the complete experience, rather
  than a permanent free tier. For a premium, conversion-focused product a full
  trial showcases the adaptive "wow" and converts better; a permanent free tier
  would carry ongoing inference cost with weaker conversion. Optionally pair
  with a tiny always-free taster (1–2 lessons) for top-of-funnel.
- **Included AI allowance:** the learner brings their own AI tool for practice,
  so our inference cost is just **coaching + tailoring**. Each plan includes a
  fair-use allowance of coaching calls sized to that (much smaller cost base than
  the old sandbox model); heavy users can buy more.
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

**Phase 0 — Planning & validation** (now): confirm the remaining proposed item
(primary audience), validate willingness to pay at £20+/mo.

**Phase 1 — MVP (conversion-focused):**
- Auth (with 18+ age gate) + profile.
- **Conversational placement** + the stages ladder (drop learners in at the right
  rung; skip/condense Get Set Up by stage — see §4, §7).
- **`AI at Work Essentials`** — **Module 0 (Get Set Up)** + 8 core modules in the
  vetted library, tagged for tailoring (see §4). Setup content for Claude +
  ChatGPT, personal-device-first.
- **Adaptive tailoring v1** — assemble a lesson from the library by time + level.
- **Coaching workbench + companion browser extension** — hands out prompts,
  bridges them into the learner's own Claude/ChatGPT, pulls results back for
  coaching (copy/deep-link fallback; see §6).
- **Setup Review tool** — paste config → coach rewrites it stronger.
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
architecture & MVP path**, **learner experience / delivery**, **practice model
(coach + own tool + companion extension)**, **stages ladder & Get Set Up**,
**tools covered (Claude + ChatGPT)**, **device stance (personal-first)**.

**Proposed — need your confirm (I picked sensible defaults so you're not blocked):**

1. **Primary target audience = Professionals upskilling** (§2).
2. **Trial = time-limited full trial (7–14 days)** rather than permanent free
   tier (§10).

**Still genuinely open:**

3. **Mobile experience** — the companion extension is desktop-browser only, so
   how does practice work on phones/tablets? (copy + deep-link fallback only? a
   companion app later? desktop-first for MVP and say so?) (§6)
4. **Coaching-cost model** — rough per-user cost of coaching + tailoring (much
   smaller now that practice is BYO-tool) to size the fair-use allowance and
   confirm margin (§6, §10).
5. **Budget & timeline** — target launch date for the MVP?
6. **Content review/refresh process** — who accuracy-checks vetted content and
   how often, incl. keeping Claude/ChatGPT setup steps current (§4)?
7. **Charitable mission mechanics** — how the charity/education angle shows up
   (pricing discounts, a pledge, a non-profit arm?).
8. **Extension maintenance** — process for catching/fixing breakage when
   ChatGPT/Claude change their UI (§6, §13).

## 13. Risks

- **AI coaching cost** outrunning revenue — mitigate with caps/cheaper models/
  caching (lower risk now practice is BYO-tool).
- **Companion-extension fragility** — breaks when ChatGPT/Claude change their UI;
  needs active maintenance + a fast fallback to copy/deep-link.
- **Desktop-only bridge** — no extension on mobile; risks excluding phone-first
  learners until a mobile plan exists (§12).
- **Dependence on third-party tools** — Claude/ChatGPT could change pricing,
  access, or terms; keep the curriculum tool-agnostic where possible.
- **Crowded market** — differentiate via the coached learn↔do loop + privacy.
- **Content staleness** — AI changes fast; budget for ongoing updates.
- **Misuse** — acceptable-use guardrails; note practice runs in the user's own
  tool under its provider's safety layer.
- **Legal/compliance** — get the privacy & retention model reviewed properly.

## 14. Decisions log

_Newest at the top._

| Date       | Decision                                                       |
| ---------- | -------------------------------------------------------------- |
| 2026-06-17 | Practice model = **coach + learner's own Claude/ChatGPT, bridged by a companion browser extension** (day one; copy/deep-link fallback). Our AI = coaching + tailoring only → lowers cost, reframes pricing. Supersedes embedded-sandbox/credits plan |
| 2026-06-17 | Content = **stages-of-learning ladder** + adaptive **Module 0 (Get Set Up)** with skip/Setup-Review entry; tools covered = **Claude + ChatGPT**; **personal-device-first** |
| 2026-06-17 | Delivery UX = **hybrid home (Continue + path map)**, **conversational onboarding/placement**, **time-box with per-session override**; lesson loop learn→do→check; guided + free-roam practice |
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
