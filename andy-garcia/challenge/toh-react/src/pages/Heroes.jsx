/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './Heroes.css';
import { Link } from 'react-router-dom';
import { deleteHeroes, addHero } from '../assets/utils';
import heroesArray from '../const.hero';

const heroes = JSON.parse(localStorage.getItem('heroes'));
if (heroes === null) {
  localStorage.setItem('heroes', JSON.stringify(heroesArray));
}

export default function Heroes() {
  const [heroInput, setHero] = useState('');
  return (
    <>
      <div>
        <h2>My Heroes</h2>
        <label>
          Hero name:
          {' '}
          <input
            type="text"
            placeholder="name"
            value={heroInput?.name}
            onChange={(event) => setHero({
              name: event.target.value,
            })}
            className="hero-name"
          />
        </label>
        <button type="button" className="heroes-btn" onClick={() => addHero(heroInput.name)}>add</button>
      </div>
      <ul className="heroes">
        {heroes.map((hero) => (
          <li>
            <Link to={`/details/${hero.id}`} key={hero.id}>
              <span className="badge">{hero.id}</span>
              {hero.name}
            </Link>
            <button onClick={() => deleteHeroes(hero.id)} title="delete hero" type="button" className="heroes-btn delete">x</button>
          </li>
        ))}
      </ul>
    </>
  );
}
