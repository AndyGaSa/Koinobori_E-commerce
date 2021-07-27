/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import './Details.css';

export default function Details({ match }) {
  const heroes = JSON.parse(localStorage.getItem('heroes'));

  const [heroId] = useState(match.params.heroId);
  const heroIdDetail = heroes.find((hero) => hero.id === +heroId);

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
      <button type="button">go back</button>
      <button type="button">save</button>
    </div>
  );
}
