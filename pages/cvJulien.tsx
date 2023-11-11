import React, {useEffect, useState} from 'react';
import CV from '@/components/cv/CV';
import style from "../styles/style.module.css"
import ImageTextOverlay from '@/components/cv/OverlayImage';
import 'bootstrap/dist/css/bootstrap.min.css';  // Important 

import ColorSchemesExample from '@/components/NavBar';

function JulienPage() {

  return (
    <div className={style.container}>
      <div className={style.gradientBackground}>
        <ColorSchemesExample />
        <div style={{display: 'flex', marginTop: '3vh' }}>
        <main style={{ width: '70%', justifyContent: 'center', alignItems: 'center', maxWidth: '70%', marginLeft: '3%', paddingLeft: "20vh"}}>
        <ImageTextOverlay imagePath='/cv/test.png' overlayText='99 ballons de bodruche'/>
        </main>
        <CV />
        </div>
      </div>
    </div>
  );
}

export default JulienPage;