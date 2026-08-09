# AI Use Log

**Required by AI Assessment Scale 5 — AI Exploration.**

The brief states:

> You should use AI to explore new insights, develop solutions, and investigate alternative creative approaches in collaboration with your academic. Experimentation is expected and encouraged.
>
> However:
> - You must clearly document all AI tools, prompts, experiments, and findings.
> - You must still demonstrate your own reflective thinking and creative intent.
> - Final outcomes must show your interpretation, analysis, and conceptual development — not just raw AI outputs.

**Log as you go.** A log assembled in Week 12 from memory is thin, vague and obvious. Scale 5 expects experimentation — including the attempts that failed, which are often the more interesting entries.

**The last column carries the marks.** Documenting a prompt shows you used a tool. Documenting what you did with the output shows the interpretation and conceptual development the scale actually asks for.

---

## Log

| # | Date | Member | Tool | Purpose | Prompt / method | Output | **What we did with it** |
|---|---|---|---|---|---|---|---|
| 1 | 2026-08-09 | `<Name>` | Claude Opus (Anthropic) | Extract and interpret the assessment brief | Asked it to read `Assessment_Task_3_LABG204_20262.pdf` and summarise the five tasks and submission requirements | Structured breakdown of Tasks 1–5, mandatory requirements, rubric criteria | Cross-checked against the PDF ourselves; used it to structure [ROADMAP.md](../ROADMAP.md). `<add your own verification note>` |
| 2 | 2026-08-09 | `<Name>` | Claude Opus (Anthropic) | Audit the brand assets | Asked it to read the logo, icons, backgrounds and merch renders and describe the visual identity | Identified the pixel wordmark, spider mark, palette, and the icon→background→nav mapping | Confirmed the four-item nav model we had already wireframed. `<add>` |
| 3 | 2026-08-09 | `<Name>` | Claude Opus (Anthropic) | Test the palette for accessibility | Asked it to compute WCAG 2.1 contrast ratios across our colour combinations | White on `#040606` = 20.31:1; mint on `#461E3C` = 8.20:1; magenta on black = **2.98:1, fails AA** | Adopted the rule that text is white or mint only and magenta is decorative. Figures quoted in the rationale — a measured claim rather than an assertion. `<add>` |
| 4 | 2026-08-09 | `<Name>` | Claude Opus + Figma REST API | Audit the wireframe | Pulled file `f3PA95klt9cu4tpNdiOkGK` and analysed frames, content and prototype connections | 15 screens + 2 overlays; full connection graph | Confirmed we had cleared the 10-screen minimum, and gave us the wiring map in [03-Prototype-Wiring.md](03-Prototype-Wiring.md). `<add>` |
| 5 | 2026-08-09 | `<Name>` | Claude Opus (Anthropic) | Find prototype defects | Ran a reachability analysis over the connection graph | Found one orphan screen (About), two dead-end overlays, and a Home button mis-wired on two screens | Logged as Task 4 fixes. We had not noticed the orphan by clicking through. `<add>` |
| 6 | 2026-08-09 | `<Name>` | Claude Opus (Anthropic) | Gap-check the design against the brief | Asked which brief-mandated screens were missing | Identified six: splash, artist profiles, digital ticket, language select, accessibility settings, virtual visitor | Accepted all six. Three are named in the brief; three answer Task 5 themes we had not designed for. `<add — did you agree with all six? why?>` |
| 7 | 2026-08-09 | `<Name>` | Claude Opus (Anthropic) | Draft project documentation | Asked it to write the README, roadmap and document scaffolds | This repository's documentation | Scaffolds only — all submitted content is written by us. `<add>` |
| 8 | `<date>` | `<Name>` | `<tool>` | `<purpose>` | `<prompt>` | `<output>` | `<your interpretation>` |

---

## Experiments that did not work

> Scale 5 rewards experimentation, and failed attempts evidence it better than successes. Record the approaches you abandoned and why.

| # | Date | Member | Tool | What we tried | Why it failed | What we learned |
|---|---|---|---|---|---|---|
| 1 | 2026-08-09 | `<Name>` | Claude Opus | Reading the Figma file directly from its share URL | Figma renders client-side; fetching the URL returns an empty shell with no design content. Not a permissions problem — there is no text in the page to read | Automated tools need the REST API or exported files. Sharing a link is not the same as making something machine-readable |
| 2 | `<date>` | `<Name>` | `<tool>` | `<what>` | `<why>` | `<learning>` |

---

## Reflection

> Required: "you must still demonstrate your own reflective thinking and creative intent." Write this yourselves, at the end. Two or three paragraphs.

**Where AI helped most**
> The contrast analysis and the prototype reachability check produced findings we could act on and would have been slow to reach manually. Say whether you agree, and what else earned its place.

`<write here>`

**Where we overrode it**
> The most valuable entries in this section. Where did the team reject an AI suggestion? Where was it wrong, generic, or culturally tone-deaf about the tarantism material? Overriding a tool demonstrates judgement.

`<write here>`

**What stayed entirely ours**
> The concept, the visual identity, the Dionysian → *tarantate* → de Martino narrative, the decision to stage it at Flemington, every design decision in Figma.

`<write here>`

---

## Notes

**Citing AI in Harvard style** — format from the brief, p.10:

> Anthropic. (2026). *Claude Opus*. Viewed 9 August 2026 [Large language model]. https://claude.ai/

Add every tool used to [06-References.md](06-References.md).

**Security note, for transparency.** During the session above, a Figma personal access token was briefly committed to this public repository so an AI tool could read the design file. It was **revoked** as soon as it was identified, and the file removed. Recorded here because the same principle governs this whole document: what happened, what was wrong with it, what was done about it.
