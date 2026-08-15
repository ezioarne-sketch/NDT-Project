/* ==========================================================================
   Content.

   Everything the app displays lives here, separated from presentation so it
   can be reviewed and rewritten without touching screen code.

   NOTE ON STATUS: items marked DRAFT below are first-pass content written to
   get the screens standing up. They are Lorenzo's creative decisions to make
   and are expected to be replaced. Anything drawn from real cultural history
   carries a `cite` key pointing at Docs/06-References.md.
   ========================================================================== */

const Data = {

  /* --- The festival ---------------------------------------------------- DRAFT */
  festival: {
    name: 'Notte della Taranta',
    subtitle: 'Melbourne',
    venue: 'Flemington Racecourse',
    city: 'Melbourne, Australia',
    date: 'Saturday 28 February 2026',
    dateShort: 'Sat 28 Feb',
    gates: '18:00',
    close: '04:00',
    tagline: 'One night. The bite, the dance, the cure.',
    blurb:
      'A single night of pizzica and tarantella at Flemington Racecourse, ' +
      'transplanting the all-night ritual of the Salento to the southern hemisphere. ' +
      'Three stages, from the first tamburello at dusk to the last ronda at dawn.',
  },

  /* --- Stages -------------------------------------------------------- DRAFT */
  stages: [
    { id: 'ronda',  name: 'La Ronda',    note: 'Main stage — the circle',      colour: 'mint' },
    { id: 'terra',  name: 'Terra Rossa', note: 'Acoustic and traditional',     colour: 'green' },
    { id: 'ragno',  name: 'Il Ragno',    note: 'Late electronic — 00:00-04:00', colour: 'magenta' },
  ],

  /* --- The three story screens ---------------------------------------------
     These carry the app's factual claims and are the most reference-exposed
     content in the project.

     BODY COPY IS LORENZO'S, delivered 15 August and transcribed verbatim from
     Assets/Story/Story-Text-Lorenzo.docx. It replaces the scaffold that stood
     here. Two things were changed and nothing else:

       1. Each chapter arrived as one ~200-word paragraph. They are split into
          three at his own sentence boundaries — a legibility decision for a
          412px screen, not an edit. No word is moved between sentences.
       2. Two grammatical slips in chapter 2 are repaired ("Filling themselves
          with" -> "Filled with"; "could be only cured" -> "could only be
          cured"). Both are listed in Docs/08-Story-Claims-Audit.md so he can
          revert either.

     Do not tidy this prose further. It is the assessed writing and the marks
     attach to it being his.

     `cite` keys must correspond to entries in Docs/06-References.md, and only
     to works actually READ — the screen renders the count, so a key for an
     unread book is a visible false claim. `citePlanned` holds the reading list
     that has not been done yet; it renders nowhere on purpose. Move keys from
     `citePlanned` to `cite` as the reading gets done, not before. */
  stories: [
    {
      id: 'dionysian',
      n: '01',
      title: 'The Dionysian Cult',
      standfirst: 'Ecstatic rite in the ancient Mediterranean.',
      image: 'story-dionysian',
      credit: 'Dionysus riding a panther — ancient Greek pebble mosaic. Public domain.',
      cite: ['lataranta-film'],
      citePlanned: ['dodds-1951', 'burkert-1985'],
      status: 'Lorenzo\'s prose. Standfirst is still scaffold; cite keys await the reading.',
      body: [
        'Notwithstanding its subsequent transformation into one of Italy\'s most prestigious folk music festivals, the mesmerizing rhythms of the Notte della Taranta (Night of the Tarantula) echo the mystical rituals of the ancient culture of Magna Graecia. The event is dedicated to the Pizzica, a high-paced traditional Apulian dance based on the folklore of "Tarantism" — an ancient belief that the venomous bite of a particular local tarantula could be cured exclusively by frenzied dancing to a specific beat until the poison sweats off.',
        'However, it is believed that the roots of this ritual stretch far back into antiquity when the Cult of Dionysus existed. Dionysus (otherwise called Bacchus) is a Greek god of wine, religious ecstasy, and madness. His worshippers, primarily women, would participate in the frantic dances to the beat of the drums and tambourines, trying to enter a cathartic trance state.',
        'Nowadays, the clear traces of Dionysian rites can still be found in the Notte della Taranta. When the rhythm of the tamburello (frame drum) takes hold of the crowd, dancers go into a frenzy, recreating the ecstasy of Dionysian followers and turning the pagan rite of exorcising from a spider bite into a modern celebration of life and freedom.',
      ],
    },
    {
      id: 'menades',
      n: '02',
      /* "Maenads", not "Menades". The open naming decision is settled by his own
         draft, which uses "Maenads" throughout the body and "Maenades" only in
         the heading. The route id stays `menades` so links and fixtures hold. */
      title: 'Maenads and Tarantate',
      standfirst: 'The maenads and their Apulian descendants.',
      image: 'story-menades',
      credit: 'Maenad dancing with cymbals — line engraving. Public domain.',
      cite: ['lataranta-film'],
      citePlanned: ['demartino-2005', 'ludtke-2009'],
      status: 'Lorenzo\'s prose. Standfirst is still scaffold; cite keys await the reading.',
      body: [
        'The beating heart of the Notte della Taranta lies in a centuries-old heritage of female catharsis, connecting the mythical Maenads of ancient Greece with the Tarantate of Apulia. In the ancient cult of Dionysus, the Maenads (also called Bacchantes) were the followers of the god of wine who, being possessed, abandoned all societal norms to dance furiously in the wilderness.',
        'Centuries later, this exact ecstatic archetype was reborn in the folklore of Southern Italy in the Tarantate — local women who suffered from the venomous bite of a tarantula spider. Filled with deep lethargy, hysteria, or melancholy, these women could only be cured by the hypnotic beat of the tamburello (tambourine). Like the Maenads, the Tarantate fell into a deep trance, dancing for hours or even days non-stop to sweat out the venom.',
        'Both phenomena were seen by anthropologists and historians as culturally approved ways of catharsis of women living in oppressive, patriarchal society. Through the masks of divine possession or a venomous spider bite, they could transgress all the rules, freely express themselves, and free themselves through music. Today, as the dancers of Notte della Taranta are spinning with their skirts flying and bare feet, they inherit the untamed spirit of the Maenads and Tarantate.',
      ],
    },
    {
      id: 'dimartino',
      n: '03',
      /* "De Martino", not "Di Martino" — the wireframe had it wrong. The route id
         stays `dimartino` so links and test fixtures keep working. */
      title: 'De Martino and the Modern Age',
      standfirst: 'The 1959 fieldwork, and what came after.',
      image: 'story-dimartino',
      credit: 'Tarantism in the Salento — photograph by Franco Pinna, Archivio Accademia Nazionale di Santa Cecilia. Reproduced for study.',
      cite: ['lataranta-film'],
      citePlanned: ['demartino-2005', 'ludtke-2009'],
      status: 'Lorenzo\'s prose. Standfirst is still scaffold; cite keys await the reading.',
      body: [
        'The very existence of the modern phenomenon of the Notte della Taranta is owed to the revolutionary fieldwork done by Italian anthropologist Ernesto De Martino. In 1959, De Martino organized an interdisciplinary expedition to the Salento area to research the disappearing phenomenon of tarantism, which resulted in his landmark book, "La Terra del Rimorso" ("The Land of Remorse") published in 1961.',
        'Instead of seeing the spider-bite "disease" as hysterics or superstitions, he saw it as an institution of culture, which was allowing marginalized people — the poor peasant women suffering from severe social and economic oppression — to cathartically release their suppressed sorrow and alienation. By treating the dancers not as patients, but as the subjects of their history, De Martino elevated tarantism from the folklore phenomenon to a symbol of cultural resistance.',
        'His profound study laid a foundation for the future "neo-tarantism" movement, decades later. Notte della Taranta was created in 1998 and used the legacy of De Martino, transforming the desperate private ritual of suffering into the public celebration of culture and history of Salento.',
      ],
    },
  ],

  /* --- Lineup ---------------------------------------------------------- DRAFT
     Invented performers, grounded in real Salentine instrumentation and roles.
     None of these are real artists — that is deliberate, and it removes the
     copyright exposure the wireframe's template content carried. */
  artists: [
    {
      id: 'canzoniere',
      name: 'Canzoniere di Terra Rossa',
      role: 'Ensemble — tamburello, violin, voice',
      origin: 'Lecce, Puglia',
      stage: 'ronda', time: '23:00', duration: '90 min',
      bio: 'A seven-piece formed around the tamburello, playing the long-form pizzica that the ronda is built on. Their sets do not have set lengths — they end when the circle does.',
      tracks: ['Pizzica di San Vito', 'Ronda Grande', 'Aria di Terra'],
    },
    {
      id: 'panico',
      name: 'Rosaria Panico',
      role: 'Voice',
      origin: 'Galatina, Puglia',
      stage: 'terra', time: '21:40', duration: '60 min',
      bio: 'Unaccompanied and then not. Panico opens in the old style — a single voice carrying the melody — before the tamburelli arrive underneath her.',
      tracks: ['Lu Rusciu de lu Mare', 'Canto alla Stesa', 'Nueva Taranta'],
    },
    {
      id: 'sette',
      name: 'Ambrogio Sette',
      role: 'Tamburello',
      origin: 'Nardò, Puglia',
      stage: 'terra', time: '20:15', duration: '45 min',
      bio: 'A frame-drum player who treats the tamburello as a lead instrument rather than a timekeeper. Opens the night because the night opens with the drum.',
      tracks: ['Solo per Tamburello', 'Il Morso', 'Quattro Tempi'],
    },
    {
      id: 'tarantate',
      name: 'Le Tarantate',
      role: 'Voice and dance collective',
      origin: 'Melbourne / Puglia',
      stage: 'ronda', time: '01:00', duration: '75 min',
      bio: 'An all-women collective splitting its members between Melbourne and the Salento. The set is as much choreography as concert, and the dancers move into the crowd rather than staying on the stage.',
      tracks: ['Nove Notti', 'Sotto il Sole', 'La Cura'],
    },
    {
      id: 'fasano',
      name: 'Nico Fasano Trio',
      role: 'Organetto, violin, chitarra battente',
      origin: 'Melbourne',
      stage: 'terra', time: '22:30', duration: '60 min',
      bio: 'Second-generation Italian-Australian players working the repertoire their grandparents brought over, with the accent that Melbourne gave it.',
      tracks: ['Carlton Pizzica', 'Vecchia Via', 'Ritorno'],
    },
    {
      id: 'elettrica',
      name: 'Pizzica Elettrica',
      role: 'Live electronic',
      origin: 'Melbourne',
      stage: 'ragno', time: '02:00', duration: '120 min',
      bio: 'Tamburello samples over a modular rig. The closing set: the tempo of the traditional pizzica held, everything else replaced.',
      tracks: ['Taranta 128', 'Dawn Ronda', 'Southern Bite'],
    },
  ],

  /* --- Merch ------------------------------------------------ prices DRAFT (AUD)
     All five renders from the Assessment Task 2 campaign. Prices in AUD —
     the wireframe's template content used euros for a Melbourne event. */
  merch: [
    { id: 'pumo', name: 'Pumo', price: 68,
      blurb: 'The Apulian ceramic bud, glazed black with the taranta mark. A traditional ornament given as a wish for growth.',
      detail: 'Hand-finished ceramic, 18cm. Each piece varies.', cite: ['pumo-tradition'] },
    { id: 'veil', name: 'Ritual Veil', price: 45,
      blurb: 'Gradient veil in festival green to magenta, wordmark at the hem. Worn in the ronda, or not.',
      detail: 'Lightweight woven cotton, 180 × 70cm.' },
    { id: 'tote', name: 'Tote Bag', price: 25,
      blurb: 'Heavy cotton tote carrying the campaign stripe and wordmark.',
      detail: 'Unbleached heavy cotton, 38 × 42cm, long handles.' },
    { id: 'tambourine', name: 'Tamburello', price: 120,
      blurb: 'A playable frame drum with the taranta printed on the head. The instrument the night is built on.',
      detail: '26cm frame, goatskin head, eight pairs of jingles.', cite: ['tamburello'] },
    { id: 'bottle', name: 'Water Bottle', price: 32,
      blurb: 'Insulated bottle in festival black. Free refills at every water point on site.',
      detail: '750ml, double-walled stainless steel.' },
  ],

  /* --- Tickets ------------------------------------------------------- DRAFT */
  tickets: [
    { id: 'ga',        name: 'General Admission', price: 89,  note: 'Gates 18:00 — close 04:00' },
    { id: 'ronda',     name: 'Ronda Pass',        price: 129, note: 'Includes the dawn ronda and dance workshops' },
    { id: 'companion', name: 'Companion Card',    price: 0,   note: 'Free entry for a companion supporting a ticket holder' },
    { id: 'virtual',   name: 'Virtual Pass',      price: 25,  note: 'Live stream, all three stages, 30-day replay' },
  ],

  /* --- Held ticket (for the digital ticket screen) -------------------- DRAFT */
  heldTicket: {
    holder: 'Lorenzo Arnesano',
    type: 'Ronda Pass',
    id: 'NDT-2026-004718',
    gate: 'Gate 3 — Epsom Road',
    seat: 'General standing',
  },

  /* --- Languages ------------------------------------------------------------
     Shown in their own script, not translated into English. The four beyond
     English and Italian reflect the most-spoken languages other than English
     in Melbourne (ABS Census 2021) — a sourced choice, not a guess. */
  languages: [
    { code: 'en', native: 'English',    english: 'English' },
    { code: 'it', native: 'Italiano',   english: 'Italian' },
    { code: 'zh', native: '简体中文',     english: 'Mandarin' },
    { code: 'el', native: 'Ελληνικά',   english: 'Greek' },
    { code: 'vi', native: 'Tiếng Việt', english: 'Vietnamese' },
    { code: 'ar', native: 'العربية',     english: 'Arabic' },
  ],
};

