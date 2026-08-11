#!/usr/bin/env python3
"""
Build web-ready assets for the Notte della Taranta app.

Source art in /Assets is print-resolution (merch renders are up to 6500x4000,
~10MB each). Serving that to a phone is absurd, so everything gets resized and
converted to WebP here. Source files are never modified.

Run from the repo root:  python tools/build-assets.py
"""

import os
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "Assets")
OUT = os.path.join(ROOT, "app", "assets")

GROUND = (4, 6, 6)  # #040606 — the brand ground colour

# Merch renders: (source file, output slug). Note "Tootbag" is the source's spelling.
MERCH = [
    ("Pumo.jpg", "pumo"),
    ("Veil.jpg", "veil"),
    ("Tootbag.jpg", "tote"),
    ("Tambourine.jpg", "tambourine"),
    ("Bottle.jpg", "bottle"),
]

# Section backgrounds. Source is 360x800; frames are 412x917, so these get
# upscaled ~1.14x. Acceptable because the art is soft-edged texture, and CSS
# background-size:cover does the fitting at runtime anyway.
BACKGROUNDS = ["Home", "Event", "Music", "Back"]

# Pixel nav icons, 2134x2134 with alpha. Displayed at ~26px, so 128px covers
# 4x DPI with room to spare. NEAREST resampling preserves the hard pixel edges —
# a smooth resample turns pixel art into mush.
ICONS = {
    "Icon-01": "home",
    "Icon-02": "music",
    "Icon-03": "event",
    "Icon-04": "shop",
    "Icon-05": "back",
}


def ensure(*parts):
    p = os.path.join(*parts)
    os.makedirs(p, exist_ok=True)
    return p


def report(path, note=""):
    size = os.path.getsize(path)
    rel = os.path.relpath(path, ROOT)
    print(f"  {rel:<52} {size:>9,} B  {note}")


def build_icons():
    """
    The source icons are white pixel art on an OPAQUE near-black square
    (#1D1D1B), not on transparency. Left as-is they render as visible tiles in
    the nav, and any colour tint floods the whole square.

    So luminance is promoted to the alpha channel: the white artwork becomes
    opaque, the dark ground becomes fully transparent. The result is a clean
    silhouette that CSS can recolour via mask-image, which is what drives the
    mint active state in the bottom nav.
    """
    print("Icons (luminance keyed to alpha, nearest-neighbour resize)")
    out = ensure(OUT, "icons")
    # Anything below this luminance is ground; above it, ramp up to opaque.
    FLOOR = 45
    for src, slug in ICONS.items():
        im = Image.open(os.path.join(SRC, "Icons", f"{src}.png")).convert("RGBA")
        r, g, b, _ = im.split()
        lum = Image.merge("RGB", (r, g, b)).convert("L")
        alpha = lum.point(
            lambda v: 0 if v < FLOOR else min(255, int((v - FLOOR) * 255 / (255 - FLOOR)))
        )
        keyed = Image.new("RGBA", im.size, (255, 255, 255, 0))
        keyed.putalpha(alpha)
        keyed = keyed.resize((128, 128), Image.NEAREST)
        dst = os.path.join(out, f"{slug}.png")
        keyed.save(dst, "PNG", optimize=True)
        report(dst)


def build_logo():
    print("Logo (white on transparent, kept lossless)")
    out = ensure(OUT, "img")
    im = Image.open(os.path.join(SRC, "Logo", "Logo.png")).convert("RGBA")
    # Trim the transparent margin so the wordmark can be positioned precisely.
    bbox = im.getbbox()
    im = im.crop(bbox)
    dst = os.path.join(out, "wordmark.png")
    im.save(dst, "PNG", optimize=True)
    report(dst, f"trimmed to {im.width}x{im.height}")


def build_backgrounds():
    print("Backgrounds (WebP q88)")
    out = ensure(OUT, "img")
    for name in BACKGROUNDS:
        im = Image.open(os.path.join(SRC, "Pages Bsckground", f"{name}.png")).convert("RGB")
        dst = os.path.join(out, f"bg-{name.lower()}.webp")
        im.save(dst, "WEBP", quality=88, method=6)
        report(dst, f"{im.width}x{im.height}")


def build_merch():
    print("Merch (WebP: 1000px detail view + 600px square tile)")
    out = ensure(OUT, "img")
    for src, slug in MERCH:
        im = Image.open(os.path.join(SRC, "Merch", src)).convert("RGB")

        detail = im.copy()
        detail.thumbnail((1000, 1000), Image.LANCZOS)
        dst = os.path.join(out, f"merch-{slug}.webp")
        detail.save(dst, "WEBP", quality=86, method=6)
        report(dst, f"{detail.width}x{detail.height} from {im.width}x{im.height}")

        # Square centre crop for the shop grid.
        side = min(im.width, im.height)
        left = (im.width - side) // 2
        top = (im.height - side) // 2
        tile = im.crop((left, top, left + side, top + side))
        tile = tile.resize((600, 600), Image.LANCZOS)
        dst = os.path.join(out, f"merch-{slug}-tile.webp")
        tile.save(dst, "WEBP", quality=86, method=6)
        report(dst)


def build_qr():
    """
    A real, scannable QR for the digital ticket screen, encoding the ticket
    reference a gate scanner would read. Generated rather than drawn: a
    decorative block pattern would look right and fail the one thing the
    screen exists to do.

    QR needs a light quiet zone to scan reliably, which is why the ticket
    screen breaks the dark ground for this one panel.
    """
    try:
        import segno
    except ImportError:
        print("QR (skipped — segno not installed)")
        return
    print("QR code (SVG, scannable)")
    out = ensure(OUT, "img")
    dst = os.path.join(out, "ticket-qr.svg")
    segno.make("NDT-2026-004718", error="m").save(
        dst, kind="svg", scale=1, border=2, dark="#040606", light="#FFFFFF"
    )
    report(dst, "encodes NDT-2026-004718")


def main():
    print(f"Source: {SRC}\nOutput: {OUT}\n")
    build_icons()
    build_logo()
    build_backgrounds()
    build_merch()
    build_qr()
    total = sum(
        os.path.getsize(os.path.join(dp, f))
        for dp, _, fs in os.walk(OUT)
        for f in fs
        if not f.endswith((".txt", ".woff2"))
    )
    print(f"\nTotal image payload: {total:,} bytes ({total / 1024 / 1024:.2f} MB)")


if __name__ == "__main__":
    main()
