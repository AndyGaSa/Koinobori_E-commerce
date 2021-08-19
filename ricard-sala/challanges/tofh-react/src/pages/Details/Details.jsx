/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './details.css';
import update from '../../assets/HeroListParsed';
import heroesList from '../../assets/Heroes.const';
import HeroesForm from '../../components/HeroesForm';

export default function heroChange(event) {
  setHeroe({
    ...hero
    [event.target.name]: event.target.value,
  });

  return (
    <>
      <HeroesForm hero={hero} heroChange={heroChange} />
      <Link to="/heroes" className="goback">go back</Link>
      <button type="button" onClick={(() => update(hero.name, hero.id))} key="peter">save</button>
    </>
  );
}
