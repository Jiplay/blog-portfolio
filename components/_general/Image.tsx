import Image from 'next/image';
import { UserProfileCV } from '@/backend/models/models';
import text from "@/components/_general/_style/image.module.css"

interface ImageProps {
  profile : UserProfileCV
}

const MyImage: React.FC<ImageProps> = ({ profile }) => {
  return (
    <div >
      <Image
        src={profile.source}
        alt="Picture of <_>"
        width={300}
        height={300}
        className={text.image}
      />
      <h2 className={text.text}>Reach me on:</h2>
      <div className={text.socialIcons}>
        <a href={profile.linkedIn} target="_blank" rel="noopener noreferrer">
          <Image
            src="/img/linkedin.png"
            alt="LinkedIn"
            width={40}
            height={40}
          />
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          <Image
            src="/img/github.png"
            alt="GitHub"
            width={40}
            height={40}
          />
        </a>
        <a href={profile.instagram} target="_blank" rel="noopener noreferrer">
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
