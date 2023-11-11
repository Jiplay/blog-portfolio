import React, { useState } from 'react';
import style from "../styles/style.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Article from '@/components/Articles';
import { Article as Articles } from '@/backend/models/models';

import ColorSchemesExample from '@/components/NavBar';


function HomePage() {
  // const articles: Articles[] = [
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
  // ];
  
  return (
      <div className={style.gradientBackground}>
        <ColorSchemesExample />
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', borderRadius: '50%' }}>
      <div style={{ position: 'relative', borderRadius: '50%' }}>
        <Image
          src="/img/banner.jpg"
          alt="Your Name"
          width={300}
          height={300}
          layout="fixed"
          objectFit="cover"
          style={{ borderRadius: '50%', marginBottom: '3%', marginTop: '3%'}}
        />
      </div>
    </div>
    <div style={{display: 'flex' }}>
      <main style={{ width: '70%', justifyContent: 'center', alignItems: 'center'}}>
        <h2>TODO Theme sort</h2>
        {/* {articles.map((article:Articles, index:number) => (
          <Article key={index} article={article} />
        ))} */}
        </main>
        <div style={{ width: '30%', marginRight: "5%" }}>
          <div className={style.sideComponent}>
            <h2>Contenu du composant à côté : </h2>
            <p>About section </p>
            <p>Latest Articles</p>
            <p>Différent auteurs </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
