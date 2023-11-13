import React, { useEffect, useRef } from 'react';
import Card from './Card';
import { CardData } from '@/backend/models/models';
import ReactDOM from 'react-dom';

interface ImageTextOverlayProps {
  imagePath: string;
}

const ImageTextOverlay: React.FC<ImageTextOverlayProps> = ({ imagePath }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const cardDataList: CardData[] = [
    {
      title: 'OXIO - Backend',
      subtitle: "MongoDB, MySQL, startup, microservices, Jira",
      url: '/articles/OXIO0',
      position: { height: 0, width: 20 },
      colors:{header: "#FFB932", body: "white"}, 
      skills: "Golang, Docker, PostgreSQL, Méthodes Agiles"
    },
    {//Après mon redoublement, j'ai retravaillé avec OXIO en dehors de mes études en CDI. J'ai travaillé sur un script qui a permis d'estimer le pourcentage de données impactés par une erreur. Skills : Python, Google SpreadSheet, API"
      title: 'OXIO - Software Engineer 6 mois',
      subtitle: "Télétravail, autonomie",
      url: '/articles/OXIO1',
      position: { height: 20, width: 0 },
      colors:{header: "#FFB16F", body: "white"},
      skills: "Golang, Python, PostgreSQL, Google Spreadsheet API"
    },
    {//Mon objectif lors de cette experience était de gérer une équipe et ensemble développer un module en collaboration avec Total Energies sur le sujet des bornes de rechargement de véhicule éléctrique. Skills : Gérer et travailler en Équipe, C++, Python, Protobuf, docker
        title: 'Concentus - Lead Dev. 6 mois',
        subtitle: "Documentation, Onboarding",
        url: '/articles/Concentus',
        position: { height: 40, width: 5 },
        colors:{header: "#F5BAA5", body: "white"}, 
        skills: "Gestion d'équipe, C++, Python, Protobuf, ZMQ"
    },
    {// Durant cette periode, j'étais en charge de monter un projet pour générer des milliers images grâces à des services d'IA. J'ai créer un site web en Next.JS avec Typescript pour permettre la génération d'image en générant des paramètres différents à chaque fois. Skills : Typescript, Next.js, MongoDB
        title: 'MFL - Fullstack 6 mois',
        subtitle: "Vercel, Notion, IA, Web3",
        url: '/articles/MFL',
        position: { height: 60, width: 10 },
        colors:{header: "#EB9ED1", body: "white"},
        skills: "Stable-diffusion, Typescript, mongoDB"
    },
  ];

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const img = new Image();
      img.src = imagePath;
      img.onload = () => {
        container.style.position = 'absolute';
        container.style.width = '100%';
        container.style.minWidth = '100%';
        container.style.height = '100%';
        container.style.overflow = 'hidden';
        container.style.top = '0';
        container.style.left = '0';
    
        const imageDiv = document.createElement('div');
        imageDiv.style.width = '100%';
        imageDiv.style.height = '100vh';
        imageDiv.style.overflow = 'hidden';
    
        const imgElement = document.createElement('img');
        imgElement.src = imagePath;
        imgElement.style.width = '100%';
        imgElement.style.height = '100vh';
        imgElement.style.objectFit = 'fill';
    
        imageDiv.appendChild(imgElement);
        container.appendChild(imageDiv);

        container.appendChild(imageDiv);

        // Ajouter des composants Card en boucle
        cardDataList.forEach((cardData, index) => {
          const { title, subtitle, url, position, colors, skills } = cardData;
          const cardKey = `card_${index}`;
          const cardComponent = <Card key={cardKey} title={title} subtitle={subtitle} url={url} position={position} colors={colors} skills={skills} />;
          const cardContainer = document.createElement('div');
          cardContainer.style.position = 'absolute';
          if (index % 2 !== 0) {
            cardContainer.style.top = `${position.height}%`;
            cardContainer.style.left = `${position.width}%`;
          } else  {
            cardContainer.style.top = `${position.height}%`;
            cardContainer.style.right = `${position.width}%`;
          }

          container.appendChild(cardContainer);

          // ReactDOM.render(cardComponent, cardContainer);
          ReactDOM.render(cardComponent, cardContainer);
        });
      };

      img.src = imagePath;
    }
  }, [imagePath]);

  return <div ref={containerRef} />;
};

export default ImageTextOverlay;
