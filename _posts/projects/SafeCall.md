---
title: 'SafeCall'
excerpt: "SafeCall is the EPITECH Innovative Project, where I took part with 6 others developers, as a project manager. We developed this idea from the concept stage to the production release"
coverImage: '/postImg/SafeCall/test.png'
date: '2023-12-19T05:35:07.322Z'
author:
  name: Julien Garsia
  picture: '/assets/pictures/julien.png'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
tag: '/project/SafeCall'
---

SafeCall is the EPITECH Innovative Project, where I took part with 6 others developers, as a project manager. We developed this idea from the concept stage to the production release. You can find all the details on the showcase site : <link>

## Concept

SafeCall is built on a fact : the leak of mobile phone causes a lot of trouble in the life of everyone and it can take different aspects : phone call with scam purpose, automated phone call..
SafeCall is an ecosystem where people can chat without any needs of sharing the phone number with the others. SafeCall is built for the second hand market, these days, people post offers online on different website (Vinted, LeBonCoin in France…) and most of the time, they want to be contacted on their personal mobile phone, which is a real problem, because the phone number is freely accessible on the offer, but at the end, 1 person needs it, the unique buyers of the offer.

With SafeCall, this privacy issue is resolved.

## Technically :
![Architecture of the Server of SafeCall](/postImg/SafeCall/archi.png)

This is how SafeCall is built, we have 2 different kinds of clients, the web app and the mobile application. Then we have an exposed API that redirects the requests to the required services. We have 3 different micro services : Audio, used for audio and video management, Profilers, used for the profile data of the users, and Messagerie takes care of the textual conversations of the application. All those services exploit a MongoDB (Atlas) database.


## Why these technical choices :

I spent a lot of time on the architecture of this project, it was a major choice for a project of 7 people of 2 years and around the world. We needed to have the best configuration for everyone, that’s why we chose a **micro services architecture**.

About the technologies, we had 1 requirement, the possibility to communicate with the main API. I developed the main API & Profiler, and for those two parts of the project, I used **Golang** with the framework **Gin-Gonic** for different reasons. We needed performance for the entry point of the project, and **Golang**, as a compiled language is a first choice option, with Rust. And because I knew already **Golang**, and had already experienced, I chose to deepen my knowledge with this technology. 

About the Audio, we developed it several times, and every time we were confronted to technical issues with the front end. We wanted at first use **C++** and communicate with ZMQ with the API but it didn’t work with the front end so we changed, and finally used **NodeJS** to manage the connexion of the users and now they use the peer to peer protocol to assure video/audio transmission.

About Messagerie, it’s developed in **NodeJS** as well, because it was easier for the developer and the performance was good as well. It uses the same database but a different collection in order to separate the conversation data from the login/profile data.

## What about the DevOps :

I managed this aspect of the project on my own, and I learned a lot of stuff. EPITECH allows us to use **Microsoft Azure** virtual machine to deploy our backend. That’s exactly what we used for the deployment of SafeCall.

Before this, I **dockerized** every part of the server, taking care to the dependencies and the optimisation of build, because the storage on the VM is limited. I set up a docker network where all the containers could communicate with each other while being not accessible from the Internet. Only the main API is accessible for security purposes.

This worked most of the time, but when we deployed the main website on **Vercel**, we had a big problem, we needed to update our API from HTTP to HTTPS, because Vercel export all applications as HTTPS. So I generated certificates approved by **Let’s Encrypt**, and once upload on our server, it finally worked.


## Sources

You can visit our website to have further information about the project : *[link](https://eip.epitech.eu/2024/safecall/)*
