/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './Details.css';
import { Link } from 'react-router-dom';
import heroes from '../assets/constants';
import { update } from '../assets/utils';

function Details({ match }) {
  const [heroId] = useState(match.params.heroId);

  const [hero, setHero] = useState(heroes.find(({ id }) => id === +heroId));

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
      <Link to="/heroes" className="goback">go back</Link>
      <button type="button" className="save" onClick={() => update(+heroId, hero.name)}>save</button>
    </>
  );
}
export default Details;
