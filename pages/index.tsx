import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import style from "../styles/style.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import LanguagesButton from '@/components/_general/ButtonGroupLanguage';
import MyImage from '@/components/_general/ImageComponent';
import ColorSchemesExample from '@/components/NavBar';
import TextComponent from '@/components/_general/TextComponent';

import { indexText } from '@/static/data';

function HomePage() {
    const [selectedLanguage, setSelectedLanguage] = useState<number>(0);
  
    const handleLanguageChange = (languageValue: number) => {
      setSelectedLanguage(languageValue);
    };
  
  return (
    <div className={style.container}>
      <div className={style.gradientBackground}>
        <ColorSchemesExample />
        <h1 className={style.customHeading}> {indexText.title}</h1>
        <LanguagesButton onLanguageChange={handleLanguageChange}/>
        <div>
          <MyImage />
          <TextComponent content={indexText.precept[selectedLanguage]} />
          <TextComponent content={indexText.small_presentation[selectedLanguage]} />
          <TextComponent content={indexText.another_paragraph[selectedLanguage]} />
          <TextComponent content={indexText.end_of_presentation[selectedLanguage]} />
        </div>
        <div className={style.centerButton}>
        <Button variant="custom" className={style.colorButton} size="lg" href="/main"active>
          Main Page
        </Button>{''}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
