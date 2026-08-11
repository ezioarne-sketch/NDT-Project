/* ==========================================================================
   Event screens — Hub, Map (Flemington), Schedule, Transport & Access.
   ========================================================================== */

/* Times run past midnight, so 01:00 must sort after 23:00. */
function nightOrder(t) {
  const [h, m] = t.split(':').map(Number);
  return (h < 6 ? h + 24 : h) * 60 + m;
}

/* --- 06 · Event hub --------------------------------------------------------- */

App.register({
  id: 'event',
  title: 'Event',
  section: 'event',
  bg: 'event',
  render() {
    const f = Data.festival;
    return `
      ${UI.statusbar()}
      ${UI.appbar('Event', { sub: `${f.venue} · ${f.date}` })}
      <div class="scroll has-nav" id="main">
        <div class="pad stack gap-3">

          <button class="card hubcard" data-go="map">
            <span class="hub-art hub-art-map" aria-hidden="true"></span>
            <span class="hub-text">
              <span class="t-h2">Site map</span>
              <span class="t-small">Stages, food, toilets, first aid, step-free routes</span>
            </span>
          </button>

          <button class="card hubcard" data-go="schedule">
            <span class="hub-art hub-art-sched" aria-hidden="true"></span>
            <span class="hub-text">
              <span class="t-h2">Schedule</span>
              <span class="t-small">Three stages and six workshops, ${f.gates} to ${f.close}</span>
            </span>
          </button>

          <button class="card hubcard" data-go="transport">
            <span class="hub-art hub-art-transport" aria-hidden="true"></span>
            <span class="hub-text">
              <span class="t-h2">Transport &amp; access</span>
              <span class="t-small">Trains, trams, shuttles, parking, accessible entry</span>
            </span>
          </button>

          <button class="card hubcard" data-go="virtual">
            <span class="hub-art hub-art-virtual" aria-hidden="true"></span>
            <span class="hub-text">
              <span class="t-h2">Can't be there</span>
              <span class="t-small">Watch all three stages live from anywhere</span>
            </span>
          </button>

        </div>

        <div class="pad">
          <div class="callout">
            <p class="t-label">Gates and curfew</p>
            <p class="t-small" style="margin-top:6px">Gates open ${f.gates} and close to entry at 01:00.
            Il Ragno runs to ${f.close}. Last train 01:20; shuttles run until 04:30.</p>
          </div>
        </div>
      </div>`;
  },
});

/* --- 07 · Map — Flemington Racecourse ----------------------------------------
   The racecourse is drawn as original vector artwork in the campaign palette
   rather than an embedded map service: it keeps the visual identity, works
   with no signal on site, and carries no attribution or licensing problem.

   The layout is a stylised reading of the real site — the pear-shaped course,
   the Straight Six cutting across it to the winning post, grandstands along
   the home straight, the Maribyrnong to the north-west, Epsom Road and the
   racecourse station to the south-east. */

