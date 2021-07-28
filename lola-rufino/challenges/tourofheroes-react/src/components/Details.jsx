/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './details.css';
import heroes from '../constants/heroes.mock';

export default function Details() {
  // const [heroId] = useState(match.params.heroId);
  const { heroId } = useParams();
  // const [hero, setHero] = useState();

  useEffect(() => {
    if (heroId) {
      localStorage.setItem('heroId', heroId);
      const foundHero = heroes.find((currentHero) => currentHero.id === +heroId);
      setHero(foundHero);
    }
  }, [heroId]);

  return (
    <div>
      <h2>
        {heroes.name}
        {' '}
        name details!
      </h2>
      <span>
        ID:
      </span>
      {heroId}
      <span>Name:</span>
      <input type="text" id="hero__name" />
      <button type="submit">Go back</button>
      <button type="submit">Save</button>
    </div>
  );
}
