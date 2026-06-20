# EchoVerse Academy — Master Project Reference

> **Read-me-first.** This is the single consolidated reference for the project:
> the vision, what we're building first (v1), every decision we've made and why,
> the open questions, and the recommended next steps. It synthesizes the two
> living working docs so anyone can get up to speed and resume work from one
> place.

_Created: 2026-06-20 · Synthesizes [`PLANNING.md`](./PLANNING.md) (platform
vision) + [`V1-SPEC.md`](./V1-SPEC.md) (v1 spec)._

---

## 0. Snapshot (TL;DR)

- **What we're building:** **EchoVerse Academy** — an AI-personalized learning
  platform where people *learn about AI* and *actually use AI* in one place, with
  the AI tailoring the learning to each person and coaching them hands-on in
  their own Claude/ChatGPT.
- **What ships first (v1):** a light, single-session **"AI-setup + use-case
  generator"** (working title _AI Kickstart_). Tell it about yourself → get a
  personalized AI **profile** plus a set of **Project Packs** (durable
  capabilities, not throwaway prompts) for the things people in your role
  actually use AI for. Free, **EchoVerse-sign-up-gated** (sign-ups are the v1
  goal and funnel into the paid platform).
- **Where we are now:** Planning/validation. The v1 output model and the **first
  10 use cases** are defined. Not yet built.
- **Biggest near-term decisions:** primary audience confirm, v1 launch scope
  (avatar at launch vs fast-follow), how many job-roles to seed, the real product
  name, and the save-gate placement.

---

## 1. Document map

| Doc | Purpose | Status |
| --- | ------- | ------ |
| **`PROJECT-REFERENCE.md`** (this) | Master reference — vision + v1 + all decisions + next steps in one place | Synthesis / index |
| [`PLANNING.md`](./PLANNING.md) | The **fuller vision** — the adaptive coaching platform v1 grows into. The north star. | Living |
| [`V1-SPEC.md`](./V1-SPEC.md) | The **v1 spec** — the lite tool we build and ship first. | Living |
| `README.md` | Repo readme. | — |

> When details change, update the relevant living doc (`PLANNING.md` /
> `V1-SPEC.md`) **and** reflect material decisions in §6 below.

---

## 2. The vision — EchoVerse Academy (the platform)

**Concept.** An AI-personalized learning platform: people learn about AI and use
AI in the same place, and the AI **tailors the learning itself** to each person.
Tell it your time and level → it assembles a lesson from a **vetted content
library**, then **coaches you hands-on in your own Claude/ChatGPT** (bridged by a
companion browser extension), reviewing what your AI returns and guiding the next
move.

**Why it's different (core differentiators):**
1. **Adaptive tutor** — tailors sequence, pace, examples, and difficulty from a
   quality-controlled library (personalization *with* accuracy; it does **not**
   invent core teaching material on the fly).
2. **The learn → do → check loop** — lessons paired with live, coached practice
   in the learner's *own* AI tool, not just videos.
3. **AI-generated hero video** (Synthesia-style avatars) for a premium feel
   without a heavy video pipeline.

**Brand / naming.** **EchoVerse Academy**, fitting the house system (EchoVerse
Collective = holding co; EchoVerse Dispatches = media; EchoVerse Academy = this
product). `.com` is taken; preferred domains **`echoverseacademy.ai`** or
**`echoverse.academy`** (purchase decision later).

**Primary audience (proposed, to confirm):** **Professionals upskilling** — they
have clear job value and willingness to pay the £20+/mo price; beginners reachable
via free trial as a secondary segment.

**Teaching philosophy:** thin conceptual layer → heavy practical core → evolve
toward the full spectrum (eventually *building with AI*).

### 2.1 Content architecture

- **Model:** vetted content library + AI tailoring (you + AI author the backbone;
  AI personalizes selection/order/depth/examples on top).
