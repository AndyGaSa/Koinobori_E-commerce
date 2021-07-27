/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import './style-heroes.css';

export default function Heroes() {
  const heroes = JSON.parse(localStorage.getItem('heroes'));
  return (

    <ul className="heroes">
      {heroes.map((hero) => (
        <li>
          <Link
            to={`/details/${hero.id}`}
            key={hero.id}
          >
            <span className="badge">{hero.id}</span>
            {' '}
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
  );
}
