/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './Details.css';
import { Link } from 'react-router-dom';
import { update } from '../assets/utils';
import heroesArray from '../const.hero';

let heroes;
function updateLocalStorage() {
  heroes = JSON.parse(localStorage.getItem('heroes'));
}
updateLocalStorage();
if (heroes === null) {
  localStorage.setItem('heroes', JSON.stringify(heroesArray));
}
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
              name: event.target.value,
            })}
            className="hero-name"
          />
        </label>
      </div>
      <Link to="/heroes" onClick={() => window.location.reload()} className="goback">go back</Link>
      <button onClick={() => update(heroId, hero.name)} type="button" className="save">save</button>
    </>
  );
}
export default Details;