- **Stages-of-learning ladder** (placement drops learners in at the right rung):
  0 — Not set up · 1 — Set up but stuck · 2 — Casual user · 3 — Practical user ·
  4 — Power user (future *Building with AI*).
- **Catalog:** a core path everyone starts (`AI at Work Essentials`) + a few
  role/interest tracks post-MVP; advanced *Building with AI* later.
- **MVP launch path — `AI at Work Essentials`:** an adaptive **Module 0 — Get Set
  Up** + 8 core modules (~3–6 hrs): What AI Actually Is · Prompting Basics ·
  Writing & Editing · Research & Summarizing · Thinking & Planning · Meetings &
  Communication · Working Safely & Well · Capstone (your AI workflow).
- **Get Set Up + Setup Review:** Module 0 takes someone from nothing to a
  configured tool; placement routes "no / sort-of / yes" → full setup / **Setup
  Review** (paste your config → coach rewrites it stronger) / skip. Setup Review
  is also a standalone recurring tool. **Tools covered: Claude + ChatGPT.**
  **Device stance: personal-first.**

### 2.2 The "use AI" engine

- **Practice model:** coach + the learner's *own* tool, bridged by a **companion
  browser extension** (injects the coach's prompt into their ChatGPT/Claude,
  pulls the answer back). **Fallback:** copy + "Open in Claude/ChatGPT" deep
  links + a "paste your result" box. ⚠️ Extension is **desktop-browser only** and
  **breaks when the target UI changes** → needs maintenance; **mobile needs a
  separate plan**.
