import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';

export default function Dashboard() {
  const heroes = JSON.parse(localStorage.getItem('heroList'));
  return (
    <>
      <h2>Top Heroes</h2>
      <div className="heroes-menu">
        { heroes.slice(1, 5).map((hero) => (
          <Link
            to={`/details/${hero.id}`}
            key={hero.id}
            className="fourHeroes"
          >
            {hero.name}

          </Link>
        ))}
      </div>
    </>
  );
}
