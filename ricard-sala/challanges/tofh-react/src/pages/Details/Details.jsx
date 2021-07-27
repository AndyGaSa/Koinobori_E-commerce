/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './details.css';

import heroesList from '../../assets/Heroes.const';

export default function Details() {
  const { heroId } = useParams();
  const [hero, setHero] = useState();
  useEffect(() => {
    if (heroId) {
      localStorage.setItem('heroId', heroId);
      const foundHero = heroesList.find((currentHero) => currentHero.id === +heroId);
      setHero(foundHero);
    }
  }, [heroId]);

  return (
    <>
      <h2>
        {hero?.name}
        {' '}
        details!
      </h2>
      <p>
        Id:
        {heroId}

      </p>
      <p>
        Name:
        {' '}
        <input type="text" value={hero?.name} />
      </p>
      <nav>
        <Link to="/">go back</Link>
      </nav>
    </>
  );
}
