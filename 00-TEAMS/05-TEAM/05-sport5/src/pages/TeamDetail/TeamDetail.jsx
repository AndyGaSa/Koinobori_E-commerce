import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTeamDetails } from '../../redux/actions/sports.creator';
import './Teamdetails.scss';

export default function TeamDetail() {
  const teamDetails = useSelector((store) => store.countriesLeagues);
  const dispatch = useDispatch();
  const { teamId } = useParams();

  useEffect(() => {
    dispatch(getTeamDetails(teamId));
  }, [teamId]);

  return (
    <>
      <main className="details__main">
        <img data-testid="team__badge" src={teamDetails.badge} alt="team-logo" className="details__badge" />
        <div>
          <h2>{teamDetails.name}</h2>
          <section className="details__info">
            <h3>{`Sport: ${teamDetails.sport}`}</h3>
            <h3>{`Country: ${teamDetails.country}`}</h3>
            {teamDetails.city ? <h3>{`City: ${teamDetails.city}`}</h3> : ''}
            {teamDetails.league ? <h3>{`League: ${teamDetails.league}`}</h3> : ''}
            {teamDetails.stadiumName ? <h3>{`Stadium: ${teamDetails?.stadiumName}`}</h3> : ''}

            <p className="details__description">{teamDetails.description}</p>
          </section>
        </div>
        <img src={teamDetails.equipment} alt="team-jersey" className="details__jersey" />
      </main>
      <section className="details__media">
        <a className="details__instagram" href={`https://${teamDetails.instagram}`}>
          {' '}
          <i className="fab fa-instagram" />
        </a>
        <a className="details__twitter" href={`https://${teamDetails.twitter}`}>
          {' '}
          <i className="fab fa-twitter" />
        </a>
        <a className="details__facebook" href={`https://${teamDetails.facebook}`}>
          {' '}
          <i className="fab fa-facebook-square" />
        </a>
        <a className="details__youtube" href={`https://${teamDetails.youtube}`}>
          {' '}
          <i className="fab fa-youtube" />
        </a>
        <a className="details__webPage" href={`https://${teamDetails.teamPage}`}>
          {' '}
          <i className="fas fa-globe" />
        </a>
      </section>
    </>
  );
}
