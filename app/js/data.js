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
     content in the project. Body copy here is scaffold: it states what each
     screen must cover. Lorenzo writes the final prose against read sources.

     `cite` keys must correspond to entries in Docs/06-References.md. Do not
     add a key for a work that has not been read — the screen renders the
     count of sources, so an invented key becomes a visible false claim. */
  stories: [
    {
      id: 'dionysian',
      n: '01',
      title: 'The Dionysian Cult',
      standfirst: 'Ecstatic rite in the ancient Mediterranean.',
      readTime: '4 min',
      cite: ['dodds-1951', 'burkert-1985'],
      status: 'DRAFT — needs Lorenzo\'s prose against read sources',
      body: [
        'The rites of Dionysus gave the ancient Mediterranean a licensed space for ecstasy — a controlled loss of control, held inside ritual rather than outside it.',
        'Participants danced to exhaustion. The state they reached had a name and a place in the social order; it was not treated as an illness but as a visit.',
        'What matters for this festival is the structure, not the spectacle: a community, a circle, music that does not stop, and a person at the centre who is permitted to come apart.',
      ],
    },
    {
      id: 'menades',
      n: '02',
      title: 'Menades and Tarantate',
      standfirst: 'The maenads and their Apulian descendants.',
      readTime: '5 min',
      cite: ['demartino-2005', 'ludtke-2009'],
      status: 'DRAFT — needs Lorenzo\'s prose against read sources',
      body: [
        'In the Salento the rite reappears under another name. A woman bitten — really or symbolically — by the taranta falls into a state that only music can lift.',
        'Musicians are called to the house. They play until the right rhythm is found, and then they keep playing, sometimes for days, while she dances.',
        'The tarantate were almost always women, and almost always poor. Reading the bite as purely medical misses what the ritual actually carried: grief, labour, confinement, and the absence of any other permitted outlet.',
      ],
    },
    {
      id: 'dimartino',
      n: '03',
      title: 'Di Martino and the Modern Age',
      standfirst: 'The 1959 fieldwork, and what came after.',
      readTime: '5 min',
      cite: ['demartino-2005', 'ludtke-2009'],
      status: 'DRAFT — needs Lorenzo\'s prose against read sources',
      body: [
        'In June 1959 the ethnographer Ernesto de Martino took a team into the Salento to document tarantism while it was still practised. The resulting study framed it as a cultural institution rather than a curiosity.',
        'The ritual as he found it has largely gone. What replaced it is a revival — festivals, recordings, staged pizzica — which keeps the music alive while detaching it from the crisis it once answered.',
        'This app sits inside that contradiction rather than pretending it away. A festival is not a cure. Saying so plainly is the honest version of the tribute.',
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

window.Data = Data;
