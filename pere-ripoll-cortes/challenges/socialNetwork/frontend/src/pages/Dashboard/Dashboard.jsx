/* eslint-disable no-underscore-dangle */
import React from 'react';
import './Dashboard.css';
import { useSelector } from 'react-redux';
import {
  updateFriends, updateEnemies, deleteEnemy, deleteFriend,
} from '../../redux/actions/actionCreators';

function Dashboard() {
  const allUsers = useSelector(({ userData }) => userData);
  const objId = '611cae257cfd041e79378d07';
  const user = allUsers[0]?.filter((e) => e._id === objId);

  function checkFriends(userId, otherId) {
    if (user[0]?.friends?.some((h) => h._id === otherId)) {
      deleteFriend(userId, otherId);
    }
    console.log(user[0]?.friends?.some((h) => h._id === otherId));
    updateEnemies(userId, otherId);
  }

  function checkEnemies(userId, otherId) {
    if (user[0]?.adversaries?.some((h) => h._id === otherId)) {
      deleteEnemy(userId, otherId);
    }
    console.log(user[0]?.adversaries?.some((h) => h._id === otherId));
    updateFriends(userId, otherId);
  }

  return (
    <>
      {(user)
      && (
      <div className="wrapper">
        {allUsers[0]?.map((e) => (
          <div className="user_data">
            <img src={e.picture} alt="i" />
            <p>
              name:
              {' '}
              {e.name}
            </p>
            <p>
              Age:
              {' '}
              {e.age}
            </p>
            <p>
              Gender:
              {' '}
              {e.gender}
            </p>
            <button type="button">Profile</button>
            {(user[0]?.friends?.some((h) => h._id === e._id))
              ? <button className={e.name} type="button" onClick={() => checkFriends(objId, e._id)}>Add as a Enemy</button>
              : <button className={e.name} type="button" onClick={() => checkEnemies(objId, e._id)}>Add as a Friend</button>}

          </div>
        ))}
      </div>
      )}
    </>
  );
}

export default Dashboard;
