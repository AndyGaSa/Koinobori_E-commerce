/* eslint-disable react/prop-types */
import React from 'react';
import './Heroes.css';
import '../Styles.css';
import '../constants.js/HeroesConst.js';

export default function Heroes({ heroes }) {
  return (
    <>
      <h2>My Heroes</h2>

      <ul>
        {heroes.map((hero) => <li>{hero.name}</li>)}
      </ul>
    </>
  );
}
