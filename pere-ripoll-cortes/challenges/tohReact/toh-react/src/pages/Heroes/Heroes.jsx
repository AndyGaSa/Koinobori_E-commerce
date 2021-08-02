/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Style.css';
import './Style.css';
import heroesList from '../../Assets.const';

// eslint-disable-next-line react/prop-types
export default function Heroes() {
  const [title, setTitle] = useState('');

  return (
    <>
      <h2>My Heroes</h2>
      {heroesList.map((hero) => (

        <Link to={`/details/${hero.id}`}>
          {hero.superhero}

        </Link>

      ))}
      <div className="button-container" />
      <input type="text" onChange={(event) => setTitle(event.target.value)} />
      <button
        type="button"
        onClick={() => {
          heroesList.push({ superhero: title });
          localStorage.setItem('superheroes', JSON.stringify(heroesList));
          window.location.reload();
          return heroesList;
        }}
      >
        Add new Hero:
        {' '}
        {title}
        {' '}
        ?
        {' '}
      </button>
    </>

  );
}
