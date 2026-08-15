/* ==========================================================================
   Core screens — Splash, Language, Home, About, and the three Story screens.
   ========================================================================== */

/* --- 16 · Splash -----------------------------------------------------------
   Auto-advances. A splash that requires a tap is a door with no handle for
   anyone using a switch device, and the brief's own accessibility expectation
   makes that indefensible. Reduced-motion users get the same screen without
   the animation, held for the same duration. */

App.register({
  id: 'splash',
  title: 'Notte della Taranta',
  section: null,
  nav: false,
  render() {
    return `
      <div class="splash">
        <div class="splash-rain" aria-hidden="true"></div>
        <div class="splash-mark">
          <img class="splash-wordmark" src="assets/img/wordmark.png"
               alt="Notte della Taranta">
          <p class="splash-sub">${Data.festival.venue} · ${Data.festival.dateShort}</p>
        </div>
        <div class="splash-foot">
          <div class="splash-progress" aria-hidden="true"><span></span></div>
          <button class="btn btn-secondary splash-skip" data-go="language">Enter</button>
        </div>
      </div>`;
  },
  mount(el) {
    // ?capture=1 holds the splash still so the screen-capture script can shoot
    // it. It changes nothing about how the app behaves for a real user.
    if (new URLSearchParams(location.search).has('capture')) return;

    // Auto-advance, but never trap the user: the Enter button is always there.
    const delay = document.documentElement.dataset.motion === 'reduced' ? 1200 : 2600;
    const t = setTimeout(() => {
      if (App.state.current && App.state.current.id === 'splash') {
        App.go(App.state.settings.seenSplash ? 'home' : 'language', { replace: false });
      }
    }, delay);
    el.addEventListener('click', () => clearTimeout(t), { once: true });
  },
});

/* --- 17 · Language ---------------------------------------------------------
   Each language is shown in its own script. Flags are deliberately absent:
   a flag names a country, not a language, and gets it wrong for most of them. */

App.register({
  id: 'language',
  title: 'Choose your language',
  section: null,
  nav: false,
  bg: 'back',
  render() {
    return `
      ${UI.statusbar()}
      <div class="scroll" id="main">
        <header class="appbar" style="padding-top:var(--s-8)">
          <div class="grow">
            <h1>Language</h1>
            <p class="t-small" style="margin-top:6px">Scegli la tua lingua · 选择语言 · Επιλέξτε γλώσσα</p>
          </div>
        </header>
        <div class="pad stack gap-2">
          ${Data.languages.map(l => `
            <button class="listrow lang-row" data-lang="${l.code}"
                    aria-label="${l.english}">
              <span class="lang-native">${l.native}</span>
              <span class="grow t-small">${l.english}</span>
              <span class="lang-tick" aria-hidden="true">✓</span>
            </button>`).join('')}
        </div>
        <div class="pad" style="margin-top:var(--s-6)">
          <p class="t-small">You can change this at any time in Settings. Changing language
          does not change your ticket or your saved schedule.</p>
        </div>
        <div class="pad" style="margin-top:var(--s-6);padding-bottom:var(--s-8)">
          <button class="btn btn-primary btn-block" id="lang-continue">Continue</button>
        </div>
      </div>`;
  },
  mount(el) {
    const rows = el.querySelectorAll('.lang-row');
    const mark = () => rows.forEach(r =>
      r.setAttribute('aria-current', r.dataset.lang === App.state.settings.language ? 'true' : 'false'));
    mark();
    rows.forEach(r => r.addEventListener('click', () => {
      App.setSetting('language', r.dataset.lang);
      mark();
      App.announce(`${r.querySelector('.lang-native').textContent} selected`);
    }));
    el.querySelector('#lang-continue').addEventListener('click', () => {
      App.setSetting('seenSplash', true);
      App.go('home');
    });
  },
});

/* --- 01 · Home -------------------------------------------------------------- */

App.register({
  id: 'home',
  title: 'Home',
  section: 'home',
  bg: 'home',
  render() {
    const f = Data.festival;
    const next = Data.artists.find(a => a.id === 'panico');
    return `
      ${UI.statusbar()}
      <div class="scroll has-nav" id="main">

        <div class="home-hero">
          <img class="hero-wordmark" src="assets/img/wordmark.png" alt="Notte della Taranta">
          <h1 class="visually-hidden">Home</h1>
          <p class="home-meta">${f.venue}<br>${f.date} · Gates ${f.gates}</p>
          <p class="home-tagline">${f.tagline}</p>
          <div class="home-cta">
            <button class="btn btn-primary" data-go="ticket">My ticket</button>
            <button class="btn btn-secondary" data-go="map">Site map</button>
          </div>
        </div>

        ${UI.sectionhead('The Story', 'All three', 'story/dionysian')}
        <div class="carousel-wrap">
          <div class="carousel" aria-label="The three story chapters">
            ${Data.stories.map(s => `
              <button class="card card-media story-card" data-go="story/${s.id}">
                <div class="media story-media story-media-${s.id}">
                  <span class="story-n">${s.n}</span>
                </div>
                <div class="body">
                  <h3 class="t-h2">${s.title}</h3>
                  <p class="t-small" style="margin-top:6px">${s.standfirst}</p>
                  <p class="t-label" style="margin-top:10px">${s.readTime} read</p>
                </div>
              </button>`).join('')}
          </div>
          <div class="dots" role="tablist" aria-label="Story chapter"></div>
        </div>

        ${UI.sectionhead('Tonight')}
        <div class="pad">
          <button class="card nextup" data-go="artist/${next.id}">
            <div class="row between gap-3">
              <div>
                ${UI.label('Next on Terra Rossa')}
                <p class="t-h2" style="margin-top:6px">${next.name}</p>
                <p class="t-small" style="margin-top:4px">${next.role}</p>
              </div>
              <div class="nextup-time">${next.time}</div>
            </div>
          </button>
        </div>

        ${UI.sectionhead('Plan your night')}
        <div class="pad quickgrid">
          <button class="card quick" data-go="schedule">
            <span class="quick-label">Schedule</span>
            <span class="t-small">Three stages, dusk to dawn</span>
          </button>
          <button class="card quick" data-go="transport">
            <span class="quick-label">Getting here</span>
            <span class="t-small">Trains, trams, shuttles</span>
          </button>
          <button class="card quick" data-go="virtual">
            <span class="quick-label">Watch live</span>
            <span class="t-small">Stream from anywhere</span>
          </button>
          <button class="card quick" data-go="about">
            <span class="quick-label">About</span>
            <span class="t-small">What this festival is</span>
          </button>
        </div>

        <div class="pad" style="margin-top:var(--s-6)">
          <button class="listrow" data-go="settings">
            <span class="grow">Accessibility &amp; display settings</span>
            <span class="t-label">Open →</span>
          </button>
        </div>

      </div>`;
  },
});

