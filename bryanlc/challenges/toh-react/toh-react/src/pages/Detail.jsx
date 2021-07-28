/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { update } from '../services/utils';

// const heroes = JSON.parse(localStorage.getItem('heroes'));
import heroes from '../Heroes';
import HeroForms from '../components/HeroForms';

import './Detail.css';

export default function Details() {
  const { heroId } = useParams();
  const [hero, setHero] = useState();

  useEffect(() => {
    if (heroId) {
      localStorage.setItem('heroId', heroId);
      const foundHero = heroes.find((currentHero) => currentHero.id === +heroId);
      setHero(foundHero);
    }
  }, [heroId]);

  function heroChange(event) {
    setHero({
      ...hero,
      [event.tarjet.name]: event.tarjet.value
    });
  }
  return (
    <div>

      <h2>
        {`${hero?.name}`}
        {' '}
        Details
      </h2>
      <div>
        <label>
          id:
        </label>
        <span>
          {' '}
          {heroId}
        </span>

      </div>
      <HeroForms hero={hero} heroChange={heroChange} />

      <Link className="boton" to="/heroes">go back</Link>
      <button className="boton" onClick={() => update(heroId, hero.name)}>save</button>

    </div>

  );
}
