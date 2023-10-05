import React, { useState } from 'react';
import "./GenderSelection.css"

const GenderSelection: React.FC = () => {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  const handleGenderClick = (gender: string) => {
    setSelectedGender(gender);
  };

  return (
    <div>
      <button
        onClick={() => handleGenderClick('Homme')}
        className={selectedGender === 'Homme' ? 'selected' : ''}
      >
        Homme
      </button>
      <button
        onClick={() => handleGenderClick('Femme')}
        className={selectedGender === 'Femme' ? 'selected' : ''}
      >
        Femme
      </button>
    </div>
  );
};

export default GenderSelection;
