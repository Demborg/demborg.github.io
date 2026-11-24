---
date: 2026-08-27
title: Skugga
ai: "X"
type: video
video: /projects/skugga/scan.mp4
links:
- label: Foot scanning
  url: https://volumental.com/
- label: Coplanar shadowgrams
  url: https://www.ri.cmu.edu/pub_files/pub4/yamazaki_shuntaro_2007_1/yamazaki_shuntaro_2007_1.pdf
---

One of my favourite properties of light for computer vision is _reciprocity_: a camera is just a projector in reverse, and a point light is equivalent to a pinhole camera. So you can build a 3D scanning rig with hundreds of "virtual" cameras by lighting a scene with known lights one at a time and observing the cast shadows. Since we scan feet for a living, I spent our August hackathon at work using this principle and a strip of WS2812 addressable LEDs to make a pretty decent 3D scanner with a single camera and some fairly simple space carving.
