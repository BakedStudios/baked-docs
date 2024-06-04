---
sidebar_position: 1
---

# Overview

>This is a top level explanation of Baked Studios' VFX Pipeline including how it works and what you need to know.

## Introduction

The pipeline at Baked can be broken up into a few key parts to make it easy to understand: Ingest, Work, Render and Export.

**Ingest** - This is the process of bringing in media from clients and making sure it goes where it needs to go in a uniform fashion so that this process is dependable and repeatable. Files need to be in the same place across projects so that we know where to find them. Files need to be formatted in a consistent way so that we always know what we're dealing with. To help with this we have worked with Nodes & Layers to incorporate an Ingest app into our pipeline.

**Work** - At Baked needs to be done in a way that retains our hand-crafted approach and values, meaning making it as intuitive as possible for quality talent to use our tools. To do this we use the Flow Production Tracking Pipeline Toolkit. While other programs out there exist, like OpenPype, Flow is the most production ready and gives us what we need to accomplish our goals. We use these tools at this stage '**as is**', meaning we're relying directly on a trusted partner, Autodesk, to provide the best and most widely used tools available. Much of how this pipeline is designed is in order to get these tools in the hands of the artists to give them the best experience we can. Documentation for Flow Production Tracking Pipeline Toolkit can be found [here](https://help.autodesk.com/view/SGDEV/ENU/?guid=SG_Supervisor_Artist_sa_integrations_sa_integrations_user_guide_html#overview)

**Render** - We use a render farm made up of a bunch of computers making image sequences and movie files. This render farm has required extensive configuration to work for us. The render farm means that artists can continue working while they're rendering our large batches of files. Most of the integration between our pipeline and our render farm is out of the box Thinkbox Deadline.

**Export** - Here we create various flavors of movies based on rendered EXRs from artists for distribution for internal review, client review and delivery to editorial. This process is managed by Flow Production Tracking, Nodes & Layers export app (an app for Toolkit), Nodes & Layers NukeTranscoder (a plugin for Deadline) and our render farm, managed by Deadline.

## Toolkit vs Apps for Toolkit

An important distinction for our pipeline (which is based off the Flow Production Tracking Pipeline Toolkit) is the difference between Toolkit itself and its configuration - and applications that are built for toolkit.

Toolkit is like the OS, and apps are well, apps. You can control your OS system settings, and then you can control your apps individually. Nodes & Layers makes apps for our toolkit.

## Multi-Location Support

Baked is a multi-location company with hubs in Los Angeles, New York and Montana. We designed our pipeline with an open door to a future in the cloud. Incorporating a hybrid workflow between cloud and on-premise systems is complex, but crucial to a modern VFX workflow.

## Pipeline Overview

Our pipeline is a bunch of services put together to make up something we can use. It's a buy-don't-build set up that mostly utilizes proprietary software as a server companies that we subscribe to. For us this works. This is how some of that software and hardware works together in a big system:

<img src={require('./after.png').default} className="invert-color" alt="After" style={{ width: '100%', height: 'auto' }} />

## What You Need To Know

The individual 'soup to nuts' documentation for your role can be found in the sidebar. It may help to go through everything to get a sense of how different software work together and how something an Artist does effects what a Coordinator will need to do and vice versa. Flow is a shared database, and all these processes revlove around working off of that shared database.

The basic software breakdown is included in the sidebar as well, here's the list:

| Software          | Description                        | Role              |
|-------------------|:----------------------------------:|:-----------------:|
| Suite Studios     | Cloud Storage solution             | All Baked         |
| Flow PTR Toolkit  | Production Tracking and Pipeline   | All Baked         |
| Baked App         | Pipeline functions made easy       | All Baked         |
| Nuke & Nuke Assist| Artist DCC / Ingest Tool           | Artists and Coords|
| Deadline          | Render Farm Manager                | Artists and Coords|


Happy reading!
