/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './details.css';
import heroes from '../heroes.mock';

export default function Details() {
  // const [heroId] = useState(match.params.heroId);
  const { heroId } = useParams();
  const [hero, setHero] = useState();

  useEffect(() => {
    if (heroId) {
      localStorage.setItem('heroId', heroId);
      const foundHero = heroes.find((currentHero) => currentHero.id === +heroId);
      setHero(foundHero);
    }
  }, [heroId]);

  return (
    <div className="details__container">
      <h2 className="details__title">
        {hero?.name}
        {' '}
        name details!
      </h2>
      <div className="details__minicontainer">
        <span className="details__title">
          ID:
        </span>
        {' '}
        {hero?.id}
      </div>
      <div className="details__minicontainer">
        <span className="details__title">
          Hero name:
        </span>
        <input type="text" id="hero__name" value={hero?.name} />
      </div>

      <div className="details__buttons">
        <button type="submit">Go back</button>
        <button type="submit">Save</button>
      </div>
    </div>
  );
}
