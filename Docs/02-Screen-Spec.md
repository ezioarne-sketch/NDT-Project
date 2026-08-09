# Screen Specification

**Serves Tasks 1 and 2** — the wireframe inventory and the specification for the final design.

Screen count: **21** (15 existing + 6 to build), plus **2 overlays**. The brief's minimum is 10.

Existing screens were read directly from Figma file `f3PA95klt9cu4tpNdiOkGK` via the REST API on 2026-08-09. Component and content notes reflect what is actually in the wireframe; accessibility notes and the design column are targets for Task 2.

---

## Naming

Frames are currently on Figma's defaults (`Android Compact - 1` … `- 15`), which makes the prototype hard to navigate and the wiring impossible to read. Rename before design starts.

| Current | Rename to | Screen |
|---|---|---|
| Android Compact - 1 | `01-Home` | Home |
| Android Compact - 15 | `02-About` | About the Festival |
| Android Compact - 5 | `03-Story-Dionysian` | The Dionysian Cult |
| Android Compact - 9 | `04-Story-Menades` | Menades and Tarantate |
| Android Compact - 10 | `05-Story-DiMartino` | Di Martino and the Modern Age |
| Android Compact - 2 | `06-Event-Hub` | Event hub |
| Android Compact - 6 | `07-Map` | Map |
| Android Compact - 11 | `08-Schedule` | Schedule |
| Android Compact - 12 | `09-Transport` | Transport & Access |
| Android Compact - 3 | `10-Music-Player` | Music player |
| Android Compact - 14 | `11-Now-Playing` | Now playing |
| Android Compact - 7 | `12-Library` | Track library |
| Android Compact - 4 | `13-Shop` | Shop |
| Android Compact - 13 | `14-Product` | Product detail |
| Android Compact - 8 | `15-Login` | Login |
| Frame 1 | `OV-Workshop` | Overlay: workshop details |
| Frame 2 | `OV-Pin` | Overlay: map pin info |
| *(new)* | `16-Splash` … `21-Virtual` | See section 3 |

**Frame size:** 412 × 917 (Android Compact). Backgrounds in `Assets/Pages Bsckground/` are 360 × 800 — rescale or regenerate at 412 width before use.

---

## Global elements

Build these as Figma components once. Reapplying a nav bar across 21 screens by hand is where consistency marks get lost.

| Element | Spec |
|---|---|
| **Bottom nav** | Four items — Home · Event · Music · Shop. Icons `Icon-01`, `Icon-03`, `Icon-02`, `Icon-04`. Active state in mint |
| **Back control** | `Icon-05`. Top-left, on every screen below a hub |
| **Status bar** | 9:41 pattern, consistent across all frames |
| **Background** | Section-appropriate from `Assets/Pages Bsckground/` |
| **Type** | Pixel face for display and headings; accessible sans for body — see README known issue 6 |
| **Text colour** | White or mint only. Magenta never carries type |

> **Nav inconsistency to fix:** `02-About` currently shows five items including "Social". Every other screen shows four, and only four icons exist. Resolve at W-6.

---

## 1. Existing screens

### 01-Home
**Purpose** — Entry hub. Routes into the festival's three history stories and the four main sections.
**In wireframe** — Logo; three story cards ("The Dionysian Cult", "Menades and Tarantate", "Di Martino and the Modern Age"); bottom nav.
**Design notes** — Home background. Logo at full weight; this is the screen that establishes the identity. Story cards are candidates for the required **carousel**.
**Accessibility** — Card tap targets ≥44px. Story titles must not rely on the pixel face at small sizes.
**Links out** — Story ×3, Event, Music, Shop.

### 02-About
**Purpose** — What the festival is, for visitors arriving without context.
**In wireframe** — Logo; "About the Festival" heading; nav (currently five items).
**Design notes** — Sparse in wireframe; needs real content. Natural home for the fictional festival's origin story and the Flemington rationale.
**Accessibility** — Long-form text: line length, leading, body typeface all matter here more than anywhere.
**Links out** — Music, Shop, Event.

### 03-Story-Dionysian · 04-Story-Menades · 05-Story-DiMartino
**Purpose** — Three long-form content screens tracing tarantism from ancient rite to modern revival.
**In wireframe** — Title; body text block; four image placeholders; nav.
**Design notes** — Consistent template across all three. Four images each: source them properly, or commission/illustrate. **Every factual claim needs a Harvard citation** — this is the most reference-exposed part of the app.
**Accessibility** — Scrolling text screens. Images need alt-text equivalents noted in the spec. Adjustable text size links to `20-Settings`.
**Links out** — Each other, Home, and all four nav sections.

