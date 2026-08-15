# References — Harvard Style

**Required by the brief:** "All written content, research notes, and image sources must follow Harvard Referencing Style. Ensure you cite all external materials, including visual references, academic texts, or online sources."

> ⚠️ **Read this before using anything below.**
>
> Entries are marked **✔ verified in the build** or **⚠ lead — verify**.
>
> **✔** means the item is genuinely used by this project and the details are known and checkable — a typeface file in the repository, a library in `package.json`, a standard with a stable URL.
>
> **⚠** means it is a *starting point*, not a citation. The author, year, publisher, translator and edition all vary between printings, and some of these were identified from general knowledge rather than from a copy in hand. **Find the work, read it, and verify every detail against the copy you actually used.** Citing a source you have not read is an academic integrity problem, and inventing publication details is worse than omitting the source.
>
> Delete anything you do not use.

---

## Harvard format reminders

From the brief, p.10.

**Book**
> Smith, J. (2005). *An Introduction to Psychology*. London: Routledge.

**Website**
> Jones, M. (2018). *The Effects of Climate Change on Biodiversity*. National Geographic. Viewed on 23 February 2023. https://www.nationalgeographic.com/...

**AI tool**
> OpenAI. (2023). *ChatGPT*. Viewed 17 December 2025 [Large language model]. https://chat.openai.com/...

---

## 1. Tarantism, pizzica and Salento

The three story screens carry the most factual claims in the project. This is the section most exposed on referencing.

> **Status changed 15 August 2026.** The screens now carry **Lorenzo's prose**, not scaffold. That closes the biggest gap in the project and opens a smaller, sharper one: the chapters currently cite **one** source each — the documentary below — because that is the only source there is evidence of having been used. Every book in this section is still unread, and the screens honestly say so. Adding a book to a chapter's `cite` array in `app/js/data.js` is what turns the reading into a visible claim, so **do the reading first, then add the key**.

> 📋 **See [08-Story-Claims-Audit.md](08-Story-Claims-Audit.md) before reading any of these.** It takes every assertion in the three chapters and says which source has to carry it — including the eleven specific things to read *for*. It turns three hundred pages into a targeted search.

**✔ Bibliographic details verified 13 August 2026** *(details only — the books still have to be read)*

- De Martino, E. (2005). *The Land of Remorse: A Study of Southern Italian Tarantism*. Translated and annotated by D.L. Zinn, foreword by V. Crapanzano. London: Free Association Books. (First published as *La terra del rimorso: Contributo a una storia religiosa del Sud*. Milan: Il Saggiatore, 1961.)
  - *The foundational ethnography and the source behind story chapter 3. **The June 1959 expedition date used in the app is confirmed**, as is the interdisciplinary team — a psychiatrist, a psychologist, an ethnomusicologist and a social anthropologist. Translator, foreword, original title and both publishers verified.*

- Lüdtke, K. (2009). *Dances with Spiders: Crisis, Celebrity and Celebration in Southern Italy*. New York and Oxford: Berghahn Books. Epistemologies of Healing series, vol. 4.
  - *The modern revival and the festival economy — directly relevant to a fictional festival built on the tradition, and to the "a festival is not a cure" argument in chapter 3. **Her term is "neo-tarantism"** — use it. Series and volume verified.*

**⚠ The film — the one source the chapters actually cite**

Lorenzo's draft ends with a YouTube link. It is the only source there is evidence of, so it is the only key in the `cite` arrays. Its title was confirmed on 15 August 2026:

- *La Taranta — Ernesto de Martino* [Video]. YouTube. Viewed 15 August 2026. https://www.youtube.com/watch?v=5pEEtmE8CX8
  - ⚠ **Incomplete, and it must not be submitted like this.** A Harvard entry for a video needs the **uploader** and the **upload year**, and this has neither — the page has them, they just have to be read off it. Fill in `<uploader>` and `<year>`.
  - ⚠ **Check what you are actually citing.** A subtitled upload of a documentary is not the documentary. If this is a film with a director, a year and a production company, cite *the film* and note the YouTube upload as where you viewed it. That is a stronger citation and a marker will read it as one. If it is an original upload, cite it as a video. **Do not guess** which — open the page and look.
  - *The `cite` key for this entry is `lataranta-film` in `app/js/data.js`.*

