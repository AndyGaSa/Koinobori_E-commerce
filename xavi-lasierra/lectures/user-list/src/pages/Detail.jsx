import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import UserForm from '../components/UserForm';

import actionTypes from '../redux/actions/action.types';

function Detail() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const users = useSelector((store) => store.users);
  const [user, setUser] = useState(users.find(({ id }) => id.toString() === userId));

  function changeUser(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  function changeAddressUser(event) {
    setUser({ ...user, address: { [event.target.name]: event.target.value } });
  }

  return (
    <main>
      <h2>
        <span>{`#${user.id}`}</span>
        {user.username}
      </h2>
      <UserForm user={user} changeUser={changeUser} changeAddressUser={changeAddressUser} />
      <button
        type="button"
        onClick={() => dispatch({
          type: actionTypes.UPDATE_USER,
          userData: user
        })}
      >
        Update
      </button>
    </main>
  );
}

export default Detail;
