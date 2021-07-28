/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './Details.css';
import heroesArray from '../const.hero';
import Form from '../components/Form';

let heroes;
function updateLocalStorage() {
  heroes = JSON.parse(localStorage.getItem('heroes'));
}
updateLocalStorage();
if (heroes === null) {
  localStorage.setItem('heroes', JSON.stringify(heroesArray));
}

function Details({ match }) {
  const [heroId] = useState(match.params.heroId);
  const [hero, setHero] = useState(heroes.find(({ id }) => id === +heroId));

  function heroChange(event) {
    setHero({
      ...hero,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <>
      <Form heroChange={heroChange} hero={hero} />
    </>
  );
}
export default Details;
