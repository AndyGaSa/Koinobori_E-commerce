/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './details.css';
import heroes from '../constants/heroes.mock';
import HeroForm from './HeroForm';

export default function Details() {
  const { heroId } = useParams();
  const [hero, setHero] = useState();

  useEffect(() => {
    if (heroId) {
      const foundHero = heroes.find((currentHero) => currentHero.id === heroId);
      setHero(foundHero);
    }
  }, [heroId]);

  return (
    <div>
      <h2>
        {hero?.name}
        {' '}
        name details!
      </h2>
      <span>
        ID:
      </span>
      {hero?.id}
      <HeroForm hero={hero} />
      <input type="text" id="hero__name" />
      <button type="submit">Go back</button>
      <button type="submit">Save</button>
    </div>
  );
}
