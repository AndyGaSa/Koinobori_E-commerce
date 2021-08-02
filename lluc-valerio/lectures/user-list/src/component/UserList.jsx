/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// import mockUsers from '../constants/users.mock';
// import UserForm from './UserForm';
import actionTypes from '../redux/actions/action.types';

export default function UserList() {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const [inputValue, setInputValue] = useState('');

  function addUser() {
    if (inputValue.trim().length > 0) {
      dispatch({
        type: actionTypes.ADD_USER,
        userName: inputValue
      });
      setInputValue('');
    } else {
      setInputValue('');
      alert('You need to insert a name for the new user.');
    }
  }

  return (
    <section className="users">
      <h2>User&apos;s List</h2>
      <label htmlFor="addUser">
        <input
          type="text"
          name="addUser"
          id="addUser"
          placeholder="Add New User"
          value={inputValue}
          onChange={((event) => setInputValue(event.target.value))}
        />
        <button
          className="addUser-button"
          type="button"
          onClick={addUser}
        >
          Add User

        </button>
      </label>
      <ul className="users-list">
        {
          users.map((user) => (
            <>
              <li className="users-list__element">
                <Link to={`/userForm/${user.id}`}>
                  <span className="user-list__name">{user.name}</span>
                </Link>
                <button
                  className="users-list__delete-button"
                  type="button"
                  onClick={() => {
                    dispatch({
                      type: actionTypes.DELETE_USER,
                      user
                    });
                  }}
                >
                  X
                </button>
              </li>
            </>
          ))
        }
      </ul>
    </section>
  );
}
