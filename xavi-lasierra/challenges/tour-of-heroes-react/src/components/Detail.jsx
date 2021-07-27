/* eslint-disable react/prop-types */
import React from 'react';

function Detail({ hero, changePage }) {
  return (
    <main>
      <h2>
        {hero.name}
        {' '}
        Details!
      </h2>
      <p>
        id:
        {' '}
        <span>{hero.id}</span>
      </p>
      <div>
        <label htmlFor="hero-name">
          Hero name:
          <input id="hero-name" placeholder="Hero name" value={hero.name} />
        </label>
      </div>
      <button type="button" onClick={() => changePage('list')}>go back</button>
      <button type="button">save</button>
    </main>

  );
}

export default Detail;
