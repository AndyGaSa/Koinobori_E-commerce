import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

export default function ListDriver() {
  const data = useSelector((store) => store.drivers);
  return (
    <section className="constructor-list">

      {data[0]?.map((driver) => (
        <button className="constructor" type="button">
          <section className="constructor-data">
            <section className="data__main">
              <span className="data__main-number">{driver.position}</span>
              <div className={driver.Constructors[0].constructorId} />
              <div className="main-name-container">
                <p className="data__main-firstname">{driver.Driver.givenName}</p>
                <p className="data__main-surname">{driver.Driver.familyName}</p>
              </div>
            </section>
            <section className="data__pts">
              <div className="pts__number">
                <p className="number">
                  {driver.points}
                </p>
                <p>
                  PTS
                </p>
              </div>
            </section>
          </section>
        </button>

      ))}

    </section>

  );
}
