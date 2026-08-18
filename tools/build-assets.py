#!/usr/bin/env python3
"""
Build web-ready assets for the Notte della Taranta app.

Source art in /Assets is print-resolution (merch renders are up to 6500x4000,
~10MB each). Serving that to a phone is absurd, so everything gets resized and
converted to WebP here. Source files are never modified.

Run from the repo root:  python tools/build-assets.py
"""

import os
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance, ImageOps

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

# Story chapter artwork: (chapter id, source file, invert?).
#
# ONE image per chapter, and the choice is a licensing decision as much as a
# design one. Lorenzo supplied eight candidates; three are used.
#
#   dionysian  Pella pebble mosaic, 4th c. BC. Ancient work — public domain.
#   menades    19th-century line engraving — public domain. Inverted, because
#              the source is black line on white and the app ground is near-
#              black; white line over the gradient is the same drawing.
#   dimartino  Franco Pinna's photograph of the 1959 fieldwork, held by the
#              Accademia Nazionale di Santa Cecilia. IN COPYRIGHT (Pinna d.
#              1978). Used as academic criticism/review with acknowledgement,
#              and credited on the screen itself — not just in the docs.
#
# Deliberately NOT used: Assets/Story/menades/flickr-5946384625-*.jpg, which is
# "Puglia - La Pizzica Tarantata" by Alessandro Morandi (2011), published All
# Rights Reserved. It is a fine photograph, but it would have been decoration
# rather than something the chapter discusses, it shows identifiable living
# people, and a public GitHub Pages site is not private study. A public-domain
# engraving carries the same idea at none of the risk. See Docs/06-References.md.
STORY = [
    ("dionysian", "dionysian/pella-mosaic-dionysus-panther.webp", False),
    ("menades", "menades/engraving-maenad-with-cymbals.webp", True),
    ("dimartino", "dimartino/pinna-tarantism-musicians-santacecilia.jpg", False),
]

# Hero banner is 372x176 CSS px. The carousel tile is 232px wide at 16:9 —
# `.card-media .media` outranks `.story-media`'s 3/2 on specificity, so 16:9 is
# what actually renders. Both built at roughly 2x for high-DPI phones.
STORY_HERO = (800, 380)
STORY_TILE = (480, 270)

# The Figma canvas screenshot arrives with the whole editor around it — panels,
# toolbar, tooltips. Those crop bounds isolate the frames and their prototype
# connections, which is the part Task 1 is evidence for.
WIREFRAME_CROP = (596, 35, 1303, 1183)

# Cover art: (artist id, gradient pair, motif).
#
# The lineup is invented — deliberately, to remove the copyright exposure the
# Figma kit's real artists carried — so there are no real covers to license and
# none to steal. These are drawn instead: one motif per artist, taken from what
# that artist actually plays, in the campaign palette.
#
# The gradient pairs are the same six that were previously CSS-only, kept in the
# same order, so the palette does not shift underneath the rest of the app.
COVERS = [
    ("canzoniere", ("#461E3C", "#1B7A4A"), "ronda"),      # ensemble — the circle
    ("panico",     ("#4D2646", "#0E4F30"), "voice"),      # solo voice — one source
    ("sette",      ("#2A1730", "#1B7A4A"), "tamburello"), # frame drum, with jingles
    ("tarantate",  ("#1B7A4A", "#461E3C"), "spin"),       # dance collective
    ("fasano",     ("#3A1A34", "#14603C"), "trio"),       # three players
    ("elettrica",  ("#0E4F30", "#4D2646"), "spectrum"),   # live electronic
]
COVER_PX = 800
MINT = (127, 217, 168)


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


