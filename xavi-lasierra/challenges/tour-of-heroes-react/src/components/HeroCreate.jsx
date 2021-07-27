/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react';

function HeroCreate({
  heroes, setHeroes, maxId, setMaxId
}) {
  const [newHeroName, setNewHeroName] = useState('');
  const newHeroInput = useRef();

  function addNewHero(heroName) {
    const newHero = {
      id: maxId,
      name: heroName.trim()
    };
    setHeroes([...heroes, newHero]);
    setMaxId(maxId + 1);
  }

  return (
    <label htmlFor="hero__create">
      Hero name:
      <input ref={newHeroInput} type="text" name="hero__create" id="hero__create" onChange={() => setNewHeroName(newHeroInput.current.value)} />
      <button type="button" onClick={() => addNewHero(newHeroName)}>Add hero</button>
    </label>
  );
}

export default HeroCreate;