### 06-Event-Hub
**Purpose** — Splits the on-site experience three ways.
**In wireframe** — "Event" heading; three cards — Map View, Schedule View, Transport and Access; nav.
**Design notes** — Event background with its sigil. Three large cards.
**Accessibility** — Clear card labelling; do not rely on icon alone.
**Links out** — Map, Schedule, Transport.

### 07-Map ⚠️ largest single job
**Purpose** — Wayfinding at Flemington Racecourse.
**In wireframe** — Search bar; map area; six location pins → `OV-Pin`.
**Design notes** — Must become a recognisable **Flemington Racecourse** layout, not a generic field. Place stages, food, bars, toilets, first aid, entries/exits. Style the map to the brand rather than dropping in a screenshot — and if any real map data is used, **cite it**.
**Accessibility** — This screen carries most of the "special needs" argument. Mark **accessible entrances, step-free routes, accessible toilets, quiet zones, first aid**. Pins need text labels, not colour-coding alone.
**Links out** — `OV-Pin`, all nav.

### 08-Schedule
**Purpose** — What is on, when.
**In wireframe** — "Schedule" heading; six workshop rows → `OV-Workshop`; nav.
**Design notes** — Six entries in the wireframe; expand to a realistic programme. Consider time-of-day grouping — it is a night festival, so the timeline runs late.
**Accessibility** — Times in a legible face. Do not encode stage or type in colour alone.
**Links out** — `OV-Workshop`, all nav.

### 09-Transport
**Purpose** — Getting to and from Flemington.
**In wireframe** — "Transport and Access" heading; "Info" block; nav.
**Design notes** — Thin in the wireframe; needs real Melbourne content. Flemington Racecourse station, tram routes, event shuttles, parking, rideshare pickup, last services home.
**Accessibility** — Directly serves the accessibility theme. Cover accessible parking, step-free station access, companion cards, assistance animals.
**Links out** — All nav.

### 10-Music-Player
**Purpose** — Music discovery hub.
**In wireframe** — Album cover; timeline scrubber; Library entry; nav.
**Design notes** — Music background and sigil. **Replace all template content** — the reference board carries Imagine Dragons and Odesza. Use the festival's own fictional pizzica lineup.
**Accessibility** — Transport controls ≥44px. Scrubber needs a non-drag alternative.
**Links out** — Now Playing, Library, all nav.

### 11-Now-Playing
**Purpose** — Expanded player.
**In wireframe** — Album cover; timeline scrubber; nav.
**Design notes** — Full-bleed artwork. Candidate for animation — the brief invites it.
**Accessibility** — Track and artist must be text, not baked into artwork.
**Links out** — Home, Event, Shop.

### 12-Library
**Purpose** — Browse the full catalogue.
**In wireframe** — Six "Track Name - Year" rows; library heading; scrubber; nav.
**Design notes** — Scrolling list. Group by artist or by year to support the historical narrative.
**Accessibility** — Row targets ≥44px; clear focus states.
**Links out** — All nav.

### 13-Shop
**Purpose** — Merchandise hub and account entry.
**In wireframe** — "Shop" heading; User Profile; Tickets; four merch tiles → `14-Product`; nav.
**Design notes** — **Five real merch renders exist** in `Assets/Merch/`: Pumo, Veil, Tote, Tambourine, Bottle. Expand the grid from four tiles to five. **"Tickets" currently links nowhere** — wire it to `18-Ticket`.
**Accessibility** — Product names as text beneath images, never inside them.
**Links out** — Product, Login, Ticket *(to add)*, all nav.

### 14-Product
**Purpose** — Single product view and add to cart.
**In wireframe** — Search bar; cart; product image; "Name - Price - Info"; Add to Cart; four related merch.
**Design notes** — **Prices in AUD.** The reference board uses euros — the festival is in Melbourne. Use the high-resolution renders.
**Accessibility** — Add to Cart needs a visible confirmation state, not colour change alone.
**Links out** — All nav.

### 15-Login
**Purpose** — Account access.
**In wireframe** — User Profile heading; Email; Password; Login; "Continue With" social options.
**Design notes** — Based on a template board; restyle fully to brand. Should be skippable — do not gate the map or schedule behind login.
**Accessibility** — Labels above fields, not placeholder-only. Visible error states. Password reveal toggle.
**Links out** — Home, Shop, Event, Music.

### OV-Workshop *(overlay, 316×216)*
**Purpose** — Workshop detail without leaving the schedule.
**In wireframe** — "Selected Workshop Details".
**Design notes** — Build as a Figma **overlay**, not a screen swap. Add time, location, capacity, language, accessibility notes.
**Accessibility** — Dismissible by tapping outside *and* by an explicit close control.

