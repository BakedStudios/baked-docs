---
title: Deep Dive | Syncthing
authors: ["cameron"]
tags: [syncthing, deep-dive]
---

> tldr: [Syncthing](https://syncthing.net/) is a [FOSS](https://en.wikipedia.org/wiki/Free_and_open-source_software), decentralized file synchronization tool, facilitating seamless data synchronization across different locations. This article looks at Syncthing's underlying mechanisms and its application within media production companies, specifically highlighting its use here at Baked Studios to synchronize data across a Synology NAS in Montana, an SNS EVO storage system in Los Angeles, and another storage in New York. By diving into its architecture and operational framework, hopefully this will provide insights into Syncthing's utility in enhancing collaborative workflows and data management in the visual effects industry.

## Introduction
In the fast-paced environment of media production, the ability to efficiently synchronize and manage data across multiple locations is often mentioned as important. Why? If you think about our entitre ShotGrid set-up it all relies on one thing: a shared storage for us all to work off of. Syncthing, an open-source peer-to-peer file synchronization tool, offers a robust solution by enabling devices to synchronize files directly with each other over a secure, encrypted connection. With some handy drive letter mapping, Syncthing gives us the coveted storage platform we need for ShotGrid to organize our company's workflow properly.

## Architecture
At its core, Syncthing utilizes a decentralized model, eschewing traditional client-server architectures for a peer-to-peer approach. This design facilitates direct data exchange between devices, ensuring efficiency and redundancy. Each device in the network operates both as a client and a server, contributing to the system's resilience and scalability. Syncthing incorporates Block Exchange Protocol (BEP) for efficient data transfer, employing a block-based synchronization mechanism that minimizes data transfer by only exchanging modified blocks within files. This means that while an initial sync can take a while, further syncs down the line are much faster because only changes are synced.

## Security
Security in Syncthing is essential to stave off accusations of it being sketchy and open source, they employ TLS encryption to secure data transfers between devices. Additionally, each device is identified by a unique cryptographic certificate, enabling authenticated connections and preventing unauthorized access. The decentralized nature of Syncthing inherently reduces the risk of a single point of failure, enhancing the overall security posture of the synchronization network.

## Efficiency and Reliability
Syncthing's configuration allows for real-time file synchronization, ensuring that changes made in one location are quickly reflected across all connected devices. This immediacy is crucial for media production environments and our shotgrid config where team members in different locations need access to the latest versions of files. Syncthing's network efficiency is further highlighted by its use of local networks when available, optimizing transfer speeds and reducing dependence on external internet connections. This means we can use syncthing to sync backup storage at a location as well.

## Application here at Baked Studios
Baked Studios uses Syncthing to synchronize project data across our three key locations: a Synology NAS in Montana, an SNS EVO storage system in Los Angeles, and something in New York. Further deep dives into Syncthing and cloud storage are necessary if we want to use it there in future.

## The Gist
Syncthing stands out as a highly effective solution for decentralized file synchronization, with significant advantages in terms of security, efficiency, and flexibility. Its application here at Baked Studios underscores the tool's potential to streamline collaborative workflows and data management in the demanding context of media production. As the visual effects industry continues to evolve, tools like Syncthing will play a crucial role in enabling seamless collaboration across the globe.

### References:

* Syncthing Documentation. https://docs.syncthing.net
* Block Exchange Protocol Specification. https://docs.syncthing.net/specs/bep-v1.html

### Useful Video:

* https://www.youtube.com/watch?v=PSx-BkMOPF4
