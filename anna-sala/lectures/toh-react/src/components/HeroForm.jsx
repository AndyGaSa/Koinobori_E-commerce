/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';

export default function HeroForm({ hero, heroChange }) {
  return (
    <div>
      <label htmlFor="hero-name">
        Hero name:
        <input
          name="name"
          placeholder="Hero name"
          value={hero?.name}
          onChange={heroChange}
        />
      </label>

      <label htmlFor="hero-name">
        Publisher:
        <input
          name="publisher"
          data-testid="input-publisher"
          placeholder="Hero publisher"
          value={hero?.publisher}
          onChange={heroChange}
        />
      </label>

      <label htmlFor="hero-name">
        Hero Alter Ego:
        <input
          name="alter_ego"
          placeholder="Hero Alter Ego"
          value={hero?.alter_ego}
          onChange={heroChange}
        />
      </label>

      <label htmlFor="hero-name">
        Hero First Appearance:
        <input
          name="first_appearance"
          placeholder="Hero First Appearance"
          value={hero?.first_appearance}
          onChange={heroChange}
        />
      </label>
      <label htmlFor="hero-name">
        Hero Characters:
        <input
          name="characters"
          placeholder="Hero Characters"
          value={hero?.characters}
          onChange={heroChange}
        />
      </label>
    </div>
  );
}
