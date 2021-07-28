/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import HeroCreate from '../components/HeroCreate';
import HeroFilter from '../components/HeroFilter';

import './list.css';

function List() {
  const heroes = useSelector((store) => store.heroes);

  return (
    <main>
      <h2>My Heroes</h2>
      <HeroCreate heroes={heroes} />
      <br />
      <HeroFilter heroes={heroes} />
      <ul className="heroes">
        {heroes.map((hero) => (
          <li key={hero.id}>
            <Link to={`/detail/${hero.id}`}>
              <span className="badge">{hero.id}</span>
              {hero.name}
            </Link>
            <button onClick="" className="delete" type="button">x</button>
          </li>
        ))}
      </ul>
      <button type="button" onClick="">Reset Local Storage</button>
    </main>
  );
}

export default List;
