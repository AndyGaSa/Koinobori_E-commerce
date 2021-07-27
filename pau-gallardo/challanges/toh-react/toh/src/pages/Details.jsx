/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import heroesListConst from '../assets/heroes';
import './Details.css';

// eslint-disable-next-line react/prop-types
export default function Details() {
  // eslint-disable-next-line no-console
  const { heroId } = useParams();
  const [hero, setHero] = useState();

  useEffect(() => {
    if (heroId) {
      localStorage.setItem('heroId', heroId);
      const foundHero = heroesListConst.find((currentHero) => currentHero.id === +heroId);
      setHero(foundHero);
    }
  }, [heroId]);

  return (
    <div>
      <h2>
        {hero?.name}
        {' '}
        Details
      </h2>
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
