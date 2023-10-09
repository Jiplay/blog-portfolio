import React from 'react';
import text from '@/styles/text.module.css'
import style from '@/components/cv/_style/cv.module.css'

interface EducationProps {
  degree: string;
  school: string;
  year: string;
}

const Education: React.FC<EducationProps> = ({ degree, school, year }) => {
  return (
    <div className={style.margingTop}>
      <h3 className={text.text}>{degree}</h3>
      <p className={text.textSmall}>{school} ({year})</p>
    </div>
  );
};

export default Education;
