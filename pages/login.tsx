import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import style from "../styles/style.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from '@/components/_general/Login';

import ColorSchemesExample from '@/components/NavBar';

function HomePage() {
    const [selectedLanguage, setSelectedLanguage] = useState<number>(0);
  
    const handleLanguageChange = (languageValue: number) => {
      setSelectedLanguage(languageValue);
    };
  
  return (
    <div className={style.container}>
        <ColorSchemesExample />
    <div className={style.gradientBackground}>
        <div className={style.flexContainer}>
        <div className={style.center}>
            <Login />
        </div>
        <img src="cv/banner.jpg" alt="Votre image" className={style.image} />
        </div>
    </div>
    </div>
  );
}

export default HomePage;
