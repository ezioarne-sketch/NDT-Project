/* ==========================================================================
   Music screens — Player, Now Playing, Library, Artist profile.

   The Figma wireframe was built on a community UI kit carrying real artists
   (Imagine Dragons, Odesza); all of it is replaced with the festival's own
   invented lineup, which removes the attribution problem and fixes the
   cultural mismatch of a pizzica festival playing stadium rock.

   The AUDIO is the one exception, and it is a deliberate, scoped one. Six
   Notte della Taranta festival recordings sit in /Music so that the play
   button works in the assessment demo — a dead transport is hard to present.
   They are not licensed for distribution and are not part of the design work.
   The names, titles, covers and artwork remain the project's own.
   ========================================================================== */

/* One track per artist, and the lineup IS the track list.

   It used to be three invented titles per artist, eighteen in all, sharing six
   recordings between them — so three rows played the same audio and reported
   the same length. Six real recordings means six tracks, and every row now
   plays something different. */
const Tracks = Data.artists.map(a => ({
  id: a.id,
  name: a.title,
  artist: a.name,
  artistId: a.id,
  year: a.year,
  src: a.src,
  // The recording's true length, measured once and stored in data.js. The
  // player still prefers whatever the loaded file reports, so the two can
  // never drift; this is what the lists show before anything has loaded.
  secs: a.secs,
}));

const mmss = s => `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, '0')}`;

/* The compilation sleeve — the only cover art in the app.

   Six drawn covers, one per invented artist, stood here until 18 August. The
   lineup they were drawn for no longer exists, and six sleeves across six
   tracks from the same festival was arguing that these are six releases when
   they are one. A single sleeve on every track says compilation, which is what
   this is. build_covers() in tools/build-assets.py still holds the drawing
   code; it is simply no longer part of the build.

   No initials over the top: the sleeve carries its own wordmark. */
function sleeve(cls = '') {
  return `
    <div class="art art-compilation ${cls}" role="img"
         aria-label="Notte della Taranta — festival compilation, cover art"></div>`;
}

/* --- Shared player state ------------------------------------------------------
   One player for the whole app, so the Player and Now Playing screens agree.

   This was a silent transport driven by setInterval until 18 August: correct
   behaviour, no sound. It now drives a real <audio> element, which means the
   position and duration are read from the file rather than counted up — a
   faked clock and a real one disagree the moment a track is not exactly as
   long as the placeholder said it was. */

const Player = {
  index: 0,
  playing: false,
  pos: 0,

  /* One <audio> for the whole app, created once and never attached to the DOM.
     It does not need to be in the tree to play, and keeping it out means no
     screen render can destroy the element mid-track. */
  el: Object.assign(new Audio(), { preload: 'metadata' }),

  get track() { return Tracks[this.index]; },

  /* Length in seconds: the file's own duration once the browser has read it,
     otherwise the placeholder. Guarded because duration is NaN until metadata
     arrives, and Infinity for a stream. */
  get secs() {
    const d = this.el.duration;
    return Number.isFinite(d) && d > 0 ? d : this.track.secs;
  },

  /* Points the element at the current track. Called on every track change
     rather than on play, so the scrubber can show a real duration before
     anything is playing. */
  load() {
    const src = this.track.src;
    this.pos = 0;
    if (!src) { this.el.removeAttribute('src'); this.el.load(); return; }
    // Resolved against the document so the comparison below is like-for-like.
    const want = new URL(src, location.href).href;
    if (this.el.src !== want) { this.el.src = want; this.el.load(); }
  },

  toggle() {
    this.playing = !this.playing;
    if (this.playing) {
      /* play() rejects if the browser blocks it or the file is missing. Every
         call here comes from a click so autoplay policy is satisfied, but a
         missing file must not leave the button stuck showing a pause icon. */
      const p = this.el.play();
      if (p) p.catch(() => { this.playing = false; this.paint(); });
    } else {
      this.el.pause();
    }
    this.paint();
    App.announce(this.playing ? `Playing ${this.track.name}` : 'Paused');
  },

  next() { this.index = (this.index + 1) % Tracks.length; this.go(); },
  prev() { this.index = (this.index - 1 + Tracks.length) % Tracks.length; this.go(); },

  /* Shared tail of every track change: load the new file, and keep playing if
     we already were. */
  go() {
    this.load();
    if (this.playing) {
      const p = this.el.play();
      if (p) p.catch(() => { this.playing = false; this.paint(); });
    }
    this.paint();
  },

  seek(v) {
    this.pos = Math.min(v, this.secs);
    if (this.track.src) this.el.currentTime = this.pos;
    this.paint();
  },

  play(id) {
    const i = Tracks.findIndex(t => t.id === id);
    if (i < 0) return;
    this.index = i;
    if (this.playing) { this.go(); }
    else { this.load(); this.toggle(); }
  },

  /* Repaints whatever player UI happens to be on screen. */
  paint() {
    const secs = this.secs;
    document.querySelectorAll('[data-player-name]').forEach(e => e.textContent = this.track.name);
    document.querySelectorAll('[data-player-artist]').forEach(e => e.textContent = this.track.artist);
    document.querySelectorAll('[data-player-year]').forEach(e => e.textContent = this.track.year);
    document.querySelectorAll('[data-player-pos]').forEach(e => e.textContent = mmss(this.pos));
    document.querySelectorAll('[data-player-dur]').forEach(e => e.textContent = mmss(secs));
    document.querySelectorAll('[data-player-seek]').forEach(e => {
      e.max = secs; e.value = this.pos;
      e.setAttribute('aria-valuetext', `${mmss(this.pos)} of ${mmss(secs)}`);
    });
    document.querySelectorAll('[data-player-toggle]').forEach(e => {
      e.setAttribute('aria-pressed', String(this.playing));
      e.setAttribute('aria-label', this.playing ? 'Pause' : 'Play');
      e.querySelector('.pp').textContent = this.playing ? '❚❚' : '▶';
    });
  },
};

