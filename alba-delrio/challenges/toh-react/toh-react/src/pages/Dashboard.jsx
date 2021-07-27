import React from 'react';
import './Dashboard.css';
import heroes from '../assets/constants';

export default function Dashboard() {
  const topHeroes = heroes.slice(1, 5);
  return (
    <>
      <h2>Top Heroes</h2>
      <ul className="topHeroes">{topHeroes.map(({ name }) => <li>{name}</li>)}</ul>

    </>
  );
}
