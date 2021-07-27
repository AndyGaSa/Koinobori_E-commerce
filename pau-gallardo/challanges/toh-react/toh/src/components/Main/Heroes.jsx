/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';

export default function Heroes({ heroes }) {
  return (
    <>
      <ul className="heroes">
        {heroes.map((hero) => (
          <li key={hero}>
            {hero}
          </li>
        ))}
      </ul>
    </>
  );
}
