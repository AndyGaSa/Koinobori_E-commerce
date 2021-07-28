/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';

export default function HeroForm() {
  return (
    <>
      <label htmlFor="hero-name">Hero name: </label>
      <input
        onChange={(event) => event.target.value}
        id="hero-name"
        placeholder="Hero name"
      />
    </>
  );
}
