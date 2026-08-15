# Written Rationale — structure and prompts

**Serves Task 5** — "Provide a written rationale (minimum 500 words, PDF) explaining each design team member's roles and contributions, and detailing the app's features and how it addresses ease of use and user experience considerations such as accessibility, languages, variety of ages, social and cultural demands, and special needs."

> **How to use this document.** Headings, word budgets and **the material to write from** are provided. **The writing must be yours.** Under AI Assessment Scale 5 the final outcome has to show your own interpretation and reflective thinking, not raw AI output — and a rationale that reads as generated will undermine the AI log you submit alongside it. Delete each prompt block as you replace it.

**Budget: ~950 words against a 500-word minimum.** The overshoot is deliberate — six named themes plus a software decision that needs defending do not fit in 500 words, and a rationale that scrapes the floor reads like the floor was the target.

---

## Word budget

| § | Section | Words |
|---|---|---|
| 1 | Introduction — the event and the app | 80 |
| 2 | Role, process and contribution | 120 |
| 3 | **Why the app is code, not a Figma prototype** | 100 |
| 4 | Features | 150 |
| 5 | Ease of use and navigation | 100 |
| 6 | Accessibility | 140 |
| 7 | Languages and international visitors | 90 |
| 8 | Variety of ages | 60 |
| 9 | Social and cultural demands | 90 |
| 10 | Special needs | 90 |
| 11 | Conclusion | 60 |
| | **Total** | **1,080** |

Trim to ~950 in editing. Do not go below 500.

---

## 1. Introduction *(80 words)*

> **Material** — *Notte della Taranta Melbourne* is a **fictional** one-night festival at Flemington Racecourse, drawing on the pizzica and tarantism traditions of the Salento. Say the word "fictional" in the first two sentences. The app serves visitors on site, visitors who do not know the tradition, and visitors who cannot attend at all. State the brief you set yourself in one sentence — something like: an app that carries the campaign identity, works at 2am in a field, and treats the history as content rather than decoration.

`<write here>`

---

## 2. Role, process and contribution *(120 words)*

> **This is a single-author submission and the brief assumes a team** — it asks for "each design team member's roles and contributions" and for "each team member contributing". **Say so plainly in the first sentence** rather than leaving a marker to infer it from a rationale that never mentions anyone else. It is not a weakness; the *Independence and Collaboration* criterion explicitly rewards working independently, self-direction and managing your own time and resources.
>
> **Material** — be concrete. "Contributed to the design" is worth nothing. Name things: the 21-screen inventory and the six additions to the wireframe; the decision to build in code; the display-typeface comparison and why Silkscreen won; directing the Flemington map layout; the content decisions — lineup, stage names, prices, the position taken in story chapter 3.
>
> **Be accurate about the AI.** The AI log records that Claude Opus implemented the app under direction. Describing that honestly here — what you directed, what you rejected, what you would have done differently by hand — is required by Scale 5 and is far safer than leaving it to be discovered. The log is submitted alongside this; the two must agree.

`<write here>`

---

## 3. Why the app is code, not a Figma prototype *(100 words)*

> **Material** — this is an unusual choice and it needs defending once, clearly.
> - The brief permits it: *"The recommended software for this task is Figma, though other appropriate software is acceptable"* (p.2), and Task 4 accepts *"a link… if the prototype is online"* (p.3). Quote it.
> - The gain is that the interactions are real rather than simulated. Task 4 asks for "scrolling, tapping, or swiping" — in a coded app those are the actual behaviours, not hotspots imitating them.
> - The strongest single consequence: **the accessibility settings change the running app.** A marker can switch on high contrast or largest text and watch every screen respond. In a Figma prototype that could only be mocked as separate frames.
> - ULO3 is "advanced concept development… and **experimental applications**". A prototype that runs answers that more directly than one that is clicked through.
> - The honest cost: it is further from the tool taught in class, and the Figma wireframe remains the Task 1 artefact.

`<write here>`

---

## 4. Features *(150 words)*