- Dodds, E.R. (1951). *The Greeks and the Irrational*. Berkeley: University of California Press. Sather Classical Lectures, vol. 25.
  - *Moved up from §2 because chapter 1 rests on it. **Chapter 3, "The Blessings of Madness", is the relevant chapter** — you do not need the whole book. Series and volume verified.*

**⚠ Still a lead**

- Rouget, G. (1985). *Music and Trance: A Theory of the Relations between Music and Possession*. Chicago: University of Chicago Press.
  - *On the relationship between music and trance states generally. Useful for the claim that the music is doing the work, not accompanying it. Originally published in French — check which edition you have. Not verified; drop it if you do not read it.*

**⚠ Still to find**

| Topic | Needed for | Found? |
|---|---|---|
| Pizzica as a music and dance form | Music screens, artist bios | ⬜ |
| The *tarantate* — gender, poverty and social context | Story 2, cultural sensitivity | ⬜ |
| The real *Notte della Taranta*, Melpignano | Concept plan — the acknowledged inspiration | ⬜ |
| Italian-Australian community in Melbourne, post-war emigration from Puglia | Concept plan, About screen | ✔ **partly** — see below |
| The tamburello — construction and playing technique | Merch, workshop content | ⬜ |
| The *pumo* — Apulian ceramic tradition | Merch | ⬜ |

> **Cite the real festival.** *La Notte della Taranta* in Melpignano, Salento, is an actual annual event. This project is a fictional festival borrowing its name and tradition. Acknowledging that explicitly is both good practice and a far better look than appearing not to know it exists.

**✔ Verified 13 August 2026 — the About screen's demographic claim**

- Victorian Government. *Italian community profile*. Viewed 13 August 2026. https://www.vic.gov.au/italian-community-profile
  - *"There are **384,688 people in Victoria who have Italian ancestry**" and 64,796 born in Italy, both from the 2021 Census. This is the citation the About screen now rests on.*

- Australian Bureau of Statistics. (2022). *Greater Melbourne, 2021 Census All persons QuickStats*. Viewed 13 August 2026. https://www.abs.gov.au/census/find-census-data/quickstats/2021/2GMEL
  - *Supporting: Greater Melbourne population 4,917,750, and Italy is a top response for country of birth of father at 163,063 (3.3%) — a useful second-generation proxy, and arguably the more interesting number for a festival aimed at descendants rather than migrants.*

> **The superlative was replaced, not sourced.** The About screen said Melbourne holds *"one of the largest Italian-descended populations outside Italy"*. That is probably true but it is a **ranking claim**, and ranking claims need a comparative source across every country — which does not exist in a citable form. It now states the Census figure instead. A verifiable number is worth more than an unverifiable superlative, and it cost nothing to make the swap.
>
> ⚠ **One caveat to carry into the writing:** 384,688 is a **Victoria-wide** figure, and the screen introduces it under the heading "Why Melbourne". Greater Melbourne holds most but not all of it. If you want to be strict, either say "Victorians" in the surrounding prose or find the Greater Melbourne ancestry figure in ABS TableBuilder. The screen currently says "Victorians", which is accurate — keep it that way.

---

## 2. Dionysian and classical sources

For story chapter 1.

**⚠ Leads**

- Dodds, E.R. (1951). — **moved to §1**, since chapter 1 rests on it. Details verified there.

- Burkert, W. (1985). *Greek Religion*. Trans. J. Raffan. Cambridge, MA: Harvard University Press.
  - *General reference on Dionysian cult practice. **Not verified** — this title has multiple printings and a UK Blackwell edition, so check the title page of the copy you use.*

- Euripides. *The Bacchae*. `<add your edition, translator and year>`

> **Handle the continuity claim carefully.** The link between ancient Dionysian rites and Apulian tarantism is **debated, not settled** — de Martino himself is cautious about it. The app's chapter 1 currently says "what matters for this festival is the structure, not the spectacle", which sidesteps the claim rather than making it. Keep it that way, or make the claim and hedge it explicitly. Presenting continuity as established fact is the kind of overreach a marker with subject knowledge will catch, and hedging it properly demonstrates the "analyse and synthesise complex information" the rubric rewards.

---

## 3. Accessibility and standards

Supports the rationale's accessibility section and [07-Contrast-Report.md](07-Contrast-Report.md).

**✔ Verified — used in the build**

