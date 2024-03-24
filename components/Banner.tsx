import Image from 'next/image';
import { UserProfileCV } from '../interfaces/profile';

interface ImageProps {
    imgSource : string
    redirect: string
}

const Banner: React.FC<ImageProps> = ({ imgSource, redirect }) => {
  return (
      <div>
        <a href={redirect} target="_blank" rel="noopener noreferrer">
          <Image
            src={imgSource}
            alt="LinkedIn"
            width={1300}
            height={250}
          />
        </a>
    </div>
  );
};

export default Banner;