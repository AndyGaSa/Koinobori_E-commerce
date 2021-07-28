/* eslint-disable react/prop-types */
import React from 'react';

export default function HeroForm({ hero, heroChange }) {
  return (
    <div>
      <label htmlFor="hero-name">
        Hero name:
        <input
          name="superhero"
          id="hero-name"
          placeholder="Hero name"
          value={hero?.superhero}
          onChange={heroChange}
        />
      </label>
      <label htmlFor="hero-name">
        Publisher:
        <input
          name="publisher"
          id="hero-name"
          placeholder="Hero publisher"
          value={hero?.publisher}
          onChange={heroChange}
        />
      </label>
      <label htmlFor="hero-name">
        Alter ego:
        <input
          name="alter_ego"
          id="hero-name"
          placeholder="Hero alter_ego"
          value={hero?.alter_ego}
          onChange={heroChange}
        />
      </label>
      <label htmlFor="hero-name">
        First appearance:
        <input
          name="first_appearance"
          id="hero-name"
          placeholder="Hero first_appearance"
          value={hero?.first_appearance}
          onChange={heroChange}
        />
      </label>
      <label htmlFor="hero-name">
        Characters:
        <input
          name="characters"
          id="hero-name"
          placeholder="Hero characters"
          value={hero?.characters}
          onChange={heroChange}
        />
      </label>
    </div>
  );
}
