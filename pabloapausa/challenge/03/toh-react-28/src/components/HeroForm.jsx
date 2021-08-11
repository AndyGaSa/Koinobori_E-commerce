/* eslint-disable no-console */
/* eslint-disable react/prop-types */

import React from 'react';

export default function HeroForm({ hero, heroChange }) {
  return (
    <div>
      <label htmlFor="hero-name">
        Superhero:
        <input
          name="superhero"
          placeholder="Superhero"
          value={hero?.superhero}
          onChange={heroChange}
        />
      </label>

      <label htmlFor="hero-name">
        Publisher:
        <input
          name="publisher"
          placeholder="Publisher"
          value={hero?.publisher}
          onChange={heroChange}
        />
      </label>

      <label htmlFor="hero-name">
        ID:
        <input
          name="id"
          placeholder="ID"
          value={hero?.id}
          onChange={heroChange}
        />
      </label>

      <label htmlFor="hero-name">
        First appearance:
        <input
          name="first_appearance"
          placeholder="First appearance"
          value={hero?.first_appearance}
          onChange={heroChange}
        />
      </label>

      <label htmlFor="hero-name">
        Characters:
        <input
          name="characters"
          placeholder="Characters"
          value={hero?.characters}
          onChange={heroChange}
        />
      </label>

      <label htmlFor="hero-name">
        Alter ego:
        <input
          name="alter_ego"
          placeholder="Alter ego"
          value={hero?.alter_ego}
          onChange={heroChange}
        />
      </label>
    </div>
  );
}
