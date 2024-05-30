---
title: Update to render_template.nk
authors: ["cameron"]
tags: [nuke]
---

>Changes have been made to the [render_template.nk](suite://files/Admin/resources/render_template/render_template.nk) file for the nuke transcoder.

### Updates:
- Fewer copies/redundant nodes
- Categorized groups so you know where to look
- Movie write nodes set FPS with root.fps so always check project settings on this script.
- Slate reformats tobox with read_in.width so should cut down on slate size issues
- Relative file pathing with ../ allows for cross OS compatibility when loading the template from Suite.
