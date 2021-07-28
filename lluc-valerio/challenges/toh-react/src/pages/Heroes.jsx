/* eslint-disable no-alert */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Heroes.css';

export default function Heroes() {
  const heroesOrigin = JSON.parse(localStorage.getItem('heroes'));

  // const [heroes, updateHeroes] = useState();
  const [heroes, updateHeroes] = useState(heroesOrigin);
  const [newHero, setNewHero] = useState('0');

  function deleteHero(event) {
    // eslint-disable-next-line no-debugger
    // debugger;

    const heroId = event.target.id;
    const heroIndex = heroes.findIndex((hero) => hero.id === +heroId);

    if (heroIndex >= 0) {
      heroes.splice(heroIndex, 1);
      localStorage.setItem('heroes', JSON.stringify(heroes));
      updateHeroes([...heroes]);
    } else {
      alert(`A problem occurred trying to delete the hero with ID ${heroIndex}`);
    }
  }

  // eslint-disable-next-line no-unused-vars
  function addHero(event) {
    if (newHero.trim()?.length <= 0) {
      alert('You have to introduce a name in order to add a new Hero');
    } else {
      setNewHero('');
    }
  }

  return (
    <>
      <h2>My Heroes</h2>
      <div>
        <label htmlFor="new-hero">
          Hero name:
          <input onChange={(event) => setNewHero(event.target.value)} id="new-hero" placeholder="new hero" />
        </label>
        <button type="button" className="add-button" onClick={addHero}>Add hero</button>
      </div>

      <ul className="heroes">
        {
            heroes.map((hero) => (
              <li>
                <Link key={`heroKey-${hero.id}`} to={`details/${hero.id}`}>
                  <span className="badge">{hero.id}</span>
                  {' '}
                  {hero.name}
                </Link>
                <button type="button" className="delete" id={hero.id} title="delete hero" onClick={deleteHero}>x</button>
              </li>
            ))
        }
      </ul>

    </>
  );
}
