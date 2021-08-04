/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getFavourites, deleteFavouriteLeague } from '../../redux/actions/favourites.creator';
import './SideMenu.scss';

function SideMenu({ navClass, changeNavState }) {
  const favourites = useSelector((store) => store.favourites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavourites());
  }, []);

  return (
    <div className={navClass}>
      <aside>
        <nav className="side-menu-navigator">
          <div>
            <h3 className="side-menu-navigator__title">
              <i className="fas fa-star" />
              Favourite Leagues
            </h3>
            <ul>
              {favourites.favouriteLeagues.map((favouriteLeague, index) => (
                <li data-testid={`favourite-leagues-item-${index}`} key={`favourite-league-${favouriteLeague.id}`} className="favourite">
                  <Link to={`/league/${favouriteLeague.id}`}>
                    <img src={favouriteLeague.badge} alt={favouriteLeague.name} className="favourite__badge" />
                    <span className="favourite__name">{favouriteLeague.name}</span>
                  </Link>
                  <button className="favourite__delete" type="button" onClick={() => dispatch(deleteFavouriteLeague(favouriteLeague.id))}>x</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="side-menu-navigator__title">
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
      <button type="button" className="shadow" aria-label="shadow" onClick={changeNavState} />
    </div>
  );
}

export default SideMenu;
