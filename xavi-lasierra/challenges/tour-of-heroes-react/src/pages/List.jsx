/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './list.css';

function List({
  heroes, setHeroes, maxId, setMaxId
}) {
  const [newHeroName, setNewHeroName] = useState('');
  const newHeroInput = useRef();

  function addNewHero(heroName) {
    const newHero = {
      id: maxId,
      name: heroName
    };
    setHeroes([...heroes, newHero]);
    setMaxId(maxId + 1);
  }

  return (
    <main>
      <h2>My Heroes</h2>
      <label htmlFor="hero__create">
        Hero name:
        <input ref={newHeroInput} type="text" name="hero__create" id="hero__create" onChange={() => setNewHeroName(newHeroInput.current.value)} />
        <button type="button" onClick={() => addNewHero(newHeroName)}>Add hero</button>
      </label>
      <br />
      <label htmlFor="hero__filter">
        Filter heroes:
        <input type="text" name="hero__filter" id="hero__filter" />
        <button type="button">Filter heroes</button>
      </label>
      <ul className="heroes">
        {heroes.map((hero) => (
          <li key={hero.id}>
            <Link to={`/detail/${hero.id}`}>
              <span className="badge">{hero.id}</span>
              {hero.name}
            </Link>
            <button className="delete" type="button">x</button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default List;
