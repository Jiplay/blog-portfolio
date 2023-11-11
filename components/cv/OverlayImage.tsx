import React, { useEffect, useRef } from 'react';
import Card from './Card';
import ReactDOM from 'react-dom';

interface ImageTextOverlayProps {
  imagePath: string;
}

interface CardData {
  title: string;
  subtitle: string;
  url: string;
  position: { top: number; left: number };
  colors: { header: string; body: string };
}

const ImageTextOverlay: React.FC<ImageTextOverlayProps> = ({ imagePath }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const cardDataList: CardData[] = [
    {
      title: 'OXIO - Stage 6 mois',
      subtitle: "J'ai beaucoup appris aux cotés de l'équipe d'OXIO. Comme les méthodes agiles de développement, le Golang, différentes base de données comme MySQL, postgreSQL et MongoDB. J'ai aussi beaucoup appris sur l'architecture d'un projet en microservices.",
      url: 'https://example.com/card1',
      position: { top: 0, left: 200 },
      colors:{header: "#FFB932", body: "white"}, 
    },
    {
      title: 'OXIO - Software Engineer 6 mois',
      subtitle: "Après mon redoublement, j'ai retravaillé avec OXIO en dehors de mes études en CDI. J'ai travaillé sur un script qui a permis d'estimer le pourcentage de données impactés par une erreur. Skills : Python, Google SpreadSheet, API",
      url: 'https://example.com/card2',
      position: { top: 90, left: -60 },
      colors:{header: "#FFB16F", body: "white"},
    },
    {
        title: 'Concentus - Lead Dev. 6 mois',
        subtitle: "Mon objectif lors de cette experience était de gérer une équipe et ensemble développer un module en collaboration avec Total Energies sur le sujet des bornes de rechargement de véhicule éléctrique. Skills : Gérer et travailler en Équipe, C++, Python, Protobuf, docker",
        url: 'https://example.com/card1',
        position: { top: 190, left: 200 },
        colors:{header: "#F5BAA5", body: "white"}, 
    },
    {
        title: 'MFL - Fullstack 6 mois',
        subtitle: "Durant cette periode, j'étais en charge de monter un projet pour générer des milliers images grâces à des services d'IA. J'ai créer un site web en Next.JS avec Typescript pour permettre la génération d'image en générant des paramètres différents à chaque fois. Skills : Typescript, Next.js, MongoDB",
        url: 'https://example.com/card2',
        position: { top: 290, left: -60 },
        colors:{header: "#EB9ED1", body: "white"},
    },
  ];

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const img = new Image();
      img.onload = () => {
        container.style.position = 'relative';
        container.style.width = `${img.width}px`;
        container.style.height = `${img.height}px`;

        const imageDiv = document.createElement('div');
        imageDiv.style.position = 'absolute';
        imageDiv.style.top = '0';
        imageDiv.style.left = '0';
        imageDiv.style.width = '100%';
        imageDiv.style.height = '100%';
        imageDiv.style.backgroundImage = `url(${imagePath})`;
        imageDiv.style.backgroundSize = 'cover';

        container.appendChild(imageDiv);

        // Ajouter des composants Card en boucle
        cardDataList.forEach((cardData, index) => {
          const { title, subtitle, url, position, colors } = cardData;
          const cardKey = `card_${index}`;
          const cardComponent = <Card key={cardKey} title={title} subtitle={subtitle} url={url} position={position} colors={colors} />;
          const cardContainer = document.createElement('div');
          cardContainer.style.position = 'absolute';
          cardContainer.style.top = `${position.top}px`;
          cardContainer.style.left = `${position.left}px`;

          container.appendChild(cardContainer);

          ReactDOM.render(cardComponent, cardContainer);
        });
      };

      img.src = imagePath;
    }
  }, [imagePath]);

  return <div ref={containerRef} />;
};

export default ImageTextOverlay;
