import React from 'react';
import './Dashboard.css';

function Dashboard() {
  const TopHeroes = [
    'Alba',
    'Alex',
    'Adri',
    'Lola',

  ];
  return (
    <>
      <h2>Top Heroes</h2>
      <ul>
        {TopHeroes.map((topheroes) => <li>{topheroes}</li>)}
      </ul>
    </>
  );
}

export default Dashboard;
