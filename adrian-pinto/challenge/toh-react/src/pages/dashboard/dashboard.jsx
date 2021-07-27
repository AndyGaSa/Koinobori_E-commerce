/* eslint-disable no-console */
import React from 'react';
import callHeroe from '../../modules/fetch-api';

const dashboard = ({ test }) => {
  const { status, heroe } = callHeroe('all');
  const first = status === 'fetched' ? heroe[0] : null;
  const second = status === 'fetched' ? heroe[1] : null;
  const third = status === 'fetched' ? heroe[2] : null;
  const four = status === 'fetched' ? heroe[3] : null;
  return (
    <>
      <h1>Hero Dashboard</h1>
      <p>{test}</p>
      {status === 'fetched' && (
      <ul>
        <li>{first.name}</li>
        <li>{second.name}</li>
        <li>{third.name}</li>
        <li>{four.name}</li>
      </ul>
      )}
    </>
  );
};

export default dashboard;
