import React from 'react';
import heroes from '../../components/constHeroes';
import './Heroes.css';
import '../../Styles.css';

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

      <ul>
        {heroes.map((hero) => (
          <li>

            <span className="hero_id">{hero.id}</span>
            <button type="button" className="hero_button">
              {hero.name}
            </button>
            <button type="button" className="hero_deleteButton">
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
