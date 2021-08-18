/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './Friend.css';

export default function Friend({ friendData }) {
  return (
    <div className="friend-div">
      <img className="friend-image" src={friendData.picture} alt="jordi" border="0" />
      <button className="friend-button" type="button">+</button>
      <button className="foe-button" type="button">-</button>
    </div>
  );
}
