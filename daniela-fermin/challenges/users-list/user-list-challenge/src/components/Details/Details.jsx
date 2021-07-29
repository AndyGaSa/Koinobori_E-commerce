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
      const foundUser = users.find((currentUser) => currentUser.id === userId);
      setUser(foundUser);
    }
  },
  [userId]);

  const userChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <h2>
        {user.name}
        {' '}
        Details
      </h2>
      <div>
        <UserForm user={user} userChange={userChange} />
      </div>
      <button
        type="button"
        onClick={dispatch({
          type: actionTypes.UPDATE_USER,
          user
        })}
      >
        Save
      </button>

    </>
  );
}
