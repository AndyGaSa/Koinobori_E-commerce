/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router-dom';

import './detail.css';

function Detail({ heroes }) {
  const { heroId } = useParams();
  const hero = heroes.find(({ id }) => id === +heroId);

  return (
    <main>
      <h2>
        {hero.name}
        {' '}
        Details!
      </h2>
      <p>
        id:
        {' '}
        <span>{hero.id}</span>
      </p>
      <div>
        <label htmlFor="hero-name">
          Hero name:
          <input id="hero-name" placeholder="Hero name" value={hero.name} />
        </label>
      </div>
      <button type="button">go back</button>
      <button type="button">save</button>
    </main>
  );
}

export default Detail;
