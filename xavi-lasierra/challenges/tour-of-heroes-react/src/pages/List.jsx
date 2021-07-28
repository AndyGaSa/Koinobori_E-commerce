/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import HeroCreate from '../components/HeroCreate';
import HeroFilter from '../components/HeroFilter';
import actionTypes from '../redux/actions/action.types';

import './list.css';

function List() {
  const heroes = useSelector((store) => store.heroes);
  const dispatch = useDispatch();

  return (
    <main>
      <h2>My Heroes</h2>
      <HeroCreate />
      <br />
      <HeroFilter heroes={heroes} />
      <ul className="heroes">
        {heroes.map((hero) => (
          <li key={hero.id}>
            <Link to={`/detail/${hero.id}`}>
              <span className="badge">{hero.id}</span>
              {hero.name}
            </Link>
            <button
              onClick={() => dispatch({
                type: actionTypes.DELETE_HERO,
                heroId: hero.id
              })}
              className="delete"
              type="button"
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default List;