const FlemingtonMap = () => `
<svg class="map-svg" viewBox="8 12 384 428" role="img"
     aria-label="Site map of Flemington Racecourse showing three stages, food, facilities and accessible entrances.">
  <defs>
    <linearGradient id="infield" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%"  stop-color="#12301F"/>
      <stop offset="100%" stop-color="#0A1A12"/>
    </linearGradient>
    <linearGradient id="trackg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%"  stop-color="#3B1B33"/>
      <stop offset="100%" stop-color="#2A1426"/>
    </linearGradient>
  </defs>

  <!-- Maribyrnong River, north-west boundary -->
  <path d="M 186,-12 C 132,16 80,44 44,88 C 8,132 -6,192 6,256 C 16,312 36,362 66,402"
        fill="none" stroke="#16323F" stroke-width="26" stroke-linecap="round" opacity="0.85"/>
  <path d="M 186,-12 C 132,16 80,44 44,88 C 8,132 -6,192 6,256 C 16,312 36,362 66,402"
        fill="none" stroke="#1E4A5C" stroke-width="2" stroke-dasharray="7 9" opacity="0.7"/>

  <!-- Smithfield Road, west -->
  <path d="M 96,26 C 56,74 38,140 42,206 C 46,272 66,332 96,378"
        fill="none" stroke="#20262A" stroke-width="9" stroke-linecap="round"/>

  <!-- Epsom Road, south-east -->
  <path d="M 108,462 L 400,268" fill="none" stroke="#20262A" stroke-width="11" stroke-linecap="round"/>

  <!-- Racecourse: track band (outer minus inner, evenodd) -->
  <path fill-rule="evenodd" fill="url(#trackg)" stroke="#5A2A4E" stroke-width="1.5"
        d="M 200,30 C 268,30 330,72 356,140 C 382,208 372,286 322,342
           C 272,398 190,424 130,404 C 70,384 38,326 38,258
           C 38,190 62,120 106,74 C 132,46 166,30 200,30 Z
           M 200,86 C 252,86 298,118 318,172 C 338,226 330,288 292,330
           C 254,372 192,392 146,376 C 100,360 76,314 76,260
           C 76,206 96,150 130,114 C 150,94 174,86 200,86 Z"/>

  <!-- Infield (the lawn, where the festival is built) -->
  <path fill="url(#infield)" stroke="#1B7A4A" stroke-width="1.5" opacity="0.95"
        d="M 200,86 C 252,86 298,118 318,172 C 338,226 330,288 292,330
           C 254,372 192,392 146,376 C 100,360 76,314 76,260
           C 76,206 96,150 130,114 C 150,94 174,86 200,86 Z"/>

  <!-- The Straight Six, running to the winning post -->
  <path d="M 80,232 L 296,344" fill="none" stroke="#3B1B33" stroke-width="13" opacity="0.9"/>
  <path d="M 80,232 L 296,344" fill="none" stroke="#5A2A4E" stroke-width="1" stroke-dasharray="5 7"/>

  <!-- Winning post -->
  <circle cx="296" cy="344" r="4" fill="#7FD9A8"/>

  <!-- Grandstands along the home straight -->
  <g fill="#1A2020" stroke="#394242" stroke-width="1.2">
    <rect x="296" y="352" width="46" height="19" rx="3" transform="rotate(-28 296 352)"/>
    <rect x="264" y="386" width="42" height="17" rx="3" transform="rotate(-28 264 386)"/>
    <rect x="234" y="416" width="38" height="16" rx="3" transform="rotate(-28 234 416)"/>
  </g>

  <!-- Railway station, south-east -->
  <g>
    <rect x="330" y="392" width="34" height="20" rx="4" fill="#151A1A" stroke="#4A5555" stroke-width="1.2"/>
    <path d="M 336,398 h 22 M 336,404 h 22" stroke="#7FD9A8" stroke-width="1.6"/>
  </g>

  <!-- Nursery car park, on the real dead ground to the south-west -->
  <path d="M 76,382 L 148,416 L 126,438 L 48,404 Z"
        fill="#12181A" stroke="#2A3336" stroke-width="1.2"/>
  <g stroke="#2A3336" stroke-width="1">
    <path d="M 84,390 L 142,418 M 74,402 L 130,429"/>
  </g>

  <!-- Step-free route: station to Gate 3 to the main stage -->
  <path d="M 330,400 C 312,388 300,376 296,364 C 288,340 262,300 220,238"
        fill="none" stroke="#7FD9A8" stroke-width="2.5" stroke-dasharray="2 7"
        stroke-linecap="round" opacity="0.75"/>

  <!-- Place names. These are what make the drawing read as Flemington rather
       than as a generic oval, and they cost nothing in clutter. -->
  <g font-family="Atkinson Hyperlegible, sans-serif" font-size="9"
     letter-spacing="1.1" fill="#7E8C8C" text-anchor="middle">
    <text transform="translate(22,214) rotate(-79)">MARIBYRNONG RIVER</text>
    <text transform="translate(58,150) rotate(-74)">SMITHFIELD RD</text>
    <text transform="translate(352,312) rotate(-33.6)">EPSOM ROAD</text>
    <text transform="translate(99,410) rotate(-24)" fill="#6A7676">NURSERY CAR PARK</text>
    <text x="347" y="428" fill="#7FD9A8">STATION</text>
  </g>
</svg>`;

App.register({
  id: 'map',
  title: 'Map',
  section: 'event',
  bg: 'event',
  render() {
    return `
      ${UI.statusbar()}
      ${UI.appbar('Site map', { back: true, sub: 'Flemington Racecourse' })}

      <div class="chiprow map-filters" role="group" aria-label="Filter map pins">
        ${Data.mapFilters.map((f, i) => `
          <button class="chip map-filter" data-filter="${f.id}"
                  aria-pressed="${i === 0 ? 'true' : 'false'}">${f.label}</button>`).join('')}
      </div>

      <div class="scroll has-nav" id="main">
        <div class="mapwrap">
          ${FlemingtonMap()}
          <div class="pins">
            ${Data.mapPins.map(p => `
              <button class="pin pin-${p.type} ${p.type === 'stage' ? 'pin-named' : ''}"
                      data-pin="${p.id}"
                      style="left:${p.x}%; top:${p.y}%"
                      aria-label="${UI.esc(p.name)} — ${UI.esc(p.sub)}">
                <span class="pin-dot" aria-hidden="true"></span>
                <span class="pin-label">${UI.esc(p.name)}</span>
              </button>`).join('')}
          </div>
        </div>

        <div class="maplegend" aria-hidden="true">
          <span><i class="pin-dot pin-stage"></i>Stage</span>
          <span><i class="pin-dot pin-food"></i>Food &amp; bars</span>
          <span><i class="pin-dot pin-facil"></i>Facilities</span>
          <span><i class="pin-dot pin-access"></i>Access</span>
        </div>

        <div class="pad">
          <div class="callout">
            <p class="t-label">Step-free route</p>
            <p class="t-small" style="margin-top:6px">The dashed line runs from the station
            through Gate 3 to La Ronda. It is sealed, lit, and stays step-free the whole way.</p>
          </div>
        </div>

        ${UI.sectionhead('All locations')}
        <div class="pad stack">
          ${Data.mapPins.map(p => `
            <button class="listrow" data-pin="${p.id}">
              <span class="pin-dot pin-${p.type}" aria-hidden="true"></span>
              <span class="grow">
                <span class="t-white">${UI.esc(p.name)}</span><br>
                <span class="t-small">${UI.esc(p.sub)} · ${UI.esc(p.hours)}</span>
              </span>
            </button>`).join('')}
        </div>
      </div>`;
  },
  mount(el) {
    // Pin overlays
    el.querySelectorAll('[data-pin]').forEach(b =>
      b.addEventListener('click', () => Overlays.pin(b.dataset.pin)));

    // Filters. "All" is exclusive; the rest are a single-select for clarity.
    const chips = el.querySelectorAll('.map-filter');
    chips.forEach(chip => chip.addEventListener('click', () => {
      const want = chip.dataset.filter;
      chips.forEach(c => c.setAttribute('aria-pressed', c === chip ? 'true' : 'false'));
      el.querySelectorAll('.pin').forEach(pin => {
        const show = want === 'all' || pin.classList.contains(`pin-${want}`);
        pin.hidden = !show;
      });
      const n = want === 'all'
        ? Data.mapPins.length
        : Data.mapPins.filter(p => p.type === want).length;
      App.announce(`${n} locations shown`);
    }));
  },
});

