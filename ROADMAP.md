# Roadmap — Assessment Task 3

> **Status, 13 August 2026.** The plan below was written when Task 2 had not started and was three quarters of the remaining work. **Tasks 1, 2 and 4 are now done** — the app is built, tested and exported. What remains is writing.
>
> **Due Monday 24 August 2026. Target submission Wednesday 19 August** — five clear days of buffer, which is the right way round.

**W-0 is Monday 24 August 2026.** The original six-week plan below is kept as a record; phases W-6 to W-2 are complete. What governs now is the day-by-day schedule immediately following.

---

## Effort at a glance

| Task | Remaining work | Status |
|---|---|---|
| 1 — Wireframe | — | ✅ Done (15 screens, Figma) |
| 2 — Final design | — | ✅ Done (21 screens + 3 overlays, built in code) |
| 3 — Planning docs | **Two documents to write** | 🟡 Scaffold ready |
| 4 — Prototype | — | ✅ Done (app runs; 78s video; test passes clean) |
| 5 — Rationale | **900 words to write** | 🟡 Scaffold + measured evidence ready |

**The critical path is now writing, not designing.** Roughly 2,000 words across the concept plan and rationale, plus verifying the Harvard sources and completing the AI log's reflection sections.

### Schedule to 19 August

Six days from today. Roughly 2,000 words plus the story rewrite — comfortable if the reading starts today, tight if it starts Saturday.

| Day | Do this | Notes |
|---|---|---|
| **Thu 13 Aug** *(today)* | ~~Enable GitHub Pages~~ ✅ **done — live and verified**. Get the sources for the story chapters and read them. | The site is up at https://ezioarne-sketch.github.io/NDT-Project/ — 41 assets checked, click-through passes against the live URL. The reading is now the only thing gating the rest of the week. |
| **Fri 14 Aug** | Rewrite the three story chapters against what was actually read. Resolve the four unsourced app claims. | The biggest integrity exposure in the project. Do it while fresh, not last. |
| **Sat 15 Aug** | Verify every Harvard reference. Write the concept plan (Task 3). | References feed both documents; the concept plan's material feeds the rationale. |
| **Sun 16 Aug** | Write the rationale (Task 5), ~950 words. | Needs everything above settled. |
| **Mon 17 Aug** | Complete the AI log's `<add>` cells and Reflection. | The parts that carry the marks and cannot be delegated. |
| **Tue 18 Aug** | Cover sheet, PDF export, final read-through. Re-run the click-through against the **live** URL: `NDT_BASE=https://ezioarne-sketch.github.io/NDT-Project/app/index.html node tools/clickthrough.mjs`, and open the link in a private window. | Leave a full day for this. Export always takes longer than it should. **Test the deployed copy, not the local one** — on 13 Aug they differed by a file that had never been committed. |
| **Wed 19 Aug** | **Submit to Omnivox.** | |
| Thu 20 – Mon 24 Aug | Buffer. | Five days. Use them for the read-through by someone who did not write it, not for writing. |

**Two things must start today**, because both have someone else in the loop: Pages needs Lorenzo's repo admin, and the story chapters need sources in hand before a word can be written.

---

## Original plan

Retained below for the record. Phases W-6 to W-3 are complete.

---

## W-6 · Lock the structure

Nothing gets designed until the screen list is final. Redesigning a screen because the list changed is the most expensive mistake available.

| Step | Owner | Done when |
|---|---|---|
| Rename all 17 Figma frames to the scheme in [Docs/02-Screen-Spec.md](Docs/02-Screen-Spec.md) | `<Name>` | No frame is called `Android Compact - n` |
| Rename the Figma file from `Untitled` | `<Name>` | URLs read `Notte-della-Taranta` |
| Agree the six additional screens | All | Screen list signed off at 21 |
| Resolve the "Social" nav item — design it or drop it | All | Nav is identical on every screen |
| Decide the typeface split (pixel display / sans body) | All | Decision recorded in [Docs/04-Rationale.md](Docs/04-Rationale.md) |
| Split all 21 screens across the team | All | Every screen has one name against it |
| Export the wireframe frames as PNG → `Assets/Wireframes/` | `<Name>` | **Task 1 deliverable exists as a file** |

