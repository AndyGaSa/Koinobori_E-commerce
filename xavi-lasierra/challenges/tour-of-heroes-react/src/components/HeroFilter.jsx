/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react';

function HeroFilter({ heroes, setListHeroes }) {
  const [filter, setFilter] = useState('');
  const filterInput = useRef();

  function filterHeroes(filterValue) {
    const filteredHeroes = heroes.filter(({ id, name }) => (id + name.toLowerCase())
      .includes(filterValue.trim().toLowerCase()));
    setListHeroes(filteredHeroes);
  }

  return (
    <label htmlFor="hero__filter">
      Filter heroes:
      <input ref={filterInput} type="text" name="hero__filter" id="hero__filter" onChange={() => setFilter(filterInput.current.value)} />
      <button type="button" onClick={() => filterHeroes(filter)}>Filter heroes</button>
    </label>
  );
}

export default HeroFilter;
