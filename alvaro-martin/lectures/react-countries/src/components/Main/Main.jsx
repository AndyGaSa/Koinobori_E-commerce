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
        {countries?.map(({ name, flag }) => (
          <div className="country">
            <p>{name}</p>
            <img className="countries-flag" src={flag} alt={name} />
          </div>
        ))}
      </section>
    </>
  );
}
