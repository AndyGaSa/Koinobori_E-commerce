import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import UserForm from '../../components/UserForm/UserForm';

import actionTypes from '../../redux/actions/action.types';
import './detail.css';

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

  function changeCompanyUser(event) {
    setUser({ ...user, company: { [event.target.name]: event.target.value } });
  }

  return (
    <main>
      <h2>
        <span>{`#${user.id}`}</span>
        {user.username}
      </h2>
      <UserForm
        user={user}
        changeUser={changeUser}
        changeAddressUser={changeAddressUser}
        changeCompanyUser={changeCompanyUser}
      />
      <button
        data-testid="update-button"
        className="user__update"
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
