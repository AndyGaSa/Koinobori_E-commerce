/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LogOutButton from '../LogoutButton/LogoutButton';
import LogoInButton from '../LoginButton/LoginButton';
import { getFavourites, deleteFavouriteLeague, deleteFavouriteTeam } from '../../redux/actions/favourites.creator';
import './SideMenu.scss';

function SideMenu({ navClass, changeNavState }) {
  const favourites = useSelector((store) => store.favourites);
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    dispatch(getFavourites());
  }, []);

  return (
    <div data-testid="side-menu" className={navClass}>
      <aside>
        <nav className="side-menu-navigator">
          { !isAuthenticated
            ? (
              <>
                <p className="side-menu-navigator__login-message">To be able to use the favourite menu, you need to login</p>
                <LogoInButton />
              </>
            )
            : (
              <>
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
                        <button data-testid={`delete-button-league-${index}`} className="favourite__delete" type="button" onClick={() => dispatch(deleteFavouriteLeague(favouriteLeague.id))}>x</button>
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
                    {favourites.favouriteTeams.map((favouriteTeam, index) => (
                      <li data-testid={`favourite-teams-item-${index}`} key={`favourite-team-${favouriteTeam.id}`} className="favourite">
                        <Link to={`/team/${favouriteTeam.id}`}>
                          <img src={favouriteTeam.badge} alt={favouriteTeam.name} className="favourite__badge" />
                          <span className="favourite__name">{favouriteTeam.name}</span>
                        </Link>
                        <button data-testid={`delete-button-team-${index}`} className="favourite__delete" type="button" onClick={() => dispatch(deleteFavouriteTeam(favouriteTeam.id))}>x</button>
                      </li>
                    ))}
                  </ul>
                </div>
                <LogOutButton />
              </>
            )}
        </nav>
      </aside>

      <button type="button" className="shadow" aria-label="shadow" onClick={changeNavState} />
    </div>
  );
}

export default SideMenu;
