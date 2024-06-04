
# Nodes List (For Render Template and Export Profiles)

> This document is a comprehensive list of the *default* nodes that are set up in the Nuke Transcoder render_template.nk script and can be accessed with Export Profiles.

## **Baked Nodes**
>For creating movies for Flow and internal review.

|Node Name | Description|
|--- | ---|
|read_in | Always where media is read in.|
|ingest.ingest_frames | Always where media is ingested.|
|baked.render_ref_mov | Always where refs are rendered as movies for Flow.|
|baked.render_plate_mov | Always where plates are rendered as movies for Flow.|
|baked.render_artist_mov | Always where artist versions are rendered as movies for Flow.|
|baked.render_rotopaint_mov | Always where roto and paint frames are rendered as movies for Flow.|

## **Client Nodes**
>For creating movies for client deliveries that require a slate.

|Node Name | Description|
|--- | ---|
|client.render_v000_exr | EXR of a v000 version with client ready compression.|
|client.render_v000_mov | Movie of a v000 version formatted at 1920x1080p.|
|client.render_v000_mov_fullres | Movie of a v000 version formatted at same as source resolution.|
|client.render_v000_mov_burnins | Movie of a v000 version formatted at 1920x1080p, with burn-ins. |
|client.render_wip_exr | EXR of a wip version with client ready compression.|
|client.render_wip_mov | Movie of a wip version formatted at 1920x1080p.|
|client.render_wip_mov_fullres | Movie of a wip version formatted at same as source resolution.|
|client.render_wip_mov_burnins | Movie of a wip version formatted at 1920x1080p, with burn-ins. |
|client.render_asfinal_exr | EXR of an as final version with client ready compression.|
|client.render_asfinal_mov | Movie of an as final version formatted at 1920x1080p.|
|client.render_asfinal_mov_fullres | Movie of an as final version formatted at same as source resolution.|
|client.render_asfinal_mov_burnins | Movie of an as final version formatted at 1920x1080p, with burn-ins. |
