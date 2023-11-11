import React from 'react';
import CV from '@/components/cv/CV';
import style from "../styles/style.module.css"
import ImageTextOverlay from '@/components/cv/OverlayImage';
import 'bootstrap/dist/css/bootstrap.min.css';  // Important 
import { UserProfileCV } from '@/backend/models/models';

import ColorSchemesExample from '@/components/NavBar';

function JulienPage() {
  const profilePicture: UserProfileCV = {
    source:"https://media.licdn.com/dms/image/D4D03AQGH-n-0wkhM7Q/profile-displayphoto-shrink_800_800/0/1680077046046?e=2147483647&v=beta&t=L-c1zdJkbYv4-ggF_CVUKNN_HbpflL6Sfd0bu9FJTvU",
    linkedIn:"https://www.linkedin.com/in/julien-garsia/",
    github:"https://github.com/Jiplay",
    instagram:"https://www.instagram.com/jul_italiano/",
  }

  return (
    <div className={style.container}>
      <div className={style.gradientBackground}>
        <ColorSchemesExample />
        <div style={{display: 'flex', marginTop: '3vh' }}>
        <main style={{ width: '70%', justifyContent: 'center', alignItems: 'center', maxWidth: '70%', marginLeft: '3%', paddingLeft: "20vh"}}>
        <ImageTextOverlay imagePath='/cv/test.png'/>
        </main>
        <CV profile={profilePicture}/>
        </div>
      </div>
    </div>
  );
}

export default JulienPage;