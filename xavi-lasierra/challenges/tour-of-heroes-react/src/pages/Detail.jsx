/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import HeroForm from '../components/HeroForm';
import actionTypes from '../redux/actions/action.types';

import './detail.css';

function Detail() {
  const dispatch = useDispatch();
  const { heroId } = useParams();

  const currentHero = useSelector((store) => store.heroes).find(({ id }) => id === heroId);
  const [updatedHero, setUpdatedHero] = useState(currentHero);

  function modifyHero(event) {
    setUpdatedHero({ ...currentHero, [event.target.name]: event.target.value.trim() });
  }

  return (
    <main>
      <h2>
        {currentHero.name}
        {' '}
        Details!
      </h2>
      <p>
        id:
        {' '}
        <span>{currentHero.id}</span>
      </p>
      <HeroForm currentHero={updatedHero} modifyHero={modifyHero} />
      <button type="button" onClick={useHistory().goBack}>go back</button>
      <button
        type="button"
        onClick={() => dispatch({
          type: actionTypes.UPDATE_HERO,
          updatedHero
        })}
      >
        save

      </button>
    </main>
  );
}

export default Detail;
