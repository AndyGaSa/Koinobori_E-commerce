import React from 'react';
import '../styles.css';
import Header from './Header';
import Nav from './Nav';
import './details.css';

export default function Details() {
  const heroes = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  return (
    <>
      <Header />
      <Nav />
      <div>
        <h2>
          {' '}
          {heroes[0].name}
          {' '}
          details!
        </h2>
        <span>
          ID:
          {' '}
          {heroes[0].id}
        </span>
        <span>
          Name:
          {' '}
          {heroes[0].name}
        </span>
        <input type="text" id="hero__name" />
        <span>Slug: </span>
        <span>PowerStats: </span>
        <span>Appearance: </span>
        <span>Biography: </span>
        <span>Work: </span>
        <span>Connections: </span>
        <span>Image: </span>
        <button type="submit">Go back</button>
        <button type="submit">Save</button>
      </div>
    </>
  );
}
