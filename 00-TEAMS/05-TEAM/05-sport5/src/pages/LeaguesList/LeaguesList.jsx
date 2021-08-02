import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getLeagues from '../../redux/actions/sports.creator';

export default function LeaguesList() {
  const allLeagues = useSelector((store) => store.leagues);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLeagues('Soccer'));
  }, []);

  return (
    <ul>
      {
        Object.entries(allLeagues).map((country) => (
          <>
            <li>{country[0]}</li>
            <ul>
              {country[1].map((league) => <li>{league.name}</li>)}
            </ul>
          </>
        ))
      }
    </ul>
  );
}
