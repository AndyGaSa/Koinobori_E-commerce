import React from 'react';
import { Link } from 'react-router-dom';

import './Heroes.css';

export default function Heroes() {
  const heroes = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

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
