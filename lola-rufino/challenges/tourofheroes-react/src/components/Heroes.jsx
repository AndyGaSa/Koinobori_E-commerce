/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import '../styles.css';
import './heroes.css';
import { Link } from 'react-router-dom';
import heroes from '../heroes.mock';

export default function Heroes({ match }) {
  const [heroId] = useState(match.params.heroId);

  return (
    <>
      <h2>My Heroes</h2>
      <div>
        <form>
          <span>Hero name:</span>
          <input onChange={(event) => (event.target.value)} />
        </form>
        <button className="add-button" type="submit">Add hero</button>
      </div>
      <ul className="heroes">
        {heroes.map((hero) => (
          <li>
            <Link to={`/details/${hero.id}`} key={hero.id}>
              <span className="badge">{hero.id}</span>
              {heroId}
              {hero.name}
            </Link>
            <button type="button" className="delete">x</button>
          </li>
        ))}
      </ul>
    </>
  );
}
