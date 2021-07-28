import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import heroes from '../../constants/heroes.mock';
import HeroForm from '../../components/HeroForm';

import './Details.css';

export default function Details() {
  // Recoge el ID de la URL.
  const { heroId } = useParams();
  const [hero, setHero] = useState();

  useEffect(() => {
    if (heroId) {
      const foundHero = heroes.find((currentHero) => currentHero.superhero === heroId);
      setHero(foundHero);
    }
  }, [heroId]);

  return (
    <div className="details">
      <h2>
        {hero?.superhero.toUpperCase()}
        {' '}
        Details
      </h2>
      <div>
        <span>
          id:
        </span>
        {' '}
        {hero?.superhero}
      </div>
      <HeroForm hero={hero} />
      <button type="button">go back</button>
      <button type="button">save</button>
    </div>
  );
}
