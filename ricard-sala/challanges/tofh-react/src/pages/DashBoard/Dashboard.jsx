import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';
import heroesList from '../../assets/Heroes.const';

export default function Dashboard() {
  const heroes = heroesList.slice(1, 5);
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
