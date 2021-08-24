/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './Adversarie.scss';

export default function Adversarie({ picture, name }) {
  console.log(picture);
  return (
    <div className="adversarie-div">
      <img className="adversarie-image" src={picture} alt={name} border="0" />

      <button className="adversarie-button" type="button">-</button>
    </div>
  );
}
