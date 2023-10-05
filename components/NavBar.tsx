import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import './NavBar.css'

const NavigationBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Image src="/../public/logo.jpg" alt="Mon Logo" width={200} height={200} className="logo-image"/>
        <p className="hello-world">Player Real Project</p>
        <ul className="nav-links">
          <li className="nav-link">
          <Link href="/" passHref className="nav-item">
               Accueil
            </Link>
          </li>
          <li className="nav-link">
          <Link href="/" passHref className="nav-item">
               Profil
            </Link>
          </li>
          <li className="nav-link">
          <Link href="/arbres" passHref className="nav-item">
               Mes Arbres
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
