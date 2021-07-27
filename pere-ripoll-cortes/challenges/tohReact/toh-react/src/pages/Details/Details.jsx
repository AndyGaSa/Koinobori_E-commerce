/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import '../../Styles/Style.css';
import './Style.css';
import heroesList from '../../Assets.const';

export default function Details({ match }) {
  const [heroId] = useState(match.params.heroId);
  const { superhero } = heroesList.find((e) => e.id === heroId);
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
        <input type="text" value={superhero} />
      </p>
    </>

  );
}