- W3C. (2018). *Web Content Accessibility Guidelines (WCAG) 2.1*. W3C Recommendation, 5 June 2018. Viewed `<date>`. https://www.w3.org/TR/WCAG21/
  - *The standard every contrast ratio in this project was measured against, and the source of the success criteria named in the contrast report: 1.4.3, 1.4.4, 1.4.11, 2.1.1, 2.4.7, 2.5.5, 2.3.3, 3.3.2, 4.1.3. WCAG 2.2 superseded 2.1 in 2023 — cite whichever you actually worked to. This project worked to 2.1.*

**⚠ Still to find**

| Topic | Needed for | Found? |
|---|---|---|
| Legibility research behind Atkinson Hyperlegible | Typeface decision | ⬜ |
| Designing for vestibular disorders / reduced motion | Settings screen | ⬜ |
| Captioning standards for live streaming | Virtual visitor screen | ⬜ |
**✔ Verified 13 August 2026 — the two named schemes**

- Victorian Government, Department of Families, Fairness and Housing. *Companion Card*. Viewed 13 August 2026. https://www.companioncard.vic.gov.au/
  - *The scheme is real and the app's use of it is accurate. The card is for people with a significant, permanent disability who need attendant care support to participate in community activities. **The nuance that matters:** only businesses that are **affiliates** of the scheme provide the second ticket free — so the app now says the festival "is a Companion Card affiliate" rather than implying the card works everywhere by default. Companions also travel free on Victorian public transport at all times, which is why it appears on the transport screen as well as the ticket screen.*

- Changing Places Australia. *Why Changing Places*. Viewed 13 August 2026. https://changingplaces.org.au/why-changing-places/
  - *Also real, and the app's description matches the specification: "a height-adjustable adult-sized change table, a constant-charging ceiling track hoist system, a centrally-located peninsula toilet, additional circulation space more than standard accessible toilets, an automatic door with a clear opening of 950 mm at a minimum, and a privacy screen." The app names the hoist and the adult change table, which is the right level of detail for a map pin.*
  - *Useful for the rationale: Australia was the first country to regulate for these facilities in its building code — the **National Construction Code 2019** requires Accessible Adult Change Facilities, based on Changing Places designs, in certain classes of public building. That turns the map pin from a nice gesture into a code-referenced decision.*

- Australian Building Codes Board. (2019). *National Construction Code 2019, Specification F2.9 — Accessible adult change facilities*. Viewed 13 August 2026. https://ncc.abcb.gov.au/editions/2019-a1/ncc-2019-volume-one-amendment-1/section-f-health-and-amenity/specification-f29
  - ⚠ *Optional. Cite only if you actually use the NCC point in the rationale. NCC 2022 has it at Specification 27 — cite whichever edition you read.*

---

## 4. Venue and location

The map is **original artwork**, not a reproduction, which removes the image-licensing problem. The underlying geography is still a factual claim.

**✔ Verified 13 August 2026 — and three claims were wrong**

- Victoria Racing Club. *Getting to Flemington*. Viewed 13 August 2026. https://www.vrc.com.au/visit-us/plan-your-visit/getting-to-flemington/
- Yarra Trams. *Route 57 — West Maribyrnong to Flinders Street Station*. Viewed 13 August 2026. https://yarratrams.com.au/route-guides/route-57

> **This section previously flagged the transport screen as "the weakest unsourced content in the project". Checking it found three factual errors, one of them an accessibility claim that was the exact reverse of the truth.** All three are now corrected in the app.
>
> | The app said | The sources say | Now says |
> |---|---|---|
> | "Route 57 is served by **low-floor trams**. The Epsom Road stop is a **level-access platform stop**." | Yarra Trams: *"This route is not currently serviced by low-floor trams."* Stop 30 is not among the route's level-access stops. VRC: *"Route 57 does not operate low-floor trams. Passengers using mobility aids are advised to take the train to Flemington Racecourse for easier access."* | Route 57 does not run low-floor trams and Stop 30 is not level-access; mobility-aid users are directed to the train |
> | Event trains "direct from **Flinders Street**" | VRC: *"Metro trains run directly between **Southern Cross** Station and Flemington Racecourse on all race days"* | Southern Cross |
> | "every 30 minutes on the **Night Network**" | Night Network trams run on routes 19, 67, 75, 86, 96 and 109 only. **Route 57 is not a Night Network route.** | States plainly that route 57 is not a Night Network route and to return by train or shuttle |
>
> **Worth a sentence in the rationale.** The corrected screen is *better design*, not just more accurate: it now routes mobility-aid users to the option that actually works, which is what the venue itself advises. An accessibility feature that reassures falsely is worse than no feature.
>
> Service **frequencies and last-service times remain invented** for a fictional event. The transport screen now carries a visible note saying so — routes, stations and accessibility information are real; timings are illustrative.

