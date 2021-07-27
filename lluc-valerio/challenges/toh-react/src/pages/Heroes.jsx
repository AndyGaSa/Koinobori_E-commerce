import React from 'react';

export default function Heroes() {
  return (
    <>

      <h2>My Heroes</h2>

      <div>
        <label htmlFor="new-hero">
          Hero name:
          <input id="new-hero" />
        </label>
        <button type="button" className="add-button" onClick="addHero()">
          Add hero
        </button>
      </div>
      <ul className="heroes" id="heroes__list">
        <a href="details">
          <span className="badge">
            Mr Nice
          </span>
        </a>
        <button type="button" className="delete" title="delete hero">x</button>
      </ul>
    </>
  );
}
