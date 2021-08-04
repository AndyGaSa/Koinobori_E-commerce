/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

import './Details.drivers.styles.scss';

export default function DriverDetails() {
  const drivers = useSelector((store) => store?.drivers);
  const [driver, setDriver] = useState();
  const { driverId } = useParams();
  console.log(driverId);

  // eslint-disable-next-line no-restricted-syntax

  useEffect(() => {
    let aux;
    drivers && (aux = [0, ...drivers]);
    let y = [];
    aux && ([, y] = aux);
    const foundDriver = y && y.find((currentDriver) => currentDriver.Driver.driverId === driverId);
    setDriver(foundDriver);
  }, [drivers, driverId]);

  return (
    drivers && (
      <>
        <header className="driver-details">
          <div className="back-button__container">
            <a href="/">
              <img className="back" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTM3OS42NDQsNDc3Ljg3MmwtMjA3LjI5OS0yMDcuNzNjLTcuNzk4LTcuNzk4LTcuNzk4LTIwLjQ4NiwwLjAxNS0yOC4yOTlMMzc5LjY0MywzNC4xMjggICAgYzcuODAzLTcuODE5LDcuNzg5LTIwLjQ4Mi0wLjAyOS0yOC4yODRjLTcuODE5LTcuODAzLTIwLjQ4Mi03Ljc5LTI4LjI4NCwwLjAyOUwxNDQuMDYxLDIxMy41NzQgICAgYy0yMy4zOTQsMjMuMzk0LTIzLjM5NCw2MS40NTktMC4wMTUsODQuODM4TDM1MS4zMyw1MDYuMTI3YzMuOTA3LDMuOTE1LDkuMDMxLDUuODczLDE0LjE1Nyw1Ljg3MyAgICBjNS4xMTEsMCwxMC4yMjQtMS45NDgsMTQuMTI4LTUuODQ0QzM4Ny40MzMsNDk4LjM1NCwzODcuNDQ2LDQ4NS42OTEsMzc5LjY0NCw0NzcuODcyeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4=" />
              {' '}

            </a>
          </div>
          <div className="header-container">
            <div className="container-details">
              <div className={`${driver?.Constructors[0].constructorId}s`} />
              <section className="driver-details__title">
                <span className="driver-name">
                  {driver?.Driver.givenName}
                </span>
                <span className="driver-surname">
                  {driver?.Driver.familyName}
                </span>
                <div className="driver-constructor">
                  <span className="driver-number">
                    {driver?.Driver.permanentNumber}
                  </span>
                  <span className="driver-constructor">{driver?.Constructors[0].name}</span>
                </div>
              </section>

            </div>
            <div className="foto-piloto" />
          </div>
        </header>
        <section className="championship">
          <div className="championship-standing-container">
            <div className="container-champ">
              <h5>Championship Standing</h5>
              <div className="championship-standing__data">
                <span className="postion">{driver?.position}</span>
              </div>
            </div>

            <div className={`${driver?.Constructors[0].constructorId}points`}>
              <span className="points__number">{driver?.points}</span>
              <span className="points__pts">PTS</span>
            </div>
          </div>
          <div className="season">
            <h3>2021 Season</h3>
            <section className="season__data">
              <div className={`${driver?.Constructors[0].constructorId}podiums`} />
              <div className="podiums">
                <h5>Podiums</h5>
                <span className="podiums-total">{driver?.wins}</span>
              </div>
              <div className="podiums">
                <h5> DHL Fastest Lap</h5>
                <span className="podiums-total">0</span>
              </div>
              <div className="podiums">
                <h5>GPs Entered</h5>
                <span className="podiums-total">10</span>
              </div>
            </section>
          </div>
        </section>
      </>
    )
  );
}