/* --- 02 · About -------------------------------------------------------------- */

App.register({
  id: 'about',
  title: 'About the Festival',
  section: 'home',
  bg: 'home',
  render() {
    const f = Data.festival;
    return `
      ${UI.statusbar()}
      ${UI.appbar('About', { back: true })}
      <div class="scroll has-nav" id="main">
        <div class="pad prose">
          <p class="t-body" style="color:var(--white);font-size:var(--size-body-lg)">${f.blurb}</p>

          <h2 class="t-h2" style="margin:var(--s-6) 0 var(--s-3)">Why Melbourne</h2>
          <p>At the 2021 Census, 384,688 Victorians reported Italian ancestry — and a large
             share of that traces back to post-war emigration from the south, Puglia included.
             This festival is addressed to that community first and to everyone else second.</p>

          <h2 class="t-h2" style="margin:var(--s-6) 0 var(--s-3)">Why Flemington</h2>
          <p>Flemington Racecourse already handles crowds at this scale, has a dedicated
             railway station on its doorstep, and offers a flat open site that can be made
             step-free throughout. For an all-night event, transport that runs late matters
             more than atmosphere.</p>

          <h2 class="t-h2" style="margin:var(--s-6) 0 var(--s-3)">A note on the tradition</h2>
          <p>Tarantism was not a festival. It was a ritual answer to real distress, carried
             mostly by women in rural Puglia who had few other outlets available to them.
             Staging it as entertainment is a decision with consequences, and the three
             story chapters in this app set out what we borrowed and what we did not.</p>

          <div class="callout">
            <p class="t-label">Fictional event</p>
            <p class="t-small" style="margin-top:6px">Notte della Taranta Melbourne is a student
            project and does not exist. The cultural history it draws on is real and is
            referenced throughout.</p>
          </div>

          <button class="btn btn-secondary btn-block" data-go="story/dionysian"
                  style="margin-top:var(--s-6)">Read the story</button>
        </div>
      </div>`;
  },
});

/* --- 03-05 · Story chapters ---------------------------------------------------
   One template, three chapters, reached by route parameter. Swiping between
   chapters is handled by the prev/next controls plus the carousel on Home. */

App.register({
  id: 'story',
  title: 'The Story',
  section: 'home',
  bg: 'home',
  render(params) {
    const id = params[0] || 'dionysian';
    const i = Data.stories.findIndex(s => s.id === id);
    const s = Data.stories[i] || Data.stories[0];
    const prev = Data.stories[i - 1];
    const next = Data.stories[i + 1];

    return `
      ${UI.statusbar()}
      ${UI.appbar(s.title, { back: true, sub: `Chapter ${s.n} of 03 · ${s.readTime} read` })}
      <div class="scroll has-nav" id="main">

        <figure class="story-hero-fig">
          <div class="story-hero story-media-${s.id}" role="img" aria-label="${s.credit}">
            <span class="story-hero-n" aria-hidden="true">${s.n}</span>
          </div>
          <figcaption class="story-credit">${s.credit}</figcaption>
        </figure>

        <div class="pad">
          <p class="standfirst">${s.standfirst}</p>
        </div>

        <div class="pad prose">
          ${s.body.map(p => `<p>${p}</p>`).join('')}
        </div>

        <div class="pad" style="margin-top:var(--s-5)">
          <div class="callout callout-cite">
            <p class="t-label">Sources</p>
            <p class="t-small" style="margin-top:6px">
              This chapter draws on ${s.cite.length} referenced ${s.cite.length === 1 ? 'source' : 'sources'}.
              Full Harvard citations are listed in the written documentation.</p>
          </div>
        </div>

        <div class="pad storynav">
          ${prev ? `<button class="card storynav-btn" data-go="story/${prev.id}">
                      <span class="t-label">← Chapter ${prev.n}</span>
                      <span class="t-small">${prev.title}</span></button>` : '<span></span>'}
          ${next ? `<button class="card storynav-btn storynav-next" data-go="story/${next.id}">
                      <span class="t-label">Chapter ${next.n} →</span>
                      <span class="t-small">${next.title}</span></button>` : '<span></span>'}
        </div>

      </div>`;
  },
});
