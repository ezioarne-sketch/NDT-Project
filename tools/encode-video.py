#!/usr/bin/env python3
"""
Encode the frames captured by tools/walkthrough.mjs into the Task 4 video.

Produces Assets/Walkthrough/notte-della-taranta-walkthrough.mp4 — H.264, which
plays in Omnivox, PowerPoint, Keynote and every browser without a codec pack.

    node tools/walkthrough.mjs
    python tools/encode-video.py
"""

import glob
import os
import subprocess
import sys

import imageio_ffmpeg

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRAMES = os.path.join(os.environ.get("TEMP", "/tmp"), "ndt-frames")
OUT_DIR = os.path.join(ROOT, "Assets", "Walkthrough")
OUT = os.path.join(OUT_DIR, "notte-della-taranta-walkthrough.mp4")
FPS = 15


def main():
    frames = sorted(glob.glob(os.path.join(FRAMES, "f*.jpg")))
    if not frames:
        print(f"No frames in {FRAMES}. Run: node tools/walkthrough.mjs")
        return 1

    os.makedirs(OUT_DIR, exist_ok=True)
    ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()

    cmd = [
        ffmpeg, "-y",
        "-framerate", str(FPS),
        "-i", os.path.join(FRAMES, "f%05d.jpg"),
        "-c:v", "libx264",
        "-preset", "slow",
        "-crf", "20",
        # yuv420p and even dimensions are what make this play everywhere rather
        # than only in the browser it was made in.
        "-pix_fmt", "yuv420p",
        "-vf", "scale=trunc(iw/2)*2:trunc(ih/2)*2",
        "-movflags", "+faststart",
        OUT,
    ]
    print(f"Encoding {len(frames)} frames ({len(frames)/FPS:.0f}s) at {FPS}fps\n")
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        print(result.stderr[-2000:])
        return 1

    size = os.path.getsize(OUT)
    print(f"Written {os.path.relpath(OUT, ROOT)}  {size/1024/1024:.1f} MB")
    print(f"Duration ~{len(frames)/FPS:.0f}s")
    return 0


if __name__ == "__main__":
    sys.exit(main())
