/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import './Details.css';

import heroes from '../../components/constants/HeroesConst';

export default function Details() {
  const { heroId } = useParams();
  const [hero, setHero] = useState();

  useEffect(() => {
    if (heroId) {
      const foundHero = heroes.find((currentHero) => currentHero.id === heroId);
      setHero(foundHero);
    }
  }, [heroId]);

  return (
    <div className="details">
      <h2>
        {hero?.name.toUpperCase()}
        {' '}
        Details!
      </h2>
      <div>
        id:

        <span>
          {hero?.id}
          {' '}
        </span>
      </div>
      <button type="button" onClick={useHistory().goBack}>go back</button>
      <button type="button" onClick={() => updateHero(updatedHeroName)}>save</button>
    </div>
  );
}
