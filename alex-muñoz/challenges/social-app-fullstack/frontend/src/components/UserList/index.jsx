/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import loadUsers from '../../redux/actions/creators/users';
import SignUp from '../SignUp';

export default function App() {
  const usersList = useSelector(({ users }) => users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsers());
  }, []);
  return (
    <div className="user-list-container">
      <h1>User List</h1>
      <SignUp />
      <main>
        <ul>
          {usersList.map((user) => (
            <li key={`${user.name}`}>
              <Link to={`${user._id}`}>
                {user.name}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