/* The element drives the UI, not a timer. `timeupdate` fires a few times a
   second while playing, which is what moves the scrubber; `loadedmetadata`
   repaints once the real duration is known; `ended` advances the list. */
Player.el.addEventListener('timeupdate', () => {
  Player.pos = Player.el.currentTime;
  Player.paint();
});
Player.el.addEventListener('loadedmetadata', () => Player.paint());
Player.el.addEventListener('ended', () => Player.next());
Player.load();

window.Player = Player;

/* Transport controls, shared by both player screens. */
function transport(size = '') {
  return `
    <div class="transport ${size}">
      <button class="tbtn" data-player-prev aria-label="Previous track">⏮</button>
      <button class="tbtn tbtn-main" data-player-toggle aria-pressed="false" aria-label="Play">
        <span class="pp">▶</span>
      </button>
      <button class="tbtn" data-player-next aria-label="Next track">⏭</button>
    </div>`;
}

function scrubber() {
  return `
    <div class="scrub">
      <input type="range" data-player-seek min="0" max="200" value="0" step="1"
             aria-label="Seek within track">
      <div class="scrub-times">
        <span data-player-pos>0:00</span>
        <span data-player-dur>0:00</span>
      </div>
    </div>`;
}

function wirePlayer(el) {
  el.querySelectorAll('[data-player-toggle]').forEach(b => b.addEventListener('click', () => Player.toggle()));
  el.querySelectorAll('[data-player-next]').forEach(b => b.addEventListener('click', () => Player.next()));
  el.querySelectorAll('[data-player-prev]').forEach(b => b.addEventListener('click', () => Player.prev()));
  el.querySelectorAll('[data-player-seek]').forEach(s =>
    s.addEventListener('input', e => Player.seek(Number(e.target.value))));
  el.querySelectorAll('[data-track]').forEach(b =>
    b.addEventListener('click', () => Player.play(b.dataset.track)));
  Player.paint();
}

/* --- 10 · Music player --------------------------------------------------------- */

