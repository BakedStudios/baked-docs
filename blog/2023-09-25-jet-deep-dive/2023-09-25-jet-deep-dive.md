---
slug: jet-deep-dive
title: Deep Dive | Signiant Jet
authors: ["cameron"]
tags: [deep-dive, file-transfer]
---

>TLDR: Signiant Jet is a proposed software addition to our pipeline here at Baked. It syncs storage.

## About Jet
One of the most common use cases for Jet is when companies with multiple locations need to automate the movement or syncing of data between locations. Jet is most beneficial for recurring, time-critical transfers that involve large files moving over long distances. Think: syncing an asset library.

<!--truncate-->

The installation of a single SDCX Server supports both Jet and Media Shuttle transfers. With this, companies can support workflows that involve person-initiated transfers, automated transfers or both, connecting to any storage, anywhere.

## Manual Transfers
Along with some other options, you can always trigger a sync/transfer manually. As well as use Media Shuttle to send files to and from users.

## Hot folders
Easily set up hot folder jobs, where any files placed into a folder can trigger an automated transfer to one or more locations.

## Scheduled Transfers
Jobs can be set up to run at specific times of day or days of the week.

## APIs
Almost anything you can do from the Jet interface, you can also do programmatically via the APIs making it easy to extend Jets powers to add additional logic to jobs or connect Jet workflows to other systems. This means potential integrations with Slack and SG down the line etc...

Extra credit: Jet supports simple hot folder, **manual** and scheduled workflows, and offers a modern, **event-driven API**, making it easy to integrate Jet with other applications. With event driven stuff, we can really refine our pipeline to transfer data based on statuses for example. Or when the publish button is clicked, telling Jet to transfer data at that specific time.

>*Note:* Jet's API is mostly JavaScript and JSON files. Not my cup of tea, would need lots of external help.
