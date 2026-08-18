/* ==========================================================================
   20 · Accessibility settings   ·   21 · Virtual visitor
   ========================================================================== */

/* --- 20 · Settings -------------------------------------------------------------
   Every control here changes the running app immediately and persists. That is
   the point: the rationale can demonstrate the accessibility argument rather
   than assert it, because a marker can turn the settings on and watch the app
   respond. */

App.register({
  id: 'settings',
  title: 'Accessibility & display',
  section: 'home',
  bg: 'back',
  render() {
    const s = App.state.settings;
    const lang = Data.languages.find(l => l.code === s.language) || Data.languages[0];

    const sizeOption = (v, label, note) => `
      <button class="sizeopt" data-size="${v}" aria-pressed="${s.textsize === v}">
        <span class="sizeopt-sample sizeopt-${v}">Aa</span>
        <span class="sizeopt-label">${label}</span>
        <span class="t-small">${note}</span>
      </button>`;

    const toggle = (key, on, title, desc) => `
      <button class="toggle" data-toggle="${key}" aria-pressed="${on}">
        <span class="tg-text">
          <span class="tg-title">${title}</span>
          <span class="tg-desc">${desc}</span>
        </span>
        <span class="tg-state">${on ? 'On' : 'Off'}</span>
        <span class="tg-switch" aria-hidden="true"></span>
      </button>`;

    return `
      ${UI.statusbar()}
      ${UI.appbar('Accessibility', { back: true, sub: 'These settings apply everywhere and are remembered' })}
      <div class="scroll has-nav" id="main">

        ${UI.sectionhead('Text size')}
        <div class="pad sizegrid">
          ${sizeOption('normal', 'Default', '16px body')}
          ${sizeOption('large', 'Large', '18px body')}
          ${sizeOption('xlarge', 'Largest', '21px body')}
        </div>

        ${UI.sectionhead('Display')}
        <div class="pad">
          ${toggle('contrast', App.state.settings.contrast === 'high', 'High contrast',
            'Removes the background artwork behind text and strengthens every border.')}
          ${toggle('motion', App.state.settings.motion === 'reduced', 'Reduce motion',
            'Stops screen transitions, the splash animation and carousel easing.')}
          ${toggle('captions', s.captions, 'Captions by default',
            'Turns captions on for the live stream and any video.')}
          ${toggle('haptics', s.haptics, 'Haptic feedback',
            'Short vibration on confirmations, where the device supports it.')}
        </div>

        ${UI.sectionhead('Language')}
        <div class="pad">
          <button class="listrow" data-go="language">
            <span class="grow">
              <span class="t-white">${UI.esc(lang.native)}</span><br>
              <span class="t-small">${UI.esc(lang.english)} · six languages available</span>
            </span>
            <span class="t-label">Change →</span>
          </button>
        </div>

        <div class="pad">
          <div class="callout">
            <p class="t-label">What we measured</p>
            <p class="t-small" style="margin-top:6px">Body text is Atkinson Hyperlegible, drawn by
            the Braille Institute for low-vision readers. White on the ground colour measures
            20.3:1 and mint measures 12.0:1, both well past the WCAG AA minimum of 4.5:1.
            Magenta is never used for text because it measures 2.98:1 and fails.</p>
          </div>
          <div class="callout">
            <p class="t-label">Sensory warning</p>
            <p class="t-small" style="margin-top:6px">Il Ragno uses strobe lighting and haze from
            midnight. The quiet zone beside Gate 1 stays low-light and unamplified all night.</p>
          </div>
        </div>
      </div>`;
  },

  mount(el) {
    el.querySelectorAll('[data-size]').forEach(b => b.addEventListener('click', () => {
      App.setSetting('textsize', b.dataset.size);
      el.querySelectorAll('[data-size]').forEach(x =>
        x.setAttribute('aria-pressed', String(x === b)));
      App.announce(`Text size ${b.dataset.size}`);
    }));

    el.querySelectorAll('[data-toggle]').forEach(b => b.addEventListener('click', () => {
      const key = b.dataset.toggle;
      const on = b.getAttribute('aria-pressed') === 'true';
      const next = !on;

      if (key === 'contrast')    App.setSetting('contrast', next ? 'high' : 'normal');
      else if (key === 'motion') App.setSetting('motion', next ? 'reduced' : 'normal');
      else                       App.setSetting(key, next);

      b.setAttribute('aria-pressed', String(next));
      b.querySelector('.tg-state').textContent = next ? 'On' : 'Off';
      App.announce(`${b.querySelector('.tg-title').textContent} ${next ? 'on' : 'off'}`);
    }));
  },
});

