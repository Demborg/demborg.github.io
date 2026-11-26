---
date: 2026-11-24
title: Depth from focus
ai: "X"
type: video
video: /projects/depth-from-focus/scan.mp4
links:
- label: Demo
  url: https://demborg.se/depth-from-focus/
- label: Code
  url: https://github.com/Demborg/depth-from-focus
---

While building the stop motion app for my [previous yak-shaving detour](/projects/bike-light-holder), I stumbled across a wonderful browser API: Chrome on Android lets a web page set your phone's focus distance _in metres_. That immediately brought back a talk on [_second-order texture_](https://imaging.cs.cmu.edu/second-order-texture/) from this year's ECCV in Malmö, and suddenly I had to see if a phone browser could double as a depth-from-focus 3D scanner.

I pointed Claude at the camera API and my phone over ADB for a quick hack that somehow kept getting better. The phone sweeps focus through the scene, painting whatever is sharp green as it goes, while WebGPU crunches the resulting stack right on the device and turns the capture straight into an interactive 3D point cloud in the browser.

All of this started because I kept misplacing my bike lights, but maybe it wasn't yak shaving after all. And now I can't help imagining what it could do with a narrow band-pass filter taped to the lens.
