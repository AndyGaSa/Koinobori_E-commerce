import React from 'react';
import { Link } from 'react-router-dom';

import './Dashboard.css';

export default function Dashboard() {
  const heroes = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];
  const actualHeroes = heroes.slice(1, 5);
  return (
    <>
      <h2>Top Heroes</h2>
      <div className="heroes-menu" id="dashboard__heroes">
        {
             actualHeroes.map((hero) => <Link to={`details/${hero.id}`}>{hero.name}</Link>)
        }
      </div>
    </>
  );
}
