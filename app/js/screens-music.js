/* ==========================================================================
   Music screens — Player, Now Playing, Library, Artist profile.

   No copyrighted material appears anywhere here. The Figma wireframe was built
   on a community UI kit carrying real artists (Imagine Dragons, Odesza); all
   of it is replaced with the festival's own invented lineup, which removes the
   attribution problem and fixes the cultural mismatch of a pizzica festival
   playing stadium rock.
   ========================================================================== */

/* Flat track list, built from the lineup so the two can never disagree. */
const Tracks = Data.artists.flatMap((a, ai) =>
  a.tracks.map((t, ti) => ({
    id: `${a.id}-${ti}`,
    name: t,
    artist: a.name,
    artistId: a.id,
    // Deterministic pseudo-durations: a prototype needs plausible numbers, and
    // varying them per track stops the list looking like placeholder data.
    secs: 168 + ((ai * 37 + ti * 53) % 145),
  }))
);

const mmss = s => `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, '0')}`;

/* Cover art, one per artist, built by tools/build-assets.py.

   These were flat CSS gradients with the artist's initials on them until 15
   August. The lineup is invented, so there is no real release to reproduce and
   nothing to licence — which is exactly why the covers are DRAWN rather than
   sourced. Each carries a motif of what that artist actually plays: the ronda
   is a circle, the tamburello has jingles in its rim, the electronic set is a
   spectrum.

   The initials stay as live text over the artwork rather than being baked into
   the image: they scale with the user's text-size setting, and they are the
   fallback if a cover ever fails to load. */
function artwork(artistId, cls = '') {
  const a = Data.artists.find(x => x.id === artistId) || Data.artists[0];
  const initials = a.name.split(' ').filter(w => /^[A-Z]/.test(w)).slice(0, 2)
    .map(w => w[0]).join('');
  return `
    <div class="art art-${a.id} ${cls}" role="img" aria-label="${a.name} — cover art">
      <span class="art-initials" aria-hidden="true">${initials}</span>
    </div>`;
}

/* --- Shared player state ------------------------------------------------------
   One player for the whole app, so the Player and Now Playing screens agree.
   There is no audio file: this is a prototype, and a silent transport that
   behaves correctly is more honest than autoplaying a track we do not own. */

