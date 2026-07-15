# EchoVerse Academy — v1 Spec

**Working title:** _AI Kickstart_ (name TBD)
**What it is:** the **v1** of EchoVerse Academy — a light, single-session tool
that turns *"tell me about yourself"* into *"here's your personalized AI setup +
the things people like you actually use AI for."* The full coaching platform
(see `PLANNING.md`) is the vision this grows into; **this ships first.**

_Started: 2026-06-17_

---

## 1. Why this first

- **Fast to build, fast to validate** — one job, done well, instead of the full
  platform (courses, coaching loop, companion extension).
- **Builds the EchoVerse base** — gated by sign-up, so every use grows the user
  list we later convert to the paid platform.
- **Seeds the platform** — the vetted "role → use-cases" library and the
  profile-generation logic become core content/features of the full Academy
  (esp. the Setup Review feature).

## 2. Who it's for

Non-technical **professionals** (simple users, *not* coders) who are curious
about AI but unsure how to set it up or what to use it for. Beginner-friendly by
default. (Same primary audience as the platform; see `PLANNING.md` §2.)

## 3. What it generates (the output)

**Two foundations first, then domain Project Packs.**

1. **Your AI profile** _(foundation — use case #1)_ — a personalized global
   **custom-instructions** block (account-level "about me / how to respond"),
   written for a non-technical user, with clear **"where to paste this"**
   guidance per tool. Everything else builds on this.
2. **Set up your projects & skills** _(foundation — use case #2)_ — an
   orientation that teaches the structure the rest of v1 relies on: how to create
   a project, what a skill is, and **what sits where** (see the model in §3.1).
   Without this, beginners don't have the mental model to use the packs.
3. **Project Packs** _(use cases #3–10)_ — the core of v1. Each use case isn't a
   throwaway prompt; it's a **durable capability** the user sets up once and
   keeps. A Project Pack contains:
   1. **Create the project** — tool-specific steps (e.g. "New Project → name it
      'Meeting Prep'").
   2. **Project instructions** — generated + personalized (role, tone, rules,
      do's/don'ts) to paste into the project.
   3. **Add knowledge** _(optional)_ — what to upload/paste (examples you like,
      templates, a style guide).
   4. **Skills (3–5 reusable actions)** — named, reusable prompts that live in
      the project.
   5. **Use it** — how to invoke each skill.

> **Graceful fallback (decided).** Projects often require a paid tier (esp.
> Claude). If the user can't make a Project, the same pack **degrades cleanly**
> to: global custom instructions + a **saved prompt library** (the same skills as
> a copy-paste list). Nobody is excluded; verify current tier availability at
> build time, as it changes fast.

> Packs are personalized by the LLM from a **vetted role → use-case library**
> (curated by you + AI) — the same "vetted library + AI tailoring" model as the
> platform, so v1 content seeds v2 (and the Setup Review feature).

### 3.1 The first 10 use cases (v1 catalog)

#1–2 are foundations; #3–10 are Project Packs.

| # | Use case | How it helps (personalized to their role) |
| - | -------- | ----------------------------------------- |
| 1 | **Set up your AI profile** _(foundation)_ | AI knows your role, context & style every time — multiplies everything below |
| 2 | **Set up your projects & skills** _(foundation)_ | Teaches how to create a project, what a skill is, and **what sits where** — the mental model the packs rely on |
| 3 | **Summarize long things** | Reports, threads, docs → key points; saves hours |
| 4 | **Brainstorm & unblock** | Ideas, options, angles when you're stuck |
| 5 | **Notes → action items** | Meeting/call notes → clear next steps & follow-ups |
| 6 | **Polish your own writing** | Tighten, clarify, adjust tone of *your* draft (keeps your voice) |
| 7 | **Get up to speed on a topic** | Explain it simply (+ a built-in "verify before you rely on this") |
| 8 | **Plan & structure work** | Break a goal into a plan; outline a doc |
| 9 | **Prep for meetings & tough conversations** | Agendas, talking points, role-play practice |
| 10 | **Draft documents from scratch** | Proposals, briefs, JDs → a first draft to edit |

_Bench (swap candidates): **email / drafting replies** (demoted — app-tied to
Gmail/Outlook, less customisable as a standalone project) · decision support /
compare options · social & marketing content · career help (CV, cover letter) ·
simplify jargon · ask questions of a spreadsheet · reusable templates &
checklists._

> **Note on "app-tied" use cases.** Tasks that live in another app the user has
> already set up (email in Gmail/Outlook, calendar, docs) make awkward standalone
> projects — the AI doesn't integrate with that app, so it can feel disconnected
> and un-customised. v1 favours **AI-native** use cases where the AI tool is the
> natural home. (Deeper app integrations are a possible future, not v1.)

### 3.2 What sits where (taught in use case #2)

| Layer | What goes here | When it's on |
| ----- | -------------- | ------------ |
| **Global custom instructions** | "About me" — role, general style, preferences | Always |
| **Project** | A context you work in repeatedly + its knowledge | When you're in it |
| **Skill** | A specific repeatable action (a saved prompt) | When you invoke it |

> Rule of thumb: *about me* → global · *about an area* → project · *a repeatable
> task* → skill.

### 3.3 Worked example — the "Meeting Prep" Project Pack

A clean, **AI-native** example (no external-app lock-in):

- **You end up with:** a *"Meeting Prep"* project that helps you walk into any
  meeting prepared.
- **Project instructions (generated):** *"You help [name], a [role] at [company],
  prepare for meetings. Be concise and practical. Ask for the meeting's goal and
  who's attending if not given. Never invent facts about people or commitments."*
- **Add knowledge (optional):** a recurring agenda template; team/role context.
- **Skills (3–5):**
  - *Build an agenda* → "Meeting about [topic], [time] long, attendees [X]. Draft a focused agenda."
  - *Talking points* → "Help me make my case for [position] in this meeting."
  - *Anticipate questions* → "What hard questions might [audience] ask, and how should I answer?"
  - *Role-play* → "Play [the other person] so I can practise this conversation."
  - *Recap → actions* → "Here are my notes: [paste]. Pull out decisions & action items."
- **Fallback (no Projects):** the same instructions become global custom
  instructions, and the 5 skills become a saved prompt list to copy from.

## 4. Core flow

1. **Pick intake mode** — *talk to an AI avatar* **or** *type*. User's choice.
   **Both modes** include a field to **paste your current setup** (existing
   custom instructions or a prompt you already use).
2. **Intake questions** (practical, beginner-friendly):
   - What's your job / role, and what do you do day-to-day?
   - Which AI do you use today? (Claude / ChatGPT / other / none)
   - What do you want to get better at, or get done, with AI?
   - _(Optional)_ Paste your current custom instructions / a prompt you use.
3. **Quality gate + adaptive follow-up** (see §5) — evaluates what they gave and
   either enhances strong input or builds up thin input with more questions.
4. **Pick a use case** from the catalog (§3.1) — or start with #1 (profile).
5. **Generate** the profile and/or the chosen Project Pack(s) (§3) — detecting or
   asking their tier so we serve the Project version or the fallback.
6. **Use & save** — step-by-step setup guidance, copy buttons, "Open in
   Claude/ChatGPT" deep links. **Sign up to EchoVerse to save / email your
   packs** (the gate + funnel).

## 5. The "don't make it worse" principle _(core requirement)_

If a user provides something good, the tool must **not degrade it**.

- **Score** pasted input against a rubric (specificity, role context, stated
  preferences, constraints, tone).
- **Above threshold** → preserve the strong parts (verbatim where possible),
  *layer* additions, and ask a **further, sharper round of questions** to
  enhance — never genericize or overwrite good content.
- **Below threshold** → guided beginner questions to build it up from scratch.
- **Always transparent** → show *"what you gave us"* vs *"what we added/changed"*
  so the user trusts it and stays in control.

## 6. Scope

**In v1:** intake (avatar + text), paste-current-config, quality gate + adaptive
follow-up, generate the **profile + Project Packs** (with graceful fallback to
custom-instructions + prompt library), per-tool setup guidance / deep-links,
EchoVerse sign-up to save results, the vetted role→use-case library + the seed
catalog of **10 use cases** (§3.1).

**Out of v1** (these are the full platform): courses/modules, the coached
learn→do→check loop, the companion browser extension, progress tracking,
payments, the stages ladder, hero-video lessons.

## 7. Tech (light)

- **Frontend/hosting:** Next.js on Vercel.
- **Auth + storage:** Supabase (EchoVerse sign-up; store saved results + email).
- **AI:** Anthropic Claude API — a few calls per session (evaluate pasted input,
  generate the profile, personalize Project Packs/skills to the user's role).
  Low per-session cost.
- **Per-tool setup content:** Project/skills setup steps authored for **ChatGPT
  and Claude** (plus the no-Projects fallback). Kept current as tools change.
- **Avatar:** Synthesia/HeyGen pre-rendered question videos for the avatar intake
  mode (text mode needs none). _Reuses the same tooling as the platform's hero
  videos._
- **Payments:** none in v1 (free + sign-up).

## 8. Data, privacy & legal

Reuse the platform's principles (see `PLANNING.md` §8): privacy-first, **never
train on user data**, 18+, global/GDPR-grade, self-service export/delete. Lighter
surface — main personal data is sign-up details + saved results + pasted configs
(treat pasted configs as deletable session/interaction data).

## 9. Success metrics

- **Sign-ups** (the primary goal / monetization in v1).
- **Completion rate** (intake started → result generated).
- **Result quality / satisfaction** (thumbs / quick rating).
- _(Later)_ conversion from v1 users → the paid platform.

## 10. Open questions

1. **Avatar at launch vs fast-follow** — both intake modes are wanted, but
   pre-rendered avatar video adds production time. Text mode can ship first if
   avatar gates the launch date — confirm timing preference.
2. **Role → use-case library** — the 10 use cases are set (§3.1); still to scope:
   how many *roles* to seed at launch, and who curates/accuracy-checks the
   per-tool setup steps + skills.
3. **Name** — working title _AI Kickstart_; decide the real name.
4. **Save-gate placement** — require sign-up *before* generating, or show the
   result then gate save/email? (Affects conversion vs drop-off.)
5. **Tier detection** — ask the user their plan, or detect it? Needed to choose
   Project Pack vs fallback. Re-verify Projects availability per tool at build
   time (changes often).

## 11. Decisions log

| Date       | Decision                                                       |
| ---------- | -------------------------------------------------------------- |
| 2026-06-17 | **This lite tool is v1** of EchoVerse Academy; full platform = the vision it grows into |
| 2026-06-17 | First **10 use cases set** (§3.1): **two foundations** (#1 profile, #2 set up projects & skills) + 8 domain Project Packs |
| 2026-06-17 | **Email demoted to the bench** — app-tied to Gmail/Outlook, awkward/un-customisable as a standalone project; v1 favours AI-native use cases |
| 2026-06-17 | Added **#2 "Set up your projects & skills"** foundation, incl. the "what sits where" model (global vs project vs skill) |
| 2026-06-17 | Each use case = a **Project Pack** (create project → instructions → knowledge → **3–5 skills** → use), **not** a throwaway prompt; **graceful fallback** to custom-instructions + prompt library when Projects need a paid tier |
| 2026-06-17 | Output = **personalized profile/custom instructions** (non-technical focus) **+ role-based use-case ideas** ("build a skill") |
| 2026-06-17 | Intake = **avatar OR text (user choice)**; both allow pasting current config |
| 2026-06-17 | Monetization = **EchoVerse sign-up only** (free, signup-gated) |
| 2026-06-17 | Must **not degrade good user input** — preserve + enhance + ask more, never genericize |
