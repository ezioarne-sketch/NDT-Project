/* ==========================================================================
   UI helpers — small markup builders shared across screens.
   Keeping these in one place is what stops the status bar and app bar from
   drifting between screens.
   ========================================================================== */

const UI = {

  /** Device status bar. Fixed at 21:40 — this is a night festival, so the
   *  conventional 9:41 marketing time would be telling the wrong story. */
  statusbar() {
    return `
      <div class="statusbar" aria-hidden="true">
        <span>21:40</span>
        <span class="sb-icons">
          <span class="sb-bar" style="height:5px"></span>
          <span class="sb-bar" style="height:8px"></span>
          <span class="sb-bar" style="height:11px"></span>
          <span style="margin-left:4px">100%</span>
        </span>
      </div>`;
  },

  /**
   * Screen app bar.
   * @param {string} title
   * @param {object} o  { back: bool, actions: html, sub: string }
   */
  appbar(title, o = {}) {
    const back = o.back
      ? `<button class="iconbtn" data-back aria-label="Go back">
           <span class="ico ico-back" aria-hidden="true"></span>
         </button>`
      : '';
    const sub = o.sub ? `<p class="t-small" style="margin-top:2px">${o.sub}</p>` : '';
    return `
      <header class="appbar">
        ${back}
        <div class="grow">
          <h1>${title}</h1>
          ${sub}
        </div>
        ${o.actions || ''}
      </header>`;
  },

  /** Section eyebrow label. */
  label(text) { return `<p class="t-label">${text}</p>`; },

  /** Section heading with optional trailing link. */
  sectionhead(title, linkText, route) {
    const link = linkText
      ? `<button class="t-label t-mint" data-go="${route}" style="letter-spacing:.1em">${linkText} →</button>`
      : '';
    return `<div class="sectionhead"><h2>${title}</h2>${link}</div>`;
  },

  /** AUD currency. Whole dollars only — no cents on a festival merch stand. */
  money(n) {
    return n === 0 ? 'Free' : `$${n.toLocaleString('en-AU')}`;
  },

  /** Stage pill, coloured by stage but always carrying its name as text. */
  stagePill(stageId) {
    const s = (Data.stages.find(x => x.id === stageId)) || { name: stageId, colour: '' };
    const cls = s.colour === 'mint' ? 'chip-mint' : s.colour === 'green' ? 'chip-green' : '';
    return `<span class="chip ${cls}">${s.name}</span>`;
  },

  /**
   * Opens or closes a `.clamp` block, animating between the two heights.
   *
   * The collapsed height is CSS (two lines, derived from the type tokens so it
   * follows the text-size setting). The OPEN height cannot be: `max-height`
   * will not transition to `none`, and a hardcoded large value makes the
   * easing wrong — the animation appears to finish early because most of the
   * travel is empty space. So the real height is measured and set, and then
   * cleared to `none` once the transition lands, which is what lets the block
   * reflow correctly if the text size changes while it is open.
   */
  clamp(el, open) {
    el.style.maxHeight = `${el.scrollHeight}px`;   // from: the current height
    el.dataset.open = String(open);

    if (open) {
      // Drop the inline cap once expanded, so the block is free-height again.
      el.addEventListener('transitionend', function done(e) {
        if (e.propertyName !== 'max-height') return;
        el.removeEventListener('transitionend', done);
        if (el.dataset.open === 'true') el.style.maxHeight = 'none';
      });
    } else {
      // Closing from `none` would jump. Force a reflow at the measured height
      // first, then hand control back to the CSS clamp.
      void el.offsetHeight;
      el.style.maxHeight = '';
    }
  },

  /** Escapes text going into markup from data. */
  esc(s) {
    return String(s).replace(/[&<>"']/g, c =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  },
};

window.UI = UI;
