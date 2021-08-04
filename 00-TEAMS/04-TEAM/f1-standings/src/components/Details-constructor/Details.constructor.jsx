/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-undef */
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './Details.constructo.scss';

export default function DetailsConstructor() {
  const { constructorId } = useParams();
  const constructor = constructorId;

  const constructorData = useSelector((store) => store?.constructor);
  const constructorFiltered = constructorData[0]?.find((e) => e?.Constructor?.constructorId === constructor);

  // eslint-disable-next-line no-unused-vars
  const driversData = useSelector((store) => store?.drivers);
  const racesData = useSelector((store) => store.races);

  const pilots = driversData[0]?.filter((e) => e?.Constructors[0]?.constructorId === constructor);

  const pilot1points = racesData?.map((e) => e?.Results?.filter((h) => h.Driver?.driverId === pilots[0]?.Driver?.driverId)).map((e) => e.map((h) => h.position));
  const bestPositionPilot1 = Math.min(...pilot1points);

  let countpilot1 = 0;

  for (let i = 0; i < pilot1points.length; i += 1) {
    if (+pilot1points[i][0] === +bestPositionPilot1) {
      countpilot1 += 1;
    }
  }

  const pilot2points = racesData?.map((e) => e?.Results?.filter((h) => h.Driver?.driverId === pilots[1]?.Driver?.driverId)).map((e) => e.map((h) => h.position));
  const bestPositionPilot2 = Math.min(...pilot2points);

  let countpilot2 = 0;

  for (let i = 0; i < pilot2points.length; i += 1) {
    if (+pilot2points[i][0] === +bestPositionPilot2) {
      countpilot2 += 1;
    }
  }

  const bestposition = (bestPositionPilot1 < bestPositionPilot2) ? bestPositionPilot1 : bestPositionPilot2;

  let count = 0;

  if (bestPositionPilot1 === bestPositionPilot2) {
    count = countpilot1 + countpilot2;
  } else {
    count = (bestPositionPilot1 < bestPositionPilot2) ? countpilot1 : countpilot2;
  }

  const polePositionPilot1 = racesData.map(({ Results }) => Results).map((e) => e.filter((h) => h.Driver.driverId === pilots[0]?.Driver?.driverId)).map((q) => q.map((r) => r.grid)).map((e) => e[0])
    .filter((grid) => grid === '1');
  const polePositionPilot2 = racesData.map(({ Results }) => Results).map((e) => e.filter((h) => h.Driver.driverId === pilots[1]?.Driver?.driverId)).map((q) => q.map((r) => r.grid)).map((e) => e[0])
    .filter((grid) => grid === '1');

  const polePosition = (polePositionPilot1.length < polePositionPilot2.length) ? polePositionPilot2.length : polePositionPilot1.length;

  return (
    <>

      <header>
        <div>
          <span className="driver">{constructor}</span>
          <img src="" alt="" />
        </div>
        <div className="car-picture" />
      </header>

      <section className="data">
        <div className="championship-standing">
          <div className="championship-standing__total">{constructorFiltered?.position}</div>
          <div className="championship-standing__pts">
            <div className="pts__value">{constructorFiltered?.points}</div>
            <span className="pts__img">pts</span>
          </div>
        </div>

        <span>2021 Season</span>

        <div>
          <span>Highest Finish</span>

          <span>
            {bestposition}
            {' '}
            X
            {' '}
            {count}
          </span>

        </div>
        <div>
          <span>Pole Positions</span>
          <span>{polePosition}</span>
        </div>
        <div>
          <span>Win Races</span>
          <span>{constructorFiltered?.wins}</span>
        </div>
      </section>
      {
  pilots
      && (
      <section className="team">
        <span>TEAM</span>
        <div className="team__container">
          <div className="container_pilot1">
            <img className="pilot1__img" src="" alt="" />
            <p className="pilot1__name">{pilots[0]?.Driver?.driverId}</p>
            <p className="pilot1__lastname" />
          </div>
          <div className="container_pilot2">
            <img className="pilot2__img" src="" alt="" />
            <p className="pilot2__name">{pilots[1]?.Driver?.driverId}</p>
            <p className="pilot2__lastname" />
          </div>
        </div>
      </section>
      )
}
    </>
  );
}
