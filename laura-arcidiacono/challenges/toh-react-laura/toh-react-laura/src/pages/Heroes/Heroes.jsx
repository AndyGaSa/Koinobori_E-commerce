/* eslint-disable react/prop-types */
import React from 'react';
import './Heroes.css';
import { Link } from 'react-router-dom';
import heroes from '../../components/constants/HeroesConst';

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
            <Link
              to="/details"
              key={hero.id}
            >
              <span className="badge">{hero.id}</span>

              {hero.name}
            </Link>
            <button
              className="delete"
              type="button"
              title="delete hero"
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
