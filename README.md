# Notte della Taranta — Event App & Prototype

**LCI Melbourne · LABG204 Design Laboratory Global · Assessment Task 3 · Semester 20262**
Weighting **40%** · ULO3 · Due **Monday 24 August 2026** *(Week 12)* · target submission **Wednesday 19 August**

---

## What this repository is

This is the working repository for a **university design assignment**. It holds the brand assets, the planning documentation, and a **working prototype of the app, built in code**.

**The prototype is a real mobile web app, not a Figma clickthrough.** The brief permits this:

> "The recommended software for this task is Figma, though other appropriate software is acceptable." *(brief, p.2)*
>
> "…submit a prototype and/or video of the working app. A link may be provided if the prototype is online." *(brief, p.3)*

Building it in code means the scrolling, swiping, animation and overlays the brief asks for are real rather than simulated, the accessibility settings actually change the running app, and the ULO's "experimental applications" is answered by something that runs. The Figma wireframe still stands as the Task 1 deliverable.

**Live prototype:** `https://ezioarne-sketch.github.io/NDT-Project/`
*(Pages must be enabled once by the repository owner — see [Deploying](#deploying).)*

Run it locally with any static server:

```bash
python -m http.server 8765     # then open http://127.0.0.1:8765/app/
```

---

## The event

*Notte della Taranta* is a **fictional** music festival staged at **Flemington Racecourse, Melbourne**. It reimagines the pizzica and tarantella traditions of Salento, in Puglia, for an Australian audience — a night-long ritual of music, dance and catharsis transplanted to the southern hemisphere.

The festival itself is invented. The cultural history behind it is not: tarantism, the *tarantate*, and the ethnographic work that documented them are real subjects and **must be Harvard-referenced** wherever the app's content screens draw on them. See [Docs/06-References.md](Docs/06-References.md).

The app's narrative spine runs through three content screens tracing that history. **The prose on all three is Lorenzo's**, delivered 15 August 2026 — the source of truth is [Assets/Story/Story-Text-Lorenzo.docx](Assets/Story/Story-Text-Lorenzo.docx), and the claim-by-claim audit of it is [Docs/08-Story-Claims-Audit.md](Docs/08-Story-Claims-Audit.md):

1. **The Dionysian Cult** — ecstatic rite in the ancient Mediterranean
2. **Maenads and Tarantate** — the maenads and their Apulian descendants
3. **De Martino and the Modern Age** — Ernesto de Martino's mid-century ethnography and the tradition's revival

---

## The five assessed tasks

| # | Task | Requirement | Status |
|---|---|---|---|
| 1 | **Wireframe diagram** | ≥10 screens, every member contributing | ✅ **Done** — 15 frames with prototype links, exported to [Assets/Wireframes/](Assets/Wireframes/) |
| 2 | **Final app design** | ≥10 screens with full design assets; overlays, animation, carousels | ✅ **Done** — 21 screens + 3 overlays, built and exported to [Assets/Screens/](Assets/Screens/) |
| 3 | **Planning documentation** | Inclusions list, event concept plan, support material (PDF) | 🟡 Scaffold ready — [01-Concept-Plan.md](Docs/01-Concept-Plan.md) needs writing |
| 4 | **Working prototype** | Live links and actions — scroll, tap, swipe; prototype and/or video | ✅ **Done** — app runs; [74s walkthrough video](Assets/Walkthrough/); no dead ends, verified by test |
| 5 | **Written rationale** | Min 500 words: member roles, features, accessibility, languages, ages, social/cultural demands, special needs | 🟡 Scaffold + measured evidence ready — [04-Rationale.md](Docs/04-Rationale.md) needs writing |

**Also mandatory**

- Visual identity consistent with the **Assessment Task 2** promotional campaign
- **Harvard referencing** on all written content, including image sources
- **AI Assessment Scale 5** — every AI tool, prompt, experiment and finding documented, with the team's own interpretation evident. Logged in [Docs/05-AI-Use-Log.md](Docs/05-AI-Use-Log.md)
- **LCIM Assignment Cover Sheet** attached
- Submitted as **PDF via Omnivox** (fallback: cover sheet to Lea + PDF via WeTransfer)

**Rubric dimensions:** Problem Solving Skills · Independence and Collaboration

---

## Brand

Produced in Assessment Task 2. The final app design must stay consistent with it.

**Wordmark** — "Notte Della Taranta" set in a pixel/monospace face.
**Mark** — a stylised spider with a heart-shaped body and crescent horns.
**Texture** — a "matrix-rain" character field over organic magenta and green forms, with a distinct alchemical sigil per section.

### Palette

| Role | Hex | Use |
|---|---|---|
| Ground | `#040606` | Page background |
| Deep magenta | `#461E3C` | Background form |
| Magenta light | `#4D2646` | Background form |
| Festival green | `#1B7A4A` | Accent, merch |
| Mint | `#7FD9A8` | Accent text, active states |
| White | `#FFFFFF` | Primary text |

### Contrast — measured, not assumed

Checked against WCAG 2.1. These figures are quotable in the Task 5 rationale.

| Foreground on background | Ratio | Result |
|---|---|---|
| White on `#040606` | **20.31:1** | Passes AA and AAA |
| White on `#461E3C` | **13.89:1** | Passes AA and AAA |
| White on `#4D2646` | **12.49:1** | Passes AA and AAA |
| Mint on `#461E3C` | **8.20:1** | Passes AA and AAA |
| Magenta `#8B3A8B` on `#040606` | **2.98:1** | ❌ Fails AA |

> **Rule for the design phase:** text and meaningful icons stay **white or mint**. Magenta is decorative fill, border and texture only — never type, never a control.

---

## Assets

| Path | Contents |
|---|---|
| [Assets/Logo/Logo.png](Assets/Logo/) | White wordmark on transparent, 596×842 |
| [Assets/Icons/](Assets/Icons/) | Pixel-art nav icons, 2134×2134, plus `Icon.ai` source |
| [Assets/Pages Bsckground/](Assets/Pages%20Bsckground/) | Section backgrounds, 360×800 |
| [Assets/Merch/](Assets/Merch/) | Five product renders, 6500×4000. Re-rendered 15 Aug 2026 |
| [Assets/Wireframes/](Assets/Wireframes/) | Figma canvas export — `wireframe-flow.png` is the trimmed Task 1 artefact |
| [Assets/Story/](Assets/Story/) | Chapter prose and eight candidate images. **Only three are built into the app** — see [Docs/06-References.md](Docs/06-References.md) §5a for why |
| [Assets/Assessment_Task_3_LABG204_20262.pdf](Assets/) | The assignment brief, 12pp |
| [Assets/Prototype Like.txt](Assets/) | Figma URLs |

**Icons** — `Icon-01` Home · `Icon-02` Music · `Icon-03` Events · `Icon-04` Shop · `Icon-05` Back
**Backgrounds** — Home · Music · Event · Back
**Merch** — Pumo (Apulian ceramic) · Veil · Tote bag · Tambourine · Water bottle

The icon set maps one-to-one onto the wireframe's bottom navigation: **Home · Event · Music · Shop**, with Back as a global control.

---

## The app

**21 screens and 3 overlays**, built as a static web app — no framework, no build step, no third-party runtime dependency.

| Area | Screens |
|---|---|
| Entry | Splash, Language |
| Home | Home, About, 3 × Story chapter |
| Event | Event hub, Map (Flemington), Schedule, Transport & Access |
| Music | Player, Now Playing, Library, Artist profile |
| Commerce | Shop, Product, Digital ticket, Login |
| Settings | Accessibility & display, Virtual visitor |
| Overlays | Map pin, Workshop detail, Cart sheet |

**What actually works** — scrolling, swipe carousels with keyboard support, overlays that render over the live screen with focus trapping and Escape to close, a music transport with a seekable native-range scrubber, a shopping bag, timezone conversion for virtual visitors, and accessibility settings that change the running app and persist.

**Interesting bits**

- **Flemington map** — original SVG artwork: the course, the Straight Six running to the winning post, grandstands on the home straight, the Maribyrnong, Epsom Road, Smithfield Road, the station and the Nursery car park. Twelve filterable pins where type is carried by **shape as well as colour**, plus a dashed step-free route from the station to the main stage. Drawn rather than embedded so there is no attribution problem, no visual identity clash, and no dependency on signal at a festival site.
- **Digital ticket** — a genuinely scannable QR encoding `NDT-2026-004718`. The QR panel is the only light surface in the app, because a dark QR does not scan.
- **No third-party content** — the wireframe's UI-kit boards carried lorem ipsum and real artists. All replaced with the festival's own invented lineup. All prices in AUD.

### Tooling

Everything below is reproducible; the deliverables are build outputs, not manual exports.

| Script | Does |
|---|---|
| `python tools/build-assets.py` | 20MB of print-res source art → 0.45MB of WebP, plus the ticket QR |
| `python tools/capture.py --sheet` | Drives Chrome through all 21 routes → [Assets/Screens/](Assets/Screens/) at 412×917 @2x — **the Task 2 deliverable** |
| `python tools/contrast.py` | Regenerates [Docs/07-Contrast-Report.md](Docs/07-Contrast-Report.md) from the live palette |
| `node tools/clickthrough.mjs` | **The Task 4 evidence.** Renders every screen, resolves every link, walks the graph for orphans, opens and Escapes every overlay, measures every target against 44px |
| `node tools/walkthrough.mjs` + `python tools/encode-video.py` | Records the 74s walkthrough video |

Scripts need a local server running: `python -m http.server 8765`.

---

## Deploying

The app is served from the repository root by GitHub Pages. **This must be enabled once by the repository owner** (it needs admin rights):

> **Settings** → **Pages** → Source: **Deploy from a branch** → Branch: **main**, folder: **/ (root)** → Save

The site then appears at `https://ezioarne-sketch.github.io/NDT-Project/`. A `.nojekyll` file is present so Pages serves files verbatim, and every path in the app is relative, so it works from that subdirectory unchanged.

---

## Figma wireframe

Retained as the Task 1 deliverable. File `f3PA95klt9cu4tpNdiOkGK` — "Notte Della Taranta"

- **Prototype:** https://www.figma.com/proto/f3PA95klt9cu4tpNdiOkGK/Untitled?node-id=0-1
- **Dev mode:** https://www.figma.com/design/f3PA95klt9cu4tpNdiOkGK/Untitled?node-id=0-1&m=dev

**15 wireframe screens** (412×917) plus two overlays, all interconnected. Inventory in [Docs/02-Screen-Spec.md](Docs/02-Screen-Spec.md); interaction map in [Docs/03-Prototype-Wiring.md](Docs/03-Prototype-Wiring.md).

---

## Repository structure

```
.
├── README.md                     ← you are here
├── ROADMAP.md                    ← phased plan + contribution log
├── index.html                    ← redirect to app/
├── app/                          ← THE PROTOTYPE
│   ├── index.html
│   ├── css/    tokens · base · components · screens
│   ├── js/     app (router) · data (all content) · ui · screens-* · overlays
│   └── assets/ fonts · icons · img
├── tools/                        ← build, capture, test
│   ├── build-assets.py  capture.py  contrast.py
│   └── clickthrough.mjs  walkthrough.mjs  encode-video.py
├── Docs/
│   ├── 01-Concept-Plan.md        ← Task 3
│   ├── 02-Screen-Spec.md         ← Tasks 1 & 2
│   ├── 03-Prototype-Wiring.md    ← Task 4
│   ├── 04-Rationale.md           ← Task 5
│   ├── 05-AI-Use-Log.md          ← AI Scale 5 compliance
│   ├── 06-References.md          ← Harvard reference list
│   ├── 07-Contrast-Report.md     ← generated; measured WCAG ratios
│   └── 08-Story-Claims-Audit.md  ← every story claim, and what must source it
└── Assets/
    ├── Screens/                  ← generated; the Task 2 deliverable
    ├── Walkthrough/              ← generated; the Task 4 video
    ├── Wireframes/               ← the Task 1 deliverable (Figma export)
    ├── Story/                    ← chapter prose (.docx) + candidate artwork
    ├── Icons/  Logo/  Merch/  Pages Bsckground/
    └── Assessment_Task_3_LABG204_20262.pdf
```

---

## Team

| Member | Role | Screens owned | Written sections |
|---|---|---|---|
| Lorenzo Arnesano | Sole author — concept, design direction, writing | All 21 | All |

**This is a single-author submission.** The brief is written for teams — it asks for "each design team member's roles and contributions" and for "each team member contributing to the development of the design and prototype". Task 5 should say plainly that the work was carried alone rather than leave a marker to infer it from a table with one row.

Record work as it happens in the **Contribution Log** at the bottom of [ROADMAP.md](ROADMAP.md). It is still worth keeping solo: it is the evidence for the *Independence and Collaboration* rubric criterion, which for a single author is assessed on self-direction and time management.

---

## What's left

Ordered by how much it could cost.

### 1. The written documents — this is now the critical path
Tasks 3 and 5 are scaffolds with prompts, not prose. [01-Concept-Plan.md](Docs/01-Concept-Plan.md) and [04-Rationale.md](Docs/04-Rationale.md) both need writing, and the rationale has a 900-word budget against the brief's 500-word minimum. The evidence they need already exists — measured contrast figures, a screen inventory, a test report — but the argument has to be written.

### 2. The story chapters are written, and four claims in them need fixing
The three chapters in [data.js](app/js/data.js) now carry Lorenzo's prose. What remains is targeted, not wholesale: three sentences overstate the Dionysian continuity claim ("clear traces", "this exact archetype", "reborn"), and one describes the tarantism exorcism as a "pagan rite" when it was addressed to St Paul — which contradicts the source chapter 3 is built on. Each chapter also cites exactly **one** source, because that is all there is evidence of. See [08-Story-Claims-Audit.md](Docs/08-Story-Claims-Audit.md). Citing a work you have not read is an integrity problem, not a shortcut — which is why the unread books sit in `citePlanned` and render nowhere.

### 3. Harvard references are still leads, not citations
[06-References.md](Docs/06-References.md) lists starting points. Each one needs to be found, read, and its publication details verified against the copy in hand. The AI tools, open-source typefaces and libraries listed in [05-AI-Use-Log.md](Docs/05-AI-Use-Log.md) all need entries too.

### 4. Image attribution
Three third-party images entered the app on 15 August — the first the project has had. Two are public domain but **arrived with no provenance** and need tracing to a source; the third is Franco Pinna's in-copyright photograph of the 1959 fieldwork, credited on screen and reproduced for study. See [06-References.md](Docs/06-References.md) §5a. The brief asks for Harvard referencing on image sources by name.

### 5. Content is a first draft
The lineup, set times, prices and ticket types are plausible placeholders, isolated in [data.js](app/js/data.js) so revising them is editing a list rather than rebuilding screens. The held ticket carries a real name on a public repository — change it if that is unwanted.

### 6. Housekeeping
- `Assets/Pages Bsckground/` is misspelled (should be *Backgrounds*). Left as-is — Figma and other submissions may reference the path.
- The Figma file is named "Notte Della Taranta" but its URLs still read `Untitled`.
- The Figma wireframe frames are still on defaults (`Android Compact - 1` …), and **the wireframe is now being submitted as a Task 1 artefact**, so the frame names are visible in it. Renaming them to the scheme in [02-Screen-Spec.md](Docs/02-Screen-Spec.md) and re-exporting is about ten minutes.
- The wireframe still shows chapter 3 as "Di Martino" and chapter 2 as "Menades" — both corrected in the app since. A marker comparing wireframe to app will see the difference; that is fine, and saying it was a deliberate correction is better than hoping nobody notices.

---

## Resolved

Kept as a record — several of these were live risks.

- **Task 2 had not begun.** All 21 screens now built, exported and consistent with the campaign identity.
- **Six screens were missing**, each tied to a marked requirement — splash, artist profiles, digital ticket, language select, accessibility settings, virtual visitor. All built.
- **Third-party template content.** The wireframe's UI-kit boards carried lorem ipsum, placeholder products and real copyrighted artists. None of it survives; the app uses an invented lineup and the campaign's own merch renders. Prices are AUD.
- **Navigation inconsistency.** The About screen showed five nav items where every other screen showed four. The nav is now one component rendered from one place, so it cannot drift.
- **The map was generic pins on a blank field.** Now a drawn Flemington with stages, facilities, accessible entrances, step-free routes and a quiet zone.
- **Pixel typeface legibility.** Resolved as recommended: pixel type for display and short labels only, Atkinson Hyperlegible for body copy.
- **Backgrounds were 360×800 against 412×917 frames.** Moot in code — `background-size: cover` handles the fit.
- **Exposed API token.** A Figma personal access token was committed to this public repository and has been **revoked** at Figma's end, which is the only fix that works: deleting a file does not remove it from git history. A `.gitignore` now blocks token, key and `.env` files.

---

## Getting started

1. Read this file and [ROADMAP.md](ROADMAP.md).
2. Run the prototype: `python -m http.server 8765`, then open `http://127.0.0.1:8765/app/`.
3. Enable GitHub Pages — see [Deploying](#deploying) — and check the live link opens in a private window.
4. Write [01-Concept-Plan.md](Docs/01-Concept-Plan.md) and [04-Rationale.md](Docs/04-Rationale.md).
5. Log every AI interaction in [Docs/05-AI-Use-Log.md](Docs/05-AI-Use-Log.md) as you go, and complete the `<add>` and Reflection sections — those are the parts that carry the marks, and they cannot be written for you.
