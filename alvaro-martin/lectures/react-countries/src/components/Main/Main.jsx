import React from 'react';
import { useSelector } from 'react-redux';

export default function Main() {
  const countries = useSelector((store) => store.countries);
  return (
    <>
      <h1>funciona</h1>
      {countries?.map(({ name }) => (
        <p>{name}</p>
      ))}
    </>
  );
}
