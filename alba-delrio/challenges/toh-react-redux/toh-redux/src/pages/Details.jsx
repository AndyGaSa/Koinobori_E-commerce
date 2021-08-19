/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import heroes from '../assets/constants';
import { update } from '../assets/utils';
import HeroForm from '../components/HeroForm';

import './Details.css';

function Details({ match }) {
  const [heroId] = useState(match.params.heroId);

  const [hero, setHero] = useState(heroes.find(({ id }) => id === heroId));
  function heroChange(event) {
    setHero({
      ...hero,
      [event.target.name]: event.target.value
    });
  }
  return (
    <>
      <h2>
        {hero?.name}
        {' '}
        details!
      </h2>
      <span className="hero-id">
        id:
        {hero?.id}
      </span>
      <div>
        <label>
          name:
          <input
            type="text"
            placeholder="name"
            value={hero?.name}
            onChange={(event) => setHero({
              ...hero,
              name: event.target.value
            })}
            className="hero-name"
          />
        </label>
      </div>
      <HeroForm hero={hero} heroChanges={heroChange} />
      <Link to="/heroes" className="goback">go back</Link>
      <button type="button" className="save" onClick={() => update(heroId, hero.name)}>save</button>
    </>
  );
}
export default Details;