> **Material** — walk the groups and say what each does *for the visitor*, not what it contains.
> - **Story ×3** — the Dionysian rite → the *tarantate* → de Martino's 1959 fieldwork. Cultural depth and pre-event engagement; reached from a **carousel** on Home.
> - **Event** — a drawn Flemington map with filterable pins and a **pin overlay**; a schedule combining sets and workshops in one timeline with a **workshop overlay** giving capacity, language and access notes; transport written for someone who does not know Melbourne.
> - **Music** — a player with working transport and a seekable scrubber, a library, and artist profiles. The wireframe had a player but nothing about who was playing; the profiles close that gap.
> - **Shop** — the five merchandise items from the Task 2 campaign, priced in AUD, with a product screen and a **cart sheet**.
> - **Ticket** — a scannable QR that works offline.
> - **Virtual visitor** — live stream, stage switching, captions, and set times converted to the viewer's timezone.
>
> Name the interactive elements explicitly, since the brief invites them: **carousel, three overlays, swipe galleries, splash animation, screen transitions**.

`<write here>`

---

## 5. Ease of use and navigation *(100 words)*

> **Material**
> - Four-item bottom nav — Home, Event, Music, Shop — on every screen, matching the four campaign icons. The constraint came from the identity and proved right: fewer items mean larger targets and less to read.
> - The **hub pattern** keeps it at four. Map, Schedule, Transport and Virtual sit behind the Event hub; Ticket and Login behind Shop; Settings and About from Home.
> - **Every screen is reachable, verified rather than claimed.** An automated test walks the whole link graph on every run: no dead ends, no orphaned screens, and all three overlays open, trap focus and close on Escape. The wireframe by contrast had an orphaned About screen and two dead-end overlays.
> - **Nothing is gated.** Map, schedule, stories and music all work without an account — the things a visitor needs urgently while standing at a gate.
> - The nav is one component rendered from one place, so it cannot drift between screens.

`<write here>`

---

## 6. Accessibility *(140 words)*

> **The strongest section available to you, because all of it is measured.** Quote figures, not intentions. Full table in [07-Contrast-Report.md](07-Contrast-Report.md); cite WCAG 2.1.
>
> | Combination | Ratio | Level |
> |---|---|---|
> | White on ground `#040606` | **20.31:1** | AAA |
> | Mint on ground | **11.99:1** | AAA |
> | Muted white 62% on ground | **7.77:1** | AAA |
> | White on deep magenta `#461E3C` | **13.89:1** | AAA |
> | Mint on deep magenta | **8.20:1** | AAA |
> | Magenta `#8B3A8B` on ground | **2.98:1** | **fails AA** |
>
> AA requires 4.5:1 for body text; 13 of the app's 14 combinations clear AAA at 7:1.
> - State the rule and *how it is enforced*: text is white or mint only, and magenta is **structurally excluded** — there is no magenta text token in the stylesheet to reach for. Magenta carries fill, border and texture.
> - **Name the exception**: the ticket's QR panel is white, because a dark QR will not scan. An acknowledged exception is stronger than a claim of purity.
> - **Typography**: body copy is Atkinson Hyperlegible, drawn by the Braille Institute for readers with low vision. Pixel type is restricted to headings and short labels at 14px and above and never sets running text, because pixel faces degrade badly under magnification — which would work against this very argument.
> - **The settings work**: three text sizes to 21px body, high contrast, reduced motion, captions. They persist and apply everywhere.
> - **Targets**: 44px minimum, verified by automated test rather than asserted — an earlier version failed on 21 elements and was fixed.
> - Also: a visible focus ring never removed, a skip link, `prefers-reduced-motion` respected, and a live region announcing screen changes to screen readers.

`<write here>`

---

## 7. Languages and international visitors *(90 words)*

> **Material**
> - Six languages: English, Italiano, 简体中文, Ελληνικά, Tiếng Việt, العربية — the festival's Italian roots plus four reflecting Melbourne's actual demographics. Cite the ABS 2021 Census; see [06-References.md](06-References.md) §1.
> - Each is shown **in its own script**, not translated into English. Say why: a visitor scanning for their language recognises the script before they read anything.
> - **No flags.** A flag names a country, not a language, and gets it wrong for most of them.
> - The **virtual visitor** screen is the other half: live stream, captions on every stage rather than only the main one, and set times converted to the viewer's timezone — someone in Lecce watching a Melbourne festival at their own hour.

`<write here>`

---

## 8. Variety of ages *(60 words)*

> **Material** — a named requirement, so address it by name.
> - Text scaling to 21px body serves ageing eyes without a separate "senior mode".
> - The four-item bottom nav is the most familiar pattern in mobile software; nothing has to be learned.
> - The pixel aesthetic reads as playful to younger users while staying legible, because it is confined to headings.
> - The mask-making workshop is explicitly family-friendly, from age 6 with an adult; every dance workshop teaches a seated version alongside.

`<write here>`

---

## 9. Social and cultural demands *(90 words)*

