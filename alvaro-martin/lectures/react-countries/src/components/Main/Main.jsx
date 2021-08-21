import React from 'react';
import { useSelector } from 'react-redux';
import './style.css';

export default function Main() {
  const countries = useSelector((store) => store.countries);
  return (
    <>
      <h1>funciona</h1>
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
