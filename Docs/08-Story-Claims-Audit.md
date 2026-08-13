# Story Chapters — Claim-by-Claim Audit

**Prepared 13 August 2026, for the Friday 14 August rewrite.**

The three story screens carry more factual weight than the rest of the app combined. This document takes every assertion in them and says what kind of claim it is, what has to support it, and what you need to look for when you read.

> **Why this exists.** On 13 August a fact-check of four unsourced claims elsewhere in the app found three errors, one of which — Route 57 running low-floor trams — was an *accessibility* claim that was the exact reverse of the truth. It had survived because it was plausible, specific and never checked. The story chapters are the same category of risk at roughly ten times the volume. Read them with that in mind.

**Read this before the books, not after.** It turns three hundred pages of reading into a search for eleven specific things.

---

## How claims are classified

| Mark | Meaning | What you must do |
|---|---|---|
| ✔ | **Verified** — checked against a source, and the source is cited | Nothing. Use it. |
| ⚠ | **Standard but unread** — almost certainly right, but neither of us has read the page it sits on | Find it in the book. Note the page. If you can't find it, cut the sentence. |
| ◆ | **Interpretive** — your argument, not a fact | No citation needed. But it must be *your* sentence, and it is where the marks are. |
| ✖ | **Wrong or unsupportable** | Already fixed, or listed below as needing a decision. |

---

## Fixed before you start

| Was | Now | Why |
|---|---|---|
| Chapter 3 titled "**Di** Martino and the Modern Age" | "**De** Martino and the Modern Age" | The ethnographer is Ernesto **de Martino**. The wireframe had it wrong and it propagated into the app, the README and the screen spec. Misspelling the name of the person whose book you are citing is the single most visible referencing error available. |

The route id stays `dimartino` so links and test fixtures keep working — only the display title changed.

### One naming decision left to you

Chapter 2 is titled **"Menades and Tarantate"**. *Menades* is neither the English (**maenads**) nor the Italian (**menadi**) — it is the Spanish and Latin plural. The pairing with the Italian *tarantate* suggests you wanted the Italian register, in which case it should be **"Menadi e Tarantate"** or **"Maenads and Tarantate"**.

It is your title and there is a defensible argument for leaving it, but a classicist marking this will notice. **Decide it deliberately rather than by default**, and if you keep it, know why.

---

## Chapter 1 — The Dionysian Cult

Cites: Dodds (1951), Burkert (1985)

| # | The claim | Type | What has to carry it |
|---|---|---|---|
| 1.1 | "The rites of Dionysus gave the ancient Mediterranean a licensed space for ecstasy — a controlled loss of control, held inside ritual rather than outside it." | ⚠ | **Dodds, ch. 3 "The Blessings of Madness"** is the chapter you want. This is close to his actual argument, but "licensed space" is a paraphrase — find the passage and either quote it or restate it in your own terms with a page reference. |
| 1.2 | "Participants danced to exhaustion." | ⚠ | Burkert on Dionysian cult practice. Standard, but check whether the sources describe dancing to exhaustion specifically or ecstatic dance generally — the difference matters if a marker knows the material. |
| 1.3 | "The state they reached had a name and a place in the social order; it was not treated as an illness but as a visit." | ⚠ ◆ | The first half is Dodds. **"Not an illness but a visit" is your framing** — good framing, and it does real work later in chapter 3, but do not present it as something a source says. |
| 1.4 | "What matters for this festival is the structure, not the spectacle: a community, a circle, music that does not stop, and a person at the centre who is permitted to come apart." | ◆ | Entirely yours. **This is the best sentence in the three chapters** and it is doing the most important job in them — see the continuity note below. Keep it. |

### The continuity trap — read this twice

The link between ancient Dionysian rite and Apulian tarantism is **debated, not settled**. De Martino himself is careful about it. A chapter that opens on Dionysus and closes on the Salento is *implying* a continuity claim whether or not it states one.

Chapter 1 currently sidesteps this well: claim 1.4 argues that the **structure** recurs, not that the practice descended. That is the defensible position and it is already in your draft. **The risk is that you strengthen it while rewriting** — a phrase like "the same rite" or "which became" would turn a careful argument into an overreach.

Hedging this properly is not caution, it is the "analyse and synthesise complex information" criterion in the rubric. Say the connection is structural and contested, and you demonstrate more than an author who asserts it.

---

## Chapter 2 — Menades and Tarantate

Cites: de Martino (2005), Lüdtke (2009)

| # | The claim | Type | What has to carry it |
|---|---|---|---|
| 2.1 | "In the Salento the rite reappears under another name." | ◆ ⚠ | "Reappears" is the continuity claim again, in softer clothing. Consider "recurs" or "a comparable structure appears" — same meaning, no descent implied. |
| 2.2 | "A woman bitten — really or symbolically — by the *taranta* falls into a state that only music can lift." | ✔ | Well supported and central to de Martino. **The "really or symbolically" is the important part** and you have it right — the bite was often symbolic, which is precisely what makes it a cultural rather than medical phenomenon. |
| 2.3 | "Musicians are called to the house. They play until the right rhythm is found, and then they keep playing, sometimes for days, while she dances." | ⚠ | All three elements — house, search for the right rhythm, multi-day duration — are documented. Find the passage. The "right rhythm" detail is specific enough that it needs a page. |
| 2.4 | "The *tarantate* were almost always women, and almost always poor." | ⚠ | Strongly supported across the literature, but **quantify it if de Martino gives figures**. "Almost always" invites the question "how many?", and the study is systematic enough to answer it. A number here is worth a paragraph of assertion. |
| 2.5 | "Reading the bite as purely medical misses what the ritual actually carried: grief, labour, confinement, and the absence of any other permitted outlet." | ◆ | Yours, and it is the interpretive core of the chapter. It aligns with de Martino's reading of tarantism as a response to cultural and psychological crisis — **say that it aligns, and cite him for the underlying idea**, but the four nouns are your synthesis. |