/* --- Map pins ---------------------------------------------------------------
   x/y are percentages of the map artwork box, so pins stay put at any size.
   `type` drives the filter chips. Every pin carries a text label — nothing on
   this screen is identified by colour or icon shape alone. */
Data.mapPins = [
  { id: 'ronda',    type: 'stage',  x: 50, y: 46, name: 'La Ronda',        sub: 'Main stage',
    detail: 'The circle. Capacity 12,000, standing. Wheelchair viewing platform on the north side with companion seating.', hours: '19:00 – 04:00' },
  { id: 'terra',    type: 'stage',  x: 34, y: 33, name: 'Terra Rossa',     sub: 'Acoustic stage',
    detail: 'Seated and standing. Traditional sets, lower volume, hearing loop fitted.', hours: '18:30 – 00:30' },
  { id: 'ragno',    type: 'stage',  x: 65, y: 60, name: 'Il Ragno',        sub: 'Late stage',
    detail: 'Electronic. Opens at midnight and runs to dawn. Strobe and haze in use — see the sensory notes in Settings.', hours: '00:00 – 04:00' },
  { id: 'food',     type: 'food',   x: 41, y: 60, name: 'Food village',    sub: '14 vendors',
    detail: 'Puglian and Italian-Australian vendors. Vegetarian, vegan, gluten-free and halal options at every stall, labelled on the stall board.', hours: '18:00 – 03:00' },
  { id: 'bar1',     type: 'food',   x: 60, y: 38, name: 'Bar — North',     sub: 'Licensed',
    detail: 'Licensed bar. Free water available at the bar without queueing separately.', hours: '18:00 – 03:30' },
  { id: 'water',    type: 'food',   x: 45, y: 71, name: 'Water refill',    sub: 'Free',
    detail: 'Free chilled water. Bring a bottle or buy the festival one from the shop.', hours: 'All night' },
  { id: 'wc1',      type: 'facil',  x: 28, y: 47, name: 'Toilets — West',  sub: 'Accessible',
    detail: 'Includes accessible cubicles and a Changing Places facility with hoist and adult change table.', hours: 'All night' },
  { id: 'wc2',      type: 'facil',  x: 71, y: 49, name: 'Toilets — East',  sub: 'Accessible',
    detail: 'Includes accessible cubicles. Nearest to Il Ragno.', hours: 'All night' },
  { id: 'aid',      type: 'facil',  x: 52, y: 70, name: 'First aid',       sub: '24 hours',
    detail: 'Staffed all night. Also the meeting point for lost persons and the welfare team.', hours: 'All night' },
  { id: 'quiet',    type: 'access', x: 26, y: 62, name: 'Quiet zone',      sub: 'Low sensory',
    detail: 'Low light, no amplified sound, seating and ear defenders available. No booking needed.', hours: 'All night' },
  { id: 'gate3',    type: 'access', x: 74, y: 79, name: 'Gate 3',          sub: 'Step-free entry',
    detail: 'Step-free entry from Epsom Road, nearest to the station. Companion Card accepted here. Accessible parking 80m.', hours: '18:00 – 01:00' },
  { id: 'gate1',    type: 'access', x: 40, y: 84, name: 'Gate 1',          sub: 'Main entry',
    detail: 'Main pedestrian entry. Bag check on entry — allow 15 minutes at peak.', hours: '18:00 – 01:00' },
];

