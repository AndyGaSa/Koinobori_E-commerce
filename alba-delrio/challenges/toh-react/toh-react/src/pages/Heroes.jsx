/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './Heroes.css';
import { Link } from 'react-router-dom';
import { deleteHero } from '../assets/utils';

export default function Heroes() {
  const [heroes, setHeroes] = useState(JSON.parse(localStorage.getItem('heroes')));
  return (
    <>
      <div>
        <h2>My Heroes</h2>
        <label>
          Hero name:
          {' '}
          <input />
        </label>
        <button type="button" className="heroes-btn">add</button>
      </div>
      <ul className="heroes">
        {heroes.map((hero) => (
          <li>
            <Link to={`/details/${hero.id}`} key={hero.id}>
              <span className="badge">{hero.id}</span>
              {hero.name}
            </Link>
            <button
              title="delete hero"
              type="button"
              className="heroes-btn delete"
              onClick={() => deleteHero(hero.id, setHeroes)}
            >
              x

            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
