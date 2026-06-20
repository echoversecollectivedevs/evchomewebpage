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

1. **Personalized profile / custom instructions** _(the anchor)_ — a ready-to-
   paste "about me / how to respond" block for ChatGPT/Claude settings, written
   for a non-technical user, plus clear **"where to paste this"** guidance.
2. **Use-case ideas / "build a skill"** — based on what professionals in their
   role use AI for: a short, personalized list of high-value use-cases. For each:
   a one-line **"how this helps you"** + a **ready-to-use starter prompt**. This
   is the discovery / inspiration layer that turns "I have AI" into "I know what
   to do with it."

> Both outputs are personalized by the LLM from a **vetted role → use-case
> library** (curated by you + AI) — the same "vetted library + AI tailoring"
> model as the platform, so v1 content seeds v2.

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
4. **Generate** the two outputs (§3).
5. **Use & save** — copy buttons, paste-into-Settings guidance, "Open in
   Claude/ChatGPT" deep links. **Sign up to EchoVerse to save / email your
   results** (the gate + funnel).

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
follow-up, generate profile + use-case ideas, copy/paste-guidance/deep-links,
EchoVerse sign-up to save results, the vetted role→use-case library (seed set).

**Out of v1** (these are the full platform): courses/modules, the coached
learn→do→check loop, the companion browser extension, progress tracking,
payments, the stages ladder, hero-video lessons.

## 7. Tech (light)

- **Frontend/hosting:** Next.js on Vercel.
- **Auth + storage:** Supabase (EchoVerse sign-up; store saved results + email).
- **AI:** Anthropic Claude API — a few calls per session (evaluate pasted input,
  generate profile, personalize use-cases). Low per-session cost.
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
2. **Role → use-case library** — initial scope: how many roles/use-cases to seed
   at launch, and who curates/accuracy-checks them.
3. **Name** — working title _AI Kickstart_; decide the real name.
4. **Save-gate placement** — require sign-up *before* generating, or show the
   result then gate save/email? (Affects conversion vs drop-off.)

## 11. Decisions log

| Date       | Decision                                                       |
| ---------- | -------------------------------------------------------------- |
| 2026-06-17 | **This lite tool is v1** of EchoVerse Academy; full platform = the vision it grows into |
| 2026-06-17 | Output = **personalized profile/custom instructions** (non-technical focus) **+ role-based use-case ideas** ("build a skill") |
| 2026-06-17 | Intake = **avatar OR text (user choice)**; both allow pasting current config |
| 2026-06-17 | Monetization = **EchoVerse sign-up only** (free, signup-gated) |
| 2026-06-17 | Must **not degrade good user input** — preserve + enhance + ask more, never genericize |
