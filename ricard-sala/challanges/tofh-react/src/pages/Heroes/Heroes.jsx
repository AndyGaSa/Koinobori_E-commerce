import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import heroeList from '../../assets/Heroes.const';
import './heroes.css';

export default function Heroes() {
  const [heroes, setHeroes] = useState(JSON.parse(localStorage.getItem('heroes')));
  function deleteHero(id) {
    const deletedHero = heroeList.filter((hero) => hero.id !== id);
    localStorage.setItem('heroes', JSON.stringify(deleteHero));
    setHeroes(deletedHero);
  }
  return (
    <ul className="heroes">
      {heroes.map((hero) => (
        <li>
          <Link
            to={`/details/${hero.id}`}
            key={hero.id}
          >
            <span className="badge">{hero.id}</span>
            {hero.name}
          </Link>
          <button
            onClick={() => deleteHero(hero.id)}
            className="delete"
            type="button"
            title="delete hero"
          >
            x
          </button>
        </li>
      ))}
    </ul>
  );
}
