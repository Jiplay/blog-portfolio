---
title: 'Gitmoji | commits with Emoji'
excerpt: "This package helped me to beautiful my commits, to normalize them, and to add emojis"
coverImage: '/postImg/Gitmoji.png'
date: '2024-04-03T15:35:07.322Z'
author:
  name: Julien Garsia
  picture: '/assets/pictures/julien.png'
ogImage:
  url: '/postImg/Gitmoji.png'
tag: '/projects/Gitmoji'
---


Commits are a very important part of the work of a software engineer; they help other developers understand what has been done on a project. It can show how the project has been done, step by step, if it's done correctly. But if it's done randomly or in an unexplicit way, it's not a gift to other developers.

I worked mostly alone until now on my project, at school or not. Committing wasn't really a question: I worked on a feature, if it's not big. I committed the feature with a message like:
ADD : <feature>, if it's a more consistent feature, I commit "safe state" in order to get back to these states if I lose myself in the code; of course, I always commit all the files.

But this will change. 

## How do I upgrade my commits ?

1. First of all, split big commits into smaller commits. One commit should focus on solving one problem or implementing something. It should be crystal clear.
2. Clarity and Readability, the message should be self-contained; it shouldn't rely on other commits to make sense.
3. Reversibility: if a commit introduces a problem, it should be easy to revert it.

These are some points that are relevant for me, but regarding the first point, it needs more explanation: how to split the commits, and what's the best strategy ?

## Different types of commits

There are some points that can help differentiate the types of commits:

1. * There are **functionals** ones, that change, like adding new features, fixing bugs, or anything, and **refactoring** ones, that focus on improving the quality of the code, without changing behavior.
2. 
3. * There are critical commits, and non-critical ones as well. If a commit contains both changes, you may want to divide this commit into 2 different commits. This allows critical commits to be reviewed more quickly.
3. 
4. * There are User-facing changes and Internal changes; it's always better to specify in which category a commit is. The clearer it is, the better :)

## The conventionnal VS Gitmoji

But now that this is more clear, there are different best practices regarding commits that are equivalent, but everyone can choose which one to follow with consistency:

Conventional commits are pretty clear, but not very visual. [Conventional](https://www.conventionalcommits.org/en/v1.0.0/#specification)

`feat(service)!: add integration with xpto`.

My new favorite; gitmoji; every emoji has a definition, which makes the commits more visual [Gitmoji](https://gitmoji.dev/) 

`✨ add integration with xpto`.

I'll integrate Gitmoji in my future projects; it'll give more clarity to the commits. You can take a look at the commits of my [PasswordManager](https://github.com/Jiplay/PasswordManager)




