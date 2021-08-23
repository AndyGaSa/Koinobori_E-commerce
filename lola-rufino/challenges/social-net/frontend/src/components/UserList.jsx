/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { addFriend } from '../redux/actions/actionCreator';
import './UserList.scss';

export default function UserList({ userlistProp }) {
  const dispatch = useDispatch();

  function handleFriend() {
    const newData = {
      friends: [{
        id: userlistProp._id,
        name: userlistProp.name
      }]
    };
    dispatch(addFriend(newData));
  }

  return (
    <div className="userlist__container">
      <button type="button" className="userlist__button">-</button>
      <img className="userlist__image" src={userlistProp.picture} alt={userlistProp.name} />
      <span>{userlistProp.name}</span>
      <button type="button" className="userlist__button" onClick={() => handleFriend()}>+</button>
    </div>
  );
}
