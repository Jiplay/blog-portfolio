import React from 'react';
import "@/components/_general/_style/Button.css"

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="custom-button"
    >
      {text}
    </button>
  );
};

export default Button;
