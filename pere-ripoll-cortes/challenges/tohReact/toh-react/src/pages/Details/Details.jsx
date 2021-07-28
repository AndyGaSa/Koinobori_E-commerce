/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import '../../Styles/Style.css';
import './Style.css';
import heroesList from '../../Assets.const';
import FormHero from '../../components/FormHero/FormHero';

export default function Details({ match }) {
  const [title, setTitle] = useState('');
  const [heroId] = useState(match.params.heroId);
  const { superhero } = heroesList.find((e) => e.id === heroId);
  const hero = heroesList.find((e) => e.id === heroId);
  return (
    <>
      <h2>
        {superhero}
        {' '}
        Details!
      </h2>

      <p>
        Id:
        {heroId}
      </p>
      <p>
        Name:
        {' '}
        {superhero}
        {' '}
        <p>Write the new name</p>
        <input type="text" onChange={(event) => setTitle(event.target.value)} />
        <button
          type="button"
          onClick={() => {
            const index = heroesList.findIndex((e) => e.superhero === superhero);
            heroesList[index].superhero = title;
            localStorage.setItem('superheroes', JSON.stringify(heroesList));
            return heroesList;
          }}
        >
          Change Hero Name

        </button>
        <FormHero heroes={hero} />
      </p>
    </>

  );
}
