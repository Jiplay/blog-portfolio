import React from "react";
import style from './Profile.module.css'

interface ProfileProps {
    username: string;
}

const ProfileText: React.FC<ProfileProps> = ({ username }) => {
    return (
        <div className={style.title}>
          <h1>{username}</h1>
          <p>{"Bloggeur / Developper / photographe "}</p>
        </div>
      );
};

export default ProfileText;