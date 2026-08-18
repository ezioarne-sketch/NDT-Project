/* ==========================================================================
   Commerce screens — Shop, Product detail, Digital ticket, Login.

   All prices are AUD. The wireframe's reference boards priced a Melbourne
   festival in euros; that is corrected here and stated in the rationale.
   ========================================================================== */

/* --- 13 · Shop --------------------------------------------------------------- */

App.register({
  id: 'shop',
  title: 'Shop',
  section: 'shop',
  bg: 'back',
  render() {
    return `
      ${UI.statusbar()}
      ${UI.appbar('Shop', {
        actions: `<button class="iconbtn" data-cart aria-label="Open your bag">
                    <span class="cart-glyph" aria-hidden="true">▤</span>
                  </button>`,
      })}
      <div class="scroll has-nav" id="main">

        <div class="pad stack gap-3">
          <button class="card hubcard" data-go="ticket">
            <span class="hub-art hub-art-ticket" aria-hidden="true"></span>
            <span class="hub-text">
              <span class="t-h2">My ticket</span>
              <span class="t-small">${Data.heldTicket.type} · ${Data.heldTicket.id}</span>
            </span>
          </button>
          <button class="card hubcard" data-go="login">
            <span class="hub-art" aria-hidden="true"></span>
            <span class="hub-text">
              <span class="t-h2">Account</span>
              <span class="t-small">Sign in to sync your ticket and saved sets</span>
            </span>
          </button>
        </div>

        ${UI.sectionhead('Tickets')}
        <div class="pad stack gap-2">
          ${Data.tickets.map(t => `
            <button class="listrow ticketrow" data-buy="${t.id}">
              <span class="grow">
                <span class="t-white">${UI.esc(t.name)}</span><br>
                <span class="t-small">${UI.esc(t.note)}</span>
              </span>
              <span class="price">${UI.money(t.price)}</span>
            </button>`).join('')}
        </div>

        ${UI.sectionhead('Merchandise', 'All 5', 'shop')}
        <div class="pad merchgrid">
          ${Data.merch.map(m => `
            <button class="card card-media merchtile" data-go="product/${m.id}">
              <div class="media"><img src="assets/img/merch-${m.id}-tile.webp"
                   alt="${UI.esc(m.name)}" loading="lazy"></div>
              <div class="body">
                <p class="t-white">${UI.esc(m.name)}</p>
                <p class="price">${UI.money(m.price)}</p>
              </div>
            </button>`).join('')}
        </div>
      </div>`;
  },
  mount(el) {
    el.querySelectorAll('[data-cart]').forEach(b => b.addEventListener('click', () => Overlays.cart()));
    el.querySelectorAll('[data-buy]').forEach(b => b.addEventListener('click', () => {
      const t = Data.tickets.find(x => x.id === b.dataset.buy);
      App.state.cart.push({ name: t.name, price: t.price });
      App.toast(`${t.name} added to your bag`);
    }));
  },
});

/* --- 14 · Product detail ------------------------------------------------------- */

App.register({
  id: 'product',
  title: 'Product',
  section: 'shop',
  bg: 'back',
  render(params) {
    const m = Data.merch.find(x => x.id === params[0]) || Data.merch[0];
    const others = Data.merch.filter(x => x.id !== m.id);

    return `
      ${UI.statusbar()}
      ${UI.appbar('', {
        back: true,
        actions: `<button class="iconbtn" data-cart aria-label="Open your bag">
                    <span class="cart-glyph" aria-hidden="true">▤</span>
                  </button>`,
      })}
      <div class="scroll has-nav" id="main">

        <div class="prod-media">
          <img src="assets/img/merch-${m.id}.webp" alt="${UI.esc(m.name)}">
        </div>

        <div class="pad">
          <h2 class="t-h1" style="margin-top:var(--s-4)">${UI.esc(m.name)}</h2>
          <p class="price price-lg" style="margin-top:var(--s-2)">${UI.money(m.price)}
            <span class="t-label" style="margin-left:6px">AUD</span></p>
          <p class="t-body" style="margin-top:var(--s-4)">${UI.esc(m.blurb)}</p>
          <p class="t-small" style="margin-top:var(--s-3)">${UI.esc(m.detail)}</p>

          ${/* Only the wine carries a notice. It is rendered ABOVE the buy
                button rather than under it, because a restriction the buyer
                meets after committing is not a restriction, it is a surprise
                at the merchandise tent. */''}
          ${m.notice ? `
            <div class="callout" style="margin-top:var(--s-4)">
              <p class="t-label">${UI.esc(m.notice.label)}</p>
              <p class="t-small" style="margin-top:6px">${UI.esc(m.notice.text)}</p>
            </div>` : ''}

          <button class="btn btn-primary btn-block" style="margin-top:var(--s-5)"
                  data-add="${m.id}">Add to bag</button>
          <p class="t-small" style="margin-top:var(--s-3);text-align:center">
            ${m.pickupOnly
              ? 'Collect at the merchandise tent. This item cannot be posted.'
              : 'Collect at the merchandise tent, or post within Australia for $12.'}</p>
        </div>

        ${UI.sectionhead('Also in the range')}
        <div class="carousel-wrap">
          <div class="carousel" aria-label="Other merchandise">
            ${others.map(o => `
              <button class="card card-media merchtile merchtile-sm" data-go="product/${o.id}">
                <div class="media"><img src="assets/img/merch-${o.id}-tile.webp"
                     alt="${UI.esc(o.name)}" loading="lazy"></div>
                <div class="body">
                  <p class="t-white">${UI.esc(o.name)}</p>
                  <p class="price">${UI.money(o.price)}</p>
                </div>
              </button>`).join('')}
          </div>
        </div>
      </div>`;
  },
  mount(el, params) {
    const m = Data.merch.find(x => x.id === params[0]) || Data.merch[0];
    el.querySelectorAll('[data-cart]').forEach(b => b.addEventListener('click', () => Overlays.cart()));
    el.querySelector('[data-add]').addEventListener('click', e => {
      App.state.cart.push({ name: m.name, price: m.price });
      // Confirmation is a state change plus text, not a colour change alone.
      e.target.textContent = 'Added to bag ✓';
      e.target.classList.add('btn-added');
      App.toast(`${m.name} added to your bag`);
    });
  },
});

