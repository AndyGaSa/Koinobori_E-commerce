import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addFavouriteTeam } from '../../redux/actions/favourites.creator';
import NotFound from '../NotFound/NotFound';

import './TeamsList.scss';
import { getTeams } from '../../redux/actions/sports.creator';

export default function TeamsList() {
  const allTeamsPerLeague = useSelector((store) => store.countriesLeagues);
  const dispatch = useDispatch();
  const { leagueId } = useParams();

  useEffect(() => {
    dispatch(getTeams(leagueId));
  }, [leagueId]);

  function changeFavourite(team) {
    dispatch(addFavouriteTeam(team));
  }

  return (
    <>
      <h2 className="TeamList__Title">TeamList title:</h2>
      <ul className="team">
        {allTeamsPerLeague?.length ? allTeamsPerLeague.map((team) => (
          <li className="team__block" key={team.name}>
            <Link to={`/team/${team.id}`}>
              <img src={team.badge} alt={team.name} className="team__badge" />
              <span className="team__name">{team.name}</span>
            </Link>
            <button
              type="button"
              aria-label="Add to favourites"
              onClick={(event) => changeFavourite(team, event)}
            >
              <i className="fas fa-star" key={team.id} />
            </button>
          </li>
        ))
          : <NotFound />}
      </ul>
    </>

  );
}
