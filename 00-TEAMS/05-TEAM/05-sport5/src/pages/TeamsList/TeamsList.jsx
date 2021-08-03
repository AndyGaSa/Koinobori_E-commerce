import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './TeamsList.scss';
import getTeams from '../../redux/actions/teams.creator';

export default function TeamsList() {
  const allTeamsPerLeague = useSelector((store) => store.countriesLeagues.teams);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeams('4328'));
  }, []);

  return (
    <>
      <ul>
        {allTeamsPerLeague.map((team) => (
          <li>
            <Link to={`/team/${team.id}`}>
              <img src={team.badge} alt={team.name} />
              <span>{`${team.name} (team?.shortName)`}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>

  );
}
