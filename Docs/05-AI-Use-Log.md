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

**The last column carries the marks.** Documenting a prompt shows you used a tool. Documenting what you did with the output shows the interpretation and conceptual development the scale actually asks for. Entries below marked `<add>` are deliberately unfinished: they are the places where Lorenzo's own judgement has to go on the record, and they cannot be written by the tool being logged.

---

## Tools used

| Tool | Version / access | Used for |
|---|---|---|
| Claude Opus (Anthropic) | Claude Code, CLI agent | Brief analysis, asset audit, app implementation, testing |
| Figma REST API | `GET /v1/files` | Reading the existing wireframe structure and prototype links |
| Python 3.12 + Pillow | local | Asset resizing, colour analysis, contact sheets |
| `segno` | 1.6 | Generating the scannable QR on the digital ticket |
| `puppeteer-core` | 25.5 | Driving Chrome for the automated click-through test |
| Google Fonts | SIL OFL | Silkscreen, Atkinson Hyperlegible |

---

## Log

### Session 1 — 9 August 2026 · planning and audit

| # | Date | Member | Tool | Purpose | Prompt / method | Output | **What we did with it** |
|---|---|---|---|---|---|---|---|
| 1 | 2026-08-09 | Lorenzo | Claude Opus | Extract and interpret the assessment brief | Asked it to read `Assessment_Task_3_LABG204_20262.pdf` and summarise the five tasks and submission requirements | Structured breakdown of Tasks 1–5, mandatory requirements, rubric criteria | Cross-checked against the PDF ourselves; used it to structure [ROADMAP.md](../ROADMAP.md). `<add your own verification note>` |
| 2 | 2026-08-09 | Lorenzo | Claude Opus | Audit the brand assets | Asked it to read the logo, icons, backgrounds and merch renders and describe the visual identity | Identified the pixel wordmark, spider mark, palette, and the icon→background→nav mapping | Confirmed the four-item nav model we had already wireframed. `<add>` |
| 3 | 2026-08-09 | Lorenzo | Claude Opus | Test the palette for accessibility | Asked it to compute WCAG 2.1 contrast ratios across our colour combinations | White on `#040606` = 20.31:1; mint on `#461E3C` = 8.20:1; magenta on black = **2.98:1, fails AA** | Adopted the rule that text is white or mint only and magenta is decorative. `<add>` |
| 4 | 2026-08-09 | Lorenzo | Claude Opus + Figma REST API | Audit the wireframe | Pulled file `f3PA95klt9cu4tpNdiOkGK` and analysed frames, content and prototype connections | 15 screens + 2 overlays; full connection graph | Confirmed we had cleared the 10-screen minimum, and gave us the wiring map in [03-Prototype-Wiring.md](03-Prototype-Wiring.md). `<add>` |
| 5 | 2026-08-09 | Lorenzo | Claude Opus | Find prototype defects | Ran a reachability analysis over the connection graph | One orphan screen (About), two dead-end overlays, a Home button mis-wired on two screens | Logged as Task 4 fixes. We had not noticed the orphan by clicking through. `<add>` |
| 6 | 2026-08-09 | Lorenzo | Claude Opus | Gap-check the design against the brief | Asked which brief-mandated screens were missing | Six: splash, artist profiles, digital ticket, language select, accessibility settings, virtual visitor | Accepted all six. `<add — did you agree with all six? why?>` |
| 7 | 2026-08-09 | Lorenzo | Claude Opus | Draft project documentation | Asked it to write the README, roadmap and document scaffolds | This repository's documentation | Scaffolds only — all submitted content is written by us. `<add>` |

### Session 2 — 11 August 2026 · building the prototype

