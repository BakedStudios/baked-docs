# Nuke Assist

:::info
You can download the Nuke installer [here](https://www.foundry.com/products/nuke/download).
:::

## Logins and Licensing

If you aren't bringing a license of your own, please reach out to Baked to make sure you've been allocated a user in our team license.

## Using Nuke Assist

When adding shots to be ingested there is a maximum of 32 shots nuke can add to its node graph as read nodes at a time. I strongly suggest saving your ingest nuke assist script so that if you've added several batches of nodes to your script, those changes can be saved and you don't have to do this again.

Inside of Nuke Assist, the Flow Production Tracking tools are available, including specific apps like the ingest app which will allow you to set formats and ingest media.

:::warning
When adding exrs to the node graph, you need to make sure you're only adding the folder above the sequences and not two directories above. E.g `ABC_010_0010/3840x2160/ABC_010_0010.####.exr` will not work.
:::
