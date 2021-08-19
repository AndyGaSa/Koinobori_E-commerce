/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './Friend.scss';

export default function Friend({ picture, name }) {
  console.log(picture);
  return (
    <div className="friend-div">
      <img className="friend-image" src={picture} alt={name} border="0" />

      <button className="foe-button" type="button">-</button>
    </div>
  );
}
