/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export default function Form({ user, change }) {
  const entries = Object.entries(user);
  return (
    <ul>
      {entries.map((property) => (
        <li>
          <label htmlFor="username">
            {property[0].toUpperCase()}
            {': '}
          </label>
          <input
            name={property[0]}
            value={property[1]}
            onChange={change}
          />
        </li>
      ))}
    </ul>
  );
}
