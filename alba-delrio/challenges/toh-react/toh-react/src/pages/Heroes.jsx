import React from 'react';

export default function Heroes() {
  const topHeroes = ['Narco', 'Bombasto', 'Celeritas', 'Magneta'];
  return (
    <>
      <h3>My Heroes</h3>
      <ul>{topHeroes.map((hero) => <li>{hero}</li>)}</ul>
      <h3>Magenta is my hero!</h3>
      <button type="button">View Details</button>
    </>

  );
}
