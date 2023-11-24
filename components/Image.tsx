import Image from 'next/image';
import { UserProfileCV } from '../interfaces/profile';

interface ImageProps {
  profile : UserProfileCV
}

const MyImage: React.FC<ImageProps> = ({ profile }) => {
  return (
    <div >
      <Image
        src={profile.source}
        alt="Picture of me "
        width={250}
        height={250}
        className="rounded-full mb-8"
      />
      <h2 className="mt-5 mb-5 font-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Reach me on:</h2>
      <div className="flex justify-around mt-5 mb-5">
        <a href={profile.linkedIn} target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/icons/linkedin.png"
            alt="LinkedIn"
            width={40}
            height={40}
          />
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/icons/github.png"
            alt="GitHub"
            width={40}
            height={40}
          />
        </a>
        <a href={profile.instagram} target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/icons/instagram.png"
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