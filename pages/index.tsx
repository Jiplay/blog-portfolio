import React from 'react';
import style from "../styles/style.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';  // Important 

import MyImage from '@/components/_general/ImageComponent';
import MyList from '@/components/List';
import ColorSchemesExample from '@/components/NavBar';

function HomePage() {
  return (
    <div className={style.container}>
      <div className={style.gradientBackground}>
        <ColorSchemesExample />
        <h1 className={style.customHeading}>Écrits d'un Globe-Trotter Créatif : Livres, Films & Plus.</h1>
        <MyImage />
      </div>
    </div>
  );
}

export default HomePage;
