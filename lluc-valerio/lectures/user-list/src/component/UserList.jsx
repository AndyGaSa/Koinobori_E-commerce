// import React, { useState } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';

import users from '../constants/users.mock';
import actionTypes from '../redux/actions/action.types';

export default function UserList() {
  const dispatch = useDispatch();
  // const [usersList, setUsersList] = useState(users);

  // function deleteUser(user) {
  //   setUsersList(...usersList);
  // }

  return (
    <>
      <h2>User&apos;s List</h2>
      <ul>
        {
          users.map((user) => (
            <>
              <li>
                {user.name}
                <button
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
    </>
  );
}
