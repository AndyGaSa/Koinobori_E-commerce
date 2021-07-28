/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function HeroFilter({ heroes, setListHeroes }) {
  const [filter, setFilter] = useState('');

  function filterHeroes(filterValue) {
    const filteredHeroes = heroes.filter(({ id, name }) => (id + name.toLowerCase())
      .includes(filterValue.trim().toLowerCase()));
    setListHeroes(filteredHeroes);
  }

  return (
    <label htmlFor="hero__filter">
      Filter heroes:
      <input type="text" name="hero__filter" id="hero__filter" value={filter} onChange={(event) => setFilter(event.target.value)} />
      <button type="button" onClick={() => filterHeroes(filter)}>Filter heroes</button>
    </label>
  );
}

export default HeroFilter;
