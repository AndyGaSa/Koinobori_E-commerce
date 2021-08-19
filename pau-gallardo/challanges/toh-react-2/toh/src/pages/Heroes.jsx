/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Heroes.css';
import deleteHeroes from '../assets/deleteHero';
import addHeroes from '../assets/addHero';

export default function Heroes() {
  const heroes = JSON.parse(localStorage.getItem('heroes'));
  const [newHero, setNewHero] = useState();
  function something() {
    const inputValue = document.querySelector('#new-hero').value;
    setNewHero(inputValue);
  }
  return (
    <>
      <h2>My Heroes</h2>
      <div>
        <label htmlFor="new-hero">Hero name: </label>
        <input id="new-hero" onChange={something} />
        <button type="button" className="add-button" onClick={() => addHeroes(newHero)}>Add hero</button>
      </div>
      <h2>Top Heroes</h2>
      <ul className="heroes">
        {
          heroes.map((hero) => (
            <li>
              <Link
                to={`/details/${hero.id}`}
                key={hero.id}
              >
                <span className="badge">{hero.id}</span>
                {hero.name}
              </Link>
              <button type="button" className="delete" id={hero.id} onClick={() => deleteHeroes(hero.id)} title="delete hero">x</button>
            </li>
          ))
        }
      </ul>

    </>
  );
}
