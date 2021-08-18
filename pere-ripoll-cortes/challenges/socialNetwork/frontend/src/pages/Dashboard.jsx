/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import './Dashboard.css';
import { useDispatch, useSelector } from 'react-redux';
import Friends from '../components/friends/Friends';
import Enemies from '../components/enemies/Enemies';
import { loadUsers } from '../redux/actions/actionCreators';

function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsers);
  }, []);

  // const objId = '611bc278d099c1190e3313d6';
  const user = useSelector(({ userData }) => userData);

  return (
    <>
      {user.map((e) => (
        <div className="user_data">
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
            EyeColor:
            {' '}
            {e.eyeColor}
          </p>
          <p>
            Gender:
            {' '}
            {e.gender}
          </p>
          <p>
            FavoriteFruit:
            {' '}
            {e.favoriteFruit}
          </p>
        </div>
      ))}
      <div className="people_data">
        <div className="friends_data">
          <Friends />
        </div>
        <div className="enemy_data">
          <Enemies />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
