import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavouriteLeague, deleteFavouriteLeague, getLeagues } from '../../redux/actions/sports.creator';
import './LeaguesList.scss';
import SportsSelector from '../../components/SportsSelector/SportsSelector';
import { leagueIsInFavourites } from '../../service/favourites-local-storage';

export default function LeaguesList() {
  const allLeagues = useSelector((store) => store.countriesLeagues.leagues);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLeagues('Soccer'));
  }, []);

  function changeFavourite(league, event) {
    const button = event.target;
    if (button.className.includes('active')) {
      dispatch(deleteFavouriteLeague(league.id));
      button.className = 'leagues__favourite-button';
    } else {
      dispatch(addFavouriteLeague(league));
      button.className = 'leagues__favourite-button leagues__favourite-button--active';
    }
  }

  function favouriteClassCheck(leagueId) {
    return leagueIsInFavourites(leagueId)
      ? 'leagues__favourite-button leagues__favourite-button--active'
      : 'leagues__favourite-button';
  }

  return (
    <main className="leagues__container">
      <SportsSelector />
      <form>
        <input type="text" placeholder="Filter" />
        <select>
          <option value="Favourites" label="Favourites" />
          <option value="Alphabetically" label="Alphabetically" />
        </select>
      </form>
      <ul className="leagues">
        {
        Object.entries(allLeagues).map((country) => (
          <div key={`${country[0]}-container`} className="leagues__block">
            <li key={`${country[0]}-name`} className="leagues__country">{country[0].toUpperCase()}</li>
            <ul key={`${country[0]}-league`} className="leagues__all-leagues">
              {country[1].map((league) => (
                <li key={league.id} className="leagues__league">
                  <img src={league.badge} alt={league.name} className="leagues__badge" />
                  <span className="leagues__name">{league.name}</span>
                  <button className={favouriteClassCheck(league.id)} type="button" aria-label="Add to favourites" onClick={(event) => changeFavourite(league, event)}><i className="fas fa-star" /></button>
                </li>
              ))}
            </ul>
          </div>
        ))
      }
      </ul>
    </main>
  );
}
