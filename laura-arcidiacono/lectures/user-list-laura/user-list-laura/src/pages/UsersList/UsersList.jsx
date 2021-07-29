/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function UsersList() {
  const users = useSelector((store) => store.users);

  return (
    <>
      <h3>This is the User List</h3>
      <div>
        <ul className="userList__list">
          {users.map((user) => (
            <li>
              <Link
                to={`/details/${user.id}`}
                key={user.id}
              >
                <span className="list__userId">{user.id}</span>
                <span className="list__userName">{user.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
