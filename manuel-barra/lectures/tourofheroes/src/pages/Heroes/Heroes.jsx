import React from 'react';
import { Link } from 'react-router-dom';
import heroes from '../../components/constantes/HeroesConst';
import '../Styles.css';
import './Heroes.css';

export default function Heroes() {
  return (
    <>
      <h2>My Heroes</h2>
      <div>
        <label htmlFor="new-hero">
          Hero name:
          <input id="new-hero" />
        </label>
        <button className="add-button" type="button">
          Add hero
        </button>
      </div>
      <ul className="heroes">
        {heroes.map((hero) => (
          <li>
            <Link className="heroes" to={`/details/${hero.id}`} key={hero.id}>
              <span className="badge">{hero.id}</span>
              {hero.name}
            </Link>
            <button title="delete hero" type="button" className="heroes-btn delete">x</button>
          </li>

        ))}
      </ul>
    </>
  );
}
