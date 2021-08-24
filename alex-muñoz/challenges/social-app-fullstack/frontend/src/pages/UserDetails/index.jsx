/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadCurrentUser } from '../../redux/actions/creators/currentUser';
import FriendsList from '../../components/FriendsList';

export default function CurrentUser() {
  const user = useSelector((store) => store.currentUser);
  const dispatch = useDispatch();
  const { userId } = useParams();
  useEffect(() => { (dispatch(loadCurrentUser(userId))); }, []);

  return (
    <div className="user-details">
      <h1>{`${user.name} User Details`}</h1>
      <main>
        <CurrentUser />
        <FriendsList />
      </main>
    </div>
  );
}
