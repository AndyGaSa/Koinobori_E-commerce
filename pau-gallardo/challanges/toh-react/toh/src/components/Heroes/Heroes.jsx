/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './Heroes.css';

export default function Heroes({ heroes }) {
  return (
    <>
      <h2>My Heroes</h2>
      <div>
        <label htmlFor="new-hero">Hero name: </label>
        <input id="new-hero" />
        <button type="button" className="add-button">Add hero</button>
      </div>
      <h2>Top Heroes</h2>
      <ul className="heroes">
        {
          heroes.map((hero) => (
            <li>
              <Link
                to={`/details/${hero.id}`}
                key={hero.id}
              >
                <span className="badge">{hero.id}</span>
                {hero.name}
              </Link>
              <button type="button" className="delete" title="delete hero">x</button>
            </li>
          ))
        }
      </ul>

    </>
  );
}