**The strongest sentence you could add here** is one that names what the ritual gave a poor woman in rural Puglia that nothing else in her life did: a socially sanctioned occasion to be the centre of attention, to be unwell in public, and to have the community organise itself around her. That is the argument that makes chapter 3's position land.

---

## Chapter 3 — De Martino and the Modern Age

Cites: de Martino (2005), Lüdtke (2009)

| # | The claim | Type | What has to carry it |
|---|---|---|---|
| 3.1 | "In **June 1959** the ethnographer Ernesto de Martino took a team into the Salento to document tarantism while it was still practised." | ✔ | **Verified.** June 1959, Salentine peninsula. The team was interdisciplinary — a psychiatrist, a psychologist, an ethnomusicologist and a social anthropologist. **Add that detail**: it is concrete, checkable, and it supports your point that the study treated tarantism as a cultural institution rather than a medical curiosity. |
| 3.2 | "The resulting study framed it as a cultural institution rather than a curiosity." | ✔ | Verified in substance — de Martino interpreted tarantism as a cultural and psychological crisis addressed through a ritual reintegrating the individual into society. **Use that formulation**; it is sharper than "cultural institution" and it is his. |
| 3.3 | "The ritual as he found it has largely gone." | ⚠ | Lüdtke's territory. She is writing fifty years later on exactly this. Find her account of what remained and when. |
| 3.4 | "What replaced it is a revival — festivals, recordings, staged pizzica — which keeps the music alive while detaching it from the crisis it once answered." | ⚠ ◆ | Lüdtke calls this **neo-tarantism** — use her term, it is more precise than "revival" and it shows you read her. The second half is your argument. |
| 3.5 | "This app sits inside that contradiction rather than pretending it away. A festival is not a cure. Saying so plainly is the honest version of the tribute." | ◆ | **Yours, and the most important three sentences in the project.** Do not soften them in editing. See below. |

### On claim 3.5

This is where the *social and cultural demands* criterion is actually won, and it is worth more attention than any other paragraph you will write this week.

The position is sound. What would make it stronger is **specificity about your own project**: a festival brand built on a healing ritual is extraction of a kind, however carefully handled. Naming the ways your app does and does not mitigate that — it leads with three history chapters rather than spider decoration; it invents its lineup rather than trading on real Salentine performers; but it still sells a tote bag with a spider on it — reads as judgement rather than defensiveness.

Lüdtke is directly useful here. Her book is *about* the commercial and celebrity dimension of the pizzica revival, which is exactly the position your fictional festival occupies.

---

## Bibliographic details — verified 13 August 2026

These are now checked against publisher and library records. **Verified details do not mean verified reading** — you still need the books in hand, and the checklist item is that nothing appears in the master list that you have not read.

- **De Martino, E. (2005).** *The Land of Remorse: A Study of Southern Italian Tarantism*. Translated and annotated by D.L. Zinn, foreword by V. Crapanzano. London: Free Association Books. (First published as *La terra del rimorso: Contributo a una storia religiosa del Sud*. Milan: Il Saggiatore, 1961.) ✔
  - *Translator and foreword confirmed. Zinn's annotations are written for exactly your situation — an English reader meeting de Martino for the first time. Read them.*
- **Lüdtke, K. (2009).** *Dances with Spiders: Crisis, Celebrity and Celebration in Southern Italy*. New York and Oxford: Berghahn Books. Epistemologies of Healing series, vol. 4. ✔
  - *Series and volume confirmed. She attended neo-tarantism events and learned to dance the pizzica — the fieldwork basis is worth a sentence if you use her.*
- **Dodds, E.R. (1951).** *The Greeks and the Irrational*. Berkeley: University of California Press. Sather Classical Lectures, vol. 25. ✔
  - *Series and volume confirmed. **Chapter 3, "The Blessings of Madness", is the one you need** — you do not have to read all 327 pages.*
- **Burkert, W. (1985).** *Greek Religion*. Trans. J. Raffan. Cambridge, MA: Harvard University Press. ⚠
  - *Not independently verified. Check the title page of the copy you use — this one has multiple printings and a UK Blackwell edition.*

---

## What to look for — the short version

If you read nothing else, read for these eleven things:

1. Dodds ch. 3 — the passage behind "licensed space for ecstasy" **(1.1)**
2. Whether the sources say *danced to exhaustion* or just *ecstatic dance* **(1.2)**
3. The symbolic-versus-real bite, in de Martino's words **(2.2)**
4. Musicians at the house; the search for the right rhythm; how many days **(2.3)**
5. **Numbers** on the gender and class of the *tarantate* **(2.4)**
6. De Martino on tarantism as crisis and reintegration — his formulation, quotable **(2.5, 3.2)**
7. The 1959 team's four disciplines, to name them **(3.1)**
8. Lüdtke on what survived and when it went **(3.3)**
9. Lüdtke's term **neo-tarantism**, and how she defines it **(3.4)**
10. Lüdtke on commercialisation and celebrity — the material for 3.5
11. Anything that **contradicts** a claim above. That is the most valuable thing you can come back with.

---

## Before the chapters are done

- [ ] Every ⚠ has a page reference, or the sentence is gone
- [ ] Every ◆ is written in your words, not tightened up from this document
- [ ] The continuity claim is structural and hedged, never asserted as descent
- [ ] `cite` keys in `app/js/data.js` list only works actually read — **the screen renders the count, so an unread key is a visible false claim**
- [ ] The "Menades" title decision has been made deliberately
- [ ] Claim 3.5 is at least as strong as it is now
