---
title: Testing v0.7.0-bakedstudios.0.6.0b5
authors: ["cameron"]
tags: [nuke, pipeline, flow, nodes&layers]
---

## Checklist

- [x] Flow Production Tracking loads Pipeline Toolkit and creates appropriate directories in Suite and on Basket.

- [x] Nuke launches properly.

- [x] Nuke project template is read from Suite.

- [ ] Plate and ref versions for shotgrid are created properly from Basket.

- [ ] Once assigned, shots are sorted based on storage location field in Flow and ingested. Refs are copied to their new locations. (ingest formats are working.)

- [ ] No duplicate folders are created.

- [ ] Published support files adhere to correct file paths dictated by storage location field in Flow.

- [ ] OCIO config sets properly and v000s look correct - and save to appropriate locations in Suite and Basket.

- [x] Workfiles app works correctly, and artists can open work.

- [x] OCIO viewer in nuke works.

- [x] Flow Production Tracking write node is free of bugs and includes metadata knob.

- [ ] Send nuke to deadline works, and deadline is able to read from suite to grab data for render.

- [ ] Read from write works and publisher correctly publishes.

- [ ] Movie for Flow is rendered on Deadline. baked.render_artist_mov is findable.

- [x] Color and slate look correct.

- [ ] Statuses are set correctly on upload and tasks are correct.

- [ ] LA side exports of Suite and Basket shots render on deadline correctly for client versions - outputting to 1_IO/3_DELIVERY/\{playlist_name}

- [ ] Files from Suite copy back to Basket without needing to replace existing data.
