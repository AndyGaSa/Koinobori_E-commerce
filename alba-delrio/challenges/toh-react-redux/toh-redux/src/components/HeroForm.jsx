/* eslint-disable react/prop-types */
import React from 'react';

export default function Form({ hero, heroChange }) {
  return (
    <div>
      <label htmlFor="hero-name">
        Hero name:
        <input
          name="name"
          id="hero-name"
          placeholder="Hero name"
          value={hero?.name}
          onChange={heroChange}
        />
      </label>
      <label htmlFor="hero-publisher">
        Publisher:
        <input
          name="publisher"
          id="hero-publisher"
          placeholder="Hero publisher"
          value={hero?.publisher}
          onChange={heroChange}
        />
      </label>
      <label htmlFor="hero-alter_ego">
        Hero name:
        <input
          name="alter_ego"
          id="hero-alter_ego"
          placeholder="hero-alter_ego"
          value={hero?.alter_ego}
          onChange={heroChange}
        />
      </label>
      <label htmlFor="hero-first_appearance">
        Hero name:
        <input
          name="first_appearance"
          id="hero-first_appearance"
          placeholder="Hero appearance"
          value={hero?.first_appearance}
          onChange={heroChange}
        />
      </label>
      <label htmlFor="hero-characters">
        Hero name:
        <input
          name="characters"
          id="hero-characters"
          placeholder="Hero characters"
          value={hero?.characters}
          onChange={heroChange}
        />
      </label>
    </div>
  );
}
