/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import heroes from '../ArrayHeroes.mock';

export default function Dashboard() {
  const dashboardHeroes = (heroes.slice(1, 5));
  return (

    <>
      <h2>Top Heroes</h2>
      <div className="heroes-menu">
        {
          dashboardHeroes.map((hero) => (
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