| # | Date | Member | Tool | Purpose | Prompt / method | Output | **What we did with it** |
|---|---|---|---|---|---|---|---|
| 8 | 2026-08-11 | Lorenzo | Claude Opus + `pypdf` | Test whether the brief actually requires Figma | Extracted the full text of the brief and searched it for the software requirement rather than relying on the earlier summary | p.2: *"The recommended software for this task is Figma, though other appropriate software is acceptable."* p.3: *"A link may be provided if the prototype is online."* | This changed the whole approach. Both quotations are the licence for building a coded app instead of a Figma prototype. `<add — was this your call? what convinced you?>` |
| 9 | 2026-08-11 | Lorenzo | Claude Opus | Establish whether AI could build the design *inside* Figma | Asked it to assess three routes: the Figma REST API, the Figma Plugin API, and building in code | REST API is read-only for design content — there is no endpoint that creates a frame. Plugin API can author fully but runs locally, so the AI would be writing blind. Code can be built, rendered and iterated with the output actually visible | Chose code. The deciding argument was not capability but feedback: a design tool you cannot see the output of produces work that is technically correct and visually dead. `<add — do you agree? what would have changed your mind?>` |
| 10 | 2026-08-11 | Lorenzo | Claude Opus | Choose a display typeface | Built a specimen page setting real UI strings in Silkscreen, Press Start 2P and Pixelify Sans beside the campaign wordmark, rendered it and compared | Press Start 2P matches the wordmark's weight best but is too wide — screen titles wrap to three lines at 412px and it is unreadable at 12px. Pixelify Sans is most legible but reads as a pixel-flavoured sans. Silkscreen survives 12px labels and is space-efficient | Chose Silkscreen for display, and reused the wordmark PNG itself wherever the logo appears so brand consistency does not depend on a font match. `<add — which did you prefer, and why?>` |
| 11 | 2026-08-11 | Lorenzo | Claude Opus | Choose a body typeface that supports the accessibility argument | Asked for a body face that would make Task 5's accessibility claim evidenced rather than asserted | Atkinson Hyperlegible — drawn by the Braille Institute specifically for low-vision readers, with disambiguated letterforms | Adopted. It converts "we considered accessibility" into a decision with a citable source behind it. Pixel type is now restricted to headings and short labels at 14px and above, and never sets running text. `<add>` |
| 12 | 2026-08-11 | Lorenzo | Claude Opus + Pillow | Prepare the campaign art for a phone | Wrote `tools/build-assets.py` to resize and convert everything | 20MB of print-resolution source art reduced to 0.45MB of WebP. **Finding:** the nav icons are white artwork on an *opaque* `#1D1D1B` square, not on transparency — they would have rendered as visible grey tiles | Promoted luminance to the alpha channel so the icons became clean silhouettes CSS can recolour. `<add>` |
| 13 | 2026-08-11 | Lorenzo | Claude Opus | Measure contrast against the built app, not the swatches | Wrote `tools/contrast.py` to compute WCAG 2.1 ratios for every text/background pair the app actually uses, flattening semi-transparent text against its background first | 14 pairs, all passing; full table in [07-Contrast-Report.md](07-Contrast-Report.md). It confirmed the session-1 figures **and caught an error**: mint on the ground colour is **11.99:1**, not the 14.06:1 that had been written into the code | The wrong figure would have gone into the rationale as a quoted measurement. Generating the report from the live palette means it cannot drift from the design again. `<add>` |
| 14 | 2026-08-11 | Lorenzo | Claude Opus | Decide how to build the Flemington map | Weighed embedding a map service against drawing original vector artwork | Embedding is accurate and free, but needs attribution, breaks the visual identity the submission is marked on, and fails with no signal on a festival site | Drew it as original SVG — course, Straight Six, grandstands, Maribyrnong, Epsom Road, station, Nursery car park. Pin type is carried by shape as well as colour so the map reads without colour vision. `<add — how much of the layout did you direct?>` |
| 15 | 2026-08-11 | Lorenzo | Claude Opus + `segno` | Make the digital ticket's QR real | Generated a scannable QR encoding the ticket reference rather than drawing a decorative block pattern | Working QR encoding `NDT-2026-004718` | A fake QR would have looked right and failed the one thing the screen exists to do. It also forced an honest design decision: the QR panel is the only light surface in the app, because a dark QR will not scan. `<add>` |
| 16 | 2026-08-11 | Lorenzo | Claude Opus + `puppeteer-core` | Test Task 4's "no dead ends" claim instead of asserting it | Wrote `tools/clickthrough.mjs` to drive Chrome through every route: render each screen, resolve every link, walk the graph for orphans, open and Escape every overlay, measure every target | **29 issues.** Most seriously, the section background artwork had never loaded on any screen — every screen had been rendering flat black. Also 21 targets below the 44px minimum we had claimed to meet | All fixed; the test now passes clean. The background bug had survived every visual review because the scrim made the screens look intentional. `<add — what does that tell you about reviewing your own work?>` |
| 17 | 2026-08-11 | Lorenzo | Claude Opus | Produce the Task 2 screen deliverable | Wrote `tools/capture.py` to drive Chrome through all 21 routes and export 412×917 @2x PNGs | [../Assets/Screens/](../Assets/Screens/) plus a contact sheet, regenerated on demand | The deliverable is now a build output rather than 21 manual exports, so it cannot fall out of date with the app. `<add>` |

---