def _fit_on_backdrop(im, size):
    """
    Fit artwork inside a banner without cropping it, and fill the leftover
    width with a blurred, darkened copy of itself.

    Cropping is the usual answer and it is the wrong one here. These are
    artworks and documentary photographs: a centre crop to 2:1 cuts the
    panther's legs off the Pella mosaic and takes the violinist out of Pinna's
    photograph, which is the whole subject of the chapter. Fitting keeps every
    image whole, and the blurred backdrop stops the letterboxing from reading
    as a mistake.
    """
    tw, th = size

    # Backdrop: cover the frame, blur hard, drop the exposure so the artwork
    # in front stays the brightest thing in the banner.
    scale = max(tw / im.width, th / im.height)
    back = im.resize((max(1, int(im.width * scale)), max(1, int(im.height * scale))), Image.LANCZOS)
    left = (back.width - tw) // 2
    top = (back.height - th) // 2
    back = back.crop((left, top, left + tw, top + th))
    back = back.filter(ImageFilter.GaussianBlur(26))
    back = ImageEnhance.Brightness(back).enhance(0.38)

    canvas = Image.new("RGB", size, GROUND)
    canvas.paste(back, (0, 0))

    # Foreground: contain, centred.
    fore = im.copy()
    fore.thumbnail(size, Image.LANCZOS)
    canvas.paste(fore, ((tw - fore.width) // 2, (th - fore.height) // 2))
    return canvas


def build_story():
    """
    Chapter artwork for the three story screens.

    Until now the story heroes were bare CSS gradients with a big chapter
    number on them. That was honest scaffolding — better an obvious placeholder
    than a stock photo — but the chapters are the reference-exposed heart of the
    project and they were the only screens carrying no evidence of the thing
    they describe.
    """
    print("Story artwork (WebP: 800px hero + 480px tile, fitted not cropped)")
    out = ensure(OUT, "img")
    for slug, rel, invert in STORY:
        im = Image.open(os.path.join(SRC, "Story", rel)).convert("RGB")
        if invert:
            im = ImageOps.invert(im)

        for size, suffix in ((STORY_HERO, ""), (STORY_TILE, "-tile")):
            dst = os.path.join(out, f"story-{slug}{suffix}.webp")
            _fit_on_backdrop(im, size).save(dst, "WEBP", quality=86, method=6)
            report(dst, f"from {im.width}x{im.height}{' (inverted)' if invert else ''}")


def _gradient(size, c0, c1):
    """Diagonal two-stop gradient, matching the CSS `linear-gradient(140deg, …)`
    the covers replace. Computed small and scaled up — it is a smooth ramp, so
    nothing is lost and the per-pixel loop stays cheap."""
    a = tuple(int(c0[i:i + 2], 16) for i in (1, 3, 5))
    b = tuple(int(c1[i:i + 2], 16) for i in (1, 3, 5))
    n = 64
    g = Image.new("RGB", (n, n))
    px = g.load()
    for y in range(n):
        for x in range(n):
            # 140deg in CSS runs top-left to bottom-right, weighted to the vertical.
            t = min(1.0, max(0.0, (x * 0.42 + y * 0.78) / (n * 1.05)))
            px[x, y] = tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))
    return g.resize(size, Image.BICUBIC)


