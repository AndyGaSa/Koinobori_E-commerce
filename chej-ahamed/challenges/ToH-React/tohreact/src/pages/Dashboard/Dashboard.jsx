import React from 'react';
import './Dashboard.css';
import '../../Styles.css';
import { Link } from 'react-router-dom';
import heroes from '../../components/constHeroes';

export default function Dashboard() {
  const topheroes = heroes.slice(1, 5);
  return (

    <>
      <h2>Top Heroes</h2>
      <div className="heroes-menu">
        {
          topheroes.map((hero) => (
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