/* --- 21 · Virtual visitor --------------------------------------------------------
   The brief names virtual visitors twice and the wireframe had nothing for
   them. Captions and timezone conversion are the two things that actually make
   a stream usable from another country, so both are on this screen rather than
   buried in settings. */

App.register({
  id: 'virtual',
  title: 'Watch live',
  section: 'event',
  bg: 'music',
  render() {
    // The stream is billed as La Ronda below, so pick whoever is on that
    // stage rather than naming an artist id that the lineup may not keep.
    const now = Data.artists.find(a => a.stage === 'ronda') || Data.artists[0];
    return `
      ${UI.statusbar()}
      ${UI.appbar('Watch live', { back: true, sub: 'All three stages, from anywhere' })}
      <div class="scroll has-nav" id="main">

        <div class="stream">
          <div class="stream-frame">
            <span class="live-badge"><span class="live-dot" aria-hidden="true"></span>LIVE</span>
            <!-- The compilation sleeve, same as every other cover in the app since
                 the per-artist artwork was dropped. The performer is named in the
                 bar underneath, which is what identifies the stream. -->
            <div class="stream-art art-compilation" aria-hidden="true"></div>
            <div class="stream-captions" aria-live="off">
              <span>[tamburello, fast] …and the circle opens for whoever needs it…</span>
            </div>
          </div>
          <div class="stream-bar">
            <span class="t-small">${UI.esc(now.name)} · La Ronda</span>
            <span class="chip chip-mint">Captions on</span>
          </div>
        </div>

        ${UI.sectionhead('Choose a stage')}
        <div class="pad stack gap-2">
          ${Data.stages.map((s, i) => `
            <button class="listrow stagepick" aria-current="${i === 0 ? 'true' : 'false'}"
                    data-stage="${s.id}">
              <span class="grow">
                <span class="t-white">${UI.esc(s.name)}</span><br>
                <span class="t-small">${UI.esc(s.note)}</span>
              </span>
              ${i === 0 ? '<span class="chip chip-mint">Watching</span>' : '<span class="t-label">Switch →</span>'}
            </button>`).join('')}
        </div>

        ${UI.sectionhead('In your timezone')}
        <div class="pad">
          <div class="field">
            <label for="tz">Show set times in</label>
            <select id="tz">
              <option value="11">Melbourne (AEDT, UTC+11)</option>
              <option value="1">Rome (CET, UTC+1)</option>
              <option value="0">London (GMT, UTC+0)</option>
              <option value="-5">New York (EST, UTC−5)</option>
              <option value="8">Singapore (UTC+8)</option>
            </select>
            <p class="hint">Set times below convert automatically. Melbourne is the festival's
            local time.</p>
          </div>
          <div class="stack" id="tzlist"></div>
        </div>

        <div class="pad">
          <div class="callout">
            <p class="t-label">Included</p>
            <p class="t-small" style="margin-top:6px">A Virtual Pass is ${UI.money(25)} and includes all
            three stages, captions in six languages, and a 30-day replay. Deaf and hard-of-hearing
            viewers get captions on every stage, not only the main one.</p>
          </div>
        </div>
      </div>`;
  },

  mount(el) {
    const sel = el.querySelector('#tz');
    const list = el.querySelector('#tzlist');

    const paint = () => {
      const offset = Number(sel.value);
      const melb = 11;
      list.innerHTML = Data.artists.map(a => {
        const [h, m] = a.time.split(':').map(Number);
        let local = (h + (offset - melb) + 24) % 24;
        const nextDay = h + (offset - melb) >= 24 ? ' +1d' : (h + (offset - melb) < 0 ? ' −1d' : '');
        return `
          <div class="listrow" style="pointer-events:none">
            <span class="grow"><span class="t-white">${UI.esc(a.name)}</span><br>
              <span class="t-small">${UI.esc(a.role)}</span></span>
            <span class="t-mint" style="font-family:var(--font-display)">
              ${String(local).padStart(2, '0')}:${String(m).padStart(2, '0')}${nextDay}</span>
          </div>`;
      }).join('');
    };
    sel.addEventListener('change', () => {
      paint();
      App.announce(`Times shown in ${sel.options[sel.selectedIndex].text}`);
    });
    paint();

    el.querySelectorAll('[data-stage]').forEach(b => b.addEventListener('click', () => {
      el.querySelectorAll('[data-stage]').forEach(x => x.setAttribute('aria-current', String(x === b)));
      App.toast(`Switched to ${b.querySelector('.t-white').textContent}`);
    }));
  },
});