App.register({
  id: 'music',
  title: 'Music',
  section: 'music',
  bg: 'music',
  render() {
    const t = Tracks[Player.index];
    return `
      ${UI.statusbar()}
      ${UI.appbar('Music', { sub: 'The lineup, and what they play' })}
      <div class="scroll has-nav" id="main">

        <button class="nowcard" data-go="nowplaying" aria-label="Open now playing">
          ${sleeve('art-lg')}
          <div class="nowcard-meta">
            ${UI.label('Now playing')}
            <p class="t-h2" data-player-name style="margin-top:6px">${t.name}</p>
            <p class="t-small" data-player-artist>${t.artist}</p>
            <p class="t-label" style="margin-top:4px">Notte della Taranta <span data-player-year>${t.year}</span></p>
          </div>
        </button>

        <div class="pad">
          ${scrubber()}
          ${transport()}
        </div>

        ${UI.sectionhead("Tonight's lineup")}
        <div class="carousel-wrap">
          <div class="carousel" aria-label="Artists performing tonight">
            ${/* No cover on these. There is one sleeve in the app now, and six
                  cards side by side carrying the same large disc reads as a
                  bug rather than as a compilation — the eye is being shown six
                  copies of one image and told they are six different acts.
                  These are performer cards, so they lead on the performer. */''}
            ${Data.artists.map(a => `
              <button class="card artist-card" data-go="artist/${a.id}">
                <div class="body">
                  <span class="t-label">${a.year}</span>
                  <h3 class="t-h2" style="margin-top:6px">${UI.esc(a.name)}</h3>
                  <p class="t-small" style="margin-top:5px">${UI.esc(a.role)}</p>
                  <p class="t-small t-mint" style="margin-top:7px">${UI.esc(a.title)}</p>
                  <div class="tl-tags" style="margin-top:9px">${UI.stagePill(a.stage)}
                    <span class="chip">${a.time}</span></div>
                </div>
              </button>`).join('')}
          </div>
          <div class="dots"></div>
        </div>

        ${/* The whole compilation, not a "top five" cut from it. There are six
              tracks in total now, so a chart of the popular ones would be the
              same list with a different heading on it. */''}
        ${UI.sectionhead('The compilation', 'Library', 'library')}
        <div class="pad stack">
          ${Tracks.map((tr, i) => `
            <button class="listrow" data-track="${tr.id}">
              <span class="num">${String(i + 1).padStart(2, '0')}</span>
              <span class="grow">
                <span class="t-white">${UI.esc(tr.name)}</span><br>
                <span class="t-small">${UI.esc(tr.artist)} · ${tr.year}</span>
              </span>
              <span class="t-small" data-track-dur="${tr.id}">${mmss(tr.secs)}</span>
            </button>`).join('')}
        </div>
      </div>`;
  },
  mount(el) { wirePlayer(el); },
});

/* --- 11 · Now playing ----------------------------------------------------------- */

App.register({
  id: 'nowplaying',
  title: 'Now playing',
  section: 'music',
  bg: 'music',
  nav: false,
  render() {
    const t = Tracks[Player.index];
    return `
      ${UI.statusbar()}
      ${UI.appbar('', { back: true, actions: `<span class="t-label">Now playing</span>` })}
      <div class="scroll" id="main">
        <div class="np">
          ${sleeve('art-hero')}
          <div class="np-meta">
            <h2 class="t-h1" data-player-name>${t.name}</h2>
            <button class="np-artist t-mint" data-go="artist/${t.artistId}">
              <span data-player-artist>${t.artist}</span> →
            </button>
            ${/* Which year's festival this recording is from. It sits with the
                  credit rather than the title because it qualifies the
                  performance, not the song — "Pizzica di San Vito" is
                  centuries old; this reading of it is from 2022. */''}
            <p class="np-year t-label">Notte della Taranta <span data-player-year>${t.year}</span></p>
          </div>
          ${scrubber()}
          ${transport('transport-lg')}
          <div class="np-extra">
            <button class="chip" data-toast="Added to your library">＋ Save</button>
            <button class="chip" data-go="library">Queue</button>
            <button class="chip" data-toast="Lyrics are not available for this track">Lyrics</button>
          </div>
        </div>
      </div>`;
  },
  mount(el) { wirePlayer(el); },
});

/* --- 12 · Library ----------------------------------------------------------------- */

