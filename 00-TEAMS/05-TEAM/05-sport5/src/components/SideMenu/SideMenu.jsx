/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFavourites } from '../../redux/actions/sports.creator';

import './SideMenu.scss';

function SideMenu({ navClass }) {
  const favourites = useSelector((store) => store.countriesLeagues.favourites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavourites());
  }, []);

  return (
    <aside className={navClass}>
      <nav className="side-menu">
        <div>
          <h3 className="side-menu__favourite-title">
            <i className="fas fa-star" />
            Favourite Leagues
          </h3>
          <ul>
            {favourites.favouriteLeagues.map((favouriteLeague) => (
              <li key={`favourite-league-${favouriteLeague.id}`} className="favourite">
                <Link to={`/league/${favouriteLeague.id}`}>
                  <img src={favouriteLeague.badge} alt={favouriteLeague.name} className="favourite__badge" />
                  <span className="favourite__name">{favouriteLeague.name}</span>
                </Link>
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
              <li key={`favourite-team-${favouriteTeam.id}`} className="favourite">
                <Link to={`/team/${favouriteTeam.id}`}>
                  <img src={favouriteTeam.badge} alt={favouriteTeam.name} className="leagues__badge" />
                  <span className="favourite__name">{favouriteTeam.name}</span>
                </Link>
                <button className="favourite__delete" type="button">x</button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
}

export default SideMenu;
