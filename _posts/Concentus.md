---
title: 'Dynamic Routing and Static Generation'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2020-03-16T05:35:07.322Z'
author:
  name: JJ Kasper
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
---


# Stage de 6 mois : Lead Developer

C'est à la fin de ma troisième année, pour validé mon bachelor que je travaillais dans cette startup en tant que Lead Developper. Concentus, c'est une petite startup à taille humaine composé que de son président en temps plein, et qui travaille avec d'autres groupes comme Total Energies sur des sujets de véhicule éléctrique.

En ce qui concerne ma mission, elle consistait à gérer une équipe de trois autres stagiaires sur la mise à jour du procédé OCPP 2.0.1 en collaboration avec Total Energies.

Sur le plan technique je n'avais aucune restriction et j'ai pu essayer différentes solution avant de trouver la plus appropriée. Concrètement le sujet était de transmettre différent message de structure complexe du programme de la borne de rechargement en C++, à un script python qui agissait directement avec l'unité centrale. 

Pour ce faire j'ai fais le choix de lié les Websockets de ZeroMQ à la sérialisation de Protocol Buffer, et ça à faciliter grandement le travail. Au lieu de définir tout les différents types de messages en C++ & en Python. Il a suffit de remplir de fichier .proto pour qu'il nous génère toutes les structures en C++ & en Python.

Ça nous a fait gagner beacoup de temps et nous avons pu rapidement finir le projet. Cette experience m'a beaucoup apporté de compétence non technique sur comment gérer une équipe, à quel point l'onboarding d'un autre développeur sur le projet est d'une importance cruciale.


