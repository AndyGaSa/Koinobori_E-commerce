/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react';

export default function HeroCreate({
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
      <input type="text" ref={newHeroInput} name="hero__create" id="hero__create" onChange={() => setNewHeroName(newHeroInput.current.value)} />
      <button type="button" onClick={() => addNewHero(newHeroName)}> Add hero</button>
    </label>
  );
}
/* Coments to understad:
Importa dos tipos de hook: useState y useRef.

Declara la funcion,
*/
