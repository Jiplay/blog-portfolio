---
title: "Experiences in a nutshell"
excerpt: "I'm a developer, I did a lot of different things during the first steps of my carrer that I organize in folders to vizualise everything easily. I'm a creative person who likes challenges, I craving to learn new things, passionated by optimization."
coverImage: '/postImg/hero.png'
date: '2023-11-23T05:35:07.322Z'
author:
  name: Julien Garsia
  picture: '/assets/pictures/julien.png'
ogImage:
  url: '/postImg/hero.png'
tag: 'pro'
---

# More experiences

You'll find all the details about my professional experience in the folders. Yet, this is all you can find on this website, but soon enough I'll add others projects, some from school, some side project:

* SafeCall - 2022 to 2024: My end-of-studies project at EPITECH, it's an application, web and mobile where users can chat vocally and textually without sharing their phone number with each other. We build this app for the second-hand market communication, where we noticed that a large share of user write his own phone number to get contacted more easily. 
We tried to build a safe environment where people can't be harassed or spammed by advertisement.

In SafeCall I have different roles: 

* 📍 The architect role : I disposed the backend entirely, related to the preferences of the team and the technical requirements. We chose a microservice architecture, with an API in Golang for the entry point of our backend. With this service, we have another one in Golang to manage the user profile and another in Node.js to manage the text communication. We have as well one in C++ for the managing the audio.

* 📍 The software engineer : I developed entirely the API and the profile microservice, I also setup the database (MongoDB Atlas) and create the models for the different entities in SafeCall.

* 📍 The DevOps role : I take care of the deployment of the application, using vercel for the web application, and using a virtual machine on Microsoft Azure for the backend. Every microservice is dockerized and published, we just need to download the images on the virtual machines, run the images inside a docker network for them to communicate easily without any exposure on the Internet.

See more details about SafeCall [here](/projects/SafeCall)
