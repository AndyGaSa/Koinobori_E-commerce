import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { randomCountry } from '../../redux/actions/actionCreators';

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
    <>
      <h2>Random</h2>
      <img className="countries-flag" src={country?.flag} alt="" srcSet="" />
      <p>{country?.name}</p>
      <button type="button" onClick={() => dispatch(randomCountry(countries))}>random</button>
      <section className="countries" />
    </>
  );
}
