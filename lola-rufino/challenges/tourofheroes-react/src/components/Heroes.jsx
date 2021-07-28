/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import '../styles.css';
import './heroes.css';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import heroes from '../heroes.mock';

export default function Heroes({ match }) {
  const [heroId] = useState(match.params.heroId);

=======
import heroes from '../heroes.const';

export default function Heroes({ match }) {
  const [heroId] = useState(match.params.heroId);
>>>>>>> 1fda93b0ad71b02840dcfd5efba7408ab955bcb6
  return (
    <>
      <h2>My Heroes</h2>
      <div>
        <form>
          <span>Hero name:</span>
<<<<<<< HEAD
          <input onChange={(event) => setInput(event.target.value)} />
=======
          <input />
>>>>>>> 1fda93b0ad71b02840dcfd5efba7408ab955bcb6
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
