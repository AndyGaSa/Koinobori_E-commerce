/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export default function HeroForm({ hero }) {
  const [selectedHero, setSelectHero] = useState(hero);

  return (
    <div>
      <label htmlFor="hero-name">
        Hero name:
        <input
          id="hero-name"
          placeholder="Hero name"
          value={selectedHero?.name}
          onChange={(event) => setSelectHero({
            ...selectedHero,
            name: event.target.value,
          })}
        />
      </label>
    </div>
  );
}
