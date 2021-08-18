import React from 'react';
import { Link } from 'react-router-dom';

import heroes from '../../constants/heroes.mock';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <>
      <h2>Top Heroes</h2>
      <div className="heroes-menu">
        {
          heroes.slice(1, 5).map((hero) => (
            <Link
              to={`/details/${hero.superhero}`}
              key={hero.superhero}
            >
              {hero.superhero}
            </Link>
          ))
        }
      </div>
    </>
  );
}
