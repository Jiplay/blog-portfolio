import React from 'react';
import style from './Banner.module.css'
import Image from 'next/image';


interface ProfilePictureProps {
  filePath: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ filePath }) => {

  return (
    <Image
      src={filePath}
      height={200}
      className={style.picture}
      width={200}
      alt="Your Name"
    />
  );
};

export default ProfilePicture;
