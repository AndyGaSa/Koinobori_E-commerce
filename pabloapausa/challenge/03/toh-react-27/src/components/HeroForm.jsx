/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export default function HeroForm({ hero }) {
  const [selectHero, setSelectHero] = useState(hero);

  return (
    <div>
      <label htmlFor="hero-name">
        Hero Name:
        <input
          id="hero-name"
          placeholder="Hero name"
          value={selectHero?.superhero}
          onChange={(event) => setSelectHero({
            ...selectHero,
            name: event.target.value,
          })}
        />
      </label>
    </div>
  );
}
