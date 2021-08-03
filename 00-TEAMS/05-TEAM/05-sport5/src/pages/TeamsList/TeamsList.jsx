import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import NotFound from '../NotFound/NotFound';

import './TeamsList.scss';
import getTeams from '../../redux/actions/teams.creator';

export default function TeamsList() {
  const allTeamsPerLeague = useSelector((store) => store.countriesLeagues.teams);
  const dispatch = useDispatch();
  const { leagueId } = useParams();

  useEffect(() => {
    dispatch(getTeams(leagueId));
  }, [leagueId]);

  return (
    <>
      <ul>
        {allTeamsPerLeague?.length ? allTeamsPerLeague.map((team) => (
          <li>
            <Link to={`/team/${team.id}`}>
              <img src={team.badge} alt={team.name} />
              <span>{team.name}</span>
            </Link>
            <button type="button" aria-label="Add to favourites"><i className="fas fa-star" /></button>
          </li>
        ))
          : <NotFound />}
      </ul>
    </>

  );
}