- **Our inference cost = coaching + adaptive tailoring + Setup Review only** — not
  user practice (that runs on the learner's own account). This materially lowers
  cost and reframes pricing.
- **Provider:** Anthropic Claude (doesn't train on inputs/outputs by default —
  aligns with the privacy promise).

### 2.3 Commercials & platform delivery

- **Pricing:** main paid plan **£20+/mo** (premium positioning; value = the
  coach + curriculum + setup tooling, *not* footing the learner's AI bill).
  **Trial (proposed):** time-limited full trial (7–14 days) over a permanent free
  tier; optional tiny always-free taster. Student/education discounts.
- **Success metric (north star):** **paying subscribers** (trial→paid conversion
  + retention).
- **Delivery UX:** conversational placement onboarding · hybrid home ("Continue —
  your next 15 minutes" + path map) · time-box with per-session override · lesson
  loop learn→do→check · guided + free-roam practice.
- **Build approach:** you + AI assistant (Claude Code) on a managed stack.

### 2.4 Tech stack (proposed)

Next.js on Vercel · Supabase (Postgres, Auth, RLS) · Anthropic Claude API ·
companion browser extension · Synthesia (or similar) for hero videos · Stripe ·
transactional email.

### 2.5 Data, privacy & legal (⚠️ not legal advice — needs lawyer review)

- **Principles:** users retain their data, **never used to train models**;
  inactive accounts auto-deleted after 6 months; option to delete session data;
  some records legally retained.
- **Data categories:** session/interaction (deletable anytime) · learning
  (deleted on account deletion) · account/profile (deletable / 6-mo
  auto-delete) · billing (**must keep ~6–7 yrs**) · security/audit (minimal,
  time-limited).
- **Posture:** **global from the start**, privacy-first/**GDPR-grade**; **18+**
  (deliberately avoids children's-data regimes — a big simplification). Needs
  Privacy Policy, ToS, Acceptable Use, Cookie policy.

---

## 3. v1 — the lite tool (what we build first)

**Working title:** _AI Kickstart_ (name TBD). **One job, done well:** turn *"tell
me about yourself"* into *"here's your personalized AI setup + the things people
like you actually use AI for."*

**Why first:** fast to build/validate · builds the EchoVerse sign-up base · seeds
the platform (the role→use-case library + profile logic become the Academy's
content and the Setup Review feature).

**Who it's for:** non-technical professionals (simple users, not coders), curious
about AI but unsure how to set it up or what to use it for.

### 3.1 The output model — foundations + Project Packs

The defining v1 decision: **each use case builds a durable capability, not a
throwaway prompt.**

- **Foundations (set these up once):**
  1. **Your AI profile** — a personalized global custom-instructions block
     ("about me / how to respond") + where-to-paste guidance per tool.
  2. **Set up your projects & skills** — an orientation teaching how to create a
     project, what a skill is, and **what sits where**.
- **Project Packs** (the 8 domain use cases) — each delivers a reusable setup:
  1. **Create the project** (tool-specific steps)
  2. **Project instructions** (generated, personalized)
  3. **Add knowledge** (optional uploads/paste)
  4. **Skills — 3–5 reusable actions** (named saved prompts in the project)
  5. **Use it** (how to invoke each skill)

**Graceful fallback (decided):** Projects often need a paid tier (esp. Claude).
If a user can't make a Project, the same pack degrades cleanly to **global custom
instructions + a saved prompt library** (skills as a copy-paste list). Nobody is
excluded. (Re-verify per-tool tier availability at build time — it changes fast.)

**What sits where (taught in foundation #2):**

| Layer | What goes here | When it's on |
| ----- | -------------- | ------------ |
| **Global custom instructions** | "About me" — role, general style, preferences | Always |
| **Project** | A context you work in repeatedly + its knowledge | When you're in it |
| **Skill** | A specific repeatable action (a saved prompt) | When you invoke it |

> Rule of thumb: *about me* → global · *about an area* → project · *a repeatable
> task* → skill.

### 3.2 The first 10 use cases (v1 catalog)

#1–2 are foundations; #3–10 are Project Packs.

| # | Use case | How it helps |
| - | -------- | ------------ |
| 1 | **Set up your AI profile** _(foundation)_ | AI knows your role, context & style every time |
| 2 | **Set up your projects & skills** _(foundation)_ | Teaches projects/skills + what sits where |
| 3 | **Summarize long things** | Reports, threads, docs → key points |
| 4 | **Brainstorm & unblock** | Ideas, options, angles when stuck |
| 5 | **Notes → action items** | Meeting/call notes → next steps & follow-ups |
| 6 | **Polish your own writing** | Tighten, clarify, adjust tone (keeps your voice) |
| 7 | **Get up to speed on a topic** | Explain it simply (+ "verify before you rely") |
| 8 | **Plan & structure work** | Break a goal into a plan; outline a doc |
| 9 | **Prep for meetings & tough conversations** | Agendas, talking points, role-play |
| 10 | **Draft documents from scratch** | Proposals, briefs, JDs → first draft |

**Bench (swap candidates):** email/drafting replies *(demoted — see below)* ·
decision support / compare options · social & marketing content · career help
(CV, cover letter) · simplify jargon · ask questions of a spreadsheet · reusable
templates & checklists.

> **Design principle — AI-native over app-tied.** Tasks that live in another app
> the user has already set up (email in Gmail/Outlook, calendar, docs) make
> awkward standalone projects: the AI doesn't integrate with that app, so it
> feels disconnected and un-customised. **v1 favours AI-native use cases** where
> the AI tool is the natural home. (This is why **email was demoted to the
> bench**. Deeper app integrations are a possible future, not v1.)

### 3.3 Worked example — the "Meeting Prep" Project Pack

A clean, AI-native example:
- **You end up with:** a *"Meeting Prep"* project that knows your role.
- **Project instructions (generated):** *"You help [name], a [role] at [company],
  prepare for meetings. Be concise and practical. Ask for the goal and attendees
  if not given. Never invent facts about people or commitments."*
- **Skills (3–5):** Build an agenda · Talking points · Anticipate questions ·
  Role-play the conversation · Recap notes → action items.
- **Fallback:** instructions → global custom instructions; the 5 skills → a saved
  prompt list.

### 3.4 Core flow

1. **Pick intake mode** — avatar **or** text (both allow pasting current setup).
2. **Intake questions** — role/day-to-day · which AI you use · what you want to
   get done · (optional) paste current instructions/prompt.
3. **Quality gate + adaptive follow-up** — the "don't make it worse" principle
   (§3.5).
4. **Pick a use case** (or start with the profile).
5. **Generate** the profile and/or Project Pack(s) — detect/ask tier → Project
   version or fallback.
6. **Use & save** — setup guidance, copy buttons, deep links; **sign up to
   EchoVerse to save/email** (the gate + funnel).

### 3.5 The "don't make it worse" principle (core requirement)

If a user provides something good, the tool must **not degrade it**.
- **Score** pasted input against a rubric (specificity, role context,
  preferences, constraints, tone).
- **Above threshold** → preserve strong parts (verbatim where possible), *layer*
  additions, ask a sharper round of questions — never genericize.
- **Below threshold** → guided beginner questions to build it up.
- **Always transparent** → show *"what you gave us"* vs *"what we added"*.

### 3.6 v1 scope, tech, metrics

- **In scope:** avatar+text intake · paste-current-config · quality gate +
  adaptive follow-up · generate profile + Project Packs (with fallback) ·
  per-tool setup guidance/deep-links · EchoVerse sign-up to save · the vetted
  role→use-case library + the 10-use-case seed catalog.
- **Out of scope (= the platform):** courses/modules · the coached
  learn→do→check loop · companion extension · progress tracking · payments ·
  stages ladder · hero-video lessons.
- **Tech (light):** Next.js/Vercel · Supabase (sign-up + saved results) ·
  Anthropic Claude API (a few calls/session) · per-tool setup content for Claude
  + ChatGPT (+ fallback) · Synthesia/HeyGen for avatar intake videos · no
  payments.
- **Metrics:** sign-ups (primary) · completion rate · result
  quality/satisfaction · (later) v1→paid conversion.
- **Privacy:** same principles as the platform; lighter surface (sign-up details
  + saved results + pasted configs, the latter treated as deletable session
  data).

---

## 4. How v1 feeds the platform (the throughline)

| v1 asset | Becomes in the platform |
| -------- | ----------------------- |
| Profile generator + "don't make it worse" rubric | **Setup Review** feature + Module 0 "Configure it well" |
| Vetted role → use-case library | Core tailoring content for the curriculum |
| Project Packs (instructions + skills) | Practical lab content + saved-prompt workspace |
| EchoVerse sign-up base | The audience to convert to £20+/mo subscribers |
| Avatar intake videos (Synthesia/HeyGen) | Reuses the same pipeline as hero-concept videos |

---

## 5. Open questions (consolidated)

**v1 (from `V1-SPEC.md` §10):**
1. **Avatar at launch vs fast-follow** — text mode can ship first if avatar
   gates the date.
2. **Role library scope** — how many *job roles* to seed at launch; who
   curates/accuracy-checks per-tool setup steps + skills. (The 10 use cases are
   set.)
3. **Real product name** (working title _AI Kickstart_).
4. **Save-gate placement** — sign-up before generating, or show result then gate
   save/email? (conversion vs drop-off).
5. **Tier detection** — ask vs detect, to route Project Pack vs fallback;
   re-verify Projects availability per tool at build time.

**Platform (from `PLANNING.md` §12):**
6. **Primary audience** confirm = Professionals upskilling.
7. **Trial** confirm = time-limited full trial vs permanent free tier.
8. **Mobile experience** — extension is desktop-only; how does practice work on
   phones? (fallback only / companion app later / desktop-first MVP?)
9. **Coaching-cost model** — per-user cost of coaching + tailoring to size
   fair-use allowance and confirm margin.
10. **Budget & timeline** — target MVP launch date.
11. **Content review/refresh process** — who accuracy-checks vetted content and
    how often (incl. keeping Claude/ChatGPT setup steps current).
12. **Charitable mission mechanics** — how the education/charity angle shows up.
13. **Extension maintenance** — process for catching/fixing breakage when
    ChatGPT/Claude change their UI.

---

## 6. Decisions log (consolidated, newest first)

| Date | Decision |
| ---- | -------- |
| 2026-06-17 | **v1 catalog set — 10 use cases:** two foundations (#1 profile, #2 set up projects & skills) + 8 AI-native Project Packs |
| 2026-06-17 | **Email demoted to bench** — app-tied to Gmail/Outlook, awkward as a standalone project; v1 favours **AI-native** use cases |
| 2026-06-17 | Added **foundation #2 "Set up your projects & skills"** + the "what sits where" model (global vs project vs skill) |
| 2026-06-17 | **Each use case = a Project Pack** (create project → instructions → knowledge → **3–5 skills** → use), not a throwaway prompt; **graceful fallback** to custom-instructions + prompt library when Projects need a paid tier |
| 2026-06-17 | **v1 = a lite "AI-setup + use-case generator"**, shipped before the platform; free, EchoVerse-signup-gated; intake = **avatar OR text** (both allow pasting current config); must **not degrade** good input |
| 2026-06-17 | Practice model = **coach + learner's own Claude/ChatGPT, bridged by a companion browser extension** (copy/deep-link fallback). Our AI = coaching + tailoring only → lowers cost, reframes pricing. Supersedes the embedded-sandbox/credits plan |
| 2026-06-17 | Content = **stages-of-learning ladder** + adaptive **Module 0 (Get Set Up)** with skip/Setup-Review entry; tools = **Claude + ChatGPT**; **personal-device-first** |
| 2026-06-17 | Delivery UX = **hybrid home (Continue + path map)**, **conversational placement**, **time-box w/ per-session override**; lesson loop learn→do→check; guided + free-roam |
| 2026-06-17 | MVP launch path = **`AI at Work Essentials`** (8 modules); hero videos on modules 1–2 (±7) |
| 2026-06-17 | Catalog = **core path + a few tracks**; teach **thin concept → heavy practical → full spectrum** |
| 2026-06-17 | Product name = **EchoVerse Academy**; `.com` taken, `.ai`/`.academy` preferred |
| 2026-06-16 | Success metric = **paying subscribers** (conversion + retention) |
| 2026-06-16 | Minimum age = **18+** (avoids children's-data regimes) |
| 2026-06-16 | Jurisdiction = **global from the start**, privacy-first/GDPR-grade |
| 2026-06-16 | Build approach = **you + AI assistant** (Claude Code), managed stack |
| 2026-06-16 | Main paid plan = **£20+/month** (premium positioning) |
| 2026-06-16 | AI video = **a few hero videos at launch** (Synthesia-style) |
| 2026-06-16 | Curriculum model = **vetted library + AI tailoring**; content = you + AI draft; certs deferred |
| 2026-06-16 | Concept set: AI-personalized platform to **learn + use AI** in one place |
| 2026-06-16 | Cleared the old EVC homepage and repurposed this repo |

---

## 7. Recommended next steps

Roughly in order; each is a discrete, pick-up-able piece of work.

1. **Flesh out the 8 domain Project Packs** to "Meeting Prep" depth — for each:
   project name, generated instructions template, optional knowledge, and 3–5
   skills (+ the fallback prompt list). *This is the real content of v1.*
2. **Design foundation #2** ("Set up your projects & skills") — decide: a short
   guide vs an interactive walkthrough that helps them create their first real
   project.
3. **Pick the launch job-roles** (e.g. 5–6 common professional roles) that drive
   personalization, since they shape the library.
4. **Confirm the small open decisions** that unblock build: primary audience,
   avatar-at-launch vs fast-follow, save-gate placement, tier detection approach,
   and the real product name.
5. **Then build:** scaffold Next.js + Supabase, the intake flow, the quality gate,
   the generator calls (Anthropic), and the sign-up-to-save gate.

> Update `V1-SPEC.md` / `PLANNING.md` as these land, and add material decisions to
> §6 above.
