import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import actionTypes from '../redux/actions/action.types';

export default function UserSearch() {
  const [inputValue, setInputValue] = useState('');
  //   const users = useSelector((store) => store.users);
  const dispatch = useDispatch();

  function searchUser(event) {
    setInputValue(event.target.value);
    dispatch({
      type: actionTypes.SEARCH_USERS,
      inputValue
    });
  }

  return (
    <section className="user-search">
      <h2>User&apos;s Search</h2>
      <label htmlFor="searchUser">
        <input
          type="text"
          name="searchUser"
          id="searchUser"
          placeholder="Search User"
          value={inputValue}
          onChange={searchUser}
        />
      </label>
    </section>
  );
}
