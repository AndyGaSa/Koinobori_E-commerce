import React from 'react';
import { Link } from 'react-router-dom';
import heroesListConst from '../assets/heroes';
import './Dashboard.css';

export default function Dashboard() {
  const heroes = heroesListConst.slice(1, 5);
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
