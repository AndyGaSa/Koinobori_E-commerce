/* eslint-disable react/prop-types */
import React from 'react';
import './SideMenu.css';

function SideMenu({ favourites }) {
  return (
    <nav>
      <div>
        <h3>Favourite Leagues</h3>
        <ul>
          {favourites.favouriteLeagues.map((favouriteLeague) => <li>{favouriteLeague.name}</li>)}
        </ul>
      </div>
      <div>
        <h3>Favourite Teams</h3>
        <ul>
          {favourites.favouriteTeams.map((favouriteTeam) => <li>{favouriteTeam.name}</li>)}
        </ul>
      </div>
    </nav>
  );
}

export default SideMenu;
