/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import heroes from '../ArrayHeroes.mock';
import AddHerosInput from '../components/AddInput';

export default function Details() {
  const { heroId } = useParams();
  const [hero, setHero] = useState();

  useEffect(() => {
    if (heroId) {
      localStorage.setItem('heroId', heroId);
      const foundHero = heroes.find((currentHero) => `${currentHero.id}` === heroId);
      setHero(foundHero);
    }
  }, [heroId]);
  const heroChange = (event) => {
    setHero({ ...hero, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h2>
        {hero?.name}
        {' '}
        Details
      </h2>
      <div>
        <span>
          Id:
        </span>
        {hero?.id}
      </div>
      <div>
        <AddHerosInput hero={hero} heroChange={heroChange} />
      </div>
      <button type="button">go back</button>
      <button type="button">save</button>
    </div>
  );
}
