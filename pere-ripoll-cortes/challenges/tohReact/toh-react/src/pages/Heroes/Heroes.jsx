/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Style.css';
import './Style.css';
import heroesList from '../../Assets.const';

// eslint-disable-next-line react/prop-types
export default function Heroes() {
  return (
    <>
      <h2>My Heroes</h2>
      {heroesList.map((hero) => (
        <Link to={`/details/${hero.id}`}>
          {hero.superhero}
        </Link>
      ))}
    </>

  );
}