---

## 5. Design and visual references

### 5a. Third-party artwork in the app — **new, 15 August 2026**

Until 15 August the app contained **no third-party images at all**: every visual was originated for the project, which is why this section used to say "resolved". Three chapter images changed that. They are the only third-party visual content in the build, and each is credited **on the screen it appears on**, not just here.

| # | Image | Chapter | Status |
|---|---|---|---|
| 1 | Dionysus riding a panther — ancient Greek pebble mosaic | 01 | **Public domain.** The work is ancient. |
| 2 | Maenad dancing with cymbals — line engraving | 02 | **Public domain** on its face — a 19th-century book engraving. |
| 3 | Tarantism ritual, Salento — photograph by **Franco Pinna**, Archivio Accademia Nazionale di Santa Cecilia | 03 | **In copyright.** Pinna died in 1978, so Italian copyright runs to 2049. |

**⚠ Two things to finish on these**

- **Entries 1 and 2 need provenance.** Lorenzo supplied them as hash-named files with no source page, so the object identifications above are read off the images themselves and are *not* verified. Before submitting, find where each came from and record: for the mosaic, the site or museum and approximate date; for the engraving, the artist, book and year. `<add>`
- **Entry 3 is the one to be deliberate about.** It is reproduced under fair dealing for criticism and review — the chapter is *about* de Martino's 1959 fieldwork and this photograph documents that fieldwork — and fair dealing requires **sufficient acknowledgement**, which is why the credit is rendered on the screen. That argument is sound for a student prototype and it is worth a sentence in the rationale. If you would rather carry no in-copyright image at all, one line in `app/js/data.js` removes it. `<your decision, and why>`

**✖ Rejected — do not put this back**

- *Puglia — La Pizzica Tarantata* by **Alessandro Morandi** (2011), Flickr, **All Rights Reserved**. Supplied for chapter 2 and deliberately not used. Licence checked 15 August 2026.
  - Three reasons, in order of weight: it is All Rights Reserved with no permission sought; it shows **identifiable living people**; and unlike the Pinna photograph it would have been *decoration* rather than something the chapter discusses, which is exactly the ground fair dealing does not cover. A public-domain engraving carries the same idea at none of the risk. The file is kept at `Assets/Story/menades/flickr-5946384625-*.jpg` so the decision is auditable — it is not built into the app.
  - If you want it, it is licensable: Flickr has a contact link and photographers routinely grant student use. Ask, get it in writing, then it can go in.

### 5b. Reference material and originated assets

The three Figma community UI-kit boards ("Login", "Music", "E-commerce") carried *lorem ipsum*, placeholder products and real copyrighted artists (Imagine Dragons, Odesza). **None of it appears in the built app.** All copy, product data and artist material is original to this project.

| Source | Status |
|---|---|
| Figma community UI kits | Used as wireframe reference only; no content survives into the final app. **The wireframe IS now a submitted Task 1 artefact** (`Assets/Wireframes/wireframe-flow.png`), so the kits must be cited or those boards deleted from the file — see the note below. `<cite here>` |
| Brand assets — wordmark, spider mark, icons, backgrounds, merch renders | Originated by the author in Assessment Task 2. No citation needed; state the provenance in the rationale |
| Flemington site map | Original SVG artwork drawn for this project. Geography referenced from the sources in §4 |
| Artist artwork in the music screens | Generated from the campaign palette — deliberately not photography, so no image licensing is involved |
| Merch renders | Author's own, from Assessment Task 2. Re-rendered 15 August 2026 — brighter key light throughout, and the bottle relabelled |
| Story chapter prose | Author's own, delivered 15 August 2026. `Assets/Story/Story-Text-Lorenzo.docx` is the source of truth |

> **The Figma wireframe is now being submitted**, so this is no longer hypothetical: the UI-kit boards are still in that file and still need citing. Either cite them or delete those boards before exporting again.

---

## 6. Software, typefaces and libraries

**✔ Verified — all present in the repository**

