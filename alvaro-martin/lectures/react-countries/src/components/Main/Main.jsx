import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadCountries } from '../../redux/actions/actionCreators';

import './style.css';

export default function Main() {
  const countries = useSelector((store) => store.countries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCountries());
  }, []);
  return (
    <>
      <h1>COUNTRIES</h1>
      <section className="countries">
        {countries?.map(({ name, flag, capital }) => (
          <div className="country">
            <picture className="countries-flag tooltip">
              <img className="countries-flag tooltip" src={flag} alt="" srcSet="" />
              <p className="tooltiptext">{name}</p>
              <p className="tooltiptext">
                Capital:
                {' '}
                {capital}
              </p>

            </picture>
          </div>
        ))}
      </section>
    </>
  );
}
