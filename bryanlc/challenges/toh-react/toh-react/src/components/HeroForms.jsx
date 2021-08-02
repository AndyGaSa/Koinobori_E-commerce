/* eslint-disable react/prop-types */
import React from 'react';

export default function HeroForms({ hero, heroChange }) {
  return (
    <div>
      <label htmlFor="hero-name">
        Hero name:
        <input
          type="text"
          placeholder="name"
          value={hero?.name}
          onChange={heroChange}
          className="hero-name"
        />
      </label>
      <label htmlFor="hero-publisher">
        Publisher:

        <input
          type="text"
          placeholder="publisher"
          value={hero?.publisher}
          onChange={heroChange}
        />
      </label>

      <label htmlFor="hero-alter-ego">
        Alter_ego:

        <input
          type="text"
          placeholder="alter-ego"
          value={hero?.alter_ego}
          onChange={heroChange}
        />
      </label>

      <label htmlFor="hero-first_appearance">
        first_appearance:

        <input
          type="text"
          placeholder="first_appearance"
          value={hero?.first_appearance}
          onChange={heroChange}
        />
      </label>
    </div>
  );
}
