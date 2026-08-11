/* ==========================================================================
   App core — screen registry, router, navigation, overlays, settings.

   No framework. Screens register a render function; the router swaps which
   one is active and manages a history stack. Hash routing means every screen
   has its own URL, which matters for two reasons beyond navigation: the
   walkthrough can be deep-linked, and the screen-capture script can drive
   straight to any screen.
   ========================================================================== */

const App = (() => {

  /* --- State ---------------------------------------------------------------- */

  const SETTINGS_KEY = 'ndt.settings';
  const defaults = {
    textsize: 'normal',   // normal | large | xlarge
    contrast: 'normal',   // normal | high
    motion: 'normal',     // normal | reduced
    captions: true,
    haptics: true,
    language: 'en',
    seenSplash: false,
  };

  const state = {
    settings: { ...defaults },
    stack: [],            // history of route strings
    current: null,
    cart: [],
    overlay: null,
  };

  const screens = new Map();
  let root, navEl, overlayRoot, toastTimer;

  /* --- Settings ------------------------------------------------------------- */

  function loadSettings() {
    try {
      const raw = localStorage.getItem(SETTINGS_KEY);
      if (raw) Object.assign(state.settings, JSON.parse(raw));
    } catch (e) { /* private browsing — fall back to defaults */ }
    applySettings();
  }

  function saveSettings() {
    try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(state.settings)); }
    catch (e) { /* non-fatal */ }
  }

  function applySettings() {
    const d = document.documentElement;
    d.dataset.textsize = state.settings.textsize;
    d.dataset.contrast = state.settings.contrast;
    d.dataset.motion   = state.settings.motion;
    d.lang = state.settings.language;
  }

  function setSetting(key, value) {
    state.settings[key] = value;
    applySettings();
    saveSettings();
  }

  /* --- Registry -------------------------------------------------------------- */

  /**
   * def = {
   *   id, title, section, bg, nav (bool), back (route|false),
   *   render(params) -> html string,
   *   mount(el, params) -> void        (optional, for behaviour)
   * }
   */
  function register(def) { screens.set(def.id, def); }

  /* --- Routing ---------------------------------------------------------------- */

  function parseRoute(hash) {
    const clean = (hash || '').replace(/^#\/?/, '');
    const parts = clean.split('/').filter(Boolean);
    return { id: parts[0] || 'splash', params: parts.slice(1) };
  }

  function go(route, opts = {}) {
    const target = route.replace(/^#\/?/, '');
    if (!opts.replace) state.stack.push(target);
    location.hash = '#/' + target;
    if (opts.replace) render(target, 'forward');
  }

  function back() {
    if (state.stack.length > 1) {
      state.stack.pop();
      const prev = state.stack[state.stack.length - 1];
      location.hash = '#/' + prev;
      renderDirection = 'back';
    } else {
      go('home');
    }
  }

  let renderDirection = 'forward';

  function render(routeStr, direction) {
    const { id, params } = parseRoute(routeStr);
    const def = screens.get(id);

    if (!def) {
      console.warn(`No screen registered for "${id}" — falling back to home.`);
      return go('home', { replace: true });
    }

    closeOverlay({ silent: true });

    const el = document.createElement('section');
    el.className = 'screen is-active ' +
      (direction === 'back' ? 'is-entering-back' : 'is-entering');
    el.id = `screen-${id}`;
    el.setAttribute('role', 'region');
    el.setAttribute('aria-label', def.title);
    if (def.bg) el.classList.add(`bg-${def.bg}`);

    el.innerHTML = def.render(params) + (def.nav === false ? '' : navMarkup(def.section));

    root.replaceChildren(el);
    state.current = { id, params, def, el };

    document.title = `${def.title} · Notte della Taranta`;
    if (def.mount) def.mount(el, params);

    wireNav(el);
    wireActions(el);

    // Move focus to the new screen's heading so screen-reader users are told
    // where they have landed rather than being left at the old position.
    const h = el.querySelector('h1, [data-focus]');
    if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); }

    announce(def.title);
  }

  function onHashChange() {
    render(location.hash, renderDirection);
    renderDirection = 'forward';
  }

  /* --- Bottom navigation ------------------------------------------------------- */

  const NAV = [
    { id: 'home',  label: 'Home',  icon: 'home',  route: 'home' },
    { id: 'event', label: 'Event', icon: 'event', route: 'event' },
    { id: 'music', label: 'Music', icon: 'music', route: 'music' },
    { id: 'shop',  label: 'Shop',  icon: 'shop',  route: 'shop' },
  ];

  function navMarkup(section) {
    return `
      <nav class="navbar" aria-label="Main">
        ${NAV.map(n => `
          <button data-go="${n.route}" ${section === n.id ? 'aria-current="page"' : ''}>
            <span class="ico ico-${n.icon}" aria-hidden="true"></span>
            <span>${n.label}</span>
          </button>`).join('')}
      </nav>`;
  }

  function wireNav(el) {
    el.querySelectorAll('[data-go]').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        go(btn.dataset.go);
      });
    });
    el.querySelectorAll('[data-back]').forEach(btn => {
      btn.addEventListener('click', e => { e.preventDefault(); back(); });
    });
  }

  /* --- Declarative actions ------------------------------------------------------
     Screens mark up behaviour with data attributes so they stay presentational. */

  function wireActions(el) {
    el.querySelectorAll('[data-overlay]').forEach(btn => {
      btn.addEventListener('click', () => {
        const fn = window.Overlays && window.Overlays[btn.dataset.overlay];
        if (fn) openOverlay(fn(btn.dataset.key));
      });
    });
    el.querySelectorAll('[data-toast]').forEach(btn => {
      btn.addEventListener('click', () => toast(btn.dataset.toast));
    });
    initCarousels(el);
  }

  /* --- Carousels ----------------------------------------------------------------
     Native scroll-snap gives real momentum swipe on touch. This adds the dot
     indicators and keyboard arrow support that scroll-snap does not. */

  function initCarousels(el) {
    el.querySelectorAll('.carousel').forEach(car => {
      const dotsEl = car.parentElement.querySelector('.dots');
      const items = [...car.children];
      if (!items.length) return;

      if (dotsEl) {
        dotsEl.innerHTML = items.map((_, i) =>
          `<button aria-label="Go to item ${i + 1} of ${items.length}" ${i === 0 ? 'aria-current="true"' : ''}></button>`
        ).join('');
        [...dotsEl.children].forEach((dot, i) => {
          dot.addEventListener('click', () => {
            items[i].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
          });
        });
        car.addEventListener('scroll', () => {
          const mid = car.scrollLeft + car.clientWidth / 2;
          let best = 0, bestDist = Infinity;
          items.forEach((it, i) => {
            const c = it.offsetLeft + it.offsetWidth / 2;
            const d = Math.abs(c - mid);
            if (d < bestDist) { bestDist = d; best = i; }
          });
          [...dotsEl.children].forEach((dot, i) =>
            dot.setAttribute('aria-current', i === best ? 'true' : 'false'));
        }, { passive: true });
      }

      car.setAttribute('tabindex', '0');
      car.setAttribute('role', 'group');
      car.addEventListener('keydown', e => {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        e.preventDefault();
        const step = items[0].offsetWidth + 12;
        car.scrollBy({ left: e.key === 'ArrowRight' ? step : -step, behavior: 'smooth' });
      });
    });
  }

  /* --- Overlays ------------------------------------------------------------------
     Rendered over the live screen, with the parent still visible behind the
     scrim. Focus is trapped while open and returned to the trigger on close. */

  let lastFocused = null;

  function openOverlay(html, opts = {}) {
    closeOverlay({ silent: true });
    lastFocused = document.activeElement;

    const scrim = document.createElement('div');
    scrim.className = 'scrim';
    scrim.addEventListener('click', () => closeOverlay());

    const box = document.createElement('div');
    box.className = opts.sheet ? 'sheet' : 'overlay';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.innerHTML = html;

    overlayRoot.append(scrim, box);
    state.overlay = { scrim, box };

    box.querySelectorAll('[data-close]').forEach(b =>
      b.addEventListener('click', () => closeOverlay()));
    wireNav(box);
    wireActions(box);

    const focusable = box.querySelector('button, [href], input, select, [tabindex]');
    if (focusable) focusable.focus();
    document.addEventListener('keydown', onOverlayKey);
  }

  function onOverlayKey(e) {
    if (e.key === 'Escape') { closeOverlay(); return; }
    if (e.key !== 'Tab' || !state.overlay) return;
    const items = state.overlay.box.querySelectorAll(
      'button:not([disabled]), [href], input, select, [tabindex]:not([tabindex="-1"])');
    if (!items.length) return;
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  function closeOverlay({ silent } = {}) {
    if (!state.overlay) return;
    state.overlay.scrim.remove();
    state.overlay.box.remove();
    state.overlay = null;
    document.removeEventListener('keydown', onOverlayKey);
    if (!silent && lastFocused && document.contains(lastFocused)) lastFocused.focus();
  }

  /* --- Toast + live region --------------------------------------------------------- */

  function toast(message) {
    const existing = overlayRoot.querySelector('.toast');
    if (existing) existing.remove();
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = `<span aria-hidden="true">✓</span><span>${message}</span>`;
    overlayRoot.append(t);
    announce(message);
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.remove(), 2600);
  }

  function announce(message) {
    const live = document.getElementById('live');
    if (live) { live.textContent = ''; setTimeout(() => { live.textContent = message; }, 40); }
  }

  /* --- Boot -------------------------------------------------------------------------- */

  function init() {
    root        = document.getElementById('screens');
    navEl       = document.getElementById('nav');
    overlayRoot = document.getElementById('overlay-root');

    // ?capture=1 pins the device frame to exactly 412x917 for screen capture.
    if (new URLSearchParams(location.search).has('capture')) {
      document.body.classList.add('capture');
    }

    loadSettings();
    window.addEventListener('hashchange', onHashChange);

    const initial = location.hash ? location.hash : '#/splash';
    state.stack = [parseRoute(initial).id];
    if (!location.hash) location.hash = initial; else onHashChange();
  }

  return {
    init, register, go, back, render,
    openOverlay, closeOverlay, toast, announce,
    state, setSetting, screens,
  };
})();

document.addEventListener('DOMContentLoaded', App.init);
