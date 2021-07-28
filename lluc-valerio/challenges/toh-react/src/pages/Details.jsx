/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import HeroForm from '../components/HeroForm';

import hero from '../constants/heroes.mock';
import './Details.css';

export default function Details({ match }) {
  const [heroId] = useState(match.params.heroId);
  const heroIdDetail = heroes.find((hero) => hero.id === +heroId);

  function heroChange(event) {
    setHero({
      ...hero,
      [event.target.name]: event.target.value

    });
  }

  return (
    <div>
      <h2>
        {heroIdDetail.name.toUpperCase()}
        {' '}
        Details
      </h2>

      <div>
        <span>id: </span>
        {heroIdDetail.id}
      </div>

      <div>
        <label htmlFor="hero-name">
          Hero name:
          <input id="hero-name" className="detail-input" placeholder={heroIdDetail.name} />
        </label>
      </div>
      <HeroForm hero={hero} />
      <button type="button">go back</button>
      <button type="button">save</button>
    </div>
  );
}
