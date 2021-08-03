import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLeagues } from '../../redux/actions/sports.creator';
import './LeaguesList.scss';
import SportsSelector from '../../components/SportsSelector/SportsSelector';

export default function LeaguesList() {
  const allLeagues = useSelector((store) => store.countriesLeagues.leagues);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLeagues('Soccer'));
  }, []);

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
                  <i className="fas fa-star" />
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
