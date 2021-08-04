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
            <a href="/" className="back">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDMzMC4wMDIgMzMwLjAwMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IlhNTElEXzIyN18iIGQ9Ik0yMzMuMjUsMzA2LjAwMUwxMjcuNSwxNjUuMDA1TDIzMy4yNSwyNC4wMDFjNC45NzEtNi42MjgsMy42MjctMTYuMDMtMy0yMWMtNi42MjctNC45NzEtMTYuMDMtMy42MjYtMjEsMyAgTDk2Ljc1LDE1Ni4wMDVjLTQsNS4zMzMtNCwxMi42NjcsMCwxOGwxMTIuNSwxNDkuOTk2YzIuOTQ3LDMuOTMsNy40NTEsNi4wMDEsMTIuMDEyLDYuMDAxYzMuMTMxLDAsNi4yOS0wLjk3OCw4Ljk4OC0zLjAwMSAgQzIzNi44NzgsMzIyLjAzLDIzOC4yMjEsMzEyLjYyOCwyMzMuMjUsMzA2LjAwMXoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="
              />

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
          </div>
          <img src="https://www.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/2col-retina/image.png" alt="Lando Norris" />
        </header>
        <section className="championship-standing">
          <h5>Championship Standing</h5>
          <div className="championship-standing__data">
            <span className="postion">{driver?.position}</span>
            <div className="points">
              <span className="points__number">{driver?.points}</span>
              <span className="points__pts">PTS</span>
            </div>
          </div>
          <div className="season">
            <h3>2021 Season</h3>
            <section className="season__data">
              <div className="podiums">
                <h5>Podiums</h5>
                <span className="podiums-total">{driver?.wins}</span>
              </div>
              <div className="dhl">
                <h5> DHL Fastest Lap</h5>
                <span className="fastest-lap">0</span>
              </div>
              <div className="gps">
                <h5>GPs Entered</h5>
                <span className="gps-entered">10</span>
              </div>
            </section>
          </div>
        </section>
      </>
    )
  );
}
