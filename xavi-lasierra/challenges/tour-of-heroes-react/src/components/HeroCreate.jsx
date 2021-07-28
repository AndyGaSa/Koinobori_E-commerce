/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import actionTypes from '../redux/actions/action.types';

function HeroCreate() {
  const dispatch = useDispatch();
  const [newHeroName, setNewHeroName] = useState('');

  return (
    <label htmlFor="hero__create">
      Hero name:
      <input type="text" name="hero__create" id="hero__create" value={newHeroName} onChange={(event) => setNewHeroName(event.target.value)} />
      <button
        type="button"
        onClick={() => dispatch({
          type: actionTypes.CREATE_HERO,
          newHero: {
            id: newHeroName.trim().toLowerCase(),
            name: newHeroName.trim()
          }
        })}
      >
        Add hero
      </button>
    </label>
  );
}

export default HeroCreate;
