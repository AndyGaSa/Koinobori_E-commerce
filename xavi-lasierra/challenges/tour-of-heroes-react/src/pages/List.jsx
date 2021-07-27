/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './list.css';

function List({
  heroes, setHeroes, maxId, setMaxId
}) {
  const [newHeroName, setNewHeroName] = useState('');
  const newHeroInput = useRef();

  const [listHeroes, setListHeroes] = useState(heroes);
  const [filter, setFilter] = useState('');
  const filterInput = useRef();

  function addNewHero(heroName) {
    const newHero = {
      id: maxId,
      name: heroName.trim()
    };
    setHeroes([...heroes, newHero]);
    setMaxId(maxId + 1);
  }

  function deleteHero(heroId) {
    const newHeroes = heroes.filter(({ id }) => id !== heroId);
    setHeroes(newHeroes);
  }

  function filterHeroes(filterValue) {
    const filteredHeroes = heroes.filter(({ id, name }) => (id + name.toLowerCase())
      .includes(filterValue.trim().toLowerCase()));
    setListHeroes(filteredHeroes);
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
        <input ref={filterInput} type="text" name="hero__filter" id="hero__filter" onChange={() => setFilter(filterInput.current.value)} />
        <button type="button" onClick={() => filterHeroes(filter)}>Filter heroes</button>
      </label>
      <ul className="heroes">
        {listHeroes.map((hero) => (
          <li key={hero.id}>
            <Link to={`/detail/${hero.id}`}>
              <span className="badge">{hero.id}</span>
              {hero.name}
            </Link>
            <button onClick={() => deleteHero(hero.id)} className="delete" type="button">x</button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default List;
