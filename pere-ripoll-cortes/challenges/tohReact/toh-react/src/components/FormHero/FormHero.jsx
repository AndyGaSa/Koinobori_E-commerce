/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import heroesList from '../../Assets.const';

export default function FormHero({ heroes }) {
  const [value, setValue] = useState('');

  return (
    <>
      <p style={{ display: 'flex' }}>
        Id:
        {' '}
        <input type="text" placeholder={heroes.id} style={{ width: '200px' }} onChange={(event) => setValue(event.target.value)} />
        <button
          type="button"
          onClick={() => {
            const index = heroesList.findIndex((e) => e.id === heroes.id);
            heroesList[index].id = value;
            localStorage.setItem('superheroes', JSON.stringify(heroesList));
            return heroesList;
          }}
        >
          Change

        </button>
      </p>
      <p style={{ display: 'flex' }}>
        Name:
        {' '}
        <input type="text" placeholder={heroes.superhero} style={{ width: '200px' }} onChange={(event) => setValue(event.target.value)} />
        <button
          type="button"
          onClick={() => {
            const index = heroesList.findIndex((e) => e.superhero === heroes.superhero);
            heroesList[index].superhero = value;
            localStorage.setItem('superheroes', JSON.stringify(heroesList));
            return heroesList;
          }}
        >
          Change

        </button>
      </p>
      <p style={{ display: 'flex' }}>
        Publisher:
        {' '}
        <input type="text" placeholder={heroes.publisher} style={{ width: '200px' }} onChange={(event) => setValue(event.target.value)} />
        <button
          type="button"
          onClick={() => {
            const index = heroesList.findIndex((e) => e.publisher === heroes.publisher);
            heroesList[index].publisher = value;
            localStorage.setItem('superheroes', JSON.stringify(heroesList));
            return heroesList;
          }}
        >
          Change

        </button>
      </p>
      <p style={{ display: 'flex' }}>
        Alter Ego:
        {' '}
        <input type="text" placeholder={heroes.alter_ego} style={{ width: '200px' }} onChange={(event) => setValue(event.target.value)} />
        <button
          type="button"
          onClick={() => {
            const index = heroesList.findIndex((e) => e.alter_ego === heroes.alter_ego);
            heroesList[index].alter_ego = value;
            localStorage.setItem('superheroes', JSON.stringify(heroesList));
            return heroesList;
          }}
        >
          Change

        </button>
      </p>
      <p style={{ display: 'flex' }}>
        Firts Appearance:
        {' '}
        <input type="text" placeholder={heroes.first_appearance} style={{ width: '200px' }} onChange={(event) => setValue(event.target.value)} />
        <button
          type="button"
          onClick={() => {
            const index = heroesList
              .findIndex((e) => e.first_appearance === heroes.first_appearance);
            heroesList[index].first_appearance = value;
            localStorage.setItem('superheroes', JSON.stringify(heroesList));
            return heroesList;
          }}
        >
          Change

        </button>
      </p>
      <p style={{ display: 'flex' }}>
        Character:
        {' '}
        <input type="text" placeholder={heroes.characters} style={{ width: '200px' }} onChange={(event) => setValue(event.target.value)} />
        <button
          type="button"
          onClick={() => {
            const index = heroesList
              .findIndex((e) => e.characters === heroes.characters);
            heroesList[index].characters = value;
            localStorage.setItem('superheroes', JSON.stringify(heroesList));
            return heroesList;
          }}
        >
          Change

        </button>
      </p>
    </>
  );
}
