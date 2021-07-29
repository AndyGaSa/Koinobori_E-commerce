import React from 'react';
import { Link } from 'react-router-dom';
import Users from '../constants/heroes.mock';

export default function Dashboard() {
  return (
    <>
      <h1>User List</h1>
      <ul>
        {
              Users.map((user) => (
                <li>
                  <Link to={`/detail/${user.id}`}>
                    <span>{user?.name}</span>
                  </Link>

                </li>
              ))
          }
      </ul>
    </>
  );
}
