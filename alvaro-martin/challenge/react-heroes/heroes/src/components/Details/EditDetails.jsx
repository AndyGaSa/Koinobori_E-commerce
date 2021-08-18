/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export default function EditDetails({ ModHero, hero }) {
  return (
    <div>
      <label>
        name:
        <input
          type="text"
          placeholder="name"
          value={hero?.name}
          onChange={ModHero}
          className="hero-name"
          name="name"
        />
      </label>
      <label>
        Publisher:
        <input
          type="text"
          placeholder="publisher"
          value={hero?.publisher}
          onChange={ModHero}
          name="publisher"
        />
      </label>
      <label>
        Alter-ego:
        <input
          type="text"
          placeholder="alter_ego"
          value={hero?.alter_ego}
          onChange={ModHero}
          name="alter_ego"
        />
      </label>
      <label>
        First_appearance:
        <input
          type="text"
          placeholder="first_appearance"
          value={hero?.first_appearance}
          onChange={ModHero}
          name="first_appearance"
        />
      </label>
      <label>
        Characters:
        <input
          type="text"
          placeholder="characters"
          value={hero?.characters}
          onChange={ModHero}
          name="characters"
        />
      </label>
    </div>
  );
}
