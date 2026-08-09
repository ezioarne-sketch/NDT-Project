# Prototype Wiring Map

**Serves Task 4** — "Wire up the final app design with working links and actions such as scrolling, tapping, or swiping."

Doubles as the QA checklist. Work down it on a phone before recording the walkthrough video.

The connections below were read from Figma file `f3PA95klt9cu4tpNdiOkGK` via the REST API on 2026-08-09 and verified with a reachability analysis. The wireframe's logic is sound and mostly complete — carry it onto the final screens, then fix the defects in section 3 and add the missing links in section 4.

---

## 1. Navigation convention

The wireframe uses four ellipses as the bottom nav on every screen. The mapping is consistent:

| Element | Nav item | Destination |
|---|---|---|
| `Ellipse 1` | Home | `01-Home` |
| `Ellipse 2` | Event | `06-Event-Hub` |
| `Ellipse 3` | Music | `10-Music-Player` |
| `Ellipse 4` | Shop | `13-Shop` |

**Build this as one component with four variants.** Every defect in section 3 is a nav button wired by hand to the wrong place — a component makes that class of bug impossible.

---

## 2. Connections in the wireframe

Verified as present. Screen names are the proposed ones from [02-Screen-Spec.md](02-Screen-Spec.md).

| From | Trigger | Gesture | To | Transition |
|---|---|---|---|---|
| **01-Home** | Story card 1 | Tap | `03-Story-Dionysian` | Slide left |
| 01-Home | Story card 2 | Tap | `04-Story-Menades` | Slide left |
| 01-Home | Story card 3 | Tap | `05-Story-DiMartino` | Slide left |
| 01-Home | Nav — Event | Tap | `06-Event-Hub` | Instant |
| 01-Home | Nav — Music | Tap | `10-Music-Player` | Instant |
| 01-Home | Nav — Shop | Tap | `13-Shop` | Instant |
| **03-Story-Dionysian** | Nav ×4 | Tap | Home / Event / Music / Shop | Instant |
| **04-Story-Menades** | Nav — Event / Music / Shop | Tap | Respective hubs | Instant |
| **05-Story-DiMartino** | Nav ×4 | Tap | Home / Event / Music / Shop | Instant |
| **06-Event-Hub** | Map View card | Tap | `07-Map` | Slide left |
| 06-Event-Hub | Schedule View card | Tap | `08-Schedule` | Slide left |
| 06-Event-Hub | Transport card | Tap | `09-Transport` | Slide left |
| 06-Event-Hub | Nav ×4 | Tap | Home / Event / Music / Shop | Instant |
| **07-Map** | Location pin ×6 | Tap | `OV-Pin` | **Overlay** |
| 07-Map | Nav ×4 | Tap | Home / Event / Music / Shop | Instant |
| **08-Schedule** | Workshop row 3 | Tap | `OV-Workshop` | **Overlay** |
| 08-Schedule | Nav — Event / Music / Shop | Tap | Respective hubs | Instant |
| **09-Transport** | Nav — Event / Music / Shop | Tap | Respective hubs | Instant |
| **10-Music-Player** | Album art | Tap | `11-Now-Playing` | Slide up |
| 10-Music-Player | Library | Tap | `12-Library` | Slide left |
| 10-Music-Player | Nav — Home / Event / Shop | Tap | Respective hubs | Instant |
| **11-Now-Playing** | Nav — Home / Event / Shop | Tap | Respective hubs | Instant |
| **12-Library** | Nav ×4 | Tap | Home / Event / Music / Shop | Instant |
| **13-Shop** | Merch tile ×4 | Tap | `14-Product` | Slide left |
| 13-Shop | User Profile | Tap | `15-Login` | Slide left |
| 13-Shop | Nav — Home / Event / Music | Tap | Respective hubs | Instant |
| **14-Product** | Nav ×4 | Tap | Home / Event / Music / Shop | Instant |
| **15-Login** | Nav ×4 | Tap | Home / Event / Music / Shop | Instant |
| **02-About** | Nav — Event / Music / Shop | Tap | Respective hubs | Instant |

---

## 3. Defects found — fix during Task 4

Six issues, all verified against the file. Every one is a dead end or a wrong destination a marker clicking through would hit.

### 3.1 `02-About` is an orphan 🔴
**Nothing links to it.** It is unreachable from anywhere in the prototype — the reachability analysis confirms it is the only frame that is never a destination.
**Fix:** link it from `01-Home`, or from a header menu present on every screen.

