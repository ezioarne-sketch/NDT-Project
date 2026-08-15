# Story Chapters — Claim-by-Claim Audit

**First prepared 13 August 2026 against the scaffold copy. Rewritten 15 August 2026 against Lorenzo's prose.**

The three story screens carry more factual weight than the rest of the app combined. This document takes every assertion in them and says what kind of claim it is, what has to support it, and what you need to look for when you read.

> **Why this exists.** On 13 August a fact-check of four unsourced claims elsewhere in the app found three errors, one of which — Route 57 running low-floor trams — was an *accessibility* claim that was the exact reverse of the truth. It had survived because it was plausible, specific and never checked. The story chapters are the same category of risk at roughly ten times the volume. Read them with that in mind.

**Read this before the books, not after.** It turns three hundred pages of reading into a search for a dozen specific things.

---

## How claims are classified

| Mark | Meaning | What you must do |
|---|---|---|
| ✔ | **Verified** — checked against a source, and the source is cited | Nothing. Use it. |
| ⚠ | **Standard but unread** — almost certainly right, but neither of us has read the page it sits on | Find it in the book. Note the page. If you can't find it, cut the sentence. |
| ◆ | **Interpretive** — your argument, not a fact | No citation needed. But it must be *your* sentence, and it is where the marks are. |
| ✖ | **Overreach** — states more than the evidence supports | Hedge it or cut it. These are the ones a marker with subject knowledge will find. |

---

## What changed on 15 August

Your prose replaced the scaffold. It is a real improvement in three ways: it is denser with checkable fact (1959, 1961, 1998), it is genuinely yours, and chapter 3 is now a proper account of de Martino rather than a gesture at him.

**Two things went the wrong way, and both were flagged in the 13 August version of this document as the specific risks of rewriting.** Neither is hard to fix.

### 1. The continuity claim got stronger, not weaker

The link between ancient Dionysian rite and Apulian tarantism is **debated, not settled**. The old draft sidestepped it by arguing that the *structure* recurs, not the practice. The new draft asserts descent three times:

| Where | The sentence | The problem |
|---|---|---|
| 1.4 | "it is believed that the roots of this ritual **stretch far back into antiquity**" | "It is believed" by whom? Passive attribution with no name behind it. |
| 1.7 | "the **clear traces** of Dionysian rites can still be found" | "Clear" is the overreach. The traces are precisely what is *not* clear. |
| 2.3 | "this **exact** ecstatic archetype was **reborn**" | "Exact" and "reborn" together assert direct descent. |

The 13 August note said: *"The risk is that you strengthen it while rewriting — a phrase like 'the same rite' or 'which became' would turn a careful argument into an overreach."* That is what happened, in three places.

**This is not a small edit and it is not pedantry.** Hedging it properly *is* the "analyse and synthesise complex information" criterion. An author who writes "the connection is structural and contested" demonstrates more than one who writes "clear traces". Three words are doing the damage — **clear**, **exact**, **reborn**. Changing those three words fixes most of it.

### 2. The reflexive ending is gone

The old chapter 3 closed:

> "This app sits inside that contradiction rather than pretending it away. **A festival is not a cure.** Saying so plainly is the honest version of the tribute."

The new chapter 3 closes:

> "…transforming the desperate private ritual of suffering into the public celebration of culture and history of Salento."

The new sentence reads the transformation as straightforwardly good. The old one asked what was lost in it. **That question is where the "social and cultural demands" criterion is won** — a festival brand built on a healing ritual is extraction of a kind, however carefully handled, and naming that reads as judgement rather than defensiveness.

Nothing is lost from the *project* — the About screen still carries the disclaimer, and the rationale (Task 5) is the natural home for the argument. But it is no longer on the screen a marker reads first. **Decide deliberately whether you want it back.** If you put it back, write it fresh; do not paste the old sentence, which was scaffold I wrote.

### Settled, and no longer an open question

| Was | Now | Why |
|---|---|---|
| Chapter 2 titled "**Menades** and Tarantate" | "**Maenads** and Tarantate" | Your own draft uses "Maenads" throughout the body and "Maenades" only in the heading. Your body text settles it. The route id stays `menades` so links and fixtures hold. |
| Chapter 3 titled "**Di** Martino" | "**De** Martino" | Fixed 13 August. The wireframe had it wrong and it had propagated into the app, the README and the screen spec. |

### Two grammatical repairs, both revertible

