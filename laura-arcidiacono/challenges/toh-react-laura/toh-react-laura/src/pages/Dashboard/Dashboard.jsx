import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import heroes from '../../components/constants/HeroesConst';

export default function Dashboard() {
  const fourHeroes = heroes.slice(1, 5);
  return (
    <>
      <h2>Top Heroes</h2>
      <div className="heroes-menu">
        {
          fourHeroes.map((hero) => (
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
