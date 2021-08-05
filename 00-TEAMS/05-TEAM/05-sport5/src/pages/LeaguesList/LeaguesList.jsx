import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLeagues } from '../../redux/actions/sports.creator';
import { addFavouriteLeague, deleteFavouriteLeague } from '../../redux/actions/favourites.creator';
import './LeaguesList.scss';
import SportsSelector from '../../components/SportsSelector/SportsSelector';

export default function LeaguesList() {
  const leaguesByCountriesApi = useSelector((store) => store.countriesLeagues);
  const favourites = useSelector((store) => store.favourites);
  const dispatch = useDispatch();
  const { sportId = 'Soccer' } = useParams();

  const [filterValue, setFilterValue] = useState('');
  const [leaguesByCountries, setLeaguesByCountries] = useState(leaguesByCountriesApi);

  useEffect(() => {
    dispatch(getLeagues(sportId));
  }, [sportId]);

  useEffect(() => {
    setLeaguesByCountries(leaguesByCountriesApi);
  }, [leaguesByCountriesApi]);

  function filterLeagues(event) {
    const filter = event.target.value;
    const filteredLeagues = Object.entries(leaguesByCountriesApi).reduce((acc, country) => {
      if (country[0].includes(filter.toLowerCase())) {
        [, acc[country[0]]] = country;
      } else {
        country[1]?.forEach((league) => {
          if (league.name.toLowerCase().includes(filter.toLowerCase())) {
            if (!acc[country[0]]) {
              acc[country[0]] = [];
            }

            acc[country[0]] = [
              ...acc[country[0]],
              league
            ];
          }
        });
      }

      return acc;
    }, {});

    setFilterValue(filter);
    setLeaguesByCountries(filteredLeagues);
  }

  function changeFavourite(league, event) {
    const button = event.target;
    if (button.className.includes('active')) {
      dispatch(deleteFavouriteLeague(league.id));
    } else {
      dispatch(addFavouriteLeague(league));
    }
  }

  function openCloseCountry(event) {
    const blockElement = event.target.parentElement.parentElement;
    if (blockElement.className.includes('closed')) {
      blockElement.className = 'leagues__block';
    } else {
      blockElement.className = 'leagues__block leagues__block--closed';
    }
  }

  function leagueIsInFavourites(leagueId) {
    return favourites.favouriteLeagues.some(({ id }) => id === leagueId);
  }

  return (
    <main className="leagues__container">
      <SportsSelector />
      <form>
        <input type="text" placeholder="Filter by countries/leagues" value={filterValue} onChange={(event) => filterLeagues(event)} />
      </form>
      <ul className="leagues">
        {
        (Object.entries(leaguesByCountries)?.length
        && Object.entries(leaguesByCountries)[0][1]?.length
        && typeof Object.entries(leaguesByCountries)[0][1] === 'object')
        && Object.entries(leaguesByCountries).map((country) => (
          <div key={`${country[0]}-container`} className="leagues__block">
            <li key={`${country[0]}-name`} className="leagues__country">
              <button type="button" onClick={(event) => openCloseCountry(event)}>{country[0].toUpperCase()}</button>
            </li>
            <ul id={`${country[0]}-leagues`} key={`${country[0]}-league`} className="leagues__all-leagues">
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
