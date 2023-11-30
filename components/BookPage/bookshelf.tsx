import { SVGs } from '../../lib/constants';
import React, { useState } from 'react';

interface SVGProps {
  width: number;
  height: number;
}
const modalStyles: React.CSSProperties = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '20px',
  backgroundColor: '#fff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  zIndex: 1000,
};



const CustomSVG: React.FC<SVGProps> = ({ width, height }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleRectClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (

	<div>
    <div className="flex items-center justify-center">
      <div
        onClick={handleRectClick} 
        dangerouslySetInnerHTML={{ __html: SVGs.oxio1 }}
        className="mr-4 cursor-pointer" 
      />
      <div
        onClick={handleRectClick} 
        dangerouslySetInnerHTML={{ __html: SVGs.oxio2 }}
        className="cursor-pointer" 
      />
            <div
        onClick={handleRectClick} 
        dangerouslySetInnerHTML={{ __html: SVGs.concentus }}
        className="cursor-pointer" 
      />
    </div>
    <div className="flex items-center justify-center">
      <div
        onClick={handleRectClick} 
        dangerouslySetInnerHTML={{ __html: SVGs.mfl }}
        className="mr-4 cursor-pointer"
      />
      <div
        onClick={handleRectClick} 
        dangerouslySetInnerHTML={{ __html: SVGs.future }}
        className="cursor-pointer" 
      />
    </div>
	{modalOpen && (
	  <div style={modalStyles}>
		<h2>Modale</h2>
		<p>Contenu de la modale...</p>
		<button onClick={handleCloseModal}>Fermer</button>
	  </div>
	)}
  </div>
  )
};

export default CustomSVG;
