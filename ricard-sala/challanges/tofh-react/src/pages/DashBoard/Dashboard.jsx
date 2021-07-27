import React from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const heroes = [
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
  ];
  return (
    <>
      <h2>Top Heroes</h2>
      {heroes.map((hero) => (
        <Link
          to={`/details/${hero.id}`}
          key={hero.id}
        >
          {hero.name}

        </Link>
      ))}
    </>

  );
}
