import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getLeagues from '../../redux/actions/sports.creator';
import './LeaguesList.css';

export default function LeaguesList() {
  const allLeagues = useSelector((store) => store.leagues);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLeagues('Soccer'));
  }, []);

  return (
    <main className="leagues__container">
      <nav>
        <input type="text" placeholder="Filter" />
        <select>
          <option value="Favourites" label="Favourites" />
          <option value="Alphabetically" label="Alphabetically" />
        </select>
      </nav>
      <ul className="leagues">
        {
        Object.entries(allLeagues).map((country) => (
          <div className="leagues__block">
            <li className="leagues__country">{country[0].toUpperCase()}</li>
            <ul className="leagues__all-leagues">
              {country[1].map((league) => (
                <li className="leagues__name">
                  <img src={league.badge} alt={league.name} className="leagues__badge" />
                  {league.name}
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