Data.mapFilters = [
  { id: 'all',    label: 'All' },
  { id: 'stage',  label: 'Stages' },
  { id: 'food',   label: 'Food & bars' },
  { id: 'facil',  label: 'Facilities' },
  { id: 'access', label: 'Accessibility' },
];

/* --- Workshops ------------------------------------------------------- DRAFT
   Reached from the schedule as an overlay, as in the wireframe. */
Data.workshops = [
  { id: 'w1', name: 'Pizzica for absolute beginners', time: '18:30', dur: '45 min', where: 'Terra Rossa lawn',
    capacity: '60 places', language: 'English and Italian',
    access: 'Seated version taught alongside. No partner needed.',
    detail: 'The basic step, the turn, and how the circle works. No experience assumed and no need to bring anyone.' },
  { id: 'w2', name: 'The tamburello: holding and striking', time: '19:15', dur: '45 min', where: 'Workshop tent',
    capacity: '30 places', language: 'English',
    access: 'Seated throughout. Instruments provided; left-handed frames available.',
    detail: 'Ambrogio Sette on grip, the four basic strokes, and why the drum sets the tempo rather than following it.' },
  { id: 'w3', name: 'Singing the canto alla stesa', time: '20:00', dur: '60 min', where: 'Terra Rossa lawn',
    capacity: '80 places', language: 'Italian with English support',
    access: 'Seated. Lyrics provided in large print and on screen.',
    detail: 'Rosaria Panico on the open-throat style used to carry a melody across a field without amplification.' },
  { id: 'w4', name: 'The ronda: how the circle holds', time: '21:00', dur: '45 min', where: 'La Ronda',
    capacity: 'Open', language: 'English and Italian',
    access: 'Standing and seated participation both welcomed.',
    detail: 'Not a dance class. How the circle forms, who goes to the centre, and when it is time to step out.' },
  { id: 'w5', name: 'Making a taranta mask', time: '19:00', dur: '90 min', where: 'Craft tent',
    capacity: '40 places', language: 'English',
    access: 'Seated, table-height adjustable. Tools with modified grips available.',
    detail: 'Family workshop, suitable from age 6 with an adult. Materials included.' },
  { id: 'w6', name: 'Talk: what de Martino found', time: '22:00', dur: '45 min', where: 'Workshop tent',
    capacity: '120 places', language: 'English',
    access: 'Seated. Live captions on screen. Hearing loop fitted.',
    detail: 'The 1959 expedition, what it recorded, and the argument about what the revival owes it.' },
];

