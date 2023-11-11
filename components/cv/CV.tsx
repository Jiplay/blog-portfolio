import React from 'react';
import MyImage from '../_general/Image';

import style from "@/components/cv/_style/cv.module.css"
import text from "@/styles/text.module.css"

const CV: React.FC = () => {
  const profilePicture = {
    Source:"https://media.licdn.com/dms/image/D4D03AQGH-n-0wkhM7Q/profile-displayphoto-shrink_800_800/0/1680077046046?e=2147483647&v=beta&t=L-c1zdJkbYv4-ggF_CVUKNN_HbpflL6Sfd0bu9FJTvU",
    AlternativeText:"me.png",
    Width:300,
    Height:300
  }

  return (
    <div className={style.rightcolumn}>
        <MyImage imgToDisplay={profilePicture}/>
        <a
        href="/cv/Julien.pdf"
        download="Julien.pdf"
        className={text.downloadLink}
      >
        Télécharger mon CV
      </a>
    </div>
  );
};

export default CV;