def _motif(draw, kind, S):
    """Draw one artist's motif at supersampled scale S.

    Each is the thing the artist plays, reduced to geometry: the ronda is a
    circle, the tamburello is a circle with jingles in the rim, the electronic
    set is a spectrum. That is what makes six covers read as one release series
    rather than six random gradients.
    """
    def C(x, y): return (x * S, y * S)
    def ring(cx, cy, r, w, alpha):
        draw.ellipse([C(cx - r, cy - r), C(cx + r, cy + r)],
                     outline=MINT + (alpha,), width=int(w * S))

    if kind == "ronda":
        # Concentric circles — the dancers' ring, opening outwards.
        for i in range(7):
            r = 0.075 + i * 0.062
            ring(0.5, 0.5, r, 0.009 if i % 2 else 0.005, 235 - i * 22)
        draw.ellipse([C(0.47, 0.47), C(0.53, 0.53)], fill=MINT + (255,))

    elif kind == "voice":
        # Arcs spreading from a single point at the base: one voice carrying.
        for i in range(6):
            r = 0.13 + i * 0.105
            box = [C(0.5 - r, 0.86 - r), C(0.5 + r, 0.86 + r)]
            draw.arc(box, 200, 340, fill=MINT + (240 - i * 30,), width=int(0.008 * S))
        draw.ellipse([C(0.475, 0.835), C(0.525, 0.885)], fill=MINT + (255,))

    elif kind == "tamburello":
        # Frame drum seen face on: head, rim, and eight pairs of jingles set in it.
        ring(0.5, 0.5, 0.40, 0.012, 255)
        ring(0.5, 0.5, 0.335, 0.005, 150)
        import math
        for i in range(8):
            th = math.radians(i * 45 + 22.5)
            cx, cy = 0.5 + 0.368 * math.cos(th), 0.5 + 0.368 * math.sin(th)
            for off in (-0.016, 0.016):
                dx, dy = -math.sin(th) * off, math.cos(th) * off
                ring(cx + dx, cy + dy, 0.026, 0.006, 255)

    elif kind == "spin":
        # Radiating strokes from a low centre — skirts opening in the turn.
        import math
        for i in range(28):
            th = math.radians(i * (360 / 28) - 90)
            # Longest stroke must stay inside the frame: 0.5 + 0.41 < 1.
            r0, r1 = 0.095, 0.27 + (0.14 if i % 2 else 0.0)
            draw.line([C(0.5 + r0 * math.cos(th), 0.5 + r0 * math.sin(th)),
                       C(0.5 + r1 * math.cos(th), 0.5 + r1 * math.sin(th))],
                      fill=MINT + (235 if i % 2 else 150,), width=int(0.007 * S))
        ring(0.5, 0.5, 0.080, 0.010, 255)

    elif kind == "trio":
        # Three overlapping circles: organetto, violin, chitarra battente.
        for cx, cy in ((0.5, 0.36), (0.355, 0.60), (0.645, 0.60)):
            ring(cx, cy, 0.185, 0.011, 245)

    elif kind == "spectrum":
        # Hard bars — the one set on the bill that is made of samples.
        heights = [0.14, 0.30, 0.21, 0.46, 0.35, 0.58, 0.40, 0.52, 0.26, 0.37, 0.18, 0.28]
        w, gap = 0.048, 0.028
        total = len(heights) * w + (len(heights) - 1) * gap
        x = (1 - total) / 2
        for h in heights:
            draw.rectangle([C(x, 0.74 - h), C(x + w, 0.74)], fill=MINT + (240,))
            x += w + gap
        draw.line([C(0.10, 0.775), C(0.90, 0.775)], fill=MINT + (110,), width=int(0.006 * S))


