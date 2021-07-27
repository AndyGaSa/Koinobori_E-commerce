/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import './detail.css';

function Detail({ heroes, setHeroes }) {
  const { heroId } = useParams();
  const hero = heroes.find(({ id }) => id === +heroId);

  const [updatedHeroName, setUpdatedHeroName] = useState(hero.name);
  const updateNameInput = useRef();

  function updateHero(heroName) {
    const newProperties = { name: heroName.trim() };
    const updatedHeroes = heroes
      .map((oneHero) => (oneHero.id === hero.id ? { ...oneHero, ...newProperties } : oneHero));
    setHeroes(updatedHeroes);
  }

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
          <input ref={updateNameInput} id="hero-name" placeholder="Hero name" defaultValue={hero.name} onChange={() => setUpdatedHeroName(updateNameInput.current.value)} />
        </label>
      </div>
      <button type="button" onClick={useHistory().goBack}>go back</button>
      <button type="button" onClick={() => updateHero(updatedHeroName)}>save</button>
    </main>
  );
}

export default Detail;
