/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadCurrentUser, addOrRemoveFriend, addOrRemoveAdversarie } from '../../redux/actions/creators/currentUser';
import FriendsList from '../FriendsList';

export default function CurrentUser() {
  const user = useSelector((store) => store.currentUser);
  const usersList = useSelector(({ users }) => users);
  const dispatch = useDispatch();
  const { userId } = useParams();
  useEffect(() => { (dispatch(loadCurrentUser(userId))); }, []);

  return (
    <div className="user-details">
      <section>
        <h2>Persons in the world</h2>
        <ul>
          {usersList.map((person) => (
            <li key={`${person._id}`}>
              {person.name}
              {user?.friends?.some((friend) => friend._id === person._id)
                ? <button type="button" onClick={() => dispatch(addOrRemoveFriend(userId, person._id, user.friends, 'REMOVE_FRIEND'))}>Remove Friend</button>
                : <button type="button" onClick={() => dispatch(addOrRemoveFriend(userId, person._id, user.friends, 'ADD_FRIEND'))}>Add Friend</button>}
              {user?.adversiaries?.some((adversiaries) => adversiaries._id === person._id)
                ? <button type="button" onClick={() => dispatch(addOrRemoveAdversarie(userId, person._id, user.adversaries, 'REMOVE_ADVERSARIE'))}>Remove Adversarie</button>
                : <button type="button" onClick={() => dispatch(addOrRemoveAdversarie(userId, person._id, user.adversaries, 'ADD_ADVERSARIE'))}>Add Adversarie</button>}
            </li>
          ))}
        </ul>
        <FriendsList />
      </section>
    </div>
  );
}
