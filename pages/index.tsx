import React from 'react';
import style from "../styles/style.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';  // Important 

import MyImage from '@/components/_general/ImageComponent';
import ColorSchemesExample from '@/components/NavBar';
import TextComponent from '@/components/_general/TextComponent';
import { precept, small_presentation, end_of_presentation } from '@/static/data';

function HomePage() {
  return (
    <div className={style.container}>
      <div className={style.gradientBackground}>
        <ColorSchemesExample />
        <h1 className={style.customHeading}>Écrits d'un Globe-Trotter Créatif : Livres, Films & Plus.</h1>
        <MyImage />
        <TextComponent content={precept} />
        <TextComponent content={small_presentation} />
        <TextComponent content={end_of_presentation} />
      </div>
    </div>
  );
}

export default HomePage;
