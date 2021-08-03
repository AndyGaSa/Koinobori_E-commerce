import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './TeamsList.scss';
import getTeams from '../../redux/actions/teams.creator';

export default function TeamsList() {
  const allTeamsPerLeague = useSelector((store) => store.countriesLeagues.teams);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeams('Soccer'));
  }, []);

  return (
    <>
      <ul>
        {allTeamsPerLeague.map((team) => <li>{team.name}</li>)}
      </ul>
    </>

  );
}
