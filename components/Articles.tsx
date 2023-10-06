import React from 'react';
import style from '@/components/_style/ArticleComponent.module.css'
import { Articles } from '@/backend/models/models';


interface ArticleProps {
  article: Articles
}

const Article: React.FC<ArticleProps> = ({ article }) => {
  return (
    <div className={style.container}>
      <div className={style.image}>
        <img src={article.ImageURL} alt={article.Headlines}  className={style.imageStyle}/>
      </div>
      <div className={style.content}>
        <h2 className={style.title}>{article.Headlines}</h2>
        <p className={style.paragraph}>{article.Text}</p>
        <p className={style.paragraph}>{article.Author}</p>
      </div>
    </div>
  );
};

export default Article;