App.register({
  id: 'library',
  title: 'Track library',
  section: 'music',
  bg: 'music',
  render() {
    return `
      ${UI.statusbar()}
      ${UI.appbar('Library', { back: true, sub: `${Tracks.length} tracks · ${Data.artists.length} artists` })}
      <div class="scroll has-nav" id="main">
        ${/* One flat tracklist, not six one-track groups.

              Grouping by artist made sense at three tracks each. At one track
              each it produces six headings each followed by a single row, which
              reads as a list that has gone wrong. A compilation is a running
              order, so it is presented as one — and the sleeve at the top is
              what the grouping was doing anyway: saying these belong together. */''}
        ${sleeve('art-hero')}
        <div class="pad" style="margin-top:var(--s-4)">
          <h2 class="t-h1">The Compilation</h2>
          <p class="t-small" style="margin-top:6px">Six performances from the
          festival's own stages, 2018&ndash;2025.</p>
        </div>

        <div class="pad stack" style="margin-top:var(--s-4)">
          ${Tracks.map((tr, i) => `
            <button class="listrow" data-track="${tr.id}">
              <span class="num">${String(i + 1).padStart(2, '0')}</span>
              ${sleeve('art-sm')}
              <span class="grow">
                <span class="t-white">${UI.esc(tr.name)}</span><br>
                <span class="t-small">${UI.esc(tr.artist)} · ${tr.year}</span>
              </span>
              <span class="t-small" data-track-dur="${tr.id}">${mmss(tr.secs)}</span>
            </button>`).join('')}
        </div>

        ${/* The tracklist rows play; they cannot also be links, because a button
              inside a button is not valid markup. The profiles stay reachable
              from here through their own row. */''}
        ${UI.sectionhead('Performers')}
        <div class="pad stack">
          ${Data.artists.map(a => `
            <button class="listrow" data-go="artist/${a.id}">
              <span class="grow">
                <span class="t-white">${UI.esc(a.name)}</span><br>
                <span class="t-small">${UI.esc(a.role)} · ${a.time}</span>
              </span>
              <span class="t-small t-mint">Profile →</span>
            </button>`).join('')}
        </div>
      </div>`;
  },
  mount(el) { wirePlayer(el); },
});

/* --- 19 · Artist profile ------------------------------------------------------------ */

App.register({
  id: 'artist',
  title: 'Artist',
  section: 'music',
  bg: 'music',
  render(params) {
    const a = Data.artists.find(x => x.id === params[0]) || Data.artists[0];
    const stage = Data.stages.find(s => s.id === a.stage);
    const tracks = Tracks.filter(t => t.artistId === a.id);

    return `
      ${UI.statusbar()}
      ${UI.appbar(a.name, { back: true, sub: a.role })}
      <div class="scroll has-nav" id="main">

        ${sleeve('art-hero')}

        <div class="pad" style="margin-top:var(--s-4)">
          <div class="tl-tags">
            ${UI.stagePill(a.stage)}
            <span class="chip chip-mint">${a.time}</span>
            <span class="chip">${a.duration}</span>
            <span class="chip">${UI.esc(a.origin)}</span>
          </div>
        </div>

        <div class="pad prose" style="margin-top:var(--s-4)">
          <p>${UI.esc(a.bio)}</p>
        </div>

        <div class="pad" style="margin-top:var(--s-5)">
          <button class="btn btn-primary btn-block" data-go="schedule">
            ${a.time} · ${UI.esc(stage ? stage.name : '')}
          </button>
        </div>

        ${UI.sectionhead('Listen')}
        <div class="pad stack">
          ${tracks.map((tr, i) => `
            <button class="listrow" data-track="${tr.id}">
              <span class="num">${String(i + 1).padStart(2, '0')}</span>
              <span class="grow"><span class="t-white">${UI.esc(tr.name)}</span></span>
              <span class="t-small" data-track-dur="${tr.id}">${mmss(tr.secs)}</span>
            </button>`).join('')}
        </div>

        ${UI.sectionhead('Also playing')}
        <div class="carousel-wrap">
          <div class="carousel" aria-label="Other artists">
            ${Data.artists.filter(x => x.id !== a.id).map(x => `
              <button class="card artist-card artist-card-sm" data-go="artist/${x.id}">
                <div class="body">
                  <h3 class="t-h2">${UI.esc(x.name)}</h3>
                  <p class="t-small" style="margin-top:4px">${UI.esc(x.title)}</p>
                  <p class="t-small t-mint" style="margin-top:4px">${x.time}</p>
                </div>
              </button>`).join('')}
          </div>
        </div>
      </div>`;
  },
  mount(el) { wirePlayer(el); },
});
