import React from 'react';
import MyImage from '../_general/Image';
import { UserProfileCV } from '@/backend/models/models';
import style from "@/components/cv/_style/cv.module.css"
import { Button, Divider, List, Typography } from 'antd';

interface cvProps {
  profile : UserProfileCV
}

type Projects =  {
  name: string;
  href: string;
}

const CV: React.FC<cvProps> = (profile) => {
  const data: Projects[] = [
    { name: "SafeCall", href: "articles/SafeCall" },
    { name: "Projet CPI", href: "articles/CPI" },
    { name: "Erasmus Italie", href: "articles/Erasmus" },
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
            <Typography.Text mark>[DONE]</Typography.Text> {item.name}
            <Button className={style.MoreInfoButton} href={item.href} >Voir </Button>
          </List.Item>
        </div>
      )}
    />
  </>
    </div>
  );
};

export default CV;
