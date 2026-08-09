# Notte della Taranta — Event App & Prototype

**LCI Melbourne · LABG204 Design Laboratory Global · Assessment Task 3 · Semester 20262**
Weighting **40%** · ULO3 · Due **Week 12 (`<Week 12 date>`)**

---

## What this repository is

This is the working repository for a **university design assignment**. It holds the brand assets, planning documentation and prototype references for a mobile app concept.

**No application is being built.** There is no source code here and none is planned. The assessed deliverables are a Figma prototype and a set of written documents. This repository exists to keep the team's assets, planning and evidence trail in one place.

---

## The event

*Notte della Taranta* is a **fictional** music festival staged at **Flemington Racecourse, Melbourne**. It reimagines the pizzica and tarantella traditions of Salento, in Puglia, for an Australian audience — a night-long ritual of music, dance and catharsis transplanted to the southern hemisphere.

The festival itself is invented. The cultural history behind it is not: tarantism, the *tarantate*, and the ethnographic work that documented them are real subjects and **must be Harvard-referenced** wherever the app's content screens draw on them. See [Docs/06-References.md](Docs/06-References.md).

The app's narrative spine runs through three content screens tracing that history:

1. **The Dionysian Cult** — ecstatic rite in the ancient Mediterranean
2. **Menades and Tarantate** — the maenads and their Apulian descendants
3. **Di Martino and the Modern Age** — Ernesto de Martino's mid-century ethnography and the tradition's revival

---

## The five assessed tasks

| # | Task | Requirement | Status |
|---|---|---|---|
| 1 | **Wireframe diagram** | ≥10 screens, every member contributing | ✅ **Done** — 15 screens, interconnected |
| 2 | **Final app design** | ≥10 screens with full design assets; overlays, animation, carousels | 🔴 **Not started — critical path** |
| 3 | **Planning documentation** | Inclusions list, event concept plan, support material (PDF) | ⬜ Not started |
| 4 | **Working prototype** | Live links and actions — scroll, tap, swipe; prototype and/or video | 🟡 Logic exists in wireframe; must carry to final design |
| 5 | **Written rationale** | Min 500 words: member roles, features, accessibility, languages, ages, social/cultural demands, special needs | ⬜ Not started |

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
| [Assets/Merch/](Assets/Merch/) | Five product renders, 6500×4000 |
| [Assets/Assessment_Task_3_LABG204_20262.pdf](Assets/) | The assignment brief, 12pp |
| [Assets/Prototype Like.txt](Assets/) | Figma URLs |

**Icons** — `Icon-01` Home · `Icon-02` Music · `Icon-03` Events · `Icon-04` Shop · `Icon-05` Back
**Backgrounds** — Home · Music · Event · Back
**Merch** — Pumo (Apulian ceramic) · Veil · Tote bag · Tambourine · Water bottle

The icon set maps one-to-one onto the wireframe's bottom navigation: **Home · Event · Music · Shop**, with Back as a global control.

---

## Prototype

Figma file `f3PA95klt9cu4tpNdiOkGK` — "Notte Della Taranta"

- **Prototype:** https://www.figma.com/proto/f3PA95klt9cu4tpNdiOkGK/Untitled?node-id=0-1
- **Dev mode:** https://www.figma.com/design/f3PA95klt9cu4tpNdiOkGK/Untitled?node-id=0-1&m=dev

Contains **15 mobile wireframe screens** (412×917) plus two overlays, all interconnected. Full inventory and proposed naming in [Docs/02-Screen-Spec.md](Docs/02-Screen-Spec.md); the interaction map is in [Docs/03-Prototype-Wiring.md](Docs/03-Prototype-Wiring.md).

---

## Repository structure

```
.
├── README.md                     ← you are here
├── ROADMAP.md                    ← phased plan + contribution log
├── Docs/
│   ├── 01-Concept-Plan.md        ← Task 3
│   ├── 02-Screen-Spec.md         ← Tasks 1 & 2
│   ├── 03-Prototype-Wiring.md    ← Task 4
│   ├── 04-Rationale.md           ← Task 5
│   ├── 05-AI-Use-Log.md          ← AI Scale 5 compliance
│   └── 06-References.md          ← Harvard reference list
└── Assets/
    ├── Icons/  Logo/  Merch/  Pages Bsckground/
    ├── Assessment_Task_3_LABG204_20262.pdf
    └── Prototype Like.txt
```

