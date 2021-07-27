import React from 'react';
import { Link } from 'react-router-dom';
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
        <li>
          <Link href="/detail/11">
            <span className="badge">11</span>
            {' '}
            Dr Nice
          </Link>
          <button
            className="delete"
            title="delete hero"
            type="button"
          >
            x

          </button>
        </li>
        <li>
          <Link href="/detail/12">
            <span className="badge">12</span>
            {' '}
            Narco
          </Link>
          <button
            className="delete"
            title="delete hero"
            type="button"
          >
            x

          </button>
        </li>
      </ul>
    </>
  );
}
