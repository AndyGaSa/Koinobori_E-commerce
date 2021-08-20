/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { loadCurrentUser, addOrRemoveFriend } from '../../redux/actions/creators/currentUser';

import './FriendsList.scss';

export default function CurrentUser() {
  const user = useSelector((store) => store.currentUser);
  const dispatch = useDispatch();
  const { userId } = useParams();
  useEffect(() => { (dispatch(loadCurrentUser(userId))); }, []);

  return (
    <div className="friends-list">
      <h2>Friends</h2>
      <ul>
        {user?.friends?.map((friend) => (
          <li>
            {friend.name}
            <RemoveCircleOutlineIcon onClick={() => dispatch(addOrRemoveFriend(userId, friend._id, user.friends, 'REMOVE_FRIEND'))} />

          </li>
        ))}
      </ul>
    </div>
  );
}
