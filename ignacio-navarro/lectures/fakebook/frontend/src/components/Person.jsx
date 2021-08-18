/* eslint-disable react/prop-types */
import React from 'react';
import './Person.scss';

export default function Person({ personData }) {
  return (
    <div className="person__container">
      <img className="person__picture" src={personData?.picture} alt="" />
      <div className="person__texts">
        <h3>{personData?.name}</h3>
        <p>{personData?.favoriteFruit}</p>
      </div>
      <span>{personData?.age}</span>
    </div>
  );
}
