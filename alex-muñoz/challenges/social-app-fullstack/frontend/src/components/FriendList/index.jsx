import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadFriends } from '../../redux/actions/creators/friends';

export default function FriendList() {
  const friendsList = useSelector(({ friends }) => friends);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadFriends());
  }, []);

  return (
    <div className="friendList">
      <h1>User Details</h1>
      <h2>Friends</h2>
      <main>
        <ul>
          {friendsList.map((friend) => (
            <li key={`${friend.name}`}>
              <button
                type="button"
              >
                -
              </button>
              {friend.name}
              <button
                type="button"
              >
                +
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
