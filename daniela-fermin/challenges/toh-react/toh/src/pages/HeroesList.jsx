/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './HeroesList.css';
import heroes from '../ArrayHeroes.mock';

export default function HeroesList() {
  return (
    <>
      <h2>My Heroes</h2>

      <div>
        <label htmlFor="new-hero">
          Hero name:
        </label>
        <input type="text" />
        <button
          className="add-button"
          type="button"
        >
          Add hero
        </button>
      </div>
      <ul className="heroes">
        {
        heroes.map((hero) => (
          <li>
            {' '}
            <Link to={`/details/${hero.id}`} key={hero.id}>
              <span className="badge">{hero.name}</span>
            </Link>
            <button
              className="delete"
              title="delete hero"
              type="button"
            >
              x

            </button>

          </li>
        ))
        }

      </ul>
    </>

  );
}