/* --- 18 · Digital ticket --------------------------------------------------------- */

App.register({
  id: 'ticket',
  title: 'My ticket',
  section: 'shop',
  nav: false,
  render() {
    const t = Data.heldTicket;
    const f = Data.festival;
    return `
      ${UI.statusbar()}
      ${UI.appbar('', { back: true, actions: `<span class="t-label">Digital ticket</span>` })}
      <div class="scroll" id="main">
        <div class="ticket">

          <div class="ticket-top">
            <img class="ticket-mark" src="assets/img/wordmark.png" alt="Notte della Taranta">
            <p class="t-label" style="margin-top:var(--s-3)">${UI.esc(f.venue)}</p>
            <p class="t-h2" style="margin-top:4px">${UI.esc(f.date)}</p>
          </div>

          <div class="ticket-perf" aria-hidden="true"></div>

          <!-- The QR panel is light. It is the only place in the app that breaks
               the dark ground, and it does so because a dark QR on a dark field
               will not scan reliably under a gate reader. -->
          <div class="ticket-qr">
            <img src="assets/img/ticket-qr.svg" alt="QR code for ticket ${UI.esc(t.id)}">
          </div>
          <p class="ticket-id">${UI.esc(t.id)}</p>
          <p class="t-small" style="text-align:center;padding:0 var(--s-6)">
            Screen brightness is raised automatically when this screen opens. If the
            code will not scan, gate staff can enter the reference above by hand.</p>

          <dl class="deflist ticket-details">
            <dt>Holder</dt><dd>${UI.esc(t.holder)}</dd>
            <dt>Type</dt><dd>${UI.esc(t.type)}</dd>
            <dt>Entry</dt><dd>${UI.esc(t.gate)}</dd>
            <dt>Admits</dt><dd>${UI.esc(t.seat)}</dd>
          </dl>

          <div class="pad" style="margin-top:var(--s-5)">
            <button class="btn btn-secondary btn-block"
                    data-toast="Saved — this ticket works without a connection">
              Save for offline use</button>
            <button class="btn btn-ghost btn-block" style="margin-top:var(--s-2)"
                    data-go="transport">Getting to Gate 3</button>
          </div>
        </div>
      </div>`;
  },
});

/* --- 15 · Login ------------------------------------------------------------------- */

App.register({
  id: 'login',
  title: 'Sign in',
  section: 'shop',
  nav: false,
  bg: 'back',
  render() {
    return `
      ${UI.statusbar()}
      ${UI.appbar('Sign in', { back: true, sub: 'Optional — the app works without an account' })}
      <div class="scroll" id="main">
        <form class="pad" id="loginform" novalidate>

          <div class="field">
            <label for="email">Email address</label>
            <input type="email" id="email" name="email" autocomplete="email"
                   aria-describedby="email-hint">
            <p class="hint" id="email-hint">We only use this to send your ticket.</p>
          </div>

          <div class="field">
            <label for="pw">Password</label>
            <div class="pwwrap">
              <input type="password" id="pw" name="pw" autocomplete="current-password">
              <button type="button" class="pwtoggle" aria-pressed="false">Show</button>
            </div>
          </div>

          <p class="error" id="formerror" hidden></p>

          <button class="btn btn-primary btn-block" type="submit">Sign in</button>

          <div class="orline"><span>or</span></div>

          <button class="btn btn-ghost btn-block" type="button"
                  data-toast="Single sign-on is not wired up in this prototype">Continue with Apple</button>
          <button class="btn btn-ghost btn-block" type="button" style="margin-top:var(--s-2)"
                  data-toast="Single sign-on is not wired up in this prototype">Continue with Google</button>

          <button class="btn btn-secondary btn-block" style="margin-top:var(--s-5)"
                  type="button" data-go="home">Skip — browse without an account</button>

          <div class="callout">
            <p class="t-label">Nothing is gated</p>
            <p class="t-small" style="margin-top:6px">The map, schedule, stories and music are all
            available without signing in. An account only syncs your ticket and saved sets.</p>
          </div>
        </form>
      </div>`;
  },
  mount(el) {
    const form = el.querySelector('#loginform');
    const pw = el.querySelector('#pw');
    const toggle = el.querySelector('.pwtoggle');
    const err = el.querySelector('#formerror');

    toggle.addEventListener('click', () => {
      const showing = pw.type === 'text';
      pw.type = showing ? 'password' : 'text';
      toggle.textContent = showing ? 'Show' : 'Hide';
      toggle.setAttribute('aria-pressed', String(!showing));
    });

    form.addEventListener('submit', e => {
      e.preventDefault();
      const email = el.querySelector('#email').value.trim();
      // Errors are announced and described in text, never signalled by colour alone.
      if (!email || !email.includes('@')) {
        err.hidden = false;
        err.textContent = '⚠ Enter an email address so we can send your ticket.';
        el.querySelector('#email').focus();
        App.announce('Enter an email address so we can send your ticket');
        return;
      }
      err.hidden = true;
      App.toast('Signed in');
      App.go('home');
    });
  },
});
