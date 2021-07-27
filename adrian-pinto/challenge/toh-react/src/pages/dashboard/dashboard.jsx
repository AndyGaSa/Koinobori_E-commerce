/* eslint-disable no-console */
import React from 'react';
import callHeroe from '../../modules/fetch-api';

const dashboard = ({ test }) => {
  const { status, heroe } = callHeroe('all');
  console.log(status);
  console.log(heroe);

  return (
    <>
      <h1>Hero Dashboard</h1>
      <p>{test}</p>
      <ul>
        <li>{heroe[0].name}</li>
        <li>Hero 2</li>
        <li>Hero 3</li>
        <li>Hero 4</li>
      </ul>
    </>
  );
};

export default dashboard;