> **Task 1 is already satisfied on substance** — 15 screens, above the ten-screen minimum, fully interconnected. What it lacks is an exported artefact and a record of who contributed. Both are cheap now and awkward later.

**Satisfies:** Task 1

---

## W-5 → W-3 · Task 2, the final design

The long pull. Apply the Task 2 campaign identity to 15 existing screens and build 6 new ones.

### Before any screen work

| Step | Owner | Done when |
|---|---|---|
| Rescale backgrounds 360×800 → 412×917 (or regenerate at 412 width) | `<Name>` | Backgrounds fill the frame without stretching |
| Build a Figma component library — nav bar, buttons, cards, type styles | `<Name>` | Nav is one component instance, not 21 copies |
| Set type styles enforcing the display/body split | `<Name>` | Body text is never pixel type |
| Set colour styles from the README palette | `<Name>` | Magenta is not available as a text colour |

Building the nav as a component first saves reapplying it 21 times, and guarantees the consistency the brief marks.

### Screen work

| Batch | Screens | Owner |
|---|---|---|
| Existing — Home & story | Home, About, 3 × Story | `<Name>` |
| Existing — Event | Event Hub, **Map (Flemington)**, Schedule, Transport | `<Name>` |
| Existing — Music | Player, Now Playing, Library | `<Name>` |
| Existing — Commerce | Shop, Product, Login | `<Name>` |
| Existing — Overlays | Workshop Details, Pin Info | `<Name>` |
| **New** | Splash, Artist Profile, Digital Ticket | `<Name>` |
| **New** | Language Select, Accessibility Settings, Virtual Visitor | `<Name>` |

The Flemington map is the single largest screen job — treat it as its own task, not one of four.

### Also in this phase

| Step | Owner | Done when |
|---|---|---|
| Replace all template placeholder content | `<Name>` | No lorem ipsum, no Imagine Dragons, no "Amazing T-shirt" |
| Convert all prices to **AUD** | `<Name>` | No `€` anywhere |
| Populate Shop from the five real merch renders | `<Name>` | Pumo, Veil, Tote, Tambourine, Bottle all present |
| Add at least one carousel or slideshow | `<Name>` | Brief explicitly invites interactive elements |
| Contrast-check every screen | `<Name>` | No text below 4.5:1 |

**Done when:** 21 screens carry the full identity, no placeholder content survives, and contrast passes everywhere.
**Satisfies:** Task 2

---

## W-4 · Task 3, planning documentation *(runs parallel to design)*

Deliberately parallel — this is writing, not design, so it can be owned by whoever is lightest on screens.

| Step | Owner | Done when |
|---|---|---|
| Event concept plan — what the festival is, where, who for | `<Name>` | [Docs/01-Concept-Plan.md](Docs/01-Concept-Plan.md) complete |
| List of possible inclusions | `<Name>` | Considered features listed, including rejected ones and why |
| Assemble support material — wireframe exports, moodboards, research | `<Name>` | Indexed in the concept plan |
| Export to PDF | `<Name>` | Single PDF, Harvard-referenced |

Include the features you **rejected**. The rubric rewards evaluating different solutions, and a list that only contains what you built reads as though no alternatives were considered.

**Satisfies:** Task 3

---

## W-2 · Task 4, wire the prototype

The wireframe's connection logic is already mapped in [Docs/03-Prototype-Wiring.md](Docs/03-Prototype-Wiring.md). This phase re-applies it to the final screens and adds the gestures.

| Step | Owner | Done when |
|---|---|---|
| Re-wire all connections onto the final screens | `<Name>` | Every row in the wiring doc is live |
| Wire the six new screens | `<Name>` | Splash → language → home flows end to end |
| Add scroll behaviour to long screens | `<Name>` | Story, Schedule, Library, Shop all scroll |
| Add swipe — carousel, image galleries | `<Name>` | At least one swipe interaction works |
| Wire both overlays as overlays, not screen swaps | `<Name>` | Workshop and Pin Info open over their parent |
| Add transitions — smart animate or dissolve | `<Name>` | Movement is consistent, not per-screen ad hoc |
| Full click-through test on a phone | All | No dead ends, no orphan screens |
| Record walkthrough video | `<Name>` | Every screen appears; narrated or captioned |

