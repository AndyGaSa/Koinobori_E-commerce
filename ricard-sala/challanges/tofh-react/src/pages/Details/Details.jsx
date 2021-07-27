/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './details.css';
import update from '../../assets/HeroListParsed';
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
      <span className="hero-id">
        Id:
        {heroId}

      </span>
      <div>
        <label>
          name:
          <input
            type="text"
            placeholder="name"
            value={hero?.name}
            onChange={(event) => setHero({
              ...hero,
              name: event.target.value,
            })}
            className="hero-name"
          />
        </label>
      </div>
      <Link to="/heroes" className="goback">go back</Link>
      <button type="button" onClick={(() => update(hero.name, hero.id))} key="peter">save</button>
    </>
  );
}
