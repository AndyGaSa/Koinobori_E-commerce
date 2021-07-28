/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import HeroForm from '../components/HeroForm';

import './detail.css';

function Detail({ heroes, setHeroes }) {
  const { heroId } = useParams();

  const [currentHero, setCurrentHero] = useState(heroes.find(({ id }) => id === heroId));

  function modifyHero(event) {
    setCurrentHero({ ...currentHero, [event.target.name]: event.target.value.trim() });
  }

  function updateHero(newHero) {
    const updatedHeroes = heroes
      .map((oneHero) => (oneHero.id === currentHero.id
        ? { ...oneHero, ...newHero } : oneHero));
    setHeroes(updatedHeroes);
  }

  return (
    <main>
      <h2>
        {currentHero.name}
        {' '}
        Details!
      </h2>
      <p>
        id:
        {' '}
        <span>{currentHero.id}</span>
      </p>
      <HeroForm currentHero={currentHero} modifyHero={modifyHero} />
      <button type="button" onClick={useHistory().goBack}>go back</button>
      <button type="button" onClick={() => updateHero(currentHero)}>save</button>
    </main>
  );
}

export default Detail;
