---
title: 'SafeCall'
excerpt: "SafeCall is the EPITECH Innovative Project, in which I took part with six other developers, as a project manager. We developed this idea from the concept stage to the production release"
coverImage: '/postImg/SafeCall/test.png'
date: '2023-12-19T05:35:07.322Z'
author:
  name: Julien
  picture: '/assets/pictures/julien.png'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
tag: '/projects/SafeCall'
---

SafeCall is the EPITECH Innovative Project, in which I took part with six other developers, as a project manager. We developed this idea from the concept stage to the production release. You can find all the details on the showcase site : <link>

## Concept

SafeCall is built on a fact : the leak of mobile phones causes a lot of trouble in the lives of everyone, and it can take different forms: phone calls with scam purposes, automated phone call…
SafeCall is an ecosystem where people can chat without sharing their phone number with the others. SafeCall is built for the second-hand market. These days, people post offers online on different websites (Vinted, LeBonCoin in France…) and most of the time, they want to be contacted on their personal mobile phone, which is a real problem because the phone number is freely accessible on the offer, but at the end, only one person needs it, the unique buyers of the offer.

With SafeCall, this privacy issue is resolved.

## Technically :
![Architecture of the Server of SafeCall](/postImg/SafeCall/archi.png)

This is how SafeCall is built, we have 2 different kinds of clients, the web app and the mobile application. Then we have an exposed API that redirects the requests to the required services. We have 3 different microservices : Audio, used for audio and video management, Profilers, used for the profile data of the users, and Messagerie takes care of the textual conversations of the application. All those services exploit a MongoDB (Atlas) database.


## Why these technical choices :

I spent a lot of time on the architecture of this project, it was a major choice for a project of 7 people over 2 years and around the world. We needed to have the best configuration for everyone, which is why we chose a **microservice's architecture**.

Concerning the technologies, we had 1 requirement, the possibility to communicate with the main API. I developed the main API & Profiler, and for those two parts of the project, I used **Go** with the framework **Gin-Gonic** for different reasons. We needed performance for the entry point of the project, and **Go**, as a compiled language, is a first-choice option with Rust. And because I already knew **Go** and had already experienced it, I chose to deepen my knowledge with this technology. 

About the Audio, we developed it several times, and every time we were confronted with technical issues with the front end. We wanted to at first use **C++** and communicate with ZMQ with the API, but it didn’t work with the front end, so we changed and finally used **Node.js** to manage the connection of the users, and now they use the peer-to-peer protocol to assure video and audio transmission.

Messagerie is also developed in **Node.js** because it was easier for the developer and the performance was good as well. It uses the same database but a different collection in order to separate the conversation data from the login and profile data.

## What about the DevOps :

I managed this aspect of the project on my own, and I learned a lot of stuff. EPITECH allows us to use **Microsoft Azure** virtual machines to deploy our backend. That’s exactly what we used for the deployment of SafeCall.

Before this, I **dockerized** every part of the server, taking care of the dependencies and the optimization of the build because the storage on the VM is limited. I set up a **Docker** network where all the containers could communicate with each other while not being accessible from the Internet. Only the main API is accessible for security purposes.

This worked most of the time, but when we deployed the main website on **Vercel**, we had a big problem, we needed to update our API from HTTP to HTTPS because Vercel exports all applications as HTTPS. So I generated certificates approved by **Let’s Encrypt**, and once uploaded to our server, it finally worked.


## Sources

You can visit our website to get further information about the project : [here](https://eip.epitech.eu/2024/safecall/)
