/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadCurrentUser, addOrRemoveFriend, addOrRemoveAdversarie } from '../../redux/actions/creators/currentUser';
import FriendsList from '../FriendsList';
import AdversariesList from '../AdversariesList';
import Avatar from '../Avatar';
import List from '../List';
import filterPersonsList from '../../utils/filtrerPersonsListFunction';
import './CurrentUser.scss';

export default function CurrentUser() {
  const user = useSelector((store) => store.currentUser);
  const usersList = useSelector(({ users }) => users);
  const dispatch = useDispatch();
  const { userId } = useParams();
  useEffect(() => { (dispatch(loadCurrentUser(userId))); }, []);

  return (
    <section className="user-details">
      <div className="user-details__main-info">
        <Avatar />
        <h1>{`${user.name}`}</h1>
      </div>
      <div className="user-details__friends-adversaries-list">
        <FriendsList />
        <AdversariesList />
      </div>
      <List />
      <input type="text" placeholder="Search people" onChange={(event) => filterPersonsList(event.target.value, usersList)} name="" id="" />
      <ul className="user-details__persons-list">
        {usersList.map((person) => (
          <li key={`${person._id}`}>
            {person.name}
            {user?.friends?.some((friend) => friend._id === person._id)
              ? <button type="button" onClick={() => dispatch(addOrRemoveFriend(userId, person._id, user.friends, 'REMOVE_FRIEND'))}>Remove Friend</button>
              : <button type="button" onClick={() => dispatch(addOrRemoveFriend(userId, person._id, user.friends, 'ADD_FRIEND'))}>Add Friend</button>}
            {user?.adversaries?.some((adversaries) => adversaries._id === person._id)
              ? <button type="button" onClick={() => dispatch(addOrRemoveAdversarie(userId, person._id, user.adversaries, 'REMOVE_ADVERSARIE'))}>Remove Adversarie</button>
              : <button type="button" onClick={() => dispatch(addOrRemoveAdversarie(userId, person._id, user.adversaries, 'ADD_ADVERSARIE'))}>Add Adversarie</button>}
          </li>
        ))}
      </ul>
    </section>
  );
}
