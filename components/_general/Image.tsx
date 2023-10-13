import Image from 'next/image';
import { ImageToDisplay } from '@/backend/models/models';
import text from "@/components/_general/_style/image.module.css"

interface ImageProps {
  imgToDisplay: ImageToDisplay;
}

const MyImage: React.FC<ImageProps> = ({ imgToDisplay }) => {
  return (
    <div >
      <Image
        src={imgToDisplay.Source}
        alt={imgToDisplay.AlternativeText}
        width={imgToDisplay.Width}
        height={imgToDisplay.Height}
      />
      <h2 className={text.text}>Reach me on:</h2>
      <div className={text.socialIcons}>
        <a href="https://www.linkedin.com/in/julien-garsia/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/img/linkedin.png"
            alt="LinkedIn"
            width={40}
            height={40}
          />
        </a>
        <a href="https://github.com/Jiplay" target="_blank" rel="noopener noreferrer">
          <Image
            src="/img/github.png"
            alt="GitHub"
            width={40}
            height={40}
          />
        </a>
        <a href="https://www.instagram.com/jul_italiano/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/img/instagram.png"
            alt="Instagram"
            width={40}
            height={40}
          />
        </a>
      </div>
    </div>
  );
};

export default MyImage;
