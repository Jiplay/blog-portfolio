import React from 'react';
import Article from '@/components/Articles';
import style from "../styles/style.module.css"
import article from "../styles/article.module.css"
import { Articles } from '@/backend/models/models';
import 'bootstrap/dist/css/bootstrap.min.css';  // Important 

import ColorSchemesExample from '@/components/NavBar';

const ArticlePage: React.FC = () => {
  const articles:Articles =  [
    {
      Headlines: 'Article 1',
      Text: ['Contenu de l\'article 1.'],
      ImageURL:'https://images.ctfassets.net/rc3dlxapnu6k/4L8JKctXbOXFSrEVtIVnJL/23b029b7cf6ec0165f105d0335e7aaab/USA_Texas_Sonnenuntergang_bei_Corpus_Christi.jpg?w=2300&h=1293&fl=progressive&q=50&fm=jpg',
      Author: "me"
    },
    {
      Headlines: 'Article 2',
      Text: ['Contenu de l\'article 2.'],
      ImageURL:'https://images.ctfassets.net/rc3dlxapnu6k/4L8JKctXbOXFSrEVtIVnJL/23b029b7cf6ec0165f105d0335e7aaab/USA_Texas_Sonnenuntergang_bei_Corpus_Christi.jpg?w=2300&h=1293&fl=progressive&q=50&fm=jpg',
      Author: "me"    
    },
    {
      Headlines: 'Article 3',
      Text: ['Contenu de l\'article 3.'],
      ImageURL:'https://images.ctfassets.net/rc3dlxapnu6k/4L8JKctXbOXFSrEVtIVnJL/23b029b7cf6ec0165f105d0335e7aaab/USA_Texas_Sonnenuntergang_bei_Corpus_Christi.jpg?w=2300&h=1293&fl=progressive&q=50&fm=jpg',
      Author: "me"    
    },
  ];

  return (

    <div className={style.container}>
      <div className={style.gradientBackground}>
        <ColorSchemesExample />
        <h1 className={article.headlines}>Liste des articles</h1>
        <div className="article-list">
            {articles.map((article:Articles, index:number) => (
            <Article key={index} article={article} />
            ))}
        </div>
      </div>
    </div>

  );
};

export default ArticlePage;