Made in transcription, listed here so you can undo either:

| Chapter | Yours | Now |
|---|---|---|
| 2 | "**Filling themselves with** deep lethargy, hysteria, or melancholy" | "**Filled with** deep lethargy, hysteria, or melancholy" |
| 2 | "these women **could be only cured** by" | "these women **could only be cured** by" |

Two formatting changes, neither of them wording:

- **The one-paragraph chapters were split into three**, at your own sentence boundaries. A 200-word unbroken block is hard to read on a 412px screen. No word moved between sentences.
- **Em dashes are spaced** — `"Tarantism" — an ancient belief` rather than `"Tarantism"—an ancient belief` — to match the rest of the app. Cosmetic, and reversible in one pass.

Nothing else in your prose was touched.

**Left alone deliberately, because they are yours to decide:**

- **American spellings** — "mesmerizing", "organized", "marginalized". LCI Melbourne is an Australian institution and Australian English prefers *-ise*. The rest of the app uses *-ise*. Pick one and apply it to all three chapters.
- **"Ernesto De Martino"** — scholarly usage is overwhelmingly "Ernesto **de** Martino" lowercase after the forename, capitalised when standing alone ("De Martino organised…"). Your chapter title is already right. Mid-sentence after the forename is the only debatable instance.

---

## Chapter 1 — The Dionysian Cult

Cites: the film (`lataranta-film`). Planned: Dodds (1951), Burkert (1985).

| # | The claim | Type | What has to carry it |
|---|---|---|---|
| 1.1 | "one of Italy's most prestigious folk music festivals" | ⚠ | **This is about the real Melpignano festival, in an app for a fictional one.** The chapter never marks the difference, and a reader arriving from Home has been told the festival is in Melbourne. One clause — "the Salento original" — removes the ambiguity. The real festival also needs acknowledging as the inspiration; that is an open checklist item in `06-References.md`. |
| 1.2 | "echo the mystical rituals of the ancient culture of Magna Graecia" | ◆ | "Echo" is the right verb — it claims resemblance, not descent. This is the hedged version of the claim you make less carefully in 1.4 and 1.7. **Use this register throughout.** |
| 1.3 | "an **ancient** belief that the venomous bite of a particular local tarantula could be cured exclusively by frenzied dancing … until the poison sweats off" | ⚠ | Two things. **"Ancient" is loose** — tarantism is documented from the late medieval period onwards, not antiquity, and using "ancient" here quietly supports the continuity claim you have not established. **"A particular local tarantula"** is the folk *taranta*, which de Martino discusses does not map cleanly onto one species; the spider whose bite is actually medically serious in Puglia is a different animal. He is good on this and it is a genuinely interesting page. |
| 1.4 | "**it is believed** that the roots of this ritual stretch far back into antiquity" | ✖ | Believed by whom? Either name who argues it and note that it is contested, or convert to the structural claim. Passive attribution is the single most common thing marked down in referencing-assessed writing. |
| 1.5 | "Dionysus (otherwise called Bacchus) is a Greek god of wine, religious ecstasy, and madness" | ✔ | Standard and safe. Burkert covers it if you want a page. |
| 1.6 | "His worshippers, primarily women, would participate in the frantic dances to the beat of the drums and tambourines, trying to enter a cathartic trance state" | ⚠ | Well within the standard account. The frame drum (*tympanon*) in Dionysian cult is attested and is a nice concrete link to the *tamburello* — **worth a page reference, because it is the one continuity detail that is actually material rather than thematic.** |
| 1.7 | "Nowadays, the **clear traces** of Dionysian rites can still be found" | ✖ | See above. Drop "clear", or say what the traces are and who identified them. |
| 1.8 | "turning the **pagan rite** of exorcising from a spider bite into a modern celebration of life and freedom" | ✖ | **Check this one carefully.** The tarantism exorcism was *Christian*, not pagan — it was addressed to St Paul, and the tarantate made a pilgrimage to his chapel at Galatina. That is not a detail; the Christian framing is central to de Martino's account and to the book's title. As written the sentence contradicts the source your chapter 3 is built on. |

---

## Chapter 2 — Maenads and Tarantate

Cites: the film (`lataranta-film`). Planned: de Martino (2005), Lüdtke (2009).

