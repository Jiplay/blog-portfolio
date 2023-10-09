import React from 'react';

interface HobbiesProps {
  hobbies: string[];
}

const Hobbies: React.FC<HobbiesProps> = ({ hobbies }) => {
  return (
    <div>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hobbies;
