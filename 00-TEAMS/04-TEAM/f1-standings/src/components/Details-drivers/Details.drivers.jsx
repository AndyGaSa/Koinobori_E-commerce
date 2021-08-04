/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';

import './Details.css';

export default function DriverDetails() {
  const drivers = useSelector((store) => store?.drivers);
  const [driver, setDriver] = useState();
  const { driverId } = 'hamilton';
  // eslint-disable-next-line no-restricted-syntax

  useEffect(() => {
    let aux;
    drivers && (aux = [0, ...drivers]);
    let y = [];
    aux && ([, y] = aux);
    const foundDriver = y && y.find((currentDriver) => currentDriver.Driver.driverId === 'hamilton');
    setDriver(foundDriver);
  }, [drivers, driverId]);

  return (
    drivers && (
      <>
        <header className="driver-details">
          <div className="container-details">
            <a href="." className="back">backToDriversList</a>
            <section className="driver-details__title">
              <span className="driver-name">
                {driver?.Driver.givenName}
              </span>
              <span className="driver-surname">{driver?.Driver.familyName}</span>
              <div>
                <span className="driver-number">{driver?.Driver.permanentNumber}</span>
                <span className="driver-constructor">{driver?.Constructors.constructorId}</span>
              </div>
            </section>
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
