import React, { useState, useEffect } from 'react';
import style from './Banner.module.css'
import Image from 'next/image';


interface ProfileBannerProps {
  filePath: string;
}

const ProfileBanner: React.FC<ProfileBannerProps> = ({ filePath }) => {

  useEffect(() => {
  }, []);

  return (
    <Image
      src={filePath}
      height={200}
      className={style.banner}
      width={1700}
      alt="Your Name"
    />
  );
};

export default ProfileBanner;
