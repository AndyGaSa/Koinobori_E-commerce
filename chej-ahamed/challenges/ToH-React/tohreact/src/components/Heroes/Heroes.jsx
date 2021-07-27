import React from 'react';
import heroes from '../../constHeroes';

import './Heroes.css';
import '../Styles.css';

export default function Heroes() {
  return (
    <>

      <h2>My Heroes</h2>
      <ul>
        {heroes.map((heroe) => <li key={heroe.superhero}>{heroe.superhero}</li>)}

      </ul>
    </>
  );
}
