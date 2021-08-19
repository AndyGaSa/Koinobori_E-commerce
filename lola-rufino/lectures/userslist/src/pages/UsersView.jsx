/* eslint-disable no-lone-blocks */
import { React, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './UsersView.css';
import actionTypes from '../redux/actions/action.types';

export default function UsersView() {
  const users = useSelector((store) => store.users);
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  function createUser() {
    if (!inputValue.trim()) return;

    dispatch({
      type: actionTypes.CREATE_USER,
      data: inputValue
    });

    setInputValue('');
  }

  function deleteUser(user) {
    dispatch({
      type: actionTypes.DELETE_USER,
      data: user
    });
  }

  { /* const [newUser, setNewUser] = useState();

  function updateUser() {
    if (!inputValue.trim()) return;

    dispatch({
      type: actionTypes.UPDATE_USER,
      data: inputValue
    });

    setInputValue('');
  } */ }

  return (
    <div className="main-container">
      <Header />
      <input
        className="input"
        type="text"
        name="user"
        value={inputValue}
        onChange={((event) => setInputValue(event.target.value))}
      />
      <button
        className="add-button"
        type="button"
        onClick={createUser}
      >
        Add New User

      </button>
      <section>
        {users.map((user) => (
          <li>
            <Link to={`/DetailsView/${user.id}`}>
              {user.name}
            </Link>
            <button
              title="delete hero"
              type="button"
              className="delete-button"
              onClick={() => deleteUser(user)}
            >
              x
            </button>
          </li>
        ))}
      </section>
    </div>
  );
}