| # | The claim | Type | What has to carry it |
|---|---|---|---|
| 2.1 | "a centuries-old heritage of female catharsis, connecting the **mythical** Maenads of ancient Greece with the Tarantate of Apulia" | ◆ | Your thesis, and a good one. **"Mythical" is doing quiet, careful work** — it marks the Maenads as literary figures rather than a documented historical practice, which is correct and which most undergraduate treatments get wrong. Keep it. |
| 2.2 | "the Maenads (also called Bacchantes) were the followers of the god of wine who, being possessed, abandoned all societal norms to dance furiously in the wilderness" | ⚠ | The standard account, drawn largely from Euripides. If you cite *The Bacchae* you are citing a play, not a report — say so, and it becomes a stronger sentence rather than a weaker one. |
| 2.3 | "this **exact** ecstatic archetype was **reborn** in the folklore of Southern Italy" | ✖ | The continuity claim at its strongest point. "A comparable structure recurs" says what you can support. |
| 2.4 | "the Tarantate — local women **who suffered from the venomous bite** of a tarantula spider" | ✖ | Stated here as literal medical fact, where 1.3 correctly framed the same thing as a belief. **The bite was frequently symbolic** — often no bite had occurred at all — and that is exactly what makes tarantism a cultural rather than a medical phenomenon. The distinction is the load-bearing idea in de Martino, and this sentence currently gives it away. |
| 2.5 | "could only be cured by the hypnotic beat of the tamburello" | ⚠ | Fine inside the belief system; asserted as fact outside it. Same fix as 2.4 — one framing clause covers both. |
| 2.6 | "dancing for hours or even days non-stop to sweat out the venom" | ⚠ | Duration is documented. Find the passage and give a page; multi-day is specific enough to need one. |
| 2.7 | "Both phenomena were seen by **anthropologists and historians** as culturally approved ways of catharsis" | ✖ | Which ones? This is your strongest analytical claim and it is attributed to nobody. **De Martino and Lüdtke both support it and you already intend to cite them** — naming them converts the weakest sentence in the chapter into one of the strongest. |
| 2.8 | "Through the masks of divine possession or a venomous spider bite, they could transgress all the rules, freely express themselves, and free themselves through music" | ◆ | Yours, and the best sentence in the three chapters. "Masks" is precisely the right metaphor. Do not soften it. |
| 2.9 | "Today, as the dancers … are spinning with their skirts flying and bare feet, they inherit the untamed spirit of the Maenads and Tarantate" | ◆ | Yours. "Inherit" is a softer continuity claim than 2.3 and it survives as rhetoric because the sentence is plainly a closing image rather than an assertion. |

**The strongest sentence you could add here** names what the ritual gave a poor woman in rural Puglia that nothing else in her life did: a socially sanctioned occasion to be the centre of attention, to be unwell in public, and to have the community organise itself around her. Your 2.8 is one step away from it.

---

## Chapter 3 — De Martino and the Modern Age

Cites: the film (`lataranta-film`). Planned: de Martino (2005), Lüdtke (2009).

| # | The claim | Type | What has to carry it |
|---|---|---|---|
| 3.1 | "In **1959**, De Martino organized an **interdisciplinary expedition** to the Salento" | ✔ | **Verified.** Add two free details: it was **June** 1959, and the team was a psychiatrist, a psychologist, an ethnomusicologist and a social anthropologist. Naming the four disciplines is concrete, checkable, and it *demonstrates* the "interdisciplinary" you currently only assert. |
| 3.2 | "his landmark book, *La Terra del Rimorso* (*The Land of Remorse*) published in **1961**" | ✔ | **Verified.** Milan: Il Saggiatore, 1961. Full entry in `06-References.md`. |
| 3.3 | "Instead of seeing the spider-bite 'disease' as hysterics or superstitions, he saw it as an institution of culture" | ✔ | Verified in substance. **His own formulation is sharper than yours**: a cultural and psychological crisis addressed through a ritual that reintegrates the individual into the community. Quote it. |
| 3.4 | "marginalized people — the poor peasant women suffering from severe social and economic oppression" | ⚠ | Strongly supported. **Quantify it if he gives figures** — the study is systematic enough to answer "how many, and how poor", and a number here is worth a paragraph of assertion. |
| 3.5 | "By treating the dancers not as patients, but as the subjects of their history, De Martino elevated tarantism from the folklore phenomenon to a **symbol of cultural resistance**" | ◆ ⚠ | The first half is his and it is well put. **"Symbol of cultural resistance" is a step past him** — that reading belongs to later scholarship, not to de Martino himself. Mark it as your inference and it is fine; leave it looking like a report of his view and it is not. |
| 3.6 | "laid a foundation for the future '**neo-tarantism**' movement" | ✔ | Good — that is Lüdtke's term and using it shows you read her. **It is in quotation marks and attributed to nobody**, which reads as a quotation from an unnamed source. Attribute it to her. |
| 3.7 | "Notte della Taranta was created in **1998**" | ✔ | **Verified.** |
| 3.8 | "transforming the desperate private ritual of suffering into the public celebration of culture and history of Salento" | ◆ | Yours, and the chapter's last word. See "What changed on 15 August" above — this reads the transformation as unambiguously good, where the previous ending asked what it cost. Lüdtke's book is *about* the commercial and celebrity dimension of exactly this transformation, so she is the source that would let you complicate it in one sentence. |

