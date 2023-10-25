import React, { useState, useEffect } from 'react';
import style from './Profile.module.css'
import ProfileBanner from './ProfileBanner';
import ProfilePicture from './ProfilePicture';
import ProfileText from './ProfileText';

interface UserProfileProps {
  username: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ username }) => {
  const [title, setTitle] = useState("");
  
  useEffect(() => {
    setTitle("Salut a tous")
  }, []);

  return (
    <div className={style.center}>
      <div className={style.container}>
        <div>
          <ProfileBanner filePath='/profile/banner/Julien.png' />
          <ProfilePicture filePath='/profile/profilePicture/ProfilePictureJulien.png'/>
          <ProfileText username={username}/>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
