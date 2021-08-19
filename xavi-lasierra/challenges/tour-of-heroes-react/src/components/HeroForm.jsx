/* eslint-disable react/prop-types */
import React from 'react';

function HeroForm({ currentHero, modifyHero }) {
  return (
    <div>
      <label htmlFor="name">
        Hero name:
        <input name="name" placeholder="Hero name" value={currentHero?.name} onChange={modifyHero} />
      </label>
      <label htmlFor="publisher">
        Publisher:
        <input name="publisher" placeholder="Hero publisher" value={currentHero?.publisher} onChange={modifyHero} />
      </label>
      <label htmlFor="alter_ego">
        Alter ego:
        <input name="alter_ego" placeholder="Hero alter ego" value={currentHero?.alter_ego} onChange={modifyHero} />
      </label>
      <label htmlFor="first_appearance">
        First appearance:
        <input name="first_appearance" placeholder="Hero first appearance" value={currentHero?.first_appearance} onChange={modifyHero} />
      </label>
      <label htmlFor="characters">
        Characters:
        <input name="characters" placeholder="Hero characters" value={currentHero?.characters} onChange={modifyHero} />
      </label>
    </div>
  );
}

export default HeroForm;
