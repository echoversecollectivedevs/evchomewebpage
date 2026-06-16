# Project Planning

A living document for planning the new project. Nothing here is final — it's a
place to capture ideas, narrow them down, and record decisions as we make them.

_Started: 2026-06-16 · Last updated: 2026-06-16_

---

## 1. The idea

A **web application where people learn about AI and actually use AI in the same
place.** Education + hands-on practice in one loop: read/watch a concept, then
immediately try it in a built-in AI sandbox.

- **Working name:** TBD
- **Elevator pitch:** "Learn AI by using AI — a guided course plus a hands-on
  playground, so you go from curious to capable without leaving the page."
- **Problem it solves:** Most people are curious about AI but find it abstract
  or intimidating. Existing courses are passive (video lectures) or assume
  technical skills. This teaches *and* gives a safe, guided place to practice.
- **The core differentiator:** the **learn → do** loop. Lessons are paired with
  live, interactive AI exercises inside the app.

## 2. Target audience

_Biggest open question — it drives curriculum, tone, features, and pricing._

Candidate segments (need to pick a primary one for v1):

- **Complete beginners / curious public** — never used AI, want to understand
  and start using it day-to-day.
- **Professionals upskilling** — want to use AI in their job (marketing, ops,
  writing, analysis).
- **Aspiring builders / early developers** — want to build with AI (prompting,
  APIs, simple apps).

➡️ **Decision needed.** Recommendation: start with **one** primary audience for
the MVP and expand later.

## 3. Differentiation

- Interactive, in-app AI practice (not just videos).
- Guided, safe, beginner-friendly environment.
- Privacy-first positioning (see §7) — "your data is yours, never used to train
  models" is a genuine selling point.

## 4. Course / curriculum design

Structure to design:

- **Learning paths** — sequenced tracks (e.g. "AI Foundations" → "Using AI at
  Work" → "Building with AI").
- **Modules → lessons → exercises.**
- **Lesson format:** short readings + visuals, then a hands-on exercise in the
  sandbox, then a quick check/quiz.
- **Hands-on labs:** real tasks using AI (e.g. "write an effective prompt",
  "summarize a document", "build a mini chatbot").
- **Assessment:** quizzes, practical challenges, project at the end of a path.
- **Certification / credential:** completion certificate or badge (optional v1).
- **Content production:** who writes it, review process, how it's kept current
  (AI moves fast — content will need regular updates). _Open question._

## 5. Platform — key features

**MVP candidates:**

- User accounts (sign up / log in) + profile.
- Course player (lessons, progress tracking, resume where you left off).
- **Interactive AI sandbox / playground** — the "use AI" core (see §6).
- Quizzes / knowledge checks.
- Progress dashboard (completion %, streaks).
- Billing & subscription management.
- Account & data controls (export, delete — see §7).

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
  - ➡️ Recommendation: **(A)** for the target beginner audience, possibly (C)
    later.
- **Cost control:** rate limits, per-tier credit caps, cheaper models for simple
  tasks, caching where possible.
- **Safety:** content moderation / acceptable-use guardrails on what users can
  generate (people *will* test limits).

## 7. Data, privacy & legal

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
- **Jurisdiction / compliance scope** — GDPR (UK/EU), CCPA (California), etc.
  This determines exact rules. _Open question: where are your users?_
- **Legal documents needed:** Privacy Policy, Terms of Service, Acceptable Use
  Policy, Cookie Policy/consent.
- **Age policy** — if under-18s can join, extra rules (COPPA / age-appropriate
  design) apply. Decide minimum age.

## 8. Tech stack (proposed — TBD)

A modern, privacy-friendly default that matches the needs above:

- **Frontend:** React / Next.js.
- **Hosting:** Vercel (fast to ship, easy preview deploys).
- **Backend + DB + Auth:** Supabase (Postgres). Row-Level Security gives strong
  per-user data isolation and makes targeted deletion straightforward.
- **AI:** Anthropic Claude API.
- **Payments:** Stripe (subscriptions + usage-based billing supported natively).
- **Email:** transactional provider (for verification, inactivity warnings).

_These are proposals to validate, not commitments._

## 9. Pricing framework

Designed around the fact that AI usage costs real money per use.

- **Free tier** — limited lessons + small monthly AI credit allowance. Drives
  sign-ups and lets people try the learn→do loop.
- **Monthly / annual subscription** — full course access + a monthly AI credit
  allowance. Annual discount for retention.
- **Usage-based AI credits** — included allowance per tier; buy more if you run
  out. Maps spend to inference cost.
- **Possible tiers (illustrative):** Free / Plus / Pro. Final structure TBD.
- **Discounts:** students / education.
- **Open questions:** target price points, how generous the free tier is,
  credits vs unlimited framing, B2B/team pricing.

## 10. MVP scope & phased roadmap

**Phase 0 — Planning & validation** (now): finalize audience, scope, stack;
validate the idea.

**Phase 1 — MVP:** auth, one learning path (a few modules), the AI sandbox,
progress tracking, basic billing (free + one paid tier), core data controls
(delete account, session purge), privacy policy & ToS.

**Phase 2 — Grow:** more paths, certificates, richer pricing/credits,
analytics, polish.

**Phase 3 — Scale:** community, teams/B2B, admin CMS, more integrations.

## 11. What's still missing / open questions

1. **Primary target audience** for v1 (§2).
2. **Working name / brand.**
3. **AI delivery model** — platform credits vs BYOK vs hybrid (§6).
4. **Primary jurisdiction / where users are** — drives compliance (§7).
5. **Minimum age** for users (§7).
6. **Price points & free-tier generosity** (§9).
7. **Who creates the course content** and how it stays current (§4).
8. **Certification** — needed for v1 or later? (§4)
9. **Budget & timeline** — solo build, with help, funded?
10. **Success metrics** — what does "working" look like (sign-ups, completion,
    paid conversion, retention)?

## 12. Risks

- **AI inference cost** outrunning revenue — mitigate with credits/caps/cheaper
  models.
- **Crowded market** — differentiate via the hands-on loop + privacy.
- **Content staleness** — AI changes fast; budget for ongoing updates.
- **Misuse** of the AI sandbox — needs moderation/guardrails.
- **Legal/compliance** — get the privacy & retention model reviewed properly.

## 13. Decisions log

_Newest at the top._

| Date       | Decision                                                       |
| ---------- | -------------------------------------------------------------- |
| 2026-06-16 | Concept set: web app to **learn + use AI** in one place        |
| 2026-06-16 | Cleared the old EVC homepage and repurposed this repo          |

## 14. Ideas parking lot

- Personal "prompt library" users build as they learn.
- AI tutor that adapts to the learner's level.
- Real-world project templates (resume helper, study assistant, etc.).
