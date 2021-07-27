import React from 'react';
import { Link } from 'react-router-dom';

import './Dashboard.css';

export default function Dashboard() {
  const heroes = JSON.parse(localStorage.getItem('heroes'));
  const actualHeroes = heroes.slice(1, 5);
  return (
    <>
      <h2 className="dashboard-h2">Top Heroes</h2>
      <div className="heroes-menu">
        {
             actualHeroes.map((hero) => <Link className="dashboard-link" key={hero.id} to={`details/${hero.id}`}>{hero.name}</Link>)
        }
      </div>
      <div id="search-component">
        <label className="label-dashboard" htmlFor="search-box">
          Hero Search
          <input className="input-dashboard" id="search-box" type="text" />
        </label>
        <ul className="search-result">
          {/* <li *ngFor="let hero of heroes$ | async" >
               <a routerLink="/detail/{{hero.id}}">
                  {{hero.name}}
                </a>
              </li> */}
        </ul>
      </div>

    </>
  );
}
