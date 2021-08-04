import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import getTeamDetails from '../../redux/actions/sports.creator';

export default function TeamDetail() {
  const teamDetails = useSelector((store) => store.countriesLeagues);
  const dispatch = useDispatch();
  const { teamId } = useParams();

  useEffect(() => {
    dispatch(getTeamDetails(teamId));
  }, [teamId]);

  return (
    <>
      <div>
        <div>
          <div>
            <a href={teamDetails.instagram}> instagram</a>
            <a href={teamDetails.twitter}> twitter</a>
            <a href={teamDetails.facebook}> facebook</a>
            <a href={teamDetails.youtube}> youtube</a>
            <a href={teamDetails.teamPage}> www</a>
          </div>
          <img src={teamDetails.badge} alt="team-logo" />
        </div>
        <div>
          <h2>{teamDetails.name}</h2>
          <div>
            <h3>{`Sport: ${teamDetails.sport}`}</h3>
            <h3>{`Country: ${teamDetails.country}`}</h3>
            <h3>{`City: ${teamDetails.city}`}</h3>
            <h3>{`League: ${teamDetails.league}`}</h3>
            <h3>{`Stadium: ${teamDetails?.StadiumName}`}</h3>
          </div>
        </div>
        <img src={teamDetails.equipment} alt="team-jersey" />
      </div>
      <p>{teamDetails.description}</p>
    </>
  );
}