**Test on an actual phone.** A prototype that works on a laptop and falls apart at 412px wide is a bad surprise in Week 12.

**Done when:** the prototype runs start to finish with no dead ends, and the video is recorded.
**Satisfies:** Task 4

---

## W-2 → W-1 · Task 5, written rationale

Minimum 500 words. Structure and word budgets are in [Docs/04-Rationale.md](Docs/04-Rationale.md).

| Step | Owner | Done when |
|---|---|---|
| Each member writes their own contribution paragraph | All | Every name has a paragraph in their own words |
| Features section | `<Name>` | Each major feature explained with its purpose |
| UX and ease of use | `<Name>` | Navigation model justified |
| Accessibility | `<Name>` | **Quotes the measured contrast ratios** |
| Languages and international visitors | `<Name>` | Language select and virtual-visitor screens argued |
| Ages, social and cultural demands, special needs | `<Name>` | Each named theme addressed explicitly |
| Cultural sensitivity of the tarantism material | `<Name>` | Adaptation justified, sources cited |
| Harvard pass | `<Name>` | Every claim and image sourced |

The brief names six UX themes: **accessibility, languages, variety of ages, social and cultural demands, special needs**. Address each by name. A marker with a rubric is looking for them.

**Satisfies:** Task 5

---

## W-1 · Consolidate

| Step | Owner | Done when |
|---|---|---|
| Complete [Docs/05-AI-Use-Log.md](Docs/05-AI-Use-Log.md) | All | Every tool, prompt and finding logged with your interpretation |
| Complete [Docs/06-References.md](Docs/06-References.md) | `<Name>` | Harvard style, includes AI tools and image sources |
| Attach the LCIM Assignment Cover Sheet | `<Name>` | Mandatory — omitting it is an automatic problem |
| Export everything to PDF | `<Name>` | Concept plan, rationale, support material |
| Confirm the prototype link is publicly viewable | `<Name>` | Opened successfully in a private browser window |
| Final read-through | All | Someone who did not write it has read it |

**AI Scale 5 is not optional.** The brief requires all tools, prompts, experiments and findings to be documented, and outcomes to show your interpretation rather than raw output. An empty or thin log is a visible gap on a scale that expects experimentation.

---

## W-0 · Submit — Monday 24 August 2026

| Step | Owner | Done when |
|---|---|---|
| Upload PDF to Omnivox | `<Name>` | Confirmation received |
| Verify the prototype link works from the submission | `<Name>` | Opened from the submitted document |

**If Omnivox fails:** cover sheet to Lea, PDF via WeTransfer to `Donna.Kirkwood@lcimelbourne.edu.au`. Do this the same day — do not let a technical failure become a late submission.

---

## Risk register

| Risk | Impact | Mitigation |
|---|---|---|
| Task 2 slips | Everything downstream slips | Three weeks allocated; component library first; screens split early |
| Template content reaches submission | Academic integrity issue | Explicit W-5 step; final read-through checks for it |
| Contribution record reconstructed from memory | Weak Task 5, weak rubric score | Log below, updated weekly |
| Prototype link not public | Marker cannot open it | Tested in a private window at W-1 |
| Backgrounds don't fit 412×917 | Visible stretching on every screen | Rescaled before any screen work |
| AI log backfilled at the end | Obvious to a marker; fails AI Scale 5 | Logged as you go from W-6 |

---

## Contribution log

**Update this weekly.** It is the source for Task 5's per-member requirement and for the *Independence and Collaboration* rubric criterion. Written contemporaneously it takes two minutes a week; reconstructed in Week 12 it is guesswork, and it shows.

| Date | Member | Task | What was done | Evidence |
|---|---|---|---|---|
| `<YYYY-MM-DD>` | `<Name>` | `<T1–T5>` | `<description>` | `<Figma frame / doc / commit>` |
| | | | | |
| | | | | |
| | | | | |

### Ownership summary

Fill in as work is allocated. Copy into the rationale at W-1.

| Member | Role | Screens designed | Documents written | Other |
|---|---|---|---|---|
| `<Name 1>` | | | | |
| `<Name 2>` | | | | |
| `<Name 3>` | | | | |
| `<Name 4>` | | | | |
