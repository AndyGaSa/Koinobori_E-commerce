/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import './Person.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addFriend } from '../redux/actions/actionCreator';

export default function Person({ personData }) {
  const dispatch = useDispatch();
  const { _id } = useSelector((store) => store.user);
  function manageClick() {
    const newData = {
      friends: [{
        _id: personData._id,
      }],
    };
    dispatch(addFriend(newData, _id));
  }
  return (
    <div className="person__container">
      <img className="person__picture" src={personData?.picture} alt="" />
      <div className="person__texts">
        <h3>{personData?.name}</h3>
        <p>{personData?.favoriteFruit}</p>
      </div>
      <span>{personData?.age}</span>
      <button type="button" onClick={() => manageClick()}>Add</button>
    </div>
  );
}