/* --- 08 · Schedule ----------------------------------------------------------- */

App.register({
  id: 'schedule',
  title: 'Schedule',
  section: 'event',
  bg: 'event',
  render() {
    const sets = Data.artists.map(a => ({
      kind: 'set', time: a.time, name: a.name, sub: a.role,
      stage: a.stage, dur: a.duration, id: a.id,
    }));
    const shops = Data.workshops.map(w => ({
      kind: 'workshop', time: w.time, name: w.name, sub: w.where,
      dur: w.dur, id: w.id,
    }));
    const all = [...sets, ...shops].sort((a, b) => nightOrder(a.time) - nightOrder(b.time));

    return `
      ${UI.statusbar()}
      ${UI.appbar('Schedule', { back: true, sub: `${Data.festival.gates} — ${Data.festival.close}` })}
      <div class="scroll has-nav" id="main">

        <div class="pad">
          <div class="stagekey">
            ${Data.stages.map(s => `
              <span class="chip ${s.colour === 'mint' ? 'chip-mint' : s.colour === 'green' ? 'chip-green' : ''}">${s.name}</span>`).join('')}
          </div>
        </div>

        <div class="timeline pad">
          ${all.map(item => `
            <button class="tl-row" ${item.kind === 'set'
              ? `data-go="artist/${item.id}"`
              : `data-workshop="${item.id}"`}>
              <span class="tl-time">${item.time}</span>
              <span class="tl-line" aria-hidden="true"></span>
              <span class="tl-body">
                <span class="tl-name">${UI.esc(item.name)}</span>
                <span class="t-small">${UI.esc(item.sub)} · ${item.dur}</span>
                <span class="tl-tags">
                  ${item.kind === 'set' ? UI.stagePill(item.stage) : '<span class="chip">Workshop</span>'}
                </span>
              </span>
            </button>`).join('')}
        </div>

        <div class="pad">
          <div class="callout">
            <p class="t-label">Access</p>
            <p class="t-small" style="margin-top:6px">Every workshop lists its capacity, language
            and access notes — open one to see them. Terra Rossa and the workshop tent are
            fitted with hearing loops.</p>
          </div>
        </div>
      </div>`;
  },
  mount(el) {
    el.querySelectorAll('[data-workshop]').forEach(b =>
      b.addEventListener('click', () => Overlays.workshop(b.dataset.workshop)));
  },
});

/* --- 09 · Transport & Access --------------------------------------------------- */

App.register({
  id: 'transport',
  title: 'Transport & Access',
  section: 'event',
  bg: 'back',
  render() {
    return `
      ${UI.statusbar()}
      ${UI.appbar('Getting here', { back: true, sub: 'Flemington Racecourse, Melbourne' })}
      <div class="scroll has-nav" id="main">
        <div class="pad stack gap-4">
          ${Data.transport.map(t => `
            <section class="card transport-card">
              <div class="row between gap-3">
                <h2 class="t-h2">${t.name}</h2>
                <span class="chip">${UI.esc(t.headline)}</span>
              </div>
              <ul class="tlist">
                ${t.lines.map(l => `<li>${l}</li>`).join('')}
              </ul>
              <p class="access-note"><strong>Access:</strong> ${t.access}</p>
            </section>`).join('')}

          <div class="callout">
            <p class="t-label">Companion Card</p>
            <p class="t-small" style="margin-top:6px">Companion Card holders receive a free
            second ticket. Present the card with your ticket at Gate 3.</p>
          </div>

          <div class="callout">
            <p class="t-label">Assistance animals</p>
            <p class="t-small" style="margin-top:6px">Assistance animals are welcome across the
            whole site. A relief area and water are provided beside the quiet zone.</p>
          </div>
        </div>
      </div>`;
  },
});
