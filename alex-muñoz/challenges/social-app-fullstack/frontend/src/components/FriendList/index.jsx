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
      <h1>Hola Panitas</h1>
      <main>
        <ul>
          {friendsList.map((friend) => (
            <li>
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
