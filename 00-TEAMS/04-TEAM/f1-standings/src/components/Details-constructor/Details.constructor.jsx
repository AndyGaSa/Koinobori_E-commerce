/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
/* eslint-disable no-undef */
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../Details-drivers/Details.drivers.styles.scss';
import logoC from '../../assets/cars.img';

export default function DetailsConstructor() {
  const { constructorId } = useParams();
  const constructor = constructorId;

  const constructorData = useSelector((store) => store?.constructor);
  const constructorFiltered = constructorData[0]?.find((e) => e?.Constructor?.constructorId === constructor);

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
  const { logo } = logoC.find((e) => e.constructorId === constructor);

  return (
    <>
      <header className="driver-details">
        <div className="back-button__container">
          <a href="/constructorList">
            <img className="back" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTM3OS42NDQsNDc3Ljg3MmwtMjA3LjI5OS0yMDcuNzNjLTcuNzk4LTcuNzk4LTcuNzk4LTIwLjQ4NiwwLjAxNS0yOC4yOTlMMzc5LjY0MywzNC4xMjggICAgYzcuODAzLTcuODE5LDcuNzg5LTIwLjQ4Mi0wLjAyOS0yOC4yODRjLTcuODE5LTcuODAzLTIwLjQ4Mi03Ljc5LTI4LjI4NCwwLjAyOUwxNDQuMDYxLDIxMy41NzQgICAgYy0yMy4zOTQsMjMuMzk0LTIzLjM5NCw2MS40NTktMC4wMTUsODQuODM4TDM1MS4zMyw1MDYuMTI3YzMuOTA3LDMuOTE1LDkuMDMxLDUuODczLDE0LjE1Nyw1Ljg3MyAgICBjNS4xMTEsMCwxMC4yMjQtMS45NDgsMTQuMTI4LTUuODQ0QzM4Ny40MzMsNDk4LjM1NCwzODcuNDQ2LDQ4NS42OTEsMzc5LjY0NCw0NzcuODcyeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4=" />
            {' '}

          </a>
        </div>
        <div className="header-container">
          <div className="container-details">
            <div className={`${constructor}s`} />
            <section className="driver-details__title">
              <span data-testid={`constructor-Name-${constructor}`} className="constructor-name">
                {constructor}
              </span>
            </section>

          </div>
          <div className="foto-piloto-container">
            <img className="foto-piloto" src={logo} alt="" />
          </div>
        </div>
      </header>
      <section className="championship">
        <div className="championship-standing-container">
          <div className="container-champ">
            <h5>Championship Standing</h5>
            <div className="championship-standing__data">
              <span className="postion">{constructorFiltered?.position}</span>
            </div>
          </div>
          <div className={`${constructor}points`}>
            <div className="points-container">
              <span className="points__number">{constructorFiltered?.points}</span>
              <span className="points__pts">PTS</span>
            </div>
          </div>
        </div>
        <div className="championship-container">
          <div className="season">
            <h3>2021 Season</h3>
            <section className="season__data">
              <div className={`${constructor}podiums`} />
              <div className="podiums">
                <span>Highest Finish</span>

                <span className="podiums-total">
                  {bestposition}
                  {' '}
                  X
                  {' '}
                  {count}
                </span>

              </div>
              <div className="podiums">
                <h5> Pole Positions</h5>
                <span className="podiums-total">{polePosition}</span>
              </div>
              <div className="podiums">
                <h5>Win Races</h5>
                <span className="podiums-total">{constructorFiltered?.wins}</span>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
