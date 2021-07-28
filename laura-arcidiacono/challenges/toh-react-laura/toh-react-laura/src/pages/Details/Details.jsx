/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import heroes from '../../components/constants/HeroesConst';
import './Details.css';

export default function Details() {
  const { heroId } = useParams();
  const [hero, setHero] = useState();

  useEffect(() => {
    if (heroId) {
      const foundHero = heroes.find((currentHero) => currentHero.id === +heroId);
      setHero(foundHero);
    }
  }, [heroId]);

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
