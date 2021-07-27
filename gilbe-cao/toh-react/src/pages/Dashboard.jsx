import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

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
      <div className="heroes-menu">
        {
          heroes.map((hero) => (
            <Link
              to={`/details/${hero.id}`}
              key={hero.id}
            >
              {hero.name}
            </Link>
          ))
        }
      </div>
    </>
  );
}
