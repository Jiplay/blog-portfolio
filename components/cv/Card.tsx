import React from 'react';

interface CardProps {
  title: string;
  subtitle: string;
  url: string;
  position: { top: number; left: number };
  colors: { header: string };
}

const Card: React.FC<CardProps> = ({ title, subtitle, url, position, colors }) => {
  const cardStyle: React.CSSProperties = {
    position: 'absolute',
    marginTop: '1vh',
    marginLeft: '1vh',
    color: 'black',
    width: '50vh', // Ajustez cette ligne
  };

  const header: React.CSSProperties = {
    position: 'relative',
    top: `${position.top}px`,
    left: `${position.left}px`,
    backgroundColor: colors.header,
    padding: '10px',
    borderRadius: "30px",
    color: 'white',
  };

  return (
    <div style={header}>
      <h3>{title}</h3>
      <div style={cardStyle}>
        <p>{subtitle}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" >
          View more
        </a>
      </div>
    </div>
  );
};

export default Card;
