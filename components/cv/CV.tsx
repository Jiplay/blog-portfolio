import React from 'react';
import MyImage from '../_general/Image';
import { UserProfileCV } from '@/backend/models/models';
import style from "@/components/cv/_style/cv.module.css"
import { Button, Divider, List, Typography } from 'antd';

interface cvProps {
  profile : UserProfileCV
}

const CV: React.FC<cvProps> = (profile) => {
  const data = [
    'SafeCall',
    'Projet CPI',
    'Erasmus Italie',
  ];
  
  return (
    <div className={style.rightcolumn}>
        <MyImage profile={profile.profile} />
        <a
        href="/cv/Julien.pdf"
        download="Julien.pdf"
        className={style.downloadButton}
      >
        Télécharger mon CV
      </a>
      <>
    <Divider orientation="left">Default Size</Divider>
    <List
      header={<div>Projets personnels</div>}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <div className={style.flexContainer}>
          <List.Item>
            <Typography.Text mark>[DONE]</Typography.Text> {item}
            <button className={style.MoreInfoButton}>Voir </button>
          </List.Item>
        </div>
      )}
    />
  </>
    </div>
  );
};

export default CV;
