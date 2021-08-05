import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLeagues } from '../../redux/actions/sports.creator';
import { addFavouriteLeague, deleteFavouriteLeague } from '../../redux/actions/favourites.creator';
import './LeaguesList.scss';
import SportsSelector from '../../components/SportsSelector/SportsSelector';

export default function LeaguesList() {
  const leaguesByCountries = useSelector((store) => store.countriesLeagues);
  const favourites = useSelector((store) => store.favourites);
  const dispatch = useDispatch();
  const { sportId = 'Soccer' } = useParams();
  useEffect(() => {
    dispatch(getLeagues(sportId));
  }, [sportId]);

  function changeFavourite(league, event) {
    const button = event.target;
    if (button.className.includes('active')) {
      dispatch(deleteFavouriteLeague(league.id));
    } else {
      dispatch(addFavouriteLeague(league));
    }
  }

  function leagueIsInFavourites(leagueId) {
    return favourites.favouriteLeagues.some(({ id }) => id === leagueId);
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
        (Object.entries(leaguesByCountries)?.length
        && Object.entries(leaguesByCountries)[0][1]?.length)
        && Object.entries(leaguesByCountries).map((country) => (
          <div key={`${country[0]}-container`} className="leagues__block">
            <li key={`${country[0]}-name`} className="leagues__country">{country[0].toUpperCase()}</li>
            <ul key={`${country[0]}-league`} className="leagues__all-leagues">
              {country[1].map((league, index) => {
                const isFavourite = leagueIsInFavourites(league.id);
                return (
                  <li
                    data-testid={`${country[0]}-league-${index}`}
                    key={league.id}
                    className={isFavourite
                      ? 'leagues__league leagues__league--top'
                      : 'leagues__league'}
                  >
                    <Link to={`/league/${league.id}`}>
                      <img src={league.badge} alt={league.name} className="leagues__badge" />
                      <span className="leagues__name">{league.name}</span>
                    </Link>
                    <button
                      data-testid={`${country[0]}-league-${index}-favourite`}
                      className={isFavourite
                        ? 'leagues__favourite-button leagues__favourite-button--active'
                        : 'leagues__favourite-button'}
                      type="button"
                      aria-label="Add to favourites"
                      onClick={(event) => changeFavourite(league, event)}
                    >
                      <i className="fas fa-star" />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))
      }
      </ul>
    </main>
  );
}
