/* eslint-disable react/prop-types */
import React from 'react';

export default function Heroes({ setCurrentPage }) {
  const topHeroes = ['Narco', 'Bombasto', 'Celeritas', 'Magneta'];
  return (
    <>
      <h3>My Heroes</h3>
      <ul>{topHeroes.map((hero) => <li>{hero}</li>)}</ul>
      <h3>Magenta is my hero!</h3>
      <button type="button" onClick={() => setCurrentPage('details')}>Details</button>
    </>
  );
}
