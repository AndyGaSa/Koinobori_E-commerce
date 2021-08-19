/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadCurrentUser } from '../../redux/actions/creators/currentUser';

export default function CurrentUser() {
  const user = useSelector((store) => store.currentUser);
  const dispatch = useDispatch();
  const { userId } = useParams();
  useEffect(() => { (dispatch(loadCurrentUser(userId))); }, []);

  return (
    <div className="user-details">
      <h2>Friends</h2>
      <ul>
        {user?.friends?.map((friend) => (
          <li>
            {friend.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
