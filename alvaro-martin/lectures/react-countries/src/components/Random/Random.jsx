import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { randomCountry } from '../../redux/actions/actionCreators';

import('./style.css');

export default function Random() {
  const country = useSelector((store) => store.random);
  const countries = useSelector((store) => store.countries);

  const dispatch = useDispatch();
  useEffect(() => {
    // eslint-disable-next-line no-debugger
    if (countries.length > 0) {
      dispatch(randomCountry(countries));
    }
  }, [countries]);

  return (
    <section className="country-container">
      <h2>RANDOM COUNTRY</h2>
      <button type="button" onClick={() => dispatch(randomCountry(countries))}>random</button>
      <picture className="countries-flag tooltip">
        <img className="countries-flag tooltip" src={country?.flag} alt="" srcSet="" />
        <p className="tooltiptext">{country?.name}</p>
      </picture>
    </section>
  );
}
