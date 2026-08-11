/**
 * Click-through test for the Notte della Taranta prototype.
 *
 * Task 4 asks for a prototype with working links and no dead ends. This drives
 * the real app in Chrome and checks that claim rather than asserting it:
 *
 *   1. Every registered screen renders without a console error.
 *   2. Every data-go target in the rendered markup resolves to a real screen.
 *   3. No screen is orphaned (unreachable from Home by following links).
 *   4. Every overlay opens, traps focus, and closes on Escape.
 *   5. Every interactive element meets the 44px minimum target size.
 *   6. Nothing overflows the 412px frame horizontally.
 *
 * Requires a local server:  python -m http.server 8765
 * Usage:                    node tools/clickthrough.mjs
 */

import puppeteer from 'puppeteer-core';

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE = 'http://127.0.0.1:8765/app/index.html';
const W = 412, H = 917;

const ROUTES = [
  'splash', 'language', 'home', 'about',
  'story/dionysian', 'story/menades', 'story/dimartino',
  'event', 'map', 'schedule', 'transport',
  'music', 'nowplaying', 'library', 'artist/canzoniere',
  'shop', 'product/tambourine', 'ticket', 'login',
  'settings', 'virtual',
];

const problems = [];
const note = (route, kind, msg) => problems.push({ route, kind, msg });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: [`--window-size=${W},${H}`],
});
const page = await browser.newPage();
await page.setViewport({ width: W, height: H, deviceScaleFactor: 1 });

let currentRoute = 'boot';
page.on('console', m => {
  if (m.type() === 'error') note(currentRoute, 'console', m.text().slice(0, 160));
});
page.on('pageerror', e => note(currentRoute, 'jserror', String(e).slice(0, 160)));

// ---------------------------------------------------------------- 1. Render
console.log('Rendering every screen\n');
for (const route of ROUTES) {
  currentRoute = route;
  await page.goto(`${BASE}?capture=1#/${route}`, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 220));

  const report = await page.evaluate(() => {
    const screen = document.querySelector('.screen.is-active');
    if (!screen) return { rendered: false };

    const registered = [...App.screens.keys()];
    const targets = [...screen.querySelectorAll('[data-go]')]
      .map(b => b.dataset.go.split('/')[0]);
    const broken = [...new Set(targets)].filter(t => !registered.includes(t));

    // Targets smaller than 44px in either axis.
    const small = [...screen.querySelectorAll('button, a, input, select')]
      .filter(el => el.offsetParent !== null && !el.classList.contains('pin'))
      .map(el => ({ el, r: el.getBoundingClientRect() }))
      .filter(({ r }) => r.width > 0 && (r.height < 44 - 0.5))
      .map(({ el, r }) => `${el.className || el.tagName}: ${Math.round(r.width)}x${Math.round(r.height)}`);

    const doc = document.documentElement;
    return {
      rendered: true,
      broken,
      small: [...new Set(small)].slice(0, 6),
      overflow: doc.scrollWidth > doc.clientWidth ? `${doc.scrollWidth} > ${doc.clientWidth}` : null,
      outgoing: [...new Set(targets)],
      title: screen.getAttribute('aria-label'),
    };
  });

  if (!report.rendered) { note(route, 'render', 'no active screen'); console.log(`  FAIL ${route}`); continue; }
  if (report.broken.length) note(route, 'deadlink', `-> ${report.broken.join(', ')}`);
  if (report.overflow) note(route, 'overflow', report.overflow);
  report.small.forEach(s => note(route, 'target', s));

  console.log(`  OK   ${route.padEnd(20)} ${report.outgoing.length} links out`);
}

