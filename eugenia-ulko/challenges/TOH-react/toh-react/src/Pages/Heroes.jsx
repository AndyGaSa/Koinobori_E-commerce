import React from 'react';
import './Heroes.css';

export default function Heroes() {
  return (
    <>
      <h2>My Heroes</h2>
      <div>
        <label htmlFor="new-hero">
          Hero name:

          <input id="new-hero" />
          {' '}

        </label>

        <button className="add-button" type="button">
          Add hero
        </button>
      </div>

      <ul className="heroes">
        <li>
          <a href="/details">
            <span className="badge">11 </span>
            Mr.Nice
          </a>
          <button
            className="delete"
            title="delete hero"
            type="button"
          >
            {' '}
            x

          </button>
        </li>
      </ul>
    </>
  );
}
