/* eslint-disable react/prop-types */
import React from 'react';
import './SideMenu.css';

function SideMenu({ favourites }) {
  return (
    <nav className="side-menu">
      <div>
        <h3 className="side-menu__favourite-title">
          <i className="fas fa-star" />
          Favourite Leagues
        </h3>
        <ul>
          {favourites.favouriteLeagues.map((favouriteLeague) => (
            <li key={`favourite-league-${favouriteLeague.id}`} className="side-menu__favourite">
              {favouriteLeague.name}
              <button className="favourite__delete" type="button">x</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="side-menu__favourite-title">
          <i className="fas fa-star" />
          Favourite Teams
        </h3>
        <ul>
          {favourites.favouriteTeams.map((favouriteTeam) => (
            <li key={`favourite-team-${favouriteTeam.id}`} className="side-menu__favourite">
              {favouriteTeam.name}
              <button className="favourite__delete" type="button">x</button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default SideMenu;
