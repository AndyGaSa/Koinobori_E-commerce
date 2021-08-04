import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

export default function ListConstructor() {
  const data = useSelector((store) => store.constructor);
  return (
    <section className="constructor-list">

      {data[0]?.map((constructor) => (
        <button className="constructor" type="button">
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

      ))}

    </section>
  );
}
