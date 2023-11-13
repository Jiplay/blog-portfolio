import React from 'react';

interface CardProps {
  title: string;
  subtitle: string;
  url: string;
  position: { height: number; width: number };
  colors: { header: string };
  skills : string
}

const Card: React.FC<CardProps> = ({ title, subtitle, url, position, colors, skills }) => {
  const cardStyle: React.CSSProperties = {
    position: 'absolute',
    marginTop: '1vh',
    marginLeft: '1vh',
    color: 'black',
    width: '50vh', // Ajustez cette ligne
  };

  const header: React.CSSProperties = {
    position: 'relative',
    top: `${position.height}px`,
    left: `${position.width}px`,
    backgroundColor: colors.header,
    padding: '10px',
    borderRadius: "30px",
    color: 'white',
  };

  return (
    <div style={header}>
      <h4>{title}</h4>
      <div style={cardStyle}>
        <p>Skills : {skills} </p>
        <p>{subtitle} </p>
        <a href={url} target="_blank" rel="noopener noreferrer" >
          En savoir plus
        </a>
      </div>
    </div>
  );
};

export default Card;
