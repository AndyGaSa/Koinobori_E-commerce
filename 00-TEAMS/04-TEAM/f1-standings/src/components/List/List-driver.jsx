import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function ListDriver() {
  const data = useSelector((store) => store?.drivers);
  return (
    <>
      <Header />
      <section className="constructor-list">

        {data[0]?.map((driver) => (
        // eslint-disable-next-line prefer-template
          <Link to={'/driverDetails/' + driver.Driver.driverId}>
            <button
              className="constructor"
              type="button"
            >
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
          </Link>

        ))}

      </section>
      <Footer />
    </>
  );
}
