import React from 'react';
import style from "@/components/_general/_style/TextComponent.module.css"


interface TextProps {
  content: string;
}

const TextComponent: React.FC<TextProps> = ({ content }) => {
  return (
    <div className={style.customText}>
      <p>{content}</p>
    </div>
  );
};

export default TextComponent;
