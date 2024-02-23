---
title: 'Else'
excerpt: "These three other categories are very precise; you know before browsing the site what you’ll find.

But regarding this one, you don’t know... Neither do I at the time I’m writing it.

The only thing I know is that I love so many subjects, and want to write about them. I needed a place to host them"
coverImage: '/assets/categories/curious.png'
date: '2024-03-16T05:35:07.322Z'
author:
  name: Julien Garsia
  picture: '/assets/pictures/julien.png'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
tag: '/curious'
---


# Stage de 6 mois : Lead Developer

C'est à la fin de ma troisième année, pour validé mon bachelor que je travaillais dans cette startup en tant que Lead Developper. Concentus, c'est une petite startup à taille humaine composé que de son président en temps plein, et qui travaille avec d'autres groupes comme Total Energies sur des sujets de véhicule éléctrique.

En ce qui concerne ma mission, elle consistait à gérer une équipe de trois autres stagiaires sur la mise à jour du procédé OCPP 2.0.1 en collaboration avec Total Energies.

Sur le plan technique je n'avais aucune restriction et j'ai pu essayer différentes solution avant de trouver la plus appropriée. Concrètement le sujet était de transmettre différent message de structure complexe du programme de la borne de rechargement en C++, à un script python qui agissait directement avec l'unité centrale. 

Pour ce faire j'ai fais le choix de lié les Websockets de ZeroMQ à la sérialisation de Protocol Buffer, et ça à faciliter grandement le travail. Au lieu de définir tout les différents types de messages en C++ & en Python. Il a suffit de remplir de fichier .proto pour qu'il nous génère toutes les structures en C++ & en Python.

Ça nous a fait gagner beacoup de temps et nous avons pu rapidement finir le projet. Cette experience m'a beaucoup apporté de compétence non technique sur comment gérer une équipe, à quel point l'onboarding d'un autre développeur sur le projet est d'une importance cruciale.


