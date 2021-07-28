/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import HeroForm from '../components/HeroForm';
import heroes from '../constants/heroes.mock';

import './Details.css';

export default function Details() {
  const { heroId } = useParams();
  const [hero, setHero] = useState();

  useEffect(() => {
    if (heroId) {
      const foundHero = heroes.find((currentHero) => currentHero.id === heroId);
      setHero(foundHero);
    }
  }, [heroId]);

  function heroChange(event) {
    setHero({
      ...hero,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="details">
      <h2>
        {hero?.name.toUpperCase()}
        {' '}
        Details
      </h2>
      <div>
        <span>
          id:
        </span>
        {hero?.id}
      </div>
      <HeroForm hero={hero} heroChange={heroChange} />
      <button type="button">go back</button>
      <button type="button">save</button>
    </div>
  );
}
