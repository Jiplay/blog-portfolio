import React from 'react';
import style from "../styles/style.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';  // Important 

import MyImage from '@/components/_general/ImageComponent';
import ColorSchemesExample from '@/components/NavBar';
import TextComponent from '@/components/_general/TextComponent';
import { french } from '@/static/data';

function HomePage() {
  return (
    <div className={style.container}>
      <div className={style.gradientBackground}>
        <ColorSchemesExample />
        <h1 className={style.customHeading}> {french.title}</h1>
        <MyImage />
        <TextComponent content={french.precept[0]} />
        <TextComponent content={french.small_presentation[0]} />
        <TextComponent content={french.another_paragraph[0]} />
        <TextComponent content={french.end_of_presentation[0]} />
      </div>
    </div>
  );
}

export default HomePage;
