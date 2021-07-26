/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';

export default function HeroCOntainer({ heroesList }) {
  return (
    <>
      <h2>My Heroes</h2>
      {heroesList.map((hero) => (<a>{hero.name}</a>))}
    </>
  );
}
