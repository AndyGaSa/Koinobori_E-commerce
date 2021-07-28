import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import heroes from '../heroes.mock';
=======
import heroes from '../heroes.const';
>>>>>>> 1fda93b0ad71b02840dcfd5efba7408ab955bcb6
import './dashboard.css';

export default function Dashboard() {
  return (
    <>
      <h2>Top Heroes</h2>
      <div className="heroes-menu">
        {
          heroes.slice(1, 5).map((hero) => (
            <Link to={`/details/${hero.id}`} key={hero.id}>
              {hero.name}
            </Link>
          ))
        }
      </div>
    </>
  );
}
