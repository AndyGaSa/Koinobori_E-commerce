import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import loadUsers from '../../redux/actions/creators/users';
import { addFriend } from '../../redux/actions/creators/friends';

export default function App() {
  const usersList = useSelector(({ users }) => users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsers());
  }, []);
  return (
    <div className="user-list-container">
      <h1>User List</h1>
      <main>
        <ul>
          {usersList.map((user) => (
            <li>
              <button
                type="button"
              >
                -
              </button>
              {user.name}
              <button
                type="button"
                onClick={dispatch(addFriend(user))}
              >
                +
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
