import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import style from './_style/ButtonGroupLanguage.module.css'

interface LanguagesButtonProps {
  onLanguageChange: (languageValue: number) => void;
}

const LanguagesButton: React.FC<LanguagesButtonProps> = ({ onLanguageChange }) => {
  const handleButtonClick = (buttonValue: number) => {
    onLanguageChange(buttonValue);
  };

  return (
    <ButtonGroup aria-label="Basic example" className={style.groupButton}>
      <div className={style.english}>
        <Button variant="custom" onClick={() => handleButtonClick(1)}>English</Button>
      </div>
      <div className={style.french}>
        <Button variant="custom" onClick={() => handleButtonClick(0)}>Français</Button>
      </div>
      <div className={style.italian}>
        <Button variant="custom" onClick={() => handleButtonClick(2)}>Italiano</Button>
      </div>
    </ButtonGroup>
  );
};

export default LanguagesButton;
