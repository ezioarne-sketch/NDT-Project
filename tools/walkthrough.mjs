/**
 * Records the Task 4 walkthrough video.
 *
 * The brief asks for "a prototype and/or video of the working app". This drives
 * the real app through a scripted tour that touches every one of the 21 screens
 * and demonstrates each interaction type the brief names — scrolling, tapping,
 * swiping — plus overlays, animation and the accessibility settings.
 *
 * Frames are written as JPEGs and encoded to MP4 by tools/encode-video.py.
 *
 * Requires a local server:  python -m http.server 8765
 * Usage:                    node tools/walkthrough.mjs
 */

import puppeteer from 'puppeteer-core';
import { mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE = 'http://127.0.0.1:8765/app/index.html';
const OUT = join(process.env.TEMP || '/tmp', 'ndt-frames');
const W = 412, H = 917;
const FPS = 15;

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: [`--window-size=${W},${H}`, '--force-device-scale-factor=1'],
});
const page = await browser.newPage();
await page.setViewport({ width: W, height: H, deviceScaleFactor: 1 });

// ---------------------------------------------------------------- recorder
let frame = 0, recording = true;
const tick = async () => {
  while (recording) {
    const t0 = Date.now();
    try {
      await page.screenshot({
        path: join(OUT, `f${String(frame++).padStart(5, '0')}.jpg`),
        type: 'jpeg', quality: 82, optimizeForSpeed: true,
      });
    } catch { /* navigation in flight; skip the frame */ }
    const wait = Math.max(0, 1000 / FPS - (Date.now() - t0));
    await new Promise(r => setTimeout(r, wait));
  }
};

const hold = ms => new Promise(r => setTimeout(r, ms));

/** Click by selector, with a pause so the action is visible on screen. */
async function tap(sel, pause = 900, nth = 0) {
  const els = await page.$$(sel);
  if (!els[nth]) { console.log(`  (skip: ${sel})`); return false; }
  await els[nth].click().catch(() => {});
  await hold(pause);
  return true;
}

/** Smooth scroll so the video shows real scrolling, not a jump. */
async function scroll(px, ms = 1100) {
  await page.evaluate((px, ms) => new Promise(done => {
    const el = document.querySelector('.screen.is-active .scroll');
    if (!el) return done();
    const start = el.scrollTop, t0 = performance.now();
    const step = now => {
      const p = Math.min(1, (now - t0) / ms);
      el.scrollTop = start + px * (1 - Math.pow(1 - p, 3));
      p < 1 ? requestAnimationFrame(step) : done();
    };
    requestAnimationFrame(step);
  }), px, ms);
  await hold(220);
}

/** Horizontal swipe on a carousel — the gesture the brief asks for. */
async function swipe(ms = 900) {
  await page.evaluate(ms => new Promise(done => {
    const car = document.querySelector('.screen.is-active .carousel');
    if (!car) return done();
    const start = car.scrollLeft;
    const dist = car.querySelector('*')?.offsetWidth + 12 || 200;
    const t0 = performance.now();
    const step = now => {
      const p = Math.min(1, (now - t0) / ms);
      car.scrollLeft = start + dist * (1 - Math.pow(1 - p, 3));
      p < 1 ? requestAnimationFrame(step) : done();
    };
    requestAnimationFrame(step);
  }), ms);
  await hold(320);
}

async function go(route, pause = 1100) {
  await page.evaluate(r => { location.hash = '#/' + r; }, route);
  await hold(pause);
}

// ------------------------------------------------------------------- tour
console.log('Recording walkthrough\n');
await page.goto(`${BASE}#/splash`, { waitUntil: 'networkidle2' });
await hold(400);
tick();

console.log('  splash → language');
await hold(2600);                       // splash animation + auto-advance
await hold(900);
await tap('.lang-row', 700, 1);         // Italiano
await tap('.lang-row', 700, 0);         // back to English
await tap('#lang-continue', 1200);

console.log('  home: scroll + carousel swipe');
await hold(900);
await swipe();
await swipe();
await scroll(420);
await scroll(420);
await scroll(-840, 700);

console.log('  story chapters');
await go('story/dionysian');
await scroll(560, 1400);
await scroll(420);
await tap('.storynav-btn', 1200);       // next chapter
await scroll(400);
await go('story/dimartino', 900);
await scroll(400);

console.log('  event → map → pin overlay');
await go('event');
await scroll(240);
await go('map');
await hold(700);
await tap('.map-filter', 900, 1);       // Stages
await tap('.map-filter', 900, 4);       // Accessibility
await tap('.map-filter', 900, 0);       // All
await tap('.pin', 1500, 0);             // pin overlay
await page.keyboard.press('Escape');
await hold(700);
await scroll(520);

console.log('  schedule → workshop overlay');
await go('schedule');
await scroll(300);
await tap('[data-workshop]', 1600, 0);
await page.keyboard.press('Escape');
await hold(600);

console.log('  transport');
await go('transport');
await scroll(500, 1300);
await scroll(500, 1300);

console.log('  music: play, seek, now playing');
await go('music');
await tap('[data-player-toggle]', 1500);
await tap('[data-player-next]', 1100);
await scroll(360);
await swipe();
await go('nowplaying', 1300);
await hold(1200);
await tap('[data-player-toggle]', 1000);

console.log('  library → artist');
await go('library');
await scroll(420, 1200);
await go('artist/panico', 1300);
await scroll(420, 1200);

console.log('  shop → product → cart');
await go('shop');
await scroll(380, 1200);
await go('product/pumo', 1300);
await scroll(260);
await tap('[data-add]', 1400);
await tap('[data-cart]', 1700);
await page.keyboard.press('Escape');
await hold(600);

console.log('  digital ticket');
await go('ticket', 1600);
await scroll(300, 1100);

console.log('  accessibility settings (live)');
await go('settings');
await hold(700);
await tap('[data-size]', 1300, 1);      // Large
await tap('[data-size]', 1300, 2);      // Largest
await tap('[data-size]', 1100, 0);      // back to default
await tap('[data-toggle]', 1600, 0);    // high contrast ON
await hold(900);
await tap('[data-toggle]', 1300, 0);    // high contrast OFF
await scroll(360);

console.log('  virtual visitor + timezone');
await go('virtual');
await hold(900);
await scroll(420, 1200);
await page.select('#tz', '1');          // Rome
await hold(1500);
await page.select('#tz', '-5');         // New York
await hold(1500);
await scroll(300);

console.log('  home');
await go('home', 1600);
await hold(900);

recording = false;
await hold(400);
await browser.close();

console.log(`\n${frame} frames at ${FPS}fps  (~${(frame / FPS).toFixed(0)}s)`);
console.log(`Frames in ${OUT}`);
console.log('Now run:  python tools/encode-video.py');
