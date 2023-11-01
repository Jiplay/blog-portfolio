import React from 'react';
import CV from '@/components/cv/CV';
import style from "../styles/style.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';  // Important 

import ColorSchemesExample from '@/components/NavBar';

function JulienPage() {
  return (
    <div className={style.container}>
      <div className={style.gradientBackground}>
        <ColorSchemesExample />
        <CV />
      </div>
    </div>
  );
}

export default JulienPage;