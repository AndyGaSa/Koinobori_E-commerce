/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import './dashboard.css';

function Dashboard({ heroes, heroDetail }) {
  return (
    <main>
      <h2>Top Heroes</h2>
      <div className="heroes-menu">
        {heroes.map((hero) => <button className="detail" type="button" onClick={() => heroDetail(hero.id)}>{hero.name}</button>)}
      </div>
    </main>

  );
}

export default Dashboard;
