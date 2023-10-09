import React from 'react';
import text from '@/styles/text.module.css'
import style from '@/components/cv/_style/cv.module.css'

interface ExperienceProps {
  title: string;
  company: string;
  year: string;
  description: string;
}

const Experience: React.FC<ExperienceProps> = ({ title, company, year, description }) => {
  return (
    <div className={style.margingTop}>
      <h3 className={text.subtitles}>{title}</h3>
      <p className={text.text}>{company} ({year})</p>
      <p className={text.textSmall}>{description}</p>
    </div>
  );
};

export default Experience;