## Experiments that did not work

> Scale 5 rewards experimentation, and failed attempts evidence it better than successes.

| # | Date | Member | Tool | What we tried | Why it failed | What we learned |
|---|---|---|---|---|---|---|
| 1 | 2026-08-09 | Lorenzo | Claude Opus | Reading the Figma file directly from its share URL | Figma renders client-side; fetching the URL returns an empty shell with no design content. Not a permissions problem — there is no text in the page to read | Automated tools need the REST API or exported files. Sharing a link is not the same as making something machine-readable |
| 2 | 2026-08-11 | Lorenzo | Claude Opus + Figma REST API | Having the AI build the final design directly into the Figma file | The REST API has no write endpoint for design nodes. It can read a file and post comments; it cannot create a frame | "Give the AI access to my Figma" does not mean what it sounds like. Authoring requires a plugin running inside the editor |
| 3 | 2026-08-11 | Lorenzo | Chrome headless | Capturing screens by setting the browser window to 412×917 | Windows enforces a minimum Chrome window width of roughly 490px, so the viewport was never 412 and every capture came out stretched | Fixed by pinning the frame to 412×917 in CSS under a `?capture=1` flag and cropping a known region. Do not trust a tool's stated dimensions — measure the output |
| 4 | 2026-08-11 | Lorenzo | CSS | Tinting the pixel icons to mint with a CSS `filter` chain | A generated filter chain only *approximates* a target colour, and it silently tinted the icons' opaque background square along with the artwork | Replaced with `mask-image` filled by `currentColor`: one asset, any colour, exact. Approximation is not a technique, it is a deferred bug |
| 5 | 2026-08-11 | Lorenzo | CSS | Setting image URLs through inline CSS custom properties | A relative `url()` inside a custom property resolves against **the stylesheet that substitutes it**, not the document — so `assets/icons/home.png` was requested from `/app/css/` and 404'd into an empty mask. Every isolated test passed, because in a test page the CSS lives in the document and both paths happen to coincide | This bug occurred **twice**: once in the nav icons, and again in the screen backgrounds, where it went unnoticed for hours because the missing artwork still looked deliberate. A test that reproduces the real environment is worth more than five tests that reproduce a convenient one |
| 6 | 2026-08-11 | Lorenzo | `puppeteer-core` | First run of the automated link-graph test | It reported 8 orphaned screens. The app was fine — the *test* was wrong, because it read only each screen's own markup and ignored the bottom navigation the router adds | A failing test is a claim, not a verdict. Confirm the failure is real before changing the thing it points at |

---

## Reflection

> Required: "you must still demonstrate your own reflective thinking and creative intent." **Write this yourself.** Two or three paragraphs, in your own words.

**Where AI helped most**
> Candidates: the contrast measurement (which caught a wrong figure that would otherwise have been quoted in the rationale), and the automated click-through (which found a rendering fault that had survived every visual check). Both share a shape — they are checks a person cannot reliably perform by looking. Say whether you agree, and what else earned its place.

`<write here>`

**Where we overrode it**
> The most valuable entries in this section. Where did you reject a suggestion? Where was the tool wrong, generic, or tone-deaf about the tarantism material? Note that the story-chapter prose in the app is still scaffold — the decision about how to write about the *tarantate* is yours, and the honest answer about how much of it you took and how much you rewrote belongs here.

`<write here>`

**What stayed entirely ours**
> The concept, the visual identity from Task 2, the Dionysian → *tarantate* → de Martino narrative, the decision to stage it at Flemington, and the judgement about what a festival owes a healing ritual it has borrowed from.

`<write here>`

**On building with AI rather than drawing by hand**
> This project made an unusual choice: the final design is code, and most of that code was written by an AI under direction. That is permitted under Scale 5 and the brief's own wording on software, but it changes what "your own work" means and you should say so plainly rather than leave a marker to wonder. What did you direct? What did you reject? What would you have done differently by hand?

`<write here>`

---

## Notes

**Citing AI in Harvard style** — format from the brief, p.10:

> Anthropic. (2026). *Claude Opus*. Viewed 11 August 2026 [Large language model]. https://claude.ai/

Add every tool in the table above to [06-References.md](06-References.md), including the open-source libraries and typefaces.

**Security note, for transparency.** In session 1 a Figma personal access token was briefly committed to this public repository so an AI tool could read the design file. It was **revoked** as soon as it was identified, the file was deleted, and a `.gitignore` now blocks token, key and `.env` files. Recorded here because the same principle governs this whole document: what happened, what was wrong with it, and what was done about it.
