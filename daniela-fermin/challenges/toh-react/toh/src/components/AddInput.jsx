/* eslint-disable react/prop-types */
import React from 'react';

export default function AddHerosInput({ hero, heroChange }) {
  return (
    <form>

      <label htmlFor="hero-name">
        Name
        <input
          id="hero-name"
          type="text"
          name="name"
          value={hero?.name}
          onChange={heroChange}
        />
      </label>
      <label htmlFor="hero-id">
        Id
        <input
          id="hero-id"
          type="text"
          name="id"
          value={hero?.id}
          onChange={heroChange}
        />
      </label>
      <label htmlFor="hero-publisher">
        Publisher
        <input
          id="hero-publisher"
          type="text"
          name="publisher"
          value={hero?.publisher}
          onChange={heroChange}
        />
      </label>
      <label htmlFor="hero-alter-ego">
        Alter Ego
        <input
          id="hero-alter-ego"
          type="text"
          name="alter_ego"
          value={hero?.alter_ego}
          onChange={heroChange}
        />
      </label>
      <label htmlFor="hero-first-appareance">
        First Appeareance
        <input
          id="hero-first-appearance"
          type="text"
          name="first_appearance"
          value={hero?.first_appearance}
          onChange={heroChange}
        />
      </label>
      <label htmlFor="hero-characters">
        Characters
        <input
          id="hero-characters"
          type="text"
          name="characters"
          value={hero?.characters}
          onChange={heroChange}
        />
      </label>
    </form>
  );
}
