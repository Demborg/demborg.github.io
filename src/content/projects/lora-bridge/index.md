---
date: 2026-08-22
title: Cellar link
type: images
images:
- ./cellar.jpg
- ./dashboard.png
links:
- label: Brewfather
  url: https://brewfather.app
- label: Tilt
  url: https://tilthydrometer.com
---

Our beer ferments in a cellar four floors down with no wifi, so the Tilt hydrometer in the bucket had no way to tell anyone how it was doing. Johan, our brew captain, sorted all the hardware and I wrote the Rust for both ends. A battery powered ESP32 listens to the Tilt over bluetooth and throws a reading up to a Pi in the apartment over LoRa every sixteen minutes, which forwards it to Brewfather. On a one percent duty cycle it should last a couple of months per charge.
