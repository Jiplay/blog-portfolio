import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { SVGs, ProModalContents } from '../../lib/constants';

const CustomSVG: React.FC = ({}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDataIterator, setModalDataIterator] = useState<0 | 1 | 2 | 3 | 4>();

  const handleRectClick = (param: 0 | 1 | 2 | 3 | 4) => () => {
    setModalDataIterator(param);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <div
          onClick={handleRectClick(0)}
          dangerouslySetInnerHTML={{ __html: SVGs.oxio1 }}
          className="mr-4 cursor-pointer"
        />
        <div
          onClick={handleRectClick(1)}
          dangerouslySetInnerHTML={{ __html: SVGs.oxio2 }}
          className="cursor-pointer"
        />
        <div
          onClick={handleRectClick(2)}
          dangerouslySetInnerHTML={{ __html: SVGs.concentus }}
          className="cursor-pointer"
        />
      </div>
      <div className="flex items-center justify-center">
        <div
          onClick={handleRectClick(3)}
          dangerouslySetInnerHTML={{ __html: SVGs.mfl }}
          className="mr-4 cursor-pointer"
        />
        <div
          onClick={handleRectClick(4)}
          dangerouslySetInnerHTML={{ __html: SVGs.future }}
          className="cursor-pointer"
        />
      </div>
      <Modal title="citrouille" open={modalOpen} onOk={handleCloseModal} onCancel={handleCloseModal}>
        <p>TEST</p>
      </Modal>
    </div>
  );
};

export default CustomSVG;
