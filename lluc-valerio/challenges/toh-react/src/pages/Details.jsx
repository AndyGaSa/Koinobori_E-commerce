/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import './Details.css';

export default function Details({ match }) {
  const heroes = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

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
