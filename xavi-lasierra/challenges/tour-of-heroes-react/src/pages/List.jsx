/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroCreate from '../components/HeroCreate';
import HeroFilter from '../components/HeroFilter';
import './list.css';
import { resetLocalStorage } from '../services/heroes-local-storage';

function List({
  heroes, setHeroes, maxId, setMaxId
}) {
  const [listHeroes, setListHeroes] = useState(heroes);

  function deleteHero(heroId) {
    const newHeroes = heroes.filter(({ id }) => id !== heroId);
    setHeroes(newHeroes);
  }

  function resetHeroes() {
    setHeroes(resetLocalStorage());
  }

  return (
    <main>
      <h2>My Heroes</h2>
      <HeroCreate heroes={heroes} setHeroes={setHeroes} maxId={maxId} setMaxId={setMaxId} />
      <br />
      <HeroFilter heroes={heroes} setListHeroes={setListHeroes} />
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
      <button type="button" onClick={() => resetHeroes()}>Reset Local Storage</button>
    </main>
  );
}

export default List;
