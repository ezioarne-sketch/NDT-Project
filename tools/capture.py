#!/usr/bin/env python3
"""
Screen capture for the Notte della Taranta app.

Drives headless Chrome through the app's hash routes and writes one PNG per
screen at the 412x917 Android Compact frame size. Used during design to review
work, and at submission time to produce the Task 2 screen deliverable.

Requires a local server:  python -m http.server 8765
Usage:
    python tools/capture.py                 # every screen
    python tools/capture.py home map shop   # named screens only
    python tools/capture.py --sheet         # also build a contact sheet
"""

import os
import subprocess
import sys

CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
BASE = "http://127.0.0.1:8765/app/index.html?capture=1"
W, H = 412, 917

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "Assets", "Screens")

# (slug, route, human title) — the submission order, matching Docs/02-Screen-Spec.md
SCREENS = [
    ("16-splash",          "splash",             "Splash"),
    ("17-language",        "language",           "Language selection"),
    ("01-home",            "home",               "Home"),
    ("02-about",           "about",              "About the Festival"),
    ("03-story-dionysian", "story/dionysian",    "The Dionysian Cult"),
    ("04-story-menades",   "story/menades",      "Maenads and Tarantate"),
    ("05-story-dimartino", "story/dimartino",    "De Martino and the Modern Age"),
    ("06-event-hub",       "event",              "Event hub"),
    ("07-map",             "map",                "Map — Flemington"),
    ("08-schedule",        "schedule",           "Schedule"),
    ("09-transport",       "transport",          "Transport & Access"),
    ("10-music",           "music",              "Music player"),
    ("11-now-playing",     "nowplaying",         "Now playing"),
    ("12-library",         "library",            "Track library"),
    ("19-artist",          "artist/elodie",  "Artist profile"),
    ("13-shop",            "shop",               "Shop"),
    ("14-product",         "product/tambourine", "Product detail"),
    ("18-ticket",          "ticket",             "Digital ticket"),
    ("15-login",           "login",              "Login"),
    ("20-settings",        "settings",           "Accessibility settings"),
    ("21-virtual",         "virtual",            "Virtual visitor"),
]


DSF = 2          # capture at 2x for a print-quality deliverable
WIN_W, WIN_H = 900, 1000   # Windows clamps Chrome below ~500px wide, so shoot
                           # larger than the frame and crop the frame out


def shoot(slug, route, budget=2500):
    from PIL import Image

    dst = os.path.join(OUT, f"{slug}.png")
    url = f"{BASE}#/{route}"
    subprocess.run(
        [
            CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars",
            f"--virtual-time-budget={budget}",
            f"--screenshot={dst}", f"--window-size={WIN_W},{WIN_H}",
            f"--force-device-scale-factor={DSF}",
            url,
        ],
        capture_output=True, timeout=90,
    )
    if not os.path.exists(dst):
        print(f"  FAIL {slug:<22} #{route}")
        return False

    # Capture mode pins the frame to the top-left, so the crop is exact.
    im = Image.open(dst)
    im.crop((0, 0, W * DSF, H * DSF)).save(dst)
    print(f"  OK   {slug:<22} #{route}")
    return True


def contact_sheet(slugs):
    from PIL import Image
    cols, cell_w = 7, 240
    cell_h = int(cell_w * H / W)
    rows = (len(slugs) + cols - 1) // cols
    pad, label = 14, 26
    sheet = Image.new(
        "RGB",
        (cols * (cell_w + pad) + pad, rows * (cell_h + pad + label) + pad),
        (4, 6, 6),
    )
    for i, slug in enumerate(slugs):
        p = os.path.join(OUT, f"{slug}.png")
        if not os.path.exists(p):
            continue
        im = Image.open(p).convert("RGB").resize((cell_w, cell_h), Image.LANCZOS)
        x = pad + (i % cols) * (cell_w + pad)
        y = pad + (i // cols) * (cell_h + pad + label)
        sheet.paste(im, (x, y))
    dst = os.path.join(OUT, "_contact-sheet.png")
    sheet.save(dst)
    print(f"\nContact sheet -> {os.path.relpath(dst, ROOT)}  {sheet.size[0]}x{sheet.size[1]}")


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    want_sheet = "--sheet" in sys.argv

    os.makedirs(OUT, exist_ok=True)
    targets = SCREENS
    if args:
        targets = [s for s in SCREENS if s[0] in args or s[1].split("/")[0] in args]
        if not targets:
            print(f"No screens matched {args}")
            return 1

    print(f"Capturing {len(targets)} screen(s) at {W}x{H} @2x\n")
    done = [s[0] for s in targets if shoot(s[0], s[1])]

    if want_sheet:
        contact_sheet([s[0] for s in SCREENS])
    return 0 if len(done) == len(targets) else 1


if __name__ == "__main__":
    sys.exit(main())
