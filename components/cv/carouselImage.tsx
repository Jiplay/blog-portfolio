import React from 'react';
import style from '@/components/cv/_style/carousel.module.css'

interface ExampleCarouselImageProps {
  text: string;
}

const ExampleCarouselImage: React.FC<ExampleCarouselImageProps> = ({ text }) => {
  return (
    <img
      className={style.image}
      src={text} // Remplacez par la source de votre image
      alt={text}
    />
  );
};

export default ExampleCarouselImage;
