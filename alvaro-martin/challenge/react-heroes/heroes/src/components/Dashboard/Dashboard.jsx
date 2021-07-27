/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import heroes from '../../assets/heroes';
import './style-Dashboard.css';

export default function Dashboard() {
  return (
    <>
      <h2>Top Heroes</h2>
      <div className="heroes-menu">
        {heroes.slice(1, 5).map((hero) => (

          <Link
            to={`/Details/${hero.id}`}
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
