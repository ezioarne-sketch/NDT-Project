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

The three story screens carry the most factual claims in the project. This is the section most exposed on referencing, and the prose in those screens is **still scaffold** — it must be rewritten against these sources once read.

**⚠ Core**

- De Martino, E. (1961). *La terra del rimorso*. Milan: Il Saggiatore.
  - English: De Martino, E. (2005). *The Land of Remorse: A Study of Southern Italian Tarantism*. Trans. D.L. Zinn. London: Free Association Books.
  - *The foundational ethnography and the source behind story chapter 3. The 1959 expedition date used in the app comes from here — verify it, and verify the translator and edition against your copy.*

- Lüdtke, K. (2009). *Dances with Spiders: Crisis, Celebrity and Celebration in Southern Italy*. New York: Berghahn Books.
  - *The modern revival and the festival economy — directly relevant to a fictional festival built on the tradition, and to the "a festival is not a cure" argument in chapter 3.*

- Rouget, G. (1985). *Music and Trance: A Theory of the Relations between Music and Possession*. Chicago: University of Chicago Press.
  - *On the relationship between music and trance states generally. Useful for the claim that the music is doing the work, not accompanying it. Originally published in French — check which edition you have.*

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

- Dodds, E.R. (1951). *The Greeks and the Irrational*. Berkeley: University of California Press.
  - *The standard reference on ecstatic and irrational elements in Greek religion. Relevant to the "licensed space for ecstasy" framing in chapter 1.*

- Burkert, W. (1985). *Greek Religion*. Trans. J. Raffan. Cambridge, MA: Harvard University Press.
  - *General reference on Dionysian cult practice.*

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

**✔ Resolved — no third-party visual content remains**

The three Figma community UI-kit boards ("Login", "Music", "E-commerce") carried *lorem ipsum*, placeholder products and real copyrighted artists (Imagine Dragons, Odesza). **None of it appears in the built app.** All copy, product data and artist material is original to this project.

| Source | Status |
|---|---|
| Figma community UI kits | Used as wireframe reference only; no content survives into the final app. `<cite here if the wireframe itself is submitted as a Task 1 artefact>` |
| Brand assets — wordmark, spider mark, icons, backgrounds, merch renders | Originated by the author in Assessment Task 2. No citation needed; state the provenance in the rationale |
| Flemington site map | Original SVG artwork drawn for this project. Geography referenced from the sources in §4 |
| Artist artwork in the music screens | Generated from the campaign palette — deliberately not photography, so no image licensing is involved |
| Merch renders | Author's own, from Assessment Task 2 |

> **If the Figma wireframe is submitted alongside the app**, the UI-kit boards are still in that file and still need citing. Either cite them or delete those boards from the file before submitting it.

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
7. De Martino, E. (2005). *The Land of Remorse: A Study of Southern Italian Tarantism*. Trans. D.L. Zinn. London: Free Association Books. ⚠
8. Dodds, E.R. (1951). *The Greeks and the Irrational*. Berkeley: University of California Press. ⚠
9. Google. *Puppeteer* [Software]. Viewed `<date>`. https://pptr.dev/
10. Heuer, L. *Segno* [Python library]. Viewed `<date>`. https://github.com/heuer/segno
11. Kottke, J. *Silkscreen* [Typeface]. SIL Open Font License 1.1. Viewed `<date>`. https://fonts.google.com/specimen/Silkscreen ⚠
12. Lüdtke, K. (2009). *Dances with Spiders: Crisis, Celebrity and Celebration in Southern Italy*. New York: Berghahn Books. ⚠
13. Perkins, M., Furze, L., Roe, J. & MacVaugh, J. (2025). *Navigating the generative AI era: Introducing the AI assessment scale for ethical GenAI assessment*. Viewed `<date>`. https://leonfurze.com/2023/12/18/the-ai-assessment-scale-version-2/
14. Rouget, G. (1985). *Music and Trance: A Theory of the Relations between Music and Possession*. Chicago: University of Chicago Press. ⚠
15. Victoria Racing Club. *Getting to Flemington*. Viewed 13 August 2026. https://www.vrc.com.au/visit-us/plan-your-visit/getting-to-flemington/ ✔
16. Victorian Government. *Italian community profile*. Viewed 13 August 2026. https://www.vic.gov.au/italian-community-profile ✔
17. Victorian Government, Department of Families, Fairness and Housing. *Companion Card*. Viewed 13 August 2026. https://www.companioncard.vic.gov.au/ ✔
18. W3C. (2018). *Web Content Accessibility Guidelines (WCAG) 2.1*. Viewed `<date>`. https://www.w3.org/TR/WCAG21/
19. Yarra Trams. *Route 57 — West Maribyrnong to Flinders Street Station*. Viewed 13 August 2026. https://yarratrams.com.au/route-guides/route-57 ✔
20. `<add the tarantism and pizzica sources you actually read>`
21. `<Australian Building Codes Board NCC — only if you use the adult change facility point>`

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
- [ ] The Dionysian continuity claim is hedged, not asserted
- [ ] Consistent Harvard formatting throughout
- [ ] Nothing in the master list is a work that was not actually read
