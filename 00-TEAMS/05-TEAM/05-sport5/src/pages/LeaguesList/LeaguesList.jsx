import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getLeagues from '../../redux/actions/sports.creator';

export default function LeaguesList() {
  const allLeagues = useSelector((store) => store.leagues);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLeagues('Soccer'));
  }, []);

  useEffect(() => {
    console.log(allLeagues);
  }, [allLeagues]);

  return (
    <ul>
      {
      allLeagues?.map((countryLeagues) => <li>{countryLeagues.country}</li>)
      }
    </ul>
  );
}
