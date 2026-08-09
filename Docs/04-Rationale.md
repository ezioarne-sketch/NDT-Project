# Written Rationale — structure and prompts

**Serves Task 5** — "Provide a written rationale (minimum 500 words, PDF) explaining each design team member's roles and contributions, and detailing the app's features and how it addresses ease of use and user experience considerations such as accessibility, languages, variety of ages, social and cultural demands, and special needs."

> **How to use this document.** Headings, word budgets and prompts are provided. **The writing must be yours.** Under AI Assessment Scale 5 the final outcome has to show your own interpretation and reflective thinking, not raw AI output — and a rationale that reads as generated will undermine the AI log you submit alongside it. Delete each prompt as you replace it.

**Budget: 900 words against a 500-word minimum.** The overshoot is deliberate — six named themes and four members' contributions do not fit in 500 words, and a rationale that scrapes the floor reads like the floor was the target.

---

## Word budget

| § | Section | Words |
|---|---|---|
| 1 | Introduction — the event and the app | 80 |
| 2 | Team roles and contributions | 180 |
| 3 | Features | 150 |
| 4 | Ease of use and navigation | 100 |
| 5 | Accessibility | 120 |
| 6 | Languages and international visitors | 90 |
| 7 | Variety of ages | 60 |
| 8 | Social and cultural demands | 80 |
| 9 | Special needs | 80 |
| 10 | Conclusion | 60 |
| | **Total** | **1,000** |

Trim to ~900 in editing. Do not go below 500.

---

## 1. Introduction — the event and the app *(80 words)*

> What is *Notte della Taranta*, where is it held, and what does the app do? State plainly that the festival is **fictional** and that it draws on the pizzica and tarantism traditions of Salento. One sentence on the design brief you set yourselves.

`<write here>`

---

## 2. Team roles and contributions *(180 words — ~45 each)*

> **Explicitly required.** Each member writes their own paragraph, in their own voice. Name the screens designed, documents written and decisions driven. Pull the specifics from the Contribution Log in [ROADMAP.md](../ROADMAP.md) — that is what it is for.
>
> Be concrete. "Contributed to the design" is worth nothing. "Designed the Flemington map screen, including accessible-route overlays, and wired all six workshop overlays" is evidence.

**`<Name 1>` — `<role>`**
`<write here>`

**`<Name 2>` — `<role>`**
`<write here>`

**`<Name 3>` — `<role>`**
`<write here>`

**`<Name 4>` — `<role>`**
`<write here>`

---

## 3. Features *(150 words)*

> Walk the 21 screens by group and say what each does *for the visitor* — not what it contains. Cover:
>
> - **Story screens ×3** — cultural depth, pre-event engagement, the Dionysian → *tarantate* → de Martino arc
> - **Event** — map, schedule, transport
> - **Music** — player, library, artist profiles; discovery before and after the night
> - **Shop** — five merchandise items carried over from the Task 2 campaign
> - **Ticket** — offline-capable QR entry
> - **Virtual visitor** — attendance from anywhere
>
> Name the interactive elements: carousel, overlays, swipe galleries, splash animation.

`<write here>`

---

## 4. Ease of use and navigation *(100 words)*

> Four-item bottom nav — Home, Event, Music, Shop — carried on every screen, matching the four campaign icons. Argue *why four*: fewer items mean larger tap targets and less cognitive load, and the four map cleanly onto what a visitor actually wants.
>
> Note that every screen is within three taps of Home, and that login is never required to reach the map, schedule or transport — the things a visitor needs urgently while standing at a gate.

`<write here>`

---

## 5. Accessibility *(120 words)*

> **The strongest section available to you, because it can be evidenced.** Quote the measured figures rather than claiming good intent:
>
> | Foreground on background | Ratio |
> |---|---|
> | White on `#040606` | **20.31:1** |
> | White on `#461E3C` | **13.89:1** |
> | Mint on `#461E3C` | **8.20:1** |
>
> WCAG 2.1 AA requires 4.5:1 for body text; these clear AAA at 7:1. State the rule the team adopted: **text and meaningful icons in white or mint; magenta as decoration only**, because magenta on black measures 2.98:1 and fails.
>
> Then cover the accessibility settings screen — text size, high contrast, reduced motion, captions — and the typography decision: pixel type for display, accessible sans for body, because pixel faces degrade under magnification. Note tap targets ≥44px.
>
> Cite WCAG. See [06-References.md](06-References.md).

`<write here>`

---

## 6. Languages and international visitors *(90 words)*

> The brief stresses connecting with "global and international visitors" in Task 1 and again in the Expectations.
>
> Cover the language selection screen, why languages appear **in their own script** rather than translated, and why the chosen set reflects both the festival's Italian roots and Melbourne's actual demographics. Then the virtual visitor screen: live stream, timezone-converted schedule, captions — someone in Lecce watching a Melbourne festival at their own hour.

`<write here>`

---

## 7. Variety of ages *(60 words)*

> A named requirement. How does the app serve a teenager, a 40-year-old, a grandparent? Consider text scaling, the familiarity of the four-item nav pattern, the retro pixel aesthetic reading as playful to younger users while staying legible, and whether workshops are family-friendly.

`<write here>`

---

## 8. Social and cultural demands *(80 words)*

> The most interesting section, and the one with the most room to demonstrate judgement.
>
> Tarantism was a real phenomenon bound up with poverty, gender and distress in rural Puglia — not a costume. How did the team handle adapting it into a festival brand? Why did the app lead with three history screens rather than treating the spider as decoration? What does staging it in Melbourne mean for the Italian-Australian community, and for audiences meeting pizzica for the first time?

`<write here>`

---

## 9. Special needs *(80 words)*

> A named requirement, distinct from general accessibility.
>
> Cover what the map marks: accessible entrances, step-free routes, accessible toilets, first aid, **quiet zones** for sensory needs. Then transport — accessible parking, step-free station access, companion cards, assistance animals. Then the settings screen: reduced motion for vestibular sensitivity, captions for deaf and hard-of-hearing visitors. Note that the digital ticket works offline, since connectivity at a crowded venue is unreliable and a ticket that needs signal is not a ticket.

`<write here>`

---

## 10. Conclusion *(60 words)*

> What the app achieves, and what you would do with more time. Name a genuine limitation — it reads as judgement, not weakness.

`<write here>`

---

## Before submitting

- [ ] Over 500 words *(target ~900)*
- [ ] Every member has a paragraph in their own words
- [ ] All six named themes addressed **by name**: accessibility · languages · variety of ages · social and cultural demands · special needs · ease of use
- [ ] Contrast ratios quoted with figures
- [ ] Harvard referencing throughout — see [06-References.md](06-References.md)
- [ ] AI use documented in [05-AI-Use-Log.md](05-AI-Use-Log.md)
- [ ] Reads as your own writing
- [ ] Exported as PDF with the LCIM Cover Sheet
