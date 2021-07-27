/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';
import './Heroes.css';
import { deleteHero } from '../services/utils';
// import heroes from '../Heroes';
const heroes = JSON.parse(localStorage.getItem('heroes'));
export default function Heroes() {
  return (
    <div>
      <div>
        <label htmlFor="new-hero">Hero name: </label>
        <input id="new-hero" />
        <button className="add-button">Add Hero</button>
      </div>
      <ul className="heroes">
        {
       heroes.map((hero) => (
         <li>
           <Link
             to={`/detail/${hero.id}`}
             key={hero.id}
           >
             <span className="badge">{hero.id}</span>
             {hero.name}
           </Link>
           <button className="delete" onClick={() => deleteHero(hero.id)}>x</button>
         </li>

       ))
        }
      </ul>
    </div>

  );
}