### OV-Pin *(overlay, 316×216)*
**Purpose** — Map pin detail.
**In wireframe** — "Pin Info".
**Design notes** — Overlay over the map. Name, type, opening hours, accessibility status.
**Accessibility** — Same dismissal rules. Contrast must hold over a busy map.

---

## 2. Overlays and interactive elements

The brief invites "overlays, animations, and other interactive elements such as slideshows or carousels". Minimum to include:

| Element | Where | Status |
|---|---|---|
| Workshop details overlay | Schedule | ✅ In wireframe |
| Map pin overlay | Map | ✅ In wireframe |
| Story carousel | Home | ⬜ To add |
| Image gallery / swipe | Story screens | ⬜ To add |
| Cart overlay | Shop, Product | ⬜ To add |
| Language switcher | Global | ⬜ To add |
| Splash animation | Splash | ⬜ To add |

---

## 3. Screens to build

Six additions. None is padding — each is named in the brief or required by a Task 5 theme.

### 16-Splash
**Required by** — Task 2, named in the brief's suggested screen list.
**Purpose** — Brand entry point.
**Content** — Spider mark and wordmark on the ground colour; loading state.
**Design notes** — Best animation opportunity in the app: the mark drawing itself, or the matrix-rain texture resolving into the logo.
**Accessibility** — Must respect reduced-motion. Never the only route into the app — auto-advance, do not require a tap.
**Links out** → `17-Language` on first run, `01-Home` thereafter.

### 17-Language
**Required by** — Task 5, "languages"; Task 1, "connect with global and international visitors".
**Purpose** — Language selection on first run, changeable later.
**Content** — Language list. Suggested: English, Italiano, and at least two reflecting Melbourne's demographics — Mandarin, Arabic, Greek, Vietnamese.
**Design notes** — Show each language **in its own script**, not translated into English. Keep it reachable from Settings.
**Accessibility** — Large tap targets; no reliance on flags, which map to countries rather than languages.
**Links out** → `01-Home`, `20-Settings`.

### 18-Ticket
**Required by** — Task 2, named in the brief. The Shop screen already says "Tickets" with nothing behind it.
**Purpose** — Digital entry ticket.
**Content** — QR code, holder name, ticket type, date, gate, add-to-wallet.
**Design notes** — QR needs a light backing to scan — a rare, justified exception to the dark ground. State that reasoning in the rationale.
**Accessibility** — Must work offline; brightness boost on open; ticket number as selectable text as a fallback.
**Links out** → `13-Shop`, `01-Home`.

### 19-Artist
**Required by** — Task 2, named in the brief's suggested screen list.
**Purpose** — Performer profiles.
**Content** — Photo, biography, origin, instrument or tradition, set time, listen link, related tracks.
**Design notes** — Genuine gap: the app has a music player but nothing about who is playing. Link from Schedule, Player and Library. Use the festival's own fictional lineup — grounded in real pizzica traditions, cited where drawn from real practice.
**Accessibility** — Biography as body text at a readable size. Pronunciation guides for Italian names would be a nice touch.
**Links out** → `10-Music-Player`, `08-Schedule`.

### 20-Settings
**Required by** — Task 5, "accessibility", "special needs".
**Purpose** — User control over how the app presents itself.
**Content** — Text size, high contrast, reduce motion, captions/subtitles, language, screen-reader hints, haptics.
**Design notes** — Do not bury it. This screen is where the accessibility argument becomes demonstrable rather than asserted — it is worth a paragraph of its own in the rationale.
**Accessibility** — The point of the screen. Every toggle needs a text label and a state description.
**Links out** → `01-Home`, `17-Language`.

### 21-Virtual
**Required by** — Task 1 and the Expectations section, both of which stress virtual visitors.
**Purpose** — Attend from anywhere.
**Content** — Live stream, stage selector, schedule in the viewer's timezone, chat or reactions, on-demand replays.
**Design notes** — Currently the largest unaddressed requirement. The brief mentions virtual visitors twice and the wireframe has nothing for them.
**Accessibility** — **Captions are essential** — this is the clearest place to answer the captions expectation. Timezone conversion serves international visitors directly.
**Links out** → `01-Home`, `08-Schedule`, `19-Artist`.

---

## 4. Coverage against the brief

The brief's suggested screens, checked off:

| Suggested | Covered by | Status |
|---|---|---|
| Splash screen | `16-Splash` | ⬜ To build |
| Home screen | `01-Home` | ✅ |
| Content screen | `03`–`05`, `02-About` | ✅ |
| Artist profiles | `19-Artist` | ⬜ To build |
| Floorplan / map | `07-Map` | ✅ needs Flemington |
| Merchandise shop | `13-Shop`, `14-Product` | ✅ |
| Digital ticket / download | `18-Ticket` | ⬜ To build |

**Screen count: 21.** Minimum is 10.