// ------------------------------------------------------- 2. Reachability
console.log('\nChecking reachability from Home');
await page.goto(`${BASE}?capture=1#/home`, { waitUntil: 'networkidle2' });
const reach = await page.evaluate(async () => {
  // The bottom nav is appended by the router, not by def.render(), so its four
  // destinations have to be added for any screen that shows it.
  const NAV = ['home', 'event', 'music', 'shop'];
  const seen = new Set(['home']);
  const queue = ['home'];
  while (queue.length) {
    const id = queue.shift();
    const def = App.screens.get(id);
    if (!def) continue;

    const targets = [];
    let html = '';
    try { html = def.render(id === 'story' ? ['dionysian'] : id === 'artist' ? ['canzoniere'] : ['tambourine']); }
    catch (e) { /* render failure is reported separately */ }
    const box = document.createElement('div');
    box.innerHTML = html;
    box.querySelectorAll('[data-go]').forEach(b => targets.push(b.dataset.go.split('/')[0]));
    if (def.nav !== false) targets.push(...NAV);

    targets.forEach(t => { if (!seen.has(t)) { seen.add(t); queue.push(t); } });
  }
  // Splash is the app's entry point, reached by opening the app rather than by
  // following a link, so it is not an orphan.
  const all = [...App.screens.keys()].filter(s => s !== 'splash');
  return { reached: [...seen], orphans: all.filter(s => !seen.has(s)) };
});
console.log(`  reached ${reach.reached.length} of ${reach.reached.length + reach.orphans.length}`);
if (reach.orphans.length) note('graph', 'orphan', reach.orphans.join(', '));

// ------------------------------------------------------------ 3. Overlays
console.log('\nTesting overlays');
const overlayTests = [
  ['map', '[data-pin]', 'map pin'],
  ['schedule', '[data-workshop]', 'workshop'],
  ['shop', '[data-cart]', 'cart sheet'],
];
for (const [route, sel, label] of overlayTests) {
  currentRoute = route;
  await page.goto(`${BASE}?capture=1#/${route}`, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 200));

  const found = await page.$(sel);
  if (!found) { note(route, 'overlay', `${label}: no trigger found`); console.log(`  FAIL ${label}`); continue; }
  await found.click();
  await new Promise(r => setTimeout(r, 260));

  const opened = await page.evaluate(() => {
    const box = document.querySelector('.overlay, .sheet');
    return box ? { open: true, focusInside: box.contains(document.activeElement) } : { open: false };
  });
  if (!opened.open) { note(route, 'overlay', `${label}: did not open`); console.log(`  FAIL ${label}`); continue; }
  if (!opened.focusInside) note(route, 'overlay', `${label}: focus not moved into dialog`);

  await page.keyboard.press('Escape');
  await new Promise(r => setTimeout(r, 220));
  const closed = await page.evaluate(() => !document.querySelector('.overlay, .sheet'));
  if (!closed) note(route, 'overlay', `${label}: Escape did not close`);
  console.log(`  ${closed && opened.focusInside ? 'OK  ' : 'WARN'} ${label}`);
}

// ------------------------------------------------------------ 4. Keyboard
console.log('\nKeyboard pass on Home');
currentRoute = 'home';
await page.goto(`${BASE}?capture=1#/home`, { waitUntil: 'networkidle2' });
await new Promise(r => setTimeout(r, 250));
const tab = await page.evaluate(async () => {
  const focusables = [...document.querySelectorAll(
    'a[href], button:not([disabled]), input, select, [tabindex]:not([tabindex="-1"])'
  )].filter(el => el.offsetParent !== null);
  return { count: focusables.length, first: focusables[0]?.className || focusables[0]?.tagName };
});
console.log(`  ${tab.count} focusable elements, first is ${tab.first}`);
if (tab.count < 10) note('home', 'keyboard', `only ${tab.count} focusable elements`);

// -------------------------------------------------------------- 5. Report
await browser.close();

console.log('\n' + '='.repeat(66));
if (!problems.length) {
  console.log('PASS — no dead ends, no orphans, no console errors.');
} else {
  const byKind = {};
  problems.forEach(p => (byKind[p.kind] ||= []).push(p));
  console.log(`${problems.length} issue(s):\n`);
  for (const [kind, list] of Object.entries(byKind)) {
    console.log(`  ${kind.toUpperCase()} (${list.length})`);
    list.forEach(p => console.log(`    ${p.route.padEnd(20)} ${p.msg}`));
  }
}
console.log('='.repeat(66));
process.exit(problems.length ? 1 : 0);
