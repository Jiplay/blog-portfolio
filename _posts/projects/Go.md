---
title: 'Go'
excerpt: "Go is the programing language that I used the most in my life, I kinda like it"
coverImage: '/postImg/go.png'
date: '2023-12-19T05:35:07.322Z'
author:
  name: Julien
  picture: '/assets/pictures/julien.png'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
tag: '/projects/Go'
---

Go has been developed at Google in 2007 to solve one major problem at Google, make the development more fast and efficient. At Google, most of the software are using C++, and it took sometimes 45 min to compile the project. To fix this issue, 3 men has worked on the creation of another programming language, Go.

Those people are Rob Pike, he worked on Unix 8 and other OS in his career; Ken Thompson, he worked at Bell labs, and google lately, he got the Turing Prize for his work on the Unix system in 1983.

Those people had restrictions concerning Go : 

📍 Go must work at scale with a large number of dependencies and developer to be perfect for a big company like Google.

📍 Go must be close the C/C++, to ensure that the people who currently work at google with C++, could migrate to Go in a short time

📍 Go must be modern, to manage modern concept like networking, web application development and built-in concurrency

With those constraint, they built Go (not Golang), a compiled, concurrent, garbage-collected, statically typed language with a blue mascot.

## Technically :

Go offers several technical features that can be used to build software more easily. First of all, the concurrency. Go manages it natively and on the case the process doesn't rely on each other, the performance is great.

To use it in the code, nothing more easy, use go `go` keyword before a function and you'll run this function concurrently. 

This is maybe the main feature of Go, but there are a lot of other. As I said, Go is a compiled language, so a binary is generated. Regarding this binary, it's built with all dependencies, so you don't have to install anything to run the binary. It makes life easier for deployment, and of course, Go support multi operator system and procedure. Basically, you can run the binary everywhere.

In go, there is no packet manager, if you want to import a module, you just need to import the code directly from the GitHub, it makes the dependencies more clear to any developer, and a direct link to the GitHub if there is any need of documentation.

The `defer` keyword is something as well, it allows the code after the keyword to be run at the end of the function. It allows developer to manage the ending state of the function without restriction.

This list is not exhaustive but, I would like to add this one, in Go, like in C++ you can chose to send a variable to a function, natively, it will send a copy; run the function and return the result. But in Go, you can chose to send the address of variable directly with the `*`.

Does Go has alternatives ? Yes and the most popular is Rust. It's used to develop application requiring speed and efficiency. The language is designed to be memory safe, preventing you from accidentally running into memory errors that can cause your program to crash.

## Dev community

Now that I listed some feature of Go, which company is using this technologie and what Go brought to them ? 

American Express, Uber, Paypal a lot of big company use Go, but let's focus on Twitch. Twitch, it's over 30.000 users that request the platform everyday. It's about 2 million concurrent video, the chat allows 10 billions per message a day, and there is the web API handles more than 50 thousand requests per second.

Twitch has chosen Go for a large part of their highly loaded systems, for the transcode, when it's providing the best quality video Go is used, and for the chat as well. Due to the advantages of Go, including Scalability, Simplicity, multithreading system, and good concurrency, the programming language has no competitors at Twitch. On top of that engineers at Twitch created their own Remote Procedure Control(RPC) framework using tools in GoLang
