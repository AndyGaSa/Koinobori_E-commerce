import React from 'react';
import './Dashboard.css';

export default function Dashboard() {
  const topHeroes = ['Narco', 'Bombasto', 'Celeritas', 'Magneta'];
  return (
    <>
      <h2>Top Heroes</h2>
      <ul>{topHeroes.map((hero) => <li>{hero}</li>)}</ul>

    </>
  );
}
