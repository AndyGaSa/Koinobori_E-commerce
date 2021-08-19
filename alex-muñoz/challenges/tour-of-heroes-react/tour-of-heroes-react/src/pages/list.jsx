/* eslint-disable react/prop-types */
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import heroesList from '../Assets/heroesList';

import AddHeroFunction from '../services/AddHeroFunction';

import '../styles/List.css';

export default function List() {
  const newHeroName = useRef();
  const [newHeroes, setHeroes] = useState(heroesList);
  const newHero = () => {
    const heroName = newHeroName.current.value;
    if (heroName.trim()) {
      setHeroes((previousHeroes) => [...previousHeroes,
        AddHeroFunction(heroName, newHeroes.length + 11)]);
      newHeroName.current.value = null;
    }
  };
  useEffect(() => { localStorage.setItem('heroes', JSON.stringify(newHeroes)); }, [newHeroes]);
  useEffect(() => { JSON.parse(localStorage.getItem('heroes')); }, [newHeroes]);
  return (
    <section className="heroes-container">
      <h1>My Heroes</h1>
      <div className="add-hero">
        <input type="text" ref={newHeroName} placeholder="New Hero" />
        <button type="button" onClick={newHero}>Add Hero</button>
      </div>
      <ul className="heroes-list">
        {newHeroes.map((hero) => (
          <li key={`${hero.id}-${hero.name}`}>
            <Link to={`/details/${hero.id}`} key={`${hero.id}-${hero.name}`} hero={hero}>
              <span className="id">
                {hero.id}
              </span>
              <span className="hero-name">
                {hero.name}
              </span>
            </Link>
            <button type="button">X</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
