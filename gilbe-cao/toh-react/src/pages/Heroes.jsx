import React from 'react';
import { Link } from 'react-router-dom';
import heroes from '../constants/heroes.mock';
import './Heroes.css';

export default function Heroes() {
  return (
    <>
      <h2>My Heroes</h2>

      <div>
        <label htmlFor="new-hero">
          Hero name:
          <input id="new-hero" />
        </label>

        <button className="add-button" type="button">
          Add hero
        </button>
      </div>

      <ul className="heroes">
        {heroes.map((hero) => (
          <li>
            <Link to={`/details/${hero.id}`}>
              <span className="badge">{hero.id}</span>
              {' '}
              {hero.name}
            </Link>
            <button
              className="delete"
              title="delete hero"
              type="button"
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
