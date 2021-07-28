/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function HeroCreate({
  heroes, setHeroes, maxId, setMaxId
}) {
  const [newHeroName, setNewHeroName] = useState('');
  function addNewHero(heroName) {
    const newHero = {
      id: `${maxId}-${heroName.toLowerCase()}`,
      name: heroName.trim()
    };
    setHeroes([...heroes, newHero]);
    setMaxId(maxId + 1);
  }

  return (
    <label htmlFor="hero__create">
      Hero name:
      <input type="text" name="hero__create" id="hero__create" value={newHeroName} onChange={(event) => setNewHeroName(event.target.value)} />
      <button type="button" onClick={() => addNewHero(newHeroName)}>Add hero</button>
    </label>
  );
}

export default HeroCreate;