**Typefaces**

- Kottke, J. *Silkscreen* [Typeface]. Distributed under the SIL Open Font License 1.1. Viewed `<date>`. https://fonts.google.com/specimen/Silkscreen
  - *Display face — headings and short labels only, 14px and above. Never sets running text.* ⚠ *Verify the designer attribution and release year on the specimen page.*

- Braille Institute of America. *Atkinson Hyperlegible* [Typeface]. Viewed `<date>`. https://fonts.google.com/specimen/Atkinson+Hyperlegible
  - *Body face throughout. Designed for readers with low vision, with deliberately disambiguated letterforms. **This is the citation the Task 5 accessibility argument rests on** — it turns a preference into a sourced decision, so verify the details and the licence carefully.*

**Libraries and tools** *(development only — none ship in the app, which has no third-party runtime dependency)*

- Heuer, L. *Segno* [Python library]. Viewed `<date>`. https://github.com/heuer/segno — *generates the scannable QR on the digital ticket*
- Google. *Puppeteer* [Software]. Viewed `<date>`. https://pptr.dev/ — *drives Chrome for the automated click-through test and the walkthrough video*
- Clark, A. and contributors. *Pillow* [Python library]. Viewed `<date>`. https://python-pillow.org/ — *asset resizing and colour analysis*
- *FFmpeg* [Software]. Viewed `<date>`. https://ffmpeg.org/ — *encodes the walkthrough video*

> The app itself loads **no third-party code at runtime**. Both typefaces are self-hosted from `app/assets/fonts/`, so the prototype works offline and makes no external requests. That is worth a sentence in the rationale.

---

## 7. AI tools

Every tool in [05-AI-Use-Log.md](05-AI-Use-Log.md) needs an entry here.

- Anthropic. (2026). *Claude Opus* [Large language model]. Viewed 11 August 2026. https://claude.ai/
  - *Used across both sessions: brief analysis, asset audit, contrast measurement, and implementation of the app. Full record in the AI Use Log.*

Cited in the brief itself, p.9:

- Perkins, M., Furze, L., Roe, J. & MacVaugh, J. (2025). *Navigating the generative AI era: Introducing the AI assessment scale for ethical GenAI assessment*. Viewed `<date>`. https://leonfurze.com/2023/12/18/the-ai-assessment-scale-version-2/
  - ⚠ *The brief gives a 2025 date against a URL dated 2023. Check which you are citing — the scale has more than one version.*

---

## 8. Master list

Alphabetical by author surname. Assemble at W-1 and paste into each PDF. **Delete anything you did not read.**

