import React from 'react';
import '../../Styles/Style.css';
import './Style.css';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const heroes = [
    'Narco',
    'Bombasto',
    'Celeritas',
    'Magneta',
  ];

  return (
    <>
      <h2>Top Heroes</h2>
      {heroes.map((hero, index) => (
        <Link
          to={`/details/${heroes[index]}`}
          // key={heroesList.id}
        >
          {heroes[index]}
        </Link>
      ))}
    </>

  );
}
