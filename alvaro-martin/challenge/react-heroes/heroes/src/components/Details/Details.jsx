/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './Details.css';
import { Link } from 'react-router-dom';
import heroes from '../../assets/heroes';
import update from '../../assets/utils';
import EditDetails from './EditDetails';

function Details({ match }) {
  const [heroId] = useState(match.params.heroId);
  const [hero, setHero] = useState(heroes.find(({ id }) => id === heroId));
  function ModHero(event) {
    setHero({
      ...hero,
      [event.target.name]: event.target.value,
    });
  }
  return (
    <>
      <h2>
        {hero?.name}
        {' '}
        details!
      </h2>
      <span className="hero-id">
        id:
        {hero?.id}
      </span>
      <EditDetails ModHero={ModHero} hero={hero} />
      <Link to="/heroes" className="options">go back</Link>
      <button className="options" type="button" onClick={(() => update(hero, hero.id))} key="peter">save</button>
    </>
  );
}
export default Details;
