import React from 'react';
import './App.css';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import heroes from '../assets/constants';

function Dashboard() {
  const TopHeroes = heroes.slice(0, 4);
  return (
    <>
      <h3 className="dashboard-title">Top Heroes</h3>
      <div className="grid grid-pad">
        {TopHeroes.map((hero) => <Link key={hero.id} className="col-1-4" to={`/details/${hero.id}`}><div className="module hero"><h4>{hero.name}</h4></div></Link>)}
      </div>
      <h4>Hero Search</h4>
      <input type="text" id="search-box" />
    </>
  );
}
export default Dashboard;
