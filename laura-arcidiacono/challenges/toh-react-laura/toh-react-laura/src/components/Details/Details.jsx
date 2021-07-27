/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css';

export default function Details({ match }) {
  // const [{ heroId }] = useState(match.params.heroId);

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
  return (
    <div>
      <h2>name Details</h2>
      <div>
        <span>
          id:
        </span>
        {hero?.id}
      </div>
      <div>
        <label htmlFor="hero-name">Hero name: </label>
        <input
          id="hero-name"
          placeholder="Hero name"
          value={hero?.name}
        />
      </div>
      <button type="button">go back</button>
      <button type="button">save</button>
    </div>
  );
}
