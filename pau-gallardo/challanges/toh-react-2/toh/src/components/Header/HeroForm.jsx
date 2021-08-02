/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';

export default function HeroForm({ hero, heroChange }) {
  return (
    <>
      <label htmlFor="hero-name">Hero name: </label>
      <input
        name="name"
        placeholder="Hero name"
        value={hero?.name}
        onChange={heroChange}
      />
    </>
  );
}
