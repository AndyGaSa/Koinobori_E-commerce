/* eslint-disable react/prop-types */
import React from 'react';
import './UserList.scss';

export default function UserList({ userlistProp }) {
  return (
    <div className="userlist__container">
      <button type="button" className="userlist__button">-</button>
      <img className="userlist__image" src={userlistProp.picture} alt={userlistProp.name} />
      <span>{userlistProp.name}</span>
      <button type="button" className="userlist__button">+</button>
    </div>
  );
}
