/* eslint-disable no-alert */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadUsers from '../../redux/actions/actionCreators';

export default function Userslist() {
  const mainUser = '611e90351bdcaa3504eff371';
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);

  async function handleAdversaries(userId, adversariesId) {
    const { data } = await axios(`/api/users/${userId}`);
    await axios.put(`/api/users/${userId}`, {
      adversaries: [...data.adversaries, { _id: adversariesId }]
    });
  }
  async function handleFriends(userId, friendsId) {
    const { data } = await axios(`/api/users/${userId}`);
    await axios.put(`/api/users/${userId}`, {
      friends: [...data.friends, { _id: friendsId }]
    });
  }

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  return (
    <ul>
      {
      users?.map((user) => (
        <li key={user._id}>
          {user.name}
          <button type="button" onClick={() => handleAdversaries(mainUser, user._id)}>Adversaries</button>
          <button type="button" onClick={() => handleFriends(mainUser, user._id)}>Friend</button>
        </li>
      ))
      }
    </ul>
  );
}
