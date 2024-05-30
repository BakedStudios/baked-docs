---
sidebar_position: 3
---

# OCIO Color Workflow

> The Toolkit tools from Nodes & Layers have built in support for OCIO and context switching. This means that switching between Shots will automatically change the OCIO environment and provide LUTs and CDL’s for the current Shot.

## The Configuration
By default, when starting up a project in ShotGrid Desktop, our config looks for a file inside the main Project Root at the following location:

`global/configs/ocio/config.ocio`

> Learn more: To learn more about OCIO and how to create your own configuration files, please visit the [OpenColorIO website](https://opencolorio.org/).

## Nuke

1. Open Nuke through ShotGrid Desktop and open a file associated with a shot from the Shotgrid -> File Open window.

2. Select your Show Look or Shot Look from the Viewer Process dropdown

![Nuke](./nuke2.png)

> Tip: Make sure you don't have color info applied manually when you go to render your scene! This is all managed by Export Profiles.

## Maya

1. Open Maya through ShotGrid Desktop and open a file associated with a Shot or Asset from the Shotgrid → File Open window.

2. Select your Show Look or Shot Look from the Viewer Transform dropdown

![Maya](./maya2.png)

> Troubleshooting: If for any reason either drop down doesn't appear correctly, then either the shot support files haven't been published correctly, or the OCIO config is missing something. Please reach out to @Cameron or the coordinator on your show.
