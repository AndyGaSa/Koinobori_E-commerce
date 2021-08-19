/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import { update } from '../assets/utils';

export default function Form({ hero, heroChange }) {
  return (
    <>
      <h2>
        {hero?.name}
        {' '}
        details!
      </h2>
      <span className="hero-id">
        id:
        {hero?.id}
      </span>
      <div>
        <label>
          name:
          <input
            name="name"
            type="text"
            placeholder="name"
            value={hero?.name}
            onChange={heroChange}
            className="hero-name"
          />
        </label>
      </div>
      <Link to="/heroes" className="goback">go back</Link>
      <button onClick={() => update(hero.id, hero.name)} type="button" className="save">save</button>
    </>
  );
}
