/* eslint-disable react/prop-types */
import React from 'react';
import usersMock from '../constantUsersList.js/user.mock';

export default function UsersList() {
  return (
    <>
      <div>
        <ul className="userList__list">
          {usersMock.map((user) => (
            <li>
              <span className="list__userId">{user.id}</span>
              <span className="list__userName">{user.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
