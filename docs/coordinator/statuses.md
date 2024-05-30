---
sidebar_position: 1
---

# Statuses

>Below is a breakdown of shot, task, and version statuses that are available in Flow. Slate statuses are included as well.

## **Shot Statuses**
These statuses are for the overall shot, regardless of version
|**Shot Status** | **Prefix** | **Description**|
|--- | --- | ---|
|Omit | omt | This shot has been omitted by production, and does not require further work|
|Bidding | bid | This shot is being bid by the client and Baked, discussing work and cost|
|On Hold | hld | This shot is temporarily paused, while waiting for client direction|
|Re-Pull | repull | This shot is needing to be re-pulled, due to plate error or other circumstances|
|Awaiting Media | media | This shot is awaiting plates or necessary media from the client|
|Awaiting Assignment | awa | This shot is ready and waiting to be assigned to an artist|
|Active | actv | This shot has been assigned to an artist and is in active work|
|Pending Client Review | rev | This shot has a new version that has been sent to the client, and Baked is awaiting feedback|
|Client Approved | apv | This shot has had a version approved by the client|
|Delivered to DI | di | This shot's approved version has been delivered to the DI for review|
|Final | final | This shot has been finaled by the client|

## **Task Statuses**
These statuses are for each, individual task assigned to an artist
|**Task Status** | **Prefix** | **Description** | Corresponding Shot Status|
|--- | --- | --- | ---|
|Omit | omt | This task has been omitted, and does not require further work | Omit (omt)|
|On Hold | hld | This task has work paused, because the shot on hold from the client | On Hold (hld)|
|Waiting to Start | wts | This task is waiting to start, this is the default status. | Awaiting Assignment (awa), Awaiting Media (media), Bidding (bid), Re-Pull (repull)|
|Ready to Start | rdy | This task has every component necessary, and is ready to begin work | Active (actv)|
|Pull Error | per | This task has a pull error that needs a re-pull | Active (actv)|
|In Progress | ip | This task is actively being worked on | Active (actv)|
|Needs Clarification | ncl | This task needs clarification from the client | Active (actv)|
|Out For Roto/Paint | ofr | This task has roto/paint work being outsourced | Active (actv)|
|Back From Roto/Paint | bfr | This task has outside roto/paint work completed and ingested | Active (actv)|
|Check New Version | cnv | This task has a new version that is ready for internal review | Active (actv)|
|Address New Notes | adn | This task has internal or client notes that need to be addressed | Active (actv)|
|Send to Client | sndcli | This task has a new version that is approved to send for client review | Active (actv)|
|Step Completed | stcomp | This task has one step completed, and ready for the next step | Active (actv)|
|QC Kickback | qckbk | This task has requires QC notes to be addressed | Active (actv)|
|Pending Client Review | rev | This task is awaiting feedback from the client review | Pending Client Review (rev)|
|Client Approved | apv | This task has been approved by the client | Client Approved (apv)|
|Delivered to DI | di | This task has been delivered to the DI | Delivered to DI (di)|

## **Version Statuses**
These statuses are for each, individual version uploaded by the artist
|**Version Status** | **Prefix** | **Description** | Corresponding Task Status|
|--- | --- | --- | ---|
|N/A | na | This version has no needed version status | No|
|Check New Version | cnv | This version has a new version uploaded by the artist, that is ready for internal review | Check New Version (cnv)|
|BKD Note | bkdn | This version has has received feedback from Baked supervisors | Address New Note (adn)|
|Step Completed | stcomp | This version has one step completed, and ready for the next step | Step Completed (stcomp)|
|Send WIP | sndwip | This version is a WIP that is approved to send to the client, no need to create client version. Slate will say "In Progress" | Send to Client (sndcli)|
|Send to Client | sndcli | This version is approved internally to send to the client for review | Send to Client (sndcli)|
|QC Kickback | qckbk | This version has QC notes to be addressed | QC Kickback (qckbk)|
|Pending Client Review | rev | This version has been sent to the client for review | Pending Client Review (rev)|
|Client Note | note | This version has received feedback from the client | Address New Note (adn)|
|Hero Shot | hero | This version is a client-approved scene hero, and other shots in scene should match the approved look | Client Approved (apv)|
|Client Approved | apv | This version has been approved by the client | Client Approved (apv)|

## **Slate Statuses**
These statuses are mainly for review purposes. They indicate what the version is.
|**Slate** | **Description** | **Color**|
|--- | --- | ---|
|Plate | The proxy version of the plate for review on Flow | Orange|
|Ref | The processed version of the REF for review with Flow | Light Blue|
|V000 | The coordinator generated v000 | Purple|
|Roto/Paint | Anything from external vendors for roto and paint | Red|
|In Progress | Anything unapproved by Baked supervisors | Yellow|
|As Final | Approved by Baked Supervisors | Green|