1. Anthropic. (2026). *Claude Opus* [Large language model]. Viewed 13 August 2026. https://claude.ai/
2. Australian Bureau of Statistics. (2022). *Greater Melbourne, 2021 Census All persons QuickStats*. Viewed 13 August 2026. https://www.abs.gov.au/census/find-census-data/quickstats/2021/2GMEL ✔
3. Braille Institute of America. *Atkinson Hyperlegible* [Typeface]. Viewed `<date>`. https://fonts.google.com/specimen/Atkinson+Hyperlegible
4. Burkert, W. (1985). *Greek Religion*. Trans. J. Raffan. Cambridge, MA: Harvard University Press. ⚠
5. Changing Places Australia. *Why Changing Places*. Viewed 13 August 2026. https://changingplaces.org.au/why-changing-places/ ✔
6. Clark, A. and contributors. *Pillow* [Python library]. Viewed `<date>`. https://python-pillow.org/
7. De Martino, E. (2005). *The Land of Remorse: A Study of Southern Italian Tarantism*. Trans. and annotated by D.L. Zinn, foreword by V. Crapanzano. London: Free Association Books. (First published as *La terra del rimorso*. Milan: Il Saggiatore, 1961.) ✔ *details — read it*
8. Dodds, E.R. (1951). *The Greeks and the Irrational*. Berkeley: University of California Press. Sather Classical Lectures, vol. 25. ✔ *details — read ch. 3*
9. `<artist>`. `<year>`. *[Line engraving of a maenad dancing with cymbals]*. `<book or collection>`. ⚠ **Story chapter 2 artwork — provenance not established. Find it or drop the image.**
10. Google. *Puppeteer* [Software]. Viewed `<date>`. https://pptr.dev/
11. Heuer, L. *Segno* [Python library]. Viewed `<date>`. https://github.com/heuer/segno
12. Kottke, J. *Silkscreen* [Typeface]. SIL Open Font License 1.1. Viewed `<date>`. https://fonts.google.com/specimen/Silkscreen ⚠
13. *La Taranta — Ernesto de Martino* [Video]. `<uploader>`, `<year>`. YouTube. Viewed 15 August 2026. https://www.youtube.com/watch?v=5pEEtmE8CX8 ⚠ **The only source the story chapters cite. Title confirmed; uploader and year are not.**
14. Lüdtke, K. (2009). *Dances with Spiders: Crisis, Celebrity and Celebration in Southern Italy*. New York and Oxford: Berghahn Books. Epistemologies of Healing, vol. 4. ✔ *details — read it*
15. Perkins, M., Furze, L., Roe, J. & MacVaugh, J. (2025). *Navigating the generative AI era: Introducing the AI assessment scale for ethical GenAI assessment*. Viewed `<date>`. https://leonfurze.com/2023/12/18/the-ai-assessment-scale-version-2/
16. Pinna, F. `<year>`. *[Photograph of a tarantism ritual, Salento]*. Archivio Accademia Nazionale di Santa Cecilia, Rome. ⚠ **Story chapter 3 artwork — in copyright, reproduced for study with acknowledgement. Confirm the year and the archive's preferred credit line.**
17. `<site or museum>`. *[Pebble mosaic of Dionysus riding a panther]*, `<date>`. ⚠ **Story chapter 1 artwork — provenance not established.**
18. Rouget, G. (1985). *Music and Trance: A Theory of the Relations between Music and Possession*. Chicago: University of Chicago Press. ⚠
19. Victoria Racing Club. *Getting to Flemington*. Viewed 13 August 2026. https://www.vrc.com.au/visit-us/plan-your-visit/getting-to-flemington/ ✔
20. Victorian Government. *Italian community profile*. Viewed 13 August 2026. https://www.vic.gov.au/italian-community-profile ✔
21. Victorian Government, Department of Families, Fairness and Housing. *Companion Card*. Viewed 13 August 2026. https://www.companioncard.vic.gov.au/ ✔
22. W3C. (2018). *Web Content Accessibility Guidelines (WCAG) 2.1*. Viewed `<date>`. https://www.w3.org/TR/WCAG21/
23. Yarra Trams. *Route 57 — West Maribyrnong to Flinders Street Station*. Viewed 13 August 2026. https://yarratrams.com.au/route-guides/route-57 ✔
24. `<add the tarantism and pizzica sources you actually read>`
25. `<Australian Building Codes Board NCC — only if you use the adult change facility point>`

> **Entries 9, 13, 16 and 17 are the new ones and four of them are incomplete.** They are all images or video — the category the brief calls out by name ("including visual references"). An unattributed image in a referencing-assessed piece is the same defect as an unattributed quotation, and it is more visible, because the marker can see it on the screen.

---

## Checklist

- [ ] Every ⚠ entry has been found, read, and its details verified against the copy used
- [ ] Every factual claim on the three story screens is cited
- [x] ~~The Melbourne Italian-descent claim on the About screen is sourced or removed~~ — **superlative replaced with the 2021 Census figure, 13 Aug**
- [x] ~~The transport service patterns are sourced or marked illustrative~~ — **both: infrastructure sourced and three errors corrected, timings marked illustrative on screen, 13 Aug**
- [x] ~~Companion Card and Changing Places are cited or renamed~~ — **both cited from official sources, 13 Aug**
- [ ] Both typefaces are credited and their licences confirmed
- [ ] Every AI tool is listed
- [ ] The real Melpignano festival is acknowledged as the inspiration
- [ ] The Dionysian continuity claim is hedged, not asserted — **now the sharpest open item; see [08-Story-Claims-Audit.md](08-Story-Claims-Audit.md) §"What changed on 15 August"**
- [ ] Consistent Harvard formatting throughout
- [ ] Nothing in the master list is a work that was not actually read
- [ ] **The three chapter images are attributed** — mosaic and engraving traced to a source, Pinna's year and credit line confirmed (entries 9, 16, 17)
- [ ] **The video citation is complete** — uploader and year filled in, and it says whether it cites a film or an upload (entry 13)
- [ ] **The Figma UI kits are cited**, now that the wireframe is a submitted artefact
