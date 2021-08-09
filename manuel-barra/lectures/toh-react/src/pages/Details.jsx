/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import actionTypes from '../redux/actions/action.types';

import HeroForm from '../components/HeroForm';

import './Details.css';

export default function Details() {
  const heroes = useSelector((store) => store.heroes);
  const dispatch = useDispatch();

  const { heroId } = useParams();
  const [hero, setHero] = useState();

  useEffect(() => {
    if (heroId) {
      const foundHero = heroes.find((currentHero) => currentHero.id === heroId);
      setHero(foundHero);
    }
  }, [heroId]);

  function heroChange(event) {
    setHero({
      ...hero,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="details">
      <h2>
        {hero?.name.toUpperCase()}
        {' '}
        Details
      </h2>
      <div>
        <span>
          id:
        </span>
        {hero?.id}
      </div>
      <HeroForm hero={hero} heroChange={heroChange} />
      <button type="button">go back</button>
      <button
        type="button"
        onClick={() => dispatch({
          type: actionTypes.UPDATE_HERO,
          hero,
        })}
      >
        save

      </button>
    </div>
  );
}
