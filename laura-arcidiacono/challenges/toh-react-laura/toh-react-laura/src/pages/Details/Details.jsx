/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './Details.css';

import heroes from '../../components/constants/HeroesConst';
import HeroForm from '../../components/HeroForm/HeroForm';

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
      [event.target.name]: event.target.value
    });
  }

  return (
    <div className="details">
      <h2>
        {hero?.name.toUpperCase()}
        {' '}
        Details!
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
