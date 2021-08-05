/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import driverImg from '../../assets/driver.img';

import './Details.drivers.styles.scss';

export default function DriverDetails() {
  const drivers = useSelector((store) => store?.drivers);
  const [driver, setDriver] = useState();
  const { driverId } = useParams();

  const { img } = driverImg?.find((e) => e.driverId === driverId);
<<<<<<< HEAD
=======
  // const { car } = carImg?.find((e) => e.constructorId === driver?.Constructors[0]?.constructorId);

  // eslint-disable-next-line no-restricted-syntax
>>>>>>> 7ee774298a9452fd76a92db694fe9dfb443d76ab

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
      <div>
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
                <span data-testid={`driver-name-${driver?.Driver.givenName}`} className="driver-name">
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
            <div className="foto-piloto-container">
              <img className="foto-piloto" src={img} alt="" />
            </div>
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
              <div className="points-container">
                <span className="points__number">{driver?.points}</span>
                <span className="points__pts">PTS</span>
              </div>
            </div>
          </div>
          <div className="championship-container">
            <div className="season">
              <h3>2021 Season</h3>
              <section className="season__data">
                <div className={`${driver?.Constructors[0].constructorId}podiums`} />
                <div className="podiums">
                  <h5>Podiums</h5>
                  <span className="podiums-total">{driver?.wins}</span>
                </div>
                <div className="podiums">
                  <h5> Nationality</h5>
                  <span className="podiums-total">{driver?.Driver.nationality}</span>
                </div>
                <div className="podiums">
                  <h5>Code</h5>
                  <span className="podiums-total">{driver?.Driver.code}</span>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    )
  );
}
