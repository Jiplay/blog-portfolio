import React from 'react';
import "../styles/style.css"
import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/_general/Button'

function HomePage() {
  return (
    <div className="home-page">
      <header>
        <h1>GenTree</h1>
      </header>
      <main>
      <section className="hero">            
          <Image src='/logo.jpg' alt="Mon Logo" width={300} height={300}/>
          <h2>Bienvenue sur notre site web moderne</h2>
          <p>Construisez votre arbre généalogique GRATUITEMENT dès maintenant !</p>
          <Button text="Commencer Maintenant" onClick={() => console.log("Button clicked!")} />
        </section>
        <section className="features">
          <div className="feature">
            <h3>Faire son 1er arbre</h3>
            <p>Description de la première fonctionnalité.</p>
            <div>
            <Link href="/create">
              <Button text="Créez" onClick={() => console.log("Button clicked!")} />
            </Link>
            </div>

          </div>
          <div className="feature">
            <h3>Visualiser ses arbres</h3>
            <p>Description de la deuxième fonctionnalité.</p>
            <Button text="Perfectionnez" onClick={() => console.log("Button clicked!")} />
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 GenTree Project Realised in Next.ts </p>
      </footer>
    </div>
  );
}

export default HomePage;
