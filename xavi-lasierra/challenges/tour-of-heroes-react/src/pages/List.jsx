/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './list.css';

function List({ heroes }) {
  return (
    <main>
      <h2>My Heroes</h2>
      <label htmlFor="hero__create">
        Hero name:
        <input type="text" name="hero__create" id="hero__create" />
        <button type="button">Add hero</button>
      </label>
      <ul className="heroes">
        {heroes.map((hero) => (
          <li>
            <Link key={hero.id} to={`/detail/${hero.id}`}>
              <span className="badge">{hero.id}</span>
              {hero.name}
            </Link>
            <button className="delete" type="button">x</button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default List;
