/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector } from 'react-redux';

import Navs from '../Navs/Navs';

import '../../styles/Friends.scss';

export default function Friends() {
  const user = useSelector(((store) => store.user));
  const persons = useSelector(((store) => store.persons));

  function loadPicture(friendId) {
    const friend = persons?.find((person) => person._id === friendId);
    return (
      <img src={friend.picture} alt={`${friend.name} portrait`} />
    );
  }

  return (
    <>
      <Navs />
      <section className="friends">
        <h2>Friends</h2>
        <ul className="friends__list">
          {
            (user.friends?.length <= 0)
              ? (
                <span className="friends__noFriends">
                  I finally faced the fact that it is not a crime not having friends.
                  <br />
                  Being alone means you have fewer problems.
                  <br />
                  <br />
                  <quote>Whitney Houston</quote>
                </span>
              )
              : user.friends?.map((friend) => (
                <li key={friend.name}>
                  <span>{friend.name}</span>
                  {loadPicture(friend._id)}
                </li>
              ))
            }
        </ul>
      </section>
    </>
  );
}