const Player = {
  index: 0,
  playing: false,
  pos: 0,
  timer: null,

  get track() { return Tracks[this.index]; },

  toggle() {
    this.playing = !this.playing;
    clearInterval(this.timer);
    if (this.playing) {
      this.timer = setInterval(() => {
        this.pos += 1;
        if (this.pos >= this.track.secs) { this.pos = 0; this.next(); }
        this.paint();
      }, 1000);
    }
    this.paint();
    App.announce(this.playing ? `Playing ${this.track.name}` : 'Paused');
  },
  next() { this.index = (this.index + 1) % Tracks.length; this.pos = 0; this.paint(); },
  prev() { this.index = (this.index - 1 + Tracks.length) % Tracks.length; this.pos = 0; this.paint(); },
  seek(v) { this.pos = Math.min(v, this.track.secs); this.paint(); },
  play(id) {
    const i = Tracks.findIndex(t => t.id === id);
    if (i >= 0) { this.index = i; this.pos = 0; if (!this.playing) this.toggle(); else this.paint(); }
  },

  /* Repaints whatever player UI happens to be on screen. */
  paint() {
    document.querySelectorAll('[data-player-name]').forEach(e => e.textContent = this.track.name);
    document.querySelectorAll('[data-player-artist]').forEach(e => e.textContent = this.track.artist);
    document.querySelectorAll('[data-player-pos]').forEach(e => e.textContent = mmss(this.pos));
    document.querySelectorAll('[data-player-dur]').forEach(e => e.textContent = mmss(this.track.secs));
    document.querySelectorAll('[data-player-seek]').forEach(e => {
      e.max = this.track.secs; e.value = this.pos;
      e.setAttribute('aria-valuetext', `${mmss(this.pos)} of ${mmss(this.track.secs)}`);
    });
    document.querySelectorAll('[data-player-toggle]').forEach(e => {
      e.setAttribute('aria-pressed', String(this.playing));
      e.setAttribute('aria-label', this.playing ? 'Pause' : 'Play');
      e.querySelector('.pp').textContent = this.playing ? '❚❚' : '▶';
    });
  },
};
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
          ${artwork(t.artistId, 'art-lg')}
          <div class="nowcard-meta">
            ${UI.label('Now playing')}
            <p class="t-h2" data-player-name style="margin-top:6px">${t.name}</p>
            <p class="t-small" data-player-artist>${t.artist}</p>
          </div>
        </button>

        <div class="pad">
          ${scrubber()}
          ${transport()}
        </div>

        ${UI.sectionhead('Tonight\'s lineup', 'Library', 'library')}
        <div class="carousel-wrap">
          <div class="carousel" aria-label="Artists performing tonight">
            ${Data.artists.map(a => `
              <button class="card card-media artist-card" data-go="artist/${a.id}">
                ${artwork(a.id)}
                <div class="body">
                  <h3 class="t-h2">${UI.esc(a.name)}</h3>
                  <p class="t-small" style="margin-top:5px">${UI.esc(a.role)}</p>
                  <div class="tl-tags" style="margin-top:9px">${UI.stagePill(a.stage)}
                    <span class="chip">${a.time}</span></div>
                </div>
              </button>`).join('')}
          </div>
          <div class="dots"></div>
        </div>

        ${UI.sectionhead('Popular tonight')}
        <div class="pad stack">
          ${Tracks.slice(0, 5).map((tr, i) => `
            <button class="listrow" data-track="${tr.id}">
              <span class="num">${String(i + 1).padStart(2, '0')}</span>
              <span class="grow">
                <span class="t-white">${UI.esc(tr.name)}</span><br>
                <span class="t-small">${UI.esc(tr.artist)}</span>
              </span>
              <span class="t-small">${mmss(tr.secs)}</span>
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
          ${artwork(t.artistId, 'art-hero')}
          <div class="np-meta">
            <h2 class="t-h1" data-player-name>${t.name}</h2>
            <button class="np-artist t-mint" data-go="artist/${t.artistId}">
              <span data-player-artist>${t.artist}</span> →
            </button>
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
        ${Data.artists.map(a => `
          <div class="libgroup">
            <div class="sectionhead">
              <h2>${UI.esc(a.name)}</h2>
              <button class="t-label t-mint" data-go="artist/${a.id}" style="letter-spacing:.1em">Profile →</button>
            </div>
            <div class="pad stack">
              ${/* Cover on every row. The library is the one screen that is a list of
                    SONGS rather than a list of artists, and without artwork it read as
                    a timetable. The artist profile deliberately does not repeat it —
                    there the hero cover is directly above the same three tracks. */''}
              ${Tracks.filter(t => t.artistId === a.id).map((tr, i) => `
                <button class="listrow" data-track="${tr.id}">
                  <span class="num">${String(i + 1).padStart(2, '0')}</span>
                  ${artwork(a.id, 'art-sm')}
                  <span class="grow"><span class="t-white">${UI.esc(tr.name)}</span></span>
                  <span class="t-small">${mmss(tr.secs)}</span>
                </button>`).join('')}
            </div>
          </div>`).join('')}
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

        ${artwork(a.id, 'art-hero')}

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
              <span class="t-small">${mmss(tr.secs)}</span>
            </button>`).join('')}
        </div>

        ${UI.sectionhead('Also playing')}
        <div class="carousel-wrap">
          <div class="carousel" aria-label="Other artists">
            ${Data.artists.filter(x => x.id !== a.id).map(x => `
              <button class="card card-media artist-card artist-card-sm" data-go="artist/${x.id}">
                ${artwork(x.id)}
                <div class="body">
                  <h3 class="t-h2">${UI.esc(x.name)}</h3>
                  <p class="t-small" style="margin-top:4px">${x.time}</p>
                </div>
              </button>`).join('')}
          </div>
        </div>
      </div>`;
  },
  mount(el) { wirePlayer(el); },
});
