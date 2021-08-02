import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getLeagues from '../../redux/actions/sports.creator';
import './LeaguesList.css';
import SportsSelector from '../../components/Sports-Selector/Sports-Selector';

export default function LeaguesList() {
  const allLeagues = useSelector((store) => store.leagues);
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
          <div className="leagues__block">
            <li className="leagues__country">{country[0].toUpperCase()}</li>
            <ul className="leagues__all-leagues">
              {country[1].map((league) => (
                <li className="leagues__league">
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