---

## Bibliographic details — verified 13 August 2026

These are checked against publisher and library records. **Verified details do not mean verified reading** — you still need the books in hand, and the checklist item is that nothing appears in the master list that you have not read.

- **De Martino, E. (2005).** *The Land of Remorse: A Study of Southern Italian Tarantism*. Translated and annotated by D.L. Zinn, foreword by V. Crapanzano. London: Free Association Books. (First published as *La terra del rimorso: Contributo a una storia religiosa del Sud*. Milan: Il Saggiatore, 1961.) ✔
  - *Zinn's annotations are written for exactly your situation — an English reader meeting de Martino for the first time. Read them.*
- **Lüdtke, K. (2009).** *Dances with Spiders: Crisis, Celebrity and Celebration in Southern Italy*. New York and Oxford: Berghahn Books. Epistemologies of Healing series, vol. 4. ✔
  - *She attended neo-tarantism events and learned to dance the pizzica — the fieldwork basis is worth a sentence if you use her.*
- **Dodds, E.R. (1951).** *The Greeks and the Irrational*. Berkeley: University of California Press. Sather Classical Lectures, vol. 25. ✔
  - ***Chapter 3, "The Blessings of Madness", is the one you need*** — you do not have to read all 327 pages.
- **Burkert, W. (1985).** *Greek Religion*. Trans. J. Raffan. Cambridge, MA: Harvard University Press. ⚠
  - *Not independently verified. Check the title page of the copy you use — this one has multiple printings and a UK Blackwell edition.*

---

## What to look for — the short version

If you read nothing else, read for these twelve things:

1. **Whether the exorcism was Christian or pagan**, and the Galatina pilgrimage **(1.8 — this one contradicts your source as written)**
2. The symbolic-versus-real bite, in de Martino's words **(2.4, 2.5)**
3. Whether anyone credible actually argues Dionysian continuity, and who disputes it **(1.4, 1.7, 2.3)**
4. The *taranta* versus the spider that is actually dangerous **(1.3)**
5. The frame drum in Dionysian cult — the one material link rather than a thematic one **(1.6)**
6. Dodds ch. 3 on ecstasy as a licensed state **(1.2)**
7. Multi-day dancing — a page reference **(2.6)**
8. **Numbers** on the gender and class of the *tarantate* **(3.4)**
9. De Martino on crisis and reintegration — his formulation, quotable **(3.3)**
10. The 1959 team's four disciplines, to name them **(3.1)**
11. Lüdtke's definition of **neo-tarantism**, to attribute it **(3.6)**
12. Anything that **contradicts** a claim above. That is the most valuable thing you can come back with.

---

## Before the chapters are done

- [ ] **"Clear", "exact" and "reborn" are gone** — the continuity claim is structural and hedged, never asserted as descent *(1.4, 1.7, 2.3)*
- [ ] **"Pagan rite" is checked against de Martino** and corrected if it is wrong *(1.8)*
- [ ] **The bite is framed as belief in chapter 2 as it is in chapter 1** *(2.4, 2.5)*
- [ ] **"Anthropologists and historians" are named** *(2.7)*
- [ ] Every ⚠ has a page reference, or the sentence is gone
- [ ] Every ◆ is written in your words, not tightened up from this document
- [ ] `cite` keys in `app/js/data.js` list only works actually read — **the screen renders the count, so an unread key is a visible false claim.** Move keys from `citePlanned` to `cite` as you finish each book
- [ ] The three chapter images are attributed — see `06-References.md` §5a
- [ ] A decision has been made about whether the reflexive ending comes back *(3.8)*
- [ ] Spellings are consistently Australian, or consistently not
