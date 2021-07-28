/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import update from '../assets/HeroListParsed';

export default function HeroesForm(hero, heroChange) {
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
            onChange={(event) => update({
              ...hero,
              name: event.target.value,
            })}
            className="hero-name"
          />
        </label>
      </div>
      <div>
        <label>
          publisher
          <input
            type="text"
            placeholder="publisher"
            value={hero?.publisher}
            onChange={(event) => update({
              ...hero,
              name: event.target.value,
            })}
            className="hero-name"
          />
        </label>
      </div>
      <div>
        <label>
          first appearance
          <input
            type="text"
            placeholder="first_appearance"
            value={hero?.first_appearance}
            onChange={(event) => update({
              ...hero,
              name: event.target.value,
            })}
            className="hero-name"
          />
        </label>
      </div>
      <div>
        <label>
          alter ego
          <input
            type="text"
            placeholder="alter_ego"
            value={hero?.alter_ego}
            onChange={(event) => update({
              ...hero,
              name: event.target.value,
            })}
            className="hero-name"
          />
        </label>
      </div>
      <div>
        <label>
          alter ego
          <input
            type="text"
            placeholder="alter-ego"
            value={hero?.alter_ego}
            onChange={(event) => update({
              ...hero,
              name: event.target.value,
            })}
            className="hero-name"
          />
        </label>
      </div>
    </>
  );
}
