---
title: Release | v0.4.1-bakedstudios.0.4.0
authors: ["cameron"]
tags: [release, config]
---

This update should address the following issue/requests:


### Bug Fixes
* Restores the Deadline Submitter and Pipeline Tools menu’s in Nuke

### Deadline
* Adds a setting for Nuke renders to be submitted to Deadline with the “nuke” limitgroup applied.
This limitgroup is already set in Baked’s Deadline and only includes the D nodes.
This limits the jobs to only render on these nodes.
