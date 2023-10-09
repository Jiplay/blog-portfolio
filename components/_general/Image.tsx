import React from 'react';
import Image from 'next/image';
import { ImageToDisplay } from '@/backend/models/models';


interface ImageProps {
    imgToDisplay:ImageToDisplay
}

const MyImage: React.FC<ImageProps> = ({ imgToDisplay }) => {
  return (
    <div>
      <Image
        src={imgToDisplay.Source}
        alt={imgToDisplay.AlternativeText}
        width={imgToDisplay.Width}
        height={imgToDisplay.Height}
      />
    </div>
  );
};

export default MyImage;
