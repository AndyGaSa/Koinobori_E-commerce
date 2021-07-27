import React from 'react';
import '../styles.css';
import './details.css';
import heroes from '../heroes.const';

export default function Details() {
  return (
    <>
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
