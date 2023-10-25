import React, { useState } from 'react';
import style from './Profile.module.css'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

interface ProfileProps {
    username: string;
}

const ProfileText: React.FC<ProfileProps> = ({ username }) => {
  const [occupation, setOccupation] = useState<string>('');

  const handleButtonClick = (value: string) => {
    setOccupation(value);
  };

  return (
      <div>
        <div className={style.title}>
          <div className={style.radio}>
            <ButtonGroup aria-label="Basic example">
              <Button variant="custom-button" onClick={() => handleButtonClick("Bloggeur")} className={style.customButton}>Bloggeur</Button>
              <Button variant="custom-button" onClick={() => handleButtonClick("Developpeur")} className={style.customButton}>Developpeur</Button>
              <Button variant="custom-button" onClick={() => handleButtonClick("Photographe")} className={style.customButton}>Photographe</Button>
            </ButtonGroup>
          </div>
          <h1>{username} est {occupation}</h1>
        </div>
          <p>{"Description catchy de fou "}</p>
          </div>
      );
};

export default ProfileText;