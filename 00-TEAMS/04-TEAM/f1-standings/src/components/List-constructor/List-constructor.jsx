import React from 'react';
import { useSelector } from 'react-redux';
import '../List/style.scss';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function ListConstructor() {
  const data = useSelector((store) => store.constructor);
  return (
    <>
      <Header />
      <section className="constructor-list">

        {data[0]?.map((constructor) => (
        // eslint-disable-next-line prefer-template
          <Link to={'/constructorDetails/' + constructor.Constructor.constructorId}>
            <button data-testid={`${constructor.Constructor.constructorId}`} className="constructor" type="button">
              <section className="constructor-data">
                <section className="data__main">
                  <span className="data__main-number">{constructor.position}</span>
                  <div className={constructor.Constructor.constructorId} />
                  <p className="data__main-name">{constructor.Constructor.name}</p>
                </section>
                <section className="data__pts">
                  <div className="pts__number">
                    <p className="number">
                      {constructor.points}
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
        <Footer />
      </section>
    </>
  );
}
