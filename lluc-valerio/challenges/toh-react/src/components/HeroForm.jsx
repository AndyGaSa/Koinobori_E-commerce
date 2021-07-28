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
    </div>
  );
}
