import React from 'react';
import { Link } from 'react-router-dom';
import './heroes.css';
import heroesList from '../../assets/Heroes.const';
// eslint-disable-next-line react/prop-types
export default function Heroes() {
  return (
    <>
      <h2>My Heroes</h2>
      {heroesList.map((hero) => (
        <li>
          <Link
            to={`/details/${hero.id}`}
            key={hero.id}
          >
            {hero.name}
            {' '}
          </Link>
          <button title="delete hero" type="button">X</button>
        </li>
      ))}
    </>

  );
}
