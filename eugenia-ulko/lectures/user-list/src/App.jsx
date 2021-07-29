import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import actionTypes from './Redux/actions/action.types';

function User() {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const [inputValue, setInputValue] = useState();
  const [index, setIndex] = useState();

  function saveUser() {
    if (!inputValue.trim()) return;
    dispatch({
      type: actionTypes.CREATE_USER,
      user: inputValue
    });

    setInputValue('');
  }

  function updateUser() {
    if (!inputValue.trim()) return;
    dispatch({
      type: actionTypes.UPDATE_USER,
      user: inputValue,
      index
    });

    setInputValue('');
  }

  return (
    <>
      <div className="user-list-container">
        <h2>User List</h2>
        <label htmlFor="user-input">

          <input
            type="text"
            name=""
            className="user-input"
            value={inputValue}
            onChange={((event) => setInputValue(event.target.value))}
          />
        </label>

        <ul className="items-container">
          {
            users.map((user, userIndex) => (
              <li className="user-item">
                <button
                  className="user-item_button"
                  type="button"
                  onClick={() => {
                    setInputValue(user);
                    setIndex(userIndex);
                  }}
                >
                  {user}

                </button>

                <button
                  type="button"
                  onClick={() => dispatch({
                    type: actionTypes.DELETE_USER,
                    user
                  })}
                >
                  x

                </button>
              </li>
            ))
          }
        </ul>

        <button
          className="submit-button"
          type="button"
          onClick={saveUser}
        >
          Add User

        </button>

        <button
          className="submit-button"
          type="button"
          onClick={updateUser}
        >
          Update User

        </button>

      </div>
    </>
  );
}

export default User;
