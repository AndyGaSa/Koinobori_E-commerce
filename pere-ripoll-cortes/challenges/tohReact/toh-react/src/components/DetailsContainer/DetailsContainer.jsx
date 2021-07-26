import React from 'react';

export default function DetailsContainer() {
  const hero = 'pere';
  const num = 34;
  return (
    <>
      <h2>
        {hero}
        {' '}
        Details!
      </h2>

      <p>
        Id:
        {num}
      </p>
      <p>
        Name:
        {' '}
        <input type="text" value={hero} />
      </p>
    </>
  );
}
