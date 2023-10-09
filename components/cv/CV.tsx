import React from 'react';
import Experience from './Experience';
import Education from './Education';
import Hobbies from './Hobbies';
import MyImage from '../_general/Image';

import { educations, information } from '@/static/data';
import style from "@/components/cv/_style/cv.module.css"
import text from "@/styles/text.module.css"

const CV: React.FC = () => {
  const profilePicture = {
    Source:"https://media.licdn.com/dms/image/D4D03AQGH-n-0wkhM7Q/profile-displayphoto-shrink_800_800/0/1680077046046?e=2147483647&v=beta&t=L-c1zdJkbYv4-ggF_CVUKNN_HbpflL6Sfd0bu9FJTvU",
    AlternativeText:"me.png",
    Width:500,
    Height:500
  }

  const experiences = [
    {
      title: 'Développeur Web',
      company: 'ABC Inc.',
      year: '2019-2021',
      description: 'Travaux de développement web pour divers clients.'
    },
  ];

  // const educations = [
  //   {
  //     degree: 'Baccalauréat en Informatique',
  //     school: 'Université XYZ',
  //     year: '2015-2019'
  //   },
  // ];

  const hobbies = ['Voyager', 'Photographie', 'Lecture', 'Cuisine'];

  return (
    <div>
      <h1 className={text.headlines}>À propos de moi :</h1>
      <div className={style.leftImage}>
        <MyImage imgToDisplay={profilePicture}/>
      </div>
      <h2 className={text.text}>{information.accroches[1]}</h2>
      <section>
        <h2 className={text.subtitles}>Expérience Professionnelle</h2>
        {experiences.map((experience, index) => (
          <Experience key={index} {...experience} />
        ))}
      </section>
      <section>
        <h2 className={text.subtitles}>Éducation</h2>
        {educations.map((education, index) => (
          <Education key={index} {...education} />
        ))}
      </section>
      <section>
      <h2 className={text.subtitles}>Hobbies</h2>
        <Hobbies hobbies={hobbies} />
      </section>
    </div>
  );
};

export default CV;
