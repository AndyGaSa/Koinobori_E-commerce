/* eslint-disable react/prop-types */

/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css';
import '../../Styles.css';
import heroes from '../../components/constHeroes';
import Form from '../Form/Form';

export default function Details() {
  const { heroId } = useParams();
  const [hero, setHero] = useState();

  useEffect(() => {
    if (heroId) {
      localStorage.setItem('heroId', heroId);
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

      <div>
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

      <Form hero={hero} heroChange={heroChange} />
    </div>

  );
}
