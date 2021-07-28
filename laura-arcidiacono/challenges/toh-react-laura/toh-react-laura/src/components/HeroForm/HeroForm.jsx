/* eslint-disable react/prop-types */
import React from 'react';

export default function HeroForm({ hero, heroChange }) {
  return (
    <div>
      <label htmlFor="hero__name">
        Hero name
        <input
          name="name"
          placeholder="Hero name"
          value={hero?.name}
          onChange={heroChange}
        />
      </label>
      <label htmlFor="hero__publisher">
        Hero publisher
        <input
          name="publisher"
          placeholder="Hero publisher"
          value={hero?.publisher}
          onChange={heroChange}
        />
      </label>
      <label htmlFor="hero__alter_ego">
        Hero alter_ego
        <input
          name="alter_ego"
          placeholder="Alter ego"
          value={hero?.alter_ego}
          onChange={heroChange}
        />
      </label>
      <label htmlFor="first_appearance">
        Hero first_appearance
        <input
          name="first_appearance"
          placeholder={hero.first_appearance}
          value={hero?.first_appearance}
          onChange={heroChange}
        />
      </label>
      <label htmlFor="characters">
        Hero characters
        <input
          name="characters"
          placeholder={hero.characters}
          value={hero?.characters}
          onChange={heroChange}
        />
      </label>

    </div>
  );
}
