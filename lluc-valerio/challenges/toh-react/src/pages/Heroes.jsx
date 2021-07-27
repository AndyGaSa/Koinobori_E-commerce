import React from 'react';

import './Heroes.css';

export default function Heroes() {
  // const heroes = [
  //   { id: 11, name: 'Dr Nice' },
  //   { id: 12, name: 'Narco' },
  //   { id: 13, name: 'Bombasto' },
  //   { id: 14, name: 'Celeritas' },
  //   { id: 15, name: 'Magneta' },
  //   { id: 16, name: 'RubberMan' },
  //   { id: 17, name: 'Dynama' },
  //   { id: 18, name: 'Dr IQ' },
  //   { id: 19, name: 'Magma' },
  //   { id: 20, name: 'Tornado' }
  // ];
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
