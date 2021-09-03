/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector } from 'react-redux';
import Friends from '../../components/friends/Friends';
import Enemies from '../../components/enemies/Enemies';

export default function Myprofile() {
  const objId = '611cae257cfd041e79378d07';
  const allUsers = useSelector(({ userData }) => userData);
  const user = allUsers[0]?.filter((e) => e._id === objId);

  return (
    <>
      {user?.map((e) => (
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
          FRIENDS:
          <Friends />
        </div>
        <div className="enemy_data">
          ENEMIES:
          <Enemies />
        </div>
      </div>
    </>
  );
}
