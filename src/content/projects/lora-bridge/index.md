---
date: 2026-08-22
title: Cellar link
ai: "X"
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

Our brewery has graduated from a too warm cupboard to a root cellar four floors under my apartment. Great as this is for our small yeast friends, it poses a big problem for a hobby brewery of engineers: with no wifi, how is the Tilt bobbing in the bucket to tell us how the brew is doing?!

Our brewfather Johan had a solution of course, and hooked us up with a low-power LoRa link to forward the progress of the brew back up the stairs. In a mad dash to get it all working before the brew session I let a Claude session loose with access to both the ESP32 on the sender side and the Raspberry Pi on the receiver, and we _just_ managed to get a link up and running in time for the pitch.
