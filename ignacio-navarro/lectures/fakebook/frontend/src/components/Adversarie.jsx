/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './Adversarie.scss';

export default function Friend({ adversarieData }) {
  return (
    <div className="adversarie-div">
      <img className="adversarie-image" src={adversarieData.picture} alt="jordi" border="0" />
      <button className="adversarie-button" type="button">-</button>
    </div>
  );
}
