import React from 'react';
import { Link } from 'react-router-dom';

import heroes from '../../constants/heroes.mock';

import './Heroes.css';

export default function Heroes() {
  return (
    <>
      <h2>Heroes</h2>

      <div>
        <label htmlFor="new-hero">
          Name:
          <input id="new-hero" />
        </label>
        <button className="add-button" type="button">Add hero</button>
      </div>

      <ul className="heroes">
        {heroes.map((hero) => (
          <li>
            <Link to={`/details/${hero.superhero}`} key={hero.superhero}>
              {hero.superhero}
            </Link>
            <button className="delete" type="button">x</button>
          </li>
        ))}
      </ul>
    </>
  );
}
