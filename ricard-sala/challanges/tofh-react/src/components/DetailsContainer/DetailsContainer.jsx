import React from 'react';

export default function DetailsContainer() {
  const hero = 'riki';
  const num = 13;
  return (
    <>
      <h2>
        {hero}
        {' '}
        details!
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
