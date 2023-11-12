import React from 'react';
// import Article from '@/components/Articles';
import style from "../styles/style.module.css"
import article from "../styles/article.module.css"
import { Article } from '@/backend/models/models';
import 'bootstrap/dist/css/bootstrap.min.css';  // Important 
import Image from 'next/image';

import ColorSchemesExample from '@/components/NavBar';

const ArticlePage: React.FC = () => {
  // const articles:Article =  [
  //   {
  //     Headlines: 'Article 1',
  //     Text: ['Contenu de l\'article 1.'],
  //     ImageURL:'https://images.ctfassets.net/rc3dlxapnu6k/4L8JKctXbOXFSrEVtIVnJL/23b029b7cf6ec0165f105d0335e7aaab/USA_Texas_Sonnenuntergang_bei_Corpus_Christi.jpg?w=2300&h=1293&fl=progressive&q=50&fm=jpg',
  //     Author: "me"
  //   },
  //   {
  //     Headlines: 'Article 2',
  //     Text: ['Contenu de l\'article 2.'],
  //     ImageURL:'https://images.ctfassets.net/rc3dlxapnu6k/4L8JKctXbOXFSrEVtIVnJL/23b029b7cf6ec0165f105d0335e7aaab/USA_Texas_Sonnenuntergang_bei_Corpus_Christi.jpg?w=2300&h=1293&fl=progressive&q=50&fm=jpg',
  //     Author: "me"    
  //   },
  //   {
  //     Headlines: 'Article 3',
  //     Text: ['Contenu de l\'article 3.'],
  //     ImageURL:'https://images.ctfassets.net/rc3dlxapnu6k/4L8JKctXbOXFSrEVtIVnJL/23b029b7cf6ec0165f105d0335e7aaab/USA_Texas_Sonnenuntergang_bei_Corpus_Christi.jpg?w=2300&h=1293&fl=progressive&q=50&fm=jpg',
  //     Author: "me"    
  //   },
  //   {
  //     Headlines: 'Article 3',
  //     Text: ['Contenu de l\'article 3.'],
  //     ImageURL:'https://images.ctfassets.net/rc3dlxapnu6k/4L8JKctXbOXFSrEVtIVnJL/23b029b7cf6ec0165f105d0335e7aaab/USA_Texas_Sonnenuntergang_bei_Corpus_Christi.jpg?w=2300&h=1293&fl=progressive&q=50&fm=jpg',
  //     Author: "me"    
  //   },
  // ];

  return (

    <div className={style.container}>
      <div className={style.gradientBackground}>
        <ColorSchemesExample />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', borderRadius: '50%' }}>
      <div style={{ position: 'relative', borderRadius: '50%' }}>
        <Image
          src="/img/banner.jpg"
          alt="Your Name"
          width={572}
          height={444}
          layout="responsive"
          objectFit="cover"
          style={{ borderRadius: '50%', marginBottom: '3%', marginTop: '3%' }}
        />
      </div>
    </div>
        {/* <div className={article.articleGrid}>
            {articles.map((article:Article, index:number) => (
            <Article key={index} article={article} />
            ))}
        </div> */}
      </div>
    </div>

  );
};

export default ArticlePage;