> **The section with the most room to demonstrate judgement — and the one a marker will read hardest.**
>
> **Material**
> - Tarantism was bound up with poverty, gender and distress in rural Puglia. The *tarantate* were overwhelmingly women and overwhelmingly poor. It was not a costume.
> - The app leads with three history chapters rather than treating the spider as decoration. Say whether that was enough.
> - **The position chapter 3 takes, and the one it stopped taking.** Until 15 August the chapter ended *"A festival is not a cure. Saying so plainly is the honest version of the tribute."* Your rewrite ends on the transformation from private suffering to public celebration instead. Both are defensible. **Whichever you keep, this section is where you argue for it** — and the fact that you moved between the two positions while writing is itself worth a sentence.
> - **The images are a live example of the same judgement.** Three chapter images went in on 15 August; a fourth was rejected because it was All Rights Reserved and, more to the point, would have been decoration rather than evidence. Franco Pinna's photograph of the 1959 fieldwork was kept because chapter 3 is *about* what it documents — and it is credited on the screen, not only in the bibliography. That is a concrete decision about handling somebody else's culture and somebody else's work, made under a real constraint, which is exactly what this section asks for.
> - What staging it in Melbourne means for the Italian-Australian community, and for an audience meeting pizzica for the first time.
> - Acknowledge the real *Notte della Taranta* at Melpignano as the source.
> - **The unresolved part is worth admitting.** A festival brand built on a healing ritual is extraction of a kind however carefully handled. Naming that is stronger than claiming to have solved it.

`<write here>`

---

## 10. Special needs *(90 words)*

> **A named requirement, distinct from general accessibility. Address it by name.**
>
> **Material** — all of this is on the built screens and can be pointed at.
> - **On the map**: step-free route drawn from the station through Gate 3 to the main stage; accessible entrances; a **Changing Places** facility with hoist and adult change table; accessible cubicles; first aid; and a **quiet zone** with low light, no amplified sound, seating and ear defenders.
> - **Sensory**: an explicit warning that Il Ragno uses strobe and haze from midnight, so it can be avoided rather than discovered.
> - **Transport**: accessible parking 80m from Gate 3 on a sealed step-free path, wheelchair-accessible shuttles with two securement spaces, **Companion Card** affiliation, assistance animals welcome with a relief area.
> - **The transport screen is worth a sentence of its own, and it is the most interesting thing in this section.** An earlier version claimed Route 57 ran low-floor trams to a level-access stop. Fact-checking against Yarra Trams and the VRC found the opposite: *"Route 57 does not operate low-floor trams. Passengers using mobility aids are advised to take the train to Flemington Racecourse for easier access."* The screen now says so and routes those visitors to the train. **Make the design argument, not just the correction** — an accessibility feature that reassures falsely is worse than none, because someone plans their night around it. Naming a mistake you found and fixed reads as judgement; it is also the kind of specific, sourced detail the rubric rewards.
> - **Per workshop**: capacity, language and an access note — seated versions, adjustable tables, left-handed instruments, hearing loops, live captions.
> - **In settings**: reduced motion for vestibular sensitivity, captions for deaf and hard-of-hearing visitors.
> - **The ticket works offline.** Connectivity at a crowded venue is unreliable, and a ticket that needs signal is not a ticket.

`<write here>`

---

## 11. Conclusion *(60 words)*

> **Material** — what the app achieves, and one genuine limitation. Naming a real limitation reads as judgement, not weakness. Honest candidates:
> - The story chapters carry the app's factual weight and needed the most care of anything in the project.
> - There is no backend, so the personal schedule does not persist between sessions and the "Add to my night" button demonstrates an interaction rather than delivering a feature.
> - The lineup is invented, which solves the licensing problem but means the music screens cannot actually play anything.
> - Building in code bought real interaction at the cost of distance from the tool taught in class.

`<write here>`

---

## Before submitting

- [ ] Over 500 words *(target ~950)*
- [ ] States plainly that this is a single-author submission
- [ ] Describes the AI's role honestly, and agrees with [05-AI-Use-Log.md](05-AI-Use-Log.md)
- [ ] All six named themes addressed **by name**: ease of use · accessibility · languages · variety of ages · social and cultural demands · special needs
- [ ] Contrast ratios quoted with figures, and WCAG cited
- [ ] The choice to build in code is defended, with the brief quoted
- [ ] Harvard referencing throughout — see [06-References.md](06-References.md)
- [ ] Reads as your own writing
- [ ] Exported as PDF with the LCIM Cover Sheet
