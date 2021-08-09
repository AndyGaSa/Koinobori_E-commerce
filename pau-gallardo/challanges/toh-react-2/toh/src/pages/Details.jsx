/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import heroesListConst from '../assets/heroes';
import HeroForm from '../components/Header/HeroForm';
import './Details.css';

// eslint-disable-next-line react/prop-types
export default function Details() {
  // eslint-disable-next-line no-console
  const { heroId } = useParams();
  const [hero, setHero] = useState();

  useEffect(() => {
    if (heroId) {
      const foundHero = heroesListConst.find((currentHero) => currentHero.id === +heroId);
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
        <HeroForm hero={hero} heroChange={heroChange} />
      </div>
      <button type="button">go back</button>
      <button type="button">save</button>
    </div>
  );
}
