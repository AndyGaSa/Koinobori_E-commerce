import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

export default function Dashboard() {
  const heroes = JSON.parse(localStorage.getItem('heroes'));
  const heroesList = heroes.slice(1, 5);
  return (
    <>
      <h2>Top Heroes</h2>
      <div className="heroes-menu">
        {
          heroesList.map((hero) => (
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