/* --- Transport -------------------------------------------------------------
   Real Melbourne infrastructure; invented service times. Everything structural
   here is sourced — the racecourse line runs from Southern Cross (VRC), route 57
   has no low-floor trams and is not a Night Network route (Yarra Trams). Only
   the frequencies and last-service times are invented for a fictional event, and
   the screen says so. Do not "improve" the tram access note back into a promise
   of level access: the whole point is that it directs mobility-aid users to the
   train, which is what the VRC itself advises. */
Data.transport = [
  {
    id: 'train', name: 'Train', headline: 'Flemington Racecourse Station',
    lines: [
      'Event services run direct from Southern Cross on the racecourse line.',
      'The station sits at the south-east corner, roughly 300m from Gate 3.',
      'Last service departs 01:20. After that, use the shuttle to Newmarket.',
    ],
    access: 'The most accessible way here. Trains are wheelchair accessible and the '
          + 'route is step-free from platform to Gate 3. Staff on the platform all night.',
  },
  {
    id: 'tram', name: 'Tram', headline: 'Route 57 — Epsom Road',
    lines: [
      'Route 57 to West Maribyrnong stops at Flemington Drive (Stop 30) on Epsom Road, '
      + 'a 500m walk to Gate 1.',
      'Roughly every 15 minutes through the evening. Route 57 is not a Night Network '
      + 'route, so plan your way home on the train or the shuttle.',
    ],
    access: 'Route 57 does not run low-floor trams and Stop 30 is not a level-access stop. '
          + 'If you use a mobility aid, take the train instead — see above.',
  },
  {
    id: 'shuttle', name: 'Shuttle', headline: 'Free festival shuttle',
    lines: [
      'Continuous shuttle between Gate 3 and Newmarket Station from 23:00 to 04:30.',
      'A second shuttle runs to Southern Cross every 30 minutes from 01:00.',
    ],
    access: 'Every shuttle is wheelchair accessible with a ramp and two securement spaces.',
  },
  {
    id: 'car', name: 'Driving', headline: 'Parking and drop-off',
    lines: [
      'General parking in the Nursery car park, off Smithfield Road. $20, prepaid only.',
      'Rideshare pickup and drop-off is on Epsom Road at Gate 3.',
    ],
    access: 'Accessible parking is 80m from Gate 3 on a sealed step-free path. Book with your ticket; a valid permit must be displayed.',
  },
];

/* Read time is derived, never typed.

   It used to be a hand-written field, and when the scaffold body copy was
   replaced with Lorenzo's the screens went on claiming "4 min read" over about
   200 words. That is a small lie, but it is the same species as the tram
   accessibility error: a plausible number nobody re-checked after the thing it
   described had changed. Deriving it means it cannot go stale again.

   200 words per minute is the conventional figure for screen reading, rounded
   up so a chapter never advertises "0 min". */
Data.stories.forEach(s => {
  const words = s.body.join(' ').split(/\s+/).filter(Boolean).length;
  s.words = words;
  s.readTime = `${Math.max(1, Math.round(words / 200))} min`;
});

window.Data = Data;
