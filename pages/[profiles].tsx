import React from 'react';
import style from "../styles/style.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';  // Important 
import UserProfile from '@/components/profile/Profile';

import ColorSchemesExample from '@/components/NavBar';

function JulienPage() {
  return (
    <div className={style.container}>
      <div className={style.profileBackground}>
        <ColorSchemesExample />
        <UserProfile username='Julien'/>
      </div>
    </div>
  );
}

export default JulienPage;