import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers } from '../redux/actions/actionCreator';
import UserList from '../components/UserList';
import './AllUsers.scss';

export default function AllUsers() {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, []);
  return (
    <>
      <input className="allusers__input" placeholder="Look for users" />
      <div className="allusers__list-container">
        <ul className="allusers__list">
          {(users.length > 0)
          && users.map((user) => (
            <li>
              <UserList key={user.name} userlistProp={user} />
            </li>
          ))}
        </ul>
        <button className="allusers__button" type="button">Back</button>
      </div>
    </>
  );
}
