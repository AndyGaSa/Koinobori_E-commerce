/* eslint-disable no-debugger */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import actionTypes from '../../redux/actions/actionTypes';

import UserForm from '../UserForm/UserForm';

export default function Details() {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();

  const { userId } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    if (userId) {
      const foundUser = users.find((currentUser) => currentUser.id === +userId);
      setUser(foundUser);
    }
  }, [userId]);

  function userChange(event) {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  }

  return (
    <div className="details">
      <h2>
        {user?.name.toUpperCase()}
        {' '}
        Details
      </h2>
      <div>
        <span>
          id:
        </span>
        {user?.id}
      </div>
      <UserForm user={user} userChange={userChange} />
      <button
        type="button"
        onClick={() => dispatch({
          type: actionTypes.UPDATE_USER,
          user
        })}
      >
        save

      </button>
    </div>
  );
}
