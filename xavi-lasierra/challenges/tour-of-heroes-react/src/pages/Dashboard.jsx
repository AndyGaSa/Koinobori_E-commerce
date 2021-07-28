/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './dashboard.css';

function Dashboard() {
  const heroes = useSelector((store) => store.heroes).slice(1, 5);

  return (
    <main>
      <h2>Top Heroes</h2>
      <div className="heroes-menu">
        {heroes.map((hero) => <Link key={hero.id} to={`/detail/${hero.id}`}>{hero.name}</Link>)}
      </div>
    </main>
  );
}

export default Dashboard;
