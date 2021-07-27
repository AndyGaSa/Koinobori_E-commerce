/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './Detail.css';
import { Link } from 'react-router-dom';
import { update } from '../services/utils';

const heroes = JSON.parse(localStorage.getItem('heroes'));
export default function Details({ match }) {
  const [heroId] = useState(match.params.heroId);

  const [hero, setHero] = useState(heroes.find(({ id }) => id === +heroId));

  return (
    <div>

      <h2>
        {`${hero?.name}`}
        {' '}
        Details
      </h2>
      <div>
        <label>
          id:
        </label>
        <span>
          {' '}
          {heroId}
        </span>

      </div>
      <div>
        <label htmlFor="hero-name">Hero name:</label>
        <input
          type="text"
          placeholder="name"
          value={hero?.name}
          onChange={(event) => setHero({
            ...hero,
            name: event.target.value
          })}
          className="hero-name"
        />
      </div>

      <Link className="boton" to="/heroes">go back</Link>
      <button className="boton" onClick={() => update(heroId, hero.name)}>save</button>

    </div>

  );
}
