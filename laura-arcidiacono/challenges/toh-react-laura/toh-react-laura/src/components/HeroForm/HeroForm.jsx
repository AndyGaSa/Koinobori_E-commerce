import React, { useState } from 'react';

import heroes from '../constants/HeroesConst';

export default function HeroForm() {
  const [selectedHero, setSelectHero] = useState(hero);

  return (
    <div>
      <label htmlFor="hero__id">
        Hero id
        <input
          type="text"
          id="hero-id"
          placeholder="Hero id"
          defaultValue={hero.id}
        />
      </label>
      <label htmlFor="hero__name">
        Hero name
        <input
          type="text"
          name="hero__name"
          id="hero-name"
          placeholder="Hero name"
          defaultValue={hero.name}
          // onChange=""
        />
      </label>
      <label htmlFor="hero__publisher">
        Hero publisher
        <input
          type="text"
          name="hero__publisher"
          id="hero-publisher"
          placeholder="Hero publisher"
          defaultValue={hero.publisher}
          // onChange=""
        />
      </label>
      <label htmlFor="hero__alter_ego">
        Hero alter_ego
        <input
          type="text"
          name="hero__alter_ego"
          id="hero__alter_ego"
          placeholder={hero.alter_ego}
          defaultValue={hero.alter_ego}
        />
      </label>
      <label htmlFor="first_apperance">
        Hero first_appearance
        <input
          type="text"
          name="first_apperance"
          id="hero-first_apperance"
          placeholder={hero.first_appearance}
          defaultValue={hero.first_appearance}
        />
      </label>
      <label htmlFor="characters">
        Hero characters
        <input
          type="text"
          name="characters"
          id="characters"
          placeholder={hero.characters}
        />
      </label>

    </div>
  );
}
