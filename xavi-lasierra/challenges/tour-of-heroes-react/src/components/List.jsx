/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import './list.css';

function List({ heroes }) {
  return (
    <ul className="heroes">
      {heroes.map((hero) => (
        <li>
          <a className="heroes">
            <span className="badge">{hero.id}</span>
            {hero.name}
          </a>
          <button className="delete" type="button" onClick="">x</button>
        </li>

      ))}
    </ul>
  );
}

export default List;