---

## Team

| Member | Role | Screens owned | Written sections |
|---|---|---|---|
| `<Name 1>` | `<role>` | `<screens>` | `<sections>` |
| `<Name 2>` | `<role>` | `<screens>` | `<sections>` |
| `<Name 3>` | `<role>` | `<screens>` | `<sections>` |
| `<Name 4>` | `<role>` | `<screens>` | `<sections>` |

Task 5 requires each member's contribution to be documented. Record work as it happens in the **Contribution Log** at the bottom of [ROADMAP.md](ROADMAP.md) — reconstructing it in Week 12 from memory is how marks get lost on the Independence and Collaboration criterion.

---

## Known issues

Ordered by how much they could cost.

### 1. Task 2 has not begun — this is the critical path
All 15 wireframe screens are structural placeholders (`Rectangle 2`, `Ellipse 3`, `Pic`, `Text`). None of the logo, backgrounds, icons or palette has been applied. With the six additions below, that is **21 screens** of design work. Everything else in the roadmap is short by comparison.

### 2. Six screens are missing, each tied to a marked requirement

| Missing screen | Required by |
|---|---|
| Splash | Task 2 — named in the brief's suggested list |
| Artist profiles | Task 2 — named in the brief's suggested list |
| Digital ticket / QR | Task 2 — named; "Tickets" appears as a label on the Shop screen with no screen behind it |
| Language selection | Task 5 — "languages" |
| Accessibility settings | Task 5 — "accessibility", "special needs" |
| Virtual visitor / live stream | Task 1 and the Expectations section both stress virtual visitors |

### 3. Third-party template content in the Figma file
Three large boards — "Login", "Music", "E-commerce" — are community UI-kit templates. They carry *lorem ipsum*, placeholder products ("Amazing T-shirt"), euro prices, and **real copyrighted artists** (Imagine Dragons, Odesza).

Two problems. Unattributed third-party assets are an academic-integrity risk under the Harvard requirement. And a pizzica festival app playing "Believer" is a cultural mismatch a marker will spot immediately. Either cite the kits in [Docs/06-References.md](Docs/06-References.md) and keep them off the submitted screens, or replace the content with the festival's own artists and merch.

**Prices must be AUD, not EUR** — the festival is in Melbourne.

### 4. Navigation inconsistency
The About screen shows five nav items including "Social". Every other screen shows four, and only four icons exist. Either design a Social icon and screen or drop the item — an inconsistent nav bar is a visible defect on screens marked for consistency.

### 5. The map must become Flemington
The map screen is currently generic pins on a blank field. It needs a recognisable **Flemington Racecourse** layout with stages placed, and — since Task 5 asks about special needs — accessible entrances, step-free routes, first aid and quiet zones marked. Transport & Access should carry real Melbourne detail: Flemington Racecourse station, tram routes, event shuttles.

### 6. Pixel typeface legibility — decision needed
Pixel fonts read poorly at body sizes and degrade badly under screen magnification, which works against the accessibility case Task 5 asks you to argue. Recommended: **pixel type for display and headings only, an accessible sans for body copy.** This is the team's design call, not a change to make silently.

### 7. Housekeeping
- `Assets/Pages Bsckground/` is misspelled (should be *Backgrounds*). Left as-is — Figma and other submissions may reference the path.
- Merch renders average ~4 MB; `Bottle.jpg` is 10.9 MB. Fine for a design repo, worth compressing if they go anywhere else.
- Backgrounds are 360×800 but the frames are 412×917. They need rescaling or regenerating at 412 width, or they will not tile cleanly.
- The Figma file is named "Notte Della Taranta" but the URLs still read `Untitled`.

### 8. Resolved — exposed API token
A Figma personal access token was committed to this **public** repository. It has been **revoked** at Figma's end, which is the only fix that works: deleting a file does not remove it from git history, and public repositories are scraped by credential bots within minutes. The file has been deleted and a `.gitignore` now blocks token, key and `.env` files.

---

## Getting started

1. Read this file and [ROADMAP.md](ROADMAP.md).
2. Fill in your name and role in the Team table above.
3. Open the Figma prototype and check it against [Docs/02-Screen-Spec.md](Docs/02-Screen-Spec.md).
4. Log every AI interaction in [Docs/05-AI-Use-Log.md](Docs/05-AI-Use-Log.md) as you go — the brief requires it, and backfilling is obvious to a marker.