def build_compilation():
    """
    The compilation cover, shared by every track in the app.

    The six drawn covers below belong to the ARTISTS. This one belongs to the
    RELEASE: the festival's own compilation, which is the fiction that lets a
    single sleeve sit behind eighteen tracks by six different acts.

    The source is a black disc on a white page, so the white has to go or the
    cover reads as a white box in a near-black app. It is removed with a CIRCLE
    MASK, not a colour key: keying every white pixel also punches out the white
    inside the artwork — the wordmark, the eye, the moon's inner circle — and
    leaves them showing the ground through. The disc is a true circle, so its
    bounding box gives the mask exactly, and only the page around it is lost.

    Output is the same 800px canvas the artist covers use, so every cover slot
    in the app is one size and the layout does not shift between them.
    """
    print("Compilation cover (circle-masked off its page, scaled to the cover tile)")
    out = ensure(OUT, "img")
    im = Image.open(os.path.join(SRC, "Music", "Compilation.jpg")).convert("RGB")

    # Bounding box of everything that is not page-white — i.e. the disc.
    ink = im.convert("L").point(lambda v: 0 if v > 244 else 255)
    bbox = ink.getbbox() or (0, 0, im.width, im.height)
    disc = im.crop(bbox)

    # Circular alpha, drawn at 4x and shrunk so the rim is antialiased.
    S = 4
    mask = Image.new("L", (disc.width * S, disc.height * S), 0)
    ImageDraw.Draw(mask).ellipse((0, 0, disc.width * S - 1, disc.height * S - 1), fill=255)
    disc.putalpha(mask.resize(disc.size, Image.LANCZOS))

    # Scale the disc to fill the tile, inset slightly so the rim never touches
    # the edge. resize(), NOT thumbnail(): thumbnail only ever shrinks, and the
    # disc is ~430px inside its 600px page, so it was being pasted at its
    # source size and left sitting in a field of dead black.
    #
    # This does upscale, by about 1.7x. It is a flat hard-edged graphic, which
    # is the kind that survives it, and every place the cover is actually shown
    # — 44px rows, a 96px card, a 264px hero — is smaller than the source disc
    # anyway, so nothing is being invented at the size anyone sees it.
    inner = int(COVER_PX * 0.9)
    scale = inner / max(disc.width, disc.height)
    disc = disc.resize(
        (max(1, round(disc.width * scale)), max(1, round(disc.height * scale))),
        Image.LANCZOS,
    )

    canvas = Image.new("RGB", (COVER_PX, COVER_PX), GROUND)
    canvas.paste(disc, ((COVER_PX - disc.width) // 2, (COVER_PX - disc.height) // 2), disc)

    dst = os.path.join(out, "cover-compilation.webp")
    canvas.save(dst, "WEBP", quality=88, method=6)
    report(dst, f"{COVER_PX}x{COVER_PX} from {im.width}x{im.height}")


def build_covers():
    """
    Cover art for the six invented artists.

    The music screens used to show the artist's initials on a flat CSS
    gradient. That was honest — there is no photography to license and no real
    release to reproduce — but six near-identical gradients made the strongest
    section of the app look like the least finished one.

    These are drawn from the campaign palette with one motif per artist, so
    every cover is original to the project. Nothing here is searched for or
    downloaded: the lineup does not exist, so a "real" cover would mean putting
    some actual band's artwork under a fictional name.

    The initials stay as live HTML text over the top rather than being baked
    in — they scale with the user's text-size setting and stay selectable.
    """
    print(f"Cover art ({len(COVERS)} artists, {COVER_PX}px WebP, drawn not sourced)")
    out = ensure(OUT, "img")
    texture = Image.open(os.path.join(OUT, "img", "bg-music.webp")).convert("RGB")

    S = 3  # supersample factor — draw big, shrink down, get clean edges for free
    for slug, (c0, c1), kind in COVERS:
        base = _gradient((COVER_PX, COVER_PX), c0, c1)

        # Same texture the CSS used to screen over the top, baked in — but
        # lightly. The music background is green-dominant, and at any real
        # strength it pulls all six covers towards the same green and undoes
        # the point of giving each artist its own gradient.
        tex = texture.resize((COVER_PX, COVER_PX), Image.LANCZOS)
        base = Image.blend(base, tex, 0.13)

        layer = Image.new("RGBA", (COVER_PX * S, COVER_PX * S), (0, 0, 0, 0))
        _motif(ImageDraw.Draw(layer), kind, COVER_PX * S)
        layer = layer.resize((COVER_PX, COVER_PX), Image.LANCZOS)

        cover = Image.alpha_composite(base.convert("RGBA"), layer).convert("RGB")

        # A hairline inset rule, the one thing every cover shares.
        d = ImageDraw.Draw(cover, "RGBA")
        m = int(COVER_PX * 0.055)
        d.rectangle([m, m, COVER_PX - m - 1, COVER_PX - m - 1],
                    outline=(255, 255, 255, 38), width=2)

        dst = os.path.join(out, f"cover-{slug}.webp")
        cover.save(dst, "WEBP", quality=88, method=6)
        report(dst, kind)


def build_wireframe():
    """
    Trim the Figma editor UI off the canvas screenshot so Task 1 has a clean
    artefact for the PDF.

    This writes back into /Assets rather than /app — it is documentation, not
    something the app serves.
    """
    src = os.path.join(SRC, "Wireframes", "figma-canvas-full.png")
    if not os.path.exists(src):
        print("Wireframe (skipped — no figma-canvas-full.png)")
        return
    print("Wireframe (editor chrome trimmed)")
    out = ensure(SRC, "Wireframes")
    im = Image.open(src).convert("RGB").crop(WIREFRAME_CROP)
    dst = os.path.join(out, "wireframe-flow.png")
    im.save(dst, "PNG", optimize=True)
    report(dst, f"{im.width}x{im.height} — frames and prototype links only")


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
    build_story()
    # build_covers() is NOT called. It draws one cover per artist for the
    # invented lineup that was replaced on 18 August; the app now shows a
    # single compilation sleeve on every track. The function is kept because
    # it is the record of that design work and it still runs, but its output
    # is no longer shipped.
    build_compilation()
    build_wireframe()
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
