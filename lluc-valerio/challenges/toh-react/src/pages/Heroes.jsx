import React from 'react';
import { Link } from 'react-router-dom';

import './Heroes.css';

export default function Heroes() {
  const heroes = JSON.parse(localStorage.getItem('heroes'));

  return (
    <>
      <h2>My Heroes</h2>
      <div>
        <label htmlFor="new-hero">
          Hero name:
          <input id="new-hero" placeholder="new hero" />
        </label>
        <button type="button" className="add-button">Add hero</button>
      </div>

      <ul className="heroes">
        {
            heroes.map((hero) => (
              <li>
                <Link key={`heroKey-${hero.id}`} to={`details/${hero.id}`}>
                  <span className="badge">{hero.id}</span>
                  {' '}
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
