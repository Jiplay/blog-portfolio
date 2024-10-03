---
title: 'PassMan'
excerpt: "I used my skills in Go to design myself a cross platform password manager, using the same process every company does to store passwords. I used Wails, that allowed me to develop the backend in Go & and frontend with TypeScript and React. I did everything in this project : the client, designer and the developer!"
coverImage: '/postImg/PassMan/Passman.png'
date: '2023-05-12T05:35:07.322Z'
author:
  name: Julien
  picture: '/assets/pictures/julien.png'
ogImage:
  url: '/postImg/PassMan/Passman.png'
tag: '/projects/PassMan'
---

Password manager are great, they store and encode your data, when you need it, they gave it to you. But how they do to assure you that your data is safe with them ? I wanted to answer this question and this is how I started working on my own password manager, PassMan.

Code here available on my [github](https://github.com/Jiplay/PassMan)

## Requirements of the project

--> **Desktop application** : I could use a web application, but I rather a desktop, to learn something new, and to have a more closed ecosystem.

--> **Cross platform application** : I usually work on Mac and I have a windows computer that I use daily as well and I need my passwords on both of my computers.

--> **Go and Typescript** : For the frontend of my application, I could use some window manager like Fyne, *Which reminds me of CSFML and SFML, thanks EPITECH ;p*. However, it's not the most practical in my use case, and definitely not the easiest way. So I chose **Wails**, that allows me to code the frontend of my application with TypeScript. I'm familiar with this technology, done some project, so it was the perfect combo.

--> With TypeScript, I used **React**, the main reasons is that I'm used to it, and I don't really know other library to help me design application. I may need to explore alternative in the future.

## Wails

Wails is a open-source project that allows Go developers to build cross-platform apps with Go and modern frontend.

### Project Generation

Once you installed wails and the dependencies (go 1.20+ & NPM Node 15+) you can init your project using your favorite framework (Svelte, React, Vu, Preact, Lit).

```shell
.
├── build/  // Project build directory
│   ├── appicon.png // The application icon
│   ├── darwin/
│   └── windows/
├── frontend/  // Frontend project files 
├── go.mod
├── go.sum
├── main.go  // The main application
└── wails.json  // The project configuration
```

### How does it work ?

A Wails application is a standard Go application, with a webkit frontend. The Go part of the application consists of the application code and a runtime library that provides a number of useful operations.

It is possible to bind Go methods to the frontend, and these will appear as JavaScript methods that can be called, just as if they were local JavaScript methods.

![wails](/postImg/PassMan/wails.png)

## PassMan, my own Password Manager

A password manager is a safe place for your passwords, there are encoded from your main passwords, and this one exist only in your head, that's the only one you have to remember to have access to all other.

### Main Password ? How does it work ?

Even PassMan shouldn't know your main password, but I need to be sure that it's you when you want to login, so how did I do ?

I'll use an imaged example :

Consider the input as your main Password, PassMan use a hash function **bcrypt** to remember the output, generated with your password and I compare this output with the one generated when you want to login.

![fruits](/postImg/PassMan/fruits.png)

I choose **bcrypt** because it's a powerful tool that it's almost impossible to determine the input from the output because to encode something with **bcrypt** you need to provide your input (ofc) and a number, the bigger this number is, the more encoded it will be, and the more time it'll take to encode the input. **It takes more or less 1 second** to encode/decode the password with my settings

### But why the time matters ?

Because there are several way to determine someone else password and the most powerful one is the dictionary attack. It consists to use the most used passwords and to try everyone of them.

If it takes, 1 second for testing every password, it make the hack more time-consuming, but if your password is common or too short it bcrypt won't protect it, it's not magic.

That's why you need to have a strong password, combined with bcrypt, it's almost impossible to crack it.

### What about the other passwords ?

The purpose of a password manager, is to store passwords obviously, and I detailed only the login method. Other passwords are encoded with another algorithm that allow me, from your password to retrieve the passwords in plain text for you to login everywhere you want.

The thing is, everything is encoded, and I as the one and only PassMan developer am not able to determine your passwords. Which make it a pretty satisfying product according to me !

## PassMan

Nonetheless, it's just a side project to have fun with Go & Typescript, the project is open-source and you can browse the code on my GitHub, you can implement yourself if you provide credentials to a database from Mongodb Altas.