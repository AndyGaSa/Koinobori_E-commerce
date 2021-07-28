/* eslint-disable react/prop-types */

/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export default function Form({ hero, heroChange }) {
  return (
    <div>
      <div>
        <label htmlFor="hero-name">Hero name: </label>
        <input
          name="name"
          id="hero-name"
          placeholder="Hero name"
          value={hero?.name}
          onChange={heroChange}
        />
      </div>

      <div>
        <label htmlFor="hero-id">Hero Id: </label>
        <input
          name="id"
          id="hero-id"
          placeholder="Hero id"
          value={hero?.id}
          onChange={heroChange}
        />
      </div>

      <div>
        <label htmlFor="hero-publisher">Hero Publisher: </label>
        <input
          name="publisher"
          id="hero-publisher"
          placeholder="Hero publisher"
          value={hero?.publisher}
          onChange={heroChange}
        />
      </div>

      <div>
        <label htmlFor="hero-alter_ego">Hero Alter Ego: </label>
        <input
          name="alter_ego"
          id="hero-alter_egor"
          placeholder="Hero alter_ego"
          value={hero?.alter_ego}
          onChange={heroChange}
        />
      </div>

      <div>
        <label htmlFor="hero-first_appearance">Hero First Appearance: </label>
        <input
          name="first_appearance"
          id="hero-first_appearance"
          placeholder="Hero first_appearance"
          value={hero?.first_appearance}
          onChange={heroChange}
        />
      </div>

      <div>
        <label htmlFor="hero-characters">Hero Characters: </label>
        <input
          name="character"
          id="hero-character"
          placeholder="Hero character"
          value={hero?.character}
          onChange={heroChange}
        />
      </div>

      <button type="button">go back</button>
      <button type="button">save</button>
    </div>

  );
}
