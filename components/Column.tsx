import React from 'react';
import style from "../styles/style.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';


const Column: React.FC = ({  }) => {

  return (
    <div style={{ width: '30%', marginRight: "5%" }}>
    <div className={style.sideComponent}>
      <h2>Contenu du composant à côté : </h2>
      <p>About section </p>
      <p>Latest Articles</p>
      <p>Différent auteurs </p>
    </div>
  </div>
  );
}

export default Column;