### 3.2 Both overlays are dead ends 🔴
`OV-Workshop` and `OV-Pin` have **no outgoing links**. Once opened, the prototype traps you.
**Fix:** build both as true Figma **overlays** with close-on-click-outside, plus an explicit close control. Currently they are screens, which is why they trap.

### 3.3 Home button mis-wired on two screens 🟠
On `04-Story-Menades` and `09-Transport`, the Home nav button points to `03-Story-Dionysian` instead of `01-Home`.
**Fix:** repoint both. The nav component prevents recurrence.

### 3.4 `08-Schedule` has no Home button 🟠
It links to Event, Music, Shop and the workshop overlay — the Home nav element is missing entirely.
**Fix:** add it with the nav component.

### 3.5 Only one of six workshop rows is clickable 🟠
`08-Schedule` shows six workshops; only row 3 opens `OV-Workshop`.
**Fix:** wire all six. Give each its own overlay content, or one overlay component with variants.

### 3.6 `11-Now-Playing` cannot return to the player 🟠
It links to Home, Event and Shop — but not back to `10-Music-Player`, and it has no Music nav item.
**Fix:** add a back/collapse control to the player, plus the missing nav item.

### Also worth checking
- `12-Library` track rows do not open `11-Now-Playing`. Tapping a track should play it.
- `02-About` has four separate elements all pointing at `10-Music-Player`, which looks like a copy-paste error rather than intent.
- `13-Shop` shows a **Tickets** control that links nowhere — wire it to `18-Ticket`.

---

## 4. New connections to build

For the six screens added in [02-Screen-Spec.md](02-Screen-Spec.md).

| From | Trigger | Gesture | To | Transition |
|---|---|---|---|---|
| *App launch* | — | Auto after 2s | `16-Splash` | — |
| `16-Splash` | — | Auto-advance | `17-Language` *(first run)* | Dissolve |
| `16-Splash` | — | Auto-advance | `01-Home` *(thereafter)* | Dissolve |
| `17-Language` | Language row | Tap | `01-Home` | Slide left |
| `01-Home` | Header menu | Tap | `02-About` | Slide left |
| `01-Home` | Settings icon | Tap | `20-Settings` | Slide left |
| `13-Shop` | Tickets | Tap | `18-Ticket` | Slide left |
| `18-Ticket` | Back | Tap | `13-Shop` | Slide right |
| `08-Schedule` | Artist name | Tap | `19-Artist` | Slide left |
| `10-Music-Player` | Artist name | Tap | `19-Artist` | Slide left |
| `12-Library` | Track row | Tap | `11-Now-Playing` | Slide up |
| `19-Artist` | Listen | Tap | `11-Now-Playing` | Slide up |
| `20-Settings` | Language | Tap | `17-Language` | Slide left |
| `01-Home` | Watch live | Tap | `21-Virtual` | Slide left |
| `21-Virtual` | Schedule | Tap | `08-Schedule` | Slide left |
| `11-Now-Playing` | Collapse | Swipe down | `10-Music-Player` | Slide down |

---

## 5. Gestures beyond tapping

The brief names "scrolling, tapping, or swiping". Tapping alone will not satisfy it.

| Gesture | Where | Status |
|---|---|---|
| **Scroll** | Story ×3, About, Schedule, Library, Shop, Transport, Artist | ⬜ |
| **Swipe** | Home story carousel | ⬜ |
| **Swipe** | Story image galleries | ⬜ |
| **Swipe down** | Now Playing → collapse | ⬜ |
| **Overlay** | Workshop details, Pin info, Cart | ⬜ |
| **Animation** | Splash mark; play/pause state | ⬜ |

Set the Figma frames to **vertical scrolling** with a fixed bottom nav so the nav stays put while content moves. On long content screens this is the difference between a prototype that feels real and one that feels like a slideshow.

---

## 6. Pre-submission checklist

Work through on a phone, not a laptop.

- [ ] Every screen reachable from `01-Home` within three taps
- [ ] No orphans — `02-About` fixed
- [ ] No dead ends — both overlays dismissible
- [ ] Home button returns to Home from **every** screen
- [ ] Nav bar identical on all 21 screens
- [ ] All six workshop rows open their overlay
- [ ] Tickets control opens the ticket screen
- [ ] All five merch tiles open product detail
- [ ] Track rows open Now Playing
- [ ] Long screens scroll; nav stays fixed
- [ ] At least one carousel swipes
- [ ] Transitions consistent — same direction means same thing
- [ ] Tested at 412px on a real device
- [ ] Prototype link opens in a private browser window
- [ ] Walkthrough video shows every screen
