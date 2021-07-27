import React from 'react';
import '../styles.css';
import './heroes.css';
import heroes from '../heroes.const';

export default function Heroes() {
  return (
    <>
      <h2>My Heroes</h2>
      <div>
        <form>
          <span>Hero name:</span>
          <input />
        </form>
        <button className="add-button" type="submit">Add hero</button>
      </div>
      <ul className="heroes">
        {heroes.map((hero) => (
          <li>
            <span className="badge">{hero.id}</span>
            {hero.name}
            <button type="button" className="delete">x</button>
          </li>
        ))}
      </ul>
    </>
  );
}
