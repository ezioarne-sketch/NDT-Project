/* ==========================================================================
   Overlays — rendered over the live screen rather than replacing it.

   The Figma wireframe wired both of these as screen swaps, which throws away
   the context the user was looking at. Here the parent screen stays visible
   behind the scrim, focus is trapped inside the dialog, and Escape or a tap
   outside closes it and returns focus to whatever opened it.
   ========================================================================== */

const Overlays = {

  /** Map pin detail (OV-Pin in the wireframe). */
  pin(id) {
    const p = Data.mapPins.find(x => x.id === id);
    if (!p) return;
    const typeLabel = {
      stage: 'Stage', food: 'Food & drink', facil: 'Facility', access: 'Accessibility',
    }[p.type] || '';

    App.openOverlay(`
      <div class="overlay-head">
        <div>
          <p class="t-label">${typeLabel}</p>
          <h2 style="margin-top:4px">${UI.esc(p.name)}</h2>
        </div>
        <button class="closebtn" data-close aria-label="Close">✕</button>
      </div>
      <p class="t-small" style="margin-bottom:var(--s-3)">${UI.esc(p.sub)} · ${UI.esc(p.hours)}</p>
      <p class="t-body">${UI.esc(p.detail)}</p>
      ${p.type === 'stage' ? `
        <button class="btn btn-secondary btn-block" style="margin-top:var(--s-4)"
                data-go="schedule">See what's on here</button>` : ''}
    `);
  },

  /** Transport mode detail.

      The transport screen used to print every mode's route notes and access
      note in full, then in a two-line preview that expanded in place. Both put
      the same problem on screen: four modes of detailed copy competing at once,
      and the titles — which are the only thing most people are scanning for —
      pushed below the fold. Nobody reads all four. They read the one they are
      taking, so the detail moves in here and the screen keeps the choice. */
  transport(id) {
    const t = Data.transport.find(x => x.id === id);
    if (!t) return;

    App.openOverlay(`
      <div class="overlay-head">
        <div>
          <p class="t-label">Getting here</p>
          <h2 style="margin-top:4px">${UI.esc(t.name)}</h2>
        </div>
        <button class="closebtn" data-close aria-label="Close">✕</button>
      </div>
      <p class="chip" style="margin-bottom:var(--s-3)">${UI.esc(t.headline)}</p>
      <ul class="tlist">
        ${t.lines.map(l => `<li>${l}</li>`).join('')}
      </ul>
      <p class="access-note" style="margin-top:var(--s-3)">
        <strong>Access:</strong> ${t.access}</p>
    `);
  },

  /** Workshop detail (OV-Workshop in the wireframe). */
  workshop(id) {
    const w = Data.workshops.find(x => x.id === id);
    if (!w) return;

    App.openOverlay(`
      <div class="overlay-head">
        <div>
          <p class="t-label">Workshop · ${w.time} · ${w.dur}</p>
          <h2 style="margin-top:4px">${UI.esc(w.name)}</h2>
        </div>
        <button class="closebtn" data-close aria-label="Close">✕</button>
      </div>
      <p class="t-body" style="margin-bottom:var(--s-4)">${UI.esc(w.detail)}</p>
      <dl class="deflist">
        <dt>Where</dt><dd>${UI.esc(w.where)}</dd>
        <dt>Capacity</dt><dd>${UI.esc(w.capacity)}</dd>
        <dt>Language</dt><dd>${UI.esc(w.language)}</dd>
        <dt>Access</dt><dd>${UI.esc(w.access)}</dd>
      </dl>
      <button class="btn btn-primary btn-block" style="margin-top:var(--s-5)"
              data-toast="Added to your schedule">Add to my night</button>
    `);
  },

  /** Cart sheet, opened from the shop and product screens. */
  cart() {
    const items = App.state.cart;
    const total = items.reduce((s, i) => s + i.price, 0);

    App.openOverlay(`
      <div class="grabber" aria-hidden="true"></div>
      <div class="overlay-head">
        <h2>Your bag</h2>
        <button class="closebtn" data-close aria-label="Close">✕</button>
      </div>
      ${items.length === 0
        ? `<p class="t-small" style="padding:var(--s-5) 0">Your bag is empty.</p>`
        : `<div class="stack">
             ${items.map(i => `
               <div class="listrow" style="pointer-events:none">
                 <span class="grow"><span class="t-white">${UI.esc(i.name)}</span></span>
                 <span class="t-white">${UI.money(i.price)}</span>
               </div>`).join('')}
           </div>
           <div class="row between" style="margin-top:var(--s-4);padding-top:var(--s-3);border-top:1px solid var(--line)">
             <span class="t-label">Total (AUD)</span>
             <span class="t-h1">${UI.money(total)}</span>
           </div>
           <button class="btn btn-primary btn-block" style="margin-top:var(--s-4)"
                   data-toast="This is a prototype — no payment is taken">Checkout</button>`}
    `, { sheet: true });
  },
};

window.Overlays = Overlays;
