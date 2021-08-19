import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import loadUser from '../../redux/actions/actionCreators';
// updateOneById
import './friendsList.scss';

export default function FriendsList() {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);

  //   function handleAddClick(friend, adversaries) {
  //     dispatch(updateOneById(friend, adversaries));
  //   }
  return (
    <section>
      {users.map((user) => (
        <>
          <div className="friend__adversaries">
            <button
              type="button"
              className="adversaries__button"
            //   onClick={() => handleAddClick(adversaries)}
            >
              <img src="https://img.icons8.com/ios-glyphs/30/000000/remove-user-male.png" alt="adversaries" />
            </button>

            <div className="friends__img-container">
              <img className="friend__img" src={user?.picture} alt="profile" />
            </div>
            <span>{user?.name}</span>
            <div>
              <button
                type="button"
                className="friend__button"
                // onClick={() => handleAddClick(friend)}
              >
                <img src="https://img.icons8.com/ios-glyphs/30/000000/add-user-male.png" alt="friends" />
              </button>

            </div>
          </div>
        </>
      ))}
    </section>
  );
}
