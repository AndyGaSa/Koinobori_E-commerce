/* eslint-disable no-undef */
import React from 'react';
// import { useSelector } from 'react-redux';

export default function DetailsConstructor() {
  const constructor = 'mclaren';

  // const data = useSelector((store) => store.points);

  // data[0]?.Results.map((e) => <p>{e.Driver.familyName}</p>)

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
          <div className="championship-standing__total">a</div>
          <div className="championship-standing__pts">
            <div className="pts__value">NUmero de puntos</div>
            <span className="pts__img">pts</span>
          </div>
        </div>

        <span>2021 Season</span>

        <div>
          <span>Highest Finish</span>
          <span>23423</span>
        </div>
        <div>
          <span>Pole Positions</span>
          <span>23423</span>
        </div>
        <div>
          <span>Fastest Laps</span>
          <span>23423</span>
        </div>
      </section>

      <section className="team">
        <span>TEAM</span>
        <div className="team__container">
          <div className="container_pilot1">
            <img className="pilot1__img" src="" alt="" />
            <p className="pilot1__name" />
            <p className="pilot1__lastname" />
          </div>
          <div className="container_pilot2">
            <img className="pilot2__img" src="" alt="" />
            <p className="pilot2__name" />
            <p className="pilot2__lastname" />
          </div>
        </div>
      </section>

    </>
  );
}
