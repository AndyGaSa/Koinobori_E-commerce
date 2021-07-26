/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import './dashboard.css';

function Dashboard({ heroes }) {
  return (
    <div className="heroes-menu">
      {heroes.map((hero) => <a>{hero.name}</a>)}
    </div>
  );
}

export default Dashboard;
