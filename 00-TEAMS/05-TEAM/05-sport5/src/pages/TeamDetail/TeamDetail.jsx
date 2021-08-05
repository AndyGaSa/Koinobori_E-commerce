import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTeamDetails } from '../../redux/actions/sports.creator';
import './Teamdetails.scss';

export default function TeamDetail() {
  const teamDetails = useSelector((store) => store.sportsApi);
  const dispatch = useDispatch();
  const { teamId } = useParams();

  useEffect(() => {
    dispatch(getTeamDetails(teamId));
  }, [teamId]);

  return (

    <main className="details">
      <div className="details__banner">
        {teamDetails?.banner && <img src={teamDetails.banner} alt={`${teamDetails.name} banner`} />}
      </div>
      <section className="details__information">
        <img data-testid="team__badge" src={teamDetails.badge} alt="team-logo" className="details__badge" />
        <div className="details__main-information">
          <h2 className="details__name">{teamDetails.name}</h2>
          <section>
            <h3>
              Sport:
              <span>{teamDetails.sport}</span>
            </h3>
            <h3>
              Country:
              <span>{teamDetails.country}</span>
            </h3>
            {teamDetails.city ? (
              <h3>
                City:
                <span>{teamDetails.city}</span>
              </h3>
            ) : ''}
            {teamDetails.league ? (
              <h3>
                League:
                <span>{teamDetails.league}</span>
              </h3>
            ) : ''}
            {teamDetails.stadiumName ? (
              <h3>
                Stadium:
                <span>{teamDetails?.stadiumName}</span>
              </h3>
            ) : ''}
          </section>
        </div>
        <img src={teamDetails.equipment} alt="team-jersey" className="details__jersey" />
      </section>
      <p className="details__description">{teamDetails.description}</p>
      <section className="details__media">
        <a className="details__instagram" href={`https://${teamDetails.instagram}`}>
          <i className="fab fa-instagram" />
        </a>
        <a className="details__twitter" href={`https://${teamDetails.twitter}`}>
          <i className="fab fa-twitter" />
        </a>
        <a className="details__facebook" href={`https://${teamDetails.facebook}`}>
          <i className="fab fa-facebook-square" />
        </a>
        <a className="details__youtube" href={`https://${teamDetails.youtube}`}>
          <i className="fab fa-youtube" />
        </a>
        <a className="details__webPage" href={`https://${teamDetails.teamPage}`}>
          <i className="fas fa-globe" />
        </a>
      </section>
    </main>
  );
}
