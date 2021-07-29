/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import mockUsers from '../constants/users.mock';
import actionTypes from '../redux/actions/action.types';

export default function UserList() {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const [inputValue, setInputValue] = useState('');

  // const [usersList, setUsersList] = useState(users);
  function addUser() {
    if (inputValue.trim().length > 0) {
      // eslint-disable-next-line no-debugger
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
                <button
                  className="users-lists__add-button"
                  type="button"
                  onClick={() => {

                  }}
                >
                  {user.name}
                </button>
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
